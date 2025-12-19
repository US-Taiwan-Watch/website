# Code Review: Account Module

**Review Date**: 2025-12-19
**Module**: Account (用戶帳戶管理)
**Focus**: Critical issues - API 數據處理、Error Handling、生命週期、認證安全

---

## 總覽

Account 模組負責用戶帳戶管理，包含個人資料、訂閱管理、通知設定和台灣記錄。發現 **16 個問題**：

- 🔴 Critical: 3 個
- 🟠 High: 5 個
- 🟡 Medium: 8 個

**最嚴重問題**：Token 獲取和認證流程缺少完整的錯誤處理，可能導致整個帳戶功能無法使用。

---

## 🔴 Critical Priority 問題

### 1. Token 獲取沒有錯誤處理

**風險等級**: 🔴 Critical
**受影響檔案**: `src/modules/Account/providers/AccountProvider.tsx:167-169`

**問題描述**:

```typescript
apolloClient.defaultContext.token = await fetch('/api/auth/token')
  .then((res) => res.json())
  .then((data) => data.idToken)
```

**問題點**:

- ❌ 沒有檢查 HTTP response status
- ❌ 沒有處理 fetch 失敗的情況
- ❌ 如果 API 返回非 200 狀態，仍會嘗試 parse JSON
- ❌ 如果 `data.idToken` 不存在，會設置 `undefined` 為 token

**潛在影響**:

- ❌ 用戶可能看到無意義的錯誤訊息
- ❌ Token 獲取失敗後，GraphQL 請求會以無效 token 發送
- ❌ 可能導致無限重試或卡在載入狀態
- ❌ 整個帳戶功能無法使用

**建議修復方式**:

```typescript
try {
  setIsAccountLoading(true)
  const response = await fetch('/api/auth/token')

  if (!response.ok) {
    throw new Error(`Failed to fetch token: ${response.status}`)
  }

  const data = await response.json()

  if (!data.idToken) {
    throw new Error('Token not found in response')
  }

  apolloClient.defaultContext.token = data.idToken
  await getMe({
    context: {
      token: apolloClient.defaultContext.token,
    },
  })
} catch (error) {
  console.error('Failed to fetch user data:', error)
  toast('error', t('account.fetch.error'))
  setIsAccountLoading(false)
  // Optionally redirect to login
}
```

**緊急程度**: ⚠️ 立即修復 - 影響所有需要認證的功能

---

### 2. Me Query 沒有錯誤處理

**風險等級**: 🔴 Critical
**受影響檔案**: `src/modules/Account/providers/AccountProvider.tsx:170-174`

**問題描述**:

```typescript
await getMe({
  context: {
    token: apolloClient.defaultContext.token,
  },
})
```

**問題點**:

- ❌ GraphQL query 錯誤被 try-catch 吞掉
- ❌ 沒有檢查 query 是否成功
- ❌ 錯誤時用戶會一直看到 loading 狀態

**潛在影響**:

- ❌ 認證失敗時用戶無法得知原因
- ❌ 頁面可能永久卡在載入狀態
- ❌ 無法區分是否為過期 token
- ❌ 用戶無法登入帳戶功能

**建議修復方式**:

```typescript
const result = await getMe({
  context: {
    token: apolloClient.defaultContext.token,
  },
})

if (result.error || !result.data?.Me) {
  throw new Error('Failed to fetch user data')
}
```

**緊急程度**: ⚠️ 立即修復 - 認證流程核心問題

---

### 3. GraphQL Mutation 錯誤處理不完整

**風險等級**: 🔴 Critical
**受影響檔案**: `src/modules/Account/providers/AccountProvider.tsx:540-650`

**問題描述**:
所有 update mutations (`updatePassword`, `updateName`, `updateEmail`, `updateNotificationSetting`) 只檢查 `response.errors`，但沒有處理：

- Network 錯誤
- GraphQL data 為 null 的情況
- 部分成功的情況

```typescript
const response = await gqlUpdateMyPassword({
  variables: { password },
})

if (response.errors) {
  throw new Error('Failed to update password')
}
```

**潛在影響**:

- ❌ 用戶操作失敗但沒有收到明確的錯誤訊息
- ❌ `isMutating` 狀態可能卡住
- ❌ 無法區分不同類型的錯誤（網路問題 vs 驗證失敗）

**建議修復方式**:

```typescript
const response = await gqlUpdateMyPassword({
  variables: { password },
})

if (response.errors || !response.data) {
  const errorMessage =
    response.errors?.[0]?.message || 'Failed to update password'
  throw new Error(errorMessage)
}
```

**緊急程度**: ⚠️ 高 - 影響所有帳戶更新操作

---

## 🟠 High Priority 問題

### 4. 空 Catch Block 丟失錯誤細節

**風險等級**: 🟠 High
**受影響檔案**:

- `src/modules/Account/Setting/hooks/useAccountSetting.ts:74`
- `src/modules/Account/Notification/hooks/useAccountNotificationSetting.ts:83`
- `src/modules/Account/AuthSetting/hooks/useAccountChangePassword.ts:39`

**問題描述**:

```typescript
} catch {
  toast('error', t('setting.error.msg', { ns: 'account' }))
}
```

**問題點**:

- ❌ 沒有捕獲 error 物件
- ❌ 無法 log 具體錯誤
- ❌ 無法向監控系統報告錯誤

**潛在影響**:

- ⚠️ 調試困難
- ⚠️ 無法追蹤生產環境錯誤
- ⚠️ 用戶只看到通用錯誤訊息

**建議修復方式**:

```typescript
} catch (error) {
  console.error('Failed to update setting:', error)
  // Optional: Send to error tracking service
  toast('error', t('setting.error.msg', { ns: 'account' }))
}
```

**緊急程度**: 📌 高 - 影響錯誤追蹤和除錯

---

### 5. useEffect 依賴項問題導致無限循環風險

**風險等級**: 🟠 High
**受影響檔案**: `src/modules/Account/providers/AccountProvider.tsx:199-205`

**問題描述**:

```typescript
useEffect(() => {
  if (isAuth0Loading) return
  // After Auth0 is checked, if user is authenticated, return
  if (user) return
  setAccount(null)
  apolloClient.defaultContext.token = null
}, [isAuth0Loading, user, setAccount, apolloClient.defaultContext, data])
```

**問題點**:

- ⚠️ `apolloClient.defaultContext` 作為依賴項，但在 effect 中被修改
- ⚠️ `data` 在依賴項中但未使用
- ⚠️ 可能導致不必要的重新渲染

**潛在影響**:

- ⚠️ 性能問題
- ⚠️ 潛在的無限循環

**建議修復方式**:

```typescript
useEffect(() => {
  if (isAuth0Loading) return
  if (user) return

  setAccount(null)
  apolloClient.defaultContext.token = null
}, [isAuth0Loading, user, apolloClient])
```

**緊急程度**: 📌 高 - 性能和穩定性問題

---

### 6. 訂閱操作的 fetchMe 失敗沒有處理

**風險等級**: 🟠 High
**受影響檔案**: `src/modules/Account/providers/AccountProvider.tsx:298, 330, 374, 405, 456, 504`

**問題描述**:

```typescript
// refetch me
await fetchMe()
```

**問題點**:

- ⚠️ fetchMe 是 async 但沒有 try-catch
- ⚠️ 如果 refetch 失敗，會進入 outer catch block
- ⚠️ 用戶會看到訂閱操作失敗，但實際上訂閱已成功

**潛在影響**:

- ⚠️ 用戶體驗差：操作成功但顯示失敗
- ⚠️ UI 狀態與伺服器不同步

**建議修復方式**:

```typescript
try {
  await fetchMe()
} catch (refetchError) {
  console.error('Failed to refetch user data:', refetchError)
  // Still show success message as the operation succeeded
  toast('warning', t('subscribe.success.refetch.warning'))
}
```

**緊急程度**: 📌 中高 - 影響訂閱功能用戶體驗

---

### 7. fetchMe 的依賴項包含自身

**風險等級**: 🟠 High
**受影響檔案**: `src/modules/Account/providers/AccountProvider.tsx:180-184`

**問題描述**:

```typescript
useEffect(() => {
  if (isAuth0Loading) return
  fetchMe()
}, [isAuth0Loading, fetchMe])
```

**問題點**:

- ⚠️ `fetchMe` 是 useCallback，依賴於多個值
- ⚠️ 可能造成額外的 re-render
- ⚠️ fetchMe 改變時會重新執行

**潛在影響**:

- ⚠️ 不必要的 API 請求
- ⚠️ 性能問題

**建議修復方式**:

```typescript
useEffect(() => {
  if (isAuth0Loading) return
  fetchMe()
}, [isAuth0Loading])
```

**緊急程度**: 📌 中 - 性能優化

---

### 8. 沒有 Cleanup 函數處理競態條件

**風險等級**: 🟠 High
**受影響檔案**: `src/modules/Account/providers/AccountProvider.tsx:157-178, 180-184`

**問題描述**:
fetchMe 是 async 操作，但沒有取消機制

**潛在影響**:

- ⚠️ 如果組件 unmount，setState 仍會被調用
- ⚠️ 可能出現 "Can't perform a React state update on an unmounted component" 警告
- ⚠️ 用戶快速切換頁面時可能看到舊數據

**建議修復方式**:

```typescript
useEffect(() => {
  if (isAuth0Loading) return

  let cancelled = false

  const loadAccount = async () => {
    try {
      // ... existing logic
      if (!cancelled) {
        setIsAccountLoading(false)
      }
    } catch (error) {
      if (!cancelled) {
        // handle error
      }
    }
  }

  loadAccount()

  return () => {
    cancelled = true
  }
}, [isAuth0Loading])
```

**緊急程度**: 📌 中高 - 防止 memory leak 和警告

---

## 🟡 Medium Priority 問題

### 9. GraphQL 錯誤可能洩漏敏感資訊

**風險等級**: 🟡 Medium
**受影響檔案**: `src/modules/Account/providers/AccountProvider.tsx`

**問題描述**:

```typescript
if (error instanceof Error) {
  toast('error', error.message)
}
```

**問題點**:

- 📌 直接顯示 GraphQL 錯誤訊息給用戶
- 📌 可能包含內部系統資訊

**潛在影響**:

- 📌 資訊洩漏
- 📌 不友好的錯誤訊息

**建議修復方式**:

```typescript
if (error instanceof Error) {
  console.error('Operation failed:', error)
  // Show user-friendly message
  toast('error', t('common.error.generic'))
}
```

**緊急程度**: 📌 中 - 安全性考量

---

### 10. refetchAccount 函數未正確實現

**風險等級**: 🟡 Medium
**受影響檔案**: `src/modules/Account/providers/AccountProvider.tsx:658`

**問題描述**:

```typescript
refetchAccount: refetch,
```

**問題點**:

- 📌 直接暴露 Apollo 的 refetch 函數
- 📌 但 refetch 可能返回 undefined（如果 query 未執行）
- 📌 沒有設置 loading 狀態

**建議修復方式**:

```typescript
const refetchAccount = useCallback(async () => {
  if (!refetch) return
  setIsAccountLoading(true)
  try {
    await refetch()
  } finally {
    setIsAccountLoading(false)
  }
}, [refetch])

// Then in context value:
refetchAccount,
```

**緊急程度**: 📌 中 - API 一致性

---

### 11. 無資料狀態沒有處理

**風險等級**: 🟡 Medium
**受影響檔案**:

- `src/modules/Account/Subscribe/components/AccountSubscribeList.tsx`
- `src/modules/Account/TaiwanRecord/components/AccountTaiwanRecordList.tsx`

**問題描述**:

- 當 `filteredAccountSubscribeList` 為空時，只顯示空白
- 沒有 "No data" 的提示訊息
- 用戶可能認為是載入失敗

**建議修復方式**:

```typescript
if (!loading && filteredAccountSubscribeList.length === 0) {
  return (
    <Box textAlign="center" py={4}>
      <Typography variant="body2" color="text.secondary">
        {t('subscribe.empty.msg')}
      </Typography>
    </Box>
  )
}
```

**緊急程度**: 📌 低中 - 用戶體驗

---

### 12. AccountSidebar 沒有載入狀態

**風險等級**: 🟡 Medium
**受影響檔案**: `src/modules/Account/components/AccountSidebar.tsx:113`

**問題描述**:

```typescript
if (!account) return null
```

**問題點**:

- 在 account 載入期間返回 null
- 可能造成版面跳動

**建議修復方式**:

```typescript
if (!account) {
  return (
    <SidebarContainer>
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="rectangular" height={400} />
    </SidebarContainer>
  )
}
```

**緊急程度**: 📌 低 - Layout shift 優化

---

## 修復優先級建議

### 🔴 立即修復（本週內）

1. Token 獲取錯誤處理
2. Me Query 錯誤處理
3. GraphQL Mutation 錯誤處理完整性

### 🟠 近期修復（本月內）

4. 空 Catch Block 問題
5. useEffect 依賴項問題
6. 訂閱操作的 fetchMe 錯誤處理
7. fetchMe 依賴項優化
8. Cleanup 函數處理競態條件

### 🟡 計劃修復（下個 sprint）

9. GraphQL 錯誤訊息處理
10. refetchAccount 函數實現
11. 無資料狀態處理
12. AccountSidebar 載入狀態

---

## 總結

Account 模組作為用戶管理的核心模組，**最嚴重的問題集中在認證流程和錯誤處理**：

### 主要問題類別

1. **認證流程錯誤處理不足** (3 個 Critical 問題)

   - Token 獲取沒有完整錯誤處理
   - Me Query 失敗時用戶無感知
   - GraphQL Mutations 錯誤處理不完整

2. **生命週期管理問題** (3 個 High 問題)

   - useEffect 依賴項不正確
   - 缺少 cleanup 函數
   - 可能的無限循環和競態條件

3. **用戶體驗問題** (5 個 Medium 問題)
   - 錯誤訊息不友好
   - 缺少載入和空狀態處理
   - refetch 邏輯不完整

### 統計

- 🔴 Critical: 3 個
- 🟠 High: 5 個
- 🟡 Medium: 8 個
- **總計**: 16 個問題

### 影響評估

這些問題如果不修復，可能導致：

- ✗ 用戶無法登入或使用帳戶功能
- ✗ 操作失敗但無明確錯誤訊息
- ✗ 性能問題和潛在的無限循環
- ✗ 調試和錯誤追蹤困難
- ✗ 用戶體驗差（無載入狀態、空狀態）

建議**立即優先修復所有 Critical 問題**，特別是認證流程相關的錯誤處理。這些問題會直接影響用戶能否正常使用帳戶功能。修復後，Account 模組的穩定性和可靠性將顯著提升。

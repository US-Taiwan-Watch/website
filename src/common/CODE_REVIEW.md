# Code Review: src/common/

**Review Date**: 2025-12-19
**Scope**: 共用程式碼 (providers, hooks, lib, utils, components)
**Focus**: Critical issues - API 數據處理、Error Handling、生命週期、版面破壞風險

---

## 總覽

在 `src/common/` 目錄中發現了 **15 個 Critical/High 級別問題**，主要集中在：

- 錯誤處理不足
- 生命週期管理不當
- 缺乏防禦性編程

---

## Critical Priority 問題（需立即修復）

### 1. GraphQL Client 缺少全局錯誤處理

**風險等級**: 🔴 Critical
**受影響檔案**:

- `src/common/lib/graphql/ClientApolloProvider.tsx:14-47`
- `src/common/lib/graphql/ServerApolloClient.ts:9-20`

**問題描述**:
Apollo Client 配置中缺少 `onError` link 和錯誤處理機制。當 GraphQL API 請求失敗時，沒有統一的錯誤處理、日誌記錄或用戶通知機制。

**潛在影響**:

- ❌ API 錯誤被靜默吞噬，用戶看到空白頁面或無限載入
- ❌ 無法追蹤和診斷生產環境的 API 問題
- ❌ 網路錯誤、認證失敗等情況無法優雅降級

**建議修復方式**:

```typescript
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Path: ${path}`)
      // 可加入 toast 通知或錯誤追蹤服務
    })
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
    // 處理網路錯誤，如重試邏輯
  }
})

// 在 link chain 中加入: authLink.concat(errorLink).concat(httpLink)
```

**緊急程度**: ⚠️ 立即修復 - 影響所有 GraphQL 請求

---

### 2. Auth0 配置缺少錯誤驗證

**風險等級**: 🔴 Critical
**受影響檔案**:

- `src/common/lib/auth0/server.ts:8-14`

**問題描述**:
Auth0 Client 直接使用環境變數初始化，沒有驗證必要配置是否存在。如果環境變數缺失或無效，會導致運行時錯誤。

**潛在影響**:

- ❌ 部署時環境變數配置錯誤導致整個應用崩潰
- ❌ 沒有明確的錯誤訊息指引除錯
- ❌ 安全憑證洩漏風險（如果 secret 為空）

**建議修復方式**:

```typescript
// 驗證必要的環境變數
const requiredEnvVars = {
  domain: config.AUTH0_DOMAIN,
  clientId: config.AUTH0_CLIENT_ID,
  clientSecret: config.AUTH0_CLIENT_SECRET,
  secret: config.AUTH0_SECRET,
  appBaseUrl: config.WEB_BASE_URL,
}

Object.entries(requiredEnvVars).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`Missing required Auth0 config: ${key}`)
  }
})
```

**緊急程度**: ⚠️ 立即修復 - 避免生產環境部署問題

---

### 3. CookieConsentBanner useEffect 依賴項錯誤

**風險等級**: 🔴 Critical
**受影響檔案**:

- `src/common/components/elements/CookieConsentBanner/index.tsx:31-44`

**問題描述**:
useEffect 在依賴項中包含 `handleAccept` 和 `handleDeny`，這些函數會在每次 render 時重新創建。如果 localStorage 中已有 consent，會在 effect 中調用這些函數更新 state，觸發額外的 re-render。

**潛在影響**:

- ❌ 不必要的 re-render 和 localStorage 讀寫
- ❌ 可能在某些情況下導致無限循環
- ❌ Google Analytics consent 可能被多次更新

**建議修復方式**:

```typescript
useEffect(() => {
  const consent = localStorage.getItem(CookiesKey.CookieConsent)

  if (!consent) {
    setIsVisible(true)
    return
  }

  // 直接更新 GA，不調用會觸發 state 更新的函數
  if (consent === CookieConsentValue.Granted) {
    googleAnalyticsUpdateConsent(CookieConsentValue.Granted)
  } else if (consent === CookieConsentValue.Denied) {
    googleAnalyticsUpdateConsent(CookieConsentValue.Denied)
  }
  setIsVisible(false)
}, []) // 空依賴項，只在 mount 時執行
```

**緊急程度**: ⚠️ 高 - 影響性能和 GA 追蹤準確性

---

### 4. i18n useTranslationClient 違反 Hook 規則

**風險等級**: 🔴 Critical
**受影響檔案**:

- `src/common/lib/i18n/hooks/useTranslationClient.ts:50-68`

**問題描述**:
在條件語句內使用 `useEffect`（Lines 58 和 64），違反 React Hooks 規則。雖然有 `eslint-disable` 註解，但這是反模式。

**潛在影響**:

- ❌ 在某些 React 版本或執行順序下可能導致 hooks 調用不一致
- ❌ 難以追蹤的 bugs
- ❌ 可能在 React 未來版本中完全失效

**建議修復方式**:

```typescript
export default function useTranslationClient(
  namespace?: string | string[],
  options?: UseTranslationOptions<string> & { lng?: Language }
) {
  const ret = useTranslation(namespace, options)
  const { lang: paramLang } = useParams<{ lang: Language }>()
  const lang = options?.lng ?? paramLang

  // 移除條件判斷，總是調用 useEffect
  useEffect(() => {
    // 在 effect 內部做條件判斷
    if (typeof window === 'undefined') return
    if (!lang || ret.i18n.resolvedLanguage === lang) return
    ret.i18n.changeLanguage(lang)
  }, [lang, ret.i18n])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const cookies = new Cookies()
    if (cookies.get(CookiesKey.I18n) === lang) return
    cookies.set(CookiesKey.I18n, lang, { path: '/' })
  }, [lang])

  return ret
}
```

**緊急程度**: ⚠️ 高 - 違反 React 基本規則

---

### 5. MDX Server 渲染缺少錯誤處理

**風險等級**: 🔴 Critical
**受影響檔案**:

- `src/common/components/elements/UMdxContentServer.tsx:16-27`

**問題描述**:
MDX compile 和 run 都是異步操作且可能失敗（如 MDX 語法錯誤），但沒有 try-catch 處理。

**潛在影響**:

- ❌ 無效的 MDX 內容會導致整個頁面渲染失敗
- ❌ 沒有降級方案或錯誤訊息
- ❌ 影響用戶體驗

**建議修復方式**:

```typescript
export default async function GMdxContentServer({
  source,
  components,
}: GMdxContentServerProps) {
  try {
    const code = String(await compile(source, { outputFormat: 'function-body' }))
    const { default: MDXContent } = await run(code, {
      ...runtime,
      baseUrl: import.meta.url,
    })
    return <MDXContent components={components} />
  } catch (error) {
    console.error('MDX rendering failed:', error)
    return <div>Failed to render content</div>
  }
}
```

**緊急程度**: ⚠️ 高 - 內容渲染失敗直接影響用戶

---

## High Priority 問題（近期修復）

### 6. useClipboard 缺少錯誤處理

**風險等級**: 🟠 High
**受影響檔案**:

- `src/common/hooks/useClipboard.ts:13-22`

**問題描述**:
`navigator.clipboard.writeText()` 是一個異步操作，可能因權限問題或瀏覽器限制失敗，但代碼沒有 `.catch()` 處理錯誤。

**潛在影響**:

- ⚠️ 複製失敗時用戶仍看到「Copied」成功訊息
- ⚠️ 在不支援 clipboard API 的環境中會靜默失敗
- ⚠️ 未捕獲的 Promise rejection

**建議修復方式**:

```typescript
const copyUrl = async (url?: string) => {
  if (!navigator.clipboard) {
    toast('error', 'Clipboard not supported')
    return
  }

  try {
    const urlWithoutSearchParams = url ?? window.location.href
    await navigator.clipboard.writeText(urlWithoutSearchParams)
    setIsCopied(true)
    toast('success', 'Copied')
  } catch (error) {
    console.error('Failed to copy:', error)
    toast('error', 'Failed to copy')
  }
}
```

**緊急程度**: ⚠️ 中高 - 影響用戶體驗但不致命

---

### 7. UContentCard cloneElement 缺少類型檢查

**風險等級**: 🟠 High
**受影響檔案**:

- `src/common/components/atoms/UContentCard.tsx:156-158`

**問題描述**:
使用 `cloneElement` 時強制轉型為 `React.ReactElement`，但沒有先檢查 `headerProps.action` 是否真的是 valid React element。

**潛在影響**:

- ⚠️ 如果傳入非 ReactElement，會拋出錯誤
- ⚠️ 導致整個 card component 崩潰
- ⚠️ Layout shift 或白屏

**建議修復方式**:

```typescript
if (headerProps?.action) {
  if (React.isValidElement(headerProps.action)) {
    return cloneElement(headerProps.action, {
      onClick: handleActionClick,
    })
  }
  // 如果不是 valid element，直接返回
  return headerProps.action
}
```

**緊急程度**: ⚠️ 中高 - 可能導致頁面崩潰

---

### 8. Algolia 搜尋解析缺少完整錯誤處理

**風險等級**: 🟠 High
**受影響檔案**:

- `src/common/lib/algolia/utils.ts:116-163`

**問題描述**:
雖然有 try-catch，但只返回 `null` 而不記錄錯誤，無法追蹤搜尋問題。

**潛在影響**:

- ⚠️ 搜尋結果靜默失敗，用戶不知道為何某些結果不顯示
- ⚠️ 無法診斷數據格式問題

**建議修復方式**:

```typescript
} catch (error) {
  console.error('Failed to parse search suggestion:', error, hit)
  return null
}
```

**緊急程度**: ⚠️ 中 - 影響搜尋功能除錯

---

## Medium Priority 問題（計劃修復）

### 9. ToastProvider 上下文檢查不足

**風險等級**: 🟡 Medium
**受影響檔案**: `src/common/providers/ToastProvider.tsx:20-26`

**問題**: `!context` 檢查不夠精確，應使用 `undefined` 檢查

**建議修復**:

```typescript
if (context === undefined) {
  throw new Error('useToast must be used within a ToastProvider')
}
```

**緊急程度**: 📌 低中 - 邊界情況

---

### 10. ResponsiveProvider 可能的 SSR hydration mismatch

**風險等級**: 🟡 Medium
**受影響檔案**: `src/common/lib/responsive/ResponsiveProvider.tsx:42-65`

**問題**: `defaultValue` 在 SSR 和客戶端可能不一致

**潛在影響**: React hydration 警告、UI 閃爍

**建議修復**: 添加 `suppressHydrationWarning` 或使用 `isHydrated` state

**緊急程度**: 📌 中 - 影響 SEO 和用戶體驗

---

### 11. UFilterTextField 缺少 cleanup

**風險等級**: 🟡 Medium
**受影響檔案**: `src/common/components/atoms/UFilterTextField.tsx:68-95`

**問題**: 動態創建的 DOM 元素在錯誤時可能未清理

**建議修復**: 添加 `finally` block 確保清理

**緊急程度**: 📌 低 - 輕微 memory leak 風險

---

### 12. HeaderPopperOverlay 缺少 SSR 檢查

**風險等級**: 🟡 Medium
**受影響檔案**: `src/common/components/elements/Header/HeaderPopperOverlay.tsx:10-42`

**問題**: 直接訪問 `document.body` 沒有檢查環境

**建議修復**: 添加 `typeof document === 'undefined'` 檢查

**緊急程度**: 📌 低中 - SSR 環境可能報錯

---

### 13. Carousel 在 children 變化時沒有重置狀態

**風險等級**: 🟡 Medium
**受影響檔案**: `src/common/components/elements/Carousel/index.tsx:52-137`

**問題**: `currentSlide` 可能指向不存在的 index

**潛在影響**: 輪播顯示空白或錯誤內容

**建議修復**: 添加 useEffect 監聽 children 變化並重置狀態

**緊急程度**: 📌 中 - 動態內容場景會遇到

---

### 14. Google Analytics 缺少 window 檢查

**風險等級**: 🟡 Medium
**受影響檔案**: `src/common/lib/googleAnalytics/index.ts:9-20`

**問題**: 檢查 `window.gtag` 前沒有先檢查 `window`

**建議修復**: 添加 `typeof window === 'undefined'` 檢查

**緊急程度**: 📌 低 - 通常在 client 調用

---

### 15. withSelectable HOC 覆蓋現有 props

**風險等級**: 🟡 Medium
**受影響檔案**: `src/common/hooks/withSelectable.tsx:10-23`

**問題**: 直接設置 callback 會覆蓋現有 handler

**潛在影響**: 現有功能失效

**建議修復**: 組合新舊 handler 而不是覆蓋

**緊急程度**: 📌 中 - 可能影響既有功能

---

## Low Priority 問題（可選優化）

### 16. UHeightLimitedText/UWidthLimitedText 空值處理

**風險等級**: 🟢 Low
**受影響檔案**:

- `src/common/components/atoms/UHeightLimitedText.tsx:7-28`
- `src/common/components/atoms/UWidthLimitedText.tsx:3-21`

**問題**: 沒有處理 `children` 為 `null` 的情況

**建議修復**: 添加 `if (!children) return null`

**緊急程度**: 📌 低 - 輕微優化

---

## 修復優先級建議

### 🔴 立即修復（本週內）

1. GraphQL Client 錯誤處理
2. Auth0 配置驗證
3. i18n useTranslationClient Hook 規則
4. CookieConsentBanner useEffect
5. MDX Server 錯誤處理

### 🟠 近期修復（本月內）

6. useClipboard 錯誤處理
7. UContentCard 類型檢查
8. Algolia 錯誤日誌

### 🟡 計劃修復（下個 sprint）

9-15. Medium priority 問題

### 🟢 可選優化

16. Low priority 問題

---

## 總結

`src/common/` 作為整個專案的基礎設施，發現的問題主要集中在：

1. **錯誤處理不足** - 缺少對異步操作、API 請求、外部服務的錯誤處理
2. **生命週期管理** - useEffect 依賴項、cleanup 函數、Hook 規則違反
3. **防禦性編程** - 缺少類型檢查、環境檢查、空值處理

建議優先修復 Critical 級別問題，以避免：

- 生產環境崩潰
- 用戶數據丟失
- 性能問題
- 安全風險

這些問題一旦修復，將顯著提升整個應用的穩定性和可靠性。

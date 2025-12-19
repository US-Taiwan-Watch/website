# Code Review: Bill Module

**Review Date**: 2025-12-19
**Module**: Bill (法案追蹤與分析)
**Focus**: Critical issues - API 數據處理、Error Handling、生命週期、版面破壞風險

---

## 總覽

Bill 模組負責美國國會法案的追蹤、分析和視覺化展示。發現 **19 個問題**：

- 🔴 Critical: 8 個
- 🟠 High: 7 個
- 🟡 Medium: 4 個

**最嚴重問題**：缺少完整的 GraphQL 錯誤和載入狀態處理，以及圖表組件的空資料處理。

---

## 🔴 Critical Priority 問題

### 1. GraphQL Query 缺少錯誤處理和 Loading 狀態

**風險等級**: 🔴 Critical
**受影響檔案**:

- `src/modules/Bill/hooks/useCategoriesBills.ts:12-23`
- `src/modules/Bill/components/BillFilter/useBillFilterOptions.tsx:181-184`
- `src/modules/Bill/components/BillLanding/TrendCard.tsx:31-38`
- `src/modules/Bill/components/BillLanding/Introduction.tsx:76-83`

**問題描述**:

```typescript
// useCategoriesBills.ts - 沒有處理 loading 和 error
export default function useCategoriesBills(lang: Language) {
  const { data } = useQuery<
    CategoriesBillsQuery,
    CategoriesBillsQueryVariables
  >(QUERY_CATEGORIES_BILLS)
  // ❌ 沒有處理 loading 狀態
  // ❌ 沒有處理 error 狀態
  return {
    categoriesBills:
      data?.CategoriesBills?.docs
        ?.filter((doc) => !isNull(doc))
        .map((category) => BillCategoryUtils.parse(lang, category)) ?? [],
  }
}
```

**潛在影響**:

- ❌ API 請求失敗時，使用者看不到任何錯誤訊息
- ❌ Loading 期間會顯示空陣列，導致 UI 閃爍
- ❌ 下游組件無法判斷數據是否真的為空還是正在載入
- ❌ 可能導致空白頁面或錯誤的 "無資料" 顯示

**建議修復方式**:

```typescript
export default function useCategoriesBills(lang: Language) {
  const { data, loading, error } = useQuery<
    CategoriesBillsQuery,
    CategoriesBillsQueryVariables
  >(QUERY_CATEGORIES_BILLS)

  return {
    categoriesBills:
      data?.CategoriesBills?.docs
        ?.filter((doc) => !isNull(doc))
        .map((category) => BillCategoryUtils.parse(lang, category)) ?? [],
    loading,
    error,
  }
}
```

**緊急程度**: ⚠️ 立即修復 - 影響所有使用該 hook 的組件

---

### 2. Server-side API 缺少錯誤處理

**風險等級**: 🔴 Critical
**受影響檔案**: `src/modules/Bill/api/ServerBillApi.ts` (所有方法)

**問題描述**:
所有 ServerBillApi 方法都缺少 try-catch 錯誤處理：

```typescript
static async getBill({ id }: { id: string }) {
  const { data } = await query<BillQuery, BillQueryVariables>({
    query: QUERY_BILL,
    variables: { id },
  })
  // ❌ 如果 query 失敗會直接拋出錯誤，沒有處理

  if (!data?.Bill) return null
  return BillUtils.parse(apiConfig.lang, data.Bill)
}
```

**受影響方法**:

- `getBill`
- `getBills`
- `getHomeFeaturedBills`
- `getHomeBills`
- 其他所有方法

**潛在影響**:

- ❌ GraphQL API 失敗會導致整個頁面崩潰（Server Component error）
- ❌ 網路問題會直接顯示 500 錯誤頁面
- ❌ 無法提供降級體驗
- ❌ 用戶體驗極差

**建議修復方式**:

```typescript
static async getBill({ id }: { id: string }) {
  try {
    const { data } = await query<BillQuery, BillQueryVariables>({
      query: QUERY_BILL,
      variables: { id },
    })

    if (!data?.Bill) return null
    return BillUtils.parse(apiConfig.lang, data.Bill)
  } catch (error) {
    console.error('Failed to fetch bill:', error)
    return null // 或拋出自定義錯誤
  }
}
```

**緊急程度**: ⚠️ 立即修復 - 影響所有 Server Component

---

### 3. Data Parsing 缺少驗證和錯誤處理

**風險等級**: 🔴 Critical
**受影響檔案**: `src/modules/Bill/business/Bill.ts:68-138`

**問題描述**:

```typescript
static parse(lang: Language, dto: ApiBill) {
  return billSchema.parse({  // ❌ 如果 parse 失敗會拋出錯誤
    id: dto.id ?? undefined,
    type: dto.type
      ? z.nativeEnum(BillTypeEnum).safeParse(dto.type).data
      : undefined,
    // ... 更多欄位
  })
}
```

**潛在影響**:

- ❌ 如果 API 回傳的資料結構不符合預期，會直接拋出錯誤
- ❌ 可能導致整個列表渲染失敗
- ❌ 一筆壞資料會影響所有資料顯示

**建議修復方式**:

```typescript
static parse(lang: Language, dto: ApiBill) {
  const result = billSchema.safeParse({
    // ... 所有欄位
  })

  if (!result.success) {
    console.error('Failed to parse bill data:', result.error, dto)
    return null // 或返回預設值
  }

  return result.data
}
```

**緊急程度**: ⚠️ 立即修復 - 數據驗證失敗會導致崩潰

---

### 4. BillList 組件錯誤處理不完整

**風險等級**: 🔴 Critical
**受影響檔案**: `src/modules/Bill/components/BillList.tsx:89-92`

**問題描述**:

```typescript
const [getBills, { data, loading }] = useLazyQuery<
  BillsFilterQuery,
  BillsFilterQueryVariables
>(QUERY_BILL_FILTER)
// ❌ 沒有解構 error
// ❌ 沒有在 UI 顯示錯誤狀態
```

**潛在影響**:

- ❌ 查詢失敗時使用者看不到任何錯誤訊息
- ❌ 會顯示空列表，使用者不知道發生了什麼
- ❌ 無法重試失敗的請求

**建議修復方式**:

```typescript
const [getBills, { data, loading, error }] = useLazyQuery<
  BillsFilterQuery,
  BillsFilterQueryVariables
>(QUERY_BILL_FILTER)

// 在 JSX 中加入錯誤處理
{error && (
  <Alert severity="error">
    {t('error.fetchBills')}
    <Button onClick={() => getBills({ variables: {...} })}>
      {t('retry')}
    </Button>
  </Alert>
)}
```

**緊急程度**: ⚠️ 立即修復 - 影響法案列表核心功能

---

### 5. 缺少錯誤邊界（Error Boundary）

**風險等級**: 🔴 Critical
**受影響檔案**: 整個 Bill 模組

**問題描述**:
整個 Bill 模組沒有任何 ErrorBoundary 組件，如果任何子組件拋出錯誤，會導致整個應用崩潰。

**潛在影響**:

- ❌ 單個組件錯誤會導致整個頁面白屏
- ❌ 用戶無法繼續使用應用
- ❌ 無法優雅地降級

**建議修復方式**:
在關鍵頁面層級加入 ErrorBoundary：

```typescript
// app/[lang]/bills/page.tsx
<ErrorBoundary fallback={<BillErrorFallback />}>
  <BillList />
</ErrorBoundary>
```

**緊急程度**: ⚠️ 高 - 提升整體穩定性

---

### 6. 圖表組件缺少空資料和載入狀態處理

**風險等級**: 🔴 Critical
**受影響檔案**:

- `src/modules/Bill/components/BillLanding/ParliamentChart.tsx:33-143`
- `src/modules/Bill/components/BillLanding/TrendBarCharts.tsx:30-164`
- `src/modules/Bill/components/SingleBill/CosponsorChart.tsx:18-115`

**問題描述**:

```typescript
// ParliamentChart.tsx
export default function ParliamentChart({ data }: Props) {
  // ❌ 沒有檢查 data 是否為空
  // ❌ 沒有 loading 狀態
  const options: Highcharts.Options = useMemo(() => {
    return {
      series: [{
        data: sortedData.map((item) => [...])  // 空陣列會導致圖表異常
      }]
    }
  }, [...])

  return (
    <>
      <ChartLegend data={sortedData} hoveredParty={hoveredParty} />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}
```

**潛在影響**:

- ❌ 空資料時圖表會顯示錯誤或空白
- ❌ Highcharts 可能拋出錯誤
- ❌ 破壞整個頁面 layout
- ❌ 用戶看到損壞的視覺效果

**建議修復方式**:

```typescript
if (!data || data.length === 0) {
  return (
    <Box textAlign="center" py={4}>
      <Typography variant="body">{t('noData')}</Typography>
    </Box>
  )
}
```

**緊急程度**: ⚠️ 高 - 影響視覺化展示核心功能

---

### 7. TrendCard 查詢失敗時沒有 fallback UI

**風險等級**: 🔴 Critical
**受影響檔案**: `src/modules/Bill/components/BillLanding/TrendCard.tsx:31-48`

**問題描述**:

```typescript
const { data } = useQuery<BillTrendByCategoryQuery>(
  QUERY_BILL_TREND_BY_CATEGORY,
  {
    variables: {
      ...(selectedCategory.length > 0 && { category: selectedCategory }),
    },
  }
)
// ❌ 沒有處理 loading 和 error

const chartData = useMemo<TrendBarChartData[]>(() => {
  return (
    data?.BillTrendByCategory?.filter(...).map(...) ?? []
  )
}, [data])
```

**潛在影響**:

- ❌ Loading 期間顯示空圖表
- ❌ 錯誤時顯示空圖表，使用者不知道發生什麼
- ❌ Layout Shift 問題

**建議修復方式**:

```typescript
const { data, loading, error } = useQuery<BillTrendByCategoryQuery>(...)

if (loading) return <ChartSkeleton />
if (error) return <ErrorMessage retry={() => refetch()} />
if (!chartData.length) return <EmptyChart />
```

**緊急程度**: ⚠️ 高 - 首頁重要組件

---

### 8. BillList 狀態管理混亂，可能導致資料不一致

**風險等級**: 🔴 Critical
**受影響檔案**: `src/modules/Bill/components/BillList.tsx:94-118`

**問題描述**:

```typescript
// 有多個 useEffect 互相依賴，邏輯複雜
useEffect(() => {
  if (!isNumber(data?.BillsFilter?.totalPages)) return
  setTotalPages(data.BillsFilter.totalPages)
}, [data?.BillsFilter?.totalPages, setTotalPages])

useEffect(() => {
  if (!data?.BillsFilter?.docs) return
  const newBills = data.BillsFilter.docs
    .filter((bill) => !isNull(bill))
    .map((bill) => BillUtils.parse(lang, bill))

  if (shouldAppendData) {
    setBills((prev) => [
      ...(data?.BillsFilter?.page === 1 ? [] : prev),
      ...newBills,
    ])
  } else {
    setBills(newBills)
  }
}, [data?.BillsFilter?.docs, data?.BillsFilter?.page, shouldAppendData, lang])
```

**潛在影響**:

- ❌ 在 mobile/desktop 切換時可能出現資料重複或遺失
- ❌ 分頁邏輯複雜，容易出錯
- ❌ 難以維護和除錯

**建議修復方式**:
使用 reducer 統一管理狀態，或使用專門的無限滾動庫（如 react-infinite-scroll-component）。

**緊急程度**: ⚠️ 高 - 影響列表展示邏輯

---

## 🟠 High Priority 問題

### 9. SubscribeButton 異步操作缺少錯誤處理

**風險等級**: 🟠 High
**受影響檔案**: `src/modules/Bill/components/SingleBill/SubscribeButton.tsx:31-39`

**問題描述**:

```typescript
const handleSubscribeClick = useCallback(async () => {
  if (isSubscribed) {
    setIsSubscribed(false)
    await unsubscribeBill(bill) // ❌ 如果失敗怎麼辦？
    return
  }
  setIsSubscribed(true)
  await subscribeBill(bill) // ❌ 如果失敗怎麼辦？
}, [isSubscribed, unsubscribeBill, subscribeBill, bill])
```

**潛在影響**:

- ⚠️ API 失敗時 UI 狀態已經改變
- ⚠️ 使用者以為已訂閱，但實際沒有
- ⚠️ 狀態不一致

**建議修復方式**:

```typescript
const handleSubscribeClick = useCallback(async () => {
  const originalState = isSubscribed
  try {
    if (isSubscribed) {
      setIsSubscribed(false)
      await unsubscribeBill(bill)
    } else {
      setIsSubscribed(true)
      await subscribeBill(bill)
    }
  } catch (error) {
    setIsSubscribed(originalState) // 恢復原狀態
    showErrorToast(t('subscribeError'))
  }
}, [isSubscribed, unsubscribeBill, subscribeBill, bill])
```

**緊急程度**: 📌 高 - 影響訂閱功能可靠性

---

### 10. BillUtils.getLatestAction 可能返回 undefined

**風險等級**: 🟠 High
**受影響檔案**: `src/modules/Bill/business/Bill.ts:196-204`

**問題描述**:

```typescript
static getLatestAction(bill: Bill) {
  return (
    bill.actionsOverview[bill.actionsOverview.length - 1] ?? {
      description: undefined,
      date: undefined,
      chamber: undefined,
    }
  )
}
// ✅ 有提供 fallback，但 description/date 都是 undefined
// ❌ 下游組件直接使用這些值而不檢查
```

**潛在影響**:

- ⚠️ DateUtils.formatDc(undefined) 會返回空字串
- ⚠️ UI 顯示空白的日期和描述
- ⚠️ 可能導致 layout 問題

**建議修復方式**:
在使用處加入檢查：

```typescript
const latestAction = BillUtils.getLatestAction(bill)
const latestActionDate = latestAction.date
  ? DateUtils.formatDc(latestAction.date, DATE_FORMAT)
  : t('noDate')
```

**緊急程度**: 📌 中高 - 影響多個組件的顯示

---

### 11-15. 其他 High Priority 問題

**11. Carousel 組件缺少空資料處理**

- 檔案: `src/modules/Bill/components/BillCards.tsx:32-79`
- 問題: 空陣列會導致 Carousel 顯示異常
- 緊急程度: 📌 中

**12. BillCard 使用 key={index} 可能導致渲染問題**

- 檔案: `src/modules/Bill/components/BillCards.tsx:67`
- 問題: 應使用 bill.id 作為 key
- 緊急程度: 📌 中

**13. useEffect 依賴項包含不穩定的物件**

- 檔案: `src/modules/Bill/components/SingleBill/SubscribeButton.tsx:27-29`
- 問題: `bill` 物件作為依賴項可能導致不必要的 re-render
- 緊急程度: 📌 低中

**14. 多個組件中存在不必要的 useEffect 用於日期格式化**

- 檔案: `BillCard.tsx:77-79`, `BillActions.tsx:39-42`, `RightSection.tsx:109-119`
- 問題: 應使用 useMemo 而非 useEffect + useState
- 緊急程度: 📌 低

**15. Introduction 組件缺少 loading 和 error 狀態**

- 檔案: `src/modules/Bill/components/BillLanding/Introduction.tsx:76-83`
- 問題: GraphQL 查詢沒有處理 loading 和 error
- 緊急程度: 📌 中

---

## 🟡 Medium Priority 問題

### 16-19. 效能和代碼品質優化

**16. BillFilter 狀態管理可以簡化**

- 多個 useState 可以合併為 useReducer
- 緊急程度: 📌 低

**17. 圖表組件可以加入 loading skeleton**

- 提升視覺體驗
- 緊急程度: 📌 低

**18. 某些組件缺少 memo 優化**

- BillCard 等重複渲染的組件應使用 memo
- 緊急程度: 📌 低

**19. TypeScript 型別可以更嚴格**

- 某些地方使用 any 或過於寬鬆的型別
- 緊急程度: 📌 低

---

## 修復優先級建議

### 🔴 立即修復（本週內）

1. 為所有 GraphQL queries 加入完整的 error 和 loading 處理
2. 為 ServerBillApi 所有方法加入 try-catch
3. 修復 Data Parsing 的錯誤處理
4. 修復 BillList 的錯誤處理
5. 加入 Error Boundaries
6. 修復圖表組件的空資料處理
7. 修復 TrendCard 的 fallback UI
8. 重構 BillList 的狀態管理

### 🟠 近期修復（本月內）

9. 修復 SubscribeButton 的錯誤處理
10. 處理 BillUtils.getLatestAction 的 undefined 問題
11. 修復 Carousel 的空資料處理
12. 修復 key={index} 問題
13. 優化 useEffect 依賴項

### 🟡 計劃修復（下個 sprint）

14-19. 效能優化和代碼品質提升

---

## 總結

Bill 模組作為法案追蹤的核心模組，**最嚴重的問題是缺少完整的錯誤處理和載入狀態管理**：

### 主要問題類別

1. **GraphQL 錯誤處理不足** (8 個問題)

   - 幾乎所有 GraphQL queries 都沒有處理 error 狀態
   - Server-side API 缺少 try-catch
   - 數據驗證失敗會直接拋出錯誤

2. **狀態管理混亂** (3 個問題)

   - BillList 的分頁和無限滾動邏輯複雜
   - 多個 useEffect 互相依賴
   - 訂閱功能的樂觀更新沒有錯誤回滾

3. **視覺化組件缺少降級方案** (4 個問題)

   - 圖表組件沒有處理空資料
   - 沒有 loading skeleton
   - Carousel 缺少 fallback UI

4. **生命週期管理問題** (4 個問題)
   - 不必要的 useEffect
   - 依賴項不穩定
   - 可以用 useMemo 的地方用了 useState

### 統計

- 🔴 Critical: 8 個
- 🟠 High: 7 個
- 🟡 Medium: 4 個
- **總計**: 19 個問題

### 影響評估

這些問題如果不修復，可能導致：

- ✗ 應用崩潰和白屏（API 失敗時）
- ✗ 資料顯示不一致（分頁邏輯問題）
- ✗ 使用者體驗極差（無錯誤提示）
- ✗ 無法處理網路錯誤
- ✗ Layout 破壞和視覺錯誤（圖表問題）

建議**立即優先修復所有 Critical 問題**，這些問題會直接影響用戶使用體驗和系統穩定性。修復後，Bill 模組的可靠性將顯著提升。

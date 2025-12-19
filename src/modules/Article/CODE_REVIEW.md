# Code Review: Article Module

**Review Date**: 2025-12-19
**Module**: Article (文章/新聞內容管理)
**Focus**: Critical issues - API 數據處理、Error Handling、生命週期、版面破壞風險

---

## 總覽

Article 模組負責文章和新聞內容的展示和管理，包含兩種文章類型（USTW 和 Ketagalan）。發現 **12 個問題**：

- 🔴 Critical: 5 個
- 🟠 High: 5 個
- 🟡 Medium: 2 個

主要問題集中在 API 錯誤處理缺失和數據驗證不足。

---

## 🔴 Critical Priority 問題

### 1. ServerArticleApi 完全缺乏錯誤處理

**風險等級**: 🔴 Critical
**受影響檔案**: `src/modules/Article/api/ServerArticleApi.ts`

**問題描述**:
所有 API 方法（`getHomeFeaturedArticles`, `getHomeArticles`, `getLandingArticles`, `getArticles`, `getArticle`, `getRelatedArticles`）都沒有任何 try-catch 錯誤處理。GraphQL 查詢失敗時會直接拋出未捕獲的異常。

**受影響位置**:

- 第 32-75 行: `getHomeFeaturedArticles`
- 第 77-125 行: `getHomeArticles`
- 第 127-185 行: `getLandingArticles`
- 第 187-245 行: `getArticles`
- 第 247-285 行: `getArticle`
- 第 287-348 行: `getRelatedArticles`

**潛在影響**:

- ❌ GraphQL API 失敗時整個頁面渲染崩潰
- ❌ 網路問題或 API 降級導致白屏
- ❌ 使用者體驗極差，無降級方案
- ❌ Server-side 錯誤會導致 Next.js 500 錯誤頁面

**建議修復方式**:

```typescript
static async getArticle({ id, articleType }: { id: string; articleType: ArticleType }) {
  try {
    if (articleType === ArticleType.Ketagalan) {
      const { data } = await query<KetagalanArticleQuery, KetagalanArticleQueryVariables>({
        query: QUERY_KETAGALAN_ARTICLE,
        variables: { id },
      })
      if (!data?.KetagalanArticle) return null
      return ArticleUtils.parse(apiConfig.lang, data.KetagalanArticle, articleType)
    }
    // ... similar for USTW
  } catch (error) {
    console.error('Failed to fetch article:', error)
    return null // 或者拋出自定義錯誤
  }
}
```

**緊急程度**: ⚠️ 立即修復 - 影響所有文章頁面的穩定性

---

### 2. ArticleUtils.parse 缺少數據驗證的錯誤處理

**風險等級**: 🔴 Critical
**受影響檔案**: `src/modules/Article/business/Article.ts:61-95`

**問題描述**:
`ArticleUtils.parse` 方法使用 `articleSchema.parse()` 進行驗證，但沒有 try-catch 包裝。當 API 返回格式不正確的數據時，Zod 的 parse 會直接拋出異常。

**受影響位置**:

- 第 66 行: `articleSchema.parse({...})`

**潛在影響**:

- ❌ API 返回異常格式導致整個頁面崩潰
- ❌ 無法優雅處理後端數據結構變更
- ❌ 用戶看到原始錯誤信息而非友好提示

**建議修復方式**:

```typescript
static parse(lang: Language, dto: Partial<ApiUstwArticle | ApiKetagalanArticle>, articleType: ArticleType) {
  try {
    return articleSchema.parse({
      id: dto.id ?? '',
      // ... existing parsing logic
    })
  } catch (error) {
    console.error('Article data validation failed:', error, dto)
    // 返回最小可用對象或重新拋出自定義錯誤
    throw new Error('Invalid article data structure')
  }
}
```

**緊急程度**: ⚠️ 立即修復 - 數據驗證失敗會導致頁面崩潰

---

### 3. useArticleSearch Hook 缺乏錯誤狀態管理

**風險等級**: 🔴 Critical
**受影響檔案**: `src/modules/Article/hooks/useArticleSearch.ts`

**問題描述**:
Hook 使用 `useLazyQuery` 但完全忽略了 `error` 狀態（第 68-84 行）。GraphQL 查詢失敗時用戶無法得知，只會看到永久的 loading 狀態或空列表。

**受影響位置**:

- 第 68-84 行: `useLazyQuery` 調用沒有處理 `error`
- 第 150-161 行: 返回值沒有包含錯誤狀態

**潛在影響**:

- ❌ 網路錯誤時用戶看到空白內容，不知道發生了什麼
- ❌ 無法重試失敗的請求
- ❌ 用戶可能認為沒有內容而非系統錯誤

**建議修復方式**:

```typescript
const [
  getArticles,
  { loading: isArticlesLoading, data: articlesQueryData, error: articlesError },
] = useLazyQuery<UstwArticlesQuery, UstwArticlesQueryVariables>(
  QUERY_USTW_ARTICLES,
  {
    variables: queryVariables,
  }
)

// 返回時加入錯誤狀態
return {
  // ... existing returns
  error: articleType === ArticleType.Ketagalan ? ketagalanError : articlesError,
  refetch: () => {
    /* 重試邏輯 */
  },
}
```

**緊急程度**: ⚠️ 高 - 影響搜索和列表功能的用戶體驗

---

### 4. ArticlePostContent 的 serializeSlateNode 無錯誤處理

**風險等級**: 🔴 Critical
**受影響檔案**: `src/modules/Article/utils/slateSerializer.tsx:147-170`

**問題描述**:
`serializeSlateNode` 函數處理複雜的 Slate content 轉換，但沒有任何錯誤處理。當遇到未知節點類型或格式錯誤的數據時會拋出異常。

**受影響位置**:

- 第 147-170 行: `serializeSlateNode` 函數
- 第 168 行: 遞迴調用沒有錯誤邊界

**潛在影響**:

- ❌ 文章內容格式異常導致整個文章頁面崩潰
- ❌ 用戶無法閱讀其他正常部分的內容
- ❌ 編輯端數據錯誤直接影響前端展示

**建議修復方式**:

```typescript
export const serializeSlateNode = (lang: Language, node: Descendant): ReactNode => {
  try {
    if (Text.isText(node)) {
      // ... existing logic
    }

    const type = ((node as CustomElement).type || 'paragraph') as Exclude<CustomElementType, 'text'>

    if (type === 'link') {
      return MUI_COMPONENT_MAP.link(lang, node as LinkElement)
    }

    const children = node.children.map((n) => serializeSlateNode(lang, n))
    return MUI_COMPONENT_MAP[type](children)
  } catch (error) {
    console.error('Failed to serialize slate node:', error, node)
    return <Typography color="error">Content rendering error</Typography>
  }
}
```

**緊急程度**: ⚠️ 高 - 影響文章內容的核心展示功能

---

### 5. ContentImage 組件缺少圖片載入錯誤處理

**風險等級**: 🔴 Critical
**受影響檔案**: `src/modules/Article/components/ArticlePost/Content/ContentImage.tsx:22-27`

**問題描述**:
Next.js Image 組件沒有 `onError` 處理。圖片 URL 無效或載入失敗時會顯示破圖圖示，破壞整體版面。

**受影響位置**:

- 第 22-27 行: Image 組件

**潛在影響**:

- ❌ 圖片 URL 失效導致版面破壞
- ❌ Banner 圖片失敗影響首屏視覺體驗
- ❌ 沒有降級方案或 placeholder

**建議修復方式**:

```typescript
const ContentImage = function ContentImage({ image, caption, ...props }: ContentImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError || !image) {
    return (
      <Stack spacing={2} {...props}>
        <Box sx={{
          background: '#f0f0f0',
          paddingBottom: '56.25%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Typography>Image unavailable</Typography>
        </Box>
        {caption && <Typography variant="bodyS">{caption}</Typography>}
      </Stack>
    )
  }

  return (
    <Stack spacing={2} {...props}>
      <Box style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
        <Image
          src={image}
          alt={caption ?? ''}
          layout="fill"
          objectFit="cover"
          onError={() => setImageError(true)}
        />
      </Box>
      {caption && <Typography variant="bodyS">{caption}</Typography>}
    </Stack>
  )
}
```

**緊急程度**: ⚠️ 高 - 影響視覺呈現品質

---

## 🟠 High Priority 問題

### 6. ArticlePostSection 的無限滾動缺少重複數據檢查

**風險等級**: 🟠 High
**受影響檔案**: `src/modules/Article/components/ArticleLanding/ArticlePostSection.tsx:124-138`

**問題描述**:
useEffect 在 mobile 無限滾動模式下，如果 API 返回重複數據，會導致列表出現重複項目。沒有基於 `article.id` 的去重邏輯。

**潛在影響**:

- ⚠️ 分頁 API 錯誤返回重複數據時用戶看到重複卡片
- ⚠️ 影響用戶體驗和資料準確性
- ⚠️ 可能導致無限滾動時的 key 重複警告

**建議修復方式**:

```typescript
useEffect(() => {
  if (!articlesData?.docs) return

  const newArticles = articlesData.docs
    .filter((article) => !isNull(article))
    .map((article) => ArticleUtils.parse(lang, article, articleType))

  if (shouldAppendData) {
    setArticles((prev) => {
      const existingIds = new Set(prev.map((a) => a.id))
      const uniqueNewArticles = newArticles.filter(
        (a) => !existingIds.has(a.id)
      )
      return articlesData?.page === 1
        ? newArticles
        : [...prev, ...uniqueNewArticles]
    })
  } else {
    setArticles(newArticles)
  }
}, [articleType, articlesData, shouldAppendData, lang])
```

**緊急程度**: 📌 中高 - 影響無限滾動功能

---

### 7. ArticleStoreProvider 的 GraphQL 查詢缺少錯誤處理

**風險等級**: 🟠 High
**受影響檔案**: `src/modules/Article/providers/ArticleStoreProvider.tsx`

**問題描述**:
所有 `useLazyQuery` 調用（第 59-67、64-67、123-129、134-142 行）都沒有處理錯誤狀態。Tags 和 Categories 載入失敗時會導致導航欄異常。

**受影響位置**:

- 第 59-67 行: Tags 查詢
- 第 123-142 行: Categories 查詢

**潛在影響**:

- ⚠️ 分類和標籤載入失敗導致導航功能失效
- ⚠️ 用戶無法通過分類篩選文章
- ⚠️ 沒有錯誤提示，用戶不知道功能不可用

**建議修復方式**:
添加錯誤狀態處理和降級邏輯，至少記錄錯誤並顯示基本的導航選項。

**緊急程度**: 📌 中 - 影響導航功能

---

### 8. useEpisode Hook 缺乏錯誤和載入狀態

**風險等級**: 🟠 High
**受影響檔案**: `src/modules/Podcast/hooks/useEpisode.ts:16-25`

**問題描述**:
Hook 調用外部 API 但不暴露 loading 和 error 狀態給組件使用者。

**受影響位置**:

- 第 13-33 行: useEpisode Hook
- 依賴組件: `Article/components/ArticlePost/Content/ArticlePodcast.tsx:11-13`

**潛在影響**:

- ⚠️ Podcast 載入時無 loading 狀態，用戶不知道內容正在載入
- ⚠️ API 失敗時返回 null，但組件無法區分是「還在載入」還是「載入失敗」
- ⚠️ ArticlePodcast 組件僅檢查 null，無法處理錯誤狀態

**建議修復方式**:

```typescript
export function useEpisode(episodeId: string) {
  const [episode, setEpisode] = useState<Episode | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchEpisode = useCallback(async () => {
    try {
      setLoading(true)
      const podcastId = config.SOUNDON_PODCAST_ID
      if (!podcastId) throw new Error('Podcast ID not configured')

      const episode = await getEpisode({ podcastId, episodeId })
      setEpisode(episode)
      setError(null)
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('Failed to fetch episode')
      )
      setEpisode(null)
    } finally {
      setLoading(false)
    }
  }, [episodeId])

  useEffect(() => {
    fetchEpisode()
  }, [fetchEpisode])

  return { episode, loading, error, refetch: fetchEpisode }
}
```

**緊急程度**: 📌 中 - 影響 Podcast 嵌入功能

---

### 9. ArticlePostCard 缺少圖片的 fallback

**風險等級**: 🟠 High
**受影響檔案**: `src/modules/Article/components/ArticlePostCard.tsx:72-86`

**問題描述**:
條件渲染僅檢查 `article.thumbnailImage` 存在，但沒有處理圖片 URL 無效的情況。

**潛在影響**:

- ⚠️ 圖片區域留白影響美觀
- ⚠️ 沒有 placeholder 導致 layout shift

**建議修復方式**:
添加 placeholder 圖片或錯誤處理，確保卡片視覺一致性。

**緊急程度**: 📌 中 - 影響卡片展示品質

---

### 10. ArticlePostHeader 的 date 可能為 undefined

**風險等級**: 🟠 High
**受影響檔案**: `src/modules/Article/components/ArticlePost/ArticlePostHeader.tsx:57-59`

**問題描述**:
`DateUtils.formatLocal(date, DATE_FORMAT)` 沒有檢查 `date` 是否為 undefined（根據 schema 定義，date 是 optional）。

**潛在影響**:

- ⚠️ Date 為 undefined 時可能導致格式化錯誤
- ⚠️ 顯示異常時間或拋出異常

**建議修復方式**:

```typescript
useEffect(() => {
  setFormattedDate(date ? DateUtils.formatLocal(date, DATE_FORMAT) : '')
}, [date])
```

**緊急程度**: 📌 低中 - 邊界情況處理

---

## 🟡 Medium Priority 問題

### 11. ArticlePodcast 組件的空值處理不完整

**風險等級**: 🟡 Medium
**受影響檔案**: `src/modules/Article/components/ArticlePost/Content/ArticlePodcast.tsx:11-13`

**問題描述**:
僅檢查 `episode` 為空，但沒有處理 loading 和 error 狀態（因為 useEpisode 沒有暴露這些狀態）。

**建議修復方式**:
配合 useEpisode 的修復，添加 loading 和 error 狀態的處理。

**緊急程度**: 📌 低中 - 配合其他修復

---

### 12. Article Schema 的 optional 欄位缺少預設值

**風險等級**: 🟡 Medium
**受影響檔案**: `src/modules/Article/business/Article.ts:11-32`

**問題描述**:
許多 optional 欄位（如 `categories`, `tags`, `relatedArticles`）在 schema 中是 optional，但在使用時沒有統一的預設值處理。

**建議修復方式**:
在 ArticleUtils.parse 中為 optional 欄位提供預設值（如空陣列），避免後續使用時的 null 檢查。

**緊急程度**: 📌 低 - 代碼品質優化

---

## 修復優先級建議

### 🔴 立即修復（本週內）

1. ServerArticleApi 錯誤處理
2. ArticleUtils.parse 驗證錯誤處理
3. useArticleSearch 錯誤狀態管理
4. serializeSlateNode 錯誤處理
5. ContentImage 錯誤處理

### 🟠 近期修復（本月內）

6. ArticlePostSection 去重邏輯
7. ArticleStoreProvider 錯誤處理
8. useEpisode 狀態管理
9. ArticlePostCard fallback
10. ArticlePostHeader date 檢查

### 🟡 計劃修復（下個 sprint）

11. ArticlePodcast 狀態處理
12. Schema 預設值優化

---

## 總結

Article 模組作為內容展示的核心模組，**最嚴重的問題是缺少完整的錯誤處理機制**：

1. **API 層完全沒有錯誤處理** - ServerArticleApi 的所有方法都會在 API 失敗時直接崩潰
2. **數據驗證錯誤未處理** - ArticleUtils.parse 使用 Zod 但不處理驗證失敗
3. **Client-side 查詢缺少錯誤狀態** - useArticleSearch 和 ArticleStoreProvider 忽略錯誤
4. **內容渲染缺少降級方案** - serializeSlateNode 和 ContentImage 無錯誤邊界

建議立即修復所有 Critical 問題，這些問題會直接導致用戶看到白屏或錯誤頁面，嚴重影響使用體驗。High 和 Medium 問題雖然不會導致頁面崩潰，但會影響功能完整性和用戶體驗。

修復後，Article 模組的穩定性和可靠性將顯著提升。

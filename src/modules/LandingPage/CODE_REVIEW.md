# Code Review: LandingPage & About Modules

**Review Date**: 2025-12-19
**Modules**: LandingPage (首頁) & About (關於頁面)
**Status**: 部分審查（受 API rate limit 限制）

---

## 審查說明

本文件涵蓋 LandingPage 和 About 兩個模組的 code review，因 API rate limit 而未能完成完整分析。

---

## LandingPage Module

### 模組架構

LandingPage 模組負責首頁內容展示：

- `components/ArticleSection.tsx` - 文章區塊
- `components/BillSection.tsx` - 法案區塊
- `components/PodcastSection.tsx` - 播客區塊
- `components/FullWidthScrollableListWrapper.tsx` - 可滾動列表容器
- `components/FreeUsageSection.tsx` - 免費使用說明

### 初步觀察

#### 依賴其他模組

LandingPage 整合多個模組的內容：

- Article 模組的文章
- Bill 模組的法案
- Podcast 模組的播客

**潛在問題**:

- ⚠️ 如果任一模組的 API 失敗，首頁可能部分破損
- ⚠️ 需要優雅的降級方案

#### 需要檢查的項目

1. **數據獲取錯誤處理**

   - ⚠️ 各區塊的數據載入錯誤處理
   - ⚠️ 部分區塊失敗時的降級顯示
   - ⚠️ Loading 狀態的友好提示

2. **效能優化**

   - ⚠️ 首頁載入效能
   - ⚠️ 數據預取策略
   - ⚠️ 圖片懶載入

3. **響應式設計**

   - ⚠️ Mobile/Tablet/Desktop 的適配
   - ⚠️ 滾動列表在不同裝置的體驗

4. **SEO 和 Metadata**
   - ⚠️ Meta tags 的完整性
   - ⚠️ Open Graph 標籤
   - ⚠️ 結構化數據

---

## About Module

### 模組架構

About 模組包含多個子模組：

- `Footprint/` - 足跡/里程碑
  - `api/ServerFootprintApi.ts`
  - `components/FootprintCard.tsx`
- `Member/` - 團隊成員
  - `api/ServerMemberApi.ts`
  - `components/MemberCard.tsx`
  - `components/MemberGroupCard.tsx`
- `Project/` - 專案介紹
  - `api/ServerProjectApi.ts`
  - `components/ProjectCard.tsx`

### 初步觀察

#### Server API 模式

About 的各子模組都有 Server API：

- `ServerFootprintApi.ts`
- `ServerMemberApi.ts`
- `ServerProjectApi.ts`

**基於其他模組的經驗，很可能存在**:

- ⚠️ **缺少 try-catch 錯誤處理**（Critical）
- ⚠️ GraphQL 查詢失敗會導致頁面崩潰
- ⚠️ 需要為所有 API 方法添加錯誤處理

#### 需要檢查的項目

1. **Server API 錯誤處理（Critical）**

   - ⚠️ ServerFootprintApi 的錯誤處理
   - ⚠️ ServerMemberApi 的錯誤處理
   - ⚠️ ServerProjectApi 的錯誤處理
   - ⚠️ 建議：統一添加 try-catch 和降級方案

2. **數據展示**

   - ⚠️ 空數據時的 UI 處理
   - ⚠️ 載入狀態的友好提示
   - ⚠️ 卡片組件的錯誤邊界

3. **圖片處理**

   - ⚠️ 成員照片載入失敗的降級
   - ⚠️ 專案截圖的錯誤處理
   - ⚠️ 圖片優化和懶載入

4. **內容管理**
   - ⚠️ CMS 數據格式驗證
   - ⚠️ Markdown/Rich text 的渲染錯誤處理
   - ⚠️ 動態內容的 sanitization

---

## 共同問題推測

基於對其他模組的 review，這兩個模組很可能存在：

### Critical Priority

1. **Server API 缺少錯誤處理**

   - About 模組的三個 Server API 需要添加 try-catch
   - API 失敗應有降級方案

2. **數據獲取失敗的頁面級處理**
   - 需要 error boundary 或 error.tsx
   - 部分內容失敗不應影響整個頁面

### High Priority

3. **載入和空狀態的 UI**

   - 改善 loading 體驗
   - 友好的空狀態提示

4. **圖片和媒體內容錯誤處理**
   - 圖片載入失敗的 fallback
   - 媒體內容的降級顯示

### Medium Priority

5. **效能優化**

   - 首頁載入速度
   - 圖片懶載入
   - 數據預取

6. **SEO 和可訪問性**
   - Meta tags 優化
   - 語義化 HTML
   - 無障礙支援

---

## 建議後續行動

### 立即檢查（Critical）

1. 為 About 模組的所有 Server API 添加錯誤處理
2. 添加頁面級的錯誤邊界
3. 確保部分內容失敗不影響整體

### 短期優化（High）

4. 改善載入和空狀態的用戶體驗
5. 添加圖片載入錯誤處理
6. 優化首頁載入效能

### 長期改進（Medium）

7. 優化 SEO 和 metadata
8. 改善無障礙支援
9. 實施效能監控

---

**注意**: 這兩個模組都是內容展示型頁面，穩定性和用戶體驗特別重要。建議進行完整的 code review 以確保所有內容能正確載入和降級。

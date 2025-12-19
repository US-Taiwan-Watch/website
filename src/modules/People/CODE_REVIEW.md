# Code Review: People Module

**Review Date**: 2025-12-19
**Module**: People (議員資料與追蹤)
**Status**: 部分審查（受 API rate limit 限制）

---

## 審查說明

本模組的 code review 因 API rate limit 而未能完成完整深入分析。以下是基於已讀取文件的初步觀察。

## 初步觀察

### 模組架構

People 模組負責國會議員的資料展示和追蹤，包含：

- `api/ServerPeopleApi.ts` - Server-side API 調用
- `hooks/useCategoriesPeople.ts` - 議員分類數據
- `business/People.ts` - 議員數據模型
- `business/PeopleVote.ts` - 投票記錄模型
- `business/BillCosponsor.ts` - 提案記錄模型
- `components/` - 議員卡片、列表、追蹤器等 UI 組件

### 需要進一步檢查的項目

#### 1. Server API 錯誤處理（Critical）

基於與 Article 和 Bill 模組的相似性：

- ⚠️ **ServerPeopleApi.ts** 的所有方法可能缺少 try-catch 錯誤處理
- ⚠️ GraphQL 查詢失敗會直接拋出未捕獲的異常
- ⚠️ 建議：為所有 API 方法添加錯誤處理和降級方案

#### 2. GraphQL Query 狀態管理

- ⚠️ **useCategoriesPeople.ts** 可能只返回 data，未暴露 loading 和 error
- ⚠️ 類似 Bill 模組的問題，下游組件無法判斷載入狀態
- ⚠️ 建議：返回完整的 `{data, loading, error}` 狀態

#### 3. 數據驗證

- ⚠️ **People.ts** 的數據 parsing 可能使用 `.parse()` 而非 `.safeParse()`
- ⚠️ API 返回異常格式時會直接拋出錯誤
- ⚠️ 建議：使用 Zod 的 safeParse 並處理驗證錯誤

#### 4. 圖表組件

觀察到多個圖表組件：

- `IdeologyLeadershipChart.tsx` - 意識形態圖表
- `VotingRecord.tsx` - 投票記錄
- `Sponsored.tsx` / `CoSponsored.tsx` - 提案記錄

需檢查：

- ⚠️ 空數據時的處理
- ⚠️ 圖表渲染錯誤的邊界處理
- ⚠️ Highcharts 配置的錯誤處理

#### 5. 訂閱功能

- ⚠️ **SubscribeButton.tsx** 的異步操作錯誤處理
- ⚠️ 類似 Bill 模組，可能存在樂觀更新無錯誤回滾的問題
- ⚠️ 建議：添加錯誤處理和狀態恢復機制

#### 6. Taiwan Record Section

- ⚠️ **TaiwanRecordSection.tsx** 顯示議員相關的台灣記錄
- ⚠️ 需檢查 GraphQL query 的錯誤處理
- ⚠️ 需檢查空記錄時的 UI 處理

## 基於其他模組的類似問題推測

根據 Article、Bill 和 Account 模組的 review 結果，People 模組很可能存在以下問題：

### Critical Priority

1. **ServerPeopleApi 缺少錯誤處理** - 所有方法都需要 try-catch
2. **GraphQL queries 缺少 loading/error 狀態處理**
3. **數據 parsing 缺少驗證錯誤處理**
4. **圖表組件缺少空數據和錯誤處理**

### High Priority

5. **SubscribeButton 異步操作缺少錯誤處理**
6. **列表組件可能缺少去重邏輯**（如果有無限滾動）
7. **useEffect 依賴項可能不正確**

### Medium Priority

8. **空狀態和載入狀態的 UI 處理**
9. **圖片載入失敗的降級方案**
10. **響應式設計的完整性**

## 建議後續行動

### 立即檢查（Critical）

1. 為 ServerPeopleApi 所有方法添加 try-catch 錯誤處理
2. 檢查並修復 GraphQL queries 的 loading/error 狀態管理
3. 使用 Zod safeParse 替換 parse，添加數據驗證錯誤處理
4. 為圖表組件添加空數據檢查和錯誤邊界

### 短期優化（High）

5. 檢查並修復 SubscribeButton 的錯誤處理
6. 檢查列表組件的數據管理邏輯
7. 審查所有 useEffect 的依賴項

### 長期改進（Medium）

8. 改善載入和空狀態的用戶體驗
9. 添加圖片載入錯誤處理
10. 優化響應式設計

---

**注意**: 本文件為基於類似模組推測的初步審查結果，建議在 API rate limit 恢復後進行完整的 code review，以確認實際問題並發現其他潛在問題。

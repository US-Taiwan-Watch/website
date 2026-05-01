# USTW-Website

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#summary">Summary</a></li>
        <li><a href="#goal">Goal</a></li>
        <li><a href="#progress">Progress</a></li>
      </ul>
    </li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#environment">Environment</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a>
      <ul>
        <li><a href="#environment-variables">Environment Variables</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### Summary

USTW 官網的前端專案

### Goal

透過 Next 完成 USTW 官網前端

### Progress

🚧 In Progress

## Built With

- **Next.js 14** (App Router) + **TypeScript**
- **Material-UI v6** + **Highcharts** + **MUI X-Charts**
- **Apollo Client v4** + **GraphQL Codegen**
- **Auth0**（`@auth0/nextjs-auth0` v4）
- **i18next**（en-US / zh-TW，語言包來自 Google Sheet）
- **Zustand**（global state） + **react-hook-form** + **Zod**
- **Slate**（文章內文 AST） + **`@mdx-js/mdx`**（About 靜態文件）
- **SoundOn API**（Podcast） + **Algolia**（搜尋）
- **Husky** + **lint-staged**（pre-commit）

<!-- GETTING STARTED -->

## Getting Started

### Environment

- Node.js (**v20**)
- endpoints

### Prerequisites

### Code Style

使用 ESLint 做程式碼格式化，參照 [next/core-web-vitals](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#core-web-vitals) & [standard](https://github.com/standard/eslint-config-standard) & [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)。

縮排: 2 spaces，永遠不要用 tab

#### JavaScript / TypeScript

完全遵守 JavaScript Standard Style，除了以下例外（已經定義在 [.eslintrc.json](.eslintrc.json)）：
comma-dangle ：允許行尾逗點

Prettier 設定：[.prettierrc.js](.prettierrc.js)（single quotes、2 spaces、es5 trailing comma、no semicolons）。

Pre-commit 透過 [Husky](.husky/pre-commit) 執行 lint-staged（[.lintstagedrc.json](.lintstagedrc.json)），確保 commit 前自動格式化。

### Folder Structure

採模組化結構，每個 feature 自成一個資料夾：

```
src/
├── app/[lang]/         # Next.js App Router 頁面（語系前綴路由）
├── common/             # 跨模組共用：元件、hooks、lib（apollo、auth0、i18n、mui、router、zustand）、utils
└── modules/<Module>/   # 每個 feature 一個資料夾
    ├── api/            # Server-side API（RSC 用）
    ├── business/       # 領域物件 + Zod schema + Adapter（XxxUtils）
    ├── components/
    ├── enums/
    ├── graphql/        # gql 查詢 / mutation
    ├── hooks/
    └── providers/
```

---

## Usage

```bash
# 安裝相依套件
yarn

# 抓取語言檔案
yarn i18n

# 生成 GraphQL 型別
yarn graphql-codegen

# A. 開發
yarn dev

# B. 建構專案並運行  server
yarn build
yarn start

# C. 分析 bundle size
yarn analyze

# Linter
yarn lint

# 自動修 lint + Prettier
yarn lint:fix

# TypeScript 型別檢查（不輸出檔案）
yarn check-types

# 準備 Ideology Leadership Chart 資料
# 每屆國會都需要置換 public/data/ideology.txt 並執行一次 scripts/prepare-ideology.mjs，轉成圖表需要的 JSON 格式
# ref: https://www.govtrack.us/about/analysis#ideology
yarn prepare-ideology
```

### Environment Variables

請以 [.env.sample](.env.sample) 為樣板建立 `.env`，向團隊取得實際值：

| 變數                                | 用途                                |
| ----------------------------------- | ----------------------------------- |
| `NODE_ENV`                          | `development` / `production`        |
| `NEXT_PUBLIC_WEB_BASE_URL`          | 前端站台 base URL（含 protocol）    |
| `NEXT_PUBLIC_API_BASE_URL`          | CMS REST API base URL               |
| `NEXT_PUBLIC_GRAPHQL_API_URL`       | GraphQL endpoint（dev / prod 不同） |
| `NEXT_PUBLIC_SOUNDON_API_TOKEN`     | SoundOn API token（Podcast）        |
| `NEXT_PUBLIC_SOUNDON_PODCAST_ID`    | SoundOn 節目 ID                     |
| `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID` | GTM ID（GA4）                       |
| `NEXT_PUBLIC_ALGOLIA_APP_ID`        | Algolia App ID                      |
| `NEXT_PUBLIC_ALGOLIA_SEARCH_KEY`    | Algolia Search-only key             |
| `NEXT_PUBLIC_ALGOLIA_INDEX_NAME`    | Algolia index 名稱                  |
| `AUTH0_DOMAIN`                      | Auth0 租戶 domain                   |
| `AUTH0_CLIENT_ID`                   | Auth0 application client ID         |
| `AUTH0_CLIENT_SECRET`               | Auth0 application client secret     |
| `AUTH0_SECRET`                      | Auth0 session 加密用 secret         |

正式部署時，這些變數由 GitHub Secrets 注入（見 [.github/workflows/](.github/workflows/)）。

### Git

[Repository](https://github.com/US-Taiwan-Watch/website.git)

Commit Message

參考 AngularJS Git Commit Message Conventions
https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html

#### Git flow

`main` 分支為正式版，`develop` 分支為開發版。
`develop` 分支會在每次 merge 到 `main` 後合併到 `main` 分支。
feature branch 會以 `Squash` 的方式合併到 `develop` 分支。

#### Code Review

把 comment 加上 label，參考：https://conventionalcomments.org/

### i18n

本專案使用 i18next 作為多語言解決方案。主要設定檔位於 `src/common/lib/i18n/settings.ts`。

#### 語言檔案

語言檔案位於 `src/common/lib/i18n/locales` 目錄下，按語言代碼分類。每個語言目錄下包含多個 JSON 檔案，對應不同的命名空間（namespace）。

#### 使用方法

- 服務器端：使用 `src/common/lib/i18n/getTranslationServer.ts` 中的 `useTranslation` 函數。
- 客戶端：使用 `src/common/lib/i18n/useTranslationClient.ts` 中的 `useTranslation` 函數。

透過 `yarn i18n` 指令會從 Content Management System 抓取語言檔案，並放置於 `src/common/lib/i18n/locales` 目錄下。

### 頁面跳轉

凡要進行頁面跳轉，請至 [src/common/lib/router/routes.ts](src/common/lib/router/routes.ts) 中的 `RouteName` enum 註冊，並用 `getURouterServer()`（server）或 `useURouterClient()`（client）的 `resolveRouteUrl({ name, params, query })` 產生型別安全的網址。

### GraphQL

使用 GraphQL Codegen 生成 TypeScript 型別，詳細參考：https://www.graphql-code-generator.com/
`/src/common/lib/graphql/schema.graphql` 可至 Playground 下載 `SDL` 檔案下來替換。

Playground (Development): https://ustw-cms-backend-hbd9avfxadfneybh.westus2-01.azurewebsites.net/api/graphql-playground

#### 使用方法

1. 先把 gql query 寫好，例如：

```ts
import { gql } from '@apollo/client'

export const QUERY_PEOPLES = gql`
  query QueryPeople(
    $limit: Int
    $page: Int
    $sort: String
    $where: People_where
  ) {
    Peoples(limit: $limit, page: $page, sort: $sort, where: $where) {
      docs {
        id
        billCount
        bio
      }
    }
  }
`
```

2. 執行 codegen（會掃描 `src/` 目錄下所有 gql query，並生成對應的型別 & gql 函數）：

```bash
yarn graphql-codegen
```

3. 在元件中匯入產生的 hook / typed query 使用。

---

### Dependencies

#### Zustand

Zustand 管理 global state，可以在 store 中定義 state 和 action，並使用 useStore 取得 state。
詳細參考：https://github.com/pmndrs/zustand

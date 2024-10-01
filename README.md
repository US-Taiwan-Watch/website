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

Next.js 14

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

完全遵守 JavaScript Standard Style，除了以下例外（已經定義在 .eslintrc.js）：
comma-dangle ：允許行尾逗點

### Folder Structure

參照 [Next Right Now](https://unlyed.github.io/next-right-now/reference/folder-structure)。File Naming 可至各自文件夾內 Readme 查看。

---

## Usage

```bash
# 安裝相依套件
yarn

# 抓取語言檔案
yarn i18n

# A. 開發
yarn dev

# B. 建構專案並運行  server
yarn build
yarn start

# C. 分析 bundle size
yarn analyze

# Linter
yarn lint
```

### Environment Variables

### Wiki

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

- 服務器端：使用 `src/common/lib/i18n/serverHooks.ts` 中的 `useTranslation` 函數。
- 客戶端：使用 `src/common/lib/i18n/clientHooks.ts` 中的 `useTranslation` 函數。

透過 `yarn i18n` 指令會從 Content Management System 抓取語言檔案，並放置於 `src/common/lib/i18n/locales` 目錄下。

### 頁面跳轉

凡要進行頁面跳轉，請至 `src/routes.ts` 中定義，並使用 `ROUTES` 物件拿取連結，避免於程式碼中寫死字串，以防路由更名。

---

### Dependencies

#### Zustand

Zustand 管理 global state，可以在 store 中定義 state 和 action，並使用 useStore 取得 state。
詳細參考：https://github.com/pmndrs/zustand

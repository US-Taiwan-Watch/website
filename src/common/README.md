# Common

This directory contains common components and utilities that are used across multiple pages.

## File Structure
```
├── common
│   ├── api
│   │   ├── axiosInstance.ts
│   │   └── commonApi.ts
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button
│   │   │   │   ├── index.tsx
│   │   │   │   └── index.test.ts
│   │   │   └── Input
│   │   │       ├── index.tsx
│   │   │       └── index.test.ts
│   │   ├── elements
│   │   │   ├── CarCard
│   │   │   │   ├── index.tsx
│   │   │   │   └── index.test.ts
│   ├── hooks
│   ├── classes
│   ├── interfaces
│   ├── enums
│   ├── types
│   ├── lib 
│   └── utils 
```

### Api
放置無法模組化的共用 api 及相關 infra，置於 /src/common/api/ 。

#### 命名規則

camelCase ，避免模糊不清的縮寫。

 

### Components
放置沒有商業邏輯的共有基本元件，並且設計為 Controlled Component，置於 /src/common/components/... ， atoms 放置原子元件 e.x. Button， elements (Molecule) 放置用 atomic component 組成的基本元件，有興趣可以參考 Atomic Design 。

#### 命名規則

PascalCase ，避免模糊不清的縮寫。

 

### Hooks
放置無法模組化的具有商業邏輯的共用 hook，置於 /src/common/hooks/ 。

#### 命名規則

camelCase ，並以 use 開頭 e.x. useLocalStorage.ts，避免模糊不清的縮寫。

 

### Classes
放置無法模組化的具有商業邏輯的共用 ES6 Class ，置於 /src/common/classes/

#### 命名規則

PascalCase ，避免模糊不清的縮寫。

 

### Interfaces
放置無法模組化的共用 TS 的介面（Interface），置於 /src/common/interfaces/

#### 命名規則

PascalCase ，避免模糊不清的縮寫。

 

### Enums
放置無法模組化的共用 TS 的 enum ，置於 /src/common/enums/

#### 命名規則

PascalCase ，避免模糊不清的縮寫。

 

### Types
放置共用類型，置於 /src/common/types/ 。

#### 命名規則

PascalCase ，避免模糊不清的縮寫。

### Lib
放置共用 Library 相關工具，置於 /src/common/lib/ 。

#### 命名規則

camelCase ，並以 use 開頭 e.x. useLocalStorage.ts，避免模糊不清的縮寫。



### Utils
放置共用工具，置於 /src/common/utils/ 。

#### 命名規則

camelCase ，避免模糊不清的縮寫。
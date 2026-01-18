# Selah

> סֶלָה — 停下，思考，再前行

Selah 是一個個人專案管理甘特圖應用程式。採用單檔 HTML/CSS/JS 架構，無需建置工具或框架依賴。

## 開發

**無需建置工具。** 直接在瀏覽器開啟 `index.html` 即可使用。資料儲存於 `data.json`，編輯時會暫存至 localStorage。

**部署方式：** 推送至 `main` 分支後，GitHub Pages 會自動部署。

## 架構

### 檔案結構
- `index.html` - 完整應用程式（約 2900 行）：包含 HTML 結構、CSS 樣式與 JavaScript 邏輯
- `data.json` - JSON 格式的專案資料

### 資料模型（三層結構）
```
類別 (Categories) → 專案 (Projects) → 工作項目 (Tasks)
```

每個工作項目包含：
- `id`、`name`、`start`、`end`（日期格式為 "YYYY-MM-DD" 字串或 null）
- `status`：`"in_progress"`（實心條）、`"background"`（斜線條）、`"not_started"`（不顯示）
- 選填：`milestone`（里程碑日期）、`note`（備註）

### 核心狀態變數
```javascript
state.view        // 'week' 或 'year'
state.displayMode // 'day', 'week', 'biweek', 'month'（全年視圖的顯示粒度）
state.selectedWeek // 1-52（雙周視圖的週數）
state.today       // 當前日期參考
```

### 核心函數
- `init()` → `loadData()` → `render()` → `renderYearView()` / `renderWeekView()`
- `saveData()` - 儲存至 localStorage
- `syncFromFile()` - 從 data.json 重新載入（清除 localStorage）
- `exportData()` - 複製 JSON 至剪貼簿

### 介面功能
- 凍結左側欄位（類別、專案、工作項目名稱）
- 拖放功能：重新排序或移動項目至其他容器
- 甘特條拖曳：拖動中心移動日期，拖動邊緣調整長度
- 雙擊：行內編輯名稱或切換狀態
- 右鍵選單：變更狀態
- Modal 面板：完整編輯工作項目（點擊 ℹ 圖示）
- 底部統計列與折線圖

## 狀態標籤

- `in_progress` → 執行
- `background` → 管理
- `not_started` → 待安排

## 資料同步流程

1. 在瀏覽器中編輯（變更儲存至 localStorage）
2. 點擊「📋 Copy」匯出 JSON
3. 貼上至 `data.json` 並 commit
4. 點擊「🔄 Sync」從 `data.json` 重新載入（覆蓋 localStorage）

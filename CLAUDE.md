# Selah - Claude Code 指南

> סֶלָה — 停下，思考，再前行

## 專案概述

Selah 是一個個人專案進度管理系統，提供視覺化的甘特圖介面來追蹤任務和專案進度。

## 目錄結構

```
/
├── index.html      # Selah 甘特圖主應用
├── data.js         # 專案數據配置
├── CLAUDE.md       # Claude Code 指南
└── README.md       # 專案說明
```

## 技術棧

- 純 HTML/CSS/JavaScript（無框架依賴）
- GitHub Pages 部署

## 數據格式

編輯 `data.js` 來管理專案數據：

```javascript
{
  id: "task-id",           // 唯一識別碼
  name: "任務名稱",
  start: "2026-01-20",     // 開始日期 (YYYY-MM-DD)
  end: "2026-01-24",       // 結束日期
  status: "in_progress",   // 狀態: completed / in_progress / not_started / paused / cancelled
  milestone: "2026-01-22", // 里程碑日期（可選）
  note: "備註"             // 備註說明
}
```

## 功能

1. **全年甘特圖**：按天或按周顯示整年任務
2. **周甘特圖**：聚焦單周任務分佈
3. **排序**：按分群或開始日期排序
4. **狀態追蹤**：視覺化任務狀態
5. **里程碑標記**：重要日期標示

## 常見操作

### 新增專案群組
在 `data.js` 的 `groups` 陣列中新增：
```javascript
{
  id: "group-id",
  name: "群組名稱",
  color: "#hex-color",
  tasks: [...]
}
```

### 新增任務
在對應群組的 `tasks` 陣列中新增任務物件。

### 修改今天日期
在 `index.html` 底部的 `state` 物件中修改 `today` 值。

## 部署

推送到 `main` 分支後，GitHub Pages 會自動部署。

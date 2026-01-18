# Selah - Claude Code 指南

> סֶלָה — 停下，思考，再前行

## 專案概述

Selah 是一個個人專案進度管理系統，提供視覺化的甘特圖介面來追蹤任務和專案進度。

## 目錄結構

```
/
├── index.html      # Selah 甘特圖主應用
├── data.json       # 專案數據配置 (JSON 格式)
├── CLAUDE.md       # Claude Code 指南
└── README.md       # 專案說明
```

## 技術棧

- 純 HTML/CSS/JavaScript（無框架依賴）
- GitHub Pages 部署

## 數據格式

編輯 `data.json` 來管理專案數據：

```json
{
  "id": "task-id",
  "name": "任務名稱",
  "start": "2026-01-20",
  "end": "2026-01-24",
  "status": "in_progress",
  "note": "備註"
}
```

狀態值：`in_progress`（運行中）、`background`（背景執行）、`pending`（待安排）

## 功能

1. **全年甘特圖**：按天或按周顯示整年任務
2. **周甘特圖**：聚焦單周任務分佈
3. **排序**：按分群或開始日期排序
4. **狀態追蹤**：視覺化任務狀態
5. **里程碑標記**：重要日期標示

## 常見操作

### 資料同步流程
1. 在網頁上編輯資料（拖放、新增、修改）
2. 點擊 **📋 Copy** 複製 JSON 到剪貼簿
3. 貼上到 `data.json` 檔案並 commit
4. 如需從 `data.json` 重新載入，點擊 **🔄 Sync**

### 新增專案群組
在 `data.json` 的 `groups` 陣列中新增：
```json
{
  "id": "group-id",
  "name": "群組名稱",
  "color": "#hex-color",
  "tasks": []
}
```

### 新增任務
在對應群組的 `tasks` 陣列中新增任務物件。

## 部署

推送到 `main` 分支後，GitHub Pages 會自動部署。

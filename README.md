# Selah

> סֶלָה — 停下，思考，再前行

個人專案進度管理系統，提供視覺化甘特圖介面。

## Demo

**https://rexywchang.github.io/selah/**

## 功能

- **全年甘特圖** - 按天或按周顯示整年任務分佈
- **周甘特圖** - 聚焦單周任務細節
- **多種排序** - 按分群或開始日期排序
- **狀態追蹤** - 進行中、已完成、暫停、尚未開始
- **里程碑標記** - 重要交付日期標示
- **互動式 Tooltip** - 滑鼠懸停顯示任務詳情

## 使用方式

1. 在網頁上直接編輯（拖放、新增、修改）
2. 點擊 **📋 Copy** 複製 JSON
3. 貼上到 `data.json` 並 commit
4. 點擊 **🔄 Sync** 從 `data.json` 重新載入

## 數據格式

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

狀態：`in_progress`（運行中）、`background`（背景執行）、`pending`（待安排）

## 技術

- 純 HTML/CSS/JavaScript
- 無框架依賴
- GitHub Pages 部署

---

_Sponsored by [A-ADS](https://a-ads.com)_

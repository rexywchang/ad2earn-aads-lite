# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Selah (סֶלָה — "pause, think, move forward") is a personal Gantt chart application for project management. It's a single-file HTML/CSS/JS application with no build process or framework dependencies.

## Development

**No build tools required.** Open `index.html` directly in a browser. Data is stored in `data.json` and persisted to localStorage during editing.

**Deployment:** Push to `main` branch for automatic GitHub Pages deployment.

## Architecture

### Single File Structure
- `index.html` - Complete application (~2900 lines): HTML structure, CSS styles, and JavaScript logic
- `data.json` - Project data in JSON format

### Data Model (3-tier hierarchy)
```
Categories → Projects → Tasks
```

Each task has:
- `id`, `name`, `start`, `end` (dates as "YYYY-MM-DD" strings or null)
- `status`: `"in_progress"` (solid bar), `"background"` (striped bar), `"not_started"` (no bar)
- Optional: `milestone` (date), `note` (string)

### Key State Variables
```javascript
state.view        // 'week' or 'year'
state.displayMode // 'day', 'week', 'biweek', 'month' (year view granularity)
state.selectedWeek // 1-52 (for week view)
state.today       // Current date reference
```

### Core Functions
- `init()` → `loadData()` → `render()` → `renderYearView()` / `renderWeekView()`
- `saveData()` - Persists to localStorage
- `syncFromFile()` - Reloads from data.json (clears localStorage)
- `exportData()` - Copies JSON to clipboard

### UI Features
- Frozen left columns (category, project, task names)
- Drag-drop for reordering and moving items between containers
- Bar dragging for date adjustment (drag center to move, edges to resize)
- Double-click for inline name editing or status toggle
- Right-click context menu for status changes
- Modal for full task editing (via ℹ icon)
- Statistics row with line chart at bottom

## UI Language

Interface is in Traditional Chinese (Taiwan). Status labels:
- `in_progress` → "執行"
- `background` → "管理"
- `not_started` → "待安排"

## Data Sync Workflow

1. Edit in browser (changes go to localStorage)
2. Click "📋 Copy" to export JSON
3. Paste into `data.json` and commit
4. Click "🔄 Sync" to reload from `data.json` (overwrites localStorage)

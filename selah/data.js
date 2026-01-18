// Selah 專案數據
const SELAH_DATA = {
  meta: {
    name: "Selah",
    year: 2026,
    lastUpdated: "2026-01-18"
  },

  groups: [
    {
      id: "tasks",
      name: "Tasks (知識/學習)",
      color: "#6366f1",
      tasks: [
        {
          id: "opencv-ai",
          name: "OpenCV 與 AI 模型知識普及",
          start: "2026-01-18",
          end: "2026-01-20",
          status: "in_progress",
          milestone: "2026-01-20",
          note: "周一報告後 Close"
        }
      ]
    },
    {
      id: "apex-launchpad",
      name: "ApexLaunchpad 系列",
      color: "#8b5cf6",
      tasks: [
        {
          id: "al-home",
          name: "AL - Home Pages",
          start: "2026-01-01",
          end: "2026-01-17",
          status: "completed",
          note: "已完成"
        },
        {
          id: "al-euvic",
          name: "AL - Euvic",
          start: "2026-01-18",
          end: "2026-01-18",
          status: "in_progress",
          note: "今晚修好"
        },
        {
          id: "al-sow",
          name: "AL - SOW",
          start: null,
          end: null,
          status: "not_started",
          note: ""
        },
        {
          id: "al-aoi-align",
          name: "AL - AOI Align",
          start: null,
          end: null,
          status: "not_started",
          note: ""
        }
      ]
    },
    {
      id: "aoi",
      name: "AOI/檢測相關",
      color: "#ec4899",
      tasks: [
        {
          id: "wcd",
          name: "WCD 筆電瑕疵檢測",
          start: "2026-01-20",
          end: "2026-01-24",
          status: "in_progress",
          note: "研究圖、交辦"
        },
        {
          id: "smt-inference",
          name: "smt-inference code-review",
          start: "2026-01-18",
          end: "2026-01-24",
          status: "in_progress",
          note: "觀察運作"
        },
        {
          id: "wzsp6",
          name: "WZSP6 非標準設備",
          start: null,
          end: null,
          status: "not_started",
          note: "排在紅膠之後"
        },
        {
          id: "dip-handover",
          name: "DIP 交接",
          start: null,
          end: null,
          status: "not_started",
          note: "排在損件之後"
        }
      ]
    },
    {
      id: "apex-report",
      name: "ApexReport 系列",
      color: "#f59e0b",
      tasks: [
        {
          id: "apexreport",
          name: "ApexReport",
          start: "2026-01-20",
          end: "2026-01-22",
          status: "in_progress",
          milestone: "2026-01-22",
          note: "周三雛型"
        }
      ]
    },
    {
      id: "sow-client",
      name: "SOW/客戶專案",
      color: "#10b981",
      tasks: [
        {
          id: "wih-copyic",
          name: "WIH - COPYIC",
          start: "2026-01-18",
          end: "2026-01-24",
          status: "in_progress",
          note: "Peter 負責，監督"
        },
        {
          id: "sow-omron",
          name: "SOW - 歐姆龍",
          start: "2026-01-20",
          end: "2026-01-24",
          status: "in_progress",
          note: "周一釐清時程"
        }
      ]
    },
    {
      id: "personal",
      name: "個人成長",
      color: "#06b6d4",
      tasks: [
        {
          id: "personal-cd",
          name: "個人的持續交付",
          start: "2026-01-20",
          end: "2026-01-24",
          status: "in_progress",
          milestone: "2026-01-24",
          note: "本周要有結果"
        }
      ]
    }
  ]
};

// 狀態配置
const STATUS_CONFIG = {
  completed: { label: "已完成", color: "#22c55e", icon: "🟢" },
  in_progress: { label: "進行中", color: "#3b82f6", icon: "🔵" },
  paused: { label: "暫停中", color: "#eab308", icon: "🟡" },
  cancelled: { label: "已取消", color: "#ef4444", icon: "🔴" },
  not_started: { label: "尚未開始", color: "#9ca3af", icon: "⚪" }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SELAH_DATA, STATUS_CONFIG };
}

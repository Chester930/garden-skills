# 步驟 / 流程信息圖模板

本文件用於生成"步驟 / 流程 / how-to / 教程"風信息圖：

- 食譜 / 烘焙步驟圖
- 操作教程 / app 使用流程
- 健身動作分解
- 化妝 / 護膚流程
- 旅行 / 報銷 / 申請流程
- 育兒 / DIY 操作步驟

特徵：

- 每一步有明顯編號
- 每一步配一個簡潔插畫 / 圖標
- 步驟之間有指引箭頭 / 連接線
- 步驟數通常 3-7 步，最多 9 步
- 風格偏插畫感、溫暖、易懂（**與"工程精度流程圖"明顯不同**）

## 適用範圍

- 食譜 / 操作 / 教程展示
- "X 步學會..." 類內容
- DIY / 手工 / 改造步驟
- 育兒 / 健身 / 美妝步驟
- 用戶引導 / 入門指南

## 何時使用

- 用戶提到 "步驟 / 流程 / how-to / 教程 / X 步 / 操作指南 / 食譜 / 化妝步驟"
- 用戶希望"讀者照着一步一步做"
- 用戶希望視覺「插畫感、溫暖、易懂」（不是工程感）

不要使用：

- 用戶要的是「工程精度的流程圖」（菱形決策、Yes/No 分支） → 用 `technical-diagrams/flowchart-decision.md`
- 用戶要的是「漫畫分鏡」 → 用 `storyboards-and-sequences/recipe-process-flowchart.md`
- 用戶要的是「方法 pipeline 論文圖」 → 用 `academic-figures/method-pipeline-overview.md`
- 用戶要的是「便當格高密度信息」 → 用 `infographics/bento-grid-infographic.md`

## 缺失信息優先提問順序

1. 主題 + 步驟數（如"3 步學會做意面 / 5 步配置開發環境 / 7 步完成日常護膚"）
2. 每一步的具體內容（標題 + 一兩句說明）
3. 配色基調（暖系食物 / 清新護膚 / 卡通教程 / 黑板教學）
4. 排布方式（垂直瀑布 / 水平橫排 / 蜿蜒路徑 / 圓圈循環）
5. 是否帶封面 / 完成圖（開頭一張「成品圖」或結尾一張「成品展示」）
6. 比例（小紅書 3:4 / 公衆號 16:9 / 1:1）

## 主模板：步驟教程信息圖

📖 描述

整張圖按 3-7 個編號步驟排列，每一步包含：編號 badge + 步驟標題 + 步驟插畫 + 簡短文字說明，步驟之間用箭頭 / 連線串聯。

📝 提示詞

```json
{
  "type": "步驟教程信息圖",
  "goal": "生成一張讓讀者能照着一步步做的、插畫感強、溫暖易懂的教程圖",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"3:4 portrait\"}",
    "background": "{argument name=\"background\" default=\"warm cream #FAF6EE 帶輕微紙質感\"}"
  },
  "header": {
    "main_title": "{argument name=\"main_title\" default=\"5 步學會自製日式蛋包飯\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"零基礎也能成功 · 20 分鐘\"}",
    "optional_finished_image": "{argument name=\"finished_image\" default=\"右上角放一張'成品小圖' + 裝飾邊框\"}"
  },
  "palette": {
    "primary": "{argument name=\"primary\" default=\"warm orange #E89F71\"}",
    "secondary": "{argument name=\"secondary\" default=\"sage green #9FB89E\"}",
    "neutral": "{argument name=\"neutral\" default=\"deep brown #4A3A2E\"}",
    "rule": "限制 3-4 主色，每步插畫風格一致"
  },
  "layout": {
    "style": "{argument name=\"layout_style\" default=\"vertical-zigzag\"}",
    "options_explained": {
      "vertical-stack": "純垂直瀑布，每步一行",
      "vertical-zigzag": "Z 字形蛇形，奇偶步左右交替",
      "horizontal-row": "橫向 3-5 步並列",
      "circular": "圓環上分布步驟（適合循環型）",
      "winding-path": "蜿蜒小路，步驟沿路徑分布（適合烹飪 / 旅行）"
    }
  },
  "steps": {
    "count": "{argument name=\"step_count\" default=\"5\"}",
    "structure_per_step": [
      "大編號 badge（圓形 / 圓角方塊，統一色調，編號字體大且粗）",
      "步驟標題（4-8 字，加粗）",
      "插畫圖標 / 小場景（手繪感、單一物體或動作示意）",
      "1-2 行說明文字"
    ],
    "items_example": [
      "01 準備食材：雞蛋 3 個、米飯一碗、洋蔥 1/4、火腿丁",
      "02 洋蔥炒香：黃油下鍋，洋蔥炒至透明",
      "03 拌入米飯：加入米飯和火腿，調味翻炒",
      "04 攤蛋皮：另起鍋打散雞蛋，做成半熟蛋皮",
      "05 包入裝盤：把炒飯放上蛋皮，對摺成船形，擠番茄醬"
    ]
  },
  "connectors": {
    "style": "{argument name=\"connector_style\" default=\"hand-drawn curved arrows\"}",
    "rule": "步驟之間必須有視覺指引：箭頭 / 虛線 / 腳印 / 食材飛濺元素均可"
  },
  "footer": {
    "tip": "{argument name=\"tip\" default=\"💡 番茄醬可以換成韓式辣醬，味道更下飯\"}",
    "credit": "{argument name=\"credit\" default=\"@your_handle\"}"
  },
  "constraints": {
    "must_keep": [
      "每步插畫風格一致（手繪 / 扁平 / 卡通 二選一，不混)",
      "編號 badge 設計完全一致（顏色、字號、形狀）",
      "步驟之間視覺連接清晰",
      "文字不超過兩行 / 步",
      "插畫大小一致或按重要度梯度"
    ],
    "avoid": [
      "工程圖風（直角、監工色板、菱形決策框）",
      "每步插畫風格不同",
      "步驟數 < 3（太短不像教程）或 > 9（太長讀不動）",
      "無編號 / 編號風格不一致",
      "步驟說明超過 3 行（變成長文）",
      "用 Helvetica 等冷感字體（建議手寫感 / 圓體 / 友好字體）"
    ]
  }
}
```

### 參數策略

- **必問**：`step_count`、每一步的標題（即 `items_example` 實際內容）
- **可默認**：`background`、`palette`（按主題選——食物用暖橙、護膚用 macaron、技術教程用 mint）、`layout_style`（默認 vertical-zigzag）、`connector_style`
- **可隨機**：每步插畫的具體造型、connector 是箭頭還是虛線、裝飾物（飛濺 / 星點 / 小標籤）

### 自動補全策略

- 用戶只給主題（如"5 步學會做意面"）：自動補全 5 步具體內容、自動選暖色食物 palette、自動加成品小圖
- 用戶說"小紅書風" → 加手繪裝飾 + macaron 配色
- 用戶說"美妝 / 護膚" → palette 切換到 dusty pink + cream
- 用戶說"健身" → palette 切換到 mint + coral，插畫用人物動作示意
- 用戶說"DIY / 手工" → 加工具 emoji / 材料 list
- 用戶說"技術教程" → palette 切換 mint + slate，插畫用截圖框

## 變體 1：橫向 3-5 步流程

```json
{
  "type": "橫向步驟教程信息圖",
  "modify": {
    "aspect_ratio": "16:9 landscape",
    "layout_style": "horizontal-row",
    "step_count": "3-5",
    "rule": "每步等寬並列，步驟之間用粗箭頭連接，每步上方編號下方說明"
  }
}
```

適用：網頁 hero、PPT 單頁、產品 onboarding 頁面。

## 變體 2：蜿蜒小路 / Winding path 流程

```json
{
  "type": "蜿蜒小路步驟教程信息圖",
  "modify": {
    "layout_style": "winding-path",
    "background": "插畫感地圖底（草地 / 廚房 / 城市路面）",
    "rule": "步驟沿一條蜿蜒小路分布，路上畫腳印 / 食材 / 工具，每步在路邊的小卡片上",
    "vibe": "旅行遊記、烹飪冒險、兒童教程"
  }
}
```

適用：兒童教程、旅行規劃、有故事感的步驟展示。

## 變體 3：圓環循環步驟

```json
{
  "type": "圓環循環步驟信息圖",
  "modify": {
    "layout_style": "circular",
    "step_count": "4-8",
    "rule": "步驟排列在一個大圓環上，按順時針，箭頭沿圓環走，中央放主題字 + 總結",
    "vibe": "PDCA / 季節循環 / 生命周期 / 月度 routine"
  }
}
```

適用：PDCA 循環、月度計劃循環、健身 routine、季節循環。

## 避免事項

- 步驟數太多（>9）或太少（<3）
- 步驟插畫風格混雜（一步手繪一步扁平）
- 編號 badge 設計每步都不一樣
- 沒有視覺連接（步驟像散落的卡片）
- 用工程圖的菱形決策 / 直角箭頭 → 失去插畫溫度感
- 用 Helvetica / Arial 冷感字體
- 步驟說明超過 3 行 → 變長文，失去信息圖特性
- 把"流程圖"做成這個模板（流程圖請用 `technical-diagrams/flowchart-decision.md`）

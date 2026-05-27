# KPI 儀錶盤式信息圖模板

本文件用於生成"KPI / 儀錶盤 / 數據回顧"信息圖：

- 年度 / 季度 / 月度數據回顧圖
- 產品關鍵指標 overview
- 個人年度復盤（讀了多少書 / 跑了多少 km / 看了多少電影）
- 團隊業績看板
- 公司年報關鍵頁
- "X 年我做了什麼" 數據可視化總結

特徵：

- 大量數字 + 進度條 + 迷你圖表 + 圖標
- 多個獨立的"指標卡"組合
- 主指標用極大字號
- 視覺上像"信息可視化儀錶盤"，有數據感

## 適用範圍

- 年度 / 季度 / 月度回顧
- 個人復盤 / 數據總結
- 產品 / 業務 KPI 概覽
- 公司年報關鍵頁
- 用戶 wrapped（Spotify Wrapped 風）

## 何時使用

- 用戶提到 "KPI / dashboard / 儀錶盤 / 年度回顧 / wrapped / 數據總結 / 復盤"
- 用戶希望視覺「數據感強、像 SaaS 後臺、像 Wrapped」
- 用戶有真實的數字要展示

不要使用：

- 用戶要的是「便當格內容多元」（用 `infographics/bento-grid-infographic.md`）
- 用戶要的是「嚴肅出版級數據圖表」（用 `academic-figures/publication-chart.md`）
- 用戶要的是「商業報告 slide」（用 `slides-and-visual-docs/visual-report-page.md`）
- 用戶要的是「品牌識別系統板」（用 `branding-and-packaging/brand-identity-board.md`）

## 缺失信息優先提問順序

1. 主題 + 時間範圍（如"2025 年閱讀復盤 / Q3 業務概覽 / 月度跑步數據"）
2. 主指標（1-3 個最大的數字，比如「讀了 47 本書」「營收 ¥1,200 萬」「跑了 612 km」）
3. 次級指標（4-8 個，如「最常讀的類型」「最快單圈」「最忙的月份」）
4. 是否要趨勢圖 / 排行榜 / 佔比圖（哪些數據天然適合視覺化）
5. 配色（科技深色 / 暖系總結 / Spotify Wrapped 漸變 / 極簡白底）
6. 比例（小紅書 3:4 / 公衆號 16:9 / 1:1）

## 主模板：KPI 儀錶盤信息圖

📖 描述

整張圖被劃分爲多個指標卡，頂部是「主指標」（極大數字），下方排布次級指標卡（數字 + 進度環 / 迷你 chart / 排行榜 / 趨勢線），整體像一份精心設計的數據快照。

📝 提示詞

```json
{
  "type": "KPI 儀錶盤信息圖",
  "goal": "把一組數字以'數據可視化儀錶盤'的形式呈現，讓讀者一眼感知數據規模和分布",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"3:4 portrait\"}",
    "background": "{argument name=\"background\" default=\"deep ink #0F172A 漸變到 #1E293B（暗色模式）\"}",
    "alt_background_light": "warm cream #F8F5EE（如果用戶偏好亮色）"
  },
  "header": {
    "main_title": "{argument name=\"main_title\" default=\"2025 年閱讀復盤\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"全年讀完 / 在讀 / 棄讀 一覽\"}",
    "period": "{argument name=\"period\" default=\"2025.01 - 2025.12\"}"
  },
  "palette": {
    "primary_text": "{argument name=\"primary_text\" default=\"#F1F5F9\"}",
    "accent_main": "{argument name=\"accent_main\" default=\"cyan #22D3EE\"}",
    "accent_secondary": "{argument name=\"accent_secondary\" default=\"violet #A78BFA\"}",
    "accent_alert": "{argument name=\"accent_alert\" default=\"rose #FB7185\"}",
    "rule": "限制 4 主色，accent 用於'高亮關鍵數字'"
  },
  "hero_metrics": {
    "count": "{argument name=\"hero_count\" default=\"3\"}",
    "rule": "頂部 1-3 個'主指標'卡，每個用超大數字 + 簡短標籤 + 同比變化箭頭",
    "examples": [
      { "value": "47", "label": "本書讀完", "delta": "↑ +12 vs 2024" },
      { "value": "23,140", "label": "總頁數", "delta": "↑ +28%" },
      { "value": "8.2", "label": "平均評分", "delta": "↓ -0.1" }
    ]
  },
  "sub_metrics": {
    "count": "{argument name=\"sub_count\" default=\"6\"}",
    "card_types_to_use": [
      "progress_ring  — 圓環進度圖，中央數字 + 標籤（適合「目標完成度 78%」）",
      "bar_mini       — 迷你橫向 bar，多 entity 排行（適合「TOP 5 讀得最多的類型」）",
      "trend_line     — 迷你折線，沿時間趨勢（適合「每月閱讀數趨勢」）",
      "donut_split    — 佔比餅圖，2-4 段（適合「電子書 vs 紙質書 比例」）",
      "big_number_card — 單個大數字 + 標籤（適合「最快讀完一本：3 天」）",
      "ranked_list    — 編號列表，3-5 項（適合「TOP 3 評分最高的書」）"
    ],
    "rule": "每張卡都有: 卡片標題（小） + 主視覺（chart） + 簡短數據備註（≤1 行）",
    "examples": [
      { "type": "ranked_list", "title": "TOP 3 評分最高", "items": ["《...》 9.5", "《...》 9.3", "《...》 9.1"] },
      { "type": "donut_split", "title": "紙質 vs 電子", "values": "60% / 40%" },
      { "type": "trend_line", "title": "月度閱讀量", "delta": "高峰：8 月 7 本" },
      { "type": "progress_ring", "title": "年度目標", "value": "94%（47/50）" },
      { "type": "bar_mini", "title": "TOP 5 類型", "items": "科普 / 小說 / 歷史 / 經管 / 哲學" },
      { "type": "big_number_card", "title": "最快讀完一本", "value": "3 天" }
    ]
  },
  "layout": {
    "structure": "頂部 hero_metrics 橫排 → 中部 sub_metrics 網格（2 列 × 3 行 或 3 列 × 2 行） → 底部 footer 橫條",
    "card_styling": "圓角 16-24px，半透明深色填充 + 1px 淺邊框，內填充充足，文字層級清晰"
  },
  "footer": {
    "tagline": "{argument name=\"footer_tagline\" default=\"明年繼續 📚\"}",
    "credit": "{argument name=\"credit\" default=\"@your_handle · made with gpt-image-2\"}"
  },
  "constraints": {
    "must_keep": [
      "數字必須真實可讀（字號大、對比強）",
      "每張卡都有'數據視覺化'，不能純文字",
      "顏色對應明確：accent_main 用於關鍵數字，alert 只用於負向 / 異常",
      "卡片之間留固定 gap，圓角統一",
      "至少有 1 張卡用 trend_line 或 progress_ring（帶'變化'感）"
    ],
    "avoid": [
      "數字太小讀不清",
      "卡片內只有文字（失去儀錶盤感）",
      "顏色超過 5 種（不像 dashboard 像彩虹）",
      "圖表精度僞裝真實數據（如假冒精確坐標）→ 標明這是 illustrative",
      "把 dashboard 做成純表格",
      "字體使用 Comic Sans / 手寫體（數據感丟失）"
    ]
  }
}
```

### 參數策略

- **必問**：`hero_metrics`（至少 1 個主指標的具體數字 + 標籤）、`sub_metrics` 數量、配色偏好（暗 / 亮）
- **可默認**：`aspect_ratio`（3:4）、`palette`（cyan + violet 暗色）、卡片圓角 / 間距
- **可隨機**：每張 sub 卡選哪種 chart 類型（如果用戶沒指定）

### 自動補全策略

- 用戶只給主題和幾個數字 → 自動補全合理的卡片類型組合，確保至少 1 個 trend、1 個 ranked_list、1 個 progress_ring
- 用戶說"Spotify Wrapped 風" → 切換到 vivid 漸變背景（粉紫橙），字體更大膽
- 用戶說"年報嚴肅版" → 切換到亮色背景 + mono palette，字體改 Inter，去掉 emoji
- 用戶說"個人復盤" → 加 footer credit，用暖色 accent，可加可愛 emoji

## 變體 1：Spotify Wrapped 風

```json
{
  "type": "Wrapped 風 KPI 儀錶盤",
  "modify": {
    "background": "vivid 漸變（紫紅 → 藍紫 → 橙）",
    "typography": "extreme bold display font, slogan-style",
    "hero_metrics": "數字超大佔滿屏寬，每頁只放 1 個主指標",
    "vibe": "像音樂播放器年度總結，有節奏感、強情緒"
  }
}
```

適用：年度個人總結、品牌 wrapped 活動、社交平臺年終圖。

## 變體 2：商業 / 業務 dashboard 嚴肅版

```json
{
  "type": "商業業務 KPI dashboard 信息圖",
  "modify": {
    "background": "純白 #FFFFFF 或極淺灰 #F8FAFC",
    "palette": "primary text 深灰 #0F172A，accent 單一深藍 #1E40AF",
    "typography": "Inter / Söhne, 極克制",
    "vibe": "投資人 deck / 年報 / 季報"
  }
}
```

適用：公司年報、季度業務回顧、投資人簡報。

## 變體 3：復古 / Newspaper 風數據回顧

```json
{
  "type": "復古報紙風 KPI 信息圖",
  "modify": {
    "background": "warm aged paper",
    "palette": "黑 + 紅 + 米色 三色",
    "typography": "serif title (Playfair / Bodoni) + monospace 數字",
    "vibe": "像 The Economist / Wall Street Journal 數據特輯頁"
  }
}
```

適用：媒體年度數據特輯、復古風格內容、嚴肅讀者向。

## 避免事項

- 數據全是文字 → 失去 dashboard 視覺化的意義
- 卡片之間沒有 gap → 看不出獨立性
- 顏色超過 5 種主色 → 像彩虹板不像 dashboard
- 用 Comic Sans 等手寫感字體 → 數據可信度直接歸零
- 假裝精確（虛構 X 軸 Y 軸標尺真值）→ 誤導
- 卡片內信息空蕩（一個大數字+一個標籤就完了）→ 留白過度
- 沒有 hero metric（每個卡同等大小）→ 失去視覺重心

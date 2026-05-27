# 對比信息圖模板

本文件用於生成"二元 / 多元對比"信息圖：

- A vs B 雙欄對比（產品 / 概念 / 方法）
- 三方對比（如三種方案 / 三檔套餐）
- 多維度評測對比（多產品 × 多維度）
- 優劣 / 利弊 / 正反對比
- "傳統做法 vs 新做法"科普圖
- 價格檔位對比圖

特徵：

- 視覺上左右 / 多列分欄，對齊嚴格
- 每列有清晰的列首（角色 / 名稱 / 大圖）
- 每行是一個對比維度
- 用 ✓ ✗ 顏色 評分等手段做明顯區分
- 一眼能看出"誰贏"

## 適用範圍

- 產品 vs 產品對比圖
- 方法 / 方案 / 流派對比圖
- 套餐檔位對比圖
- 優劣 / 利弊對比圖
- "誤區 vs 正解"科普

## 何時使用

- 用戶提到 "對比 / 比較 / vs / pk / 優劣 / 利弊 / 雙欄 / 多列對比 / 套餐 / 檔位"
- 用戶希望"讀者一眼分清誰更適合自己"
- 用戶希望視覺上有"對決感 / 選擇感"

不要使用：

- 用戶要的是「步驟 / 流程」（用 `infographics/step-by-step-infographic.md`）
- 用戶要的是「便當格高密度信息」（用 `infographics/bento-grid-infographic.md`）
- 用戶要的是「Slide 單頁講解」（用 `slides-and-visual-docs/`）
- 用戶要的是「真正的工程對比表 / 配置表」純表格圖（用 `academic-figures/qualitative-comparison-grid.md`）

## 缺失信息優先提問順序

1. 對比對象數量（2 / 3 / 4）
2. 每個對象的名稱
3. 對比維度數量（建議 4-7 個維度，比如：價格、性能、易用性、擴展性、生態、學習曲線）
4. 每個維度下每個對象的具體差異
5. 是否要明顯「勝出標記」（皇冠 / TOP 1 標籤）
6. 配色基調（中性 / 暖色 / 科技 / 黑白）
7. 比例（小紅書 3:4 / 公衆號 16:9 / 1:1）

## 主模板：雙列對比信息圖

📖 描述

整張圖分爲左右兩列，列首是兩個被對比的對象（帶 logo / 頭像 / 大圖），下面 4-7 行對比維度，每行用圖標 + 短文字 + 顏色 / ✓✗ 表達差異，底部一句話結論。

📝 提示詞

```json
{
  "type": "雙列對比信息圖",
  "goal": "生成一張讓讀者一眼分清「誰更適合自己」的對比圖",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"3:4 portrait\"}",
    "background": "{argument name=\"background\" default=\"warm off-white #F8F6F2\"}",
    "split_line": "{argument name=\"split_line\" default=\"中央一條細分割線 / 或一個交錯的對決符號 'VS'\"}"
  },
  "header": {
    "main_title": "{argument name=\"main_title\" default=\"React vs Vue 選誰？2026 實戰對比\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"7 個維度幫你拍板\"}"
  },
  "columns": [
    {
      "id": "left",
      "name": "{argument name=\"left_name\" default=\"React\"}",
      "color_theme": "{argument name=\"left_color\" default=\"cyan #61DAFB + 深灰\"}",
      "header_visual": "{argument name=\"left_visual\" default=\"React logo (大尺寸 + 淺色底卡片)\"}",
      "tagline": "{argument name=\"left_tagline\" default=\"靈活、生態強、社區大\"}"
    },
    {
      "id": "right",
      "name": "{argument name=\"right_name\" default=\"Vue\"}",
      "color_theme": "{argument name=\"right_color\" default=\"emerald #41B883 + 深灰\"}",
      "header_visual": "{argument name=\"right_visual\" default=\"Vue logo (大尺寸 + 淺色底卡片)\"}",
      "tagline": "{argument name=\"right_tagline\" default=\"上手快、文檔好、約定多\"}"
    }
  ],
  "comparison_rows": {
    "count": "{argument name=\"row_count\" default=\"7\"}",
    "structure": "每一行：左側維度圖標 + 維度名（居中）→ 左列表現 + 右列表現，右側用色塊 / ✓✗ / 1-5 星標記",
    "items": [
      "學習曲線",
      "上手速度",
      "生態成熟度",
      "招聘市場",
      "性能表現",
      "TypeScript 體驗",
      "適合的項目類型"
    ],
    "marker_style": "{argument name=\"marker_style\" default=\"5 星評分 + 顏色對比\"}",
    "highlight_winner_per_row": true
  },
  "footer": {
    "verdict": "{argument name=\"verdict\" default=\"看團隊偏好：要快上手選 Vue，要長期生態選 React\"}",
    "winner_badge": {
      "enabled": "{argument name=\"winner_badge_enabled\" default=\"false\"}",
      "label": "{argument name=\"winner_badge_label\" default=\"Editor's Choice\"}",
      "position": "left | right"
    }
  },
  "constraints": {
    "must_keep": [
      "左右列寬度對稱",
      "每行高度對齊",
      "維度名居中（屬於"中柱"），左右各表現各的",
      "顏色不要讓一邊明顯壓另一邊（除非顯式 winner）",
      "字體一致",
      "數據 / 評分有視覺化標記，不要純文字"
    ],
    "avoid": [
      "左右列尺寸不對稱",
      "維度行沒有圖標",
      "顏色衝突讓人分不清哪邊是哪邊",
      "對比維度只有 1-2 個（信息密度太低）",
      "對比維度 > 10 個（每行變得太擠）",
      "結論太主觀（最好客觀一句話總結）"
    ]
  }
}
```

### 參數策略

- **必問**：`left_name`、`right_name`、`row_count`（或具體維度列表）
- **可默認**：`background`、`marker_style`（5 星）、`color_theme`（基於品牌色 / 默認色）
- **可隨機**：維度圖標具體造型、`split_line` 是細線還是 VS 符號

### 自動補全策略

- 用戶只給兩個對象時（如"React vs Vue"）：自動推斷 7 個常見對比維度
- 用戶只給主題（如"對比 React 和 Vue"）：補全名稱、tagline、色彩主題（用品牌色）
- 用戶沒說 winner：默認不放 winner badge，結論寫中立
- 用戶說"我要明顯的對決感" → 加 VS 符號 + winner badge + 更對比的色彩

## 變體 1：三列對比（套餐檔位 / 三方案）

```json
{
  "type": "三列檔位對比信息圖",
  "columns_count": 3,
  "column_examples": ["Free", "Pro", "Enterprise"],
  "rule": "中間列稍寬 + 底色稍亮 + 加 'Most Popular' 角標，行 = 功能維度 + ✓ ✗ 量化指標"
}
```

適用：SaaS 定價頁、套餐對比、會員等級對比。

## 變體 2：誤區 vs 正解（科普向）

```json
{
  "type": "誤區 vs 正解 二欄對比",
  "left_column": {
    "label": "❌ 常見誤區",
    "color": "muted red / gray",
    "items": "3-5 個常見錯誤說法"
  },
  "right_column": {
    "label": "✅ 正確做法",
    "color": "muted green / fresh",
    "items": "3-5 條正確說法 + 簡單解釋"
  },
  "vibe": "教育 / 科普 / 健康 / 育兒向"
}
```

適用：健康科普、育兒誤區、消費避坑、健身誤區。

## 變體 3：多產品 × 多維度評測矩陣（橫向）

```json
{
  "type": "多列橫向評測矩陣",
  "layout": "頂行 = 多個產品（4-6 個），左列 = 評測維度（5-8 行），格內 = 評分 / ✓✗ / 簡短文字",
  "highlight_rule": "每一行最高分用顏色高亮 + 每列底部統計冠軍次數",
  "vibe": "媒體測評圖、消費報告"
}
```

適用：相機評測、筆記本評測、APP 橫評、SUV 橫評。

## 避免事項

- 雙列寬度不對稱（視覺偏向感 → 顯失公允）
- 行高不一致 → 看不齊對比項
- 沒有維度圖標 → 行與行難以區分
- 顏色完全相同 → 失去左右區分
- 顏色對比過強（一邊鮮紅一邊鮮綠）→ 像情緒化判決
- 評分只有 1 / 0 表達 → 沒有梯度感（建議 1-5 星 / 圓點 / 進度條）
- 沒有結論 footer → 讀者不知道你想推哪個
- 把對比圖做成純文字表格 → 失去信息圖的"一眼可讀"

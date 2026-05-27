# 高密度講解型 Slides 模板

本文件用於生成「一頁能講清楚一個主題」的高密度 Slides 視覺，靈感來源於：

- 日本霞關風格政府 Slides
- Irasutoya 簡約溫馨插畫
- 商業諮詢公司一頁紙總結
- 學術海報一頁式排版

特徵：

- 信息密度極高
- 有標題區 + 多個段落 + 多塊圖示
- 色板克制（≤ 3 色）
- 文字 + 圖標 + 小插畫混合

## 適用範圍

- 單頁講解 Slides
- 公開課 / 培訓 / 演講單頁講義
- 自媒體長圖首頁
- 公司一頁紙方案概述

## 何時使用

- 用戶提到「講解 Slides / 高密度頁 / 一頁講清楚 / 政策風 / Irasutoya 風」
- 用戶希望大量文字與插畫共存
- 用戶希望一張圖就能傳播信息

不要使用：

- 用戶要的是政策公告風（用 `policy-style-slide.md`）
- 用戶要的是商業報告（用 `visual-report-page.md`）
- 用戶要的是教學示意圖（用 `educational-diagram-slide.md`）

## 缺失信息優先提問順序

1. 主題
2. 風格傾向：溫馨插畫風 / 政府嚴謹風 / 學術風 / 諮詢風
3. 信息密度（中等 / 高 / 極高）
4. 章節數（3-6 段）
5. 是否需要英文 / 日文 / 雙語
6. 是否需要中央主圖

## 主模板：Irasutoya × 霞關風混合 Slides

📖 描述

整體一頁 Slide，包含主標題 + 副標題 + 多個段落 + 簡潔插畫 + 必要圖示。

📝 提示詞

```json
{
  "type": "高密度講解型 Slide",
  "goal": "生成一張可作爲講解課件 / 公衆號長圖首頁 / 培訓單頁的高密度 Slide",
  "style": {
    "format": "{argument name=\"format\" default=\"ponchi-e diagram\"}",
    "blend": "Irasutoya 柔和溫馨插畫 + 霞關風格 Slides 高信息密度",
    "color_palette": "{argument name=\"color palette\" default=\"米白底 + 朱紅 + 深灰\"}"
  },
  "title_section": {
    "main_title": "{argument name=\"main title\" default=\"桃太郎物語全圖解\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"用一張圖理解這個故事\"}",
    "language": "{argument name=\"language\" default=\"日文\"}"
  },
  "centerpiece": {
    "enabled": "{argument name=\"centerpiece enabled\" default=\"true\"}",
    "description": "{argument name=\"centerpiece description\" default=\"畫面中央偏上，桃太郎站在桃子上，狗、猴、雉雞圍繞\"}"
  },
  "sections": {
    "count": "{argument name=\"section count\" default=\"5\"}",
    "items": [
      "{argument name=\"section 1\" default=\"出生：從桃子裡誕生\"}",
      "{argument name=\"section 2\" default=\"成長：勇敢善良的少年\"}",
      "{argument name=\"section 3\" default=\"出發：前往鬼之島\"}",
      "{argument name=\"section 4\" default=\"夥伴：狗 / 猴 / 雉雞\"}",
      "{argument name=\"section 5\" default=\"勝利：擊敗鬼並歸鄉\"}"
    ],
    "section_block_style": "每節由小插畫 + 標題 + 2-3 句解釋構成"
  },
  "annotations": {
    "style": "細線引線 + 小標籤",
    "rule": "標註線不能與中央主體交叉"
  },
  "footer": {
    "summary": "{argument name=\"summary\" default=\"善良 + 勇氣 + 夥伴，是這個故事的內核\"}"
  },
  "constraints": {
    "must_keep": [
      "信息密度高，但有清晰閱讀順序",
      "中央主體作爲視覺錨點",
      "插畫風與文字風一致",
      "色板嚴格 ≤ 3 色"
    ],
    "avoid": [
      "段落字號大小不一",
      "插畫過度精緻破壞統一感",
      "文字鋪滿到邊緣沒有留白",
      "出現奇怪的英文混排"
    ]
  }
}
```

### 參數策略

- 必問：主題、章節數
- 可默認：色板、副標題、底部總結句
- 可隨機：每節插畫的具體造型

### 自動補全策略

- 用戶給主題時：自動決定章節切分（建議 4-6 節）
- 風格默認 Irasutoya × 霞關混合
- 中央主體根據主題自動選

## 變體 1：商業諮詢公司一頁紙

📝 提示詞

```json
{
  "type": "商業諮詢一頁紙 Slide",
  "style": {
    "color_palette": "深藍 + 灰 + 白",
    "blend": "現代諮詢公司風格 + 極簡圖標"
  },
  "title_section": {
    "main_title": "{argument name=\"main title\" default=\"AI 時代的產品策略\"}",
    "subtitle": "一頁講清楚戰略思考"
  },
  "sections": {
    "count": 4,
    "items": [
      "現狀診斷",
      "核心機會",
      "策略路徑",
      "關鍵裏程碑"
    ]
  },
  "constraints": {
    "must_feel": "理性、克制、可信賴"
  }
}
```

## 變體 2：學術海報一頁式

📝 提示詞

```json
{
  "type": "學術海報一頁式 Slide",
  "style": {
    "color_palette": "學術藍 + 米色 + 黑",
    "blend": "學術海報 + 論文式排版"
  },
  "title_section": {
    "main_title": "{argument name=\"paper title\" default=\"基於多模態信號的圖像質量評估方法\"}",
    "subtitle": "一頁摘要圖"
  },
  "sections": {
    "items": ["研究問題", "方法概述", "實驗結果", "結論與未來工作"]
  },
  "constraints": {
    "must_feel": "學術、嚴謹、可投稿級"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "高密度講解 Slide 自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶只給主題，自動選風格、章節、色板、中央主體",
  "constraints": {
    "must_feel": "出版物級"
  }
}
```

## 避免事項

- 不要讓正文字號 > 標題
- 不要讓單頁章節超過 6 個
- 不要把中央主體放得太大蓋過其他段落
- 不要混入與主風格不同的插畫來源
- 不要在一頁裏中文 + 英文 + 日文都出現

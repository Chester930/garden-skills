# 雙語 / 多語版式視覺模板

本文件用於"中英 / 中日 等雙語並置的版式視覺"：

- 中英對照海報
- 中日對照科普圖
- 雙語展會 / 文化節物料
- 跨文化品牌主視覺
- 學術 / 文化機構出版物封面

特徵：

- 兩種語言並置（不是簡單翻譯，是設計語言）
- 通常一種語言爲主、一種爲輔 / 註解
- 字體嚴格分離（中文用中文字體 / 英文用英文字體）
- 字號層級清晰
- 重視留白與對齊

## 適用範圍

- 中英 / 中日海報
- 跨文化品牌物料
- 學術 / 文化展覽主視覺

## 何時使用

- 用戶提到"中英 / 中日 / 雙語 / bilingual"
- 用戶希望文化 / 學術 / 高級感的雙語視覺

不要使用：

- 單語大字海報（用 `title-safe-poster.md`）
- 純產品海報（用 `poster-and-packaging/brand-poster.md`）
- 雜誌封面（用 `poster-and-campaigns/editorial-cover.md`）

## 缺失信息優先提問順序

1. 主語言 + 輔語言
2. 主標語 + 副標語（兩種語言分別給）
3. 主題 / 行業
4. 字體風格（serif / sans / 襯線 / 圓體）
5. 主色 1-2 個
6. 比例

## 主模板：中英對照文化海報

📖 描述

整體一張圖，中文爲主、英文爲輔，通過嚴格的版式系統建立層級。

📝 提示詞

```json
{
  "type": "中英對照文化海報",
  "goal": "生成一張設計感強的中英雙語海報，可作爲文化活動 / 展覽 / 品牌主視覺",
  "languages": {
    "primary": "{argument name=\"primary language\" default=\"中文\"}",
    "secondary": "{argument name=\"secondary language\" default=\"英文\"}"
  },
  "title_block": {
    "main_zh": "{argument name=\"main title zh\" default=\"東方不復\"}",
    "main_en": "{argument name=\"main title en\" default=\"THE ORIENT REIMAGINED\"}",
    "subtitle_zh": "{argument name=\"subtitle zh\" default=\"當代東方美學展\"}",
    "subtitle_en": "{argument name=\"subtitle en\" default=\"A Contemporary Eastern Aesthetic Exhibition\"}",
    "alignment": "{argument name=\"title alignment\" default=\"左上對齊\"}",
    "hierarchy_rule": "中文最大 → 英文中等 → 中文副標 → 英文副標"
  },
  "meta": {
    "date": "{argument name=\"date\" default=\"2026.5.1 - 2026.5.31\"}",
    "venue": "{argument name=\"venue\" default=\"X 美術館 · 上海\"}",
    "presenter": "{argument name=\"presenter\" default=\"X CULTURAL FOUNDATION\"}"
  },
  "main_visual": {
    "description": "{argument name=\"main visual\" default=\"東方山水 + 現代幾何切割\"}",
    "position": "{argument name=\"main visual position\" default=\"右下大區\"}"
  },
  "design": {
    "primary_color": "{argument name=\"primary color\" default=\"#A52A2A 硃砂紅\"}",
    "background_color": "{argument name=\"background\" default=\"#F4EEDC 古紙米黃\"}",
    "zh_font": "{argument name=\"zh font\" default=\"宋體 / 楷體 / 現代襯線\"}",
    "en_font": "{argument name=\"en font\" default=\"現代 serif（Playfair / Cormorant）\"}",
    "grid": "{argument name=\"grid\" default=\"嚴格 12 欄柵格 + 細輔助線（最終輸出隱藏）\"}"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4\"}",
  "constraints": {
    "must_keep": [
      "中英文字體嚴格分離",
      "層級清晰：標題 > 副標 > 元信息",
      "留白充分",
      "色板 ≤ 3 色"
    ],
    "avoid": [
      "中英用同一字體（最常見錯誤）",
      "翻譯錯誤（中英要等價不要錯譯）",
      "中英文字號差異過大或過小",
      "塞太多元素"
    ]
  }
}
```

### 參數策略

- 必問：主標語中英文、副標
- 可默認：layout、字體、配色、柵格
- 可隨機：主視覺細節

### 自動補全策略

- 用戶給中文主標語時：自動生成英文翻譯 + 副標 + 元信息
- 字體默認中文襯線 + 英文 serif 配對
- 默認 3:4

## 變體 1：中日對照設計

📝 提示詞

```json
{
  "type": "中日對照設計",
  "languages": {
    "primary": "日文",
    "secondary": "中文"
  },
  "title_block": {
    "main_zh": "{argument name=\"zh\" default=\"漫步京都\"}",
    "main_en": "{argument name=\"jp\" default=\"京を歩く\"}"
  },
  "design": {
    "zh_font": "黑體 / 思源宋體",
    "en_font": "ヒラギノ明朝 / 源ノ明朝（註：實際是日文字體）"
  },
  "constraints": {
    "must_feel": "日式雜誌感"
  }
}
```

## 變體 2：科普 / 學術風雙語

📝 提示詞

```json
{
  "type": "科普 / 學術風雙語海報",
  "title_block": {
    "main_zh": "{argument name=\"main zh\" default=\"光合作用\"}",
    "main_en": "{argument name=\"main en\" default=\"PHOTOSYNTHESIS\"}"
  },
  "main_visual": {
    "description": "示意圖 + 標註線"
  },
  "design": {
    "primary_color": "學術墨綠",
    "background_color": "白色"
  },
  "constraints": {
    "must_feel": "教科書插頁 + 現代設計"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "雙語版式自動補全",
  "mode": "auto-fill",
  "rule": "用戶給主標語（一種語言），自動生成另一種語言 + 副標 + 元信息 + 設計",
  "constraints": {
    "must_feel": "可發美術館"
  }
}
```

## 避免事項

- 不要讓中英用同一字體
- 不要讓中英翻譯錯位 / 錯譯
- 不要讓中英字號相同（應有主次層級）
- 不要讓兩種語言塞滿畫面（要留白）
- 不要混用 > 2 種字體家族（中文 1 + 英文 1 是上限）
- 不要讓英文用宋體或日文字體（錯配）

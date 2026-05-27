# 品牌識別系統板模板

本文件用於"一張圖展示品牌完整識別系統"的視覺：

- 品牌 logo + 字體 + 配色 + 應用場景
- VI 摘要單頁
- 品牌提案 board
- 品牌指南 cover
- 設計師 case study 單頁

特徵：

- 一張大圖分多區塊
- logo 應用 + 配色板 + 字體規範 + 實物 mockup
- 強調"系統感 + 專業感"
- 通常帶 grid + label
- 偏冷靜、不過度裝飾

## 適用範圍

- 品牌識別系統板（VI summary）
- 品牌提案 board
- 設計師作品集 single page

## 何時使用

- 用戶提到"VI / 品牌識別 / 品牌系統 / brand board / brand guideline cover"
- 用戶希望一張圖展示品牌全套

不要使用：

- 吉祥物品牌套裝（用 `mascot-brand-kit.md`）
- 單個海報（用 `poster-and-campaigns/brand-poster.md`）
- 包裝 mockup 單圖（用 `cosmetic-packaging.md`）

## 缺失信息優先提問順序

1. 品牌名 + 一句定位
2. 行業 / 受衆
3. logo 主形態（文字 / 圖形 / 組合）
4. 主色 1-2 個
5. 字體偏好（襯線 / 無襯線 / 手寫）
6. 是否需要包裝 / 名片 / 海報 mockup

## 主模板：品牌識別系統板

📖 描述

整體一張大圖，分 logo 區 + 配色區 + 字體區 + 應用 mockup 區。

📝 提示詞

```json
{
  "type": "品牌識別系統板",
  "goal": "生成一張可作爲 VI summary / brand board 的品牌識別系統單頁",
  "brand": {
    "name": "{argument name=\"brand name\" default=\"AURORA\"}",
    "tagline": "{argument name=\"tagline\" default=\"光，讓生活柔軟\"}",
    "industry": "{argument name=\"industry\" default=\"家居燈光\"}",
    "personality": "{argument name=\"personality\" default=\"溫柔、現代、克制\"}"
  },
  "regions": {
    "logo": {
      "position": "{argument name=\"logo position\" default=\"左上大區\"}",
      "primary_logo": "{argument name=\"primary logo\" default=\"AURORA 字標 + 圓形光暈圖形\"}",
      "secondary_logos": ["黑白單色版", "圖形版（無文字）", "豎排版"],
      "background_test": "深底 / 淺底各展示一次"
    },
    "color_palette": {
      "position": "{argument name=\"color position\" default=\"右上\"}",
      "primary": [
        "{argument name=\"primary color 1\" default=\"#0F4C81 海軍藍\"}",
        "{argument name=\"primary color 2\" default=\"#FFD166 暖金\"}"
      ],
      "secondary": [
        "{argument name=\"secondary color 1\" default=\"#F4F1EA 米白\"}",
        "{argument name=\"secondary color 2\" default=\"#222 深灰\"}"
      ],
      "swatch_design": "色塊 + HEX + 中文名"
    },
    "typography": {
      "position": "{argument name=\"type position\" default=\"左下\"}",
      "headline_font": "{argument name=\"headline font\" default=\"現代 serif（如 Playfair Display）\"}",
      "body_font": "{argument name=\"body font\" default=\"中文圓體 + 英文 sans\"}",
      "demo_block": "Aa Bb Cc 1234 + 一句中文 + 一句英文"
    },
    "applications": {
      "position": "{argument name=\"app position\" default=\"右下\"}",
      "mockups": [
        "{argument name=\"mockup 1\" default=\"名片正反面\"}",
        "{argument name=\"mockup 2\" default=\"產品包裝盒\"}",
        "{argument name=\"mockup 3\" default=\"app icon + 閃屏\"}"
      ]
    }
  },
  "style": {
    "art_style": "{argument name=\"art style\" default=\"現代極簡 brand board，米色背景 + 微紙紋\"}",
    "grid": "細灰色輔助線"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4\"}",
  "constraints": {
    "must_keep": [
      "4 個區塊邊界清晰",
      "logo 區始終居首位",
      "配色板 ≤ 6 色 + HEX 可讀",
      "應用 mockup 風格統一"
    ],
    "avoid": [
      "塞太多元素導致每區無呼吸感",
      "字體超過 2 種家族",
      "顏色超過 6 種",
      "缺少 HEX 編號"
    ]
  }
}
```

### 參數策略

- 必問：品牌名、行業、主色、定位
- 可默認：layout、字體推薦、應用 mockup
- 可隨機：mockup 實物細節

### 自動補全策略

- 用戶給品牌名 + 行業 + 一種性格關鍵詞時：自動展開 logo + 配色 + 字體 + 3 個 mockup
- 默認"現代極簡"風
- 默認豎版 3:4

## 變體 1：極致極簡 brand board（僅 logo + 顏色）

📝 提示詞

```json
{
  "type": "極簡 brand board",
  "regions": {
    "logo": {"primary_logo": "字標 + 極簡圖形", "background_test": "白底 + 純黑底"},
    "color_palette": {"primary": ["#000", "#FFF", "#FFD166"]},
    "typography": {"demo_block": "Aa Bb"},
    "applications": null
  },
  "constraints": {
    "must_feel": "瑞士平面 / Japanese minimal"
  }
}
```

## 變體 2：高密度 brand board（含語氣、icon 系統）

📝 提示詞

```json
{
  "type": "高密度 brand board",
  "regions": {
    "logo": {"primary_logo": "..."},
    "color_palette": {"primary": ["..."], "secondary": ["..."]},
    "typography": {"demo_block": "..."},
    "applications": {"mockups": ["名片", "包裝", "海報", "app icon", "網站 hero"]}
  },
  "extras": {
    "icon_system": "12 個統一風格圖標網格",
    "tone_of_voice": "3 句品牌語氣示例"
  },
  "constraints": {
    "must_feel": "完整可印刷 brand book cover"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "Brand board 自動補全",
  "mode": "auto-fill",
  "rule": "用戶給品牌名 + 行業 + 一句性格描述，自動決定 logo / 配色 / 字體 / 應用 mockup",
  "constraints": {
    "must_feel": "可作爲客戶提案首頁"
  }
}
```

## 避免事項

- 不要讓 logo 區被壓縮到不顯眼
- 不要讓配色 > 6 種
- 不要讓字體 > 2 個家族
- 不要讓 mockup 過於花哨破壞專業感
- 不要漏掉 HEX 標註
- 不要讓背景出現強烈紋理

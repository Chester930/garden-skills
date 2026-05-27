# 品牌主海報模板

本文件用於生成「一張能代表品牌某一階段表達的主海報」：

- 新品發布主海報
- 季度 campaign 主圖
- 品牌升級主圖
- 節日活動主海報
- 公司一周年主圖

特徵：

- 一句強 slogan
- 視覺中心明確
- 品牌色嚴格統一
- 適合橫屏 / 豎屏 / 方屏多版本

## 適用範圍

- 單張品牌主海報
- 大型 campaign 主視覺
- 節日 / 周年 / 重要節點主圖

## 何時使用

- 用戶提到「品牌海報 / 主視覺 / KV / 活動主圖 / slogan 海報」
- 用戶希望一張圖能代表品牌

不要使用：

- 系列主視覺（用 `campaign-kv.md`）
- Web banner（用 `banner-hero.md`）
- 雜誌封面（用 `editorial-cover.md`）

## 缺失信息優先提問順序

1. 品牌名 + 行業
2. 主題 / slogan
3. 視覺調性：未來感 / 復古 / 極簡 / 國潮 / 街頭
4. 是否有人物 / 產品 / 場景
5. 比例：豎屏 / 橫屏 / 方形
6. 色板

## 主模板：單張品牌主海報

📖 描述

整體一張海報，主視覺居中或大佔比，slogan 清晰，品牌 logo 在角落，適合作爲單圖傳播主圖。

📝 提示詞

```json
{
  "type": "品牌主海報",
  "goal": "生成一張能直接作爲發布會主圖、活動主視覺、社交首圖的品牌主海報",
  "brand": {
    "name": "{argument name=\"brand name\" default=\"AURORA\"}",
    "industry": "{argument name=\"industry\" default=\"消費電子\"}"
  },
  "visual_tone": {
    "aesthetic": "{argument name=\"aesthetic\" default=\"極簡未來感\"}",
    "color_palette": "{argument name=\"color palette\" default=\"深藍 + 銀白 + 紫羅蘭高光\"}",
    "lighting": "{argument name=\"lighting\" default=\"邊緣冷光 + 中央柔光\"}"
  },
  "centerpiece": {
    "type": "{argument name=\"centerpiece type\" default=\"產品\"}",
    "description": "{argument name=\"centerpiece description\" default=\"全新一代旗艦耳機，懸浮在畫面中央，1/3 處有微微輝光\"}",
    "scale": "{argument name=\"scale\" default=\"佔畫面 50%\"}"
  },
  "slogan": {
    "main": "{argument name=\"main slogan\" default=\"聽見，未被聽見的一切\"}",
    "sub": "{argument name=\"sub slogan\" default=\"AURORA Pro · 全新一代主動降噪\"}"
  },
  "logo_placement": {
    "position": "{argument name=\"logo position\" default=\"右下角\"}",
    "size": "適中，不搶主視覺"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4 豎版\"}",
  "constraints": {
    "must_keep": [
      "主視覺作爲視覺錨點",
      "slogan 不超過 12 字",
      "品牌 logo 必須出現且可讀",
      "色板嚴格一致"
    ],
    "avoid": [
      "信息密度過高",
      "出現額外品牌元素",
      "字體多於 2 種",
      "背景顏色與主視覺融爲一體"
    ]
  }
}
```

### 參數策略

- 必問：品牌、slogan、主視覺類型、比例
- 可默認：色板、燈光、logo 位置
- 可隨機：背景紋理細節

### 自動補全策略

- 用戶給品牌 + 行業，自動選調性（消費電子 = 未來感，國潮 = 暖色，零售 = 暖灰）
- slogan 默認 8-12 字
- logo 默認右下角

## 變體 1：人物 + 產品雙主體

📝 提示詞

```json
{
  "type": "人物 + 產品雙主體海報",
  "centerpiece": {
    "type": "human + product",
    "human": "{argument name=\"human\" default=\"東亞年輕女性，自然微笑\"}",
    "product": "{argument name=\"product\" default=\"白色精華瓶\"}",
    "composition": "人物在右、產品在左 1/3 處"
  },
  "constraints": {
    "must_feel": "信任、品質、品牌人設清晰"
  }
}
```

## 變體 2：純文字主海報

📝 提示詞

```json
{
  "type": "純文字品牌主海報",
  "slogan": {
    "main": "{argument name=\"slogan\" default=\"我們要贏，但更要把夥伴一起帶上\"}"
  },
  "visual_tone": {
    "aesthetic": "極簡、留白大、字體即視覺"
  },
  "constraints": {
    "must_feel": "態度、價值觀、信仰感"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "品牌主海報自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給品牌與節點，自動選調性、色板、slogan、主視覺",
  "constraints": {
    "must_feel": "可上線傳播"
  }
}
```

## 避免事項

- 不要讓 slogan 超過 12 字
- 不要讓 logo 搶主視覺
- 不要在一張海報裏放多個產品
- 不要使用 3 種以上字體
- 不要讓背景出現可識別第三方品牌

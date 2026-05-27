# Campaign Key Visual 模板

本文件用於生成「一組 campaign 主視覺」，強調「可延展、可復用、可成系列」：

- 季度 campaign 主視覺
- 節日 campaign 主圖
- 跨平臺投放統一視覺
- 聯名 campaign 主圖

特徵：

- 主視覺強調「可拓展」到 banner / story / 短視頻封面
- 由 1 個 anchor visual + 1 套 layout system 組成
- 強調 campaign claim
- 色板嚴格統一

## 適用範圍

- 全新 campaign 主視覺系統
- 節日 / 雙 11 / 大促 campaign
- 聯名 campaign

## 何時使用

- 用戶提到「campaign / 大促 / 季度活動 / KV / 系列主視覺」
- 用戶希望視覺能延展爲 banner / story / 海報

不要使用：

- 單張品牌海報（用 `brand-poster.md`）
- Web hero（用 `banner-hero.md`）

## 缺失信息優先提問順序

1. Campaign 主題
2. Campaign 時間窗口
3. Campaign claim（slogan / 主張句）
4. 品牌色 + campaign 專屬色
5. 主視覺中心（人物 / 產品 / 概念圖形）
6. 是否需要展示衍生 layout

## 主模板：Campaign Key Visual + 衍生

📖 描述

主圖爲 anchor visual，畫面中央有 campaign claim，下方展示衍生 layout（1:1、9:16、16:9）小預覽。

📝 提示詞

```json
{
  "type": "Campaign Key Visual 主視覺系統",
  "goal": "生成一張能作爲 campaign 主圖，並展示其衍生版本的視覺系統圖",
  "campaign": {
    "name": "{argument name=\"campaign name\" default=\"AURORA Spring Drop 2026\"}",
    "claim": "{argument name=\"campaign claim\" default=\"春日新聲，聽見每一刻心動\"}",
    "duration": "{argument name=\"duration\" default=\"2026.4.20 - 2026.5.15\"}"
  },
  "visual_system": {
    "color_palette": "{argument name=\"color palette\" default=\"櫻粉 + 霧藍 + 米白\"}",
    "anchor_visual": {
      "description": "{argument name=\"anchor visual\" default=\"少女戴着新款無線耳機，背景爲櫻花花瓣飄落\"}",
      "composition": "人物在畫面 1/3 偏左，留白足夠給 claim"
    },
    "graphic_motif": "{argument name=\"motif\" default=\"重複出現的小櫻花標誌 + 圓點節奏點\"}"
  },
  "claim_typography": {
    "font_style": "{argument name=\"font style\" default=\"現代襯線 + 圓滑細節\"}",
    "color": "深灰 + 櫻粉點綴"
  },
  "derivative_layouts": {
    "enabled": "{argument name=\"derivatives enabled\" default=\"true\"}",
    "items": [
      "1:1 社交首圖",
      "9:16 短視頻封面",
      "16:9 banner"
    ],
    "rule": "三個衍生 layout 在主圖下方排成一行展示"
  },
  "logo_placement": {
    "position": "右下角"
  },
  "constraints": {
    "must_keep": [
      "anchor visual 與衍生 layout 保持視覺一致",
      "claim 文字在所有比例下都可讀",
      "色板嚴格統一",
      "品牌 logo 在所有版本都出現"
    ],
    "avoid": [
      "衍生 layout 風格漂移",
      "claim 在小尺寸下不可讀",
      "色板出現額外色",
      "anchor visual 主體超出畫面"
    ]
  }
}
```

### 參數策略

- 必問：campaign 名、claim、色板、anchor visual
- 可默認：衍生 layout 列表、logo 位置、字體
- 可隨機：motif 裝飾具體形式

### 自動補全策略

- 用戶給主題 + 節點（春 / 夏 / 雙 11 / 聖誕），自動選色板與 motif
- claim 默認 12-18 字
- 衍生 layout 默認 3 種比例

## 變體 1：聯名 campaign

📝 提示詞

```json
{
  "type": "聯名 campaign 主視覺",
  "campaign": {
    "name": "{argument name=\"co-brand campaign\" default=\"AURORA × MUJI Limited\"}",
    "claim": "{argument name=\"claim\" default=\"日常之聲，安靜的力量\"}"
  },
  "visual_system": {
    "color_palette": "灰白 + 暖米 + 一絲品牌色",
    "anchor_visual": {
      "description": "兩品牌產品並置 + 日常場景"
    }
  },
  "constraints": {
    "must_feel": "克制、有共同語境、不互相壓倒"
  }
}
```

## 變體 2：純圖形 campaign

📝 提示詞

```json
{
  "type": "純圖形 campaign 主視覺",
  "visual_system": {
    "anchor_visual": {
      "description": "{argument name=\"motif\" default=\"由品牌字標演化的幾何圖形\"}"
    },
    "graphic_motif": "{argument name=\"pattern\" default=\"重複 grid + 節奏點\"}"
  },
  "constraints": {
    "must_feel": "概念感強、抽象、屬於品牌資產"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "Campaign KV 自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給 campaign 主題 + 時間，自動決定 claim、色板、anchor、衍生",
  "constraints": {
    "must_feel": "可直接進入投放系統"
  }
}
```

## 避免事項

- 不要讓衍生 layout 與主圖風格分裂
- 不要讓 claim 跨越主體（必須留白）
- 不要在一張 KV 系統裏出現 > 2 套字體
- 不要把所有比例都畫成同一構圖（必須真實重新構圖）
- 不要讓 motif 喧賓奪主

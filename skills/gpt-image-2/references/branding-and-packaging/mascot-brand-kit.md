# 吉祥物品牌套裝模板

本文件用於"以吉祥物爲核心的多面板品牌識別 / 周邊視覺文檔"：

- 吉祥物多角度 + 表情 + 應用場景
- 吉祥物周邊商品 catalog
- 品牌 IP 完整介紹頁
- 卡通人設品牌識別文檔

特徵：

- 一張大圖，多區塊
- 主區：吉祥物三視圖 + 主形象
- 次區：表情 + 配色 + 周邊
- 風格強調"親切 + 可愛 + 一致"
- 通常含 IP 名 + 性格描述

## 適用範圍

- 吉祥物品牌識別套裝
- IP 周邊商品 catalog
- 卡通人設介紹頁
- 營銷活動 IP 包

## 何時使用

- 用戶提到"吉祥物 / mascot / IP 形象 / 卡通代言"
- 用戶希望出"完整 IP 套裝"而不是單圖

不要使用：

- 單個角色設定稿（用 `portraits-and-characters/character-sheet.md`）
- 通用品牌識別（用 `brand-identity-board.md`）
- 單個動漫 KV（用 `storyboards-and-sequences/anime-key-visual.md`）

## 缺失信息優先提問順序

1. 品牌 / IP 名 + 一句性格描述
2. 吉祥物主形態（動物 / 人 / 擬物 / 食物）
3. 配色 1-2 個
4. 是否需要表情包 / 周邊 / 服裝
5. 渲染風格（2D 卡通 / 3D Q 萌 / Pixar 寫實卡通）
6. 比例

## 主模板：吉祥物品牌識別套裝

📖 描述

整體一張大圖，分主形象區 + 三視圖區 + 表情區 + 應用區。

📝 提示詞

```json
{
  "type": "吉祥物品牌識別套裝",
  "goal": "生成一張可作爲吉祥物 brand kit / 周邊介紹頁的多面板視覺文檔",
  "ip": {
    "name": "{argument name=\"ip name\" default=\"AURORA 小光\"}",
    "tagline": "{argument name=\"tagline\" default=\"陪你度過每個夜晚\"}",
    "personality": "{argument name=\"personality\" default=\"溫柔、好奇、愛發光\"}",
    "brand_owner": "{argument name=\"brand owner\" default=\"AURORA 家居燈光\"}"
  },
  "mascot": {
    "form": "{argument name=\"mascot form\" default=\"小型半透明燈泡精靈，圓乎乎，有發光的尾巴\"}",
    "color_palette": "{argument name=\"color palette\" default=\"暖金 + 米白 + 淺藍\"}",
    "rendering": "{argument name=\"rendering\" default=\"3D Pixar 風 + Q 萌\"}"
  },
  "regions": {
    "hero": {
      "position": "{argument name=\"hero position\" default=\"左上大區\"}",
      "content": "吉祥物主形象 + 名字 + 一句性格描述",
      "background": "純色 + 微光暈"
    },
    "three_view": {
      "position": "{argument name=\"three view position\" default=\"右上\"}",
      "content": "正面 / 側面 / 背面三視圖",
      "label": "FRONT / SIDE / BACK"
    },
    "expressions": {
      "position": "{argument name=\"expression position\" default=\"左下\"}",
      "count": "{argument name=\"expression count\" default=\"6\"}",
      "items": ["開心", "好奇", "困了", "驚訝", "害羞", "小生氣"]
    },
    "applications": {
      "position": "{argument name=\"app position\" default=\"右下\"}",
      "items": [
        "{argument name=\"app 1\" default=\"產品包裝盒角落\"}",
        "{argument name=\"app 2\" default=\"app 啓動頁\"}",
        "{argument name=\"app 3\" default=\"周邊貼紙\"}",
        "{argument name=\"app 4\" default=\"短視頻片頭吉祥物動畫靜幀\"}"
      ]
    }
  },
  "style": {
    "background": "{argument name=\"background\" default=\"米色紙紋 + 細灰輔助線\"}",
    "typography": "圓潤 sans + 一行手寫體強調"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4\"}",
  "constraints": {
    "must_keep": [
      "吉祥物在所有區塊外觀一致",
      "三視圖比例嚴格統一",
      "表情清晰可識別",
      "應用場景符合品牌"
    ],
    "avoid": [
      "吉祥物在不同區塊畫風漂移",
      "表情誇張到失真",
      "配色出現強烈對比破壞 IP 調性",
      "應用 mockup 風格衝突"
    ]
  }
}
```

### 參數策略

- 必問：IP 名、形態、性格、主色
- 可默認：layout、表情、應用場景
- 可隨機：周邊細節

### 自動補全策略

- 用戶給一句"我想要一個 X 行業的可愛代言"時：自動決定形態 + 性格 + 配色 + 6 表情 + 4 應用
- 默認 3D Q 萌渲染
- 默認 4 區塊布局

## 變體 1：吉祥物周邊 catalog（重點是商品）

📝 提示詞

```json
{
  "type": "吉祥物周邊 catalog",
  "regions": {
    "hero": {"content": "吉祥物 + IP 名"},
    "three_view": null,
    "expressions": null,
    "applications": {
      "items": [
        "T 恤", "馬克杯", "手機殼", "貼紙包", "鑰匙扣", "毛絨玩偶", "帆布包", "手機支架"
      ]
    }
  },
  "constraints": {
    "must_feel": "電商商品 catalog 感"
  }
}
```

## 變體 2：極簡吉祥物介紹頁（僅主形象 + 性格）

📝 提示詞

```json
{
  "type": "極簡吉祥物介紹頁",
  "regions": {
    "hero": {"content": "吉祥物 + 名 + 性格"},
    "three_view": null,
    "expressions": {"count": 4},
    "applications": null
  },
  "constraints": {
    "must_feel": "乾淨、易讀"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "Mascot brand kit 自動補全",
  "mode": "auto-fill",
  "rule": "用戶給品牌 + 行業 + 性格關鍵詞，自動決定吉祥物形態 + 表情 + 應用",
  "constraints": {
    "must_feel": "可發布周邊 / 公關圖"
  }
}
```

## 避免事項

- 不要讓吉祥物在不同區塊比例不一致
- 不要讓表情誇張到看起來另一個角色
- 不要在應用 mockup 上加太多其他設計元素
- 不要讓配色超過 4 種主色
- 不要漏掉 IP 名 + 性格描述

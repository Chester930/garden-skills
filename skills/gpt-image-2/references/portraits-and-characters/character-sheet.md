# 角色設定 / 三視圖模板

本文件用於生成「一個角色的完整設定頁 / 三視圖 / 表情集 / 配飾集」 視覺：

- 動畫 / 遊戲角色設定
- IP 形象設定
- 漫畫主角設定
- 同人角色設定
- 品牌吉祥物設定

特徵：

- 一頁內多個視角 / 多種姿勢
- 標註配色 / 服裝細節 / 關鍵尺寸
- 網格化排版
- 類似動畫工作室設定稿

## 適用範圍

- 角色三視圖（前 / 側 / 後）
- 表情九宮格
- 服裝變體
- 配飾 / 武器集

## 何時使用

- 用戶提到「角色設定 / 三視圖 / 設定稿 / 表情集 / 角色 sheet」
- 用戶希望一張圖能展示一個角色的完整方案

不要使用：

- 單張人物肖像（用 `professional-portrait.md` / `founder-portrait.md`）
- 虛擬主播個人卡（用 `virtual-host.md`）

## 缺失信息優先提問順序

1. 角色名 / 概念
2. 風格：anime / 3D 卡通 / 寫實 / 像素
3. 性別 / 年齡 / 種族
4. 服裝風格
5. sheet 類型：三視圖 / 表情集 / 服裝變體 / 綜合
6. 是否包含標註與配色

## 主模板：角色綜合設定 sheet

📖 描述

一張 4:3 或 3:4 大圖，包含三視圖（前 / 側 / 後），表情九宮格，服裝與配飾特寫，配色板。

📝 提示詞

```json
{
  "type": "角色綜合設定 sheet",
  "goal": "生成一張可直接用於動畫 / 遊戲 / IP 立項的角色綜合設定稿",
  "character": {
    "name": "{argument name=\"character name\" default=\"霜白·諾娜\"}",
    "concept": "{argument name=\"character concept\" default=\"冬日守望者，孤獨但堅定\"}",
    "art_style": "{argument name=\"art style\" default=\"anime + 半寫實\"}",
    "gender": "{argument name=\"gender\" default=\"少女\"}",
    "age_setting": "{argument name=\"age setting\" default=\"18 歲\"}"
  },
  "sections": {
    "three_view": {
      "enabled": "{argument name=\"three view enabled\" default=\"true\"}",
      "items": ["正面全身", "側面全身", "背面全身"],
      "annotations": ["發色", "瞳色", "服裝層次", "配飾"]
    },
    "expression_grid": {
      "enabled": "{argument name=\"expression grid enabled\" default=\"true\"}",
      "count": "{argument name=\"expression count\" default=\"9\"}",
      "items": ["微笑", "大笑", "害羞", "生氣", "委屈", "驚訝", "認真", "迷茫", "睡顏"]
    },
    "outfit_variants": {
      "enabled": "{argument name=\"outfit variants enabled\" default=\"true\"}",
      "count": "{argument name=\"outfit count\" default=\"3\"}",
      "items": [
        "{argument name=\"outfit 1\" default=\"日常哥特連衣裙\"}",
        "{argument name=\"outfit 2\" default=\"戰鬥裝：白銀鎧甲\"}",
        "{argument name=\"outfit 3\" default=\"便服：毛衣 + 長裙\"}"
      ]
    },
    "props_and_weapons": {
      "enabled": "{argument name=\"props enabled\" default=\"true\"}",
      "items": ["{argument name=\"prop 1\" default=\"冰晶法杖\"}", "{argument name=\"prop 2\" default=\"雪絨掛墜\"}"]
    },
    "color_palette": {
      "enabled": "{argument name=\"palette enabled\" default=\"true\"}",
      "main": "{argument name=\"palette main\" default=\"冰藍 / 月白 / 銀灰\"}",
      "accent": "{argument name=\"palette accent\" default=\"淡粉\"}"
    }
  },
  "layout": {
    "background": "{argument name=\"background\" default=\"米白色 grid 背景，乾淨像設定稿\"}",
    "grid": "整張 sheet 用細線分區，每區域有標題 + 標註"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"4:3\"}",
  "constraints": {
    "must_keep": [
      "三視圖比例嚴格一致",
      "表情同一臉型，只換表情",
      "服裝變體保留同一面相",
      "配色板與角色實際配色一致"
    ],
    "avoid": [
      "三視圖角色像三個人",
      "表情九宮格裏有重複",
      "標註線交叉",
      "背景喧賓奪主"
    ]
  }
}
```

### 參數策略

- 必問：角色名、風格、性別、概念
- 可默認：sheet 類型組合、背景、layout
- 可隨機：表情類型、配飾造型

### 自動補全策略

- 風格自動按 IP 類型選（少女 anime / 男性寫實 / 吉祥物 3D）
- 默認包含三視圖 + 表情九宮格 + 配色板
- 無說明時不出現武器

## 變體 1：純表情九宮格

📝 提示詞

```json
{
  "type": "角色表情九宮格 sheet",
  "sections": {
    "three_view": { "enabled": false },
    "expression_grid": { "enabled": true, "count": 9 },
    "outfit_variants": { "enabled": false }
  },
  "constraints": {
    "must_feel": "可作爲表情包 / 直播表情資源"
  }
}
```

## 變體 2：服裝變體集

📝 提示詞

```json
{
  "type": "角色服裝變體集 sheet",
  "sections": {
    "three_view": { "enabled": false },
    "expression_grid": { "enabled": false },
    "outfit_variants": { "enabled": true, "count": 5 }
  },
  "constraints": {
    "must_feel": "可作爲衣裝企劃稿"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "角色設定自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給一句概念，自動生成全套設定（視圖、表情、服裝、配色）",
  "constraints": {
    "must_feel": "可立項"
  }
}
```

## 避免事項

- 不要讓三視圖比例不一致（最常見錯誤）
- 不要讓表情九宮格出現重複
- 不要在設定稿背景裏加複雜場景
- 不要讓標註遮住角色身體
- 不要使用真實版權角色作爲參考

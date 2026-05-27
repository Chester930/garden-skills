# 主題 3D 圖標頭像模板

本文件用於"3D 卡通 / Q 萌圖標級別"的頭像視覺：

- Kawaii 3D 角色圖標
- Minecraft 風皮膚渲染
- 擬物 3D 頭像
- 應用圖標式頭像
- 周邊貼紙 / 周邊小角色

特徵：

- 3D 渲染感
- Q 萌、可愛、強主題感
- 單圖 / 單角色
- 圓角方形 / 圓形構圖
- 適合社交平臺頭像 / 應用圖標

## 適用範圍

- 圓角方形 / 圓形頭像
- 應用圖標
- 周邊小角色形象
- 卡通版本的"我"

## 何時使用

- 用戶希望 3D 卡通版本的角色或自己
- 用戶希望像 Pixar / Kawaii / Q 萌的角色頭像
- 用戶希望角色作爲 IP 的圖標級出場

不要使用：

- 寫實風格自拍（用 `style-transfer-selfie.md`）
- 多版本網格（用 `character-grid-portrait.md`）
- 角色完整設定稿（用 `portraits-and-characters/character-sheet.md`）

## 缺失信息優先提問順序

1. 主題（貓咪 / 角色 / 自己 / 興趣愛好）
2. 風格基底（Kawaii Q 萌 / Pixar 寫實卡通 / Minecraft 像素 3D / 擬物 3D）
3. 配色 / 主色
4. 配件 / 道具（眼鏡 / 帽子 / 手中物）
5. 構圖：胸像 / 全身 / 頭像
6. 輸出形態：圓形 / 圓角方形 / 透明背景

## 主模板：Kawaii 3D 角色圖標

📖 描述

整體一張 1:1 頭像圖，主體爲 Q 萌 3D 角色，圓角方形構圖，背景純色。

📝 提示詞

```json
{
  "type": "Kawaii 3D 角色圖標",
  "goal": "生成一張可作爲社交平臺頭像 / 應用圖標 / 周邊小角色的 3D Q 萌角色圖",
  "character": {
    "subject": "{argument name=\"character subject\" default=\"圓乎乎的橘色小柴犬\"}",
    "personality": "{argument name=\"personality\" default=\"開心、機靈\"}",
    "expression": "{argument name=\"expression\" default=\"微笑 + 張嘴吐舌頭\"}",
    "pose": "{argument name=\"pose\" default=\"正面胸像，看向鏡頭\"}",
    "outfit_or_accessory": [
      "{argument name=\"item 1\" default=\"紅色小領結\"}",
      "{argument name=\"item 2\" default=\"掛着小鈴鐺\"}"
    ]
  },
  "style": {
    "rendering": "{argument name=\"rendering\" default=\"3D Pixar 風 + 微微 toon shading\"}",
    "color_palette": "{argument name=\"color palette\" default=\"暖橙 + 奶油白\"}",
    "lighting": "{argument name=\"lighting\" default=\"柔光 + 微微背光\"}"
  },
  "background": {
    "type": "{argument name=\"background\" default=\"奶油黃純色 + 極淡光暈\"}"
  },
  "format": {
    "shape": "{argument name=\"shape\" default=\"圓角方形\"}",
    "aspect_ratio": "{argument name=\"aspect ratio\" default=\"1:1\"}",
    "composition_safety": "主體留 10% 邊距，避免被裁切"
  },
  "constraints": {
    "must_keep": [
      "整體 Q 萌可愛",
      "主體居中明確",
      "配色 ≤ 3 種",
      "細節克制（不要塞太多元素）"
    ],
    "avoid": [
      "寫實風格混入",
      "顏色飽和到刺眼",
      "背景幹擾主體",
      "配件遮擋角色臉部"
    ]
  }
}
```

### 參數策略

- 必問：角色主題、表情
- 可默認：風格、配色、背景、形態
- 可隨機：配件具體造型

### 自動補全策略

- 用戶給主體（柴犬 / 貓 / 自己 / 興趣）時：自動選 Q 萌風格 + 暖色 + 圓角方形
- 配件默認 1-2 件
- 比例默認 1:1

## 變體 1：Minecraft 風皮膚渲染

📝 提示詞

```json
{
  "type": "Minecraft 風個性化皮膚渲染",
  "character": {
    "subject": "{argument name=\"character\" default=\"基於參考圖本人風格化的 minecraft 角色\"}",
    "outfit": "{argument name=\"outfit\" default=\"藍色 T 恤 + 牛仔褲 + 紅色背包\"}"
  },
  "style": {
    "rendering": "Minecraft 體素 3D 風，方塊化身體，像素材質",
    "color_palette": "Minecraft 標準色 16 階"
  },
  "background": {
    "type": "Minecraft 草地方塊場景"
  },
  "constraints": {
    "must_feel": "可識別是 Minecraft 風且像 ta 自己"
  }
}
```

## 變體 2：擬物 3D 應用圖標

📝 提示詞

```json
{
  "type": "擬物 3D 應用圖標式頭像",
  "character": {
    "subject": "{argument name=\"theme\" default=\"攝影愛好者\"}",
    "metaphor_object": "{argument name=\"object\" default=\"3D 立體相機 + 微微反光\"}"
  },
  "style": {
    "rendering": "擬物 3D + 軟光 + 厚陰影",
    "color_palette": "Apple Big Sur 風格"
  },
  "background": {
    "type": "圓角方形淺灰漸變"
  },
  "constraints": {
    "must_feel": "像一個真實可點擊的 app 圖標"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "3D 圖標頭像自動補全",
  "mode": "auto-fill",
  "rule": "用戶給一個主題（興趣 / 性格 / 喜好）即可，自動決定主體形象、風格、配色、形態",
  "constraints": {
    "must_feel": "可直接換頭像"
  }
}
```

## 避免事項

- 不要讓 3D 角色看起來"半真半假"（要麼 Q 萌要麼擬物，不要兩者都不像）
- 不要讓背景花哨到壓主體
- 不要讓頭像裏出現可讀的英文標籤 / 文字
- 不要讓配件遮擋臉部
- 不要讓單個圖標裏塞 > 2 個角色

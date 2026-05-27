# 角色 n×n 網格肖像模板

本文件用於"一張圖裏包含同一角色的多個版本（不同表情 / 不同職業 / 不同朝代 / 不同表情）"：

- 2×2 / 3×3 / 4×4 同一人物多職業 / 多場景
- 表情九宮格（喜怒哀樂 + 等等）
- 朝代 / 神話角色系列肖像
- 多種風格統一展示
- 多角色 group portrait grid

特徵：

- 一張圖分多格
- 每格是同一身份的不同呈現
- 網格線 / 透明分隔
- 強調"同一人 / 同一角色"的一致性

## 適用範圍

- 一人多職業網格
- 表情九宮格
- 同一角色不同朝代 / 文化
- 同一角色不同造型集合

## 何時使用

- 用戶希望一張圖展示一個人的多個面
- 用戶希望直接得到"網格圖"而不是單圖
- 用戶希望同一身份的多版本對比

不要使用：

- 表情 / 服裝設定稿（用 `portraits-and-characters/character-sheet.md`）
- 單張風格轉換（用 `style-transfer-selfie.md`）
- 多個不同角色拼貼（用 `grids-and-collages/mixed-style-multi-panel.md`）

## 缺失信息優先提問順序

1. 主體身份（參考圖 / 文字描述）
2. 網格規格（2×2 / 3×3 / 4×4）
3. 每格的差異維度（職業 / 表情 / 朝代 / 風格）
4. 每格的具體內容（用戶列 or 我幫列）
5. 風格基底（寫實 / 3D 卡通 / anime）
6. 比例

## 主模板：2×2 同一人多職業網格

📖 描述

2×2 四格，主體爲同一人，分別身處不同職業 / 場景。

📝 提示詞

```json
{
  "type": "2x2 同一人物多職業網格",
  "goal": "生成一張 2×2 網格圖，主體爲同一人物，每格呈現不同職業身份與場景，可作爲 LinkedIn / 自我介紹 / 創意頭像使用",
  "subject": {
    "description": "{argument name=\"subject description\" default=\"東亞年輕男性，短黑髮，自然微笑\"}",
    "consistency": "四格中臉型、膚色、五官比例必須嚴格一致"
  },
  "style": "{argument name=\"art style\" default=\"高分辨率寫實人像攝影 + 自然光\"}",
  "layout": {
    "format": "2x2 grid",
    "panel_count": 4,
    "gap": "細白色分隔線",
    "panels": [
      {
        "position": "top-left",
        "scenario": "{argument name=\"panel 1\" default=\"職場商務：深藍西裝 + 白襯衫 + 藍色領帶，背景爲灰色紋理\"}"
      },
      {
        "position": "top-right",
        "scenario": "{argument name=\"panel 2\" default=\"戶外休閒：深藍 T 恤，背景爲虛化公園\"}"
      },
      {
        "position": "bottom-left",
        "scenario": "{argument name=\"panel 3\" default=\"建築工人：黃色安全帽 + 橙色反光背心，背景爲虛化車間\"}"
      },
      {
        "position": "bottom-right",
        "scenario": "{argument name=\"panel 4\" default=\"醫務人員：白色實驗服 + 淺藍襯衫，背景爲虛化實驗室\"}"
      }
    ]
  },
  "constraints": {
    "must_keep": [
      "四格中是同一個人",
      "每格燈光自然且統一風格",
      "服裝與場景高度匹配",
      "細分隔線清晰"
    ],
    "avoid": [
      "四格像四個不同人",
      "服裝與場景明顯錯配",
      "網格線過粗破壞視覺",
      "每格風格漂移"
    ]
  }
}
```

### 參數策略

- 必問：主體描述、4 個差異維度
- 可默認：風格基底、網格分隔線
- 可隨機：每格背景細節

### 自動補全策略

- 用戶只給主體時：自動選 4 個反差大的職業 / 場景（商務 + 戶外 + 藍領 + 醫療 是經典組合）
- 默認 2×2 網格
- 默認寫實攝影

## 變體 1：3×3 表情九宮格（同一角色）

📝 提示詞

```json
{
  "type": "3x3 同一角色表情九宮格",
  "subject": {
    "description": "{argument name=\"character\" default=\"3D 動畫風格，戴圓框眼鏡，自然短髮\"}",
    "common_theme": "{argument name=\"framing concept\" default=\"從撕開的白紙洞裡探頭\"}"
  },
  "style": "{argument name=\"art style\" default=\"3D Pixar 動畫風\"}",
  "layout": {
    "format": "3x3 grid",
    "panel_count": 9,
    "panels": [
      {"expression": "眨眼", "action": "扶眼鏡", "outfit": "綠色毛衣"},
      {"expression": "壞笑", "action": "拉低墨鏡", "outfit": "紅皮衣"},
      {"expression": "思考", "action": "手指點下巴", "outfit": "黃色衛衣"},
      {"expression": "大笑", "action": "趴在洞邊", "outfit": "黑白條紋衫"},
      {"expression": "微笑", "action": "豎大拇指", "outfit": "橘色襯衫"},
      {"expression": "淡定", "action": "喝珍奶", "outfit": "藍色毛衣"},
      {"expression": "開心", "action": "揮手", "outfit": "紫色馬甲 + 白襯衫"},
      {"expression": "笑到閉眼", "action": "抱臂", "outfit": "粉色開衫"},
      {"expression": "搞怪", "action": "戳臉頰", "outfit": "藍綠色毛衣"}
    ]
  },
  "constraints": {
    "must_feel": "九格是同一角色，僅表情 / 動作 / 服裝變化"
  }
}
```

## 變體 2：3×3 歷史朝代肖像系列

📝 提示詞

```json
{
  "type": "3x3 朝代肖像系列",
  "subject": {
    "description": "{argument name=\"subject\" default=\"東亞男性，30 歲，氣質沉穩\"}",
    "common_theme": "同一人物在不同朝代的形象"
  },
  "style": "高分辨率水墨寫實",
  "layout": {
    "format": "3x3 grid",
    "panel_count": 9,
    "items": [
      "漢朝 / 唐朝 / 宋朝 / 元朝 / 明朝 / 清朝 / 民國 / 建國初 / 現代"
    ]
  },
  "constraints": {
    "must_feel": "九格是同一人，僅服飾、配飾、背景與時代相符"
  }
}
```

## 變體 3：4×4 同一角色風格集合

📝 提示詞

```json
{
  "type": "4x4 同一角色風格集合",
  "subject": "{argument name=\"subject\" default=\"基於參考圖的本人\"}",
  "layout": {
    "format": "4x4 grid",
    "panel_count": 16,
    "common_theme": "同一身份的 16 種不同風格（賽博朋克 / 街頭 / 古風 / Y2K / 極簡 / 油畫 / 哥特 / ...）"
  },
  "constraints": {
    "must_feel": "16 格風格反差大但身份保持一致"
  }
}
```

## 變體 4：自動補全模式

📝 提示詞

```json
{
  "type": "角色網格肖像自動補全",
  "mode": "auto-fill",
  "rule": "用戶給主體 + 網格規格，自動決定每格內容、風格、構圖",
  "constraints": {
    "must_feel": "可直接當頭像合集 / 表情包 / 自我介紹圖"
  }
}
```

## 避免事項

- 不要讓不同格子裡的人物像不同人（一致性是核心）
- 不要讓網格分隔線過粗
- 不要讓每格風格漂移（總體風格應統一）
- 不要超過 4×4（再多會讓每格太小）
- 不要把網格題材分散到完全無關的主題（保留一致性維度）

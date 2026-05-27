# 食譜 / 流程步驟圖模板

本文件用於"按步驟圖示展示一個流程"的視覺：

- 食譜 / 烹飪步驟圖
- 產品使用步驟圖
- DIY 教程步驟圖
- 手工 / 化妝步驟圖
- 工藝流程圖

特徵：

- 步驟分明（編號 + 描述 + 插圖）
- 有明顯流向（→ 或編號順序）
- 強調"一圖能跟着做"
- 通常含食材 / 工具列表
- 視覺清晰、信息密度適中

## 適用範圍

- 食譜 / 烘焙步驟圖
- 產品使用 / 安裝教程圖
- 手工 / DIY 教程圖
- 化妝 / 護膚步驟圖

## 何時使用

- 用戶提到"步驟圖 / 流程圖 / 食譜圖 / 教程圖 / how-to"
- 用戶希望"看圖就能跟着做"

不要使用：

- 教學示意圖（用 `slides-and-visual-docs/educational-diagram-slide.md`）
- 高密度信息圖（用 `infographics/legend-heavy-infographic.md`）
- 角色關係圖（用 `character-relationship-diagram.md`）

## 缺失信息優先提問順序

1. 主題（什麼食譜 / 什麼教程）
2. 步驟數量（4-8 步）
3. 是否需要食材 / 工具列表
4. 風格：手繪水彩 / 擬物 3D / 扁平卡通 / 攝影實拍
5. 是否雙語 / 含英文
6. 比例

## 主模板：食譜步驟圖

📖 描述

整體一張圖，頂部有菜名 + 食材列表，主體爲 4-6 個編號步驟插圖，底部有最終成品圖。

📝 提示詞

```json
{
  "type": "食譜步驟圖",
  "goal": "生成一張可作爲公衆號 / 小紅書 / 食譜書頁的食譜步驟圖",
  "recipe": {
    "name": "{argument name=\"recipe name\" default=\"番茄炒蛋\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"5 分鐘家常版\"}",
    "servings": "{argument name=\"servings\" default=\"2 人份\"}",
    "time": "{argument name=\"time\" default=\"5 分鐘\"}"
  },
  "ingredients": {
    "enabled": "{argument name=\"ingredients enabled\" default=\"true\"}",
    "position": "{argument name=\"ingredients position\" default=\"頂部右側\"}",
    "items": [
      "{argument name=\"ing 1\" default=\"番茄 2 個\"}",
      "{argument name=\"ing 2\" default=\"雞蛋 3 個\"}",
      "{argument name=\"ing 3\" default=\"蔥花 適量\"}",
      "{argument name=\"ing 4\" default=\"鹽 / 糖 / 油 適量\"}"
    ],
    "design": "每項配小圖標"
  },
  "steps": {
    "count": "{argument name=\"step count\" default=\"5\"}",
    "items": [
      {"id": 1, "scene": "{argument name=\"step 1\" default=\"番茄切塊，雞蛋打散\"}"},
      {"id": 2, "scene": "{argument name=\"step 2\" default=\"熱油下雞蛋，炒到半熟盛出\"}"},
      {"id": 3, "scene": "{argument name=\"step 3\" default=\"加油下番茄，炒到出汁\"}"},
      {"id": 4, "scene": "{argument name=\"step 4\" default=\"倒回雞蛋，加鹽少許糖\"}"},
      {"id": 5, "scene": "{argument name=\"step 5\" default=\"翻炒均勻，撒蔥花出鍋\"}"}
    ],
    "step_block_style": "編號 + 插圖 + 1 句說明"
  },
  "final_dish": {
    "enabled": "{argument name=\"final dish enabled\" default=\"true\"}",
    "position": "{argument name=\"final dish position\" default=\"底部居中大圖\"}"
  },
  "style": {
    "art_style": "{argument name=\"art style\" default=\"手繪水彩 + 米色紙紋\"}",
    "color_palette": "{argument name=\"color palette\" default=\"番茄紅 + 蛋黃 + 米白\"}"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4\"}",
  "constraints": {
    "must_keep": [
      "步驟編號連續清晰",
      "每個步驟插圖與說明一致",
      "食材列表與步驟呼應",
      "成品圖視覺搶眼"
    ],
    "avoid": [
      "步驟說明超過 15 字",
      "插圖與文字脫節",
      "色板出現非食物自然色",
      "字體多種類"
    ]
  }
}
```

### 參數策略

- 必問：菜名、步驟數
- 可默認：風格、配色、食材呈現
- 可隨機：背景紋理

### 自動補全策略

- 用戶只給菜名時：自動列食材 + 自動展開 4-6 步
- 默認手繪水彩
- 步驟說明 ≤ 15 字 / 步

## 變體 1：產品使用 / 安裝教程圖

📝 提示詞

```json
{
  "type": "產品使用 / 安裝教程圖",
  "recipe": {
    "name": "{argument name=\"product\" default=\"AURORA Pro 耳機配對\"}"
  },
  "ingredients": { "enabled": false },
  "steps": {
    "count": 4,
    "items": [
      {"id": 1, "scene": "打開充電盒"},
      {"id": 2, "scene": "手機藍牙開啓"},
      {"id": 3, "scene": "選擇 'AURORA Pro'"},
      {"id": 4, "scene": "聽到提示音即配對成功"}
    ]
  },
  "final_dish": { "enabled": false },
  "style": {
    "art_style": "扁平矢量 + 品牌色"
  },
  "constraints": {
    "must_feel": "說明書級清晰"
  }
}
```

## 變體 2：化妝 / 護膚步驟圖

📝 提示詞

```json
{
  "type": "化妝 / 護膚步驟圖",
  "recipe": {
    "name": "{argument name=\"routine\" default=\"晨間護膚 5 步\"}"
  },
  "steps": {
    "count": 5,
    "items": [
      {"id": 1, "scene": "潔面"},
      {"id": 2, "scene": "化妝水"},
      {"id": 3, "scene": "精華"},
      {"id": 4, "scene": "面霜"},
      {"id": 5, "scene": "防曬"}
    ]
  },
  "style": {
    "art_style": "極簡插畫 + 柔粉色"
  },
  "constraints": {
    "must_feel": "乾淨、女性向、可分享"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "流程圖自動補全",
  "mode": "auto-fill",
  "rule": "用戶給主題，自動決定步驟數、食材 / 工具、風格、配色",
  "constraints": {
    "must_feel": "可直接發公衆號 / 小紅書"
  }
}
```

## 避免事項

- 不要讓步驟數超過 8（注意力會斷）
- 不要讓單步說明超過 15 字
- 不要讓插圖與說明描述不一致
- 不要讓色板與主題脫節（食物圖不應出現熒光藍）
- 不要漏掉編號 / 漏步
- 不要讓食材列表喧賓奪主

# 遊戲內截圖 Mockup 模板

本文件用於"僞造一張遊戲內截圖"的視覺：

- 開放世界遊戲截圖
- RPG 戰鬥截圖
- 像素 / 體素遊戲截圖
- 視覺小說截圖
- 遊戲 UI mockup

特徵：

- 整體看起來"像真實遊戲內畫面"
- 含遊戲 UI（HUD / 任務面板 / 血條 / 小地圖）
- 有視角語言（第一人稱 / 第三人稱 / 俯視 / 等距）
- 強調遊戲感而非純插畫
- 通常帶文字氣泡 / 任務提示

## 適用範圍

- 遊戲內截圖 mockup
- 遊戲宣傳圖（僞截圖）
- 遊戲立項 demo 視覺
- 直播縮略圖（僞遊戲畫面）

## 何時使用

- 用戶提到"遊戲截圖 / game screenshot / mockup / HUD / UI"
- 用戶希望"看起來像遊戲畫面"而不是插畫

不要使用：

- 動漫 KV（用 `storyboards-and-sequences/anime-key-visual.md`）
- 遊戲立項 pitch（用 `grids-and-collages/anime-pitch-board.md`）
- 角色設定（用 `portraits-and-characters/character-sheet.md`）

## 缺失信息優先提問順序

1. 遊戲類型（開放世界 / RPG / 像素 / 視覺小說 / 模擬）
2. 視角（第一人稱 / 第三人稱 / 俯視 / 等距）
3. 場景（戶外 / 室內 / 城市 / 戰鬥）
4. 主角描述（如有）
5. UI 元素（HUD / 血條 / 任務 / 小地圖）
6. 比例

## 主模板：開放世界遊戲截圖

📖 描述

整體一張圖，模擬真實遊戲內截圖，含 HUD UI。

📝 提示詞

```json
{
  "type": "開放世界遊戲截圖",
  "goal": "生成一張看起來像真實遊戲內截圖的視覺",
  "game_meta": {
    "game_name": "{argument name=\"game name\" default=\"FROZEN FANTASIA\"}",
    "engine_feel": "{argument name=\"engine feel\" default=\"現代 3A 引擎（接近 Unreal 5 渲染）\"}",
    "perspective": "{argument name=\"perspective\" default=\"第三人稱越肩\"}"
  },
  "scene": {
    "environment": "{argument name=\"environment\" default=\"雪原 + 遠景城堡 + 極光\"}",
    "time_of_day": "{argument name=\"time\" default=\"黃昏\"}",
    "weather": "{argument name=\"weather\" default=\"細雪\"}",
    "lighting": "{argument name=\"lighting\" default=\"冷藍主光 + 暖金邊緣光\"}"
  },
  "character": {
    "description": "{argument name=\"character\" default=\"少女主角，銀白長發，背身，正在拔劍\"}",
    "position": "畫面下三分之一，背身朝遠景"
  },
  "ui_elements": {
    "hud": {
      "enabled": "{argument name=\"hud enabled\" default=\"true\"}",
      "items": [
        "{argument name=\"hud item 1\" default=\"左下：血條 + 藍條 + 角色頭像\"}",
        "{argument name=\"hud item 2\" default=\"右下：技能槽 4 格 + 物品欄\"}",
        "{argument name=\"hud item 3\" default=\"左上：小地圖（圓形）+ 當前坐標\"}",
        "{argument name=\"hud item 4\" default=\"右上：任務追蹤 - '尋找春之源'\"}"
      ]
    },
    "subtitle": {
      "enabled": "{argument name=\"subtitle enabled\" default=\"true\"}",
      "speaker": "{argument name=\"speaker\" default=\"狐狸夥伴\"}",
      "text": "{argument name=\"subtitle text\" default=\"前面就是冰封峽谷了，要小心\"}"
    },
    "interaction_prompt": {
      "enabled": "{argument name=\"prompt enabled\" default=\"true\"}",
      "text": "{argument name=\"prompt\" default=\"按 [E] 調查\"}"
    }
  },
  "style": {
    "rendering": "{argument name=\"rendering\" default=\"PBR 渲染 + 高動態範圍 + 微微膠片噪點\"}",
    "color_palette": "{argument name=\"color palette\" default=\"冰藍 + 月白 + 暖金\"}"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"16:9\"}",
  "constraints": {
    "must_keep": [
      "看起來像遊戲內截圖（有真實 HUD）",
      "HUD 與場景顏色不衝突",
      "字幕字體與 HUD 字體統一",
      "主角與場景比例正確"
    ],
    "avoid": [
      "看起來像靜態插畫（無 HUD）",
      "HUD 元素塞 > 8 個",
      "UI 風格混雜（像素 + 現代 同框）",
      "字幕過長 / 錯字"
    ]
  }
}
```

### 參數策略

- 必問：遊戲類型、視角、場景
- 可默認：UI 元素、字幕、配色
- 可隨機：環境細節

### 自動補全策略

- 用戶給遊戲概念時：自動決定視角 / HUD / 字幕
- 默認 16:9
- 默認現代 3A 渲染

## 變體 1：像素遊戲截圖

📝 提示詞

```json
{
  "type": "像素遊戲截圖",
  "game_meta": {
    "engine_feel": "16-bit JRPG 風（如聖劍傳說 3）",
    "perspective": "俯視 / 等距"
  },
  "style": {
    "rendering": "像素藝術 + 16 色調色板",
    "color_palette": "16 色復古 RPG 調色"
  },
  "ui_elements": {
    "hud": {
      "items": ["底部對話框 + 角色立繪"]
    }
  },
  "constraints": {
    "must_feel": "FC / SNES JRPG"
  }
}
```

## 變體 2：視覺小說截圖

📝 提示詞

```json
{
  "type": "視覺小說截圖",
  "game_meta": {
    "engine_feel": "Galgame / Visual Novel",
    "perspective": "第一人稱（看角色）"
  },
  "ui_elements": {
    "hud": null,
    "subtitle": {
      "enabled": true,
      "speaker": "{argument name=\"speaker\" default=\"女主角\"}",
      "text": "..."
    }
  },
  "style": {
    "rendering": "anime 半厚塗 + 柔光"
  },
  "constraints": {
    "must_feel": "VN 標準對話場景"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "遊戲截圖自動補全",
  "mode": "auto-fill",
  "rule": "用戶給一句遊戲概念，自動決定視角 / 場景 / HUD / 主角",
  "constraints": {
    "must_feel": "可作爲 Steam 商店截圖"
  }
}
```

## 避免事項

- 不要讓 HUD 元素超過 8 個
- 不要讓 UI 風格與遊戲類型脫節（像素遊戲不應有現代毛玻璃 HUD）
- 不要讓字幕超過 2 行
- 不要讓主角佔畫面過大壓過 HUD
- 不要讓"截圖"看起來像靜態插畫（HUD 是關鍵標識）
- 不要讓任務面板出現明顯錯字 / 亂碼

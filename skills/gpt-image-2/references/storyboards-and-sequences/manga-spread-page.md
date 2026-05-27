# 漫畫跨頁 / 多分鏡頁模板

本文件用於"一頁內多個不規則分鏡敘事"的漫畫視覺：

- 單頁 5-7 個分鏡的漫畫
- 跨頁 spread（左右兩頁連貫）
- 心理 / 懸疑 / 戰鬥 / 日常多分鏡
- 同人漫畫 / 商業漫畫
- 故事板 storyboard

特徵：

- 不規則格子
- 大格 + 小格組合
- 有閱讀順序（通常右上 → 左下）
- 含對話框 + 心聲 + 旁白
- 風格更"漫畫書"而不是 4 格段子

## 適用範圍

- 單頁多分鏡漫畫
- 跨頁 spread
- 故事板 / 分鏡稿
- 同人 / 商業漫畫

## 何時使用

- 用戶提到"漫畫分鏡 / spread / 多格漫畫 / 故事板"
- 用戶希望敘事更複雜、節奏更動感
- 用戶希望"漫畫書"質感

不要使用：

- 4 格段子（用 `four-panel-comic.md`）
- 單圖 KV（用 `anime-key-visual.md`）
- 角色設定稿（用 `portraits-and-characters/character-sheet.md`）

## 缺失信息優先提問順序

1. 故事概要 / 這一頁要講什麼
2. 分鏡數量（5-9 格）
3. 主角描述
4. 風格：日漫 / 韓漫 / 美漫 / 同人
5. 閱讀方向（日式右往左 / 美式左往右）
6. 是否含色彩或純黑白

## 主模板：單頁多分鏡漫畫

📖 描述

整體一頁漫畫，包含 5-7 個不規則分鏡，按閱讀順序展開一段敘事。

📝 提示詞

```json
{
  "type": "單頁多分鏡漫畫",
  "goal": "生成一張完整的單頁漫畫，含多個分鏡，敘事節奏緊湊",
  "story": {
    "summary": "{argument name=\"story summary\" default=\"主角接到神祕電話，決定獨自前往\"}",
    "main_character": "{argument name=\"main character\" default=\"年輕女性偵探，短髮，黑色風衣\"}",
    "supporting": "{argument name=\"supporting\" default=\"無\"}"
  },
  "style": {
    "art_style": "{argument name=\"art style\" default=\"日式黑白漫畫 + 網點 + 強陰影\"}",
    "tone": "{argument name=\"tone\" default=\"懸疑 + 緊張\"}",
    "color": "{argument name=\"color\" default=\"黑白 + 灰階\"}"
  },
  "page_layout": {
    "panel_count": "{argument name=\"panel count\" default=\"6\"}",
    "reading_direction": "{argument name=\"reading direction\" default=\"日式：從右到左、從上到下\"}",
    "panels": [
      {
        "id": 1,
        "size": "大格 跨上半部分",
        "scene": "{argument name=\"panel 1\" default=\"主角側臉特寫，電話靠耳邊\"}",
        "text": "{argument name=\"text 1\" default=\"旁白：那通電話，改變了一切\"}"
      },
      {
        "id": 2,
        "size": "中格 右下",
        "scene": "{argument name=\"panel 2\" default=\"特寫電話聽筒裏的雜音\"}",
        "text": "{argument name=\"text 2\" default=\"對方：今晚十點，老地方\"}"
      },
      {
        "id": 3,
        "size": "小格 左下",
        "scene": "{argument name=\"panel 3\" default=\"主角眼神特寫，瞳孔放大\"}",
        "text": "{argument name=\"text 3\" default=\"心聲：又是他\"}"
      },
      {
        "id": 4,
        "size": "中格 右",
        "scene": "{argument name=\"panel 4\" default=\"主角穿上風衣的動作分鏡\"}",
        "text": ""
      },
      {
        "id": 5,
        "size": "中格 中",
        "scene": "{argument name=\"panel 5\" default=\"主角推開門，雨夜街道\"}",
        "text": ""
      },
      {
        "id": 6,
        "size": "大格 跨下半部分",
        "scene": "{argument name=\"panel 6\" default=\"主角背影遠去，路燈昏黃\"}",
        "text": "{argument name=\"text 6\" default=\"旁白：這是赴約，還是赴死\"}"
      }
    ]
  },
  "dialogue_design": {
    "balloon_style": "白底 + 黑描邊 + 尖角指向",
    "narration_box": "矩形 + 灰底 + 黑邊",
    "thought_balloon": "雲形 + 虛線尾巴",
    "font_style": "無襯線漫畫體"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4\"}",
  "constraints": {
    "must_keep": [
      "分鏡大小有節奏（大 + 小 + 大）",
      "閱讀順序清晰",
      "主角在多格中保持一致",
      "對話框不擋關鍵人物動作"
    ],
    "avoid": [
      "分鏡全部一樣大（節奏單調）",
      "閱讀順序混亂",
      "主角形象漂移",
      "色調突變（黑白頁裏突然有彩色）"
    ]
  }
}
```

### 參數策略

- 必問：故事概要、分鏡數、主角
- 可默認：風格、閱讀方向、對話框樣式
- 可隨機：背景細節

### 自動補全策略

- 用戶只給故事時：自動決定 5-7 格分鏡節奏
- 默認日式黑白漫畫 + 網點
- 默認日式閱讀方向

## 變體 1：跨頁 spread（左右兩頁）

📝 提示詞

```json
{
  "type": "跨頁 spread 漫畫",
  "page_layout": {
    "panel_count": "8-12（左右兩頁加起來）",
    "format": "橫向 spread，畫面分左右兩頁"
  },
  "aspect_ratio": "16:11",
  "constraints": {
    "must_feel": "左右兩頁連貫，中央 gutter 不要切到關鍵元素"
  }
}
```

## 變體 2：彩色商業漫畫頁

📝 提示詞

```json
{
  "type": "彩色商業漫畫頁",
  "style": {
    "color": "全彩 + 平塗 + 數字漫畫質感",
    "art_style": "美漫 / 韓漫 風"
  },
  "constraints": {
    "must_feel": "可作爲商業漫畫連載頁"
  }
}
```

## 變度 3：自動補全模式

📝 提示詞

```json
{
  "type": "漫畫跨頁自動補全",
  "mode": "auto-fill",
  "rule": "用戶給一段故事，自動切分鏡、排版、對話",
  "constraints": {
    "must_feel": "出版社編輯可直接放入排版"
  }
}
```

## 避免事項

- 不要讓分鏡全部等大
- 不要讓閱讀順序難以辨認
- 不要讓對話框擋臉 / 擋動作
- 不要在黑白漫畫頁裏突然出現強彩色
- 不要讓主角形象在不同格裏像不同人
- 跨頁時不要讓關鍵元素正好在中央裝訂線

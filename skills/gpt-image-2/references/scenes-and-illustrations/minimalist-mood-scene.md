# 極簡氛圍插畫模板

本文件用於生成「極簡留白 / 強氛圍」 插畫：

- 極簡海報
- 文學性氛圍圖
- 品牌情緒圖
- 公衆號文末圖
- 桌面 / 手機壁紙

特徵：

- 大留白
- 單一主體或極少元素
- 一種主導色
- 強情緒 / 強氣質
- 文字（如有）極少

## 適用範圍

- 文學性氛圍圖
- 極簡海報
- 品牌情緒圖
- 壁紙 / 文末圖

## 何時使用

- 用戶提到「極簡 / 留白 / 氛圍 / 一種心情 / 文學風」
- 用戶希望視覺以「情緒爲先」，不需要敘事

不要使用：

- 治癒日常（用 `healing-scene.md`）
- 概念大場景（用 `concept-scene.md`）
- 童書插畫（用 `picture-book-scene.md`）

## 缺失信息優先提問順序

1. 一種心情 / 一句話
2. 主體（一個人 / 一隻鳥 / 一棵樹 / 抽象圖形）
3. 主導色
4. 是否需要文字
5. 比例

## 主模板：極簡留白氛圍圖

📖 描述

整體大量留白，主體小且偏置，色調統一，文字（如有）只 1 句話。

📝 提示詞

```json
{
  "type": "極簡留白氛圍圖",
  "goal": "生成一張以情緒爲主、留白極致的極簡插畫",
  "mood": {
    "feeling": "{argument name=\"feeling\" default=\"安靜、獨處、深秋\"}",
    "one_sentence": "{argument name=\"one sentence\" default=\"風停了，我也終於停了一下。\"}"
  },
  "subject": {
    "description": "{argument name=\"main subject\" default=\"遠處一棵孤零零的小樹\"}",
    "scale": "{argument name=\"subject scale\" default=\"佔畫面 10%\"}",
    "position": "{argument name=\"subject position\" default=\"畫面右下\"}"
  },
  "background": {
    "type": "{argument name=\"background\" default=\"米白色霧氣 + 微微紙紋\"}",
    "main_color": "{argument name=\"main color\" default=\"米白 + 一抹暖灰\"}"
  },
  "text_overlay": {
    "enabled": "{argument name=\"text enabled\" default=\"true\"}",
    "text": "{argument name=\"text\" default=\"風停了，我也終於停了一下。\"}",
    "position": "{argument name=\"text position\" default=\"畫面左上\"}",
    "font_style": "{argument name=\"font style\" default=\"細襯線體\"}",
    "color": "深灰"
  },
  "style": {
    "rendering": "極簡插畫 + 微紙紋 + 柔和顆粒",
    "lighting": "整體柔光、幾乎無戲劇光",
    "color_palette": "≤ 2 種主色"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4\"}",
  "constraints": {
    "must_keep": [
      "留白 ≥ 畫面 70%",
      "主體小但不可缺",
      "色調嚴格統一",
      "情緒通過色 + 留白傳達，不靠裝飾"
    ],
    "avoid": [
      "次要元素堆疊",
      "顏色多於 2 種",
      "文字超過 1 句",
      "出現品牌 logo"
    ]
  }
}
```

### 參數策略

- 必問：心情、主體
- 可默認：背景、配色、字體
- 可隨機：主體小細節

### 自動補全策略

- 心情 → 配色（獨處 = 米白；夜晚 = 深藍；秋 = 暖棕；春 = 櫻粉）
- 主體根據心情選（孤獨 = 一棵樹 / 一隻鳥；平靜 = 一片海；思念 = 遠去的背影）
- 文字 ≤ 18 字

## 變體 1：純色極簡海報

📝 提示詞

```json
{
  "type": "純色極簡海報",
  "subject": {
    "description": "{argument name=\"subject\" default=\"一隻飛鳥剪影\"}",
    "scale": "5%"
  },
  "background": {
    "type": "純色",
    "main_color": "{argument name=\"main color\" default=\"深藍\"}"
  },
  "text_overlay": {
    "text": "{argument name=\"text\" default=\"自由\"}",
    "font_style": "極粗黑體"
  },
  "constraints": {
    "must_feel": "強一句話、克制、概念"
  }
}
```

## 變體 2：抽象圖形氛圍

📝 提示詞

```json
{
  "type": "抽象圖形氛圍圖",
  "subject": {
    "description": "{argument name=\"abstract\" default=\"兩個相切的圓\"}",
    "scale": "30%"
  },
  "constraints": {
    "must_feel": "概念、設計感、品牌資產"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "極簡氛圍圖自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給一句心情或一個詞，自動決定主體、配色、文字、比例",
  "constraints": {
    "must_feel": "可做壁紙 / 文末圖"
  }
}
```

## 避免事項

- 不要讓畫面塞滿
- 不要使用 > 2 種主色
- 不要讓文字超過 18 字
- 不要讓主體居正中（極簡通常偏置）
- 不要使用花哨字體

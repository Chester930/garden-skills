# 短視頻封面 / Stream 縮略圖 UI 模板

本文件用於生成「短視頻封面 + UI 元素」樣機，例如：

- 抖音 / 快手 / B 站 / 小紅書 視頻封面
- YouTube / Twitch 縮略圖
- VTuber / 主播 stream 封面
- 自媒體節目封面
- 社交平臺短視頻封面

特點：

- 主體大、文字大、信息層級高
- 必須有可視化「點擊誘因」
- 文字與人物 / 主體畫面強疊加

它跟 `live-commerce-ui.md` 的區別：

- 直播 UI：仿真整個直播間界面（聊天 / 禮物 / 商品）
- 本模板：只是封面圖層，重點在抓眼球的標題 + 主視覺

## 適用範圍

- 短視頻平臺封面圖
- YouTube / Bilibili / Twitch 縮略圖
- 節目主視覺
- 直播預告圖
- 課程 / 知識類視頻封面

## 何時使用

- 用戶提到「封面 / 縮略圖 / 短視頻封面 / 視頻首圖」
- 用戶希望生成一張點擊率高的視覺
- 用戶給出節目名 / 標題 / 主播 / 主題

不要使用：

- 用戶要的是真實直播間截圖（用 `live-commerce-ui.md`）
- 用戶要的是社交動態詳情頁（用 `social-interface-mockup.md`）

## 缺失信息優先提問順序

1. 平臺：抖音 / 快手 / 小紅書 / B 站 / YouTube / Twitch
2. 內容類型：知識科普 / 生活 vlog / 遊戲 / 直播預告 / 商業廣告 / 萌系內容
3. 主標題文案
4. 主體（真人 / 卡通 / 物品 / 抽象主視覺）
5. 風格：高對比醒目 / 軟萌少女 / 冷靜極簡 / 暗黑神祕
6. 是否需要副標題、bullet、徽章

## 主模板：知識類高對比短視頻封面

📖 描述

仿真「講清楚一件事的科普 / 解讀類視頻封面」，主體偏右，左側爲大字標題，附副標題與點狀要點。

📝 提示詞

```json
{
  "type": "短視頻科普類封面樣機",
  "goal": "生成一張高點擊率的視頻封面圖，包含主標題、副標題、主視覺、平颱風格小標識",
  "platform": "{argument name=\"platform\" default=\"通用短視頻封面\"}",
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"16:9\"}",
  "background": {
    "color_palette": "{argument name=\"color palette\" default=\"深藍漸變 + 高亮黃\"}",
    "texture": "{argument name=\"texture\" default=\"細微噪點 + 柔光\"}"
  },
  "main_visual": {
    "subject": "{argument name=\"main subject\" default=\"一位看向鏡頭並指向左側標題的中年男性\"}",
    "position": "{argument name=\"subject position\" default=\"畫面右側 1/3\"}",
    "expression": "{argument name=\"expression\" default=\"有信服感、略帶驚訝\"}"
  },
  "title_block": {
    "main_title": "{argument name=\"main title\" default=\"99% 的人都不知道的 ChatGPT 用法\"}",
    "title_style": "{argument name=\"title style\" default=\"白底黑字粗黑體 + 局部高亮黃色描邊\"}",
    "sub_title": "{argument name=\"sub title\" default=\"一招提升 10 倍效率\"}",
    "bullet_points": {
      "count": "{argument name=\"bullet count\" default=\"3\"}",
      "items": [
        "{argument name=\"bullet 1\" default=\"自動整理會議紀要\"}",
        "{argument name=\"bullet 2\" default=\"批量生成 PPT 大綱\"}",
        "{argument name=\"bullet 3\" default=\"一鍵寫郵件模板\"}"
      ]
    }
  },
  "platform_marks": {
    "logo_or_handle": "{argument name=\"creator handle\" default=\"@效率怪人\"}",
    "duration_label": "{argument name=\"duration\" default=\"06:24\"}"
  },
  "style": {
    "rendering": "封面圖必須像真實視頻封面，而不是普通海報",
    "contrast": "標題必須在 1 米外都能看清",
    "consistency": "整體風格一致，不出現風格衝突"
  },
  "constraints": {
    "must_keep": [
      "主標題視覺權重最高",
      "主視覺與標題不相互遮擋",
      "顏色對比度足夠高"
    ],
    "avoid": [
      "標題過長導致換行混亂",
      "主體表情誇張到掉檔次",
      "邊角小字過多"
    ]
  }
}
```

### 參數策略

- 必問：主標題、主體、平臺、風格
- 可默認：副標題、徽章、小字標籤
- 可隨機：bullet points 的次序與具體措辭，但與主題強相關

### 自動補全策略

- 主標題爲空時不要自動編造，必須問
- 副標題缺失可自動補一個「數字 + 動詞」句式
- bullet points 必須 ≤ 4 條
- 主體表情默認「信服 + 略帶驚訝」

## 變體 1：可愛風 VTuber / 主播預告封面

📝 提示詞

```json
{
  "type": "VTuber / 主播預告封面",
  "style": "anime, 高對比可愛粉系，閃光、愛心、星星裝飾",
  "character": {
    "description": "{argument name=\"character description\" default=\"棕發雙丸子頭動漫女孩，琥珀色眼眸，溫柔微笑\"}",
    "outfit": "{argument name=\"outfit\" default=\"粉色和服 + 白色女僕圍裙，櫻花髮飾\"}",
    "pose": "{argument name=\"pose\" default=\"手持裝飾花朵的粉色麥克風\"}"
  },
  "layout": {
    "background": "{argument name=\"background\" default=\"粉色漸變 + 閃光 + 心形 + 蝴蝶結\"}",
    "text_sections": [
      {
        "type": "頂部絲帶",
        "text": "{argument name=\"top ribbon\" default=\"今晚開播一起聊聊吧～\"}"
      },
      {
        "type": "主標題",
        "text": "{argument name=\"main title\" default=\"雜談直播\"}",
        "decorations": "周圍 3 個大桃子插畫"
      },
      {
        "type": "中間絲帶",
        "text": "{argument name=\"middle ribbon\" default=\"想和大家度過開心的時光♡\"}"
      },
      {
        "type": "底部要點",
        "items": [
          "新人友好",
          "禮物回收",
          "ROMO"
        ]
      },
      {
        "type": "底部說話框",
        "text": "評論大歡迎♪ 一起多聊聊吧"
      }
    ]
  },
  "constraints": {
    "must_feel": "像真實主播預告封面，不是同人插畫"
  }
}
```

## 變體 2：開箱 / 評測視頻封面

📝 提示詞

```json
{
  "type": "開箱評測視頻封面",
  "platform": "{argument name=\"platform\" default=\"YouTube\"}",
  "aspect_ratio": "16:9",
  "main_visual": {
    "subject": "{argument name=\"main product\" default=\"一臺尚未拆封的科技產品包裝盒\"}",
    "host": "{argument name=\"host description\" default=\"畫面左側主播半身，表情誇張驚喜\"}",
    "extras": ["盒子周圍環繞的發光線條", "局部撕開包裝的懸念感"]
  },
  "title_block": {
    "main_title": "{argument name=\"main title\" default=\"全網首發！我把它拆了\"}",
    "sub_title": "{argument name=\"sub title\" default=\"真的值這個價嗎？\"}",
    "label_badge": "{argument name=\"badge\" default=\"獨家\"}"
  },
  "constraints": {
    "must_feel": "強誘因 + 強好奇感"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "短視頻封面自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶只給出主題時，自動補主標題、副標題、主體、風格、配色，但必須保持封面三要素：主標題、主視覺、強對比",
  "constraints": {
    "must_feel": "像真實視頻平臺上抓人封面"
  }
}
```

## 避免事項

- 不要讓標題佔滿整個畫面（必須留出主視覺）
- 不要讓標題顏色與背景過於接近，必須高對比
- 不要在一張封面塞超過 2 行的副標題
- 不要讓主體面部被標題文字大塊遮擋
- 不要混合多個平臺的 UI 元素（比如 YouTube 紅色播放按鈕 + 抖音水印）
- 不要在「知識科普」封面裡出現 emoji 表情堆疊

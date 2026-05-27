# 電商直播 / 社交直播 UI 樣機模板

本文件用於生成「人物肖像 + 直播平臺疊加界面」的複雜視覺結果。

適用於：

- 電商直播界面
- 社交媒體直播截圖
- 主播帶貨樣機
- 聊天氣泡 + 禮物彈窗 + 商品卡片的直播 UI 合成圖

## 使用規則

這個模板的關鍵點不是固定某一個主播，而是把畫面拆成一套穩定結構，讓用戶可以：

- 指定真人照片
- 指定名人名字
- 指定人物描述
- 完全隨機生成一個主播人設

同理，商品卡、聊天消息、背景品牌、禮物內容都可以：

- 用戶指定
- 用默認值
- 在合理範圍內隨機生成

## 缺失信息優先提問順序

當用戶只說「做一張電商直播 UI 樣機」時，優先問：

1. 主播來源：真人照片 / 名人名字 / 人物描述 / 隨機生成
2. 商品信息：賣什麼
3. 平颱風格：更像抖音 / 小紅書 / 淘寶直播 / 通用直播樣機
4. 語言：中文界面還是英文界面

如果用戶不想逐項回答，可以明確提供一個「自動補全模式」：

- 你來隨機補齊次要信息
- 僅保留用戶指定的核心部分

## 模板 1：通用電商直播 UI 樣機

📖 描述

生成逼真的社交媒體直播界面，疊加在人物肖像之上，包含可自定義的聊天消息、禮物彈窗和商品購買卡片。

📝 提示詞

```json
{
  "type": "電商直播 UI 樣機",
  "goal": "生成一張高仿真的直播帶貨截圖風格視覺圖，主體是主播肖像，疊加完整直播界面元素，適合做社交傳播、概念樣機或帶貨視覺方案演示",
  "subject": {
    "source_mode": "{argument name=\"host source mode\" default=\"celebrity-name\"}",
    "reference_photo": "{argument name=\"host reference photo\" default=\"none\"}",
    "celebrity_name": "{argument name=\"host name\" default=\"Elon Musk\"}",
    "description": "{argument name=\"host portrait description\" default=\"面帶微笑，半身肖像，身穿印有白色科技示意圖的黑色 T 恤\"}",
    "pose": "{argument name=\"host pose\" default=\"正對鏡頭，輕微前傾，像在直播間講話\"}",
    "expression": "{argument name=\"host expression\" default=\"輕鬆、自信、具有交流感\"}"
  },
  "scene": {
    "background_style": "{argument name=\"background style\" default=\"科技公司發布會後臺 + 直播間布景\"}",
    "left_background": "左側顯示帶有 '{argument name=\"left background logo\" default=\"SPACEX\"}' 文字的屏幕",
    "right_background": "右側顯示紅色的 '{argument name=\"right background logo\" default=\"Tesla T logo\"}' 和一輛深色汽車",
    "lighting": "{argument name=\"lighting\" default=\"明亮、商業感、影棚級補光，同時保留直播截圖感\"}"
  },
  "ui_overlay": {
    "platform_style": "{argument name=\"platform style\" default=\"通用中文直播帶貨平臺 UI\"}",
    "top_header": {
      "host_info": "頭像，名稱 '{argument name=\"host name\" default=\"Elon Musk\"}'，副標題 '55.6萬本場點讚'，紅色 '關注' 按鈕",
      "rank_badge": "帶有 '全站第1名' 的金幣圖標",
      "viewer_stats": "3 個頂部觀衆頭像，顯示 '12.3w'、'8.6w'、'5.7w'，總計 '68.7萬'，'X' 關閉按鈕",
      "right_links": "'更多直播 >'，'禮物展館 0/24'（帶有藍色 '經典' 標籤）"
    },
    "mid_left_gifts": {
      "count": 2,
      "items": [
        "頭像 '科技愛好者'，'送小心心'，愛心圖標 x 1314",
        "頭像 '星辰大海'，'送火箭'，火箭圖標 x 666"
      ]
    },
    "bottom_left_chat": {
      "system_message": "37 級勳章 '宇宙漫遊者 加入了直播間'",
      "message_count": 7,
      "messages": [
        "小火箭: 馬斯克！未來可期！🚀",
        "future: 特斯拉Model 2什麼時候出？",
        "星空夢想家: SpaceX今年能上火星嗎？",
        "AI探索者: Neuralink進展如何？",
        "帥氣的網友: 馬總好！",
        "Mars: 第一次來你的直播，超激動！",
        "用戶123: 講講AI吧，會取代人類嗎？"
      ]
    },
    "bottom_right_product_card": {
      "hot_tag": "橙色 '熱賣 x 1888'",
      "image": "{argument name=\"product image subject\" default=\"Tesla Cybertruck\"}",
      "title": "{argument name=\"product name\" default=\"特斯拉Cybertruck 電動皮卡\"}",
      "price": "{argument name=\"product price\" default=\"¥ 1,618,000\"}",
      "button": "紅色 '搶' 按鈕",
      "floating_animation": "半透明愛心沿右側邊緣向上浮動"
    },
    "bottom_bar": {
      "input_field": "'說點什麼...'",
      "icons": ["笑臉", "三個點", "購物車", "禮物盒", "分享"]
    }
  },
  "style": {
    "visual_target": "逼真的直播截圖樣機，不是純 UI 設計稿，也不是純攝影海報，而是主播真人畫面與平臺界面高自然融合",
    "rendering": "真實人像攝影 + 平臺疊加 UI + 商業廣告級清晰度",
    "color_tone": "科技感、商業感、平臺直播氛圍並存",
    "composition": "豎版直播截圖構圖，人物佔據視覺中心，UI 清晰可讀，商品卡位於右下角，聊天區位於左下角"
  },
  "constraints": {
    "must_keep": [
      "主播是視覺中心",
      "直播 UI 分層清晰",
      "商品卡、聊天區、禮物區都必須出現",
      "整體像真實直播截圖，而不是簡單拼貼"
    ],
    "avoid": [
      "UI 文字完全不可讀",
      "界面過度擁擠",
      "人物臉部畸形",
      "商品卡透視錯誤",
      "聊天框與背景融在一起"
    ]
  }
}
```

## 模板 2：品牌創始人帶貨直播樣機

📖 描述

適合「品牌創始人 / 科技企業家 / 明星主理人」本人出鏡的高可信直播帶貨場景。

📝 提示詞

```json
{
  "type": "品牌創始人直播帶貨樣機",
  "subject": {
    "identity": "{argument name=\"host identity\" default=\"科技公司創始人\"}",
    "name": "{argument name=\"host name\" default=\"Elon Musk\"}",
    "description": "{argument name=\"host portrait description\" default=\"高可信度真人半身肖像，輕微微笑，像正在解釋產品亮點\"}"
  },
  "product": {
    "name": "{argument name=\"product name\" default=\"旗艦智能電動車\"}",
    "category": "{argument name=\"product category\" default=\"科技硬件\"}",
    "price": "{argument name=\"product price\" default=\"¥ 399,999\"}",
    "selling_points": [
      "{argument name=\"selling point 1\" default=\"自動駕駛輔助\"}",
      "{argument name=\"selling point 2\" default=\"極簡智能座艙\"}",
      "{argument name=\"selling point 3\" default=\"長續航\"}"
    ]
  },
  "ui": {
    "product_card": "高可信帶貨卡片，展示主圖、標題、價格、強購買按鈕",
    "chat_style": "觀衆圍繞價格、發布時間、功能提問",
    "gift_style": "科技圈、粉絲向禮物文案"
  },
  "constraints": {
    "goal": "讓整張圖看起來像品牌本人真的在直播帶貨，而不是簡單概念海報"
  }
}
```

## 模板 3：隨機主播 + 隨機商品自動補全模式

📖 描述

適用於用戶只說「幫我做一張直播帶貨界面圖」，但不給具體人物和商品。

📝 提示詞

```json
{
  "type": "直播帶貨自動補全模板",
  "mode": "auto-fill",
  "subject": {
    "host_generation_mode": "random-but-plausible",
    "description": "自動生成一個適合直播出鏡的主播形象，具備明確的人設、職業感和鏡頭表現力"
  },
  "product": {
    "generation_mode": "random-but-coherent",
    "rule": "自動生成與主播人設和場景一致的商品，不要出現明顯不協調的搭配"
  },
  "ui": {
    "chat_messages": "自動生成與商品相關、看起來像真實直播觀衆會說的話",
    "gift_messages": "自動生成少量禮物彈窗，增強直播氛圍",
    "product_card": "自動生成合理的商品名、價格與熱賣標籤"
  },
  "constraints": {
    "must_feel": [
      "真實",
      "平臺感明確",
      "信息豐富但不雜亂",
      "適合作爲案例樣機"
    ]
  }
}
```

## 如何從這個模板生成變體

### 變體 1：用戶給照片

- 把 `subject.source_mode` 改爲 `reference-photo`
- 用用戶圖片作爲主體參考
- 其他 UI 字段保留模板結構

### 變體 2：用戶給名人名字

- 用 `celebrity-name`
- 保留描述字段作爲輔助形象說明

### 變體 3：用戶只給人物描述

- 用 `text-description`
- 讓模板中的 `description` 成爲主導字段

### 變體 4：用戶什麼都沒給

- 用 `auto-fill`
- 只對核心字段發起少量必要提問
- 其餘字段可以隨機補全

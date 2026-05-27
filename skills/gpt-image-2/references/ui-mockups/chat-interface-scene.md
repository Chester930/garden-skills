# 聊天界面 / 對話氣泡場景模板

本文件用於生成「聊天 App 界面 + 對話氣泡 + 角色頭像」的樣機，可用於：

- 微信 / iMessage / WhatsApp / Discord 風格聊天截圖
- 對話流式表情包
- 角色之間的「假聊天」劇本視覺
- 客服對話樣機
- 心理諮詢 / 教學場景對話演示
- AI 助手對話界面演示

它跟 `live-commerce-ui.md` 的區別：

- 直播 UI：以人物畫面爲主，UI 疊加在上面
- 聊天界面：以聊天氣泡 + 頭像爲主，畫面就是 App 內的對話流

## 適用範圍

- 一對一聊天截圖樣機
- 羣聊截圖樣機
- AI 與人聊天的對話流截圖
- 雙角色 / 多角色互動劇本
- 故事化截圖（比如「甲乙兩人的對話推進劇情」）

## 何時使用

- 用戶提到「聊天截圖 / 對話樣機 / 微信聊天 / iMessage / 羣聊樣機」
- 用戶希望讓兩個或多個角色「聊一段話」
- 用戶希望生成具備表情包屬性的對話流
- 用戶希望生成 AI 助手 / 客服的對話演示

不要使用：

- 用戶要的是社交平臺帖子（用 `social-interface-mockup.md`）
- 用戶要的是直播間界面（用 `live-commerce-ui.md`）

## 缺失信息優先提問順序

1. 平颱風格：iMessage、微信、WhatsApp、Discord、通用 IM、AI 助手
2. 顏色模式：淺色 / 深色
3. 對話角色：幾人，每人是誰
4. 對話主題：具體場景（吵架 / 表白 / 談業務 / 角色扮演 / AI 答疑）
5. 是否需要表情、貼紙、轉賬卡片、語音條等富媒體
6. 是否允許我自動補全對話內容

## 主模板：雙人聊天截圖

📖 描述

仿真兩人在某個 IM App 裏的聊天頁面，包含頂部頭部、滾動對話流、底部輸入欄。

📝 提示詞

```json
{
  "type": "移動端雙人聊天截圖樣機",
  "goal": "生成一張高仿真的聊天截圖，可用於內容創意、劇本演示、角色對話視覺",
  "platform": {
    "name": "{argument name=\"platform\" default=\"iMessage\"}",
    "color_mode": "{argument name=\"color mode\" default=\"light\"}",
    "language": "{argument name=\"interface language\" default=\"中文\"}"
  },
  "header": {
    "status_bar": "頂部狀態欄，時間 '{argument name=\"status time\" default=\"21:42\"}'，信號、Wi-Fi、電量",
    "navigation": {
      "back": "返回箭頭",
      "contact_avatar": "{argument name=\"contact avatar\" default=\"對話方頭像\"}",
      "contact_name": "{argument name=\"contact name\" default=\"林深\"}",
      "online_status": "{argument name=\"online status\" default=\"在線\"}",
      "right_actions": ["語音通話圖標", "視頻通話圖標"]
    }
  },
  "conversation": {
    "self_alignment": "right",
    "other_alignment": "left",
    "message_count": "{argument name=\"message count\" default=\"8\"}",
    "messages": [
      {
        "role": "other",
        "type": "text",
        "text": "{argument name=\"msg 1\" default=\"在嗎？剛剛那個事我想了想\"}",
        "timestamp": "21:38"
      },
      {
        "role": "self",
        "type": "text",
        "text": "{argument name=\"msg 2\" default=\"在的，你說\"}",
        "timestamp": "21:39"
      },
      {
        "role": "other",
        "type": "text",
        "text": "{argument name=\"msg 3\" default=\"我決定明天就把方案交出去\"}",
        "timestamp": "21:39"
      },
      {
        "role": "self",
        "type": "voice",
        "duration": "00:08",
        "timestamp": "21:40"
      },
      {
        "role": "other",
        "type": "sticker",
        "description": "可愛貓咪 OK 貼紙",
        "timestamp": "21:40"
      },
      {
        "role": "self",
        "type": "image",
        "description": "白板上寫着思維導圖",
        "timestamp": "21:41"
      },
      {
        "role": "other",
        "type": "text",
        "text": "{argument name=\"msg 7\" default=\"這個方向我也認同，明天九點見\"}",
        "timestamp": "21:41"
      },
      {
        "role": "self",
        "type": "text",
        "text": "{argument name=\"msg 8\" default=\"好，明早咖啡我請\"}",
        "timestamp": "21:42"
      }
    ]
  },
  "footer": {
    "input_bar": {
      "left_icons": ["相機", "圖片", "語音"],
      "placeholder": "{argument name=\"input placeholder\" default=\"輸入消息\"}",
      "right_icons": ["表情", "+"]
    },
    "home_indicator": "底部 home 指示條"
  },
  "style": {
    "rendering": "高保真移動端聊天界面截圖，縱向比例，看起來像真實手機截屏",
    "consistency": "氣泡顏色、頭像位置、時間樣式嚴格遵循平颱風格"
  },
  "constraints": {
    "must_keep": [
      "氣泡左右對齊與角色一致",
      "時間戳合理推進，不能亂序",
      "中文文字清晰可讀",
      "頭像與暱稱一致"
    ],
    "avoid": [
      "氣泡背景與文字顏色對比度過低",
      "時間顯示不符合一天內的邏輯",
      "圖片與語音條出現錯位"
    ]
  }
}
```

### 參數策略

- 必問：平臺、對話雙方身份、對話主題
- 可默認：狀態欄時間、底部輸入欄圖標、在線狀態
- 可隨機：少量氛圍消息（貼紙、表情、emoji），但不能蓋過主對話

### 自動補全策略

當用戶說「你幫我編一段對話」：

- 控制在 6-10 條消息內
- 內容要有起承轉合，不要全是「嗯嗯好的」
- 每條消息字數控制在合理 IM 長度（≤ 35 字最佳）
- 時間戳必須連續合理

## 變體 1：羣聊樣機

📝 提示詞

```json
{
  "type": "羣聊樣機",
  "platform": {
    "name": "{argument name=\"platform\" default=\"微信\"}",
    "color_mode": "light"
  },
  "group": {
    "name": "{argument name=\"group name\" default=\"產品組日常\"}",
    "member_count": "{argument name=\"member count\" default=\"12\"}"
  },
  "conversation": {
    "messages": [
      {"role": "member", "name": "Lily", "text": "今天的需求評審定 4 點對嗎？"},
      {"role": "member", "name": "陳工", "text": "對，會議室 A"},
      {"role": "self", "text": "我把文檔更新到羣裏了"},
      {"role": "system", "text": "撤回了一條消息"},
      {"role": "member", "name": "PM 老王", "text": "@all 提前 5 分鐘到位"}
    ]
  },
  "constraints": {
    "must_feel": "像真實工作羣"
  }
}
```

## 變體 2：AI 助手對話界面

適合：AI 產品的功能演示截圖、宣傳圖、教學圖。

📝 提示詞

```json
{
  "type": "AI 助手對話界面樣機",
  "platform": {
    "name": "{argument name=\"product name\" default=\"通用 AI 助手\"}",
    "color_mode": "{argument name=\"color mode\" default=\"light\"}"
  },
  "header": {
    "title": "{argument name=\"chat title\" default=\"新對話\"}",
    "model_label": "{argument name=\"model label\" default=\"Claude Opus 4.7\"}",
    "right_actions": ["新建對話", "歷史"]
  },
  "conversation": {
    "messages": [
      {
        "role": "user",
        "text": "{argument name=\"user question\" default=\"幫我把下面這段會議紀要整理成行動項\"}"
      },
      {
        "role": "assistant",
        "type": "structured",
        "content": [
          "1. 行動項一：負責人 / 截止日",
          "2. 行動項二：負責人 / 截止日",
          "3. 行動項三：負責人 / 截止日"
        ]
      },
      {
        "role": "user",
        "text": "{argument name=\"follow up\" default=\"再生成一份發給團隊的郵件\"}"
      },
      {
        "role": "assistant",
        "type": "code-block",
        "language": "markdown",
        "preview": "郵件正文預覽，開頭致敬，中間結構化要點，結尾籤名"
      }
    ]
  },
  "footer": {
    "input_bar": {
      "placeholder": "{argument name=\"input placeholder\" default=\"問點什麼...\"}",
      "right_button": "發送"
    },
    "tools_row": ["上傳文件", "網頁", "代碼", "圖像"]
  },
  "constraints": {
    "must_feel": "像真實 AI 產品截圖，而不是純設計稿"
  }
}
```

## 變體 3：自動補全模式

適用於用戶只說「做一段聊天截圖」。

📝 提示詞

```json
{
  "type": "聊天界面自動補全模板",
  "mode": "auto-fill",
  "platform_default": "iMessage 淺色模式",
  "scene_generation": "默認生成生活感對話，不強加故事走向",
  "rule": "如果用戶沒指定雙方身份，默認兩個朋友之間的輕鬆對話",
  "constraints": {
    "must_feel": "自然、像真實手機截圖"
  }
}
```

## 避免事項

- 不要讓對話雙方全部用一邊對齊，必須區分發送者與接收者
- 不要讓頭像出現在用戶自己消息那一側（除部分平臺特例）
- 不要混合兩種平臺的 UI 元素（比如 iMessage 藍色氣泡 + 微信底欄）
- 不要讓消息之間時間戳出現倒退、不連貫
- 不要在「客服 / AI 助手」場景中加入私人化情緒表達
- 不要把所有消息都做成純文字，會顯得不真實，可適當夾雜圖片 / 貼紙 / 語音條

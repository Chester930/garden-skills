# 社交平臺界面樣機模板

本文件用於生成「社交媒體 App 界面 + 內容」的高度仿真樣機，比如微博 / Twitter(X) / 小紅書 / Threads / Instagram 等平臺的發帖頁、動態詳情頁、評論區。

不是用來做真實截圖，而是用來做：

- 概念產品視覺
- 角色 / 歷史人物 / 虛擬 IP 在社交平臺的「假賬號」
- 營銷 demo
- 內容創意展示

## 適用範圍

- 單條動態詳情頁（推文 / 帖子）
- 評論區樣機
- 社交平臺個人主頁頭部
- 暗黑 / 淺色模式 UI 模擬
- 多圖九宮格 / 多圖卡片樣機

## 何時使用

- 用戶提到「社交媒體樣機 / 推文樣機 / 微博樣機 / Twitter 樣機 / 朋友圈樣機 / 小紅書樣機」
- 用戶希望讓一個名人 / 角色 / 虛擬身份「在某個平臺發了一條 xx」
- 用戶希望生成 UI + 內容融合的運營素材，而不是真實截屏

不要使用本模板的場景：

- 用戶只想要一張人物頭像
- 用戶想要的是真實功能截圖
- 用戶要的是直播帶貨界面（去 `live-commerce-ui.md`）

## 缺失信息優先提問順序

當用戶只說「做一個社交平臺樣機」時，按以下順序提問，能合併的合併：

1. 平颱風格：Twitter/X、小紅書、微博、Threads、Instagram、通用社交 App
2. 顏色模式：深色還是淺色
3. 賬號主體：真人 / 名人 / 虛構人物 / 歷史人物 / 品牌賬號
4. 帖子內容：核心文案
5. 是否需要配圖，配圖主題是什麼
6. 是否允許我自動補全互動數據（點讚、轉發、評論文案）

如果用戶說「你幫我補全」，則只問平颱風格 + 主體身份 + 帖子主題，其餘字段自動填充。

## 主模板：單條社交動態詳情頁

📖 描述

仿真「某社交平臺動態詳情頁」的截圖樣機，包含：

- 頂部狀態欄與導航
- 帖子作者信息（頭像 / 暱稱 / handle / 認證標）
- 帖子正文與可選 hashtags
- 多圖卡片（可選）
- 互動統計與操作行
- 底部回復欄與底部 Tab Bar

📝 提示詞

```json
{
  "type": "移動端社交平臺動態詳情頁樣機",
  "goal": "生成一張高仿真度的社交平臺帖子詳情頁截圖，用於做內容樣機或概念演示",
  "platform": {
    "name": "{argument name=\"platform\" default=\"Twitter / X\"}",
    "color_mode": "{argument name=\"color mode\" default=\"dark\"}",
    "language": "{argument name=\"interface language\" default=\"中文\"}"
  },
  "header": {
    "status_bar": "頂部狀態欄，顯示時間 '{argument name=\"status time\" default=\"19:28\"}'，信號、Wi-Fi、電量圖標",
    "navigation": "返回箭頭 + 標題 '{argument name=\"page title\" default=\"帖子\"}'"
  },
  "post": {
    "author": {
      "avatar": "{argument name=\"avatar description\" default=\"身穿紅袍頭戴黑帽的中國古代帝王半身肖像\"}",
      "display_name": "{argument name=\"display name\" default=\"朱元璋\"}",
      "verified_badge": true,
      "handle": "{argument name=\"handle\" default=\"@Emperor_Ming\"}",
      "extra_badges": "{argument name=\"author extra badges\" default=\"皇室認證\"}"
    },
    "content": {
      "text": "{argument name=\"post text\" default=\"今日登基，開啓洪武元年。願與諸卿共建大明！\"}",
      "hashtags": "{argument name=\"hashtags\" default=\"#洪武元年 #登基大典 #大明王朝\"}",
      "media_grid": {
        "count": "{argument name=\"image count\" default=\"3\"}",
        "images": [
          "{argument name=\"image 1\" default=\"金色龍椅上的帝王正面照\"}",
          "{argument name=\"image 2\" default=\"宮殿庭院前萬人朝拜的遠景\"}",
          "{argument name=\"image 3\" default=\"帝王騎馬率軍前進的場景\"}"
        ]
      }
    },
    "metadata": {
      "timestamp": "{argument name=\"timestamp\" default=\"下午 1:36 · 1368 年 1 月 23 日\"}",
      "engagement": "{argument name=\"engagement stats\" default=\"5,432 轉發 · 8,765 引用 · 2.01 萬 點讚 · 10.23 萬 瀏覽\"}"
    },
    "actions": "底部一行操作圖標：回復、轉發、點讚（紅色心形帶計數 '1'）、分享、上傳"
  },
  "comments_preview": {
    "show": "{argument name=\"show top comment\" default=\"true\"}",
    "top_comment": {
      "avatar": "隨機普通用戶頭像",
      "name": "{argument name=\"top commenter\" default=\"紅巾軍老張\"}",
      "text": "{argument name=\"top comment text\" default=\"陛下聖明！願大明永昌！\"}"
    }
  },
  "footer": {
    "reply_bar": {
      "avatar": "當前登錄用戶的小頭像",
      "placeholder": "{argument name=\"reply placeholder\" default=\"回復給 朱元璋...\"}"
    },
    "navigation_bar": "底部 Tab：首頁、搜索、通知（帶紅點 '1'）、消息"
  },
  "style": {
    "rendering": "高保真移動端 UI 截圖，1:2 左右縱向比例，看起來像真實手機截屏",
    "consistency": "整體配色嚴格遵循平臺官方風格"
  },
  "constraints": {
    "must_keep": [
      "平臺 UI 元素層級清晰",
      "頭像、暱稱、認證標、handle 都必須正確呈現",
      "正文文字必須清晰可讀"
    ],
    "avoid": [
      "看起來像圖片拼接而不是真實 UI",
      "比例錯誤導致像桌面網頁",
      "頭像與暱稱配不上"
    ]
  }
}
```

### 參數策略

- 必問：平臺、顏色模式、賬號主體、帖子文案
- 可默認：狀態欄時間、底部 Tab Bar 文案、操作行圖標
- 可隨機：互動統計數字、熱門評論文案、hashtags 中的次要標籤

### 自動補全策略

當用戶說「你幫我補全」時：

- 時間默認下午時段
- 瀏覽數與點讚數按帖子內容熱度估算（小衆內容用 K，熱點用 W）
- 評論用真實社區口吻，不要生成空洞模板話
- hashtags 與帖子主題保持一致，不要塞入無關流量詞

## 變體 1：明亮模式 + 中文小紅書風

📝 提示詞

```json
{
  "type": "小紅書風格圖文動態詳情頁樣機",
  "platform": {
    "name": "小紅書",
    "color_mode": "light",
    "language": "中文"
  },
  "header": "頂部爲搜索欄 + 頭像 + 關注按鈕",
  "post": {
    "author": {
      "display_name": "{argument name=\"display name\" default=\"小滿 Maya\"}",
      "tag": "{argument name=\"author tag\" default=\"穿搭 | 探店\"}"
    },
    "title": "{argument name=\"post title\" default=\"上海周末 City Walk 路線分享\"}",
    "cover_image": "{argument name=\"cover image\" default=\"街頭年輕女生側身行走\"}",
    "swipeable_images_count": 4,
    "body_text": "{argument name=\"body text\" default=\"安福路 → 武康路 → 五原路，全程 3 公裏...\"}",
    "tags": ["#周末出片", "#City Walk", "#上海周末去哪兒"]
  },
  "interaction_bar": "點讚、收藏、評論、分享，全部帶數字",
  "comments_preview": {
    "count": 3,
    "messages": [
      "想要詳細攻略！",
      "這條路線我也走過，超出片",
      "求穿搭鏈接 🔗"
    ]
  },
  "constraints": {
    "must_feel": "像真實小紅書圖文筆記，而不是海報"
  }
}
```

## 變體 2：品牌賬號官方公告

適合品牌、應用、企業賬號風格。

📝 提示詞

```json
{
  "type": "品牌官方賬號公告樣機",
  "platform": {
    "name": "{argument name=\"platform\" default=\"Twitter / X\"}",
    "color_mode": "{argument name=\"color mode\" default=\"light\"}"
  },
  "post": {
    "author": {
      "display_name": "{argument name=\"brand name\" default=\"Anthropic\"}",
      "verified_badge": "official-gold",
      "handle": "{argument name=\"handle\" default=\"@AnthropicAI\"}"
    },
    "content": {
      "text": "{argument name=\"announcement text\" default=\"Today we're introducing Claude Opus 4.7 — our most capable model yet for coding and complex reasoning.\"}",
      "media_grid": {
        "count": 1,
        "images": ["產品發布主視覺，帶 '{argument name=\"product name\" default=\"Claude Opus 4.7\"}' 大字"]
      }
    },
    "metadata": {
      "engagement": "高互動量級，例如 '12K 轉發 / 36K 引用 / 158K 點讚 / 2.3M 瀏覽'"
    }
  },
  "constraints": {
    "must_feel": "像官方賬號正式發布",
    "avoid": "出現明顯的私人化、口語化措辭"
  }
}
```

## 變體 3：自動補全模式

適合用戶只說「給我做一個社交平臺樣機」。

📝 提示詞

```json
{
  "type": "社交動態樣機自動補全模板",
  "mode": "auto-fill",
  "platform_generation": "若用戶沒說，默認 Twitter / X，深色模式，中文界面",
  "author_generation": "隨機生成一個看起來真實但不冒犯的賬號主體",
  "content_generation": "圍繞一個具體且具體感強的話題展開，不要泛而空",
  "media_generation": "默認 1-3 張配圖，與正文緊密相關",
  "constraints": {
    "must_feel": "真實、有人味、可信"
  }
}
```

## 避免事項

- 不要讓 UI 元素只是純文字堆疊，必須有頭像、按鈕、圖標三要素
- 不要把社交平颱風格混搭到分不清是哪個平臺
- 不要讓正文超過截圖所能正常顯示的長度，否則會出現嚴重截斷
- 不要在「品牌官方賬號」裏生成太私人化或太情緒化的話術
- 不要生成與平臺官方顏色明顯衝突的主色（比如 X 出現純小紅書紅）

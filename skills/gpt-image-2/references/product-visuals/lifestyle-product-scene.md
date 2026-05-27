# 生活方式產品場景圖模板

本文件用於生成「商品出現在真實生活場景中」的視覺：

- 桌面工作場景中的筆記本電腦
- 海邊度假桌上的飲料
- 咖啡館桌上的拿鐵
- 早晨梳妝檯前的護膚品
- 宿舍牀上的耳機
- 戶外露營場景下的裝備

強調：

- 商品在場景中「被使用 / 準備使用 / 剛被使用」
- 真實生活氣息
- 自然光或柔和光爲主
- 適度道具，但不喧賓奪主

它跟 `premium-studio-product.md` 的區別：

- 影棚圖：純氛圍、純產品、戲劇光、無場景
- 生活方式圖：真實場景、自然光、可有人物局部（手、背影）

跟 `product-card-overlay.md` 的區別：

- product-card-overlay：電商詳情頁 hero，必須有 UI 卡 / 文案疊加
- 本模板：純攝影場景圖，不強求 UI

## 適用範圍

- 品牌官網首屏
- 營銷 banner 主視覺
- Instagram / 小紅書 / 朋友圈封面圖
- 內容化電商素材
- 節日促銷場景圖
- 雜誌風格生活方式封面

## 何時使用

- 用戶提到「場景圖 / 生活方式 / lifestyle / 真實場景 / 雜誌感」
- 用戶希望商品看起來「有人在用」
- 用戶希望視覺自然不商業化

不要使用：

- 用戶要電商主圖（用 `white-background-product.md`）
- 用戶要爆炸視圖（用 `exploded-view-poster.md`）
- 用戶要包裝展示（用 `packaging-showcase.md`）
- 用戶要純氛圍廣告級單品（用 `premium-studio-product.md`）

## 缺失信息優先提問順序

1. 商品具體是什麼
2. 場景：辦公桌 / 咖啡館 / 早晨梳妝檯 / 海邊 / 戶外 / 廚房 / 臥室
3. 時間：清晨、午後、黃昏、夜晚
4. 氣候 / 光照：自然光、暖光、陰天柔光、室內燈光
5. 是否包含人物（局部 / 全身 / 背影）
6. 是否需要輕量文案（slogan / hashtag）

## 主模板：單品 + 真實場景

📖 描述

商品擺放在真實生活場景中，自然光爲主，可有人物局部（手 / 背影），少量道具增加生活感。

📝 提示詞

```json
{
  "type": "生活方式產品場景圖",
  "goal": "生成一張商品出現在真實生活場景中的視覺，氛圍真實、克制、品質感強，可作爲品牌主視覺或社媒封面使用",
  "subject": {
    "product_name": "{argument name=\"product name\" default=\"白色按壓式精華瓶\"}",
    "visual_description": "{argument name=\"product visual\" default=\"圓肩瓶身，磨砂白瓶，瓶身印 'DERMA CALM'\"}",
    "position": "{argument name=\"product position\" default=\"畫面中心略偏右下\"}"
  },
  "scene": {
    "location": "{argument name=\"scene location\" default=\"清晨陽光下的木質梳妝檯\"}",
    "time_of_day": "{argument name=\"time of day\" default=\"清晨\"}",
    "weather_or_mood": "{argument name=\"mood\" default=\"清新、柔和、剛醒來的感覺\"}",
    "extra_props": [
      "{argument name=\"prop 1\" default=\"半透明杯裏的清水\"}",
      "{argument name=\"prop 2\" default=\"散落的幾片白色花瓣\"}",
      "{argument name=\"prop 3\" default=\"摺疊的米白色毛巾\"}"
    ]
  },
  "lighting": {
    "type": "{argument name=\"light type\" default=\"自然光\"}",
    "direction": "{argument name=\"light direction\" default=\"側光，從左側窗戶灑入\"}",
    "intensity": "{argument name=\"light intensity\" default=\"柔和\"}",
    "color_temp": "{argument name=\"color temperature\" default=\"略偏暖\"}"
  },
  "human_presence": {
    "enabled": "{argument name=\"include human\" default=\"true\"}",
    "form": "{argument name=\"human form\" default=\"局部，比如手指輕觸瓶身\"}",
    "rule": "若包含人物，必須自然不刻意，不要有完整正臉"
  },
  "text_overlay": {
    "enabled": "{argument name=\"text enabled\" default=\"false\"}",
    "brand": "{argument name=\"brand name\" default=\"\"}",
    "headline": "{argument name=\"headline\" default=\"\"}"
  },
  "style": {
    "rendering": "真實攝影感 + 顆粒感 + 低飽和度，不像廣告硬照",
    "depth": "淺景深，主體清晰",
    "consistency": "色調統一，沒有突兀的高飽和元素"
  },
  "constraints": {
    "must_keep": [
      "商品是視覺焦點",
      "場景真實可信",
      "光線方向統一",
      "道具與商品同色系"
    ],
    "avoid": [
      "場景看起來是 3D 渲染",
      "人物正臉搶戲",
      "道具喧賓奪主",
      "出現明顯的電商廣告卡片"
    ]
  }
}
```

### 參數策略

- 必問：商品、場景、是否含人物
- 可默認：時間、燈光、道具
- 可隨機：道具具體物件（在色板和場景內合理生成）

### 自動補全策略

- 護膚品默認：清晨梳妝檯 + 自然側光 + 毛巾、花瓣、玻璃杯
- 飲料默認：戶外或桌面 + 自然光 + 冰塊、檸檬片
- 數碼默認：辦公桌 + 室內自然光 + 筆記本、咖啡杯
- 戶外裝備默認：黃昏自然光 + 山野 / 海邊 + 簡單背景物

## 變體 1：飲品戶外場景

📝 提示詞

```json
{
  "type": "飲品戶外生活方式場景圖",
  "subject": {
    "product_name": "{argument name=\"product name\" default=\"金色氣泡飲料鋁罐\"}"
  },
  "scene": {
    "location": "海邊木桌",
    "time_of_day": "晴朗午後",
    "extra_props": [
      "高腳杯 + 檸檬裝飾",
      "近處水珠鋁罐",
      "遠處虛化海灘與天空"
    ]
  },
  "lighting": {
    "type": "自然光",
    "direction": "頂光 + 閃光焦外",
    "intensity": "明亮"
  },
  "human_presence": {
    "enabled": true,
    "form": "遠處一名女性背影望向大海"
  },
  "text_overlay": {
    "enabled": true,
    "headline": "{argument name=\"headline\" default=\"夏天，就要這一口\"}"
  },
  "constraints": {
    "must_feel": "假期、清涼、自由"
  }
}
```

## 變體 2：辦公桌數碼場景

📝 提示詞

```json
{
  "type": "桌面數碼生活方式場景圖",
  "subject": {
    "product_name": "{argument name=\"product name\" default=\"無線耳機充電盒\"}"
  },
  "scene": {
    "location": "極簡北歐風桌面",
    "time_of_day": "上午",
    "extra_props": [
      "筆記本電腦半開",
      "咖啡杯",
      "小植物",
      "翻開的筆記本"
    ]
  },
  "lighting": {
    "type": "室內自然光 + 頂部柔光",
    "direction": "正面偏左",
    "intensity": "明亮均勻"
  },
  "human_presence": {
    "enabled": true,
    "form": "局部手指自然搭在桌上"
  },
  "constraints": {
    "must_feel": "專業、專注、利落"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "生活方式場景圖自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶只給商品名，自動決定最合適場景、時間、燈光與人物呈現方式，但必須維持商品視覺焦點",
  "constraints": {
    "must_feel": "雜誌風、可信、不誇張"
  }
}
```

## 避免事項

- 不要讓人物正臉成爲主角
- 不要塞超過 4-5 個道具
- 不要讓燈光出現「影棚頂光 + 室內自然光」混搭
- 不要讓畫面飽和度過高，會變成廣告硬照
- 不要在生活方式圖上疊加電商風的「價格 + 折扣」卡（那是 product-card-overlay 的活）
- 不要讓背景出現明顯品牌衝突（比如蘋果電腦放在友商發布會場景）

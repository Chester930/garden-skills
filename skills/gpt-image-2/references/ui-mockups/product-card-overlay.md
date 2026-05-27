# 商品卡疊加樣機模板

本文件用於生成「以人物 / 場景圖爲底，疊加商品卡 / 營銷 UI 元素」的電商樣機。

它跟 `live-commerce-ui.md` 的區別是：

- `live-commerce-ui.md`：仿真直播平臺界面，強調聊天區 / 禮物區 / 平臺 UI
- 本模板：偏向「商品 + 模特 / 商品 + 場景 + 賣點卡」的產品營銷視覺，更接近落地頁 hero 區或電商詳情頁主圖

## 適用範圍

- 電商詳情頁主圖樣機
- 落地頁 hero section
- 朋友圈 / 公衆號配圖帶商品卡
- 單圖廣告：人物 + 商品卡 + 賣點徽章
- 模特拿着商品 + 信息卡疊加

## 何時使用

- 用戶要的是「一張圖能講清楚商品是什麼 / 賣點是什麼 / 價格是多少」
- 用戶提到「詳情頁主圖 / 投放圖 / hero 圖 / 落地頁樣機」
- 用戶希望既有真實人物視覺，又有電商信息層

不要使用：

- 用戶要的是真實直播間截圖（用 `live-commerce-ui.md`）
- 用戶要的是純白底產品圖（用 `product-visuals/white-background-product.md`）

## 缺失信息優先提問順序

1. 商品是什麼（名稱 + 類目）
2. 主體來源：真人模特照片、模特描述、抽象「無人」場景
3. 是否要展示價格 / 賣點 / 徽章
4. 風格：日式簡潔 / 極客科技 / 暖色生活方式 / 高級影棚 / 街頭時尚
5. 配色主調
6. 文案語種：中文 / 英文 / 日文 / 雙語

## 主模板：人物 + 商品卡 + 賣點疊加

📖 描述

生成一張電商落地頁 hero 區視覺，結構穩定爲：左側文案 + 中間產品 + 右側模特 / 場景。

📝 提示詞

```json
{
  "type": "電商落地頁 hero 商品卡疊加樣機",
  "goal": "生成一張能直接當作電商詳情頁主視覺或營銷落地頁 hero 區使用的圖，包含人物、產品、賣點、價格信息四要素",
  "brand": {
    "name": "{argument name=\"brand name\" default=\"DERMA CALM\"}",
    "subtext": "{argument name=\"brand subtext\" default=\"敏感肌專研\"}"
  },
  "color_palette": {
    "base": "{argument name=\"base color\" default=\"白\"}",
    "primary": "{argument name=\"primary color\" default=\"深藍\"}",
    "accent": "{argument name=\"accent color\" default=\"淺藍\"}"
  },
  "layout": {
    "header": {
      "logo": "左側品牌名 + 副標題",
      "navigation_links": "{argument name=\"nav links\" default=\"ABOUT, PRODUCT, FEATURE, INGREDIENT, VOICE, Q&A\"}",
      "cta_buttons": "{argument name=\"cta buttons\" default=\"我的頁面, 立即購買\"}"
    },
    "hero": {
      "left_column": {
        "headline": "{argument name=\"main headline\" default=\"敏感肌也能每天安心使用的溫和護理\"}",
        "subtext": "{argument name=\"sub headline\" default=\"低刺激 · 持久保溼 · 無香料 · 無酒精\"}",
        "buttons": ["立即購買", "了解詳情"]
      },
      "center_column": {
        "product": "{argument name=\"product description\" default=\"白色按壓瓶，瓶身印 'Moisture Barrier Serum'\"}",
        "props": [
          "白色乳液質感液滴特寫",
          "圓形 '皮膚科醫生監修' 徽章"
        ]
      },
      "right_column": {
        "subject": "{argument name=\"model description\" default=\"東亞年輕女性，皮膚通透，手指輕觸臉頰\"}",
        "background": "{argument name=\"background\" default=\"虛化的實驗室玻璃器皿背景，明亮乾淨\"}"
      }
    },
    "bottom_features_panel": {
      "left_cards": {
        "count": "{argument name=\"left feature count\" default=\"3\"}",
        "items": [
          "{argument name=\"feature 1\" default=\"95% 用戶給出 5 星好評\"}",
          "{argument name=\"feature 2\" default=\"低刺激配方，盾牌圖標\"}",
          "{argument name=\"feature 3\" default=\"水滴圖標 + 屏障修護\"}"
        ]
      },
      "right_badges": {
        "count": 3,
        "items": ["無香料", "無酒精", "敏感肌測試通過"]
      },
      "footer": "底部小字免責聲明"
    }
  },
  "style": {
    "rendering": "乾淨、臨牀感、商業級渲染，看起來像真實落地頁截圖",
    "consistency": "色板嚴格按照 base / primary / accent 三色"
  },
  "constraints": {
    "must_keep": [
      "三欄結構清晰",
      "產品作爲視覺中心",
      "文案與產品一致",
      "徽章不能比 logo 還大"
    ],
    "avoid": [
      "排版極度擁擠",
      "模特動作顯得違和",
      "色板出現額外鮮豔顏色"
    ]
  }
}
```

### 參數策略

- 必問：商品名、品牌名、模特方向、主色
- 可默認：導航文案、按鈕文案、徽章文案
- 可隨機：底部小字免責聲明、賣點措辭具體表述

### 自動補全策略

- 沒有給品牌就生成一個簡潔的英文品牌名 + 中文副標題
- 沒有給模特方向，默認目標用戶畫像（護膚 -> 年輕女性 / 男士護膚 -> 年輕男性 / 數碼 -> 都市年輕人）
- 賣點必須 3 條，互不重複，不空洞

## 變體 1：暗色科技產品落地頁

📝 提示詞

```json
{
  "type": "暗色科技品牌落地頁 hero 樣機",
  "theme": "{argument name=\"theme\" default=\"男士護膚 / 數碼硬件\"}",
  "color_palette": ["深海軍藍", "白", "藍色漸變"],
  "header": {
    "logo": "{argument name=\"brand name\" default=\"NEX SKIN\"}",
    "navigation": ["HOME", "PRODUCT", "ABOUT", "FEATURE", "FAQ"],
    "cta_button": "立即開始 >"
  },
  "hero": {
    "left_column": {
      "headline": "{argument name=\"main headline\" default=\"清爽感，從每日護理開始\"}",
      "sub_headline": "男士肌膚，更需要簡單",
      "feature_highlights": [
        "去油控亮：調節皮脂",
        "保溼：長時間潤澤",
        "一瓶搞定：化妝水 + 精華 + 乳液"
      ]
    },
    "center_image": {
      "subject": "{argument name=\"model\" default=\"清爽幹練的亞洲年輕男性\"}",
      "pose": "手部託腮思考"
    },
    "right_column": {
      "product_shot": "{argument name=\"product\" default=\"高瘦的深藍色瓶身，瓶身帶水珠\"}"
    }
  },
  "bottom_stats_bar": {
    "items": [
      "累計銷量 120 萬瓶",
      "滿意度 92.1%",
      "復購率 85.3%"
    ]
  },
  "constraints": {
    "must_feel": "硬朗、專業、可信賴"
  }
}
```

## 變體 2：四格人物 + 商品卡集合

適合一張圖覆蓋多個人羣 / 場景。

📝 提示詞

```json
{
  "type": "四格人物-商品卡集合樣機",
  "layout": "2x2 網格，每格獨立人物 + 獨立商品卡",
  "quadrants": [
    {
      "position": "左上",
      "industry": "護膚",
      "subject": "亞洲女性輕觸臉頰",
      "product": "白色按壓瓶",
      "headline": "{argument name=\"q1 headline\" default=\"素肌覺醒\"}"
    },
    {
      "position": "右上",
      "industry": "餐飲",
      "subject": "意大利肉醬面特寫",
      "product": "餐廳 logo + 限定上市標識",
      "headline": "{argument name=\"q2 headline\" default=\"這碗面，事件級\"}"
    },
    {
      "position": "左下",
      "industry": "旅行",
      "subject": "背包女性面對高山湖泊",
      "product": "旅行品牌 + 折扣 banner",
      "headline": "{argument name=\"q3 headline\" default=\"出發，讓自己自由\"}"
    },
    {
      "position": "右下",
      "industry": "SaaS 應用",
      "subject": "手機展示任務管理 App 界面",
      "product": "應用品牌 + 7 天免費試用",
      "headline": "{argument name=\"q4 headline\" default=\"讓任務管理更簡單\"}"
    }
  ],
  "constraints": {
    "must_feel": "像同一品牌矩陣或同一廣告 campaign 出品"
  }
}
```

## 變體 3：自動補全模式

適合用戶只說「做一張電商落地頁主圖」。

📝 提示詞

```json
{
  "type": "落地頁商品卡疊加自動補全模板",
  "mode": "auto-fill",
  "rule": "在主模板基礎上，自動補齊品牌名、文案、模特方向，但保持四要素：品牌、人物、商品、賣點都齊",
  "constraints": {
    "must_feel": "真實電商投放圖",
    "avoid": "看起來像 PPT"
  }
}
```

## 避免事項

- 不要讓人物表情過於誇張或假笑（會立刻破壞可信度）
- 賣點徽章 ≤ 3-4 個，多了會變成廣告噪音
- 文案顏色不能與底圖過於接近，否則不可讀
- 商品在畫面中必須有清晰主光，不能跟模特一起虛化
- 不要讓中文 + 英文 + 日文同時佔據同等大小，必須有主導語種

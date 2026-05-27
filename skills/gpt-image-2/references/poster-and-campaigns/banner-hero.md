# Web Banner / Hero 模板

本文件用於生成「網頁頂部 hero 區 / app banner / 投放素材」視覺：

- 網站首頁 hero
- 落地頁 banner
- App 頂部活動 banner
- 郵件 marketing banner
- 信息流廣告素材

特徵：

- 橫向比例（16:9 / 21:9 / 3:1）
- 一句強 claim
- 留出 CTA 區域
- 安全留白（避免裁切關鍵元素）

## 適用範圍

- Web hero
- 落地頁 hero
- App banner
- 郵件 banner
- 投放素材

## 何時使用

- 用戶提到「banner / hero / 落地頁主圖 / 頂部圖」
- 用戶需要橫向構圖 + CTA 區

不要使用：

- 豎圖 / 方圖主海報（用 `brand-poster.md`）
- 系列 KV（用 `campaign-kv.md`）
- 雜誌封面（用 `editorial-cover.md`）

## 缺失信息優先提問順序

1. 用途（web hero / app banner / 郵件）
2. 主題 / claim
3. 主視覺
4. CTA 文案 + 顏色
5. 品牌色
6. 比例

## 主模板：Web hero banner

📖 描述

整體橫向構圖，左側爲標題 + 副標題 + CTA，右側爲主視覺，底部安全留白。

📝 提示詞

```json
{
  "type": "Web hero banner",
  "goal": "生成一張可直接作爲產品官網 / 營銷落地頁 hero 區主圖的橫向 banner",
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"16:9\"}",
  "layout": {
    "left_column": {
      "headline": "{argument name=\"headline\" default=\"重新定義你的工作節奏\"}",
      "subhead": "{argument name=\"subhead\" default=\"AURORA Pro · 讓 AI 替你處理 80% 的瑣事\"}",
      "cta": {
        "text": "{argument name=\"cta text\" default=\"免費試用\"}",
        "color": "{argument name=\"cta color\" default=\"品牌主色\"}",
        "secondary": "{argument name=\"secondary cta\" default=\"了解更多\"}"
      }
    },
    "right_column": {
      "centerpiece": "{argument name=\"hero visual\" default=\"產品截圖 + 微微 3D 透視 + 高光\"}",
      "scale": "{argument name=\"hero scale\" default=\"佔右側 80%\"}"
    }
  },
  "background": {
    "type": "{argument name=\"background type\" default=\"淺色漸變\"}",
    "decoration": "{argument name=\"decoration\" default=\"微噪點 + 極淡幾何形\"}"
  },
  "brand": {
    "logo_position": "左上角",
    "navigation_hint": "{argument name=\"nav hint\" default=\"頂部導航條已存在，banner 不要畫\"}"
  },
  "safe_area": {
    "rule": "底部 10% + 右側 5% 留白，避免裁切",
    "mobile_consideration": "{argument name=\"mobile aware\" default=\"true\"}"
  },
  "constraints": {
    "must_keep": [
      "headline 字號最大",
      "CTA 必須可點擊感（明確按鈕形態）",
      "主視覺在右側不超出安全區",
      "色板嚴格統一"
    ],
    "avoid": [
      "headline 與主視覺重疊",
      "CTA 顏色與背景對比過低",
      "信息密度過高",
      "主視覺橫跨整個畫面無 claim 空間"
    ]
  }
}
```

### 參數策略

- 必問：headline、CTA、主視覺、比例
- 可默認：背景、副標題、安全區
- 可隨機：裝飾幾何形

### 自動補全策略

- 用戶給產品名時：自動生成 1 句 headline + 1 句 sub + 1 個 CTA
- CTA 默認品牌主色按鈕 + 灰色輔助按鈕
- 主視覺按行業自動選（SaaS = 截圖，消費 = 產品，服務 = 人物）

## 變體 1：純圖大背景 + 浮層文案

📝 提示詞

```json
{
  "type": "全屏背景圖 hero",
  "background": {
    "type": "全圖背景",
    "description": "{argument name=\"background image\" default=\"清晨工作桌面，柔光\"}"
  },
  "layout": {
    "left_column": {
      "headline": "{argument name=\"headline\" default=\"AI 讓早晨多出 30 分鐘\"}",
      "cta": "立即體驗"
    }
  },
  "constraints": {
    "must_feel": "氛圍、生活、品牌精神"
  }
}
```

## 變體 2：長橫條 banner（21:9 / 3:1）

📝 提示詞

```json
{
  "type": "超寬橫條 banner",
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"21:9\"}",
  "layout": {
    "left_column": { "headline": "限時 8 折 · 僅限 7 天" },
    "right_column": { "centerpiece": "倒計時數字 + 商品小圖" }
  },
  "constraints": {
    "must_feel": "促銷、緊迫感、CTA 強烈"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "Banner / hero 自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給產品 + 主題 + 比例，自動生成 headline / CTA / 主視覺 / 安全區",
  "constraints": {
    "must_feel": "可直接上 web / app"
  }
}
```

## 避免事項

- 不要讓 headline 和主視覺互相遮擋
- 不要讓 CTA 顏色與背景對比 < 4.5:1
- 不要在 banner 上塞 > 3 行正文
- 不要忽略安全留白（移動端裁切會出問題）
- 不要讓 banner 橫向構圖變成純圖（必須有 claim）

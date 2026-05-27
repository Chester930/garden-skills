# 雜誌 / 編輯封面模板

本文件用於生成「雜誌封面 / 編輯式視覺 / 出版物封面」：

- 時尚雜誌封面
- 行業刊物封面
- 內部刊物 / 報告封面
- 自媒體特刊封面
- 編輯式專題主圖

特徵：

- 強烈的「出版物氣質」
- 主視覺肖像 / 單一物品佔主導
- 大字標題 + 小字欄目導引
- 比例多爲豎版 3:4 / 4:5
- 留刊名 + 期號位置

## 適用範圍

- 雜誌 / 期刊封面
- 行業報告封面
- 自媒體特刊封面
- 出版物風視覺海報

## 何時使用

- 用戶提到「雜誌 / 封面 / 期刊 / cover / 出版風」
- 用戶希望視覺極具「編輯感」，而不是廣告海報感

不要使用：

- 通用品牌海報（用 `brand-poster.md`）
- Banner（用 `banner-hero.md`）
- Campaign KV（用 `campaign-kv.md`）

## 缺失信息優先提問順序

1. 刊名 / 期號 / 出版方
2. 主標題（封面大字）
3. 主視覺（人 / 物 / 概念）
4. 子欄目 / 內頁導引短句（3-5 條）
5. 風格：高級時裝 / 文化 / 財經 / 科技 / 復古
6. 比例

## 主模板：雜誌封面（人物肖像）

📖 描述

豎版封面，主視覺爲人物肖像或單物，左上角刊名 + 期號，主標題大字橫排或豎排，左右欄目導引小字。

📝 提示詞

```json
{
  "type": "雜誌封面",
  "goal": "生成一張可作爲時尚 / 文化 / 行業雜誌封面的視覺，編輯感強烈",
  "publication": {
    "name": "{argument name=\"publication name\" default=\"NEUE\"}",
    "tagline": "{argument name=\"tagline\" default=\"Culture · Design · Future\"}",
    "issue": "{argument name=\"issue\" default=\"Issue 042 / 2026 April\"}"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4\"}",
  "main_visual": {
    "type": "{argument name=\"main visual type\" default=\"人物肖像\"}",
    "description": "{argument name=\"main visual\" default=\"東亞年輕女性正面肖像，眼神平靜，自然光\"}",
    "composition": "{argument name=\"composition\" default=\"佔滿畫面，頭部居中略偏右\"}"
  },
  "title_block": {
    "main_title": "{argument name=\"main title\" default=\"重啓與重啓之間\"}",
    "main_title_style": "{argument name=\"title style\" default=\"超大粗襯線，疊加在主視覺上\"}",
    "kicker": "{argument name=\"kicker\" default=\"專訪\"}"
  },
  "side_teasers": {
    "count": "{argument name=\"teaser count\" default=\"4\"}",
    "items": [
      "{argument name=\"teaser 1\" default=\"AI 時代的寫作 · 韓松落 vs ChatGPT\"}",
      "{argument name=\"teaser 2\" default=\"建築師手記 · 在杭州慢慢蓋一座房子\"}",
      "{argument name=\"teaser 3\" default=\"特別企劃 · 30 位 30 歲\"}",
      "{argument name=\"teaser 4\" default=\"長讀 · 一個失敗的創業\"}"
    ],
    "position": "{argument name=\"teaser position\" default=\"畫面下方 + 左側 vertical\"}"
  },
  "color_palette": "{argument name=\"color palette\" default=\"米白 + 墨黑 + 一抹品牌橙\"}",
  "barcode": {
    "enabled": "{argument name=\"barcode enabled\" default=\"true\"}",
    "position": "右下角"
  },
  "constraints": {
    "must_keep": [
      "主視覺作爲絕對錨點",
      "刊名清晰可讀且不被遮擋",
      "主標題字號最大",
      "欄目導引不搶戲"
    ],
    "avoid": [
      "主視覺與文字爭搶同一區域",
      "字體多於 3 種",
      "色板出現額外色",
      "出現廣告 logo"
    ]
  }
}
```

### 參數策略

- 必問：刊名、期號、主標題、主視覺
- 可默認：色板、欄目導引、條碼
- 可隨機：裝飾小元素

### 自動補全策略

- 風格根據刊型自動選（時尚 = 高對比 + 極簡，財經 = 藍灰 + 襯線，文化 = 暖米 + 襯線）
- 主標題默認 6-12 字
- 欄目默認 3-4 條

## 變體 1：單物封面（產品 / 物品）

📝 提示詞

```json
{
  "type": "單物雜誌封面",
  "main_visual": {
    "type": "object",
    "description": "{argument name=\"object\" default=\"一把保養良好的復古打字機\"}"
  },
  "title_block": {
    "main_title": "{argument name=\"title\" default=\"工具的靈魂\"}"
  },
  "constraints": {
    "must_feel": "靜物、克制、文學感"
  }
}
```

## 變體 2：財經 / 科技刊封面

📝 提示詞

```json
{
  "type": "財經科技刊封面",
  "main_visual": {
    "type": "concept",
    "description": "{argument name=\"concept\" default=\"信息流抽象圖形 + 主體人物剪影\"}"
  },
  "color_palette": "深藍 + 銀 + 一抹熒光",
  "title_block": {
    "main_title": "{argument name=\"title\" default=\"AI 重寫商業\"}"
  },
  "constraints": {
    "must_feel": "前沿、可信、行業旗艦"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "雜誌封面自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給刊型 + 主題，自動生成刊名、期號、主標題、欄目導引、風格",
  "constraints": {
    "must_feel": "可放上書報亭"
  }
}
```

## 避免事項

- 不要讓刊名被主視覺遮住
- 不要讓主標題與主視覺色彩對比過低
- 不要讓欄目導引超過 5 條
- 不要使用 > 3 種字體
- 不要讓條碼出現在主視覺中心

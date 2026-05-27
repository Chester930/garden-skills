# 包裝展示圖模板

本文件用於生成「產品包裝本身」作爲視覺主體的展示圖：

- 禮盒包裝 + 內容物
- 單品外盒 + 角度組合
- 系列產品包裝合集
- 限量禮盒拆解視覺
- 套裝內容物開盒擺放

它跟 `branding-and-packaging/` 下的「品牌包裝系統」模板的區別：

- 本模板：單一產品 / 單一禮盒爲視覺中心，重點是「開箱即用」的產品圖
- branding-and-packaging：偏「品牌包裝設計 system」視覺，可能包含多個 SKU、規範頁

跟 `white-background-product.md` 的區別：

- 白底主圖：單品本身
- 包裝展示：盒子 + 拆開後內含的瓶 / 卡 / 說明書 / 周邊

## 適用範圍

- 禮盒展示
- 限量套裝宣傳圖
- 節日促銷主圖
- 美妝套裝 / 美食禮包 / 數碼套裝
- 內容物擺放圖
- 節日禮盒主圖

## 何時使用

- 用戶提到「禮盒 / 套裝 / 包裝 / 開箱圖 / 套盒主圖」
- 用戶希望同時展示外盒 + 內容物
- 用戶希望突出包裝設計本身

不要使用：

- 用戶只要單品白底主圖（用 `white-background-product.md`）
- 用戶要場景化（用 `lifestyle-product-scene.md`）
- 用戶要爆炸視圖（用 `exploded-view-poster.md`）

## 缺失信息優先提問順序

1. 包裝類型：紙盒 / 鐵盒 / 木盒 / 布袋 / 禮盒 / 簡易盒
2. 內容物：幾樣、各是什麼
3. 品牌名 / 系列名
4. 風格：高級簡約 / 節日喜慶 / 輕奢復古 / 童趣可愛 / 國潮東方
5. 主色 + 輔色
6. 是否要展示打開狀態

## 主模板：禮盒打開 + 內容物展示

📖 描述

主體是一個開蓋的禮盒，內容物有序擺放在盒中或盒旁，背景爲同色調乾淨表面。

📝 提示詞

```json
{
  "type": "禮盒包裝展示圖",
  "goal": "生成一張兼具產品介紹與節日感的禮盒展示圖，包含外盒 + 內容物 + 品牌信息層",
  "package": {
    "type": "{argument name=\"package type\" default=\"硬紙禮盒，開蓋狀態\"}",
    "shape": "{argument name=\"package shape\" default=\"長方形\"}",
    "exterior_color": "{argument name=\"exterior color\" default=\"墨綠色 + 燙金 logo\"}",
    "interior_color": "{argument name=\"interior color\" default=\"奶白色絨布內襯\"}",
    "logo": "{argument name=\"package logo\" default=\"金色品牌字標\"}",
    "ribbon": "{argument name=\"ribbon\" default=\"墨綠色絲帶\"}"
  },
  "contents": {
    "count": "{argument name=\"content count\" default=\"4\"}",
    "items": [
      "{argument name=\"content item 1\" default=\"主產品玻璃瓶\"}",
      "{argument name=\"content item 2\" default=\"小袋裝樣品 x 2\"}",
      "{argument name=\"content item 3\" default=\"品牌卡片 + 使用說明\"}",
      "{argument name=\"content item 4\" default=\"金屬勺 / 配件\"}"
    ],
    "arrangement": "{argument name=\"content arrangement\" default=\"內容物在盒內對稱擺放，主產品略前置突出\"}"
  },
  "scene": {
    "background_surface": "{argument name=\"background surface\" default=\"奶白色亞光石面\"}",
    "background_color_tone": "{argument name=\"background tone\" default=\"米白 + 墨綠點綴\"}",
    "extra_decorations": [
      "{argument name=\"deco 1\" default=\"散落的小植物葉片\"}",
      "{argument name=\"deco 2\" default=\"無\"}"
    ]
  },
  "lighting": {
    "key_light": "{argument name=\"key light\" default=\"45° 頂光柔光\"}",
    "fill_light": "{argument name=\"fill light\" default=\"環境補光均勻\"}"
  },
  "text_overlay": {
    "enabled": "{argument name=\"text overlay enabled\" default=\"true\"}",
    "brand": "{argument name=\"brand name\" default=\"NORINE\"}",
    "headline": "{argument name=\"headline\" default=\"獻給重要日子的禮物\"}",
    "subline": "{argument name=\"subline\" default=\"Limited Edition · 2026 Holiday\"}",
    "position": "畫面左上或右上，簡潔排版"
  },
  "style": {
    "rendering": "高分辨率商業產品攝影，內容物質感真實，包裝材質清晰可識別",
    "consistency": "色板與材質一致，畫面克制不雜亂"
  },
  "constraints": {
    "must_keep": [
      "外盒可識別 + logo 可讀",
      "內容物清晰可數",
      "盒蓋打開角度自然不彆扭",
      "文字位置與主體不搶鏡"
    ],
    "avoid": [
      "內容物擠在一起難分辨",
      "盒子形狀不規整",
      "光線把燙金 logo 完全喫掉",
      "出現人物 / 模特 / 手"
    ]
  }
}
```

### 參數策略

- 必問：包裝類型、內容物組成、品牌名、主色
- 可默認：絲帶、內襯顏色、裝飾
- 可隨機：裝飾小物（在色板內）

### 自動補全策略

- 美妝禮盒默認：奶白內襯 + 金色 logo + 玻璃瓶爲主產品
- 節日食品禮盒默認：木盒或牛皮紙 + 紅色絲帶 + 多種小袋裝內容
- 數碼禮盒默認：黑色硬盒 + 灰色泡棉內襯 + 主機 + 配件
- slogan 默認 「Limited Edition / Holiday / Anniversary」 系收束語

## 變體 1：節日喜慶禮盒

📝 提示詞

```json
{
  "type": "節日喜慶禮盒展示圖",
  "package": {
    "type": "硬紙禮盒，開蓋狀態",
    "exterior_color": "{argument name=\"exterior color\" default=\"中國紅 + 燙金\"}",
    "interior_color": "金色絨布內襯",
    "ribbon": "金色蝴蝶結"
  },
  "contents": {
    "items": [
      "{argument name=\"content 1\" default=\"紅色禮袋 x 2\"}",
      "{argument name=\"content 2\" default=\"主禮品（食品 / 茶葉 / 工藝品）\"}",
      "{argument name=\"content 3\" default=\"祝福賀卡\"}"
    ]
  },
  "scene": {
    "background_surface": "金色亮面或深紅絨布",
    "extra_decorations": ["散落小金粒", "梅花枝點綴"]
  },
  "constraints": {
    "must_feel": "節日莊重感、東方喜慶"
  }
}
```

## 變體 2：極簡輕奢禮盒

📝 提示詞

```json
{
  "type": "極簡輕奢禮盒展示圖",
  "package": {
    "type": "亞光硬紙禮盒",
    "exterior_color": "奶白 + 灰色細線",
    "interior_color": "深灰絨布",
    "logo": "壓凹品牌字 + 極小金箔"
  },
  "contents": {
    "items": [
      "{argument name=\"content 1\" default=\"主玻璃瓶\"}",
      "{argument name=\"content 2\" default=\"配件 / 說明卡\"}"
    ]
  },
  "scene": {
    "background_surface": "暖灰色亞光石板",
    "extra_decorations": []
  },
  "constraints": {
    "must_feel": "克制、有體面感"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "包裝展示圖自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給品類與品牌即可。自動決定包裝類型、內容物組合、配色與裝飾，但必須維持包裝爲視覺中心",
  "constraints": {
    "must_feel": "可以直接用作品牌官網或電商頁 hero"
  }
}
```

## 避免事項

- 內容物超過 6 件就開始雜亂，建議 3-5 件
- 不要把內容物全部塞回盒裡，至少 1 件半露或前置
- 不要用強反光金屬面做背景（會讓金箔 logo 看不清）
- 不要在畫面裏塞品牌之外的其他 logo
- 不要讓禮盒呈現「快遞箱拆開」那種廉價感
- 不要使用過於飽和的彩色背景，讓盒子的顏色失真

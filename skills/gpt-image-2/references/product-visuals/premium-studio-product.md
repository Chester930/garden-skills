# 高級影棚產品圖模板

本文件用於生成「頂級影棚級商業產品圖」：

- 雜誌廣告級質感
- 戲劇化燈光
- 顏色基調統一
- 道具克制
- 商品作爲唯一敘事主角

適合：

- 香水 / 高端化妝品
- 高端腕錶 / 珠寶
- 烈酒 / 葡萄酒
- 奢侈品配件
- 高端 3C / 影音設備
- 米其林餐飲主圖

它跟 `white-background-product.md` 的區別：

- 白底圖：電商平臺主圖，強調乾淨、還原
- 影棚圖：廣告級視覺，強調氛圍、戲劇性、品牌格調

跟 `lifestyle-product-scene.md` 的區別：

- 影棚圖：純商品 + 純氛圍，沒有人物、沒有生活場景
- 生活方式圖：商品出現在真實使用場景裏

## 適用範圍

- 高端品牌官網首屏圖
- 雜誌整版廣告
- 平面投放主視覺
- 單品發布主圖

## 何時使用

- 用戶提到「影棚 / 商業廣告 / 雜誌 / 高級感 / 大片感 / cinematic / studio」
- 用戶希望商品看起來「貴」
- 用戶希望擺脫白底，但又不要日常場景

不要使用：

- 用戶要電商平臺主圖（用 `white-background-product.md`）
- 用戶希望商品出現在生活裏（用 `lifestyle-product-scene.md`）
- 用戶要展示包裝結構 / 禮盒（用 `packaging-showcase.md`）

## 缺失信息優先提問順序

1. 商品具體是什麼 + 類目
2. 品牌定位（高端 / 極簡 / 復古 / 暗黑 / 自然有機 / 未來感）
3. 顏色基調 + 主色 + 輔助色
4. 燈光氛圍（柔和 / 戲劇 / 冷峻 / 暖光 / 頂光透射）
5. 是否需要少量道具（同色調）
6. 是否需要主標語 / 品牌 logo

## 主模板：單品高級影棚視覺

📖 描述

商品居於畫面中心或黃金分割位，深色或同色基調背景，戲劇化主光，最少道具，可疊加品牌名 + 一句標語。

📝 提示詞

```json
{
  "type": "高級影棚商業產品圖",
  "goal": "生成一張可直接當作廣告級單頁主圖的影棚視覺，商品作爲唯一敘事中心，氛圍統一，色調克制",
  "subject": {
    "product_name": "{argument name=\"product name\" default=\"高端香水玻璃瓶\"}",
    "visual_description": "{argument name=\"product visual\" default=\"琥珀色厚重玻璃瓶，金色金屬蓋，瓶身印有簡約黑色品牌名\"}",
    "position": "{argument name=\"product position\" default=\"畫面中心略偏右\"}",
    "scale": "{argument name=\"product scale\" default=\"佔畫面 45%\"}"
  },
  "background": {
    "type": "{argument name=\"background type\" default=\"深棕色絲絨布料 + 同色調環境\"}",
    "texture": "{argument name=\"background texture\" default=\"絲絨細微紋理\"}",
    "color_tone": "{argument name=\"color tone\" default=\"暖棕 + 金色\"}"
  },
  "lighting": {
    "key_light": "{argument name=\"key light\" default=\"頂部 45° 戲劇主光，造型清晰\"}",
    "fill_light": "{argument name=\"fill light\" default=\"右側弱柔光\"}",
    "rim_light": "{argument name=\"rim light\" default=\"背後金色邊緣光，勾勒瓶身輪廓\"}",
    "mood": "{argument name=\"lighting mood\" default=\"溫暖、奢華、近黃昏感\"}"
  },
  "props": {
    "enabled": "{argument name=\"props enabled\" default=\"true\"}",
    "items": [
      "{argument name=\"prop 1\" default=\"幾片散落的幹玫瑰花瓣\"}",
      "{argument name=\"prop 2\" default=\"局部金色金屬反射條\"}"
    ],
    "rule": "道具數量 ≤ 2，顏色必須與主色一致"
  },
  "text_overlay": {
    "enabled": "{argument name=\"text overlay enabled\" default=\"true\"}",
    "brand": "{argument name=\"brand name\" default=\"NUIT D'OR\"}",
    "headline": "{argument name=\"headline\" default=\"夜，是另一種光\"}",
    "position": "{argument name=\"text position\" default=\"畫面左側上半，留白足夠\"}"
  },
  "style": {
    "rendering": "頂級商業攝影 + 高動態範圍 + 微顆粒，看起來像雜誌整版廣告",
    "depth": "淺景深，背景輕微虛化",
    "consistency": "色板嚴格統一，不出現額外鮮豔色"
  },
  "constraints": {
    "must_keep": [
      "商品作爲絕對主角",
      "光線方向統一",
      "色調統一不雜亂",
      "文案不要遮擋商品本身"
    ],
    "avoid": [
      "道具喧賓奪主",
      "出現 lifestyle 元素（手、餐具、模特）",
      "字體過多種類",
      "背景顏色與商品過於接近以至看不見輪廓"
    ]
  }
}
```

### 參數策略

- 必問：商品、品牌定位、主色調
- 可默認：道具、文案位置、燈光方向
- 可隨機：道具具體物件（在主色範圍內合理生成）

### 自動補全策略

- 香水 / 烈酒 默認深色調 + 頂光主光
- 化妝品 默認柔和奶油色調 + 正面柔光
- 珠寶 默認暗背景 + 邊緣強光勾勒
- 數碼 默認深空背景 + 藍色冷光
- 文案默認一句 ≤ 8 字，不要長 slogan

## 變體 1：暗調奢侈品（珠寶 / 腕錶）

📝 提示詞

```json
{
  "type": "暗調奢侈品影棚視覺",
  "subject": {
    "product_name": "{argument name=\"product name\" default=\"金色機械腕錶\"}",
    "visual_description": "{argument name=\"product visual\" default=\"圓形金殼、棕色鱷魚皮錶帶、清晰錶盤\"}"
  },
  "background": {
    "type": "深黑色平面 + 極弱反射",
    "color_tone": "近黑 + 局部金色"
  },
  "lighting": {
    "key_light": "頂部射燈",
    "rim_light": "金屬邊緣光，強調表殼輪廓"
  },
  "constraints": {
    "must_feel": "稀有、矜持、儀式感"
  }
}
```

## 變體 2：清冷數碼 / 影音

📝 提示詞

```json
{
  "type": "清冷調數碼產品影棚視覺",
  "subject": {
    "product_name": "{argument name=\"product name\" default=\"無線智能音箱\"}",
    "visual_description": "{argument name=\"product visual\" default=\"圓柱形深空灰金屬外殼，頂部觸控環帶藍色光\"}"
  },
  "background": {
    "type": "深空灰漸變",
    "color_tone": "灰 + 冷藍"
  },
  "lighting": {
    "key_light": "正面柔光",
    "rim_light": "藍色背光，營造科技感"
  },
  "props": {
    "enabled": false
  },
  "constraints": {
    "must_feel": "高級、克制、未來感"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "高級影棚視覺自動補全模板",
  "mode": "auto-fill",
  "rule": "根據品類自動選擇背景調性、燈光方向、文案長度，但保持商品唯一敘事中心",
  "constraints": {
    "must_feel": "雜誌廣告級"
  }
}
```

## 避免事項

- 不要塞入超過 2 個道具
- 不要出現人物或人物身體局部（手 / 嘴脣 / 指甲）
- 不要混合冷暖色調（除非品牌定位明確允許）
- 不要讓商品反光過強以致看不清品牌字
- 不要把白底圖風格搬過來（「無氛圍」就不算高級）
- 不要讓文字大於品牌應有的克制感（slogan 要少而短）

# 白底電商主圖模板

本文件用於生成最常見的「電商純淨白底產品圖」：

- 單品白底
- 多角度白底
- 白底 + 淺陰影
- 白底 + 極簡文案

適合：

- 平臺主圖（淘寶 / 京東 / 亞馬遜 / 抖音電商首圖）
- 商品 SKU 卡
- 詳情頁第一屏靜態圖
- App 圖標式產品瞄點圖

## 適用範圍

- 單品產品圖
- 多角度組合圖
- 極簡文案版主圖
- 通用電商主圖

## 何時使用

- 用戶提到「白底圖 / 主圖 / 商品圖 / 平臺主圖 / SKU 卡」
- 用戶希望直接落到電商平臺使用，不需要場景氛圍
- 用戶希望突出商品本身，不要任何裝飾

不要使用：

- 用戶希望產品出現在生活場景裏（用 `lifestyle-product-scene.md`）
- 用戶希望影棚級氛圍質感（用 `premium-studio-product.md`）
- 用戶希望展示包裝外觀（用 `packaging-showcase.md`）

## 缺失信息優先提問順序

1. 商品具體是什麼（名稱 + 關鍵視覺特徵）
2. 是單品還是多角度
3. 是否需要文字（品牌名 / 賣點 / 價格）
4. 是否需要徽章（新品 / 限定 / 折扣）
5. 是否需要輕微陰影和反射

## 主模板：極簡白底單品

📖 描述

純淨白底，商品居中，柔和反射 / 落地陰影，可選擇是否疊加品牌名與單賣點。

📝 提示詞

```json
{
  "type": "白底電商主圖",
  "goal": "生成可直接用於電商平臺主圖位的白底產品圖，商品作爲絕對視覺中心",
  "subject": {
    "product_name": "{argument name=\"product name\" default=\"白色按壓式精華瓶\"}",
    "visual_description": "{argument name=\"product visual description\" default=\"圓肩瓶，磨砂白色瓶身，金屬銀色按壓頭，瓶身正面貼有簡潔標籤\"}",
    "label_text": "{argument name=\"label text\" default=\"DERMA CALM Moisture Serum 30ml\"}",
    "angle": "{argument name=\"shot angle\" default=\"正面 3/4 視角\"}",
    "scale": "{argument name=\"product scale\" default=\"佔據畫面 60%\"}"
  },
  "background": {
    "type": "{argument name=\"background type\" default=\"純白\"}",
    "shadow": "{argument name=\"shadow\" default=\"輕微底部柔光陰影\"}",
    "reflection": "{argument name=\"reflection\" default=\"無\"}"
  },
  "lighting": {
    "key_light": "{argument name=\"key light\" default=\"正面柔光\"}",
    "fill_light": "{argument name=\"fill light\" default=\"兩側均勻柔光\"}"
  },
  "text_overlay": {
    "enabled": "{argument name=\"text overlay enabled\" default=\"false\"}",
    "brand": "{argument name=\"overlay brand\" default=\"\"}",
    "selling_point": "{argument name=\"overlay selling point\" default=\"\"}"
  },
  "style": {
    "rendering": "高分辨率商業攝影 + 乾淨後期，沒有任何場景元素",
    "consistency": "顏色還原真實，質感還原真實"
  },
  "constraints": {
    "must_keep": [
      "純淨白底",
      "商品作爲唯一視覺中心",
      "標籤文字必須清晰可讀"
    ],
    "avoid": [
      "出現任何裝飾道具",
      "背景出現顏色斑塊",
      "強反射幹擾商品本身",
      "商品邊緣有強烈描邊"
    ]
  }
}
```

### 參數策略

- 必問：商品名、關鍵視覺特徵、標籤文字
- 可默認：拍攝角度、陰影方式、燈光方案
- 可隨機：佔畫面比例（在合理範圍內浮動）

### 自動補全策略

- 沒有給具體角度時，護膚 / 飲料 / 數碼默認正面 3/4，鞋默認 45° 側視，箱包默認正面平視
- 沒有給標籤文字時不要編造品牌，直接留空
- 沒有給徽章默認不要加

## 變體 1：多角度組合白底

📝 提示詞

```json
{
  "type": "多角度白底組合圖",
  "subject": {
    "product_name": "{argument name=\"product name\" default=\"無線耳機\"}",
    "angles_count": "{argument name=\"angle count\" default=\"3\"}",
    "angles": [
      "{argument name=\"angle 1\" default=\"正面充電盒閉合\"}",
      "{argument name=\"angle 2\" default=\"打開盒子+耳機露出\"}",
      "{argument name=\"angle 3\" default=\"單只耳機特寫\"}"
    ],
    "arrangement": "{argument name=\"arrangement\" default=\"水平等距排列\"}"
  },
  "background": {
    "type": "純白",
    "shadow": "微陰影"
  },
  "constraints": {
    "must_feel": "組合像同一組鏡頭拍攝，光線一致"
  }
}
```

## 變體 2：白底 + 極簡營銷疊層

適合需要在白底上疊加「品牌 + 單賣點 + 價格」的簡版主圖。

📝 提示詞

```json
{
  "type": "白底極簡營銷主圖",
  "subject": {
    "product_name": "{argument name=\"product name\" default=\"運動水壺\"}"
  },
  "background": "純白",
  "text_overlay": {
    "enabled": true,
    "brand": "{argument name=\"brand\" default=\"AQUA GO\"}",
    "selling_point": "{argument name=\"selling point\" default=\"24 小時保溫\"}",
    "price": "{argument name=\"price\" default=\"¥ 89\"}",
    "badge": "{argument name=\"badge\" default=\"新品上市\"}",
    "layout": "品牌左上、賣點右上、價格右下、徽章左下"
  },
  "constraints": {
    "must_feel": "像電商平臺 SKU 主圖",
    "avoid": "信息層級混亂"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "白底主圖自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶只給商品名，自動決定角度、陰影、畫面佔比，但嚴格保持純白底",
  "constraints": {
    "must_feel": "電商平臺可直接上架"
  }
}
```

## 避免事項

- 背景不能出現灰邊、漸變或紋理
- 不要爲了好看自動加入花卉、石頭、布料等道具
- 不要讓陰影方向與燈光方向矛盾
- 不要讓商品佔畫面 < 40%，會顯得稀薄
- 不要給標籤編造一個不存在的品牌名（除非明確允許）
- 不要在白底圖上加風格化文字字體（除非顯式啓用 `text_overlay`）

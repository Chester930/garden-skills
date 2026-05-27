# 飲料 / 食品標籤設計模板

本文件用於"飲料瓶 / 食品罐 / 調料瓶等的標籤 + 包裝設計"視覺：

- 飲料瓶標籤設計
- 食品罐頭標籤
- 調味品瓶標籤
- 中式 / 日式 / 西式 各種風格
- 單品攝影 + 標籤設計混合

特徵：

- 強調標籤信息（品牌名 + 品名 + 容量 + 營養標）
- 標籤字體 / 排版講究
- 通常含插畫 / 圖形元素
- 包裝結合環境拍攝
- 強調產品調性（健康 / 高奢 / 復古 / 國潮）

## 適用範圍

- 飲料 / 食品標籤設計
- 調味品包裝
- 國潮 / 復古風飲料

## 何時使用

- 用戶提到"飲料 / 食品 / 標籤設計 / 罐裝 / 瓶裝"
- 用戶希望出"包裝 + 標籤"完整設計

不要使用：

- 化妝品包裝（用 `cosmetic-packaging.md`）
- 禮盒攝影（用 `product-visuals/packaging-showcase.md`）
- 通用 brand board（用 `brand-identity-board.md`）

## 缺失信息優先提問順序

1. 品牌名 + 品類（茶 / 咖啡 / 果汁 / 調味）
2. 風格調性（國潮 / 日式 / 西式現代 / 復古）
3. 瓶 / 罐形態
4. 主色 1-2 個
5. 是否需要插畫 / 圖形
6. 是否需要營養標 / 警示

## 主模板：國潮風飲料標籤設計

📖 描述

整體一張圖，主體爲一瓶飲料 + 標籤設計，背景爲東方風場景。

📝 提示詞

```json
{
  "type": "國潮風飲料瓶標籤設計",
  "goal": "生成一張可作爲產品發布 / 電商主圖的飲料瓶 + 標籤視覺",
  "brand": {
    "name": "{argument name=\"brand name\" default=\"東風茶事\"}",
    "positioning": "{argument name=\"positioning\" default=\"國潮 + 現代\"}",
    "product_name": "{argument name=\"product name\" default=\"清晨烏龍\"}",
    "product_subtitle": "{argument name=\"product subtitle\" default=\"OOLONG MORNING\"}",
    "volume": "{argument name=\"volume\" default=\"330ml\"}"
  },
  "bottle": {
    "form": "{argument name=\"bottle form\" default=\"短粗玻璃瓶 + 金屬蓋\"}",
    "material": "{argument name=\"material\" default=\"透明玻璃 + 茶湯可見\"}"
  },
  "label_design": {
    "style": "{argument name=\"label style\" default=\"水墨 + 工筆 + 留白\"}",
    "primary_color": "{argument name=\"primary color\" default=\"墨綠 + 金\"}",
    "background_color": "{argument name=\"label bg\" default=\"米白\"}",
    "illustration": "{argument name=\"illustration\" default=\"工筆 茶山 + 遠山\"}",
    "typography": "{argument name=\"typography\" default=\"標題宋體 + 英文 sans\"}",
    "info_strip_bottom": "營養成分 + 容量 + 配料表（小字）"
  },
  "scene": {
    "background": "{argument name=\"background\" default=\"竹蓆 + 茶碗 + 一片綠葉\"}",
    "lighting": "{argument name=\"lighting\" default=\"自然柔光\"}"
  },
  "format": {
    "aspect_ratio": "{argument name=\"aspect ratio\" default=\"4:5\"}",
    "composition": "瓶身居中 + 微微傾斜 + 標籤清晰朝鏡頭"
  },
  "constraints": {
    "must_keep": [
      "標籤風格統一（不混搭水墨 + 美漫）",
      "標籤字體 ≤ 2 種",
      "營養標 / 配料表小字可讀但不喧賓奪主",
      "瓶身材質真實"
    ],
    "avoid": [
      "標籤設計過滿",
      "插畫風格與文字風格衝突",
      "底色過亮壓過插畫",
      "出現錯別字"
    ]
  }
}
```

### 參數策略

- 必問：品牌名、品類、風格
- 可默認：瓶身、標籤、場景
- 可隨機：道具細節

### 自動補全策略

- 用戶給"國潮 / 日式 / 西式現代 / 復古"風格時：自動決定標籤插畫 + 配色 + 字體
- 默認 4:5 豎版
- 默認含小字營養標

## 變體 1：日式工藝風調味料瓶

📝 提示詞

```json
{
  "type": "日式工藝風調味料瓶",
  "brand": {
    "product_name": "{argument name=\"product\" default=\"丸大豆醬油\"}"
  },
  "bottle": {
    "form": "復古短瓶 + 木塞"
  },
  "label_design": {
    "style": "日式工藝 + 手工書法 + 米色和紙",
    "primary_color": "深棕 + 朱紅印章"
  },
  "scene": {
    "background": "原木桌面 + 竹笸籮"
  },
  "constraints": {
    "must_feel": "傳統工藝感"
  }
}
```

## 變體 2：西式現代果汁

📝 提示詞

```json
{
  "type": "西式現代果汁瓶",
  "brand": {
    "product_name": "COLD-PRESS ORANGE",
    "volume": "350ml"
  },
  "bottle": {
    "form": "高瘦透明 PET 瓶"
  },
  "label_design": {
    "style": "現代 minimal + 大字色塊 + 清晰營養標",
    "primary_color": "亮橙 + 白"
  },
  "scene": {
    "background": "白色亞克力臺 + 切半橙子"
  },
  "constraints": {
    "must_feel": "健康 + 現代 + 商超友好"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "飲料 / 食品標籤自動補全",
  "mode": "auto-fill",
  "rule": "用戶給品牌 + 品類 + 風格，自動決定瓶身 / 標籤 / 插畫 / 場景",
  "constraints": {
    "must_feel": "可直接送印刷廠"
  }
}
```

## 避免事項

- 不要混搭風格（國潮 + 美漫 同框）
- 不要讓標籤字體 > 2 種
- 不要漏掉營養標 / 配料表（除非是 mockup）
- 不要讓瓶身比例失真
- 不要讓插畫喧賓奪主到品牌名認不出
- 不要讓背景顏色高飽和壓過產品

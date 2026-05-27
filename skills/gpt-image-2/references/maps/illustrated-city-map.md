# 手繪城市風貌地圖模板

本文件用於生成「一座城市的整體風貌地圖」，不專注美食 / 路線 / 門店，而是城市本身：

- 城市旅遊推廣圖
- 城市文化主視覺
- 城市 IP 形象
- 節日活動主視覺
- 教育 / 公共宣傳圖

特徵：

- 城市級覆蓋
- 多個標誌性地標分布
- 風格化插畫
- 中心可有城市象徵 / 江河 / 山脈

## 適用範圍

- 整體城市風貌圖
- 城市文化主視覺
- 城市 IP 形象圖
- 區 / 街道級別風貌圖

## 何時使用

- 用戶提到「城市地圖 / 城市插畫地圖 / 城市風貌圖 / 城市主視覺地圖」
- 用戶希望突出城市文化與地標，而不是美食 / 路線

不要使用：

- 美食主題（用 `food-map.md`）
- 路線主題（用 `travel-route-map.md`）
- 門店分布主題（用 `store-distribution-map.md`）

## 缺失信息優先提問順序

1. 城市 / 區域名
2. 風格：復古水彩 / 現代扁平 / Q 萌 / 等距 3D / 國潮
3. 想突出哪幾個地標（5-12 處）
4. 是否要包含江 / 河 / 山 / 湖
5. 是否要中心吉祥物
6. 語種：中文 / 雙語

## 主模板：復古水彩城市風貌圖

📖 描述

整體俯視視角的手繪城市插畫，標誌性建築分布在畫面中，地形元素（江、山、橋）作爲視覺骨架，邊角點綴文化元素。

📝 提示詞

```json
{
  "type": "城市風貌插畫地圖",
  "goal": "生成一張代表整座城市風貌的插畫地圖，可作爲城市文化主視覺、旅遊主圖、城市 IP 主視覺",
  "style": "{argument name=\"art style\" default=\"復古水彩 + 米色羊皮紙\"}",
  "title_section": {
    "city": "{argument name=\"city\" default=\"杭州\"}",
    "title_text": "{argument name=\"title\" default=\"千年杭城風貌圖\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"江南詩意 · 山水之間\"}"
  },
  "geography_skeleton": {
    "rivers_or_lakes": "{argument name=\"water elements\" default=\"西湖、錢塘江\"}",
    "mountains": "{argument name=\"mountains\" default=\"寶石山、雷峰山\"}",
    "main_streets": "{argument name=\"streets\" default=\"南山路、湖濱路\"}"
  },
  "landmarks": {
    "count": "{argument name=\"landmark count\" default=\"10\"}",
    "items": "{argument name=\"landmarks\" default=\"雷峰塔、斷橋、蘇堤、靈隱寺、城隍閣、清河坊、龍井村、河坊街、京杭大運河、西溪溼地\"}"
  },
  "centerpiece": "{argument name=\"centerpiece\" default=\"畫面中央保留西湖與雷峰塔作爲視覺核心\"}",
  "edge_decorations": [
    "{argument name=\"deco 1\" default=\"江南屋檐剪影\"}",
    "{argument name=\"deco 2\" default=\"飛舞的桂花\"}",
    "{argument name=\"deco 3\" default=\"詩意題字小印章\"}"
  ],
  "extras": ["復古羅盤", "細線邊框", "城市文化短句"],
  "constraints": {
    "must_keep": [
      "標誌性地標必須可識別",
      "江 / 湖 / 山的相對位置不能嚴重錯亂",
      "整體保持手繪水彩感"
    ],
    "avoid": [
      "現代汽車 / 高速公路 / 摩天大樓喧賓奪主",
      "標籤字體多種風格",
      "顏色飽和度過高"
    ]
  }
}
```

### 參數策略

- 必問：城市名、風格、地標列表（或允許我列）
- 可默認：邊角裝飾、羅盤、副標題
- 可隨機：題字小印章、裝飾花卉

### 自動補全策略

- 用戶只給城市名時：自動選 8-12 個經典地標 + 該城市最具識別度的地形
- 風格默認水彩
- 題字默認與城市文化相關短句

## 變體 1：現代扁平等距視角

📝 提示詞

```json
{
  "type": "現代扁平等距城市插畫地圖",
  "city": "{argument name=\"city\" default=\"深圳\"}",
  "style": "扁平矢量 + 等距 3D + 鮮亮藍綠色調",
  "highlights": [
    "{argument name=\"highlight 1\" default=\"深圳灣\"}",
    "{argument name=\"highlight 2\" default=\"平安金融中心\"}",
    "{argument name=\"highlight 3\" default=\"OCT 創意園\"}"
  ],
  "constraints": {
    "must_feel": "現代、科技、年輕"
  }
}
```

## 變體 2：國潮 Q 萌城市圖

📝 提示詞

```json
{
  "type": "Q 萌國潮城市插畫地圖",
  "city": "{argument name=\"city\" default=\"成都\"}",
  "style": "Q 萌國潮 + 暖橙 + 米色，所有元素擬人化",
  "centerpiece": "{argument name=\"centerpiece\" default=\"卡通熊貓坐在地圖中央\"}",
  "constraints": {
    "must_feel": "可愛、年輕、文創周邊可用"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "城市風貌圖自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給城市名即可，自動決定風格、地標、裝飾",
  "constraints": {
    "must_feel": "可以直接當作旅遊 / 文創主視覺"
  }
}
```

## 避免事項

- 不要把城市地圖壓成真實精確比例
- 不要把整座城市的高樓都畫上去（視覺上會崩）
- 不要讓江 / 河方向出現明顯錯誤
- 不要讓邊框裝飾蓋過主圖
- 不要塞超過 15 個地標

# 門店分布圖模板

本文件用於生成「品牌 / 餐飲 / 零售門店在某區域內分布」的可視化地圖：

- 連鎖品牌門店分布
- 加盟商招商地圖
- 城市 / 商圈門店覆蓋
- 節日活動可達門店標記
- 銀行 / 充電樁 / 共享設施分布

## 適用範圍

- 全國 / 全省 / 全市級別的門店分布
- 單一商圈門店分布
- 加盟招商展示圖
- 區域服務覆蓋圖

## 何時使用

- 用戶提到「門店分布 / 網點分布 / 覆蓋圖 / 門店地圖 / 加盟招商」
- 用戶希望一張圖能講清楚「在哪有門店」
- 用戶希望突出門店密度與品牌覆蓋

不要使用：

- 美食探店地圖（用 `food-map.md`）
- 路線圖（用 `travel-route-map.md`）
- 城市風貌圖（用 `illustrated-city-map.md`）

## 缺失信息優先提問順序

1. 區域：全國 / 全省 / 全市 / 商圈
2. 品牌名 + logo 描述
3. 門店類型：旗艦店 / 標準店 / 快閃店 / 加盟店
4. 門店數量與具體名稱（或允許我列）
5. 是否需要圖例區分門店類型
6. 風格：品牌色現代扁平 / 擬真地圖 / 信息圖風

## 主模板：現代扁平品牌門店分布圖

📖 描述

底圖爲簡化的區域輪廓，門店以品牌色圖釘 / 圖標點位標註，配品牌信息卡 + 圖例。

📝 提示詞

```json
{
  "type": "品牌門店分布圖",
  "goal": "生成一張能直接用於品牌官網 / 招商手冊 / 節日活動的門店分布可視化地圖",
  "brand": {
    "name": "{argument name=\"brand name\" default=\"AURA Coffee\"}",
    "logo_description": "{argument name=\"brand logo\" default=\"金色咖啡豆 + 品牌字\"}",
    "brand_color": "{argument name=\"brand color\" default=\"暖棕 + 奶油白\"}"
  },
  "scope": {
    "region": "{argument name=\"region scope\" default=\"全國\"}",
    "base_map_style": "{argument name=\"base map style\" default=\"簡化省份輪廓 + 淺色填色\"}"
  },
  "stores": {
    "total_count": "{argument name=\"total stores\" default=\"168\"}",
    "by_type": [
      "{argument name=\"flagship\" default=\"旗艦店 8 家\"}",
      "{argument name=\"standard\" default=\"標準店 120 家\"}",
      "{argument name=\"pop_up\" default=\"快閃店 12 家\"}",
      "{argument name=\"franchise\" default=\"加盟店 28 家\"}"
    ],
    "highlight_cities": "{argument name=\"highlight cities\" default=\"北京、上海、廣州、深圳、成都、杭州\"}"
  },
  "marker_design": {
    "shapes": "圓形品牌色圖釘 + 不同尺寸代表不同類型",
    "rule": "尺寸排序：旗艦 > 標準 > 快閃 > 加盟"
  },
  "info_panel": {
    "enabled": "{argument name=\"info panel enabled\" default=\"true\"}",
    "position": "{argument name=\"info panel position\" default=\"右側\"}",
    "content": [
      "總門店數",
      "覆蓋城市數",
      "近一年新開",
      "重點城市 Top 5"
    ]
  },
  "legend": {
    "items": [
      "大圓點：旗艦店",
      "中圓點：標準店",
      "三角：快閃店",
      "方塊：加盟店"
    ]
  },
  "extras": ["品牌 logo 角標", "招商聯繫方式區"],
  "constraints": {
    "must_keep": [
      "門店密度真實合理（不要全國都是密點）",
      "品牌色嚴格統一",
      "圖例與門店類型對應",
      "重點城市清晰可讀"
    ],
    "avoid": [
      "底圖細節過多蓋過門店",
      "出現非品牌色",
      "標記過密導致看不清",
      "圖例缺失"
    ]
  }
}
```

### 參數策略

- 必問：品牌、區域、門店數量、品牌色
- 可默認：圖例樣式、信息卡內容
- 可隨機：城市排序、次要裝飾

### 自動補全策略

- 用戶只給品牌名時：自動設定 100-200 家門店級別，重點城市選 Top 5-10
- 品牌色未指定時根據行業常用色（咖啡棕、奶茶粉、零售藍、醫療綠）
- 圖例最少 2 項最多 5 項

## 變體 1：單商圈密度圖

📝 提示詞

```json
{
  "type": "商圈門店密度圖",
  "scope": {
    "region": "{argument name=\"district\" default=\"上海·靜安寺商圈\"}"
  },
  "stores": {
    "total_count": "{argument name=\"store count\" default=\"24\"}",
    "highlight_cities": "門店具體名稱 + 編號"
  },
  "constraints": {
    "must_feel": "本地化、密度感、街區級"
  }
}
```

## 變體 2：服務覆蓋圖（充電樁 / 網點 / 服務點）

📝 提示詞

```json
{
  "type": "服務覆蓋分布圖",
  "service": {
    "name": "{argument name=\"service name\" default=\"NEX 充電網絡\"}",
    "color": "{argument name=\"service color\" default=\"科技藍 + 高亮黃\"}"
  },
  "stations_count": "{argument name=\"station count\" default=\"800+\"}",
  "marker_design": {
    "shapes": "閃電圖標 + 不同顏色代表充電速度等級"
  },
  "legend": {
    "items": ["黃色：超充", "藍色：快充", "灰色：慢充"]
  },
  "constraints": {
    "must_feel": "科技、專業、可靠"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "門店分布圖自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給品牌 + 行業，自動估計門店規模、品牌色、圖例",
  "constraints": {
    "must_feel": "招商手冊級"
  }
}
```

## 避免事項

- 不要讓點位密度脫離真實（小品牌不要畫成全國滿屏點）
- 不要讓品牌 logo 淹沒在地圖細節裏
- 不要把多個不同行業品牌混在一張圖
- 不要讓信息卡佔據超過 1/3 畫面
- 不要使用真實地圖截圖風（這是品牌圖，不是 GIS 截圖）

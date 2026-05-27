# 風格化自拍 / 人設轉換模板

本文件用於"基於一張參考圖（用戶自拍 / 公開照），把人物轉化成某種特定風格" 的人設視覺：

- Cosplay 自拍風
- 哥特 / 復古膠片 / 街頭 / 塗鴉 風格人設
- 偶像寫真 / 拍立得風
- 戶外活動情境照（漫展、籃球場、咖啡店）
- 名人 / 角色風格轉換

特徵：

- 必須基於參考圖（REFERENCE_0）保留五官身份
- 僅修改風格 / 妝 / 服裝 / 場景氣氛
- 單圖輸出（不是網格 / 不是 sheet）
- 輸出更像"你的另一個版本"

## 適用範圍

- 把自拍轉爲某種角色 / 風格
- 一鍵 cosplay 任意角色
- 改妝容 + 服裝 + 場景氣氛同步切換

## 何時使用

- 用戶提供一張自拍，希望轉風格
- 用戶描述自己 + 想要的風格，讓我們生成
- 用戶希望"我的樣子但是 X 風格"

不要使用：

- 多版本網格（用 `character-grid-portrait.md`）
- 標準職業頭像（用 `portraits-and-characters/professional-portrait.md`）
- 創始人大片（用 `portraits-and-characters/founder-portrait.md`）
- VTuber / 二次元角色（用 `portraits-and-characters/virtual-host.md`）

## 缺失信息優先提問順序

1. 是否提供參考圖（REFERENCE_0）？沒有的話需要文字描述本人
2. 想要的風格主題（cosplay / 哥特 / 膠片 / 街頭 / 偶像 / 名人風）
3. 服裝 / 妝容 / 髮型變化範圍
4. 場景背景（保留原圖 / 新場景）
5. 比例

## 主模板：風格轉換自拍（基於 REFERENCE_0）

📖 描述

保留參考圖人物身份與基本姿勢，將整體風格切換到指定主題。

📝 提示詞

```text
基於 REFERENCE_0 中的人物，保留其臉型、五官比例、膚色與基本姿勢，將整體風格轉換爲 {argument name="target style" default="trad goth 哥特風"}：
- 頭髮：{argument name="hair description" default="黑色短髮 + 厚重齊劉海"}
- 妝容：{argument name="makeup description" default="深色煙燻眼妝 + 黑色啞光脣"}
- 服裝：{argument name="outfit description" default="黑色皮質上衣 + 銀色十字項鍊 + 多層疊戴"}
- 配飾：{argument name="accessories" default="鼻環、耳釘 2 個、銀戒指"}
- 場景：{argument name="scene description" default="保留原圖背景"}
- 燈光：{argument name="lighting" default="戲劇性側光，對比度高"}

輸出風格：{argument name="rendering" default="高分辨率寫實攝影"}，單張人像圖。

約束：
- 不要修改人物身份（臉型、五官比例必須可識別）
- 不要修改性別、年齡段、種族
- 妝容濃但不假，肌膚保留質感
- 服裝風格統一不混搭
```

### 參數策略

- 必問：參考圖、目標風格
- 可默認：髮型、妝容、服裝、配飾
- 可隨機：背景細節、配飾具體造型

### 自動補全策略

- 用戶只給一個風格關鍵詞時：自動展開發型 + 妝 + 服裝 + 配飾四件套
- 沒有參考圖時，要求用戶先提供，或退化爲純文本描述
- 默認保留原圖背景，除非風格強烈要求換景

## 變體 1：Cosplay 自拍（漫展 / 角色扮演）

📝 提示詞

```text
基於 REFERENCE_0 中的人物（如無參考圖，則按 {argument name="subject self description" default="東亞年輕女性，自然微笑"} 描述），將其轉換爲 {argument name="character" default="原神 雷電將軍"} 的 cosplay 自拍照，
拍攝場景：{argument name="event location" default="上海漫展現場"}；
保留人物本人五官特徵，讓人能看出"是 ta 在 cos 這個角色"；
渲染爲手機自拍照風格 + 現場氛圍 + 自然光。
```

## 變體 2：復古膠片 / Vintage 35mm 閃光人像

📝 提示詞

```text
基於 REFERENCE_0 中的人物，將其重新拍攝爲 vintage 35mm 閃光膠片人像：
- 閃光燈直射造成的硬陰影
- 顆粒感膠片質感
- 顏色偏 1990s 暖黃
- 場景：{argument name="vintage scene" default="街邊檯球室"}
- 人物表情自然，不刻意擺拍
保留原圖人物身份。
```

## 變體 3：偶像寫真 / 拍立得集合（單張拍立得形態）

📝 提示詞

```text
基於 REFERENCE_0 中的人物，生成一張拍立得照片：
- 拍立得邊框（白色厚邊、底部留白手寫標籤）
- 人物在畫面居中
- 風格：{argument name="polaroid mood" default="日系偶像清純"}
- 拍立得底部手寫一句話：'{argument name="caption" default="2026.4.24 weekend"}'
- 整體顆粒感 + 微微過曝
```

## 變體 4：自動補全模式

📝 提示詞

```text
基於 REFERENCE_0 中的人物，將其轉換爲最適合的某種"高級風格化人設"自動決定：
- 自動判斷該人物氣質適合的風格主題
- 自動展開發型 / 妝容 / 服裝 / 場景 / 燈光
- 不修改人物身份特徵
- 輸出單張圖
```

## 避免事項

- 不要修改五官比例（最常見失敗：換臉）
- 不要修改性別 / 種族特徵
- 不要讓妝容濃到變成"濾鏡假皮膚"
- 不要把背景換得脫離主題
- 不要在沒有參考圖時假裝是基於參考圖（退化爲文本描述模式即可）
- 不要使用真實存在的版權角色名直接 cosplay（建議描述特徵而非點名）

# 文化 / 歷史人物系列肖像模板

本文件用於"基於文化 / 歷史 / 神話主題，批量生成系列肖像"：

- 朝代皇帝系列（明朝皇帝集 / 清朝皇帝集）
- 神話角色系列（希臘神話 / 北歐神話）
- 歷史名人系列
- 經典文學角色系列
- 民族服飾系列

特徵：

- 多個角色，每個角色一格
- 每格有名字 / 稱號標籤
- 風格統一（同一畫師 / 同一時代風）
- 適合教育 / 文創 / 主題營銷

## 適用範圍

- 朝代皇帝 / 名人系列
- 神話 / 文學角色系列
- 民族 / 文化主題系列

## 何時使用

- 用戶提到"系列 / 集合 / 朝代 / 神話 / 歷史人物"
- 用戶希望多個角色 + 標籤

不要使用：

- 同一人多版本（用 `character-grid-portrait.md`）
- 單張人物風格轉換（用 `style-transfer-selfie.md`）
- 角色 IP 設定稿（用 `portraits-and-characters/character-sheet.md`）

## 缺失信息優先提問順序

1. 主題（朝代 / 神話 / 文學 / 文化）
2. 角色數量（建議 6-12）
3. 是否需要列名 / 稱號 / 簡短說明
4. 風格：水墨寫實 / 油畫 / 卡通 / 半寫實
5. 是否參考某種風格（用戶提供參考圖 / 經典畫師風）
6. 比例

## 主模板：朝代皇帝系列肖像

📖 描述

整體一張大圖，包含若干個皇帝肖像，每個肖像下方有諡號 + 名諱。

📝 提示詞

```json
{
  "type": "朝代皇帝系列肖像",
  "goal": "生成一張包含某朝代多位皇帝的系列肖像圖，可作爲教育 / 文創 / 自媒體科普圖",
  "theme": {
    "dynasty": "{argument name=\"dynasty\" default=\"明朝\"}",
    "subject_count": "{argument name=\"subject count\" default=\"9\"}"
  },
  "style": {
    "art_style": "{argument name=\"art style\" default=\"中式工筆寫實人像 + 略帶水墨感\"}",
    "consistency": "所有肖像必須由同一畫師風格繪製",
    "color_palette": "{argument name=\"color palette\" default=\"低飽和金 + 朱紅 + 黑\"}"
  },
  "layout": {
    "format": "{argument name=\"format\" default=\"3x3 grid\"}",
    "background": "{argument name=\"background\" default=\"米色絹布紋理\"}",
    "panel_design": {
      "portrait_shape": "圓角方形 / 橢圓",
      "label_position": "肖像下方居中",
      "label_content": "諡號 + 名諱，如 '太祖 朱元璋'"
    }
  },
  "subjects": {
    "auto_select": "{argument name=\"auto select\" default=\"true\"}",
    "rule": "若 auto_select 爲 true，則按朝代順序選取代表性皇帝；若用戶指定列表，則按用戶列表",
    "user_list": "{argument name=\"user list\" default=\"\"}"
  },
  "constraints": {
    "must_keep": [
      "所有肖像同一畫師風格",
      "服飾、配飾嚴格符合所屬朝代",
      "標籤清晰可讀且歷史準確",
      "肖像之間均勻分布"
    ],
    "avoid": [
      "出現錯朝代服飾",
      "肖像風格漂移（每個像不同畫師）",
      "標籤錯字 / 錯位",
      "背景過度裝飾"
    ]
  }
}
```

### 參數策略

- 必問：主題、數量
- 可默認：風格、layout、配色、標籤
- 可隨機：背景紋理細節

### 自動補全策略

- 用戶給朝代時：自動選代表性 9 位皇帝
- 風格默認中式工筆
- 標籤默認"諡號 + 名諱"

## 變體 1：神話角色系列

📝 提示詞

```json
{
  "type": "神話角色系列肖像",
  "theme": {
    "mythology": "{argument name=\"mythology\" default=\"希臘神話\"}",
    "subject_count": 12
  },
  "style": {
    "art_style": "古典油畫 + 厚塗",
    "color_palette": "深藍 + 金 + 暖棕"
  },
  "layout": {
    "format": "4x3 grid",
    "panel_design": {
      "label_content": "神祇名 + 司掌領域"
    }
  },
  "subjects": {
    "user_list": "宙斯 / 赫拉 / 波塞冬 / 哈迪斯 / 雅典娜 / 阿波羅 / 阿爾忒彌斯 / 阿瑞斯 / 阿芙洛狄忒 / 赫爾墨斯 / 赫菲斯託斯 / 狄俄尼索斯"
  },
  "constraints": {
    "must_feel": "古典油畫館藏感"
  }
}
```

## 變體 2：經典文學角色系列

📝 提示詞

```json
{
  "type": "經典文學角色系列",
  "theme": {
    "literature": "{argument name=\"literature\" default=\"紅樓夢十二金釵\"}",
    "subject_count": 12
  },
  "style": {
    "art_style": "工筆重彩 + 古風插畫",
    "color_palette": "胭脂紅 + 月白 + 翠綠"
  },
  "constraints": {
    "must_feel": "古典文學畫冊級"
  }
}
```

## 變體 3：民族服飾系列

📝 提示詞

```json
{
  "type": "民族服飾系列肖像",
  "theme": {
    "subject_count": 9,
    "category": "{argument name=\"category\" default=\"中國 56 民族代表 9 選\"}"
  },
  "style": {
    "art_style": "高分辨率寫實人像 + 棚拍",
    "color_palette": "保留各民族服飾原色"
  },
  "constraints": {
    "must_feel": "尊重文化、服飾準確"
  }
}
```

## 變體 4：自動補全模式

📝 提示詞

```json
{
  "type": "文化人物系列自動補全",
  "mode": "auto-fill",
  "rule": "用戶給一個文化主題，自動選角色列表、風格、layout、標籤",
  "constraints": {
    "must_feel": "教科書級 / 文創可發布"
  }
}
```

## 避免事項

- 不要混淆朝代服飾（最常見錯誤）
- 不要讓畫風漂移（同一系列必須統一）
- 不要在文化敏感主題上使用戲謔表情
- 不要把神祇畫成 cosplay 風
- 不要讓標籤錯字 / 漏字
- 不要讓單格人物超過 12 個，否則視覺破碎

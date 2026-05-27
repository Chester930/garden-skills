# 人物關係圖模板

本文件用於"基於一部作品 / 一個組織生成角色關係圖"：

- 動漫 / 電影 / 小說人物關係圖
- 公司 / 組織成員關係圖
- 歷史事件參與者關係圖
- 團隊 / 派系關係圖

特徵：

- 多個角色卡片（頭像 + 名字 + 標籤）
- 不同顏色 / 線型表示不同關係
- 視覺層級清晰（主角大、配角小）
- 強調"信息可視化 + 海報設計感"
- 整體克制不雜亂

## 適用範圍

- IP 角色關係圖
- 組織 / 團隊結構圖
- 歷史事件人物關係圖
- 自媒體科普圖

## 何時使用

- 用戶提到"關係圖 / 關係網 / 角色 graph / 派系圖"
- 用戶希望一張圖能講清楚誰和誰是什麼關係

不要使用：

- 單圖 KV（用 `anime-key-visual.md`）
- 角色設定稿（用 `portraits-and-characters/character-sheet.md`）
- 一般信息圖（用 `infographics/legend-heavy-infographic.md`）

## 缺失信息優先提問順序

1. 主題（哪部作品 / 哪個組織）
2. 角色數量（建議 6-12）
3. 主角是誰（視覺權重最高）
4. 關係類型（血緣 / 友情 / 師徒 / 敵對 / 聯盟 / 暗戀）
5. 風格：貼合原作畫風 / 通用現代設計風
6. 比例

## 主模板：作品角色關係圖海報

📖 描述

整體一張大圖，多個角色卡片按關係網排布，連線區分不同關係類型，配圖例與標題。

📝 提示詞

```json
{
  "type": "作品角色關係圖海報",
  "goal": "生成一張高完成度的角色關係圖，可作爲科普 / 同人 / 入坑指南海報",
  "ip": {
    "name": "{argument name=\"ip name\" default=\"鬼滅之刃\"}",
    "tone": "{argument name=\"ip tone\" default=\"貼合原作風格 + 海報設計感\"}"
  },
  "characters": {
    "count": "{argument name=\"character count\" default=\"9\"}",
    "auto_select": "{argument name=\"auto select\" default=\"true\"}",
    "rule": "若 auto_select 爲 true，則按主題自動選 6-12 個最具代表性的角色",
    "user_list": "{argument name=\"user list\" default=\"\"}",
    "card_design": {
      "components": ["頭像", "名字", "派系 / 身份標籤"],
      "shape": "{argument name=\"card shape\" default=\"圓角方形\"}"
    }
  },
  "composition": {
    "structure": "{argument name=\"composition\" default=\"主角中心 + 同伴左右 + 敵對在遠端\"}",
    "hierarchy": "主角卡片最大、重要配角中等、次要角色最小"
  },
  "relationships": {
    "types": [
      {"name": "血緣", "color": "深紅", "line": "實線"},
      {"name": "友情 / 同伴", "color": "暖橙", "line": "實線"},
      {"name": "師徒", "color": "金色", "line": "雙實線"},
      {"name": "敵對", "color": "深紫", "line": "鋸齒線"},
      {"name": "暗戀", "color": "粉色", "line": "虛線"},
      {"name": "聯盟", "color": "綠色", "line": "粗實線"}
    ],
    "annotation_rule": "在每條線中段標註關係簡短文字"
  },
  "title_block": {
    "main_title": "{argument name=\"main title\" default=\"鬼滅之刃 · 人物關係圖\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"一圖入坑\"}",
    "position": "頂部"
  },
  "legend": {
    "enabled": "{argument name=\"legend enabled\" default=\"true\"}",
    "position": "{argument name=\"legend position\" default=\"右下角\"}"
  },
  "style": {
    "art_style": "{argument name=\"art style\" default=\"貼合原作畫風的角色頭像 + 現代海報排版\"}",
    "color_palette": "{argument name=\"color palette\" default=\"參考原作主色\"}"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4\"}",
  "constraints": {
    "must_keep": [
      "主角視覺最大",
      "關係線不交叉混亂",
      "每個角色名清晰可讀",
      "圖例與關係類型嚴格對應"
    ],
    "avoid": [
      "信息過載（>15 個角色）",
      "線型 > 6 種",
      "顏色超過 8 種",
      "出現廉價流程圖感"
    ]
  }
}
```

### 參數策略

- 必問：主題、角色數量
- 可默認：關係類型、layout、圖例、風格
- 可隨機：背景紋理

### 自動補全策略

- 用戶給主題時：自動選代表性角色 + 自動判斷關係類型
- 默認主角中心構圖
- 默認 6 種關係類型，按需要簡化

## 變體 1：組織 / 團隊結構圖

📝 提示詞

```json
{
  "type": "組織 / 團隊結構圖",
  "ip": {
    "name": "{argument name=\"organization\" default=\"某 AI 創業公司\"}",
    "tone": "現代企業海報"
  },
  "composition": {
    "structure": "金字塔型：CEO 頂 + 高管中 + 普通員工底"
  },
  "relationships": {
    "types": [
      {"name": "匯報", "color": "灰", "line": "實線"},
      {"name": "協作", "color": "藍", "line": "虛線"}
    ]
  },
  "constraints": {
    "must_feel": "專業 + 可發布"
  }
}
```

## 變體 2：歷史事件參與者圖

📝 提示詞

```json
{
  "type": "歷史事件參與者關係圖",
  "ip": {
    "name": "{argument name=\"event\" default=\"三國赤壁之戰\"}",
    "tone": "歷史插畫 + 海報設計"
  },
  "composition": {
    "structure": "三派對峙：曹操方 / 孫權方 / 劉備方"
  },
  "constraints": {
    "must_feel": "教科書與海報兼具"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "角色關係圖自動補全",
  "mode": "auto-fill",
  "rule": "用戶給一個主題（作品 / 組織 / 事件），自動選角色 + 關係 + 風格 + 圖例",
  "constraints": {
    "must_feel": "一圖入坑級"
  }
}
```

## 避免事項

- 不要讓角色超過 15 個
- 不要讓線型超過 6 種
- 不要讓所有線交叉成網（要有清晰閱讀順序）
- 不要簡單複製官方海報排版
- 不要讓標籤字號比角色名小
- 不要忽略圖例

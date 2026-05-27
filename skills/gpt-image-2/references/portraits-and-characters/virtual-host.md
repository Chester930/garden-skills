# 虛擬主播 / VTuber 形象模板

本文件用於生成「虛擬主播 / 數字人 / VTuber」 類型的人物視覺：

- VTuber 個人資料卡
- 數字主播形象主圖
- 直播間人物模型
- 跨次元品牌代言形象

特徵：

- 二次元 / 三次元 + 半二次元
- 強烈的角色識別度
- 通常包含名稱 / debut 信息 / 標籤
- 常配合背景特效與品牌色

## 適用範圍

- VTuber 頭像
- 數字人主形象
- 虛擬主播 debut 卡
- 跨次元代言主圖

## 何時使用

- 用戶提到「VTuber / 虛擬主播 / 數字人 / 虛擬形象」
- 用戶希望視覺是「非真實人物」但擬人感強

不要使用：

- 真人職業頭像（用 `professional-portrait.md`）
- 真人創始人大片（用 `founder-portrait.md`）
- 角色三視圖（用 `character-sheet.md`）

## 缺失信息優先提問順序

1. 角色名 / 主題
2. 風格：日系 anime / 韓系 / 半寫實 / 卡通 3D
3. 性別 / 年齡設定
4. 顏色主題
5. debut 信息（首播日期 / 標籤）
6. 是否需要背景特效

## 主模板：VTuber Debut 個人資料卡

📖 描述

整體一張 9:16 或 3:4 卡片，主體爲虛擬主播形象，旁邊有名稱 / debut 時間 / 標籤 / 平臺標識。

📝 提示詞

```json
{
  "type": "VTuber Debut 個人資料卡",
  "goal": "生成一張可作爲 VTuber 出道日的官方個人資料卡視覺",
  "character": {
    "name": "{argument name=\"vtuber name\" default=\"霜白·諾娜\"}",
    "style": "{argument name=\"art style\" default=\"日系 anime + 半寫實\"}",
    "gender": "{argument name=\"gender\" default=\"少女\"}",
    "age_setting": "{argument name=\"age setting\" default=\"18 歲\"}",
    "appearance": "{argument name=\"appearance\" default=\"銀白長發，藍色雙瞳，雪絨帽 + 哥特連衣裙\"}",
    "pose": "{argument name=\"pose\" default=\"半身正面，微微側頭微笑\"}"
  },
  "color_theme": {
    "main_color": "{argument name=\"main color\" default=\"冰藍 + 月白\"}",
    "accent_color": "{argument name=\"accent\" default=\"淡粉\"}"
  },
  "debut_info": {
    "debut_date": "{argument name=\"debut date\" default=\"2026.05.20\"}",
    "platform": "{argument name=\"platform\" default=\"YouTube · Bilibili\"}",
    "tags": "{argument name=\"tags\" default=\"#初配信 #雪絨組 #VTuber\"}",
    "agency": "{argument name=\"agency\" default=\"NEX Live\"}"
  },
  "background": {
    "type": "{argument name=\"background\" default=\"冬日雪原 + 極光\"}",
    "fx": "{argument name=\"fx\" default=\"雪花飄落 + 冷光粒子\"}"
  },
  "layout": {
    "character_position": "畫面 1/2 偏右",
    "info_block_position": "畫面左側豎排",
    "logo_position": "右下角 agency logo"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4\"}",
  "constraints": {
    "must_keep": [
      "角色作爲視覺主體",
      "名字與 debut 信息清晰可讀",
      "主色與角色配色一致",
      "agency logo 不超過 5%"
    ],
    "avoid": [
      "角色臉部被信息塊遮擋",
      "背景特效喧賓奪主",
      "字體多種類",
      "出現真實平臺真實 logo（除非用戶提供）"
    ]
  }
}
```

### 參數策略

- 必問：角色名、風格、配色、debut 信息
- 可默認：背景、特效、layout
- 可隨機：背景細節

### 自動補全策略

- 風格按主題自動選（雪 → 冰藍；火 → 紅橙；夜 → 深紫；春 → 櫻粉）
- 服裝按風格匹配
- debut 信息按今日 + 30 天默認

## 變體 1：直播預覽縮略圖（橫屏）

📝 提示詞

```json
{
  "type": "VTuber 直播預覽縮略圖",
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"16:9\"}",
  "character": {
    "pose": "{argument name=\"pose\" default=\"上半身 + 大表情\"}"
  },
  "title_overlay": {
    "main": "{argument name=\"stream title\" default=\"今晚！第一次直播！\"}",
    "sub": "{argument name=\"stream sub\" default=\"21:00 見 / 雪絨組\"}"
  },
  "constraints": {
    "must_feel": "直播感、邀請感、出片"
  }
}
```

## 變體 2：跨次元代言形象主圖

📝 提示詞

```json
{
  "type": "跨次元代言主圖",
  "character": {
    "pose": "拿着代言產品，看向鏡頭"
  },
  "brand": {
    "name": "{argument name=\"brand\" default=\"AURORA Coffee\"}",
    "co_brand_visual": "品牌 logo + 產品在角色手中"
  },
  "constraints": {
    "must_feel": "代言感、品牌一致、可作爲正式 KV"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "VTuber 形象自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給主題（雪、夜、海、櫻），自動生成名字、配色、服裝、背景、debut 信息",
  "constraints": {
    "must_feel": "可上線發布"
  }
}
```

## 避免事項

- 不要讓角色臉被文字遮擋
- 不要使用真實存在的版權角色形象
- 不要在一張卡上塞 > 5 行信息
- 不要讓背景特效壓過角色
- 不要使用 > 3 種字體

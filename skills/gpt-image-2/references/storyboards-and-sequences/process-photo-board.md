# 真人攝影流程圖 / 裝備穿戴 / 操作流程板模板

本文件用於生成"真人 / 角色級 cinematic 實拍質感的多步驟操作流程板"。常見場景：

- 裝備穿戴 / 戰甲組裝 / 制服換裝流程
- 工藝操作 / 化妝 / 實驗 / 工坊步驟
- 訓練 / 武術 / 健身一組動作分解
- 器械維修 / 裝機 / 設備啓動流程
- 角色 cosplay / 道具佩戴流程
- 任何「步驟 1 → 步驟 N，每步一張實拍 cinematic 圖 + 編號 + 描述」的視覺手冊

特徵（與現有/新增模板的區別）：

| 模板 | 性質 |
|---|---|
| `recipe-process-flowchart.md`（已有） | 食譜流程（手繪 / illustration 風） |
| `pose-reference-sheet.md`（新增） | 姿勢字典（同一角色 N 個孤立動作，無敘事順序） |
| `cinematic-storyboard-grid.md`（新增） | 電影分鏡（連續敘事，事件/情緒） |
| `product-tvc-storyboard.md`（新增） | 商業 TVC 分鏡（產品中心） |
| **本模板**（新增） | **真人/角色實拍 cinematic 流程板**（步驟中心 + 順序 + 裝備狀態變化） |

**核心區別**：本模板每張子圖都是「同一角色不同步驟的真人/cinematic 實拍 still」，強調**裝備狀態 / 操作姿態從步驟 1 到 N 的變化**，並配步驟編號 + 步驟標題 + 步驟說明。

## 適用範圍

- 裝備穿戴流程（戰甲 / 戰術裝備 / cosplay）
- 工藝操作流程（咖啡衝泡 / 化妝 / 實驗）
- 訓練分解（武術 / 健身 / 舞蹈技術分解）
- 設備啓動 / 維修 / 裝機流程
- 儀式 / 着裝禮儀流程

## 何時使用

- 用戶提到"裝備 / 穿戴 / 流程圖 / 步驟板 / 操作分解 / process board"
- 主體是**同一真人角色**或**同一物體**經歷**有序的狀態變化**
- 想要**實拍 / cinematic 寫實質感**（不是手繪/線稿）
- 每步都需要圖像 + 步驟編號 + 步驟說明文本

不要使用：

- 食譜 / 教程線稿流程 → 用 `recipe-process-flowchart.md`
- 姿勢字典 / 動作字典（無順序） → 用 `pose-reference-sheet.md`
- 電影敘事分鏡（敘事重於步驟） → 用 `cinematic-storyboard-grid.md`
- 商業廣告 TVC（產品中心） → 用 `product-tvc-storyboard.md`

## 缺失信息優先提問順序

1. 流程主題（什麼的流程？裝備 / 化妝 / 操作 / 訓練）
2. 角色描述（性別 / 年齡 / 髮型 / 服裝 / 關鍵識別特徵）
3. 步驟數量（推薦 4 / 6 / 8 / 9）+ 網格（2×3 / 3×2 / 3×3 / 2×4）
4. 每步標題 + 簡述（裝備狀態 / 動作描述）
5. 風格（**cinematic 實拍 / tokusatsu 特攝 / 時尚大片 / 工坊紀實 / 教程截圖**）
6. 語言（標題 / 說明文字使用語言：日文 / 中文 / 英文）
7. 環境（工坊 / 化妝間 / 健身房 / 實驗室 / 戶外）
8. 比例（橫版 16:9 看板 / 豎版 4:5 手冊 / 1:1 社交媒體）

## 主模板：3×2 = 6 步真人 cinematic 裝備穿戴流程板（特攝風案例）

📖 描述

橫版 16:9 大圖，2 行 3 列共 6 格。頂部標題橫幅 + 6 格步驟圖（每圖帶紅色數字編號方塊 + 步驟日文標題 + 步驟說明）+ 底部口號橫幅。每格都是同一角色實拍 cinematic still，裝備狀態按步驟遞進。

📝 提示詞

```json
{
  "type": "{argument name=\"theme type\" default=\"Japanese sci-fi armor dressing-process infographic\"}",
  "goal": "生成一張以同一角色爲主角、按步驟遞進展示裝備/操作變化的 cinematic 實拍流程板",
  "style": "{argument name=\"overall style\" default=\"cinematic live-action tokusatsu-inspired promotional board, realistic industrial lighting, polished metal surfaces, sharp photographic detail\"}",
  "theme": "{argument name=\"process theme\" default=\"manual pre-battle suit-up sequence for a female hero in a red, silver, black, and blue protector suit\"}",
  "subject": {
    "character": {
      "gender": "{argument name=\"gender\" default=\"female\"}",
      "age": "{argument name=\"age\" default=\"young adult\"}",
      "identity": "{argument name=\"identity\" default=\"helmetless heroine during assembly, face intentionally obscured or anonymized in every unhelmeted panel\"}",
      "hair": "{argument name=\"hair\" default=\"dark brown to black hair tied in a high ponytail with bangs\"}",
      "undersuit": "{argument name=\"undersuit\" default=\"glossy black skintight inner suit with silver chest panel and white neck ring\"}",
      "armor_or_outfit": "{argument name=\"armor description\" default=\"retro-futuristic protector armor with red shoulder and arm plates, silver breastplate and torso plating, circular blue chest core, red waist unit, white gloves, red forearm guards with yellow stripe accents\"}",
      "helmet_or_headpiece": "{argument name=\"helmet description\" default=\"round red-and-silver helmet with black visor\"}"
    },
    "environment": {
      "location": "{argument name=\"location\" default=\"high-tech industrial hangar or armor bay\"}",
      "background_elements": "{argument name=\"background elements\" default=\"metal framework, robotic equipment, tool benches, armor racks, computer monitors, workshop lighting, bay corridor marked BAY-07 in final panel\"}"
    }
  },
  "layout": {
    "header": {
      "count": 2,
      "labels": [
        "{argument name=\"header title\" default=\"ソルジャンヌ・スーツ 手動裝着プロセス\"}",
        "{argument name=\"header subtitle\" default=\"専用プロテクタースーツ『ソルジャンヌ』を、戦闘前に手動で裝着する様子。各ユニットを確実に裝着し、システムを起動する。\"}"
      ],
      "design": "wide black-to-red gradient banner across top, large bold white headline text, diagonal red accent stripe"
    },
    "sections": [
      {
        "step_id": 1,
        "title": "{argument name=\"step 1 title\" default=\"1 インナースーツの確認\"}",
        "position": "top-left",
        "labels": ["{argument name=\"step 1 caption\" default=\"各部のセンサーとコネクタをチェック。戦闘に備え、身體の狀態を最終確認する。\"}"],
        "image": "{argument name=\"step 1 image\" default=\"three-quarter view of the heroine in only the black glossy inner suit, looking down while checking or tightening a wrist connector\"}"
      },
      {
        "step_id": 2,
        "title": "{argument name=\"step 2 title\" default=\"2 胸部・肩部アーマーの裝着\"}",
        "position": "top-center",
        "labels": ["{argument name=\"step 2 caption\" default=\"胸部ユニットと肩部プロテクターを裝着。コネクタを接続し、ロックを固定する。\"}"],
        "image": "{argument name=\"step 2 image\" default=\"mid shot with chest armor and red shoulder plates installed, heroine fastening the front torso area with both hands\"}"
      },
      {
        "step_id": 3,
        "title": "{argument name=\"step 3 title\" default=\"3 腰部ユニット・ベルトの固定\"}",
        "position": "top-right",
        "labels": ["{argument name=\"step 3 caption\" default=\"ウエストユニットを裝着し、各部のロックを確認。可動部の動作チェックを行う。\"}"],
        "image": "{argument name=\"step 3 image\" default=\"mid shot with torso armor completed, heroine tightening or checking the waist belt and side locks\"}"
      },
      {
        "step_id": 4,
        "title": "{argument name=\"step 4 title\" default=\"4 ヘルメットの準備\"}",
        "position": "bottom-left",
        "labels": ["{argument name=\"step 4 caption\" default=\"ヘルメットのバイザーと內部システムをチェック。ヘッドセットとの同期を確認する。\"}"],
        "image": "{argument name=\"step 4 image\" default=\"heroine holding the red helmet in both hands at chest height, showing the glossy black visor\"}"
      },
      {
        "step_id": 5,
        "title": "{argument name=\"step 5 title\" default=\"5 ヘルメットの裝着・システム起動\"}",
        "position": "bottom-center",
        "labels": ["{argument name=\"step 5 caption\" default=\"ヘルメットを裝着し、直上のコネクタをロック。全身のシステムが起動し、胸部コアが発光する。\"}"],
        "image": "{argument name=\"step 5 image\" default=\"heroine placing the helmet onto her head with both hands; blue chest core glowing brightly\"}"
      },
      {
        "step_id": 6,
        "title": "{argument name=\"step 6 title\" default=\"6 裝着完了\"}",
        "position": "bottom-right",
        "labels": ["{argument name=\"step 6 caption\" default=\"全システムの最終チェックを行い、戦闘モードへ。ソルジャンヌ、出撃準備完了!\"}"],
        "image": "{argument name=\"step 6 image\" default=\"full-body frontal hero pose in a futuristic corridor, fully suited with helmet on, arms relaxed at sides\"}"
      }
    ],
    "footer": {
      "count": 1,
      "labels": ["{argument name=\"footer slogan\" default=\"一つ一つの裝着が、命を守り、力を引き出す。ソルジャンヌの戦いは、ここから始まる。\"}"],
      "design": "dark red cinematic footer strip with centered white slogan"
    },
    "grid": {
      "rows": 2,
      "columns": 3,
      "panel_count": 6,
      "panel_borders": "thin white dividers",
      "number_badges": "red square badges with white numerals 1-6 placed at the corner of each panel"
    }
  },
  "text_rendering": {
    "language": "{argument name=\"language\" default=\"Japanese\"}",
    "font": "{argument name=\"font style\" default=\"bold sans-serif headline with smaller sans-serif body text\"}",
    "colors": "{argument name=\"text color scheme\" default=\"white text on black, red, and white info bars; red numbered squares with white numerals\"}"
  },
  "composition": "{argument name=\"composition\" default=\"16:9 wide infographic board, six equal photo panels arranged in a 3-by-2 grid, each panel captioned below with a red numbered box from 1 to 6\"}",
  "lighting": "{argument name=\"lighting\" default=\"moody workshop lighting with metallic reflections and red accent lights, realistic shadows, cinematic sci-fi atmosphere\"}",
  "constraints": {
    "must_keep": [
      "同一角色（外貌 / 體型 / 內襯）在所有 panel 中一致",
      "裝備狀態在每一步顯式遞進（穿了什麼 → 又穿了什麼）",
      "每格帶清晰編號 + 步驟標題 + 簡要說明",
      "標題語言、字體、配色保持統一",
      "整體 16:9 看板布局工整對齊",
      "光線 / color grading / 環境質感統一"
    ],
    "avoid": [
      "角色長相 / 髮型 / 體型在不同 panel 漂移",
      "裝備狀態非遞進（步驟 4 比步驟 5 更全副武裝）",
      "缺少編號 / 標題 / 說明",
      "把流程板做成姿勢字典（每格無敘事聯繫）",
      "把流程板做成漫畫 / 加對話氣泡",
      "環境 / 燈光 / 濾鏡在不同 panel 風格不一致"
    ]
  }
}
```

### 參數策略

- **必問**：theme（什麼流程）、character（角色描述）、6 個 step title + caption + image（按順序遞進）、language
- **可默認**：style、environment、composition、lighting、grid
- **可隨機**：footer slogan、background detail（除非用戶指定）

### 自動補全策略

- 用戶給一句"想要 6 步裝備穿戴流程" → 按「內層 → 上身 → 下身 → 頭部準備 → 頭部裝上 → 全身完成」自動拆 6 步
- 用戶給一句"咖啡衝泡 6 步" → 按「研磨 → 稱重 → 燒水 → 悶蒸 → 注水 → 出杯」自動拆
- 用戶給"化妝 6 步" → 按「打底 → 遮瑕 → 眼妝 → 腮紅 → 脣妝 → 定妝」自動拆
- 不指定語言 → 默認與用戶對話語言一致

## 變體 1：3×3 = 9 步豎版手冊（4:5 / 9:16）

📝 提示詞

```json
{
  "type": "9-step process manual board, vertical poster",
  "layout": { "rows": 3, "columns": 3, "panel_count": 9, "aspect_ratio": "4:5 or 9:16 vertical" },
  "use_case": "更細緻的步驟手冊 / 小紅書 / 公衆號豎版圖文 / 教程封面"
}
```

### 何時選這個變體

- 步驟多於 6（例如詳細 9 步教程）
- 需要豎版（社交媒體 / 手機端閱讀）
- 教程類內容

## 變體 2：2×4 = 8 步橫版（適合訓練分解 / 武術拆招）

📝 提示詞

```json
{
  "type": "8-step technical breakdown board, horizontal banner",
  "layout": { "rows": 2, "columns": 4, "panel_count": 8, "aspect_ratio": "16:9 ultra-wide" },
  "use_case": "武術拆招 / 健身動作分解 / 舞蹈技術 / 體操"
}
```

### 何時選這個變體

- 橫向敘事更自然（左 → 右一招一式）
- 步驟數量爲 8
- 需要更大顯示寬度

## 變體 3：4 步極簡流程（適合簡單裝備 / 入門教程）

📝 提示詞

```json
{
  "type": "4-step minimal process board",
  "layout": { "rows": 2, "columns": 2, "panel_count": 4, "aspect_ratio": "1:1" },
  "use_case": "極簡入門教程 / 簡單裝備 / 4 步完成的簡短流程"
}
```

### 何時選這個變體

- 流程只有 4 步
- 1:1 適合 Instagram / 小紅書封面
- 想要簡潔乾淨

## 變體 4：攝影時尚大片質感（非特攝風）

📝 提示詞

```json
{
  "type": "fashion editorial multi-step lookbook board",
  "style_override": {
    "rendering": "high-end fashion photography, soft beauty light, magazine editorial spread",
    "lighting": "softbox key light + rim light, clean shadow",
    "background": "seamless studio backdrop or minimal location"
  },
  "use_case": "服裝搭配步驟 / 化妝教程 / 時尚 lookbook"
}
```

### 何時選這個變體

- 需要時尚大片美感
- 主題是服裝 / 化妝 / 美容
- 不需要 sci-fi / 工業感

## 避免事項

- ❌ 角色外觀在不同 panel 漂移（**必須強調 character consistency**）
- ❌ 裝備狀態非遞進（必須按步驟顯式疊加）
- ❌ 缺少編號 / 標題 / 說明
- ❌ 把流程板做成姿勢字典（用 `pose-reference-sheet.md`）
- ❌ 把流程板做成漫畫 / 加對話氣泡
- ❌ 環境 / 燈光 / 濾鏡在不同 panel 風格不一致
- ❌ 讓模型自由生成步驟（必須顯式列出每步標題 + 說明 + 鏡頭描述）
- ❌ 在面部不打碼 / 不模糊的情況下生成真人 lookalike 照片（**遵守身份隱私約束**）

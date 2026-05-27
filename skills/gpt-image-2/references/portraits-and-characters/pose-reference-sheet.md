# 姿勢 / 動作參考表 N×N 模板

本文件用於生成"同一個人物 / 角色，在 N×N 網格中以不同姿勢 / 動作 / 戰鬥 / 舞蹈 pose 出現"的純參考表 / 動作字典。

典型用途：

- 舞蹈 / hip-hop / 戰鬥 pose 編舞參考
- 角色動畫師 / 漫畫家 pose 速查表
- 健身 / 瑜伽 / 武術姿勢字典
- 時尚拍照 pose 靈感庫
- 遊戲角色動作參考表
- AI 視頻 / 後續生成的 pose 控制參考集

特徵（與現有 portraits 模板的區別）：

| 模板 | 重點 |
|---|---|
| `character-sheet.md`（已有） | 一個角色的"完整設定"（三視圖 + 表情 + 服裝 + 配飾）|
| `avatars-and-profile/character-grid-portrait.md`（已有） | n×n 角色網格（多職業 / 多朝代肖像）|
| **本模板**（新增） | **同角色 N 個不同姿勢 / 動作 / 舞蹈 pose 的純動作字典** |

**核心區別**：本模板不變服裝、不換角色、不換風格，只變姿勢——每格的差異完全在 body language 上。

## 適用範圍

- 4×4 / 4×5 / 5×5 姿勢速查表
- 舞蹈 / 戰鬥 / 健身 / 時尚 pose 字典
- 動畫師 / 漫畫家 / 教練參考
- AI pose control 數據集源圖

## 何時使用

- 用戶提到"姿勢參考 / pose sheet / 動作參考表 / 編舞 / 健身 / 戰鬥動作"
- 想要 N 個不同姿勢的同一角色
- 用作教學 / 參考 / 後續生成的輸入

不要使用：

- 角色完整設定（三視圖 + 表情 + 服裝）→ 用 `character-sheet.md`
- 多職業 / 多朝代肖像 → 用 `avatars-and-profile/character-grid-portrait.md`
- 漫畫分鏡 / 故事 → 用 `storyboards-and-sequences/four-panel-comic.md`
- 真實攝影分鏡（帶產品 / 商業廣告）→ 用 `storyboards-and-sequences/product-tvc-storyboard.md`

## 缺失信息優先提問順序

1. 姿勢數量（默認 16，常見 9 / 12 / 16 / 20 / 25）
2. 角色性別 + 體型 + 髮型 + 服裝（**必須固定，所有 panel 共用**）
3. 渲染風格（**寫實攝影 / 灰度 3D 雕塑 / 動漫線稿 / 極簡扁平**）
4. 姿勢主題（**hip-hop / 戰鬥 / 時尚 / 瑜伽 / 健身 / 通用動作**）
5. 是否需要每格編號 / 標註 / 方向箭頭
6. 背景（默認 seamless 白）+ 燈光（默認柔和影棚）
7. 比例（默認 1:1 contact sheet / 16:9 橫版）

## 主模板：4×4 = 16 格姿勢參考表（寫實攝影風）

📖 描述

清潔影棚 contact sheet，無背景，全身入框，每格姿勢獨立但角色 / 服裝 / 鏡頭距離嚴格一致。

📝 提示詞

```json
{
  "type": "pose reference sheet",
  "goal": "生成一張同一角色 N 個不同姿勢的純動作參考表，可用於編舞 / 動畫 / 健身 / AI pose 控制參考",
  "subject": {
    "theme": "{argument name=\"pose theme\" default=\"hip-hop dance and combat-ready movement chart\"}",
    "character": {
      "count": 1,
      "gender_presentation": "{argument name=\"gender\" default=\"female\"}",
      "age_appearance": "{argument name=\"age\" default=\"young adult\"}",
      "body_type": "{argument name=\"body type\" default=\"fit athletic dancer\"}",
      "skin_tone": "{argument name=\"skin tone\" default=\"light tan\"}",
      "hair": {
        "color": "{argument name=\"hair color\" default=\"black\"}",
        "style": "{argument name=\"hair style\" default=\"high ponytail with loose strands\"}"
      },
      "outfit": {
        "count": 5,
        "items": [
          "{argument name=\"outfit top\" default=\"white sports bra or cropped athletic top\"}",
          "{argument name=\"outfit bottom\" default=\"baggy purple jogger pants\"}",
          "{argument name=\"outfit shoes\" default=\"white chunky sneakers\"}",
          "{argument name=\"outfit accessory 1\" default=\"purple wristbands or forearm bands on both arms\"}",
          "{argument name=\"outfit accessory 2\" default=\"small hoop earrings\"}"
        ]
      }
    }
  },
  "style": {
    "image_type": "{argument name=\"render style\" default=\"photorealistic studio pose sheet\"}",
    "lighting": "{argument name=\"lighting\" default=\"clean even studio lighting\"}",
    "background": "{argument name=\"background\" default=\"plain light gray to white seamless backdrop\"}",
    "camera": "{argument name=\"camera\" default=\"full-body framing, straight-on view, consistent distance\"}",
    "rendering": "{argument name=\"rendering\" default=\"sharp realistic anatomy, dynamic motion, slight shadow under feet\"}",
    "face": "{argument name=\"face treatment\" default=\"intentionally blurred or obscured\"}"
  },
  "layout": {
    "grid": {
      "rows": "{argument name=\"rows\" default=\"4\"}",
      "columns": "{argument name=\"columns\" default=\"4\"}",
      "count": "{argument name=\"panel count\" default=\"16\"}"
    },
    "numbering": {
      "count": "{argument name=\"panel count\" default=\"16\"}",
      "labels": ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],
      "position": "top-left corner of each cell"
    },
    "cell_borders": "thin black divider lines between all panels",
    "aspect_ratio": "{argument name=\"aspect ratio\" default=\"1:1\"}"
  },
  "poses": {
    "count": 16,
    "items": [
      { "label": "1", "description": "{argument name=\"pose 1\" default=\"wide low squat, knees bent outward, torso angled slightly left, both arms extended loosely in a defensive dance stance\"}" },
      { "label": "2", "description": "{argument name=\"pose 2\" default=\"deep side lunge to the left, left arm pointing straight left, right hand near the head, energetic directional pose\"}" },
      { "label": "3", "description": "{argument name=\"pose 3\" default=\"low crouch with one hand touching the floor, one knee bent under the body, opposite arm extended horizontally\"}" },
      { "label": "4", "description": "{argument name=\"pose 4\" default=\"upright one-leg balance, left knee lifted high, both arms spread outward for rhythm and balance\"}" },
      { "label": "5", "description": "{argument name=\"pose 5\" default=\"similar one-leg raised pose with the other leg supporting, arms stretched outward in a lighter dance variation\"}" },
      { "label": "6", "description": "{argument name=\"pose 6\" default=\"very wide grounded squat, torso pitched forward, one hand reaching toward the floor between the legs, other arm extended back\"}" },
      { "label": "7", "description": "{argument name=\"pose 7\" default=\"dramatic standing back arch, chest lifted upward, hips forward, both arms opened behind and to the sides\"}" },
      { "label": "8", "description": "{argument name=\"pose 8\" default=\"small jump or suspended squat, both feet off the floor, knees bent, arms spread wide symmetrically\"}" },
      { "label": "9", "description": "{argument name=\"pose 9\" default=\"floor-supported seated lean, one hand planted behind, one arm reaching diagonally upward, legs bent to one side\"}" },
      { "label": "10", "description": "{argument name=\"pose 10\" default=\"front-facing balance with one knee raised to hip height, one arm bent in guard position and the other extended sideways\"}" },
      { "label": "11", "description": "{argument name=\"pose 11\" default=\"deep lateral stance, feet far apart, knees bent, both hands raised open near shoulder level like a ready combat pose\"}" },
      { "label": "12", "description": "{argument name=\"pose 12\" default=\"low side lunge split, one hand planted on the floor, the other arm reaching vertically overhead, torso arched upward\"}" },
      { "label": "13", "description": "{argument name=\"pose 13\" default=\"standing backward lean with relaxed bent knees, chest up, arms hanging loosely behind in a groove pose\"}" },
      { "label": "14", "description": "{argument name=\"pose 14\" default=\"compact twisting crouch, weight low over bent legs, torso rotated, one arm pulled in and the other extended outward\"}" },
      { "label": "15", "description": "{argument name=\"pose 15\" default=\"very wide side lunge stretch, one hand to the floor near the front foot, opposite arm reaching diagonally overhead\"}" },
      { "label": "16", "description": "{argument name=\"pose 16\" default=\"one-leg lifted pose with knee high, one hand behind the head and the other arm extended forward, confident finishing stance\"}" }
    ]
  },
  "composition": "show the same person in all 16 panels with consistent outfit and scale, centered within each frame, designed like a movement library or choreography reference chart",
  "constraints": {
    "must_keep": [
      "16 panel 中的角色完全一致（臉 / 體型 / 髮型 / 服裝 / 鞋）",
      "每格全身入框，鏡頭距離一致",
      "每格姿勢必須可識別且差異明顯",
      "每格左上角編號 1-16 清晰",
      "身體比例正確（無肢體扭曲）"
    ],
    "avoid": [
      "16 個姿勢都是站立 → 必須混合 squat / lunge / floor / jump / arabesque",
      "服裝 / 配飾在不同 panel 改變",
      "全身入框被裁掉頭或腳",
      "肢體扭曲 / 多手 / 多腳",
      "臉部表情過度搶戲（應該看姿勢而不是表情）"
    ]
  }
}
```

### 參數策略

- **必問**：pose count、character description（性別 + 體型 + 髮型 + 服裝）、render style
- **可默認**：pose 1-16 具體描述（按 theme 自動生成多樣化姿勢）
- **可隨機**：face treatment、shadow direction

### 自動補全策略

- 用戶只說"舞蹈 pose 16 格" → 用模板默認 16 姿勢組合（已混合 squat / lunge / floor / balance / jump / backbend）
- 用戶給出 theme（hip-hop / 戰鬥 / 時尚） → 自動調整 pose 描述風格
- 用戶給參考人物 → 把 character 字段全部用參考圖細節填充

## 變體 1：4×4 灰度 3D 雕塑風（帶方向箭頭）

適合 Korean 舞蹈編舞 / 戰鬥動作教學，源自 Case 130 風格。

📝 提示詞

```text
[STYLE]
monochromatic grayscale illustration, 3D rendered character, clean instructional reference sheet,
white background, comic-style cell grid layout, technical diagram aesthetic

[LAYOUT]
4x4 grid layout, 16 panels total, each panel separated by thin black border lines,
numbered cells from 1 to 16, consistent panel size

[CHARACTER]
{argument name="character" default="young female dancer, athletic build, ponytail hairstyle, crop top and baggy pants, sneakers"}, same character in all panels

[PANEL STRUCTURE - per cell]
top-left: bold number badge + {argument name="title" default="Korean title text"}
center: full-body character pose illustration
bottom-left: {argument name="description" default="Korean description text (3-4 lines)"}
overlay: directional arrows indicating movement direction

[ARROWS / MOTION INDICATORS]
curved arrows, straight arrows, circular rotation indicators,
placed around the character to show movement flow and direction

[RENDERING STYLE]
high detail 3D sculpt style, soft studio lighting, subtle shadows,
no color, grayscale shading, clean linework, game concept art quality

[NEGATIVE]
no background scenery, no color tones, no extra characters,
no cluttered backgrounds
```

### 何時選這個變體

- 想要"教學手冊感"
- 需要明確的方向箭頭
- 灰度 3D 雕塑感（不是寫實攝影）

## 變體 2：5×5 = 25 格大型動作字典

📝 提示詞

```json
{
  "type": "expanded pose reference sheet 25-panel",
  "layout": { "rows": 5, "columns": 5, "count": 25 },
  "must_keep": ["每格的細節會變小，但姿勢仍可識別", "適合 contact sheet / 16:10 橫屏"],
  "use_case": "動畫師 / 編舞 / pose AI 數據集"
}
```

### 何時選這個變體

- 需要更多 pose 樣本
- 接受單格細節降低
- 適合作爲 dataset / library

## 變體 3：3×3 = 9 格精修 hero pose 集（每格細節更高）

📝 提示詞

```json
{
  "type": "hero pose collection 9-panel",
  "layout": { "rows": 3, "columns": 3, "count": 9 },
  "rendering_quality_per_panel": "increase detail since fewer panels",
  "use_case": "時尚拍照 pose 靈感 / 模特參考 / 海報 hero pose 庫"
}
```

### 何時選這個變體

- 用作時尚 / 模特拍攝 pose 靈感
- 每格需要更高完成度
- 不追求姿勢數量

## 避免事項

- ❌ 16 panel 中角色服裝漂移 → 致命錯誤
- ❌ 16 個姿勢全是站立或全是 squat → 缺乏動作多樣性
- ❌ 編號丟失或亂序
- ❌ 全身入框被裁（頭 / 腳）
- ❌ 多手 / 多腳 / 關節扭曲
- ❌ 給寫實姿勢加抽象背景（應保持 seamless 純色）
- ❌ 臉部表情過度搶戲（應使用 blurred face / neutral 處理）
- ❌ 把模板裏默認的"hip-hop"姿勢組合直接用在"瑜伽"主題（應替換 pose 1-16 描述）
- ❌ 讓模型自由生成 N 個 pose（必須顯式列出每格姿勢描述）

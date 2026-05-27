# 電影感敘事分鏡 contact sheet 模板

本文件用於生成"以一段連續敘事 / 情緒 / 事件序列爲主線，按 N×M 網格輸出 9-15 個 cinematic still"的電影分鏡板。

典型用途：

- 短片 / 概念片 / pitch trailer 的視覺提案
- AI 視頻生成（Sora / Runway / Pika）的鏡頭列表參考
- 漫畫 / 動畫 / 遊戲 cinematic cut scene 提案
- 影視投資 deck 的概念視覺
- 「這段故事拍出來會長什麼樣」一圖答案
- sci-fi / 戰鬥 / 災難 / 浪漫 / 懸疑 任意題材

特徵（與現有 storyboards 模板的區別）：

| 模板 | 性質 |
|---|---|
| `four-panel-comic.md`（已有） | 漫畫 4 格 / 段子 / 反轉 |
| `manga-spread-page.md`（已有） | 漫畫跨頁（不規則格） |
| `recipe-process-flowchart.md`（已有） | 流程示意（食譜 / 教程） |
| `product-tvc-storyboard.md`（新增） | **商業廣告 TVC 分鏡（產品中心）** |
| **本模板**（新增） | **電影 / 短片 / 概念片 敘事分鏡**（事件 / 情緒 / 故事中心） |

**核心區別**：本模板每個 panel 都是「電影級 cinematic still」，不強調產品 / 商業，而強調「這一秒發生了什麼 + 鏡頭如何拍 + 情緒是什麼」。

## 適用範圍

- 電影 / 短片 / 動畫 cinematic 分鏡板
- AI 視頻鏡頭列表
- pitch trailer 視覺提案
- 概念片 storyboard（sci-fi / 戰鬥 / 災難 / 浪漫 / 懸疑）

## 何時使用

- 用戶提到"電影分鏡 / cinematic storyboard / 短片鏡頭表 / 概念片鏡頭列表"
- 主體是事件 / 情緒 / 故事，不是產品 / 商業廣告
- 想要「電影感」而非「漫畫感」/「廣告感」

不要使用：

- 商業廣告 TVC 分鏡（帶產品） → 用 `product-tvc-storyboard.md`
- 漫畫分鏡（帶對話氣泡 / 心聲） → 用 `four-panel-comic.md` / `manga-spread-page.md`
- 食譜 / 教程流程 → 用 `recipe-process-flowchart.md`
- 真人攝影流程圖 / 裝備穿戴 → 用 `process-photo-board.md`

## 缺失信息優先提問順序

1. 故事 / 主線（一段話描述：誰 + 在哪 + 發生什麼 + 結局）
2. 題材（**sci-fi / 災難 / 戰鬥 / 浪漫 / 懸疑 / 西部 / 黑色電影**）
3. 鏡頭數量（9 / 12 / 15）+ 網格（3×3 / 3×4 / 3×5 / 4×4）
4. 情緒曲線（**起 → 升 → 高潮 → 落 / 一直緊張 / 一直平靜爆發**）
5. 風格（**photoreal / 油畫質感 / 動漫電影感 / 黑白電影 / 復古 70s**）
6. 配色基調（決定整組鏡頭的 color grading）
7. 比例（每格 16:9 / 21:9 電影寬屏；整圖 1:1 contact sheet 或 4:5 / 16:9）

## 主模板：3×4 = 12 鏡電影感分鏡 contact sheet（sci-fi 案例）

📖 描述

12 個獨立 cinematic still，連續敘事一個事件（如飛船降落氣巨星），每格自成一幅 cinematic 概念圖，整體保持 mood / 燈光 / 配色一致。

📝 提示詞

```json
{
  "type": "cinematic storyboard contact sheet",
  "goal": "生成一張 12 鏡分鏡板，每鏡都是一幅完整的電影 cinematic still，整組講述一個連續敘事",
  "subject": {
    "primary": "{argument name=\"primary subject\" default=\"a small futuristic spacecraft descending into a massive gas giant storm system\"}",
    "secondary": "{argument name=\"secondary subject\" default=\"an enormous leviathan-like silhouette hidden within the clouds\"}",
    "mood": "{argument name=\"mood\" default=\"oppressive, catastrophic, awe-struck, high tension, cosmic dread\"}",
    "style": "{argument name=\"cinematic style\" default=\"photorealistic cinematic concept art with dark sci-fi realism, volumetric storm clouds, strong contrast, amber and black palette with occasional cold blue lightning\"}",
    "aspect_ratio_per_panel": "{argument name=\"per-panel ratio\" default=\"16:9\"}"
  },
  "vehicle_or_actor": {
    "design": "{argument name=\"hero design\" default=\"compact armored deep-atmosphere ship with 3 bright rear engines, angular industrial hull, worn metallic panels\"}",
    "scale": "{argument name=\"scale relation\" default=\"tiny compared to the planet and creature\"}"
  },
  "layout": {
    "grid": {
      "rows": "{argument name=\"rows\" default=\"3\"}",
      "columns": "{argument name=\"columns\" default=\"4\"}",
      "count": "{argument name=\"panel count\" default=\"12\"}"
    },
    "sheet_aspect_ratio": "{argument name=\"sheet ratio\" default=\"16:9 contact sheet\"}",
    "panel_borders": "thin white dividers, generous gutter",
    "sections": [
      { "position": "row 1 col 1", "description": "{argument name=\"shot 1\" default=\"wide exterior shot of the ship entering the upper atmosphere of a colossal gas giant at extreme speed, glowing clouds streaked with fire and friction around the vessel, curved planetary horizon visible\"}" },
      { "position": "row 1 col 2", "description": "{argument name=\"shot 2\" default=\"cockpit POV, dark interior filled with red and cyan holographic instruments, forward visibility collapsing into turbulent storm layers and electrical haze\"}" },
      { "position": "row 1 col 3", "description": "{argument name=\"shot 3\" default=\"exterior mid-wide shot of the ship diving into a gigantic rotating cloud funnel, surrounded by violent spiraling storm structure\"}" },
      { "position": "row 1 col 4", "description": "{argument name=\"shot 4\" default=\"extreme close exterior of the ship hull as bright lightning strikes dangerously close, white electric energy crawling across the metal surface\"}" },
      { "position": "row 2 col 1", "description": "{argument name=\"shot 5\" default=\"dashboard warning screen in red, showing a critical systems failure interface with 4 warning lines and 1 large percentage readout: WARNING / ENGINES COMPROMISED / THRUST FLUCTUATION / GRAVITY SPIKE DETECTED / DESCENT RATE -453%\"}" },
      { "position": "row 2 col 2", "description": "{argument name=\"shot 6\" default=\"rear three-quarter exterior of the ship fighting turbulence inside dense storm clouds, engines burning hard while the craft barely holds course\"}" },
      { "position": "row 2 col 3", "description": "{argument name=\"shot 7\" default=\"massive circular disturbance forming in the clouds like an eye or maw, entire storm systems displaced by something huge moving beneath\"}" },
      { "position": "row 2 col 4", "description": "{argument name=\"shot 8\" default=\"second cockpit view with radar-like navigation display and red alert text, pilot making a blind evasive maneuver through lightning-filled darkness\"}" },
      { "position": "row 3 col 1", "description": "{argument name=\"shot 9\" default=\"first reveal of the colossal creature shape rising near the ship, black organic surface and immense curved anatomy emerging from darkness, ship tiny at lower left\"}" },
      { "position": "row 3 col 2", "description": "{argument name=\"shot 10\" default=\"spiral descent shot, ship caught inside a vortex tunnel of clouds, spinning downward with engines flaring as it struggles to recover\"}" },
      { "position": "row 3 col 3", "description": "{argument name=\"shot 11\" default=\"sudden breakthrough into a calm void, minimal composition, ship flying in eerie silence through dark open space with soft mist and no visible storm around it\"}" },
      { "position": "row 3 col 4", "description": "{argument name=\"shot 12\" default=\"final reveal, gigantic leviathan fully emerging behind or beside the ship in cleared space, backlit by a pale circular storm opening, enormous open maw-like silhouette dwarfing the craft\"}" }
    ],
    "continuity": "all 12 panels depict one continuous narrative sequence with consistent hero design, color grading, and mood arc"
  },
  "lighting": {
    "primary": "{argument name=\"primary light\" default=\"glowing amber storm light\"}",
    "secondary": "{argument name=\"secondary light\" default=\"red cockpit interface glow\"}",
    "accents": "{argument name=\"accent light\" default=\"blue-white lightning and engine exhaust\"}"
  },
  "environment": {
    "location": "{argument name=\"location\" default=\"inside the upper and middle storm layers of a gigantic gas giant\"}",
    "weather": "{argument name=\"weather\" default=\"violent turbulence, electrical storms, vortex funnels, cloud walls, pressure chaos\"}",
    "threat": "{argument name=\"threat / tension\" default=\"no safe zone, repeated near-failure, unknown colossal presence driving the storm\"}"
  },
  "constraints": {
    "must_keep": [
      "12 panel 必須呈現一段連續敘事（不是 12 張隨機圖）",
      "hero（飛船 / 角色）外觀在所有 panel 中一致",
      "整體 color grading / mood 統一",
      "鏡頭節奏混合（遠景 / 中景 / 特寫 / POV / 仰拍 / 俯拍）",
      "至少 1 個 reveal / climax 鏡頭（如最後一格）"
    ],
    "avoid": [
      "12 panel 全是同一類型鏡頭（如全特寫）",
      "hero 外觀漂移",
      "整體 color grading 不一致（一格暖光一格冷光毫無理由）",
      "鏡頭描述與故事主線脫節",
      "把分鏡畫成漫畫 / 加對話氣泡（這是電影 still 不是漫畫）"
    ]
  }
}
```

### 參數策略

- **必問**：primary subject、mood、cinematic style、12 個 shot 簡述
- **可默認**：lighting、environment、aspect ratio
- **可隨機**：每鏡的具體角度（按主線自動生成 wide/POV/CU 混搭）

### 自動補全策略

- 用戶給一句故事大綱 → 自動拆 12 鏡（按 「entry → mid → escalation → climax → reveal」結構）
- 不指定 mood → 按題材自動（sci-fi=oppressive；浪漫=warm；戰鬥=tense；懸疑=cold）
- 不指定每鏡鏡頭類型 → 自動混搭 4 wide / 4 medium / 2 CU / 2 POV

## 變體 1：3×3 = 9 鏡短片節奏（適合 1-2 分鐘短片）

📝 提示詞

```json
{
  "type": "9-shot short film storyboard",
  "layout": { "rows": 3, "columns": 3, "count": 9 },
  "narrative_arc": ["1 establish", "2-3 inciting", "4-5 escalation", "6 turn", "7-8 climax", "9 resolve / cliffhanger"],
  "use_case": "1-2 分鐘短片 / 概念片 / TikTok 長視頻"
}
```

### 何時選這個變體

- 故事更短 / 節奏更緊湊
- 不需要 12 鏡
- 適合短片 / 短視頻提案

## 變體 2：4×4 = 16 鏡大型場面（適合戰鬥 / 災難 / 長 sequence）

📝 提示詞

```json
{
  "type": "16-shot epic sequence storyboard",
  "layout": { "rows": 4, "columns": 4, "count": 16 },
  "narrative_arc_extended": [
    "1-2 setup",
    "3-5 build",
    "6-8 first wave",
    "9 mid-climax",
    "10-12 second wave",
    "13-14 final climax",
    "15-16 aftermath"
  ],
  "use_case": "戰鬥大場面 / 災難片 / 史詩 sequence"
}
```

### 何時選這個變體

- 需要更多鏡頭表現複雜敘事
- 史詩 / 戰鬥 / 災難題材
- 接受單格細節降低

## 變體 3：黑白電影 / 復古膠片質感

📝 提示詞

```json
{
  "type": "black-and-white noir storyboard contact sheet",
  "style_override": {
    "rendering": "high-contrast black and white film still, deep shadows, grain texture, 1940s noir cinematography",
    "lighting": "venetian blind shadows, hard side light, smoke",
    "framing": "tight closeups, dutch angles, low POV"
  },
  "use_case": "懸疑 / 黑色電影 / 復古犯罪題材"
}
```

### 何時選這個變體

- 黑白 / noir 題材
- 想要復古膠片質感
- 強調光影 / 幾何構圖

## 避免事項

- ❌ 12 panel 之間故事斷裂（必須連續敘事）
- ❌ hero 外觀漂移
- ❌ color grading 不一致（一格暖光一格冷光）
- ❌ 全是同類型鏡頭（必須混合遠 / 中 / 近 / POV / 俯仰）
- ❌ 把分鏡畫成漫畫 / 加對話氣泡
- ❌ 把廣告產品塞進電影分鏡（應使用 `product-tvc-storyboard.md`）
- ❌ 最後一格不是 reveal / climax / cliffhanger（電影分鏡需要明確的尾鏡）
- ❌ 讓模型自由生成 12 鏡（必須顯式列出每鏡描述以保證敘事連貫）

# 仿生 / 工業設計概念海報模板

本文件用於生成"自然原型 → 抽象 → 工業產品"的概念設計海報，把生物形態、演化推導、最終產品 hero 渲染、多視圖技術圖、品牌文案全部組合成一張概念展板。

典型用途：

- 仿生工業設計概念稿（飛行器 / 汽車 / 機器人 / 家電 / 鞋類）
- 設計師 / 學生作品集封面
- 創業公司 demo day "我們怎麼從靈感走到產品"展示
- 學院派工業設計課程 deliverable
- 速度感 / 效率類品牌的視覺宣言海報
- 速速 sketch → 藍圖 → 渲染 全流程演示

特徵（與現有 poster 模板的區別）：

| 模板 | 用途 |
|---|---|
| `brand-poster.md`（已有） | 品牌主海報（產品 / 人物 / 文字主張） |
| `campaign-kv.md`（已有） | Campaign KV + 衍生 layout 系統 |
| `banner-hero.md`（已有） | Web hero / 落地頁橫向構圖 + CTA |
| `editorial-cover.md`（已有） | 雜誌 / 期刊封面 |
| **本模板**（新增） | **工業設計概念海報：原型 → 演化 → hero → 多視圖技術圖** |

## 適用範圍

- 仿生工業設計（manta / shark / falcon / leaf / honeycomb 啓發）
- 概念產品介紹海報
- 學生 / 設計師作品集封面
- 「靈感 → 產品」的視覺敘事
- 高端製造 / 航空 / 汽車 / 戶外品類

## 何時使用

- 用戶提到"仿生 / 概念設計 / 工業設計 / 演化推導 / 靈感來源"
- 想做"從生物原型到最終產品"的視覺故事
- 需要 hero 渲染 + 多視圖技術圖 + 設計推導一圖全包

不要使用：

- 單純產品廣告海報 → 用 `brand-poster.md` 或 `product-visuals/premium-studio-product.md`
- 學術論文 figure → 用 `academic-figures/method-pipeline-overview.md`
- 用戶調研 / 需求分析海報 → 用 `slides-and-visual-docs/visual-report-page.md`

## 缺失信息優先提問順序

1. 產品類型 + 名字（飛行器 SKYRAY / 鞋 SHARK SOLE / 椅 LEAF CHAIR）
2. 仿生原型（魟魚 / 鯊魚 / 樹葉 / 蜂巢 / 龍蝦…）
3. 風格基調（**black + cyan 高科技 / 米白 + 黑鐵線稿 / 暖木色 + 自然 / 復古藍圖**）
4. 是否需要演化條（5 階段靈感 → 產品）
5. 是否需要技術多視圖（top / side / front / rear / underside / detail）
6. tagline / footer body text
7. 比例（默認豎版 3:4）

## 主模板：仿生概念產品海報

📖 描述

豎版海報 / 橫版展板，分 5 個區：header（emblem + 名 + tagline）+ evolution strip（5 階段推導）+ hero render（中央 3D）+ technical views grid（6 視圖）+ footer body text。

📝 提示詞

```json
{
  "type": "biomimetic concept design poster",
  "goal": "生成一張「自然原型 → 推導 → hero → 多視圖」的概念產品展板，可作爲設計提案 / 作品集封面 / demo day 海報",
  "subject": {
    "vehicle_or_product": "{argument name=\"product type\" default=\"futuristic aircraft concept\"}",
    "name": "{argument name=\"product name\" default=\"SKYRAY\"}",
    "inspiration": "{argument name=\"animal inspiration\" default=\"stingray\"}",
    "design": "{argument name=\"design description\" default=\"blended-wing-body aircraft shaped like a manta ray, wide triangular planform, smooth organic curves, sharp pointed nose, slightly raised central spine, tapered wing tips curling subtly upward, dark graphite-black metallic skin with fine panel lines and faint blue illuminated accents along edges and seams\"}"
  },
  "style": {
    "mood": "{argument name=\"mood\" default=\"premium futuristic industrial design presentation\"}",
    "rendering": "{argument name=\"rendering\" default=\"hyper-detailed cinematic 3D concept art mixed with blueprint visualization\"}",
    "color_palette": "{argument name=\"color palette\" default=\"black, charcoal, gunmetal, silver, deep ocean blue, electric cyan highlights\"}",
    "lighting": "{argument name=\"lighting\" default=\"low-key dramatic studio lighting with glossy reflections, cool rim light, subtle underwater ambience in the top inspiration strip\"}"
  },
  "layout": {
    "background": "{argument name=\"background\" default=\"full black poster with faint technical grid lines and soft vignetting\"}",
    "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4 portrait poster\"}",
    "sections": [
      {
        "title": "header",
        "position": "top",
        "count": 3,
        "labels": ["emblem mark", "{argument name=\"product name\" default=\"SKYRAY\"}", "{argument name=\"tagline\" default=\"INSPIRED BY THE SEA. ENGINEERED FOR THE SKY.\"}"]
      },
      {
        "title": "evolution strip",
        "position": "upper middle",
        "count": 5,
        "labels": [
          "{argument name=\"evo 1\" default=\"realistic stingray underwater at far left\"}",
          "{argument name=\"evo 2\" default=\"top-view biological stingray study\"}",
          "{argument name=\"evo 3\" default=\"abstract aerodynamic line sketch\"}",
          "{argument name=\"evo 4\" default=\"faceted aircraft blueprint transition drawing\"}",
          "{argument name=\"evo 5\" default=\"final sleek aircraft concept at far right\"}"
        ]
      },
      {
        "title": "hero render",
        "position": "center",
        "count": 1,
        "labels": ["large three-quarter view of the {argument name=\"product type\" default=\"aircraft\"}"]
      },
      {
        "title": "technical views grid",
        "position": "lower middle",
        "count": 6,
        "labels": ["TOP", "SIDE", "FRONT", "REAR", "UNDERSIDE", "DETAIL"]
      },
      {
        "title": "footer text",
        "position": "bottom",
        "count": 1,
        "labels": [
          "{argument name=\"body text\" default=\"A biomimetic high-speed aircraft concept shaped by the hydrodynamic elegance of the stingray. Its blended wing body, low-drag silhouette, and fluid control surfaces translate ocean-born efficiency into atmospheric performance.\"}"
        ]
      }
    ],
    "technical_views": {
      "TOP": "top orthographic view with measurement ticks",
      "SIDE": "thin side profile with long smooth belly curve",
      "FRONT": "front orthographic view emphasizing broad wingspan and central cockpit hump",
      "REAR": "rear orthographic view showing narrow tail end and wing sweep",
      "UNDERSIDE": "underside three-quarter view",
      "DETAIL": "close-up crop of metallic skin, seam lines, and glowing blue edge strip"
    }
  },
  "graphics": {
    "logo": "{argument name=\"logo description\" default=\"minimal four-point symmetrical emblem above title, resembling a stylized ray silhouette\"}",
    "arrows": "4 thin cyan arrows connecting the 5 stages in the evolution strip",
    "typography": "widely spaced modern sans-serif uppercase text, clean luxury-tech branding"
  },
  "camera": {
    "hero_render": "slightly elevated front-left three-quarter angle",
    "technical_views": "orthographic",
    "inspiration_image": "{argument name=\"inspiration camera\" default=\"underwater side angle with light rays from above\"}"
  },
  "quality": "ultra-clean, polished, high contrast, sharp, poster-ready, concept design board for {argument name=\"industry\" default=\"aerospace\"} branding or speculative industrial design",
  "constraints": {
    "must_keep": [
      "5 階段演化條從左到右邏輯清晰（生物 → 抽象 → 產品）",
      "hero render 佔據視覺中心 ≥ 35% 高度",
      "6 個 technical view 角度齊全且產品形態一致",
      "header / footer 排版對齊 hero 中軸線",
      "整體配色不超過 4 主色 + 1 accent"
    ],
    "avoid": [
      "演化條畫成 5 張同一姿態的照片（應有從寫實 → 抽象的遞進）",
      "技術視圖比例失調（top / front / rear 必須正交準確）",
      "hero 與技術視圖中產品形態漂移",
      "footer body text 寫得太長 → 應控制在 2-3 句",
      "把 emblem / logo 放成大圖 → 應該是小型徽章",
      "用過多霓虹色破壞工業感"
    ]
  }
}
```

### 參數策略

- **必問**：product type + name、animal/biological inspiration、industry
- **可默認**：tagline、background、color palette
- **可隨機**：evolution 5 階段具體描述、technical views detail crop

### 自動補全策略

- 用戶給出"產品 + 靈感"→ 自動按"生物 → 解剖 → 抽象 → 工業 → 成品"5 步推導
- 不指定 industry → 按產品類型自動歸類（飛行器=aerospace；鞋=footwear；椅=furniture）
- 不指定顏色 → 按 industry 推薦（aerospace=black+cyan；footwear=white+orange；furniture=warm wood+cream）

## 變體 1：復古藍圖風（cream paper + ink）

📝 提示詞

```json
{
  "type": "biomimetic concept poster vintage blueprint edition",
  "style_override": {
    "background": "aged cream blueprint paper with subtle stains and grid",
    "color_palette": "navy ink, dark sepia, faded brown, no neon",
    "rendering": "fine ink linework + stippled engraving + vintage drafting style",
    "mood": "Leonardo da Vinci notebook meets industrial blueprint"
  },
  "extra_elements": ["handwritten margin notes", "small wax seal stamp", "ruler tick marks along edges"]
}
```

### 何時選這個變體

- 強調「設計哲學 / 文藝復興感」
- 教育 / 出版 / 文創品牌
- 反差點：用復古手感呈現未來產品

## 變體 2：自然色調（暖木 + 米白，適合家居 / 鞋 / 椅）

📝 提示詞

```json
{
  "type": "biomimetic concept poster organic warm edition",
  "style_override": {
    "background": "warm off-white textured paper with subtle plant shadows",
    "color_palette": "cream, beige, warm wood, sage green, soft black",
    "rendering": "soft 3D render + photograph composite",
    "mood": "biophilic design, sustainability, calm premium"
  }
}
```

### 何時選這個變體

- 家居 / 椅 / 鞋 / 餐具 類
- 強調可持續 / 環保 / 自然親和
- 不希望冷酷的"工業感"

## 變體 3：橫版三聯畫（左靈感 / 中產品 / 右技術）

適合橫屏展示 / agency 提案稿 hero 圖。

📝 提示詞

```json
{
  "type": "biomimetic concept poster horizontal triptych",
  "layout_override": {
    "format": "horizontal poster, 16:9 or 21:9",
    "structure": "3 vertical panels: left = biological inspiration column, center = hero product render, right = technical views stack",
    "evolution_strip": "vertical thin strip on the far left edge, 5 stages stacked top-to-bottom"
  },
  "use_case": "橫屏 deck / agency 提案首頁 / Behance project cover"
}
```

### 何時選這個變體

- 橫屏展示渠道
- 設計師 case study 項目封面
- 演講 / 提案稿首頁

## 避免事項

- ❌ 演化條 5 階段都是「最終產品的不同角度」→ 必須有「生物 → 抽象 → 產品」遞進
- ❌ hero 與技術視圖中產品的輪廓 / 比例不一致
- ❌ technical views 6 張全是渲染圖 → 至少 4 張應該是正交線稿，1 張是材質 detail crop
- ❌ footer text 寫成營銷語 → 應該是設計哲學 / 工程描述
- ❌ 用動漫 / 卡通風格畫工業產品（應使用 hyperreal 3D 或 blueprint）
- ❌ 把 emblem / logo 放成大字 → 應該是 ≤ headline 1/3 大小的小型徽章
- ❌ 全圖使用 6 種以上顏色（應控制在 3-4 主色 + 1 accent）

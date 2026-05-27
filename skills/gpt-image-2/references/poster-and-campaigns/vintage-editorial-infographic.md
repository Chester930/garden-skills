# 復古檔案 / 編輯式信息圖海報模板

本文件用於生成"以歷史人物 / 科學概念 / 經典理論爲主題，用 1940s Bell Labs 檔案 / 老報紙 / 藍圖 / 博物館出版物風格呈現"的復古信息圖海報。

典型用途：

- 科學家 / 思想家致敬海報（Shannon / Turing / Curie / 魯迅…）
- 經典理論可視化（信息論 / 量子力學 / 進化論）
- 課程 / 出版物 / 博物館教育海報
- 知識科普向 SNS / 朋友圈分享圖
- 復古風文創品 / 周邊周邊

特徵（與現有 poster / infographics 模板的區別）：

| 模板 | 風格 |
|---|---|
| `editorial-cover.md`（已有） | 現代雜誌封面 |
| `infographics/legend-heavy-infographic.md`（已有） | 高密度科普圖（現代或自然） |
| `infographics/bento-grid-infographic.md`（已有） | 便當格模塊化（現代） |
| **本模板**（新增） | **復古檔案 / 藍圖 / 老報紙 / 博物館教育海報** |

**關鍵詞**：1940s 風格、aged paper、ink linework、engraved portrait、navy + charcoal、measurement ticks、formula、archival stamp。

## 適用範圍

- 歷史人物 + 思想 / 理論 致敬海報
- 復古藍圖 / 老報紙 / 博物館出版物風教育圖
- 科學概念可視化（帶公式 / chart / 時間軸）
- 文創品 / 教育出版 / 學術致敬

## 何時使用

- 用戶提到"復古信息圖 / 致敬海報 / 老報紙風 / 藍圖風 / 博物館海報"
- 海報主題是歷史人物 / 經典理論
- 想要"高文字密度 + 復古質感"

不要使用：

- 現代扁平信息圖 → 用 `infographics/legend-heavy-infographic.md`
- 現代便當格 → 用 `infographics/bento-grid-infographic.md`
- 單純雜誌封面 → 用 `editorial-cover.md`
- 道教 / 神祕主義圖 → 走中式古典工筆（建議直接用自然語言，不強用本模板）

## 缺失信息優先提問順序

1. 主題人物 / 概念（Claude Shannon / Turing / 魯迅…）
2. 核心理論 / 公式 / 模型（決定中央圖示）
3. 歷史時期與檔案風格（**1940s Bell Labs / 1900 老報紙 / 復古藍圖 / 博物館出版物 / 學院手稿**）
4. 是否需要時間軸（影響理論的歷史脈絡）
5. 是否需要人物肖像（如不允許真人臉 → 用臉部遮擋塊 / 雕版剪影）
6. 比例（**16:9 橫版展板 / 3:4 豎版海報**）
7. 主語言（英 / 中 / 雙語）

## 主模板：復古檔案信息圖海報（人物 + 模型 + 公式 + 時間軸）

📖 描述

寬幅海報，左側檔案 sidebar + 中央 hero 模型 + 右側公式 box + 中下理論分區 + 底部時間軸，包含人物肖像 + 多種 chart + 復古紙張質感。

📝 提示詞

```json
{
  "type": "vintage editorial infographic poster",
  "goal": "生成一張復古檔案 / 1940s 出版物風格的科普海報，把人物 / 理論 / 公式 / 應用時間軸密集組合在一張圖裏",
  "subject": "{argument name=\"subject\" default=\"Claude Shannon and information theory\"}",
  "style": {
    "era": "{argument name=\"era\" default=\"1940s Bell Labs archival poster\"}",
    "look": "{argument name=\"paper look\" default=\"aged cream paper, blueprint drafting grid, thin ink linework, muted navy and charcoal printing, subtle stains and paper wear, technical illustration mixed with newspaper editorial design\"}",
    "rendering": "high-detail diagrammatic collage with engraved portrait, scientific charts, labeled panels, and hand-drawn signal graphics"
  },
  "poster": {
    "headline": "{argument name=\"headline\" default=\"Claude Shannon — The Architecture of Information\"}",
    "subheadline": "{argument name=\"subheadline\" default=\"How uncertainty became measurable, and communication became engineering.\"}",
    "topRightMeta": {
      "note": "{argument name=\"meta note\" default=\"NOTE TOSELF No. 6713–2\"}",
      "date": "{argument name=\"meta date\" default=\"MAY 1948\"}",
      "subject": "{argument name=\"meta subject\" default=\"A Mathematical Theory of Communication\"}"
    }
  },
  "layout": {
    "sections": [
      {
        "title": "left archival sidebar",
        "position": "far left vertical column",
        "count": 5,
        "labels": [
          "{argument name=\"sidebar 1\" default=\"BELL LABORATORIES MURRAY HILL, N.J.\"}",
          "{argument name=\"sidebar 2\" default=\"ENGINEERING THE INTANGIBLE\"}",
          "{argument name=\"sidebar 3\" default=\"CLAUDE E. SHANNON 1916–2001\"}",
          "{argument name=\"sidebar 4\" default=\"TOOLS OF THE INFORMATION AGE\"}",
          "{argument name=\"sidebar 5\" default=\"quote panel with hand-set type\"}"
        ]
      },
      {
        "title": "{argument name=\"model title\" default=\"THE COMMUNICATION MODEL\"}",
        "position": "upper middle wide panel",
        "count": 5,
        "labels": ["1 INFORMATION SOURCE", "2 ENCODER", "3 CHANNEL", "4 DECODER", "5 DESTINATION"]
      },
      {
        "title": "{argument name=\"formula title\" default=\"ENTROPY: THE MEASURE OF UNCERTAINTY\"}",
        "position": "upper right box",
        "count": 4,
        "labels": [
          "{argument name=\"formula\" default=\"H(X) = −Σ p(x) log2 p(x)\"}",
          "PROBABILITY DISTRIBUTION p(x)",
          "MORE EVEN → MORE MAXED UNCERTAINTY",
          "MORE LOPSIDED → LESS UNCERTAINTY"
        ]
      },
      {
        "title": "lower theory panels",
        "position": "middle to lower band",
        "count": 3,
        "labels": [
          "{argument name=\"theory A\" default=\"A ENTROPY — uncertainty before a message is known\"}",
          "{argument name=\"theory B\" default=\"B NOISE — randomness that corrupts transmission\"}",
          "{argument name=\"theory C\" default=\"C Redundancy & Error Correction — structure added so signals can survive failure\"}"
        ]
      },
      {
        "title": "{argument name=\"timeline title\" default=\"THEORY THAT TRANSFORMED CIVILIZATION\"}",
        "position": "bottom horizontal timeline",
        "count": 8,
        "labels": [
          "{argument name=\"era 1\" default=\"1840s TELEGRAPHY\"}",
          "{argument name=\"era 2\" default=\"1876+ TELEPHONE NETWORKS\"}",
          "{argument name=\"era 3\" default=\"1930s–40s DIGITAL COMPUTERS\"}",
          "{argument name=\"era 4\" default=\"1950s–60s SATELLITE COMMUNICATION\"}",
          "{argument name=\"era 5\" default=\"1970s INTERNET PROTOCOLS\"}",
          "{argument name=\"era 6\" default=\"1980s–90s DATA COMPRESSION\"}",
          "{argument name=\"era 7\" default=\"1990s–2000s CRYPTOGRAPHY\"}",
          "{argument name=\"era 8\" default=\"2010s+ AI & INFORMATION SYSTEMS\"}"
        ]
      }
    ],
    "centerpiece": "{argument name=\"centerpiece description\" default=\"a large abstract cloud of blue and gray signal noise, dots, lines, and waveforms behind the communication model, with arrows moving left to right through the five stages\"}"
  },
  "visualElements": {
    "portrait": {
      "subject": "{argument name=\"portrait subject\" default=\"Claude Shannon\"}",
      "placement": "left-center",
      "style": "{argument name=\"portrait style\" default=\"black-and-white archival seated portrait at a desk with the face intentionally obscured by a pale square censor block, wearing suit and tie, writing on paper\"}"
    },
    "objectsLeft": [
      "{argument name=\"object 1\" default=\"rotary telephone on desk\"}",
      "{argument name=\"object 2\" default=\"open notebook or papers\"}",
      "{argument name=\"object 3\" default=\"technical console with CRT screen and knobs behind portrait\"}",
      "{argument name=\"object 4\" default=\"small icon row of 4 tools: oscilloscope, signal meter, relay, punched tape\"}"
    ],
    "centerModel": [
      "book and symbols under source",
      "binary digits under encoder",
      "large noisy channel cloud with wave overlays",
      "binary digits and interpretation under decoder",
      "light bulb icon under destination"
    ],
    "chartsAndDiagrams": [
      "bar chart for entropy probabilities",
      "two low vs high entropy mini bar charts",
      "tree diagram and entropy notation",
      "signal distortion sketches labeled thermal noise / cross talk / distortion",
      "error-correction binary pipeline from original message to recovered message"
    ],
    "bottomDecor": ["small waveform legend with sine wave, digital signal, and noise", "archival stamp or footer on lower right"]
  },
  "color": {
    "background": "{argument name=\"paper color\" default=\"warm ivory paper\"}",
    "primaryInk": "{argument name=\"primary ink\" default=\"dark navy\"}",
    "secondaryInk": "{argument name=\"secondary ink\" default=\"charcoal gray\"}",
    "accent": "{argument name=\"accent ink\" default=\"faded steel blue\"}"
  },
  "composition": "symmetrical wide poster with dense boxed annotations, fine border lines, and a museum-quality educational infographic feel",
  "textDensity": "very high, with many small labels, formulas, captions, and historical notes in a carefully organized grid",
  "aspectRatio": "{argument name=\"aspect ratio\" default=\"16:9 landscape\"}",
  "constraints": {
    "must_keep": [
      "復古 1940s 印刷質感（aged paper / 網格 / 鋼筆線 / 墨色）",
      "公式 / 模型 / 時間軸 / 肖像 4 大元素全部出現且清晰可讀",
      "全圖配色嚴格控制在 ivory + 1 主墨色 + 1 副墨色 + 1 accent",
      "若使用真實人物，臉部用 censor block / 雕版剪影 / 模糊處理"
    ],
    "avoid": [
      "用現代扁平 icon / 漸變 → 立刻破壞復古質感",
      "公式寫錯或丟失 (LaTeX 字符須由 prompt 描述清楚)",
      "時間軸超過 8 節點導致每節點不可讀",
      "肖像區域過大壓垮信息密度（應 ≤ 25% 總面積）",
      "使用霓虹 / 熒光色"
    ]
  }
}
```

### 參數策略

- **必問**：subject、headline、formula / 模型 / 時間軸的具體內容
- **可默認**：era、paper look、portrait style、centerpiece description
- **可隨機**：sidebar 5 行小文案、bottom decor

### 自動補全策略

- 用戶給了主題人物 → 自動反推核心模型 / 公式 / 時間軸
- 不指定肖像處理 → 默認 censor block 遮臉（避免真人臉生成失敗）
- 不指定 paper / ink 色 → 用模板默認 ivory + navy + charcoal + steel blue

## 變體 1：中文學者 / 文人致敬版（魯迅 / 錢學森 / 沈括…）

📝 提示詞

```json
{
  "type": "vintage editorial infographic poster, Chinese scholar tribute edition",
  "subject": "{argument name=\"chinese subject\" default=\"魯迅與現代白話文運動\"}",
  "style_override": {
    "era": "1920s 中國新文化運動時期出版物",
    "look": "aged 米黃宣紙 with 雕版印刷 effect, 紅印泥 seal stamps, 豎排繁體或簡化中文 mixed with 英譯註釋",
    "ink": "墨黑 + 朱紅 + 灰青"
  },
  "language_override": "中文爲主 + 英文小注釋",
  "extra_elements": ["傳統印章", "豎排標題", "毛筆籤名", "線裝書邊框裝飾"]
}
```

### 何時選這個變體

- 中國學者 / 文人 / 歷史人物
- 教育 / 出版 / 文化致敬
- 想要「東方文人風」而非"西方檔案風"

## 變體 2：3:4 豎版精裝海報（適合印刷 / 文創售賣）

📝 提示詞

```json
{
  "type": "vintage editorial infographic poster, vertical print edition",
  "aspectRatio_override": "3:4 portrait poster",
  "layout_override": {
    "structure": "top hero portrait + middle theory section + bottom timeline; sidebar moved to bottom strip",
    "headline_position": "very top, large serif"
  },
  "use_case": "可作爲限量印刷海報 / 文創周邊產品"
}
```

### 何時選這個變體

- 文創售賣品（A2 / A3 印刷海報）
- 教育機構教室張貼
- 想做"可掛牆"成品

## 變體 3：博物館展板版（雙語，更教育）

📝 提示詞

```json
{
  "type": "museum exhibition panel infographic",
  "language": "bilingual (English + 主體語言)",
  "extra_sections": ["Acknowledgments / 致謝", "Further Reading / 延伸閱讀", "QR code square (museum app)"],
  "must_keep": ["所有標註雙語對照", "底部 acknowledgments / 資料來源 必須出現"]
}
```

### 何時選這個變體

- 真實博物館 / 展覽出版物
- 教育機構課程展板
- 學術致敬場景

## 避免事項

- ❌ 用漸變 / 霓虹 / 現代扁平 icon → 立即破壞復古感
- ❌ 把人物畫得過大、佔據 50%+ 面積 → 應該是模型 / 公式 / 時間軸佔主，肖像輔助
- ❌ 公式寫錯或丟公式（核心理論必須可讀）
- ❌ 時間軸節點 > 10 → 不可讀，應控制在 6-8
- ❌ 讓 GPT 生成真人臉 → 優先用 censor block / 雕版 / 模糊
- ❌ 只用一種字號 → 復古海報必須有 4-5 級 hierarchy
- ❌ 使用現代 web font（應描述爲 serif / hand-set / engraved type）
- ❌ 把主題人物名字拼錯（多次出現的名字必須在 prompt 中顯式 spell-out）

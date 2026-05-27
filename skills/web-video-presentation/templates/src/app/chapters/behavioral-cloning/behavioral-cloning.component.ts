import { Component, input, inject, effect, ViewChild, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { EditorService } from "../../services/editor.service";
import { DragResizeDirective } from "../../directives/drag-resize.directive";
import katex from "katex";


@Component({
  selector: "app-behavioral-cloning",
  standalone: true,
  imports: [CommonModule, DragResizeDirective],
  template: `
    <!-- 背景：警告紅或預設背景，隨步數平滑過渡 -->
    <div class="slide-background" [class.warning-state]="step() === 2"></div>

    <!-- Step 0: 開場 -->
    <div
      [class.active-block]="step() === 0"
      [appDragResize]="'title'"
      [step]="0"
      [style.left.px]="editor.getBlockX(0, 'title', 360)"
      [style.top.px]="editor.getBlockY(0, 'title', 360)"
      [style.width.px]="editor.getBlockW(0, 'title', 1200)"
      [style.height.px]="editor.getBlockH(0, 'title', 160)"
      class="slide-block main-title"
    >
      <h1
        [attr.contenteditable]="editor.isEditing() ? true : null"
        (blur)="onBlur($event, 0, 'title')"
        (keydown.enter)="$event.preventDefault(); $event.target.blur()"
        [innerHTML]="safeHtml(0, 'title', '模仿學習的瓶頸')"
      ></h1>
    </div>

    <div
      [class.active-block]="step() === 0"
      [appDragResize]="'subtitle'"
      [step]="0"
      [style.left.px]="editor.getBlockX(0, 'subtitle', 360)"
      [style.top.px]="editor.getBlockY(0, 'subtitle', 550)"
      [style.width.px]="editor.getBlockW(0, 'subtitle', 1200)"
      [style.height.px]="editor.getBlockH(0, 'subtitle', 80)"
      class="slide-block main-subtitle"
    >
      <p
        [attr.contenteditable]="editor.isEditing() ? true : null"
        (blur)="onBlur($event, 0, 'subtitle')"
        (keydown.enter)="$event.preventDefault(); $event.target.blur()"
        [innerHTML]="safeHtml(0, 'subtitle', '—— 為什麼機器人不能只靠模仿學習？')"
      ></p>
    </div>

    <!-- Step 1: 行為克隆定義 -->
    <div
      [class.active-block]="step() === 1"
      [appDragResize]="'formula_title'"
      [step]="1"
      [style.left.px]="editor.getBlockX(1, 'formula_title', 150)"
      [style.top.px]="editor.getBlockY(1, 'formula_title', 150)"
      [style.width.px]="editor.getBlockW(1, 'formula_title', 800)"
      [style.height.px]="editor.getBlockH(1, 'formula_title', 80)"
      class="slide-block section-title"
    >
      <h2
        [attr.contenteditable]="editor.isEditing() ? true : null"
        (blur)="onBlur($event, 1, 'formula_title')"
        (keydown.enter)="$event.preventDefault(); $event.target.blur()"
        [innerHTML]="safeHtml(1, 'formula_title', 'Behavioral Cloning')"
      ></h2>
    </div>

    <div
      [class.active-block]="step() === 1"
      [appDragResize]="'formula_desc'"
      [step]="1"
      [style.left.px]="editor.getBlockX(1, 'formula_desc', 150)"
      [style.top.px]="editor.getBlockY(1, 'formula_desc', 250)"
      [style.width.px]="editor.getBlockW(1, 'formula_desc', 750)"
      [style.height.px]="editor.getBlockH(1, 'formula_desc', 220)"
      class="slide-block desc-text"
    >
      <p
        [attr.contenteditable]="editor.isEditing() ? true : null"
        (blur)="onBlur($event, 1, 'formula_desc')"
        [innerHTML]="safeHtml(1, 'formula_desc', '')"
      ></p>
    </div>

    <div
      [class.active-block]="step() === 1"
      [appDragResize]="'formula'"
      [step]="1"
      [style.left.px]="editor.getBlockX(1, 'formula', 150)"
      [style.top.px]="editor.getBlockY(1, 'formula', 520)"
      [style.width.px]="editor.getBlockW(1, 'formula', 750)"
      [style.height.px]="editor.getBlockH(1, 'formula', 150)"
      class="slide-block formula-block"
    >
      <div
        *ngIf="editor.isEditing()"
        [attr.contenteditable]="true"
        (blur)="onBlur($event, 1, 'formula')"
        class="raw-latex-input"
        [innerHTML]="safeHtml(1, 'formula', '')"
      ></div>
      <div #formulaContainer class="math-render" [style.display]="editor.isEditing() ? 'none' : 'block'"></div>
    </div>

    <div
      [class.active-block]="step() === 1"
      [appDragResize]="'diagram'"
      [step]="1"
      [style.left.px]="editor.getBlockX(1, 'diagram', 1050)"
      [style.top.px]="editor.getBlockY(1, 'diagram', 180)"
      [style.width.px]="editor.getBlockW(1, 'diagram', 700)"
      [style.height.px]="editor.getBlockH(1, 'diagram', 680)"
      class="slide-block diagram-card"
    >
      <pre
        [attr.contenteditable]="editor.isEditing() ? true : null"
        (blur)="onBlur($event, 1, 'diagram')"
        [innerHTML]="safeHtml(1, 'diagram', '')"
      ></pre>
    </div>

    <!-- Step 2: 致命缺陷（分佈偏移） -->
    <div
      [class.active-block]="step() === 2"
      [appDragResize]="'warn_title'"
      [step]="2"
      [style.left.px]="editor.getBlockX(2, 'warn_title', 200)"
      [style.top.px]="editor.getBlockY(2, 'warn_title', 150)"
      [style.width.px]="editor.getBlockW(2, 'warn_title', 1520)"
      [style.height.px]="editor.getBlockH(2, 'warn_title', 100)"
      class="slide-block section-title warning-title"
    >
      <h2
        [attr.contenteditable]="editor.isEditing() ? true : null"
        (blur)="onBlur($event, 2, 'warn_title')"
        (keydown.enter)="$event.preventDefault(); $event.target.blur()"
        [innerHTML]="safeHtml(2, 'warn_title', '')"
      ></h2>
    </div>

    <div
      [class.active-block]="step() === 2"
      [appDragResize]="'warn_desc'"
      [step]="2"
      [style.left.px]="editor.getBlockX(2, 'warn_desc', 200)"
      [style.top.px]="editor.getBlockY(2, 'warn_desc', 280)"
      [style.width.px]="editor.getBlockW(2, 'warn_desc', 850)"
      [style.height.px]="editor.getBlockH(2, 'warn_desc', 320)"
      class="slide-block desc-text"
    >
      <p
        [attr.contenteditable]="editor.isEditing() ? true : null"
        (blur)="onBlur($event, 2, 'warn_desc')"
        [innerHTML]="safeHtml(2, 'warn_desc', '')"
      ></p>
    </div>

    <div
      [class.active-block]="step() === 2"
      [appDragResize]="'diagram_collapse'"
      [step]="2"
      [style.left.px]="editor.getBlockX(2, 'diagram_collapse', 1150)"
      [style.top.px]="editor.getBlockY(2, 'diagram_collapse', 280)"
      [style.width.px]="editor.getBlockW(2, 'diagram_collapse', 570)"
      [style.height.px]="editor.getBlockH(2, 'diagram_collapse', 500)"
      class="slide-block collapse-card"
    >
      <div class="collapse-graphic">
        <div class="pendulum" [class.collapse-anim]="step() === 2"></div>
      </div>
      <pre
        [attr.contenteditable]="editor.isEditing() ? true : null"
        (blur)="onBlur($event, 2, 'diagram_collapse')"
        [innerHTML]="safeHtml(2, 'diagram_collapse', '')"
      ></pre>
    </div>

    <!-- Step 3: 解決方案（強化學習） -->
    <div
      [class.active-block]="step() === 3"
      [appDragResize]="'rl_title'"
      [step]="3"
      [style.left.px]="editor.getBlockX(3, 'rl_title', 200)"
      [style.top.px]="editor.getBlockY(3, 'rl_title', 120)"
      [style.width.px]="editor.getBlockW(3, 'rl_title', 1520)"
      [style.height.px]="editor.getBlockH(3, 'rl_title', 120)"
      class="slide-block section-title accent-title"
    >
      <h2
        [attr.contenteditable]="editor.isEditing() ? true : null"
        (blur)="onBlur($event, 3, 'rl_title')"
        (keydown.enter)="$event.preventDefault(); $event.target.blur()"
        [innerHTML]="safeHtml(3, 'rl_title', '')"
      ></h2>
    </div>

    <div
      [class.active-block]="step() === 3"
      [appDragResize]="'rl_tag1'"
      [step]="3"
      [style.left.px]="editor.getBlockX(3, 'rl_tag1', 200)"
      [style.top.px]="editor.getBlockY(3, 'rl_tag1', 320)"
      [style.width.px]="editor.getBlockW(3, 'rl_tag1', 720)"
      [style.height.px]="editor.getBlockH(3, 'rl_tag1', 500)"
      class="slide-block solution-card"
    >
      <div class="solution-icon">✨</div>
      <pre
        [attr.contenteditable]="editor.isEditing() ? true : null"
        (blur)="onBlur($event, 3, 'rl_tag1')"
        [innerHTML]="safeHtml(3, 'rl_tag1', '')"
      ></pre>
    </div>

    <div
      [class.active-block]="step() === 3"
      [appDragResize]="'rl_tag2'"
      [step]="3"
      [style.left.px]="editor.getBlockX(3, 'rl_tag2', 1000)"
      [style.top.px]="editor.getBlockY(3, 'rl_tag2', 320)"
      [style.width.px]="editor.getBlockW(3, 'rl_tag2', 720)"
      [style.height.px]="editor.getBlockH(3, 'rl_tag2', 500)"
      class="slide-block solution-card"
    >
      <div class="solution-icon">🔄</div>
      <pre
        [attr.contenteditable]="editor.isEditing() ? true : null"
        (blur)="onBlur($event, 3, 'rl_tag2')"
        [innerHTML]="safeHtml(3, 'rl_tag2', '')"
      ></pre>
    </div>
  `,
  styleUrls: ["./behavioral-cloning.component.css"],
})
export class BehavioralCloningComponent {
  readonly step = input.required<number>();
  readonly editor = inject(EditorService);
  private readonly sanitizer = inject(DomSanitizer);
  // 快取 SafeHtml：只有底層文字實際改變時才回傳新物件
  // 相同 reference 讓 Angular 跨過 DOM 更新，避免打斷文字選取
  private htmlCache = new Map<string, { raw: string; safe: SafeHtml }>();

  @ViewChild("formulaContainer") formulaContainer!: ElementRef;

  constructor() {
    effect(() => {
      const step = this.step();
      const formulaText = this.editor.getBlockText(step, "formula", "");
      const el = this.formulaContainer?.nativeElement;
      if (el && formulaText) {
        try {
          katex.render(formulaText, el, { throwOnError: false, displayMode: true });
        } catch (err) {
          el.innerText = formulaText;
        }
      }
    });
  }

  onBlur(e: FocusEvent, stepIdx: number, blockId: string) {
    // 用 innerHTML 保留顏色/字級等 HTML 格式標籤
    const text = (e.target as HTMLElement).innerHTML;
    this.editor.updateBlockLayout(stepIdx, blockId, { text });
  }

  /** 將儲存的 HTML 字串包裝成 Angular 信任的 SafeHtml 以支援 [innerHTML] binding
   *  內建 Map 快取：相同內容回傳相同 reference，避免不必要的 DOM 重漪 */
  safeHtml(stepIdx: number, blockId: string, defaultVal: string): SafeHtml {
    const raw = this.editor.getBlockText(stepIdx, blockId, defaultVal);
    const key = `${stepIdx}-${blockId}`;
    const cached = this.htmlCache.get(key);
    if (cached && cached.raw === raw) return cached.safe;
    const safe = this.sanitizer.bypassSecurityTrustHtml(raw);
    this.htmlCache.set(key, { raw, safe });
    return safe;
  }
}

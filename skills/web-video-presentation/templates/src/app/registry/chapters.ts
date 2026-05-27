import type { ChapterDef } from "./types";
import { BehavioralCloningComponent } from "../chapters/behavioral-cloning/behavioral-cloning.component";
import { narrations as bcNarrations } from "../chapters/behavioral-cloning/narrations";
import bcLayout from "../chapters/behavioral-cloning/layout.json";

export const CHAPTERS: ChapterDef[] = [
  {
    id: "behavioral-cloning",
    title: "行為克隆與分佈偏移",
    narrations: bcNarrations,
    layout: bcLayout,
    component: BehavioralCloningComponent,
  },
];

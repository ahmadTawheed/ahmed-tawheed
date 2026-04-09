// types/index.ts
import { StaticImageData } from "next/image";

export type ProjectCategory = "web" | "mobile" | "dashboard" | "frontend";

export interface Project {
  id: number;
  category: ProjectCategory;
  titleKey: string; 
  descKey: string;
  image: StaticImageData | string;
  tools: string[];
  link?: string;
  videoLink?: string;
}
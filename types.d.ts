import type { LucideIcon } from "lucide-react";

export interface Stats {
  icon: LucideIcon;
  value: string;
  label: string;
  hasBorder?: boolean;
}

export interface SectionHeaderProps {
  title: string,
  icon: LucideIcon,
  description: string
}

export interface ProductDemo {
  id: number,
  name: string,
  description: string,
  tags: string[],
  votes: number,
  isFeatured: boolean
}
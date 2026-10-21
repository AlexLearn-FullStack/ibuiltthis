import type { LucideIcon } from "lucide-react";

export interface Stats {
  icon: LucideIcon;
  value: string;
  label: string;
  hasBorder?: boolean;
}
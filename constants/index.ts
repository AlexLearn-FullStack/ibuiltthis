import { EyeIcon, RocketIcon, UsersIcon } from "lucide-react";
import type { Stats } from "@/types";


const statsData: Stats[] = [
  {
    icon: RocketIcon,
    value: "2.5k+",
    label: "Projects Shared"
  },
  {
    icon: UsersIcon,
    value: "10k+",
    label: "Active Creators",
    hasBorder: true
  },
  {
    icon: EyeIcon,
    value: "50k+",
    label: "Monthly Visitors",
  },
]


export {
  statsData
}
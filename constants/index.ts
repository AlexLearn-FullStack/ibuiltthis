import { EyeIcon, RocketIcon, UsersIcon } from "lucide-react";
import type { ProductDemo, Stats } from "@/types";


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

const featuredProducts: ProductDemo[] = [
  {
    id: 1,
    name: "ParityKit",
    description: "A toolkit for creating parity products",
    tags: ['SaaS', 'Pricing', 'Global'],
    votes: 615,
    isFeatured: true
  },
  {
    id: 2,
    name: "Modern Full-stack Next.js Course",
    description: "Learn to build modern production-ready full stack apps with Next.js",
    tags: ['Next.js', 'Full-stack', 'Course'],
    votes: 134,
    isFeatured: false
  },
  {
    id: 3,
    name: "Pamoja App",
    description: "Share moments and photos in one place",
    tags: ['SaaS', 'Community', 'Moments'],
    votes: 257,
    isFeatured: true
  },
]


export {
  statsData,
  featuredProducts
}
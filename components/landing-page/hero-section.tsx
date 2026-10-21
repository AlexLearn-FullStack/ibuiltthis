import { ArrowRightIcon, SparkleIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { statsData } from "@/constants";
import StatsCard from "./stats-card";


export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20"
    >
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
          <Badge
            variant="outline"
            className="p-2 sm:px-4 sm:py-2 mb-8 text-xs backdrop-blur-sm max-[360px]:hidden"
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2 bg-primary"
              />
            </span>
            <span className="text-muted-foreground lowercase">
              Join thousands of creators sharing their works
            </span>
          </Badge>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl"            
          >Share what you've built, discover what's launching</h1>

          <p
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            A community platform for creators to showcase their apps, AI tools, SaaS
            products, and creative projects. Authentic launches, real builders,
            genuine feedback.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="text-base px-8 shadow-lg flex"
            >
              <Link
                href="/submit"
                className="flex gap-2 justify-center items-center capitalize"
              >
                <SparkleIcon className="size-5" />
                <span>Share Your Project</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="text-base px-8 shadow-lg flex"
            >
              <Link
                href="/explore"
                className="flex gap-2 justify-center items-center capitalize"
              >
                <span>Explore Projects</span>
                <ArrowRightIcon className="size-5" />
              </Link>
            </Button>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full"
          >
            {
              statsData.map(
                (stat) => (
                  <StatsCard key={stat.label} { ...stat } />
                )
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
}

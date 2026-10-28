import Link from "next/link";
import { Suspense } from "react";
import { Show } from "@clerk/nextjs";
import { buttonVariants } from "./ui/button";
import CustomUserBtn from './custom-user-btn';
import AuthLinks from "./auth-links";
import { Skeleton } from "./ui/skeleton";
import {
  CompassIcon, Home,
  SparkleIcon
} from "lucide-react";


export default function Header () {
  
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper">
        <div className="flex h-14 items-center justify-between gap-2 sm:h-16 sm:gap-4">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-1.5 sm:gap-2"
          >
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary sm:size-8">
              <SparkleIcon className="size-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-sm sm:text-xl">
              i<span className="text-primary">Made</span>This
            </span>
          </Link>

          <nav className="flex shrink-0 items-center gap-0.5 sm:gap-1">
            <Link
              href="/"
              aria-label="Home"
              aria-describedby="home-tooltip"
              className="group relative flex flex-col items-center gap-1 px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground lg:flex-row lg:gap-2 lg:px-3 lg:text-sm"
            >
              <Home className="size-4" />
              <span className="hidden md:inline">Home</span>
              <span
                role="tooltip"
                id="home-tooltip"
                className="invisible pointer-events-none absolute left-1/2 top-full z-50 mt-1 -translate-x-1/2 whitespace-nowrap rounded-md border bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-md transition-opacity group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100 md:hidden"
              >
                Home
              </span>
            </Link>

            <Link
              href="/explore"
              aria-label="Explore"
              aria-describedby="explore-tooltip"
              className="group relative flex flex-col items-center gap-1 px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground lg:flex-row lg:gap-2 lg:px-3 lg:text-sm"
            >
              <CompassIcon className="size-4" />
              <span className="hidden md:inline">Explore</span>
              <span
                role="tooltip"
                id="explore-tooltip"
                className="invisible pointer-events-none absolute left-1/2 top-full z-50 mt-1 -translate-x-1/2 whitespace-nowrap rounded-md border bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-md transition-opacity group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100 md:hidden"
              >
                Explore
              </span>
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <Suspense>
              <Show when="signed-in">
                <Link
                  href="/submit"
                  className={buttonVariants({
                    className:
                      "h-8 gap-1 px-2 text-[0.65rem] tracking-wide cursor-pointer sm:h-9 sm:gap-1.5 sm:px-4 sm:text-xs sm:tracking-widest",
                  })}
                >
                  <SparkleIcon className="hidden size-4 sm:inline" />
                  <span className="sm:hidden capitalize">Submit</span>
                  <span className="hidden capitalize sm:inline">
                    Submit Project
                  </span>
                </Link>

                <Suspense
                  fallback={<Skeleton className="size-7 rounded-full" />}
                >
                  <CustomUserBtn />
                </Suspense>
              </Show>

              <Show when="signed-out">
                <Suspense fallback={<AuthLinks disabled />}>
                  <AuthLinks />
                </Suspense>
              </Show>
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}
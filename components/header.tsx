import Link from "next/link";
import { Suspense } from "react";
import { Button, buttonVariants } from "./ui/button";
import CustomUserBtn from './custom-user-btn';
import {
  Show, SignInButton,
  SignUpButton
} from "@clerk/nextjs";
import {
  CompassIcon, Home,
  SparkleIcon
} from "lucide-react";


export default function Header () {
  
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper px-12">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <SparkleIcon className="size-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">
              i<span className="text-primary">Made</span>This
            </span>
          </Link>

          <nav className="flex items-center gap-1">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
            >
              <Home className="size-4" />
              <span>Home</span>
            </Link>

            <Link
              href="/explore"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
            >
              <CompassIcon className="size-4" />
              <span>Explore</span>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Suspense>
              <Show when="signed-in">
                <Link
                  href="/submit"
                  className={buttonVariants({
                    className: "flex gap-1.5 capitalize cursor-pointer",
                  })}
                >
                  <SparkleIcon className="size-4" />
                  <span>Submit Project</span>
                </Link>
                
                <CustomUserBtn />
              </Show>

              <Show when="signed-out">
                <SignInButton>
                  <Button variant="outline" className="cursor-pointer">
                    Sign In
                  </Button>
                </SignInButton>

                <SignUpButton>
                  <Button className="cursor-pointer">
                    Sign Up
                  </Button>
                </SignUpButton>
              </Show>
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}
import Link from "next/link";
import { SparkleIcon } from "lucide-react";


const year = new Date().getFullYear();

export default function Footer () {
  
  return (
    <footer className="border-t bg-muted/20 py-12 pb-6">
      <section className="wrapper">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row justify-between gap-6">
            <div className="max-[640px]:flex max-[640px]:items-center max-[640px]:justify-center">
              <Link
                href="/"
                className="flex items-center gap-2 group w-fit"
              >
                <div
                  className="size-8 rounded-lg bg-primary items-center justify-center hidden sm:flex"
                >
                  <SparkleIcon className="size-4 text-primary-foreground" />
                </div>
                <span className="text-sm sm:text-xl font-bold">
                  i<span className="text-primary">Made</span>This
                </span>
              </Link>
              <p className="mt-3 text-muted-foreground text-sm hidden sm:block">
                A community platform where creators share what they've built and discover new launches.
              </p>
            </div>

            <div>
              <h4 className="font-bold sm:text-lg">Product</h4>

              <ul className="list-none mt-3 flex flex-col gap-2 text-muted-foreground text-sm">
                <li>
                  <Link href="/explore">Explore</Link>
                </li>
                <li>
                  <Link href="/">Trending</Link>
                </li>
                <li>
                  <Link href="/submit">Submit&nbsp;Project</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold sm:text-lg">Company</h4>

              <ul className="list-none mt-3 flex flex-col gap-2 text-muted-foreground text-sm">
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
                <li>
                  <Link href="/">Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6">
            <p className="text-xs text-muted-foreground">
              &copy;{ year } iMadeThis. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}
import Link from "next/link";
import { buttonVariants } from "./ui/button";

type LinksProp = {
  disabled?: boolean
}


const AuthLinks = ({ disabled }: LinksProp) => (
  <>
    <Link
      href="/sign-in"
      aria-disabled={disabled}
      className={buttonVariants({
        variant: "outline",
        className: "hidden sm:flex gap-2 border-border!",
      })}
    >
      Sign In
    </Link>

    <Link
      href="/sign-up"
      aria-disabled={disabled}
      className={buttonVariants({
        className: "hidden sm:flex gap-2",
      })}
    >
      Sign Up
    </Link>
  </>
);


export default AuthLinks;
import { Suspense } from "react";
import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-appearance";



export default function Signup() {
  return (
    <Suspense>
      <main className="flex min-h-[calc(100svh-4rem)] items-center justify-center px-4 py-12">
        <SignUp
          appearance={clerkAppearance}
          fallbackRedirectUrl="/"
          signInUrl="/sign-in"
        />
      </main>
    </Suspense>
  );
}
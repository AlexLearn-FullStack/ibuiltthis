import { Suspense } from "react";
import { SignIn } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-appearance";


export default function Signin () {
  return (
    <Suspense>
      <main className="flex min-h-[calc(100svh-4rem)] items-center justify-center px-4 py-12">
        <SignIn
          appearance={clerkAppearance}
          fallbackRedirectUrl="/"
          signUpUrl="/sign-up"
        />
      </main>
    </Suspense>
  );
}
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toast";


const outfit = Outfit({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "iMadeThis",
  description: "A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
        <body
          className={cn("h-full", "antialiased", outfit.className)}
          >
          <ClerkProvider>
            <Header />

            {children}
            
            <Footer />
            <Toaster />
          </ClerkProvider>
        </body>
      </html>
  );
}
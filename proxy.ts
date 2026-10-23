import { clerkMiddleware } from "@clerk/nextjs/server";


export default clerkMiddleware();

export const config = {
  matcher: [
    // Copy content from clerk docs
  ],
};
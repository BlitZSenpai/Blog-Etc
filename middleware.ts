import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/api/edgestore/init"]);

/**
 * Middleware for authentication handling in Next.js.
 * @param { MiddlewareAuth } config - Configuration for the authentication middleware.
 * @returns { MiddlewareAuthContext } - Middleware context for authentication.
 */
export default clerkMiddleware((auth, request) => {
  if (isPublicRoute(request)) return;
  auth().protect({
    unauthenticatedUrl: `${process.env.NEXT_PUBLIC_APP_URL}/sign-in?redirect=${request.nextUrl.href}`,
  });
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

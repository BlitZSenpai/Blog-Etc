import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bob",
  description: "A Blog website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={cn("grainy", inter.className)}>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

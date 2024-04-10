import { EdgeStoreProvider } from "@/lib/edgestore";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import TopLoader from "@/components/ui/top-loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wrapped",
  description: "A Blog website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={cn(inter.className)}>
          <EdgeStoreProvider>
            <TopLoader />
            <Toaster theme="light" position="bottom-center" />
            {children}
          </EdgeStoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

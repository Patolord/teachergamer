import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./convex-client-provider";
import Sidebar from "@/components/Sidebar";
import Radar from "@/components/Radar";
import { SectionProvider } from "@/contexts/SectionContext";
import TailwindIndicator from "@/components/TailwindIndicator";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <ConvexClientProvider>
          <SectionProvider>
            {/* Sidebar - Fixed overlay on left, hidden on small screens */}
            <div className="hidden lg:block fixed left-0 top-0 bottom-0 w-[240px] pointer-events-none z-50">
              <Sidebar />
            </div>

            {/* Radar - Fixed overlay */}
            <div className="fixed inset-0 pointer-events-none z-50">
              <Radar />
            </div>

            {/* Main Content - Backgrounds full width, content respects sidebar */}
            {children}
            <TailwindIndicator />
          </SectionProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}

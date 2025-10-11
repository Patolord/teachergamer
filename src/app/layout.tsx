import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./convex-client-provider";
import Sidebar from "@/components/Sidebar";
import Radar from "@/components/Radar";
import { SectionProvider } from "@/contexts/SectionContext";

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
            {/* GUI Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50">
              <Radar />
              <Sidebar />
            </div>

            {/* Main Content */}
            {children}
          </SectionProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}

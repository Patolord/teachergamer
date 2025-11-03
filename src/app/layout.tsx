import type { Metadata } from "next";
import "./globals.css";
import { ConditionalTopbar } from "@/components/ConditionalTopbar";
import { ConfigProvider } from "@/contexts/config";

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
      <body className="bg-white text-black">
        <ConfigProvider>
          <ConditionalTopbar />
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}

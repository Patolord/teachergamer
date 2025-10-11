import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./convex-client-provider";

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
      <body className="bg-black text-white flex justify-center items-center h-screen">
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}

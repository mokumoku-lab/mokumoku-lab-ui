import Header from "@/components/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "プログラミングクラブ モクモクラボ",
  description: "静岡県伊東市の本格プログラミングクラブです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body suppressHydrationWarning={true} className="bg-gray-200">
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
}

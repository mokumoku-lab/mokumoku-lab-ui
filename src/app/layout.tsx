import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "プログラミングクラブ モクモクラボ",
  description: "静岡県伊東市の本格プログラミングクラブです。",
  robots: "noindex,nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body suppressHydrationWarning={true} className="bg-zinc-100">
        <Header></Header>
        <Navigation></Navigation>
        <main>{children}</main>
      </body>
    </html>
  );
}

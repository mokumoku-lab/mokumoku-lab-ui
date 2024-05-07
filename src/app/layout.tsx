import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Favicon from "@/assets/metadata/favicon/favicon.ico";
import Favicon16x16 from "@/assets/metadata/favicon/favicon-16x16.png";
import Favicon32x32 from "@/assets/metadata/favicon/favicon-32x32.png";
import SafariPinnedTab from "@/assets/metadata/favicon/safari-pinned-tab.svg";
import AppleTouchIcon from "@/assets/metadata/favicon/apple-touch-icon.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "モクモクラボ",
  description: "静岡県伊東市の本格プログラミングクラブです。",
  icons: {
    shortcut: { url: Favicon.src, type: "image/x-icon" },
    icon: [
      { rel: "icon", url: Favicon.src },
      { rel: "icon", sizes: "16x16", url: Favicon16x16.src },
      { rel: "icon", sizes: "32x32", url: Favicon32x32.src },
      { rel: "mask-icon", url: SafariPinnedTab.src, color: "#5bbad5" },
      { rel: "apple-touch-icon", sizes: "180x180", url: AppleTouchIcon.src },
    ],
  },
  themeColor: "#ffffff",
  other: {
    "msapplication-TileColor": "#da532c",
  },
  robots: "noindex,nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body suppressHydrationWarning={true} className="bg-zinc-100">
        <Header></Header>
        <Navigation></Navigation>
        <main>{children}</main>
      </body>
    </html>
  );
}

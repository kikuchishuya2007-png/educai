import type { Metadata } from "next";
import { Hanken_Grotesk, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "educai | 教育とAIで、学びと事業の可能性を広げる",
    template: "%s — educai",
  },
  description:
    "educaiは、受託開発、AI研修、教育領域の自社アプリ開発を行うテクノロジーカンパニーです。AI技術と教育の知見を掛け合わせ、企業と教育現場の課題解決に取り組みます。",
  openGraph: {
    siteName: "educai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${hanken.variable} ${noto.variable}`}>
      <body>{children}</body>
    </html>
  );
}

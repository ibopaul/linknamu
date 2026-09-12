import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김승현 | 링크나무",
  description: "김승현의 링크 모음",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TripDice — sketch",
  description: "여행 주사위 맵 웹 데모 와이어 스케치",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="mx-auto w-full max-w-[900px] flex-1 px-4 py-6 sm:px-6">
          <header className="mb-6 border-b border-dashed border-[var(--wire)] pb-4">
            <p className="wire-label">tripdice / wireframe · landscape lobby</p>
            <p className="mt-1 text-sm text-[var(--wire-strong)]">
              마블류 로비 문법 · 구역만 · 비주얼은 Tripo 예정
            </p>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}

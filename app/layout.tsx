import type { Metadata } from "next";
import { Mulish, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import NextTopLoader from "nextjs-toploader";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-mulish",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfairDisplay",
  display: "swap",
});

export const metadata: Metadata = {
  title: "iMovn - Giải Pháp Marketing Online Toàn Diện",
  description:
    "iMovn Cung Cấp Các Giải Pháp Marketing Online Bài bản Từ Thiết Kế Bộ Nhận Diện Thương Hiệu, Website, App Mobile Đến SEO và Quảng Bá Google.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning={true}>
      <body
        className={`${mulish.variable} ${playfairDisplay.variable} font-sans`}
      >
        <NextTopLoader
          color="linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))"
          height={1}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

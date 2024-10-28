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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3002"
  ),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  title: {
    default: "iMovn - Giải Pháp Marketing Online Toàn Diện",
    template: "%s | iMovn Co., ltd",
  },
  description:
    "iMovn Cung Cấp Các Giải Pháp Marketing Online Bài bản Từ Thiết Kế Bộ Nhận Diện Thương Hiệu, Website, App Mobile Đến SEO và Quảng Bá Google.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN,
  },
  publisher: "Trương Thanh Hưng",
  authors: [
    {
      name: "Trương Thanh Hưng",
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/@truongthanhhung`,
    },
  ],
  openGraph: {
    title: "iMovn - Giải Pháp Marketing Online Toàn Diện",
    description:
      "iMovn Cung Cấp Các Giải Pháp Marketing Online Bài bản Từ Thiết Kế Bộ Nhận Diện Thương Hiệu, Website, App Mobile Đến SEO và Quảng Bá Google.",
    type: "website",
    phoneNumbers: "0902 226 119",
    locale: "vi-VN",
    url: process.env.NEXT_PUBLIC_DOMAIN,
    siteName: "iMovn - Giải Pháp Marketing Online Toàn Diện",
    images: [
      {
        url: "/imo-marketing-online.jpg", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "iMovn - Giải Pháp Marketing Online Toàn Diện",
      },
    ],
  },
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
        <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

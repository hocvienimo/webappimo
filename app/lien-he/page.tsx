import React from "react";
import { Metadata } from "next";
import ContactPage from "./MainContact";

export const metadata: Metadata = {
  title: "Liên Hệ iMovn",
  description:
    "iMovn - Đối Tác Đáng Tin Cậy Cho Giải Pháp Thiết Kế Website, Lập Trình Ứng Dụng Di Động và Marketing Online Đa Kênh trong và ngoài nước tại Việt Nam.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/lien-he`,
  },
  openGraph: {
    title: "Liên Hệ iMovn",
    description:
      "iMovn - Đối Tác Đáng Tin Cậy Cho Giải Pháp Thiết Kế Website, Lập Trình Ứng Dụng Di Động và Marketing Online Đa Kênh trong và ngoài nước tại Việt Nam.",
    type: "website",
    phoneNumbers: "0902 226 119",
    locale: "vi-VN",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/lien-he`,
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

const page = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default page;

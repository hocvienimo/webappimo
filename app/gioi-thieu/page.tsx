import InfoBox from "@/components/customs/InfoBox";
import Services from "@/components/customs/Services";
import Testimonial from "@/components/customs/Testimonial";
import AboutUs from "./AboutUs";
import Achievement from "./Achievement";
import Header from "./Header";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới Thiệu iMovn",
  description:
    "iMovn - Đối Tác Đáng Tin Cậy Cho Giải Pháp Thiết Kế Website, Lập Trình Ứng Dụng Di Động và Marketing Online Đa Kênh trong và ngoài nước tại Việt Nam.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/gioi-thieu`,
  },
  openGraph: {
    title: "Giới Thiệu iMovn",
    description:
      "iMovn - Đối Tác Đáng Tin Cậy Cho Giải Pháp Thiết Kế Website, Lập Trình Ứng Dụng Di Động và Marketing Online Đa Kênh trong và ngoài nước tại Việt Nam.",
    type: "website",
    phoneNumbers: "0902 226 119",
    locale: "vi-VN",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/gioi-thieu`,
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
    <main className="mt-20">
      <Header />
      <AboutUs />
      <Achievement />
      <Services />
      <InfoBox />
      <Testimonial />
    </main>
  );
};

export default page;

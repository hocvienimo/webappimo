import React from "react";
import Header from "./containers/Header";
import Info from "./containers/Info";
import Benefits from "./containers/Benefit";
import AboutUs from "../components/AboutComponent";
import StepProcess from "./containers/StepProcess";
import PartnerLogos from "./containers/PartnerLogos";
import Commit from "./containers/Commit";
import PricingTable from "./containers/Prices";
import VpsHost from "./containers/VpsHost";
import FaqsItem from "./containers/Faqs";
import Testimonial from "../containers/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thiết Kế & Lập Trình App Di Động Theo Yêu Cầu",
  description:
    "iMovn - Đối Tác Đáng Tin Cậy Cho Giải Pháp Thiết Kế Website, Lập Trình Ứng Dụng Di Động và Marketing Online Đa Kênh trong và ngoài nước tại Việt Nam.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/lap-trinh-app-mobile`,
  },
  openGraph: {
    title: "Thiết Kế & Lập Trình App Di Động Theo Yêu Cầu",
    description:
      "iMovn - Đối Tác Đáng Tin Cậy Cho Giải Pháp Thiết Kế Website, Lập Trình Ứng Dụng Di Động và Marketing Online Đa Kênh trong và ngoài nước tại Việt Nam.",
    type: "website",
    phoneNumbers: "0902 226 119",
    locale: "vi-VN",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/lap-trinh-app-mobile`,
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
    <main className="mt-20 overflow-hidden">
      <Header />
      <Info />
      <section className="container">
        <Benefits />
      </section>
      <AboutUs />
      <PartnerLogos />
      <StepProcess />
      <Commit />
      <PricingTable />
      <VpsHost />
      <Testimonial />
      <FaqsItem />
    </main>
  );
};

export default page;

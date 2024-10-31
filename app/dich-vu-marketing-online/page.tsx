import React from "react";
import Services from "@/components/customs/Services";
import Testimonial from "@/components/customs/Testimonial";
import Header from "./containers/Header";

const page = () => {
  return (
    <main className="mt-20">
      <Header />
      <Services />
      <Testimonial />
    </main>
  );
};

export default page;

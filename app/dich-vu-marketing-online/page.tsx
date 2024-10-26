import React from "react";
import Services from "../containers/Services";
import Testimonial from "../containers/Testimonial";
import Header from "../containers/Header";

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

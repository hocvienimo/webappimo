import InfoBox from "../containers/InfoBox";
import Services from "../containers/Services";
import Testimonial from "../containers/Testimonial";
import AboutUs from "./AboutUs";
import Achievement from "./Achievement";
import Header from "./Header";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About",
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

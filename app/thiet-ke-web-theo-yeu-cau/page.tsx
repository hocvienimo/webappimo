import React from "react";
import Header from "./containers/Header";
import Info from "./containers/Info";
import Benefits from "./containers/Benefit";
import AboutUs from "../components/AboutComponent";
import StepProcess from "./containers/StepProcess";
import PartnerLogos from "./containers/PartnerLogos";
import Commit from "./containers/Commit";
import PricingTable from "./containers/Prices";
//import FaqsItem from './containers/Faqs'

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
      {/* <FaqsItem/> */}
      <StepProcess />
      <Commit />
      <PricingTable />
    </main>
  );
};

export default page;

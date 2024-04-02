"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AccordionItem from "@/components/Accordion/accordionItems";
import AccordionData from "@/components/Accordion/index";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="FAQ "
        description="Check out our frequenttly asked questions"
      />
      <div>
        <AccordionData />
      </div>
    </>
  );
};

export default AboutPage;

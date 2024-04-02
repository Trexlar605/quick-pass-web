import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Courses"
        description="The school offers driving lessons for a variety of vehicles. We offer lessons in days from a minimum of 10 days' lesson to a maximum of 40 days per person"
      />
      <Pricing />
    </>
  );
};

export default AboutPage;

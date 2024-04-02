import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="bg-beige py-6 md:py-6 lg:py-6">
        <div className="container">
          <SectionTitle
            title="Why Quick Pass"
            paragraph="At Quick Pass, we believe in more than just teaching driving skills; we prioritize safety, confidence, and lifelong habits. Here's why choosing us sets you on the path to success behind the wheel."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 ">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

import { useState } from "react";
import React from "react";
import AccordionItem from "./accordionItems";

export default function index() {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const AccordionData = [
    {
      title: " How do I enroll in driving lessons?",
      desc: "To enroll, simply visit our website or contact us directly through phone or email. Our staff will assist you in scheduling your lessons and providing necessary information.",
    },
    {
      title: "What are the requirements for enrolling in driving lessons?",
      desc: "Generally, you need to be of legal driving age in your area and possess a valid learner's permit or driver's license. Specific requirements may vary by location, so it's best to contact us for detailed information.",
    },
    {
      title:
        "Is there a minimum age requirement for enrolling in driving lessons?",
      desc: "The minimum age requirement varies depending on local regulations. In most areas, you must be at least 18 years old to enroll.",
    },
    {
      title: " What if I fail the driving test?",
      desc: "If you fail the driving test, don't worry. We offer additional practice sessions and support to help you improve your skills and pass the test on your next attempt.",
    },
  ];

  return (
    <section className=" w-full bg-hero-pattern bg-cover py-10 ">
      <div className=" container w-2/3 rounded bg-dark bg-opacity-70 backdrop-blur-sm max-md:w-full max-md:rounded-none ">
        <div className="  px-5 pt-10 pb-10 max-xs:px-3  md:pb-20 lg:pb-10">
          <div className="-mx-4  cursor-pointer items-center rounded  ">
            {AccordionData.map((data, index) => {
              return (
                <AccordionItem
                  key={index}
                  open={index === open}
                  title={data.title}
                  desc={data.desc}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

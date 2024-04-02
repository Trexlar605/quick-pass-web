import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10  overflow-hidden bg-hero-pattern bg-cover pt-[60px]  pb-0  md:pt-[60px] md:pb-[0px] xl:pt-[60px] xl:pb-[0px] 2xl:pt-[60px] 2xl:pb-[0px]"
      >
        <div className="container max-w-full  ">
          <div className="-mx-4 -mb-8 flex-col ">
            <div className=" rounded bg-dark bg-opacity-20 py-36 px-4 backdrop-blur-sm">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight  text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight ">
                  Welcome to Quick Pass Driving School <br />
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-white dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  Unlock Your Road to Success with Expert Instruction and Turn
                  Your Driving Dreams into Reality.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/courses"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Start Driving Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* <div
            className="z-1 bg-conic-gradient relative rounded-2xl p-0.5 px-8 max-lg:w-full max-xs:w-full xs:w-full sm:w-full"
            style={{
              backgroundImage: 'url("../images/driving.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >

          </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;

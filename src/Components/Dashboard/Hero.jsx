import React from "react";

const Hero = () => {
  return (
    <section>
      <div className=" container x max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
          {/*overlay*/}
          <div className="absolute w-full h-full text-grey-200 py-20 max-h-[500px] bg-black/40 flex-col justify-center">
            <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl  lg:text-7xl font-bold">
              The<span className="text-orange-600">Best</span>
            </h1>
            <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-orange-600">Food</span>Delivered
            </h1>
          </div>
          <img
            src="\images\ph burger.avif"
            alt=""
            className="w-full max-h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

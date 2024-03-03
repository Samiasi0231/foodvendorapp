import React from "react";
import { Link } from "react-router-dom";

const Headcared = () => {
  return (
    <section>
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/*card*/}
        <div className="rounded-xl relative">
          {/*overlay*/}

          <div className="absolute w-full h-full bg-white/20 rounded-xl text-black">
            <p className="font-bold test-2xl px-2 pt-4">Spices Rice</p>
            <p className="px-2 font-sans italy">Through 8/26</p>
            <Link to="/">
              <button className="border-white bg-black text-white mx-2  absolute bottom-0">
                Order Now
              </button>
            </Link>
          </div>
          <img
            src="\images\jollof rice.jpeg"
            alt=""
            className="max-h-[160px md:max-h-[200px] w-full object-cover rounded-xl"
          />
        </div>
        <div className="rounded-xl relative">
          {/*overlay*/}

          <div className="absolute sm:items-center w-full h-full bg-white/20 rounded-xl text-black">
            <p className="font-bold test-2xl md:px-2 pt-4">
              Nigeria most popular meal
            </p>
            <p className="md:px-2 font-sans italy">Through 8/26</p>
            <Link to="/">
              <button className="border-white bg-black text-white mx-2  absolute bottom-0">
                Order Now
              </button>
            </Link>
          </div>
          <img
            src="\images\Egusi-Soup.jpg"
            alt=""
            className="max-h-[160px md:max-h-[200px] w-full object-cover rounded-xl"
          />
        </div>
        <div className="rounded-xl relative">
          {/*overlay*/}

          <div className="absolute px-3 w-full h-full bg-white/20 rounded-xl text-black">
            <p className="font-bold test-2xl px-2 pt-4">Okro is a goal</p>
            <p className="md:px-2 font-sans italy">Through 8/26</p>
            <Link to="/">
              <button className="border-white bg-black text-white mx-2  absolute bottom-0">
                Order Now
              </button>
            </Link>
          </div>
          <img
            src="\images\okro.jpeg"
            alt=""
            className="max-h-[160px md:max-h-[200px] w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Headcared;

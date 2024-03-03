import React, { useState } from "react";
import { data } from "../../items/db.js";

const Food = () => {
  //console.log(category);
  const [foods, setfoods] = useState(data);
  //filter by type
  const filterType = (category) => {
    setfoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  //filter By Price
  const filterPrice = (price) => {
    setfoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <section>
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-orange-600 font-bold text-4xl text-center">
          Top Rated Menu Items
        </h1>
        {/*filter Row*/}
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <p className="font-bold  text-gray-700">Filter Type</p>

            <div className="flex justify-between flex-wrap">
              <button
                onClick={() => setfoods(data)}
                className=" bg-orange-600 rounded-full  m-1 p-1 border-orange-600 text-white-600 hover:bg-orangeg6-600 hover:text-white"
              >
                All
              </button>
              <button
                onClick={() => filterType("Burger")}
                className=" bg-orange-600 rounded-full m-1 p-1 border-orange-600 text-white-600 hover:bg-orange-600 hover:text-white"
              >
                Burgers
              </button>
              <button
                onClick={() => filterType("pizza")}
                className=" bg-orange-600 rounded-full m-1 p-1 border-orange-600 text-orage-600 hover:bg-orange-600 hover:text-white"
              >
                Pizza
              </button>
              <button
                onClick={() => filterType("Indomie")}
                className=" bg-orange-600 rounded-full m-1 p-1 border-orange-600 text-orage-600 hover:bg-orange-600 hover:text-white"
              >
                Noodles
              </button>
              <button
                onClick={() => filterType("Shawarma")}
                className=" bg-orange-600 rounded-full m-1 p-1 border-orange-600 text-orage-600 hover:bg-orange-600 hover:text-white"
              >
                Sharwarma
              </button>
            </div>
          </div>
          <div>
            <p className="font-bold  text-gray-700">Filter Price</p>

            <div className="flex justify-between flex-wrap">
              <button
                onClick={() => setfoods(data)}
                className=" bg-orange-600 rounded-full  m-1 p-1 border-orange-600 text-white-600 hover:bg-orangeg6-600 hover:text-white"
              >
                All
              </button>
              <button
                onClick={() => filterPrice("####")}
                className=" bg-orange-600 rounded-full m-1 p-1 border-orange-600 text-white-600 hover:bg-orange-600 hover:text-white"
              >
                ####
              </button>
              <button
                onClick={() => filterPrice("###")}
                className=" bg-orange-600 rounded-full m-1 p-1 border-orange-600 text-orage-600 hover:bg-orange-600 hover:text-white"
              >
                ###
              </button>
              <button
                onClick={() => filterPrice("#")}
                className=" bg-orange-600 rounded-full m-1 h-8 w-8 p-1 border-orange-600 text-orage-600 hover:bg-orange-600 hover:text-white"
              >
                #
              </button>
              <button
                onClick={() => filterPrice("##")}
                className=" bg-orange-600 rounded-full m-1 p-1 border-orange-600 text-orage-600 hover:bg-orange-600 hover:text-white"
              >
                ##
              </button>
            </div>
          </div>
        </div>
        {/*Display food*/}
        <div className="grid grid-cols-2 md:grid-cols-3 py-12 gap-6">
          {foods.map((item, index) => (
            <div
              key={index}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300 "
            >
              <img
                src={item.Image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className=" font-bold">{item.name}</p>
                <p>
                  <span className="bg-orange-600 px-1 p-1 font-bold rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Food;

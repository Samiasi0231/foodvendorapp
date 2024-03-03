import React, { useState } from "react";
import { categories } from "../../items/db";
const Showroom = () => {
  //console.log(categories);
  const [foods, setfoods] = useState(categories);

  return (
    <section>
      <div className="max-w-[1640px] m-auto px-4 py-6y">
        <p className="font-bold bg-orange-500 text-center text-4xl items-center">
          Our Categories
        </p>
        <div className="grid grid-cols-2 py-6 md:grid-cols-3  gap-6">
          {foods.map((item, index) => (
            <div
              key={index}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300 "
            >
              <img
                src={item.image}
                alt="item.name"
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div>
                <p className="font-bold bg-orange-500">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showroom;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faCartShopping,
  faXmark,
  faTruck,
  faAnchor,
  faTag,
  faWallet,
  faUsers,
  faHeart,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <section>
      <div className=" container x max-w-[1640px] justify-between flex mx-auto items-center p-2">
        <div className="flex items-center">
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer h-15 mr-2"
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <h1 className="text- 2xl md:text-3xl italic p-2">
            <span className="font-bold text-4xl">Mk</span>FooD
          </h1>
          <div className="hidden bg-gray-200 md:flex  rounded-full p-1 items-center text-1xl">
            <p className="rounded-full bg-black/80 p-2 text-white">delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </div>
        {/*search*/}
        <div className="bg-gray-200  rounded-full flex flex-row px-2 items-center max:w-80">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="h-10" />
          <input
            type="text"
            className="bg-transparent p-2 w-full focus:outline-none"
            placeholder="Search foods"
          />
        </div>

        {/*cart buton*/}
        <Link to="/#">
          <button className="bg-black/80 text-white rounded-full items-center py-2 p-2 hidden md:flex ">
            <FontAwesomeIcon icon={faCartShopping} className=" mr-2 w-8" />
            Cart
          </button>
        </Link>
        {/*mobile menu*/}
        {/*Overlay*/}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen top-0 z-10 left-0 "></div>
        ) : (
          ""
        )}

        {/*side menu*/}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-80 h-screen z-10 duration-300 bg-white"
              : "fixed top-0 left-[-100%] w-80 h-screen z-10 duration-300 bg-white"
          }
        >
          <FontAwesomeIcon
            onClick={() => setNav(!nav)}
            icon={faXmark}
            className="h-6 absolute right-4 top-4 cursor-pointer"
          />

          <h1 className="text- 2xl md:text-3xl italic p-2">
            <span className="font-bold text-5xl">Mk</span>FooD
          </h1>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="texl-xl py-2  hover:bg-gray-400">
                <FontAwesomeIcon icon={faTruck} className="mr-4 " /> Orders
              </li>
              <li className="texl-xl py-2 hover:bg-gray-400">
                <FontAwesomeIcon icon={faHeart} className="mr-4 " /> Favourites
              </li>
              <li className="texl-xl py-2  hover:bg-gray-400">
                <FontAwesomeIcon icon={faWallet} className="mr-4 " /> Wallet
              </li>
              <li className="texl-xl py-2  hover:bg-gray-400 ">
                <FontAwesomeIcon icon={faCircleInfo} className="mr-4 " /> Help
              </li>
              <li className="texl-xl py-2  hover:bg-gray-400 ">
                <FontAwesomeIcon icon={faTag} className="mr-4 " />
                Promotion
              </li>
              <li className="texl-xl py-2 ">
                <FontAwesomeIcon icon={faAnchor} className="mr-4 " /> Best
                Orders
              </li>
              <li className="texl-xl py-2 ">
                <FontAwesomeIcon icon={faUsers} className="mr-4 " /> User Invite
                Friends
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Navbar;

import React from "react";
import { darkLogo } from "../assets/index";

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-28 h-14 " src={darkLogo} alt="dark-logo"></img>
        </div>
        <div className="flex justify-center items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Block</li>
          </ul>
          <div className="relative">
            <img className="h-10 w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HTgkLtBHGWUPsUEc9w5pFoJPbQPfzBpN32BV2lmBjw&s" alt="cart"/>
            <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">0</span>
          </div>
          <img className="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9mpmQTUBt-FjnZ6PJQsO1U9zgWHKc5PWDhEiIGC-rw&s" alt="user"/>
        </div>
      </div>
    </div>
  );
};

export default Header;

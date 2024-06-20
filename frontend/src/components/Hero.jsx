import React from "react";
import { IoSearch } from "react-icons/io5";
import "../App.css"

const Hero = () => {
  return (
    <div className="px-5 xl:px-10 md:w-1/2 mb-4">
      <h1 className="mt-2 mb-4 text-3xl xl:text-4xl text-center font-bold text-[#2A3342] leading-normal  xl:leading-relaxed">
        A Blog Website made for{" "}
        <span className=" text-orange-400 food">Food Lovers</span>{" "}
          </h1>
          <form action="/search" className="bg-white p-4 rounded relative flex items-center">
              <IoSearch className="w-5 h-5 mr-2 text-neutral-300" />
              <input className="w-full outline-none placeholder:text-[#1b2629]" name="query" type="search" placeholder="Search for a recipe" id="search" required/>
          </form>
    </div>
  );
};

export default Hero;

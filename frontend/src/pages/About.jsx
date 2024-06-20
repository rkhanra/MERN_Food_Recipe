import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="text-indigo-600">Our Company</span>
          </h2>
          <p className="text-gray-700">
            At Foodify, we believe that great meals are more than just sustenance; they're experiences that bring joy, comfort, and connection. Our mission is to inspire and empower culinary enthusiasts of all levels to explore, create, and share delicious dishes from around the world.
          </p>
          <Link to="/moreabout#top">
            <button
              className="mt-6 bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105 absolute-left-2"
            >
              All About Company
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ResourceImg from "../assets/resource.png";

const Resource = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (user) {
      navigate("/recipes");
    } else {
      navigate("/sign");
    }
  };

  return (
    <div className="relative ml-3">
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-5 order-2 sm:order-1">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About Recipe
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">Our Recipes</span>
            </h2>
            <p className="text-gray-700">
            Foodify is your ultimate destination for discovering mouthwatering recipes from around the world. Whether you're a seasoned chef or a novice in the kitchen, Foodify offers a diverse range of recipes to suit every palate and skill level. From quick and easy weekday meals to elaborate gourmet dishes, our platform caters to all tastes and preferences.
            </p>
            <button
              onClick={handleButtonClick}
              className="mt-6 bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105 absolute-left-2"
            >
              All Recipes
            </button>
          </div>
        </div>
        <div className="sm:w-1/2 p-10 order-1 sm:order-2">
          <div className="image object-center text-center">
            <img src={ResourceImg} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;

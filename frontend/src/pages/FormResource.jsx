import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import FormResourceImg from "../assets/form.png";

const FormResource = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (user) {
      navigate("/form");
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
              What About You
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">Your Recipes</span>
            </h2>
            <p className="text-gray-700">
              Are you want to share your recipes with the World ? Then Sign up
              with us and add your favourite recipes just clicking on the add
              recipe button !!
            </p>
            <button
              onClick={handleButtonClick}
              className="mt-6 bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105 absolute-left-2"
            >
              Add Recipes
            </button>
          </div>
        </div>
        <div className="sm:w-1/2 p-10 rounded-full order-1 sm:order-2">
          <div className="image object-center text-center">
            <img src={FormResourceImg} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormResource;

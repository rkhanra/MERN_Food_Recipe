import React from "react";
import { Link } from "react-router-dom";
import { GoClock } from "react-icons/go";

const Card = ({ item }) => {
  const categoryStyles = {
    Entrees: { backgroundColor: "#f0f5c4", color: "#59871f" },
    Breakfast: { backgroundColor: "#f0f5c4", color: "#59871f" },
    Lunch: { backgroundColor: "#f0f5c4", color: "#59871f" },
    Desserts: { backgroundColor: "#e8f5fa", color: "#397a9e" },
    Sides: { backgroundColor: "#CAD5E8", color: "#D352B0" },
    Drinks: { backgroundColor: "#e8f5fa", color: "#397a9e" },
    default: { backgroundColor: "#fff", color: "#000" },
  };

  const getCategoryStyle = (category) => {
    return categoryStyles[category] || categoryStyles.default;
  };

  const categoryStyle = getCategoryStyle(item?.category);

  return (
    <div className="flex justify-center md:justify-start">
      <div className="w-80 h-96">
        {" "}
        {/* Set fixed width and height */}
        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-300 rounded-lg h-full flex flex-col">
          <div className="flex-shrink-0">
            <img
              src={item?.thumbnail_image}
              alt="card image"
              className="w-full h-40 object-cover rounded-t-lg" // Set image height and cover to maintain aspect ratio
            />
          </div>
          <div className="py-3 px-2 rounded-lg bg-white flex-1 flex flex-col">
            <Link to={`/items/${item._id}`}>
              <h1 className="text-gray-700 font-bold text-xl mb-4 hover:text-gray-900 hover:cursor-pointer">
                {item?.name}
              </h1>
            </Link>
            <div className="flex justify-between items-center mt-auto">
              <button
                className="py-2 px-3 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-200"
                style={{
                  backgroundColor: categoryStyle.backgroundColor,
                  color: categoryStyle.color,
                }}
              >
                {item?.category}
              </button>
              <div className="flex items-center">
                <GoClock />
                <span className="ml-1">{item?.more?.prep_time}</span>
              </div>
            </div>
          </div>
          <div className="absolute top-2 right-2 py-1 px-2 bg-white rounded">
            <span className="font-medium">{item?.more.difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

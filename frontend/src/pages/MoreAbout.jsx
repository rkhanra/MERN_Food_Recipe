import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUtensils,
  FaGraduationCap,
  FaUsers,
  FaRegLightbulb,
} from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const gridData = [
    {
      icon: <FaUtensils className="text-4xl text-blue-500 mb-2" />,
      title: "Vast Recipe Collection",
      description:
        "Explore our extensive library of curated recipes spanning diverse cuisines, dietary preferences, and skill levels.",
    },
    {
      icon: <FaGraduationCap className="text-4xl text-green-500 mb-2" />,
      title: "Expert Guidance",
      description:
        "Access step-by-step instructions, video tutorials, and helpful tips from our team of seasoned chefs and food experts.",
    },
    {
      icon: <FaUsers className="text-4xl text-purple-500 mb-2" />,
      title: "Community and Engagement",
      description:
        "Join a vibrant community of food lovers, share your culinary creations, and connect with like-minded individuals from around the globe.",
    },
    {
      icon: <FaRegLightbulb className="text-4xl text-yellow-500 mb-2" />,
      title: "Fresh Inspiration",
      description:
        "Stay up-to-date with the latest food trends, seasonal ingredients, and kitchen innovations.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <a id="#top"></a>
      <header className="py-6 shadow-lg moreaboutheader">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Welcome to Foodify, Your Culinary Companion!
          </h1>
        </div>
      </header>
      <main className="py-12 moreaboutbody">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              What Sets Us Apart:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {gridData.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white shadow rounded-lg flex items-center justify-center flex-col"
                >
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Our Commitment to Excellence:
            </h2>
            <p className="text-center">
              At Foodify, we are dedicated to delivering a seamless and
              enriching culinary experience for our users.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Join Us Today:
            </h2>
            <p className="text-center">
              Ready to embark on a flavorful adventure? Join the Foodify
              community today and unlock a world of culinary possibilities.
            </p>
          </section>
          <div className="flex justify-center items-center">
            <Link to={"/sign"}>
              <button className="mt-6 bg-green-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105 absolute-left-2 ">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

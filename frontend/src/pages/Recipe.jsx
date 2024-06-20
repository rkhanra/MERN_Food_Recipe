import React, { useEffect, useState } from "react";

import axios from "axios";
import CategoryWrapper from "./category/CategoryWrapper";
import Card from "../components/Card";

const Recipe = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getLatestItems = async () => {
      const response = await axios.get("http://localhost:5000/api/all-items");
      setItems(response.data);
    };
    getLatestItems();
  }, []);

  return (
    <div className="px-2 lg:px-8 py-4">
      <h1 className="text-center text-3xl py-4 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">
        ALL RECIPE
      </h1>

      <CategoryWrapper />

      <ul className="mt-10 grid grid-cols-1 md:grids-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Array.isArray(items) &&
          items.map((item) => <Card item={item} key={item._id} />)}
      </ul>
    </div>
  );
};

export default Recipe;

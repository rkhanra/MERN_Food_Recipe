import React from "react";
import { Link } from "react-router-dom";

const CategoryWrapper = () => {
  function CategoryItem({ name, href, backgroundColor, color }) {
    const style = {
      backgroundColor: backgroundColor,
      color: color,
      borderColor: color,
    };

    return (
      <div>
        <Link to={href} className="rounded-full">
          <div
            className="uppercase px-6 py-2 text-center rounded-full"
            style={style}
          >
            {name}
          </div>
        </Link>
      </div>
    );
  }

  function CategoryList() {
    return (
      <div className="flex flex-wrap items-center justify-center gap-8">
        <CategoryItem
          name="entrees"
          href="/categories/entrees"
          backgroundColor="#f0f5c4"
          color="#59871f"
        />
        <CategoryItem
          name="breakfast"
          href="/categories/breakfast"
          backgroundColor="#e5f7f3"
          color="#1f8787"
        />
        <CategoryItem
          name="lunch"
          href="/categories/lunch"
          backgroundColor="#f0f5c4"
          color="#59871f"
        />
        <CategoryItem
          name="desserts"
          href="/categories/desserts"
          backgroundColor="#e8f5fa"
          color="#397a9e"
        />
        <CategoryItem
          name="sides"
          href="/categories/sides"
          backgroundColor="#CAD5E8"
          color="#D352B0"
        />
        <CategoryItem
          name="drinks"
          href="/categories/drinks"
          backgroundColor="#e8f5fa"
          color="#397a9e"
        />
      </div>
    );
  }
  return <CategoryList />;
};

export default CategoryWrapper;

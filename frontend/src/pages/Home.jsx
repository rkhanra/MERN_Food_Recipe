// Home.jsx
import React from "react";
import Hero from "../components/Hero";
import CategoryWrapper from "./category/CategoryWrapper";
import About from "./About";
import Contact from "./Contact";
import Resource from "./Resource";
import FormResource from "./FormResource";
import AllUsers from "./AllUsers";

const Home = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col justify-center items-center w-full py-8">
        <Hero />
        <CategoryWrapper />
        <Resource/>
        <About />
        <FormResource/>
        <Contact />
        
      </div>
    </div>
  );
};

// Exporting Home as a named export
export { Home };

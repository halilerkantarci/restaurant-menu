import React from "react";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Menus from "../components/menus/Menus";
import data from "../helper/data";

const allCategories = ["All", ...new Set(data.map((item) => item.category))];
console.log(allCategories);
const Home = () => {
  return (
    <div>
      <Header />
      <Categories allCategories={allCategories} />
      <Menus />
    </div>
  );
};

export default Home;

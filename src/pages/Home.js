import React, { useState } from "react";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Menus from "../components/menus/Menus";
import data from "../helper/data";

const allCategories = ["All", ...new Set(data.map((item) => item.category))];
console.log(allCategories);

const Home = () => {
  const [menuItems, setMenuItems] = useState(data);
  console.log(menuItems);
  return (
    <div>
      <Header />
      <Categories allCategories={allCategories} />
      <Menus menuItems={menuItems} />
    </div>
  );
};

export default Home;

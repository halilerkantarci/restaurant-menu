import React, { useState } from "react";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Menus from "../components/menus/Menus";
import data from "../helper/data";

const allCategories = ["All", ...new Set(data.map((item) => item.category))];
console.log(allCategories);

const Home = () => {
  const [menuItems, setMenuItems] = useState(data);
  const filterItem = (categoryItem) => {
    if (categoryItem === "All") {
      setMenuItems(data);
    } else {
      const filtered = data.filter((item) => item.category === categoryItem);
      setMenuItems(filtered);
    }
  };
  console.log(menuItems);
  return (
    <div>
      <Header />
      <Categories allCategories={allCategories} filterItem={filterItem} />
      <Menus menuItems={menuItems} />
    </div>
  );
};

export default Home;

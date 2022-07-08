import React from "react";
import "./Categories.css";

const Categories = ({ allCategories }) => {
  return (
    <div className="btn-container">
      {allCategories.map((CategoryItem, index) => {
        return (
          <button type="button" className="category-button" key={index}>
            {CategoryItem}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

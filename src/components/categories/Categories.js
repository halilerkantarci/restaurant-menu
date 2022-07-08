import React from "react";
import "./Categories.css";

const Categories = ({ allCategories, filterItem }) => {
  return (
    <div className="btn-container">
      {allCategories.map((CategoryItem, index) => {
        return (
          <button
            type="button"
            className="category-button"
            key={index}
            onClick={() => filterItem(CategoryItem)}
          >
            {CategoryItem}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

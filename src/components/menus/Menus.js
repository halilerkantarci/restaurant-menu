import React from "react";
import Menu from "../menu/Menu";

const Menus = ({ menuItems }) => {
  console.log(menuItems);
  return (
    <div>
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default Menus;

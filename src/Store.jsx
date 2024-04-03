import React from "react";
import Items from "./Items";

const Store = () => {
  return (
    <div>
      <Items itemName="hfc" price="76" availability="available" />
      <Items itemName="Dal" price={50} availability="Not available" />
      <Items itemName="Biscuit" price={10} availability="available" />
      <Items itemName="Juice" price={40} availability="Not available" />
    </div>
  );
};

export default Store;

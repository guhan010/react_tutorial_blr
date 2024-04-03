import React from "react";
import Items from "./Items";

const Store = () => {
  data
  return (
    <div>
      <Items itemName={data.itemName} price={100} availability="available" />
      <Items itemName="Dal" price={50} availability="Not available" />
      <Items itemName="Biscuit" price={10} availability="available" />
      <Items itemName="Juice" price={40} availability="Not available" />
    </div>
  );
};

export default Store;

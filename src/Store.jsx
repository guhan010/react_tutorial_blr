import React from "react";
import Items from "./Items";

const Store = () => {
  return (
    <div>
      <Items itemName="hfc" price="76" availability={false} />
      <Items itemName="Dal" price={50} availability={false} />
      <Items itemName="Biscuit" price={10} availability={true} />
      <Items itemName="Juice" price={40} availability={true} />
    </div>
  );
};

export default Store;

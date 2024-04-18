import React from "react";
import Father from "./Father";

export let Money = React.createContext();

const GrandFather = () => {
  return (
    <div>
      GrandFather <br />
      <Money.Provider value={{ amount: 100 }}>
        <Father />
      </Money.Provider>
    </div>
  );
};

export default GrandFather;

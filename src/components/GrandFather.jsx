import React from "react";
import Father from "./Father";

export let Money = React.createContext();
export let Cost = React.createContext();

const GrandFather = () => {
  return (
    <div>
      GrandFather <br />
      <Money.Provider value={{ amount: 100 }}>
        <Cost.Provider value={{ amount: 200 }}>
          <Father />
        </Cost.Provider>
      </Money.Provider>
    </div>
  );
};

export default GrandFather;

import React from "react";
import Child from "./Child";
import { Cost } from "./GrandFather";

const Father = () => {
  return (
    <div>
      Father - 
      <Cost.Consumer>{(a) => <span>{a.amount}</span>}</Cost.Consumer>
      <Child />
    </div>
  );
};

export default Father;

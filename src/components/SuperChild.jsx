import React from "react";
import { Money } from "./GrandFather";

const SuperChild = () => {
  return (
    <div>
      SuperChild{" "}
      <Money.Consumer>{(a) => <span>{a.amount}</span>}</Money.Consumer>
    </div>
  );
};

export default SuperChild;

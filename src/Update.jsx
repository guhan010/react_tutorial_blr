import React, { useState } from "react";
import Should from "./Should";

const Update = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <Should prop={10} />
      <button onClick={() => setCount(count + 1)}>Increse</button>
    </div>
  );
};

export default Update;

import React from "react";
// import SignUp from "./SignUp";
// import Login from "./Login";

const Media = () => {
  //   let newUser = false;

  //   const handleClick = (params) => {
  //     alert(`Welcome ${params}`);
  //   };

  //   let [count, setCount] = useState(10);
  let count = 0;

  const increase = () => {
    count = count + 1;
    console.log(count);
  };
  console.log(count);
  return (
    <div>
      {/* <button onClick={() => handleClick("tenny")}>click</button> */}
      <h1>Counter</h1>
      <p>Count = {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default Media;

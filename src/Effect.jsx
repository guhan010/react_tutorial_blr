import React, { useEffect } from "react";

const Effect = (props) => {
  //   let [count, setCount] = useState();
  //   let [num, setNum] = useState(0);

  //   didmount
  // useEffect(() => {
  //   console.log("count", count);
  // },[]);

  //update on every render
  //   useEffect(() => {
  //     console.log("count", count);
  //   });
  useEffect(() => console.log("component mounted"), []);

  useEffect(() => {
    return () => {
      console.log("component unmounted");
    };
  });

  //shouldcomponentupdate & componentdidupdate
  //   useEffect(() => {
  //     return console.log("component unmounted");
  //   });

  return (
    <div>
      {/* <h1>{count}</h1> */}
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button> */}
      {/* <h1>{num}</h1> */}
      {/* <button onClick={() => setNum(num + 1)}>Change num</button> */}
      <h1>Effect component</h1>
    </div>
  );
};

export default Effect;

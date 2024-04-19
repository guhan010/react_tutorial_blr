// import React, { useRef } from "react";

// const Pro = () => {
//   //   const [count, setCount] = useState(0);
//   //   console.log("component rerendered");
//   //   return (
//   //     <div>
//   //       <button onClick={() => setCount(count + 1)}>{count}</button>
//   //     </div>
//   //   );

//   let val = useRef(null);
//   console.log("component rerendered");

//   return (
//     <div>
//       <button
//         onClick={() => {
//           val.current.focus();
//         }}
//       >
//         {val.current}
//       </button>
//       <input ref={val} />
//     </div>
//   );
// };

// export default Pro;
import React, { useState, useRef, useEffect } from "react";

const PreviousValue = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
    console.log(prevCountRef.current);
  });

  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PreviousValue;

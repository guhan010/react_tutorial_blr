import React, { useEffect, useRef } from "react";

const RefHook = () => {
  // let reference = useRef();
  // console.log(reference);

  // const handle = () => {
  //   reference.current.style.backgroundColor = "red";
  // };

  // return (
  //   <div>
  //     <h1 ref={reference}>hello</h1>
  //     <button onClick={handle}>CHange</button>
  //   </div>
  // );
  // };
  // let [task1, setTask1] = useState(0);

  let ref = useRef(0);
  let count = 0;

  useEffect(() => {
    // console.log((ref.current = count));
    document.getElementsByTagName("h1")[0].style.backgroundColor = "red";
  });

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          ref.current = count;
          count = count + 1;
          console.log(count);

          console.log(ref.current);
        }}
      >
        Increase
      </button>
      <h2>
        Previous value = {ref.current} {console.log(ref.current)}
      </h2>
    </div>
  );
};

export default RefHook;

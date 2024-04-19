import React, { useMemo, useState } from "react";

const MemoHook = () => {
  let [task1, setTask1] = useState(0);
  let [task2, setTask2] = useState(0);

  let extensive = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return task2 % 2 === 0;
  }, [task2]);

  return (
    <div>
      <button onClick={() => setTask2(task2 + 1)}>Task 2 : {task2}</button>
      <span>{extensive ? "even" : "odd"}</span> <br />
      <button onClick={() => setTask1(task1 + 1)}>Task1: {task1}</button>
    </div>
  );
};

export default MemoHook;

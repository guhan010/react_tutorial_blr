import React, { useState, useCallback } from "react";
import Normal from "./Normal";
import Count from "./Count";
import Button from "./Button";

const Parent = () => {
  let [age, setAge] = useState(0);
  let [salary, setSalary] = useState(0);

  const handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const handleSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <div>
      <Normal />
      <Count name="Age" value={age} />
      <Button name="Age Button" click={handleAge} />
      <Count name="Salary" value={salary} />
      <Button name="Salary Button" click={handleSalary} />
    </div>
  );
};

export default Parent;

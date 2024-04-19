import React from "react";

const Button = ({ name, click }) => {
  console.log(`${name} rendered`);
  return (
    <div>
      <button onClick={click}>{name}</button>
    </div>
  );
};

export default React.memo(Button);

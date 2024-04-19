import React from "react";

const Normal = () => {
  console.log("normal component rendered");
  return <div>Normal</div>;
};

export default React.memo(Normal);

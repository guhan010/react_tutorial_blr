import React from "react";

const Count = ({ name, value }) => {
  console.log(`${name} component rendered`);
  return (
    <div>
      count {name}: {value}
    </div>
  );
};

export default React.memo(Count);

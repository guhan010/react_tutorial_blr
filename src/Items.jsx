import React from "react";

const Items = (props) => {
  return (
    <div>
      <span>
        {props.itemName} - {props.price} - {props.availability}
      </span>
    </div>
  );
};

export default Items;

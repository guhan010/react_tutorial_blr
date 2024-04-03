import React from "react";
import PropTypes from "prop-types";

const Items = (props) => {
  return (
    <div>
      <span>
        {props.itemName} - {props.price} - {props.availability}
      </span>
    </div>
  );
};

Items.defaultProps = {
  itemName: "item",
  price: 454,
  availability: "Out of Stock",
};

Items.propTypes = {
  itemName: PropTypes.string,
  price: PropTypes.number,
};

export default Items;

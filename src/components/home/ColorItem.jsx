import React from "react";

const ColorItem = ({ color, setColor }) => {
  return (
    <div
      className="color-item"
      onClick={setColor}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorItem;

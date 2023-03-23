import React from "react";
import "../../styles/checkbox.css";

const Checkbox = () => {
  return (
    <>
      <label className="checkbox-btn">
        <label htmlFor="checkbox"></label>
        <input id="checkbox" type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </>
  );
};

export default Checkbox;

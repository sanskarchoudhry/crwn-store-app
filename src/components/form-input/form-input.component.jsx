import React from "react";

import "./form-input.styles.scss";

function FromInput({ handleChange, label, ...OtherProps }) {
  return (
    <div className="group">
      <input
        type=""
        className="form-input"
        onChange={handleChange}
        {...OtherProps}
      />
      {label ? (
        <label
          className={`${
            OtherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FromInput;

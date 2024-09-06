import React, { FC } from "react";
import "./Dropdown.css";

interface DropdownProps {
  type?: string;
  label?: string;
  error?: string;
}

const Dropdown: FC<DropdownProps> = ({
  type = "default",
  label = "Label",
  error = "Field-specific error message",
}) => {
  const classNames = ["dropdown", `dropdown--${type}`].join(" ");

  return (
    <div className={classNames}>
      <label htmlFor="dropdown">{label}</label>
      <select id="dropdown">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      {type === "error" && <p className="error">{error}</p>}
    </div>
  );
};

export default Dropdown;

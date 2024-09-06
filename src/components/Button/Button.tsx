import React, { FC } from "react";
import "./Button.css";

interface ButtonProps {
  type?: "primary" | "secondary" | "overlay";
  isSmall?: boolean;
}

const Button: FC<ButtonProps> = ({ type = "primary", isSmall = false }) => {
  const classNames = [
    "button",
    `button--${type}`,
    isSmall ? "button--small" : "",
  ].join(" ");

  return <div className={classNames}>Button</div>;
};

export default Button;

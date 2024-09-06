import React from "react";

import "./NavbarItem.css";

interface NavbarItemProps {
  label: string;
  link: string;
  hasIndicator?: boolean;
  isSelected?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  link,
  hasIndicator,
  isSelected,
}) => {
  const classNames = ["navbar-item", isSelected ? "selected" : ""].join(" ");
  return (
    <li className={classNames}>
      <a href={link}>{label}</a>
      {hasIndicator && <span className="indicator" />}
    </li>
  );
};

export default NavbarItem;
export type { NavbarItemProps };

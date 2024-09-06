import React from "react";
import NavbarItem, { NavbarItemProps } from "./NavbarItem/NavbarItem";

import "./Navbar.css";

interface NavbarProps {
  tabs: NavbarItemProps[];
}

const Navbar: React.FC<NavbarProps> = ({ tabs }) => {
  return (
    <nav className="navbar">
      <ul>
        {tabs.map((tab, index) => (
          <NavbarItem key={index} {...tab} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { FC } from "react";
import "./SearchCard.css";

import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import SearchInput from "../SearchInput/SearchInput";
import Navbar from "../Navbar/Navbar";

const SearchCard: FC = () => (
  <div className="card">
    <h3 className="title">Search</h3>
    <Navbar
      tabs={[
        { label: "Clients", link: "/", isSelected: true },
        { label: "Applications", link: "/" },
        { label: "Reports", link: "/" },
      ]}
    />
    <div className="bottom">
      <Dropdown label="Search By" />
      <SearchInput label="" value="" />
      <Button type="primary" />
    </div>
  </div>
);

export default SearchCard;

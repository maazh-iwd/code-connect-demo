import React, { FC } from "react";
import "./SearchInput.css";

interface SearchInputProps {
  hasInstructions?: boolean;
  instructions?: string;
  label?: string;
  value?: string;
}

const SearchInput: FC<SearchInputProps> = ({
  hasInstructions = false,
  instructions = "Keyword search limited to range etc.",
  label = "Label - Search by Keyword",
  value = "Enter a keyword",
}) => {
  return (
    <div className="search-input">
      {label && (
        <label className="search-input__label" htmlFor="search-input">
          {label}
        </label>
      )}
      <input className="search-input__input" placeholder={value} />
      {hasInstructions && (
        <label className="search-input__instructions">{instructions}</label>
      )}
    </div>
  );
};

export default SearchInput;

import React, { useState } from "react";
import { SearchFrame, SearchIcon, SearchInput } from "./Search.styles";

export default function Search({ searchTerm, setSearchTerm, ...otherProps }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <SearchFrame {...otherProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Titulos, personas, géneros"
        active={searchActive}
      />
    </SearchFrame>
  );
}

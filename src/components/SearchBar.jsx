import React from "react";
import { SearchInput } from "../styles/SearchBarStyles"; // Vamos criar este arquivo de estilos depois

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <SearchInput
      type="text"
      placeholder="Buscar vídeos..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchBar;

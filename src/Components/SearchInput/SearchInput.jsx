import React from "react";
import "./SearchInput.scss";

const SearchInput=({ value, onChange, placeholder })=> {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchInput;

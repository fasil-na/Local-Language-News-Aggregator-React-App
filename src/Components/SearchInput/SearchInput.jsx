import React from "react";
import "./SearchInput.scss";

const SearchInput = ({ value, onChange, placeholder }) => {
  // Event handler for input change
  const handleInputChange = (event) => {
    // Call the onChange function passed from the parent component
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
};

export default SearchInput;

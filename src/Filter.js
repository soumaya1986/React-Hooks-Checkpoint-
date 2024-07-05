import React from "react";

const Filter = ({ onFilter }) => {
  const handleFilter = (event) => {
    const { name, value } = event.target;
    onFilter(name, value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        name="title"
        placeholder="Filter by title"
        onChange={handleFilter}
      />
      <input
        type="number"
        name="rating"
        placeholder="Filter by rating"
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;

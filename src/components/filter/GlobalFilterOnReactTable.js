import React from "react";

const GlobalFilterOnReactTable = ({ filter, setFilter }) => {
  return (
    <div>
      <span>Search: </span>
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </div>
  );
};

export default GlobalFilterOnReactTable;

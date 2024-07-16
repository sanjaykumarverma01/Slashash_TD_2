import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for quotes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchForm;

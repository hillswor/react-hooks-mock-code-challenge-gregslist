import React from "react";

function Search({ searchInput, setSearchInput }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.name.value);
  }

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  return (
    <form
      className="searchbar"
      name="input"
      value={searchInput}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

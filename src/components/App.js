import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => {
        setListings(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    setListings(
      listings.filter((listing) => {
        return listing.id !== id;
      })
    );
  };

  const listingsToDisplay = listings.filter((listing) => {
    return listing.description
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });

  return (
    <div className="app">
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <ListingsContainer
        listingsToDisplay={listingsToDisplay}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;

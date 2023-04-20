import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingsToDisplay, handleDelete }) {
  const listingCards = listingsToDisplay.map(
    ({ id, image, description, location }) => {
      return (
        <ListingCard
          key={id}
          id={id}
          image={image}
          description={description}
          location={location}
          handleDelete={handleDelete}
        />
      );
    }
  );

  return (
    <main>
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}

export default ListingsContainer;

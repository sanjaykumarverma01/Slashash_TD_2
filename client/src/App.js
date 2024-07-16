import React, { useState, useEffect } from "react";
import SearchForm from "./pages/SearchForm";
import QuotesList from "./pages/QuotesList";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [viewFavorites, setViewFavorites] = useState(false);

  useEffect(() => {
    if (viewFavorites) {
      fetchFavorites();
    }
  }, [viewFavorites]);

  const handleSearch = async (query) => {
    const response = await fetch(
      `https://api.quotable.io/quotes?query=${query}`
    );
    const data = await response.json();
    setQuotes(data.results);
  };

  const handleFavorite = async (quote) => {
    const response = await fetch("http://localhost:5000/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quote_id: quote._id,
        content: quote.content,
        author: quote.author,
      }),
    });

    if (response.ok) {
      console.log("Favorite added successfully");
    } else {
      console.error("Error adding favorite");
    }
  };

  const fetchFavorites = async () => {
    const response = await fetch("http://localhost:5000/api/favorites");
    const data = await response.json();
    setFavorites(data);
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Search for Quotes</h1>
      <SearchForm onSearch={handleSearch} />
      <button
        className="btn btn-secondary mb-4"
        onClick={() => setViewFavorites(!viewFavorites)}
      >
        {viewFavorites ? "View Search Results" : "View Favorites"}
      </button>
      {viewFavorites ? (
        <QuotesList
          quotes={favorites}
          onFavorite={() => {}}
          hideFavoriteButton
        />
      ) : (
        <QuotesList quotes={quotes} onFavorite={handleFavorite} />
      )}
    </div>
  );
};

export default App;

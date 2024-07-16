import React from "react";
import QuoteCard from "./QuoteCard";

const QuotesList = ({ quotes, onFavorite }) => {
  return (
    <div>
      {quotes.map((quote) => (
        <QuoteCard key={quote._id} quote={quote} onFavorite={onFavorite} />
      ))}
    </div>
  );
};

export default QuotesList;

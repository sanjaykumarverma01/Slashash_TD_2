import React from "react";

const QuoteCard = ({ quote, onFavorite }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{quote.content}</p>
          <footer className="blockquote-footer">{quote.author}</footer>
        </blockquote>
        <button
          className="btn btn-outline-primary mt-3"
          onClick={() => onFavorite(quote)}
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;

'use client';

import React, { useState, useContext } from 'react';
import { QuotesContext } from '../../context/QuoteContext';
import marianoButton from '../../assets/mariano-button.png';

const RandomQuoteButton: React.FC = () => {
  const { quotes } = useContext(QuotesContext);
  const [randomQuote, setRandomQuote] = useState<string>('');

  const handleRandomQuoteClick = () => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const selectedRandomQuote = quotes[randomQuoteIndex];
    setRandomQuote(selectedRandomQuote.text);
  };

  return (
    <div id="quotes">
      <button onClick={handleRandomQuoteClick}>
        <img
          className="marianoButton"
          src={marianoButton}
          style={{ width: '210px', height: '210px' }}
          alt="Mariano Rajoy visual."
        />
      </button>
      {randomQuote && <p className="quote-text">{randomQuote}</p>}
    </div>
  );
};

export default RandomQuoteButton;

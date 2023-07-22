'use client'

import React, { useState, useContext } from 'react';
import { QuotesContext } from '../../context/QuoteContext';
import marianoButton from '../../assets/mariano-button.png';

const RandomQuoteButton: React.FC = () => {
  const { quotes } = useContext(QuotesContext);
  const [randomQuote, setRandomQuote] = useState<{ text: string }>({ text: '' });

  const handleRandomQuoteClick = () => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const selectedRandomQuote = quotes[randomQuoteIndex];
    setRandomQuote(selectedRandomQuote);
  };

  return (
    <div id="quotes">
      <button onClick={handleRandomQuoteClick}>
        <img className="marianoButton" src={marianoButton} style={{ width: '270px', height: '270px' }} alt="Mariano Rajoy visual." />
      </button>
      {randomQuote.text && <p className="quote-text">{randomQuote.text}</p>}
    </div>
  );
};

export default RandomQuoteButton;

import React, { createContext, useState } from 'react';
import { QuotesContextProps, Quote } from '../types/context/quote';
import quotes from '../data/quotes.json';

const initialQuotesContext: QuotesContextProps = {
  quotes: quotes,
};

export const QuotesContext = createContext<QuotesContextProps>(initialQuotesContext);

export const QuotesProvider: React.FC = () => {
  const [quotes] = useState<Quote[]>(initialQuotesContext.quotes);

  return <QuotesContext.Provider value={{ quotes }} />;
};

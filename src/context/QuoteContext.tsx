import React, { createContext, useState } from 'react';
import { QuotesContextProps } from '../types/context/quote';
import quotes from '../data/quotes.json';

const initialQuotesContext: QuotesContextProps = {
  quotes: quotes,
};

export const QuotesContext = createContext<QuotesContextProps>(initialQuotesContext);

export const QuotesProvider: React.FC = ({ children }) => {
  const [quotes] = useState<string[]>(initialQuotesContext.quotes);

  return <QuotesContext.Provider value={{ quotes }}>{children}</QuotesContext.Provider>;
};

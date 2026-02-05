"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextType {
  search: string;
  setSearch: (value: string) => void;
  searchActive: boolean;
  setSearchActive: (active: boolean) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  return (
    <SearchContext.Provider
      value={{ search, setSearch, searchActive, setSearchActive }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("useSearch must be used within a SearchProvider");
  return context;
};

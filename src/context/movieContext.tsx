"use client";
// import
import { createContext, useContext, useState, ReactNode } from "react";
import { Movie } from "@/query/types/movieType";

// Type data
interface MovieContextType {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  currentMovie: Movie | null;
  setCurrentMovie: (movie: Movie | null) => void;
}

// Context
const MovieContext = createContext<MovieContextType | undefined>(undefined);

// Provider
export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  return (
    <MovieContext.Provider
      value={{ movies, setMovies, currentMovie, setCurrentMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// Custom hook
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context)
    throw new Error("useMovieContext must be used within MovieProvider");
  return context;
};

"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
};

type FavoritesContextType = {
  movies: Movie[]; // semua movie yang pernah difavorit
  favorites: number[]; // list id movie yang difavorit
  toggleFavorite: (movie: Movie) => void;
  loading: boolean;
  trailerKey: string | null;
  handleWatchTrailer: (id: number) => void;
  closeTrailer: () => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [movies, setMovies] = useState<Movie[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("fav_movies");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("fav_ids");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [loading, setLoading] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("fav_movies", JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    localStorage.setItem("fav_ids", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      const isFav = prev.includes(movie.id);
      if (isFav) {
        return prev.filter((id) => id !== movie.id);
      } else {
        // Jika movie belum ada di movies list, tambahkan
        setMovies((prevMovies) => {
          const exists = prevMovies.find((m) => m.id === movie.id);
          if (exists) return prevMovies;
          return [...prevMovies, movie];
        });
        return [...prev, movie.id];
      }
    });
  };

  const handleWatchTrailer = (id: number) => {
    // dummy key, nanti bisa diganti dengan fetch API
    setTrailerKey("dQw4w9WgXcQ");
  };

  const closeTrailer = () => setTrailerKey(null);

  return (
    <FavoritesContext.Provider
      value={{
        movies,
        favorites,
        toggleFavorite,
        loading,
        trailerKey,
        handleWatchTrailer,
        closeTrailer,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return context;
}

"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getMovieVideos } from "@/query/services/movieService";
import type { TmdbVideo } from "@/query/types/favoritesType";

// Gunakan Movie global dari TMDB, tapi release_date dan backdrop_path optional
export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
  release_date?: string;
  backdrop_path?: string | null;
};

export type FavoritesContextType = {
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

  // sync ke localStorage
  useEffect(() => {
    localStorage.setItem("fav_movies", JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    localStorage.setItem("fav_ids", JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite tetap aman
  const toggleFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      const isFav = prev.includes(movie.id);
      if (isFav) {
        return prev.filter((id) => id !== movie.id);
      } else {
        // tambahkan movie ke list jika belum ada
        setMovies((prevMovies) => {
          const exists = prevMovies.find((m) => m.id === movie.id);
          if (exists) return prevMovies;
          return [...prevMovies, movie];
        });
        return [...prev, movie.id];
      }
    });
  };

  // Watch trailer sesuai movie
  const handleWatchTrailer = async (movieId: number) => {
    setLoading(true);
    try {
      const videos: TmdbVideo[] = await getMovieVideos(movieId);
      const trailer = videos.find(
        (v) => v.type === "Trailer" && v.site === "YouTube",
      );
      if (trailer) setTrailerKey(trailer.key);
      else {
        setTrailerKey(null);
        alert("Trailer tidak ditemukan untuk film ini 😢");
      }
    } catch (err) {
      console.error("Error fetching trailer:", err);
      setTrailerKey(null);
    } finally {
      setLoading(false);
    }
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

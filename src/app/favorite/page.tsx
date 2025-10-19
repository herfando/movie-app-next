"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export default function Favorite() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        // Contoh: ambil movie “top rated” TMDb sebagai data “favorite”
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error("Gagal ambil data favorit:", err);
      }
    }
    fetchFavorites();
  }, []);

  return (
    <section className="bg-black min-h-screen text-white py-20 px-10">
      <h1 className="text-4xl font-bold mb-10">Favorite Movies</h1>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-[#181D27] rounded-lg overflow-hidden hover:scale-105 transition">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              className="w-full h-auto object-cover"
            />
            <div className="p-3">
              <h2 className="font-semibold text-lg line-clamp-1">{movie.title}</h2>
              <p className="text-sm text-gray-400">⭐ {movie.vote_average.toFixed(1)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

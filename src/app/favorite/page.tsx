"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import Navbar from "@/components/container/Navbar";
import Footer from "@/components/container/Footer";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

export default function Favorite() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchFavorites() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      setMovies(data.results.slice(0, 10));
    }
    fetchFavorites();
  }, []);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />

      <section className="bg-black min-h-screen text-white py-24 px-6 md:px-20">
        <h1 className="text-4xl font-bold mb-10 mt-2">Favorites</h1>

        <div className="grid grid-cols-1 gap-10">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative flex flex-col md:flex-row items-start md:items-stretch gap-6 border-b border-[#1F242E] pb-10"
            >
              {/* ❤️ Heart Icon */}
              <button className="absolute top-2 right-2 bg-[#181D27] hover:bg-[#222833] p-2 rounded-full transition">
                <Heart className="w-5 h-5 fill-[#E50914] stroke-[#E50914]" />
              </button>

              {/* Poster */}
              <div className="w-full md:w-[180px] flex-shrink-0">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={180}
                  height={270}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>

              {/* Info kanan */}
              <div className="flex flex-col justify-between flex-1 pr-10">
                <div>
                  <h2 className="text-xl md:text-3xl font-semibold mb-2">
                    {movie.title}
                  </h2>
                  <div className="flex items-center gap-2 text-white mb-3 text-xl">
                    <Star className="w-4 h-4 fill-[#E4A802] stroke-[#E4A802]" />
                    <span>{movie.vote_average.toFixed(1)}/10</span>
                  </div>
                  <p className="text-[#A4A7AE] text-sm md:text-base line-clamp-3 md:line-clamp-4">
                    {movie.overview}
                  </p>
                </div>

                {/* Tombol Watch Trailer */}
                <div className="mt-5">
                  <button className="inline-flex items-center content-start justify-center gap-3 bg-[#961200] hover:bg-[#b11700] text-white px-7 py-4 mb-10 rounded-full transition">
                    <span className="font-medium">Watch Trailer</span>

                    {/* 🎯 Custom Play Button - lingkaran kecil, bolong besar */}
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center relative">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute"
                      >
                        <path
                          d="M3 2L10 6.3L3 10.6V2Z"
                          fill="#961200" // warna tombol → bolongnya tembus
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

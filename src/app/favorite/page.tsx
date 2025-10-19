"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Heart, Star, Video } from "lucide-react";
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
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        setMovies(data.results.slice(0, 10)); // ambil 10 film biar tidak panjang
      } catch (err) {
        console.error("Gagal ambil data favorit:", err);
      }
    }
    fetchFavorites();
  }, []);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />

      <section className="bg-black min-h-screen text-white py-24 px-6 md:px-20">
        <h1 className="text-3xl font-bold mb-12">Favorites</h1>

        <div className="grid grid-cols-1 gap-12">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex flex-col md:flex-row gap-6 border-b border-[#1F242E] pb-10"
            >
              {/* Poster kiri */}
              <div className="relative w-full md:w-[200px] flex-shrink-0">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={200}
                  height={300}
                  className="rounded-lg w-full h-auto object-cover"
                />
                <button className="absolute top-3 right-3 bg-[#181D27] hover:bg-[#222833] p-2 rounded-full transition">
                  <Heart className="w-5 h-5 stroke-[#E50914]" />
                </button>
              </div>

              {/* Info kanan */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    {movie.title}
                  </h2>
                  <div className="flex items-center gap-2 text-[#E4A802] mb-3">
                    <Star className="w-4 h-4 fill-[#E4A802] stroke-[#E4A802]" />
                    <span>{movie.vote_average.toFixed(1)}/10</span>
                  </div>
                  <p className="text-[#A4A7AE] text-sm md:text-base line-clamp-3 md:line-clamp-4">
                    {movie.overview}
                  </p>
                </div>

                {/* Tombol bawah */}
                <div className="mt-5">
                  <button className="flex justify-center items-center gap-2 bg-[#961200] hover:bg-[#b11700] text-white px-6 py-2 rounded-full transition w-[150px]">
                    <Video className="w-5 h-5" />
                    <span>Watch Trailer</span>
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

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Heart, Star, Film } from "lucide-react";
import Navbar from "@/components/container/Navbar";
import Footer from "@/components/container/Footer";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

interface TmdbVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export default function Favorite() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isExplore, setIsExplore] = useState(false);
  const [blurMap, setBlurMap] = useState<Record<number, boolean>>({});

  useEffect(() => {
    async function fetchMovies() {
      const baseUrl = "https://api.themoviedb.org/3";
      const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

      const url = query
        ? `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(
            query
          )}&page=1`
        : `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

      const res = await fetch(url);
      const data = await res.json();
      const results = data.results.slice(0, 10);
      setMovies(results);

      const blurState: Record<number, boolean> = {};
      results.forEach((m: Movie) => (blurState[m.id] = true));
      setBlurMap(blurState);
    }

    fetchMovies();
  }, [query]);

  const handleWatchTrailer = async (movieId: number) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
      );
      const data = await res.json();
      const trailer = data.results.find(
        (vid: TmdbVideo) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      if (trailer) setTrailerKey(trailer.key);
      else alert("Trailer tidak ditemukan 😢");
    } catch (err) {
      console.error("Gagal ambil trailer:", err);
    }
  };

  const closeTrailer = () => setTrailerKey(null);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
    setBlurMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />

      <section className="relative bg-black min-h-screen text-white py-20 px-6 md:px-20">
        <h1 className="text-4xl font-bold mb-10 mt-2">Favorites</h1>

        {/* 🌟 Tampilan awal Explore Movie */}
        {!isExplore && (
          <div className="flex flex-col items-center justify-start">
            <Image src="/frame52.png" className="w-34 h-35 text-gray-500 mb-6" width={200} height={200} alt="video" />
            <p className="font-semibold mb-2">Data Empty</p>
            <p className="text-sm text-gray-400 mb-6">
              You don’t have a favorite movie yet
            </p>
            <button
              onClick={() => setIsExplore(true)}
              className="bg-[#E50914] hover:bg-[#b10c10] text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Explore Movie
            </button>
          </div>
        )}

        {/* 🎬 Daftar Film */}
        {isExplore && (
          <div className="relative transition-all duration-700">
            {movies.map((movie) => {
              const isFav = favorites.includes(movie.id);
              const isBlur = blurMap[movie.id];

              return (
                <div
                  key={movie.id}
                  onClick={(e) => {
                    const target = e.target as HTMLElement;
                    if (target.closest("button[data-role='trailer']")) return;
                    toggleFavorite(movie.id);
                  }}
                  className={`relative cursor-pointer flex flex-col md:flex-row items-start md:items-stretch gap-6 border-b border-[#1F242E] pb-10 mb-10 transition-all duration-500 ease-in-out ${
                    isBlur
                      ? "brightness-[0.5] opacity-80 scale-[0.90]"
                      : "brightness-100 opacity-100 scale-100"
                  }`}
                  style={{ transformOrigin: "center" }}
                >
                  {/* ❤️ Love */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(movie.id);
                    }}
                    className="absolute top-2 right-2 bg-[#181D27]/70 hover:bg-[#222833] p-2 rounded-full transition z-20"
                  >
                    <Heart
                      className={`w-5 h-5 transition ${
                        isFav
                          ? "fill-[#E50914] stroke-[#E50914]"
                          : "stroke-white"
                      }`}
                    />
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

                  {/* Info */}
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

                    {/* 🎥 Watch Trailer */}
                    <div className="mt-5">
                      <button
                        data-role="trailer"
                        onClick={() => handleWatchTrailer(movie.id)}
                        className="cursor-pointer inline-flex items-center justify-center gap-3 bg-[#961200] hover:bg-[#b11700] text-white px-7 py-4 mb-10 rounded-full transition"
                      >
                        <span className="font-medium">Watch Trailer</span>
                        <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center relative">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute"
                          >
                            <path d="M3 2L10 6.3L3 10.6V2Z" fill="#961200" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 🎞 Modal Trailer */}
      {trailerKey && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={closeTrailer}
        >
          <div
            className="relative w-[90%] md:w-[60%] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              title="YouTube trailer"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

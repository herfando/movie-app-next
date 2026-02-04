"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Heart, Star } from "lucide-react";

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
            query,
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
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
      );
      const data = await res.json();
      const trailer = data.results.find(
        (vid: TmdbVideo) => vid.type === "Trailer" && vid.site === "YouTube",
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
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
    setBlurMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <section className="relative bg-black min-h-screen text-white py-20 px-6 md:px-20">
        <h1 className="text-4xl font-bold mb-10 mt-2">Favorites</h1>

        {/* Empty State */}
        {!isExplore && (
          <div className="flex flex-col items-center justify-start">
            <Image
              src="/video.png"
              className="w-34 h-35 text-gray-500 mb-6"
              width={200}
              height={200}
              alt="video"
              priority
            />
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

        {/* Movie List */}
        {isExplore && (
          <div className="relative transition-all duration-700">
            {movies.map((movie) => {
              const isFav = favorites.includes(movie.id);
              const isBlur = blurMap[movie.id];

              return (
                <div
                  key={movie.id}
                  onClick={() => toggleFavorite(movie.id)}
                  className={`relative flex flex-row md:flex-row items-start gap-4 border-b border-[#1F242E] pb-10 mb-10 transition-all duration-500 ease-in-out cursor-pointer ${
                    isBlur
                      ? "brightness-[0.7] opacity-80 scale-[0.9]"
                      : "brightness-100 opacity-100 scale-100"
                  }`}
                  style={{ transformOrigin: "center" }}
                >
                  {/* Heart icon (stop click bubbling) */}
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
                  <div className="w-[100px] h-[140px] flex-shrink-0 md:w-[160px] md:h-[240px]">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      width={160}
                      height={240}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h2 className="text-[16px] md:text-2xl font-semibold mb-1 md:mb-2">
                        {movie.title}
                      </h2>
                      <div className="flex items-center gap-2 text-white mb-2 text-[14px] md:text-lg">
                        <Star className="w-4 h-4 fill-[#E4A802] stroke-[#E4A802]" />
                        <span>{movie.vote_average.toFixed(1)}/10</span>
                      </div>
                      <p className="text-[#A4A7AE] text-sm md:text-base line-clamp-2 md:line-clamp-3">
                        {movie.overview}
                      </p>
                    </div>

                    {/* Watch Trailer */}
                    <div className="mt-4 md:mt-5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // biar gak ikut toggle
                          handleWatchTrailer(movie.id);
                        }}
                        className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#961200] hover:bg-[#b11700] text-white px-7 py-3 md:py-4 rounded-full transition"
                      >
                        <span className="font-medium text-[14px] md:text-base">
                          Watch Trailer
                        </span>
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

      {/* Trailer Modal */}
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
    </>
  );
}

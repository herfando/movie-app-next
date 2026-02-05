"use client";

import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { useFavorites, Movie } from "@/context/favoritesContext";
import { useSearch } from "@/context/searchContext";
import Link from "next/link";

export default function Favorite() {
  const { search } = useSearch(); // search global dari Navbar
  const {
    movies,
    loading,
    favorites,
    toggleFavorite,
    trailerKey,
    handleWatchTrailer,
    closeTrailer,
  } = useFavorites();

  // Ambil semua movie yang difavorit dulu, lalu filter sesuai search
  const filteredMovies = movies
    .filter((movie) => favorites.includes(movie.id))
    .filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()),
    );

  const isEmpty = filteredMovies.length === 0;

  return (
    <>
      <section className="relative bg-black min-h-screen text-white py-20 px-6 md:px-20">
        <h1 className="text-4xl font-bold mb-10 mt-2">Favorites</h1>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center text-white">
            Loading...
          </div>
        )}

        {/* Empty State */}
        {isEmpty && !loading && (
          <div className="fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center p-6 text-center rounded-lg">
            <Image
              src="/video.png"
              width={200}
              height={200}
              alt="video"
              priority
              className="mb-6"
            />
            <p className="font-semibold text-lg mb-2">Data Empty</p>
            <p className="text-sm text-gray-400 mb-6">
              You don’t have a favorite movie yet
            </p>
            <Link href="/">
              <button className="hover:bg-[#E50914] cursor-pointer bg-[#b10c10] text-white px-8 py-3 rounded-full font-semibold transition">
                Explore Movie
              </button>
            </Link>
          </div>
        )}

        {/* Movie List */}
        {!isEmpty && (
          <div className="relative transition-all duration-700">
            {filteredMovies.map((movie: Movie) => {
              const isFav = favorites.includes(movie.id);

              return (
                <div
                  key={movie.id}
                  className="relative flex flex-row md:flex-row items-start gap-4 border-b border-[#1F242E] pb-10 mb-10 transition-all duration-500 ease-in-out cursor-pointer"
                >
                  {/* Heart icon */}
                  <button
                    onClick={() => toggleFavorite(movie)}
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
                          e.stopPropagation();
                          handleWatchTrailer(movie.id);
                        }}
                        className="cursor-pointer w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#961200] hover:bg-[#b11700] text-white px-7 py-3 md:py-4 rounded-full transition"
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

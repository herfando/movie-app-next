"use client";

import Image from "next/image";
import { Heart, Calendar, Star, Video } from "lucide-react";
import { useState } from "react";
import { useDetail } from "@/query/hooks/useDetail";
import { useFavorites } from "@/context/favoritesContext";
import type { DetailProps, VideoDetail } from "@/query/types/detailType";

export default function Detail({ movieId }: DetailProps) {
  const { movie, cast, videos, loading } = useDetail(String(movieId));
  const [showTrailer, setShowTrailer] = useState(false);
  const genreName = movie?.genres?.[0]?.name || "Action";
  const { favorites, toggleFavorite } = useFavorites();
  const trailer = videos?.find(
    (v: VideoDetail) => v.type === "Trailer" && v.site === "YouTube",
  );

  if (loading || !movie)
    return <div className="text-white p-10">Loading...</div>;

  // TMDB IMAGE
  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "/image3.png";

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/image10.png";

  return (
    <>
      <section className="bg-black w-full md:h-[1383px] h-[1345px] flex items-center relative overflow-hidden">
        <Image
          className="md:flex hidden top-0 left-0 w-full absolute"
          src={backdropUrl}
          alt={movie.title}
          width={1920}
          height={1080}
        />
        <Image
          className="md:hidden flex top-0 left-0 w-full absolute"
          src={backdropUrl}
          alt={movie.title}
          width={1920}
          height={1080}
        />

        {/* Movie */}
        <div className=" absolute flex md:translate-x-20 translate-x-5 gap-10 md:-translate-y-30 -translate-y-70">
          <div className="absolute">
            <Image
              className="md:w-[260px] md:h-[384px]"
              src={posterUrl}
              alt={movie.title}
              width={126}
              height={171}
            />
          </div>

          <div className="grid grid-cols-1">
            <div className="gap-5 grid content-start md:translate-x-80 translate-x-35">
              <span className="text-white w-[229px] md:w-full md:text-4xl text-xl font-bold">
                {movie.title}
              </span>

              <div className="items-center flex md:gap-2 gap-1 text-xs content-center">
                <Calendar className="stroke-white text-white md:scale-100 scale-75" />
                <span className="text-white">{movie.release_date}</span>
              </div>

              {/* Watch Trailer Desktop */}
              <div className="md:mt-0 mt-10 flex items-center gap-3">
                <button
                  type="button"
                  className="cursor-pointer md:flex hidden text-white h-[52px] w-[220px] justify-center items-center md:h-[52px] md:w-[230px] relative rounded-full bg-[#961200]"
                  onClick={() => trailer && setShowTrailer(true)}
                >
                  Watch Trailer
                  <Image
                    src="/Play.png"
                    alt="vektor"
                    className="pl-2"
                    width={30}
                    height={30}
                  />
                </button>

                <button
                  className="md:flex hidden content-center md:w-[52px] md:h-[52px] w-[44px] h-[44px] border rounded-full justify-center items-center border-[#181D27] bg-[#181D27]"
                  onClick={() =>
                    toggleFavorite({
                      id: movie.id,
                      title: movie.title,
                      overview: movie.overview,
                      poster_path: movie.poster_path,
                      vote_average: movie.vote_average,
                    })
                  }
                >
                  {favorites.includes(movie.id) ? (
                    <Heart className="fill-[#961200] md:w-8 md:h-8 w-6 h-6 stroke-[#961200]" />
                  ) : (
                    <Heart className=" md:w-8 md:h-8 w-6 h-6 stroke-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Watch Trailer Mobile */}
            <div className=" flex items-center gap-3 w-full translate-y-20 ">
              <button
                type="button"
                className="md:hidden flex text-white h-[44px] w-[301px] justify-center items-center md:h-[52px] md:w-[230px] relative rounded-full bg-[#961200]"
                onClick={() => trailer && setShowTrailer(true)}
              >
                Watch Trailer
                <Image
                  src="/Play.png"
                  alt="vektor"
                  className="pl-2"
                  width={30}
                  height={30}
                />
              </button>

              <button
                className="md:hidden flex content-center md:w-[52px] md:h-[52px] w-[44px] h-[44px] border rounded-full justify-center items-center border-[#181D27] bg-[#181D27]"
                onClick={() =>
                  toggleFavorite({
                    id: movie.id,
                    title: movie.title,
                    overview: movie.overview,
                    poster_path: movie.poster_path,
                    vote_average: movie.vote_average,
                  })
                }
              >
                {favorites.includes(movie.id) ? (
                  <Heart className="fill-[#961200] md:w-8 md:h-8 w-6 h-6 stroke-[#961200]" />
                ) : (
                  <Heart className=" md:w-8 md:h-8 w-6 h-6 stroke-white" />
                )}
              </button>
            </div>

            {/* Rating, Genre & Age limit */}
            <div className=" text-white md:gap-10 gap-2 flex mt-5 md:translate-x-80 translate-x-0 translate-y-20">
              <div className="border-[#252B37] border rounded-2xl flex flex-col gap-2 content-center md:w-[276px] md:h-[146px] w-[112px] h-[120px] bg-[#000000] justify-center items-center">
                <Star className="stroke-[#E4A802] fill-[#E4A802]" />
                Rating <span>{movie.vote_average}/10</span>
              </div>

              <div className="border-[#252B37] border rounded-2xl flex flex-col gap-2 content-center md:w-[276px] md:h-[146px] w-[112px] h-[120px] bg-[#000000] justify-center items-center">
                <Video className="stroke-white fill-white" />
                Genre <span>{genreName}</span>
              </div>

              <div className="border-[#252B37] border rounded-2xl flex flex-col gap-2 content-center md:w-[276px] md:h-[146px] w-[112px] h-[120px] bg-[#000000] justify-center items-center">
                <Image
                  src="/Vector4.png"
                  alt="agelimit"
                  width={26.65}
                  height={26.67}
                />
                Age Limit<span>13</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="max-h-40 overflow-y-auto absolute md:translate-y-45 translate-y-17 md:translate-x-20 translate-x-5 md:mr-40 mr-10">
          <h1 className="text-3xl text-white font-bold md:mb-4 mb-1">
            Overview
          </h1>
          <span className="text-[#A4A7AE] text-l  ">{movie.overview}</span>
        </div>

        {/* Cast & Crew */}
        <div className="absolute md:translate-y-115 translate-y-105 md:translate-x-20 translate-x-5">
          <h1 className="text-3xl text-white font-bold md:mb-8 mb-1">
            Cast & Crew
          </h1>

          <div className="justify-self-center-safe  grid md:grid-cols-4 grid-cols-2 md:gap-15 md:gap-x-30 gap-x-5 gap-2 gap-y-5">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="flex gap-4">
                <Image
                  className="md:w-[69px] md:h-[104px] object-cover"
                  src={
                    cast[i]?.profile_path
                      ? `https://image.tmdb.org/t/p/w185${cast[i].profile_path}`
                      : `/image${5 + i}.png`
                  }
                  alt={cast[i]?.name || "Cast"}
                  width={55}
                  height={84}
                />

                <h4 className="gap-2 grid content-center text-white">
                  {cast[i]?.name || "Cast Name"}
                  <span className="text-[#A4A7AE]">
                    {cast[i]?.character || "Character"}
                  </span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL YOUTUBE TRAILER ================= */}
      {showTrailer && trailer && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setShowTrailer(false)}
        >
          <div
            className="relative w-[90%] md:w-[60%] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
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

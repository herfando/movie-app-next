"use client";

// ================= IMPORT =================
import Image from "next/image";
import Link from "next/link";
import { useMovies } from "@/query/hooks/useMovie";

// ================= COMPONENT =================
export default function Hero() {
  const {
    currentMovie,
    trailerKey,
    loading,
    handleWatchTrailer,
    closeTrailer,
  } = useMovies();

  console.log("Current Movie:", currentMovie);
  console.log("Trailer Key:", trailerKey);

  console.log("API Key:", process.env.NEXT_PUBLIC_TMDB_API_KEY);
  console.log("Base URL:", process.env.NEXT_PUBLIC_TMDB_BASE_URL);

  if (loading || !currentMovie) {
    return (
      <section className="w-full h-[448px] md:h-[673px] flex items-center justify-center bg-black text-white">
        Loading...
      </section>
    );
  }

  const imageUrl = `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`;

  return (
    <section className="w-full md:h-[673px] h-[448px] flex items-center relative overflow-hidden">
      {/* Background Image */}
      <Image
        key={currentMovie.id}
        src={imageUrl}
        alt={currentMovie.title}
        fill
        priority
        className="object-cover transition-all duration-1000 ease-in-out"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Konten teks */}
      <div className="relative z-10 translate-x-3 mr-4 translate-y-[60px] md:translate-y-0 md:translate-x-20 pl-0 md:w-[635px] w-full grid md:gap-7 gap-2">
        <h1 className="text-2xl md:text-5xl font-bold text-[#FDFDFD]">
          {currentMovie.title}
        </h1>
        <h4 className="text-md font-medium text-[#A4A7AE] line-clamp-3">
          {currentMovie.overview}
        </h4>

        <div className="gap-4 md:gap-0 grid md:grid-cols-2 grid-cols-1 md:mt-5 text-[#FDFDFD]">
          {/* Button Watch Trailer */}
          <button
            onClick={handleWatchTrailer}
            className="cursor-pointer h-[44px] w-full flex justify-center items-center md:h-[52px] md:w-[230px] rounded-full bg-[#961200] hover:bg-[#b81500] transition"
          >
            Watch Trailer
            <Image
              src="/Play.png"
              alt="play"
              className="pl-2"
              width={30}
              height={30}
            />
          </button>

          {/* Link Detail */}
          <Link
            href={`/detail/${currentMovie.id}`}
            className="h-[44px] w-full md:translate-x-[-60px] flex justify-center items-center md:h-[52px] md:w-[230px] bg-[#181D27] rounded-full hover:bg-[#222833] transition"
          >
            See Detail
          </Link>
        </div>
      </div>

      {/* Modal YouTube Trailer */}
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
    </section>
  );
}

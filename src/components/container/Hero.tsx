"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
}

interface TmdbVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}


export default function Hero() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trailerKey, setTrailerKey] = useState<string | null>(null); // 🎥 simpan YouTube key
  const router = useRouter();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        setMovies(data.results.slice(0, 100));
      } catch (err) {
        console.error("Gagal fetch data:", err);
      }
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [movies]);

  if (movies.length === 0) {
    return (
      <section className="w-full h-[448px] md:h-[673px] flex items-center justify-center bg-black text-white">
        Loading...
      </section>
    );
  }

  const currentMovie = movies[currentIndex];
  const imageUrl = `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`;

  // 🎥 buka modal trailer di window ini (tanpa ke tab baru)
  const handleWatchTrailer = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${currentMovie.id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
      );
      const data = await res.json();
      const trailer = data.results.find(
        (vid: TmdbVideo) => vid.type === "Trailer" && vid.site === "YouTube"
      );

      if (trailer) {
        setTrailerKey(trailer.key); // tampilkan modal YouTube
      } else {
        alert("Trailer tidak ditemukan untuk film ini 😢");
      }
    } catch (err) {
      console.error("Gagal ambil trailer:", err);
    }
  };

  const handleSeeDetail = () => {
    router.push(`/detail/${currentMovie.id}`);
  };

  const closeTrailer = () => {
    setTrailerKey(null);
  };

  return (
    <section className="w-full md:h-[673px] h-[448px] flex items-center relative overflow-hidden">
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
          <button
            onClick={handleWatchTrailer}
            className="cursor-pointer h-[44px] w-full flex justify-center items-center md:h-[52px] md:w-[230px] rounded-full bg-[#961200] hover:bg-[#b81500] transition"
          >
            <Image
              src="/Play.png"
              alt="play"
              className="pl-2"
              width={30}
              height={30}
            />
            Watch Trailer
          </button>

          <button
            onClick={handleSeeDetail}
            className="h-[44px] w-full md:translate-x-[-60px] flex justify-center items-center md:h-[52px] md:w-[230px] bg-[#181D27] rounded-full hover:bg-[#222833] transition"
          >
            See Detail
          </button>
        </div>
      </div>

      {/* 🎬 Modal YouTube trailer */}
      {trailerKey && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={closeTrailer} // klik luar area = tutup modal
        >
          <div
            className="relative w-[90%] md:w-[60%] aspect-video"
            onClick={(e) => e.stopPropagation()} // biar klik di video gak nutup
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

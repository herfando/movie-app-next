"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [movies, setMovies] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Ambil data populer dari TMDb
  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        setMovies(data.results.slice(0, 20)); // ambil 5 film teratas
      } catch (err) {
        console.error("Gagal fetch data:", err);
      }
    }

    fetchMovies();
  }, []);

  // ✅ Ganti gambar otomatis setiap 3 detik
  useEffect(() => {
    if (movies.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [movies]);

  // ✅ Jika belum ada data, tampilkan loading
  if (movies.length === 0) {
    return (
      <section className="w-full h-[448px] md:h-[673px] flex items-center justify-center bg-black text-white">
        Loading...
      </section>
    );
  }

  const currentMovie = movies[currentIndex];
  const imageUrl = `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`;

  return (
    <section className="w-full md:h-[673px] h-[448px] flex items-center relative overflow-hidden">
      {/* Background image dari TMDb */}
      <Image
        key={currentMovie.id}
        src={imageUrl}
        alt={currentMovie.title}
        fill
        priority
        className="object-cover transition-all duration-1000 ease-in-out"
      />

      {/* Overlay hitam transparan biar teks kelihatan */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Konten Hero */}
      <div className="relative z-10 translate-x-3 mr-4 translate-y-[60px] md:translate-y-0 md:translate-x-20 pl-0 md:w-[635px] w-full grid md:gap-7 gap-2">
        <h1 className="text-2xl md:text-5xl font-bold text-[#FDFDFD]">
          {currentMovie.title}
        </h1>
        <h4 className="text-md font-medium text-[#A4A7AE] line-clamp-3">
          {currentMovie.overview}
        </h4>
        <div className="gap-4 md:gap-0 grid md:grid-cols-2 grid-cols-1 md:mt-5 text-[#FDFDFD]">
          <form className="h-[44px] w-full flex justify-center items-center md:h-[52px] md:w-[230px] relative rounded-full bg-[#961200]">
            <button type="submit">Watch Trailer</button>
            <Image src="/Play.png" alt="play" className="pl-2" width={30} height={30} />
          </form>
          <form className="h-[44px] w-full md:translate-x-[-60px] flex justify-center items-center md:h-[52px] md:w-[230px] bg-[#181D27] rounded-full">
            <button type="submit">See Detail</button>
          </form>
        </div>
      </div>
    </section>
  );
}

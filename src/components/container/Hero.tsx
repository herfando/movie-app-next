"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdroup_path: string;
}

// Tipe data untuk trailer
interface VideoResult {
  key: string;
  type: string;
  site: string;
}

export default function Hero() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  // ambil data trending movie dari TMDB
  


  return (
    <section className="w-full md:h-[673px] h-[448px] flex items-center relative">
      <Image className="w-full absolute md:flex hidden" src="/image1.png" alt="bg" width={1920} height={1080} />
      <Image className="w-full absolute md:hidden flex" src="/image2.png" alt="bg" width={1920} height={1080} />

      <div className="translate-x-3 mr-4 translate-y-[60px] md:translate-y-0 md:translate-x-20 pl-0 md:w-[635px] w-full grid md:gap-7 gap-2">
        <h1 className="text-2xl md:text-5xl font-bold text-[#FDFDFD]">The Gorge</h1>
        <h4 className="text-md font-medium text-[#A4A7AE]">
          Two highly trained operatives grow close from a distance after being sent to guard opposite sides of a mysterious gorge. When an evil below emerges, they must work together to survive what lies within.
        </h4>
      <div className="gap-4 md:gap-0 grid md:grid-cols-2 grid-cols-1 md:mt-5 text-[#FDFDFD]">
          <form className="h-[44px] w-full flex justify-center items-center md:h-[52px] md:w-[230px] relative rounded-full bg-[#961200]">
            <button type="submit">Watch Trailer</button>
            <Image src="/Play.png" alt="vektor" className="pl-2" width={30} height={30} />
          </form>
          <form className="h-[44px] w-full md:translate-x-[-60px] flex justify-center items-center md:h-[52px] md:w-[230px] bg-[#181D27] rounded-full">
            <button type="submit">See Detail</button>
          </form>
        </div>
        </div>
    </section>
  );
}

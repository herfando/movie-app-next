"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";

interface Movie {
  id: number;
  img: string;
  title: string;
  rating: string;
}

export default function Trending({ movies }: { movies: Movie[] }) {
  const router = useRouter();

  return (
    <section className="w-full py-10 md:px-[70px] px-[50px] bg-black relative">
      <h1 className="md:pl-5 pl-3 md:text-5xl text-2xl mb-6 font-bold text-white">
        Trending Now
      </h1>

      <Carousel className="gap-x-6 px-4">
        <CarouselContent>
          {movies.map((item, index) => (
            <CarouselItem key={item.id} className="basis-1/2 md:basis-1/5">
              <div className="relative grid justify-center items-center">
                {/* Nomor lingkaran */}
                <div className="absolute top-2 md:left-8 left-12 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-700 text-white flex items-center justify-center text-sm md:text-base font-bold z-10">
                  {index + 1}
                </div>

                {/* Movie Card */}
                <div
                  className="cursor-pointer group"
                  onClick={() => router.push(`/detail/${item.id}`)} // ✅ gunakan item.id
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={216}
                    height={321}
                    className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                  />
                  <h2 className="text-lg font-semibold mt-3 text-[#FDFDFD]">
                    {item.title}
                  </h2>
                  <p className="text-md text-gray-400">⭐ {item.rating}/10</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

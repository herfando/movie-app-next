"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMovieList } from "@/query/hooks/useMovieList";
import { useSearch } from "@/context/searchContext";
import Link from "next/link";
import { useFavorites } from "@/context/favoritesContext";
import { Heart } from "lucide-react";

export default function Trending() {
  const { trending, trendingLoading } = useMovieList();
  const { search } = useSearch();
  const { favorites, toggleFavorite } = useFavorites();

  if (trendingLoading) return <div className="text-white p-10">Loading...</div>;

  const filteredTrending = trending.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="w-full py-10 md:px-[70px] px-[50px] bg-black relative">
      <h1 className="md:pl-5 pl-3 md:text-5xl text-2xl mb-6 font-bold text-white">
        Trending Now
      </h1>
      <Carousel className="gap-x-6 px-4">
        <CarouselContent>
          {filteredTrending.map((item, index) => {
            const img = item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "/fallback.png";

            const rating = item.vote_average
              ? item.vote_average.toFixed(1)
              : "N/A";

            return (
              <CarouselItem key={item.id} className="basis-1/2 md:basis-1/5">
                <div className="relative grid justify-center items-center">
                  <div className="absolute md:top-2 top-1 md:left-8 left-1 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-700 text-white flex items-center justify-center text-sm md:text-base font-bold z-10">
                    {index + 1}
                  </div>
                  <Link href={`/detail/${item.id}`}>
                    <Image
                      src={img}
                      alt={item.title}
                      width={216}
                      height={321}
                      className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                    />
                  </Link>
                  <button
                    className="z-10 absolute md:right-8 right-2 md:top-3 top-2 cursor-pointer mw:h-8 md:w-8 w-6 h-6 transition"
                    onClick={() =>
                      toggleFavorite({
                        id: item.id,
                        title: item.title,
                        overview: item.overview,
                        poster_path: item.poster_path,
                        vote_average: item.vote_average,
                      })
                    }
                  >
                    {favorites.includes(item.id) ? (
                      <Heart className="fill-[#961200] md:w-8 md:h-8 w-6 h-6 stroke-[#961200]" />
                    ) : (
                      <Heart className=" md:w-8 md:h-8 w-6 h-6 stroke-white" />
                    )}
                  </button>
                  <h2 className="text-lg font-semibold mt-3 text-[#FDFDFD]">
                    {item.title}
                  </h2>
                  <p className="text-md text-gray-400">⭐ {rating}/10</p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

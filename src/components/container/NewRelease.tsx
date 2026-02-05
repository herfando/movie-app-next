"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useMovieList } from "@/query/hooks/useMovieList";
import { useSearch } from "@/context/searchContext";
import Link from "next/link";
import { useState } from "react";
import { useFavorites } from "@/context/favoritesContext";
import { Heart } from "lucide-react";

export default function NewReleaseSection() {
  const { newRelease, newReleaseLoading } = useMovieList();
  const { search } = useSearch();
  const [visibleCount, setVisibleCount] = useState(10);
  const { favorites, toggleFavorite } = useFavorites();

  if (newReleaseLoading)
    return <div className="text-white p-10">Loading...</div>;

  const filteredNewRelease = newRelease.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="w-full py-10 md:px-[80px] px-[50px] bg-black">
      <h1 className="md:text-5xl text-2xl mb-6 font-bold text-white">
        New Release
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-x-17">
        {filteredNewRelease.slice(0, visibleCount).map((item) => {
          const img = item.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : "/fallback.png";
          const rating = item.vote_average
            ? item.vote_average.toFixed(1)
            : "N/A";

          return (
            <div
              key={item.id}
              className="relative grid justify-center items-center"
            >
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
                className="z-10 absolute  right-2  top-2 cursor-pointer mw:h-8 md:w-8 w-6 h-6 transition"
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
          );
        })}
      </div>

      {visibleCount < filteredNewRelease.length && (
        <div className="flex justify-center mt-5">
          <Button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="md:w-[230px] md:h-[52px] w-[200px] h-[44px] rounded-full"
          >
            Load More
          </Button>
        </div>
      )}
    </section>
  );
}

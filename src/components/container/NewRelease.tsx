"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Movie {
  id: number;
  img: string;
  title: string;
  rating: string;
}

export default function NewReleaseSection({ movies }: { movies: Movie[] }) {
  const [visibleCount, setVisibleCount] = useState(10);

  return (
      <section className="w-full py-10 md:px-[80px] px-[50px] bg-black">
        <h1 className="md:text-5xl text-2xl mb-6 font-bold text-white">New Release</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-x-17">
        {movies.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="grid justify-center items-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={216}
                    height={321}
                    className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                  />
                  <h2 className="text-lg font-semibold mt-3 text-[#FDFDFD]">{item.title}</h2>
                  <p className="text-md text-gray-400">⭐ {item.rating}/10</p>
                </div>
              ))}
            </div>

      {visibleCount < movies.length && (
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

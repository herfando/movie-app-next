"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useFetchMovies } from "@/hooks/useFetchMovies";
import Image from "next/image";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);
  const [query, setQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const { trending, newRelease, loading } = useFetchMovies();

  const filteredNewRelease = newRelease.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  const filteredTrending = trending.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-white p-10">Loading...</div>
      ) : (
        <div className="relative w-full bg-black">
          {/* Background */}
          <Image className="w-full absolute md:flex hidden" src="/image1.png" alt="image1" width={1920} height={1080} />
          <Image className="w-full absolute md:hidden flex" src="/image2.png" alt="image2" width={1920} height={1080} />

          {/* Navbar */}
          <nav
            className={`fixed top-0 z-30 w-full md:h-[90px] h-[64px] mx-auto grid md:grid-cols-[1fr_3fr_1fr] grid-cols-2 justify-around items-center ${
              isOpen
                ? "bg-black"
                : scrolled
                ? "bg-black/60 backdrop-blur-md shadow-lg"
                : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <div className="md:translate-x-20 translate-x-5 text-[#FDFDFD] flex flex-1 gap-3 items-center">
              <Image
                className="md:w-[33.33px] md:h-[31.18] w-[23.33px] h-[21.82px]"
                src="/Vector1.png"
                alt="logo movie"
                width={33}
                height={31}
              />
              <h1 className="md:text-[28.4px] text-[19.9px]">Movie</h1>
            </div>

            {/* Menu */}
            <h2 className="text-[#FFFFFF] md:flex flex-1 gap-10 hidden font-medium">
              <span>Home</span> <span>Favorites</span>
            </h2>

            {/* Desktop Search */}
            <form className="relative md:flex hidden items-center">
              <Image src="/Vector2.png" alt="search" className="absolute pl-3" width={30} height={30} />
              <input
                type="text"
                placeholder="Search Movie"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="text-white border bg-[#252B37] border-[#252B37] rounded-lg md:w-[243px] md:h-[56px] w-[180px] h-[56px] pl-10"
              />
            </form>

            {/* Mobile Search Icon & Hamburger */}
            <div className="md:hidden flex justify-end items-center gap-4 translate-x-[-13px]">
              {!showMobileSearch && (
                <Image
                  src="/Vector3.png"
                  alt="search"
                  onClick={() => setShowMobileSearch(true)}
                  className="cursor-pointer"
                  width={20}
                  height={20}
                />
              )}
              <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" size={20} />
            </div>

            {/* Mobile Search Input */}
            {showMobileSearch && (
              <form className="top-0 left-1/3 md:hidden absolute flex items-center px-5 mt-2">
                <Image src="/Vector2.png" alt="search" className="absolute pl-3" width={30} height={0} />
                <input
                  type="text"
                  placeholder="Search Movie"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="h-[56px] w-[180px] pl-10 rounded-lg bg-[#252B37] border border-[#252B37] text-white"
                />
              </form>
            )}

            {/* Mobile Dropdown */}
            {isOpen && (
              <div className="md:hidden text-white pl-5 grid gap-8 content-start fixed md:top-[90px] top-[64px] left-0 w-full h-full z-50 bg-black">
                <span className="pt-4">Home</span>
                <span>Favorites</span>
              </div>
            )}
          </nav>

          {/* Hero Section */}
          <section className="w-full md:h-[673px] h-[448px] flex items-center">
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

          {/* Trending Now */}
          <section className="w-full py-10 md:px-[70px] px-[50px] bg-black relative">
            <h1 className="md:pl-5 pl-3 md:text-5xl text-2xl mb-6 font-bold text-white">Trending Now</h1>
            <Carousel className="gap-x-6 px-4">
              <CarouselContent>
                {filteredTrending.map((item) => (
                  <CarouselItem key={item.id} className="basis-1/2 md:basis-1/5">
                    <div className="grid justify-center items-center">
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>

          {/* New Release */}
          <section className="w-full py-10 md:px-[80px] px-[50px] bg-black">
            <h1 className="md:text-5xl text-2xl mb-6 font-bold text-white">New Release</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-x-17">
              {filteredNewRelease.slice(0, visibleCount).map((item) => (
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

          {/* Footer */}
          <footer className="gap-5 md:pl-20 pl-10 mx-auto bg-black w-full h-[120px] grid md:grid-cols-2 grid-cols-1 justify-center item-center content-center">
            <div className="text-[#FDFDFD] flex flex-1 gap-3 items-center">
              <Image
                className="md:w-[33.33px] md:h-[31.18] w-[23.33px] h-[21.82px]"
                src="/Vector1.png"
                alt="logo movie"
                width={33}
                height={31}
              />
              <h1 className="md:text-[28.4px] text-[19.9px]">Movie</h1>
            </div>
            <p className="text-[#535862] md:pl-55 pl-0 grid md:justify-center justify-start items-center">
              Copyright &copy; {new Date().getFullYear()} Movie Explorer
            </p>
          </footer>
        </div>
      )}
    </>
  );
}

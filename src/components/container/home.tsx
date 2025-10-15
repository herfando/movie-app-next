"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import Hamburger from "hamburger-react";
import { useState } from "react";


export interface Movie {
  id: number;
  img: string;
  title: string;
  rating: string;
}

const trendingmovie: Movie[] = [
  { id: 1, img: "/movie1.png", title:"The Gorge", rating: "7.9" },
  { id: 2, img: "/movie2.png", title:"Mufasa: The Lion King", rating: "7.9" },
  { id: 3, img: "/movie3.png", title:"The Brutalist", rating: "7.9" },
  { id: 4, img: "/movie4.png", title:"Companion", rating: "7.9" },
  { id: 5, img: "/movie5.png", title:"Brave New World", rating: "7.9" },
  { id: 6, img: "/movie6.png", title:"Dog Man", rating: "7.0" },
];

const newmovie: Movie[] = [
  { id: 7, img: "/movie7.png", title:"Conclave", rating: "7.1" },
  { id: 8, img: "/movie8.png", title:"Flight Risk", rating: "5.8" },
  { id: 9, img: "/movie9.png", title:"Paddington in Peru", rating: "7.0" },
  { id: 10, img: "/movie10.png", title:"My Fault: London", rating: "7.67" },
  { id: 11, img: "/movie11.png", title:"Mad About the Boy", rating: "6.8" },
  { id: 12, img: "/movie12.png", title:"Better Man", rating: "7.5" },
  { id: 13, img: "/movie13.png", title:"Sirens of the Deep", rating: "7.3" },
  { id: 14, img: "/movie14.png", title:"Nosferatu", rating: "6.7" },
  { id: 15, img: "/movie15.png", title:"September 5", rating: "6.9" },
  { id: 16, img: "/movie16.png", title:"Anora", rating: "7.0" },
  { id: 17, img: "/movie17.png", title:"Ne Zha 2", rating: "7.8" },
  { id: 18, img: "/movie18.png", title:"The Last Showgirl", rating: "6.7" },
  { id: 19, img: "/movie19.png", title:"Sonic the Hedgehog 3", rating: "7.7" },
  { id: 20, img: "/movie20.png", title:"La Dolce Villa", rating: "6.4" },
  { id: 21, img: "/movie21.png", title:"The Order", rating: "6.6" },
];

export default function Home() {
  const [ isOpen, setOpen ] = useState(false);
  return (
    <>
      
      <div className="relative w-full overflow-hidden bg-black ">
        <img className="w-full absolute md:flex hidden" src="/image1.png" alt="image1" />
        <img className="w-full absolute md:hidden flex" src="/image2.png" alt="image2" />
        {/* Navbar */}
        <nav  className={`relative z-50 w-full md:h-[90px] h-[64px] mx-auto grid md:grid-cols-[1fr_3fr_1fr] grid-cols-2 justify-around items-center
                ${isOpen ? "bg-black" : "bg-transparent" }`}
        >
          {/* Movie */}
          <div className="md:translate-x-20 translate-x-5 text-[#FDFDFD] flex flex-1 gap-3 items-center">
            <img className="md:w-[33.33px] md:h-[31.18] w-[23.33px] h-[21.82px]" src="/Vector1.png" alt="logo movie" />
            <h1 className="md:text-[28.4px] text-[19.9px]">Movie</h1>
          </div>
          {/* Middle list */}
          <h2 className="text-[#FFFFFF] md:flex flex-1 gap-10 hidden font-medium">
            <span>Home</span> <span>Favorites</span>
          </h2>
          {/* Search & Menu */}
          <form action="" className=" relative md:flex hidden items-center">
            <img src="/Vector2.png" alt="search" className="absolute pl-3" />
            <input type="text" placeholder="Search Movie" className="text-[#717680] border bg-[#252B37] border-[#252B37] rounded-lg w-[243px] h-[56] pl-10" />
          </form>
          <div className=" md:hidden flex justify-end items-center gap-4 translate-x-[-13px]">
            {!isOpen && <img src="/Vector3.png" alt="search" />}
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff"/>
          </div>
          {/* Dropdown Menu is Open */}
            {isOpen && (
              <div className="text-white fixed md:top-[90px] top-[64px] left-0 w-full h-[10000px] z-50 bg-black">
                
                <span>Home</span>
                <span>Favorites</span>
              </div>
            )}
        </nav>

        {/* Hero */}
        <section className="w-full md:h-[673px] h-[448px] flex items-center">
          {/* Text */}
          <div className="translate-x-3 mr-4 translate-y-[60px] md:translate-y-0 md:translate-x-20 pl-0 md:w-[635px] w-full grid md:gap-7 gap-2">
            <h1 className="text-2xl md:text-5xl font-bold text-[#FDFDFD]">The Gorge</h1>
            <h4 className="text-md font-medium text-[#A4A7AE]">Two highly trained operatives grow close from a distance after being sent to guard opposite sides of a mysterious gorge. When an evil below emerges, they must work together to survive what lies within.</h4>
            {/* Button */}
            <div className="gap-4 md:gap-0 grid md:grid-cols-2 grid-cols-1 md:mt-5 text-[#FDFDFD]">
              <form action="" className="h-[44px] w-full flex justify-center items-center md:h-[52px] md:w-[230px] relative rounded-full bg-[#961200]">
                <button type="submit">Watch Trailer</button>
                <img src="/Play.png" alt="vektor" className="pl-2" />
              </form>
              <form action="" className="h-[44px] w-full md:translate-x-[-60px] flex justify-center items-center md:h-[52px] md:w-[230px] bg-[#181D27] rounded-full">
                <button type="submit">See Detail</button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Trending Now */}
      <section className="w-full py-10 md:px-[80px] px-[50px] bg-black">
        <h1 className="md:text-5xl text-2xl mb-6 font-bold text-white">Trending Now</h1>
        <Carousel className="w-full mx-auto ">
          <CarouselContent>
            {trendingmovie.map((item, index) => (
              <CarouselItem
                key={item.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="grid justify-start items-center">
                  <img
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
        <h1 className="md:text-5xl text-2xl mb-6 font-bold text-white">
          New Release
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {newmovie.map((item) => (
            <div key={item.id} className=" grid justify-start items-center">
              <img
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
      </section>

      {/* Footer */}
      <footer className="gap-5 md:pl-20 pl-10 mx-auto bg-black w-full h-[120px] grid md:grid-cols-2 grid-cols-1 justify-center item-center content-center">
        {/* Movie */}
        <div className=" text-[#FDFDFD] flex flex-1 gap-3 items-center">
          <img className=" md:w-[33.33px] md:h-[31.18] w-[23.33px] h-[21.82px]" src="/Vector1.png" alt="logo movie" />
          <h1 className="md:text-[28.4px] text-[19.9px]">Movie</h1>
        </div> 
        {/* Copyright */}
        <p className=" text-[#535862] md:pl-55 pl-0  grid md:justify-center justify-start items-center">Copyright &copy; {new Date().getFullYear()} Movie Explorer</p>
      </footer>
    </>
  )
}
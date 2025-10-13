"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"


export interface Movie {
  id: number;
  img: string;
  title: string;
  rating: string;
}

const movie: Movie[] = [
  { id: 1, img: "/movie1.png", title:"The Gorge", rating: "7.9" },
  { id: 2, img: "/movie2.png", title:"Mufasa: The Lion King", rating: "7.9" },
  { id: 3, img: "/movie3.png", title:"The Brutalist", rating: "7.9" },
  { id: 4, img: "/movie4.png", title:"Companion", rating: "7.9" },
  { id: 5, img: "/movie5.png", title:"Brave New World", rating: "7.9" },
  { id: 6, img: "/movie6.png", title:"Dog Man", rating: "7.0" },
];


export default function home() {
  return (
    <>
      <div className="relative w-full overflow-hidden bg-black -z-20">
        <img className="w-full absolute -z-10 sm:flex hidden" src="/image1.png" alt="image1" />
        <img className="w-full absolute -z-10 sm:hidden flex" src="/image2.png" alt="image2" />
        {/* Navigation */}
        <nav className="  w-full sm:h-[90px] h-[64px] mx-auto grid sm:grid-cols-[1fr_3fr_1fr] grid-cols-2 justify-around items-center">
          {/* Movie */}
          <div className="text-[#FDFDFD] translate-x-3 sm:translate-x-0  flex flex-1 gap-3 sm:justify-center justify-start items-center">
            <img className="sm:w-[33.33px] sm:h-[31.18] w-[23.33px] h-[21.82px]" src="/Vector1.png" alt="logo movie" />
            <h1 className="sm:text-[28.4px] text-[19.9px]">Movie</h1>
          </div>
          {/* Middle list */}
          <h2 className=" sm:flex flex-1 gap-10 hidden font-medium">
            <span>Home</span> <span>Favorites</span>
          </h2>
          {/* Search & Menu */}
          <form action="" className=" relative sm:flex hidden items-center">
            <img src="/Vector2.png" alt="search" className="absolute pl-3" />
            <input type="text" placeholder="Search movie" className="border bg-[#252B37] border-[#252B37] rounded-lg w-[243px] h-[56] pl-10" />
          </form>
          <div className=" sm:hidden flex flex-1 justify-end items-center gap-4 translate-x-[-13px]">
            <img src="/Vector3.png" alt="search" />
            <img src="/Menu1.png" alt="search" />
          </div>
        </nav>

        {/* Hero */}
        <section className="w-full sm:h-[673px] h-[448px] flex items-center">
          {/* Text */}
          <div className="translate-x-3 mr-4 translate-y-[60px] sm:translate-y-0 sm:translate-x-15 pl-0 sm:w-[635px] w-full grid sm:gap-7 gap-2">
            <h1 className="text-2xl sm:text-5xl font-bold text-[#FDFDFD]">The Gorge</h1>
            <h4 className="text-md font-medium text-[#A4A7AE]">Two highly trained operatives grow close from a distance after being sent to guard opposite sides of a mysterious gorge. When an evil below emerges, they must work together to survive what lies within.</h4>
            {/* Button */}
            <div className="gap-4 sm:gap-0 grid sm:grid-cols-2 grid-cols-1 sm:mt-5 text-[#FDFDFD]">
              <form action="" className="h-[44px] w-full flex justify-center items-center sm:h-[52px] sm:w-[230px] relative rounded-full bg-[#961200]">
                <button type="submit">Watch Trailer</button>
                <img src="/Play.png" alt="vektor" className="pl-2" />
              </form>
              <form action="" className="h-[44px] w-full sm:translate-x-[-60px] flex justify-center items-center sm:h-[52px] sm:w-[230px] bg-[#181D27] rounded-full">
                <button type="submit">See Detail</button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Trending Now */}
      <section className="grid w-full h-[565px] "> 
        <h1 className="sm:text-5xl text-2xl">Trending Now</h1>
      {/* tampilkan interface movie */}
      <div className="flex gap-3 w-full justify-center">
        {movie.map((movie) => (
          <div key={movie.id}>
            <img src={movie.img} alt={movie.title} width={216} height={321} />
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <p>⭐{movie.rating}/10</p>
          </div>
        ))}
      </div>
    
        <div>
          <Carousel className="bg-amber-500 h-[100px]">
            <CarouselContent>
              <CarouselItem className="basis-1/3">...</CarouselItem>
              <CarouselItem className="basis-1/3">...</CarouselItem>
              <CarouselItem className="basis-1/3">...</CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* New Release */}
      <section>


      </section>



    </>
  )
}
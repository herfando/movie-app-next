"use client";

import Image from "next/image"; 
import { Heart, Calendar, Star, Video } from "lucide-react"
export default function Favorite() {
  return (
      <section className="bg-black w-full md:h-[1383px] h-[1345px] flex items-center relative overflow-hidden">
        <Image className="md:flex hidden top-0 left-0 w-full absolute" src="/image3.png" alt="background" width={1920} height={1080} />
        <Image className="md:hidden flex top-0 left-0 w-full absolute" src="/image10.png" alt="background" width={1920} height={1080} />
        {/* Movie */}
        <div className="absolute flex md:translate-x-20 translate-x-5 gap-10 md:-translate-y-30 -translate-y-70">
          <div className="absolute">
            <Image 
            className="md:w-[260px] md:h-[384px]" 
            src="/movie5.png" 
            alt="movie" 
            width={126} 
            height={171} 
            />
          </div>
          <div className="grid grid-cols-1">
            <div className="gap-5 grid content-start md:translate-x-80 translate-x-35">
              <span className="text-white w-[229px] md:w-full md:text-4xl text-xl font-bold">Captain America: Brave New World</span>
              <div className="items-center flex md:gap-2 gap-1 text-xs content-center"><Calendar className="stroke-white text-white md:scale-100 scale-75"/> <span className="text-white">12 Februari 2025</span></div>
              {/* Watch Trailer */}
              <div className="flex items-center  gap-3">
                <form className="md:flex hidden text-white h-[52px] w-[220px] justify-center items-center md:h-[52px] md:w-[230px] relative rounded-full bg-[#961200]">
                  <button type="submit">Watch Trailer</button>
                  <Image src="/Play.png" alt="vektor" className="pl-2" width={30} height={30} />
                </form>
                <div className="md:flex hidden content-center md:w-[52px] md:h-[52px] w-[44px] h-[44px] border rounded-full justify-center items-center border-[#181D27] bg-[#181D27]"><Heart className="w-[24px] h-[24px] stroke-white fill-none md:stroke-[#961200] md:fill-[#961200]"></Heart></div>
              </div>
            </div>
            {/* Watch Trailer */}
            <div className="flex items-center gap-3 translate-y-20">
              <form className="md:hidden flex text-white h-[44px] w-[301px] justify-center items-center md:h-[52px] md:w-[230px] relative rounded-full bg-[#961200]">
                <button type="submit">Watch Trailer</button>
                  <Image src="/Play.png" alt="vektor" className="pl-2" width={30} height={30} />
                </form>
                <div className="md:hidden flex content-center md:w-[52px] md:h-[52px] w-[44px] h-[44px] border rounded-full justify-center items-center border-[#181D27] bg-[#181D27]"><Heart className="w-[24px] h-[24px] stroke-white fill-none md:stroke-[#961200] md:fill-[#961200]"></Heart></div>
            </div>
            {/* Rating, Genre & Age limit */}
            <div className=" text-white md:gap-10 gap-2 flex mt-5 md:translate-x-80 translate-x-0 translate-y-20">
              <div className="border-[#252B37] border rounded-2xl flex flex-col gap-2 content-center md:w-[276px] md:h-[146px] w-[112px] h-[120px] bg-[#000000] justify-center items-center"> <Star className="stroke-[#E4A802] fill-[#E4A802]"/>Rating <span>6.2/10</span> </div>
              <div className="border-[#252B37] border rounded-2xl flex flex-col gap-2 content-center md:w-[276px] md:h-[146px] w-[112px] h-[120px] bg-[#000000] justify-center items-center"> <Video className="stroke-white fill-white"/>Genre <span>Action</span> </div>
              <div className="border-[#252B37] border rounded-2xl flex flex-col gap-2 content-center md:w-[276px] md:h-[146px] w-[112px] h-[120px] bg-[#000000] justify-center items-center"> <Image src="/Vector4.png" alt="agelimit" width={26.65} height={26.67}/>Age Limit<span>13</span> </div>       
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="absolute md:translate-y-45 translate-y-17 md:translate-x-20 translate-x-5 md:mr-40 mr-10">
          <h1 className="text-3xl text-white font-bold md:mb-4 mb-1">Overview</h1>
          <span className="text-[#A4A7AE] text-l">After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.</span>
        </div>

        {/* Cast & Crew */}
        <div className="absolute md:translate-y-115 translate-y-105 md:translate-x-20 translate-x-5">
          <h1 className="text-3xl text-white font-bold md:mb-8 mb-1">Cast & Crew</h1>
          <div className="grid md:grid-cols-3 grid-cols-1  md:gap-15 gap-2">
            <div className="flex gap-4">
              <Image className="md:w-[69px] md:h-[104px]" src="/image5.png" alt="Anthony Mackie" width={55} height={84}/>
              <h4 className="gap-2 grid content-center text-white">Anthony Mackie<span className="text-[#A4A7AE]">Sam Wilson / Captain America</span></h4>
            </div>
            <div className="flex gap-4">
              <Image className="md:w-[69px] md:h-[104px]" src="/image6.png" alt="Anthony Mackie" width={55} height={84}/>
              <h4 className="gap-2 grid content-center text-white">Harrison Ford<span className="text-[#A4A7AE]">President Thaddeus Ross</span></h4>
            </div>
            <div className="flex gap-4">
              <Image className="md:w-[69px] md:h-[104px]" src="/image7.png" alt="Anthony Mackie" width={55} height={84}/>
              <h4 className="gap-2 grid content-center text-white">Danny Ramirez<span className="text-[#A4A7AE]">Joaquin Torres</span></h4>
            </div>
            <div className="flex gap-4">
              <Image className="md:w-[69px] md:h-[104px]" src="/image8.png" alt="Anthony Mackie" width={55} height={84}/>
              <h4 className="gap-2 grid content-center text-white">Shira Haas<span className="text-[#A4A7AE]">Ruth Bat-Seraph</span></h4>
            </div>
            <div className="flex gap-4">
              <Image className="md:w-[69px] md:h-[104px]" src="/image9.png" alt="Anthony Mackie" width={55} height={84}/>
              <h4 className="gap-2 grid content-center text-white">Tim Blake Nelson<span className="text-[#A4A7AE]">Samuel Sterns</span></h4>
            </div>
          </div>
        </div>
      </section>
        );
      }
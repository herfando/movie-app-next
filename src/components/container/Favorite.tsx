"use client";

import Image from "next/image"; 
import { Heart, Calendar, Star, Video } from "lucide-react"
export default function Favorite() {
  return (
      <section className="bg-black w-full md:h-[1383px] h-[1345px] flex items-center relative overflow-hidden">
        <Image className="top-0 left-0 w-full absolute" src="/image3.png" alt="background" width={1920} height={1080} />

        <div className="relative flex md:translate-x-20 translate-x-5 gap-5 -translate-y-30">
          <div>
            <Image 
            className="md:w-[260px] md:h-[384px]" 
            src="/movie5.png" 
            alt="movie" 
            width={116} 
            height={171} 
            />
          </div>
          <div>
            <div className="gap-5 grid content-start">
              <span className="text-white text-4xl font-bold">Captain America: Brave New World</span>
              <div className="items-center flex gap-2 text-2xl"><Calendar className="stroke-white text-white"/> <span className="text-white">12 Februari 2025</span></div>
              <div className="flex items-center  gap-3">
              <form className="h-[52px] w-[220px] flex justify-center items-center md:h-[52px] md:w-[230px] relative rounded-full bg-[#961200]">
                <button type="submit">Watch Trailer</button>
                <Image src="/Play.png" alt="vektor" className="pl-2" width={30} height={30} />
              </form>
              <div className="flex content-center md:w-[52px] md:h-[52px] w-[44px] h-[44px] border rounded-full justify-center items-center border-[#181D27] bg-[#181D27]"><Heart className="w-[24px] h-[24px] stroke-white fill-none md:stroke-[#961200] md:fill-[#961200]"></Heart></div>
              </div>
            </div>
            <div className="text-white gap-5 flex mt-5">
              <div className="rounded-2xl flex flex-col gap-2 content-center w-[276px] h-[146px] bg-[#000000] justify-center items-center"> <Star className="stroke-[#E4A802] fill-[#E4A802]"/>Rating <span>6.2/10</span> </div>
              <div className="rounded-2xl flex flex-col gap-2 content-center w-[276px] h-[146px] bg-[#000000] justify-center items-center"> <Video className="stroke-white fill-white"/>Genre <span>Action</span> </div>
              <div className="rounded-2xl flex flex-col gap-2 content-center w-[276px] h-[146px] bg-[#000000] justify-center items-center"> <Image src="/Vector4.png" alt="agelimit" width={26.65} height={26.67}/>Age Limit<span>13</span> </div>
              

              
            </div>
          </div>
        </div>
      
      </section>
        );
      }
"use client";

import Image from "next/image"; 
import { Heart, Calendar } from "lucide-react"
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
          <div className="gap-5 grid content-start">
            <span className="text-white text-4xl font-bold">Captain America: Brave New World</span>
            <div className="items-center flex gap-2 taxt-2xl"><Calendar className="stroke-white text-white"/> <span className="text-white">12 Februari 2025</span></div>
            <div className="flex content-center md:w-[52px] md:h-[52px] w-[44px] h-[44px] border rounded-full justify-center items-center border-[#181D27] bg-[#181D27]"><Heart className="w-[24px] h-[24px] stroke-white fill-none md:stroke-[#961200] md:fill-[#961200]"></Heart></div>
          </div>
        </div>
      
      </section>
        );
      }
"use client";

import Image from "next/image"; 
export default function Favorite() {
  return (
      <section className="bg-black w-full md:h-[1383px] h-[1345px] flex items-center relative overflow-hidden">
            <Image className="top-0 left-0 w-full absolute" src="/image3.png" alt="bg" width={1920} height={1080} />
      </section>
        );
      }
"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="gap-5 md:pl-20 pl-10 mx-auto bg-black w-full h-[120px] grid md:grid-cols-2 grid-cols-1 justify-center item-center content-center">
      <div className="text-[#FDFDFD] flex flex-1 gap-3 items-center">
        <Image
          className="md:w-[33.34px] md:h-[31.18] w-[23.33px] h-[21.82px]"
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
  );
}

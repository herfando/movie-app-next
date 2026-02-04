"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Hamburger from "hamburger-react";
import Link from "next/link";

export default function Navbar() {
  // 🔹 state search ada di Navbar sendiri
  const [query, setQuery] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
      <Link href="/home">
        <div className="cursor-pointer md:translate-x-20 translate-x-5 text-[#FDFDFD] flex flex-1 gap-3 items-center">
          <Image
            className="md:w-[33.33px] md:h-[31.18] w-[23.33px] h-[21.82px]"
            src="/Vector1.png"
            alt="logo movie"
            width={33}
            height={31}
          />
          <h1 className="md:text-[28.4px] text-[19.9px]">Movie</h1>
        </div>
      </Link>

      {/* Menu */}
      <h2 className="text-[#FFFFFF] z-30 md:flex flex-1 gap-10 hidden font-medium">
        <Link href="/home" className="hover:text-[#E50914] transition">
          Home
        </Link>
        <Link href="/favorite" className="hover:text-[#E50914] transition">
          Favorites
        </Link>
      </h2>

      {/* Desktop Search */}
      <form className="relative md:flex hidden items-center">
        <Image
          src="/Vector2.png"
          alt="search"
          className="absolute pl-3"
          width={30}
          height={30}
        />
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
          <Image
            src="/Vector2.png"
            alt="search"
            className="absolute pl-3"
            width={30}
            height={0}
          />
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
          <Link
            href="/home"
            className="pt-4 hover:text-[#E50914] transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/favorite"
            className="hover:text-[#E50914] transition"
            onClick={() => setOpen(false)}
          >
            Favorites
          </Link>
        </div>
      )}
    </nav>
  );
}

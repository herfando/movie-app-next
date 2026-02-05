"use client";

import Hero from "@/components/container/Hero";
import Trending from "@/components/container/Trending";
import NewReleaseSection from "@/components/container/NewRelease";
import { useSearch } from "@/context/searchContext";

export default function Home() {
  const { searchActive } = useSearch();

  return (
    <div
      className={`bg-black min-h-screen transition-all duration-300 ${
        searchActive ? "pt-[90px]" : "pt-[0px]"
      }`}
    >
      <Hero />
      <Trending />
      <NewReleaseSection />
    </div>
  );
}

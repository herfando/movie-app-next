"use client";

import { useState } from "react";
import { useFetchMovies } from "@/hooks/useFetchMovies";
import Navbar from "@/components/container/Navbar";
import Hero from "@/components/container/Hero";
import Trending from "@/components/container/Trending";
import NewRelease from "@/components/container/NewRelease";
import Footer from "@/components/container/Footer";

export default function Home() {
  const { trending, newRelease, loading } = useFetchMovies();
  const [query, setQuery] = useState("");

  const filteredTrending = trending.filter((m) =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );
  const filteredNewRelease = newRelease.filter((m) =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="bg-black min-h-screen relative">
      <Navbar query={query} setQuery={setQuery} />
      <Hero />
      <Trending movies={filteredTrending} />
      <NewRelease movies={filteredNewRelease} />
      <Footer />
    </div>
  );
}

"use client"

import { useState } from "react";
import { useFetchMovies } from "@/hooks/useFetchMovies";
import Navbar from "@/components/container/Navbar";
import Detail from "@/components/container/Detail";
import Footer from "@/components/container/Footer";


export default function DetailPage() {
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
  <div>
    <Navbar query={query} setQuery={setQuery} />
    <Detail />
    <Footer />
  </div>
  ) 
 
}
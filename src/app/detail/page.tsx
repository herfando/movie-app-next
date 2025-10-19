"use client"

import { useState } from "react";
import { useFetchMovies } from "@/hooks/useFetchMovies";
import Navbar from "@/components/container/Navbar";
import Detail from "@/components/container/Detail";
import Footer from "@/components/container/Footer";



export default function DetailPage() {
  const { loading } = useFetchMovies();
  const [query, setQuery] = useState("");
  
  
    if (loading) return <div className="text-white p-10">Loading...</div>;
  return (
  <div>
    <Navbar query={query} setQuery={setQuery} />
    <Detail />
    <Footer />
  </div>
  ) 
 
}
"use client";

import { useState } from "react";
import { useFetchMovies } from "@/query/hooks/useFetchMovies";
import Navbar from "@/components/container/Navbar";
import Detail from "@/components/container/Detail";
import Footer from "@/components/container/Footer";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function DetailPage() {
  const { loading } = useFetchMovies();
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState<any>(null);

  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    if (!id) return;

    const fetchDetail = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
          },
        },
      );

      const data = await res.json();
      setMovie(data);
    };

    fetchDetail();
  }, [id]);

  if (loading || !movie)
    return <div className="text-white p-10">Loading...</div>;

  return (
    <div>
      <Navbar query={query} setQuery={setQuery} />
      <Detail movie={movie} />
      <Footer />
    </div>
  );
}

"use strict"

import { useEffect, useState } from "react";

export interface Movie {
    id: number;
    img: string;
    title: string;
    rating: number;
}

export function useFetchMovies() {
    const [trending, setTrending] = useState<Movie[]>([]);
    const [newRelease, setNewRelease] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            setLoading(true);
            const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;

            // Trending
            const trendingRes = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`);
            const trendingData = await trendingRes.json();
            setTrending(trendingData.results.map((item: any) => ({
                id: item.id,
                title: item.title,
                img: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "/fallback.png",
                rating: item.vote_average
            })));

            // New Release / Now Playing
            const newRes = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`);
            const newData = await newRes.json();
            setNewRelease(newData.results.map((item: any) => ({
                id: item.id,
                title: item.title,
                img: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "/fallback.png",
                rating: item.vote_average
            })));

            setLoading(false);
        }

        fetchMovies();
    }, []);
    return { trending, newRelease, loading };
}
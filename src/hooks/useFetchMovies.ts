"use client";

import { useEffect, useState } from "react";

// Tipe untuk data movie yang akan digunakan di komponen
export interface Movie {
    id: number;
    title: string;
    img: string;
    rating: string;
}

// Tipe data asli dari API TMDb (subset yang kita butuhkan saja)
interface TMDBMovie {
    id: number;
    title: string;
    poster_path: string | null;
    vote_average: number;
}

// Hook utama untuk fetch data
export function useFetchMovies() {
    const [trending, setTrending] = useState<Movie[]>([]);
    const [newRelease, setNewRelease] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
        const BASE_URL = "https://api.themoviedb.org/3";

        const fetchMovies = async () => {
            try {
                // Ambil data trending dan new release secara paralel
                const [trendingRes, newReleaseRes] = await Promise.all([
                    fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`),
                    fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=1`),
                ]);

                const trendingData = await trendingRes.json();
                const newReleaseData = await newReleaseRes.json();

                // Pastikan hasil API valid sebelum map
                if (Array.isArray(trendingData.results)) {
                    const trendingMovies: Movie[] = trendingData.results.map((m: TMDBMovie) => ({
                        id: m.id,
                        title: m.title,
                        img: m.poster_path
                            ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
                            : "/fallback.png",
                        rating: m.vote_average ? m.vote_average.toFixed(1) : "N/A",
                    }));
                    setTrending(trendingMovies);
                }

                if (Array.isArray(newReleaseData.results)) {
                    const newReleaseMovies: Movie[] = newReleaseData.results.map((m: TMDBMovie) => ({
                        id: m.id,
                        title: m.title,
                        img: m.poster_path
                            ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
                            : "/fallback.png",
                        rating: m.vote_average ? m.vote_average.toFixed(1) : "N/A",
                    }));
                    setNewRelease(newReleaseMovies);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return { trending, newRelease, loading };
}

"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { getPopularMovies, getMovieVideos } from "@/query/services/movieService";
import type { Movie, TmdbVideo } from "@/query/types/movieType";
import { useState, useEffect } from "react";

export const useMovies = () => {
    // state untuk hero slider
    const [currentIndex, setCurrentIndex] = useState(0);
    const [trailerKey, setTrailerKey] = useState<string | null>(null);

    // fetch movies populer (query)
    const popularMoviesQuery = useQuery<Movie[], Error>({
        queryKey: ["popularMovies"],
        queryFn: getPopularMovies,
    });

    // otomatis slider
    useEffect(() => {
        if (!popularMoviesQuery.data || popularMoviesQuery.data.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % popularMoviesQuery.data!.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [popularMoviesQuery.data]);

    const currentMovie = popularMoviesQuery.data?.[currentIndex];

    // fetch trailer (mutation)
    const trailerMutation = useMutation<TmdbVideo[], Error, number>({
        mutationFn: (id: number) => getMovieVideos(id),
        onSuccess: (videos) => {
            const trailer = videos.find((v) => v.type === "Trailer" && v.site === "YouTube");
            if (trailer) setTrailerKey(trailer.key);
            else alert("Trailer tidak ditemukan untuk film ini 😢");
        },
    });

    const handleWatchTrailer = () => {
        if (!currentMovie) return;
        trailerMutation.mutate(currentMovie.id);
    };

    const closeTrailer = () => setTrailerKey(null);

    return {
        movies: popularMoviesQuery.data ?? [],
        loading: popularMoviesQuery.isLoading,
        currentIndex,
        currentMovie,
        trailerKey,
        handleWatchTrailer,
        closeTrailer,
    };
};
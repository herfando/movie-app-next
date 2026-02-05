"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getTopRatedMovies, searchMovies, getMovieVideos } from "@/query/services/favoritesService";
import type { Movie, TmdbVideo } from "@/query/types/favoritesType";

export const useFavorites = () => {
    const [query, setQuery] = useState("");
    const [favorites, setFavorites] = useState<number[]>([]);
    const [blurMap, setBlurMap] = useState<Record<number, boolean>>({});
    const [trailerKey, setTrailerKey] = useState<string | null>(null);

    // Fetch movies
    const moviesQuery = useQuery<Movie[], Error>({
        queryKey: ["favoritesMovies", query],
        queryFn: () => (query ? searchMovies(query) : getTopRatedMovies()),
    });

    // Setup blur map
    useEffect(() => {
        if (!moviesQuery.data) return;
        const blurState: Record<number, boolean> = {};
        moviesQuery.data.forEach((m) => (blurState[m.id] = true));
        setBlurMap(blurState);
    }, [moviesQuery.data]);

    // Trailer mutation
    const trailerMutation = useMutation<TmdbVideo[], Error, number>({
        mutationFn: (id: number) => getMovieVideos(id),
        onSuccess: (videos) => {
            const trailer = videos.find((v) => v.type === "Trailer" && v.site === "YouTube");
            if (trailer) setTrailerKey(trailer.key);
            else alert("Trailer tidak ditemukan 😢");
        },
    });

    const handleWatchTrailer = (movieId: number) => trailerMutation.mutate(movieId);
    const closeTrailer = () => setTrailerKey(null);

    // Toggle favorite
    const toggleFavorite = (id: number) => {
        setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
        setBlurMap((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return {
        movies: moviesQuery.data ?? [],
        loading: moviesQuery.isLoading,
        query,
        setQuery,
        favorites,
        toggleFavorite,
        blurMap,
        trailerKey,
        handleWatchTrailer,
        closeTrailer,
    };
};

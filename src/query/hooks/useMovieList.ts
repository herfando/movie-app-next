"use client";

import { useQuery } from "@tanstack/react-query";
import {
    getTrendingMovies,
    getNowPlayingMovies,
} from "@/query/services/movieService";
import type { Movie } from "@/query/types/movieType";

export const useMovieList = () => {
    const trendingQuery = useQuery<Movie[], Error>({
        queryKey: ["trendingMovies"],
        queryFn: getTrendingMovies,
    });

    const newReleaseQuery = useQuery<Movie[], Error>({
        queryKey: ["nowPlayingMovies"],
        queryFn: getNowPlayingMovies,
    });

    return {
        trending: trendingQuery.data ?? [],
        trendingLoading: trendingQuery.isLoading,
        newRelease: newReleaseQuery.data ?? [],
        newReleaseLoading: newReleaseQuery.isLoading,
    };
};

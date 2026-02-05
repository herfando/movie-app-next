"use client";

import { axiosInstance } from "@/query/axiosInstance";
import type { Movie, TmdbVideo } from "@/query/types/movieType";

export const getPopularMovies = async (): Promise<Movie[]> => {
    const res = await axiosInstance.get<{ results: Movie[] }>("/movie/popular", {
        params: { language: "en-US", page: 1 },
    });
    return res.data.results.slice(0, 100);
};

export const getMovieVideos = async (id: number): Promise<TmdbVideo[]> => {
    const res = await axiosInstance.get<{ results: TmdbVideo[] }>(`/movie/${id}/videos`, {
        params: { language: "en-US" },
    });
    return res.data.results;
};

export const getTrendingMovies = async (): Promise<Movie[]> => {
    const res = await axiosInstance.get<{ results: Movie[] }>(
        "/trending/movie/week",
        { params: { language: "en-US" } }
    );
    return res.data.results;
};

export const getNowPlayingMovies = async (): Promise<Movie[]> => {
    const res = await axiosInstance.get<{ results: Movie[] }>(
        "/movie/now_playing",
        { params: { language: "en-US", page: 1 } }
    );
    return res.data.results;
};

export const getMovieDetail = async (id: number) => {
    const res = await axiosInstance.get(`/movie/${id}`, {
        params: { language: "en-US" },
    });
    return res.data;
};

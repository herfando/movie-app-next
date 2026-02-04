// src/query/services/DetailMovieService.ts
import { axiosInstance } from "@/query/axiosInstance";

export const DetailMovieService = {
    // Movie main detail
    getDetail: (id: string | number) =>
        axiosInstance.get(`/movie/${id}`, {
            params: { language: "en-US" },
        }),

    // Cast & Crew
    getCredits: (id: string | number) =>
        axiosInstance.get(`/movie/${id}/credits`),

    // Trailer & Videos
    getVideos: (id: string | number) =>
        axiosInstance.get(`/movie/${id}/videos`),
};

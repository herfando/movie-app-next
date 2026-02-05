import { axiosInstance } from "@/query/axiosInstance";
import type { Movie, TmdbVideo } from "@/query/types/favoritesType";

// Top Rated Movie
export const getTopRatedMovies = async (): Promise<Movie[]> => {
    const res = await axiosInstance.get<{ results: Movie[] }>("/movie/top_rated", {
        params: { language: "en-US", page: 1 },
    });
    return res.data.results.slice(0, 10);
};

// Search Movie
export const searchMovies = async (query: string): Promise<Movie[]> => {
    const res = await axiosInstance.get<{ results: Movie[] }>("/search/movie", {
        params: { language: "en-US", query, page: 1 },
    });
    return res.data.results.slice(0, 10);
};

// Get Movie Videos
export const getMovieVideos = async (id: number): Promise<TmdbVideo[]> => {
    const res = await axiosInstance.get<{ results: TmdbVideo[] }>(`/movie/${id}/videos`, {
        params: { language: "en-US" },
    });
    return res.data.results;
};

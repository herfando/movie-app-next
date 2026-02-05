// ================= MOVIE DETAIL =================
export interface Genre {
    id: number;
    name: string;
}

export interface MovieDetail {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    runtime: number;
    vote_average: number;
    tagline: string;
    status: string;
    genres: Genre[];
}

// ================= CREDITS =================
export interface Cast {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
}

// ================= VIDEOS =================
export interface Video {
    id: string;
    key: string;
    name: string;
    site: string;
    type: string;
}

export type DetailProps = {
    movieId?: number;
};

export type VideoDetail = { key: string; type: string; site: string };
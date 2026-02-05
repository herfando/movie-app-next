export interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    backdrop_path: string;
}

export interface TmdbVideo {
    id: string;
    key: string;
    name: string;
    site: string;
    type: string;
}

export interface MovieDetail extends Movie {
    genres: { id: number; name: string }[];
    runtime: number;
    tagline: string;
}

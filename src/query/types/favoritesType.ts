export interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
}

export interface TmdbVideo {
    id: string;
    key: string;
    name: string;
    site: string;
    type: string;
}

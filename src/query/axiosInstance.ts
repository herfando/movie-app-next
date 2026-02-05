import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL || "",
    timeout: 60 * 1000,
});

axiosInstance.interceptors.request.use(config => {
    if (!config.params) config.params = {};
    config.params["api_key"] = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    return config;
});

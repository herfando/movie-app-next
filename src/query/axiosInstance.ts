import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
    params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    },
    timeout: 60 * 1000,
});
console.log("Axios baseURL:", axiosInstance.defaults.baseURL);
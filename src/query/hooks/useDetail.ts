import { useEffect, useState } from "react";
import { DetailService } from "@/query/services/detailService";
import type { MovieDetail, Cast, Video } from "@/query/types/detailType";

export const useDetail = (id?: string) => {
    const [movie, setMovie] = useState<MovieDetail | null>(null);
    const [cast, setCast] = useState<Cast[]>([]);
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchAll = async () => {
            try {
                setLoading(true);

                const [detailRes, creditsRes, videosRes] = await Promise.all([
                    DetailService.getDetail(id),
                    DetailService.getCredits(id),
                    DetailService.getVideos(id),
                ]);

                setMovie(detailRes.data);
                setCast(creditsRes.data.cast || []);
                setVideos(videosRes.data.results || []);
            } catch (error) {
                console.error("Failed to fetch movie detail:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAll();
    }, [id]);

    return { movie, cast, videos, loading };
};

import { useEffect, useState } from "react";
import { api } from "../../utils/axiosConfig";
import { useParams } from "react-router-dom";
import {
    Typography,
    Card,
    CardContent,
    Skeleton,
} from "@mui/material";

interface Guide {
    _id: string;
    title: string;
    text: string;
    imageUrl: string;
    videoUrl: string;
    url: string;
}

const SingleGuide: React.FC = () => {
    const { url } = useParams<{ url: string }>();
    const [guide, setGuide] = useState<Guide | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchGuide = async () => {
        try {
            const res = await api.get<{ success: boolean; data: Guide }>(
                `/api/moh-guides/${url}`,
                { withCredentials: true }
            );

            setGuide(res.data?.data ?? null);
        } catch (error) {
            console.error("Error fetching guide:", error);
            setGuide(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (url) fetchGuide();
    }, [url]);

    // ===== LOADING STATE =====
    if (loading) {
        return (
            <div className="w-full md:w-1/3 p-2">
                <Card>
                    <Skeleton variant="rectangular" height={180} />
                    <CardContent>
                        <Skeleton variant="text" height={30} width="80%" />
                        <Skeleton variant="rectangular" height={40} sx={{ mt: 2 }} />
                    </CardContent>
                </Card>
            </div>
        );
    }

    // ===== EMPTY / NOT FOUND =====
    if (!guide) {
        return (
            <Typography align="center" mt={10}>
                Guide not found
            </Typography>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            {/* Title */}
            <Typography variant="h4" fontWeight={700} gutterBottom>
                {guide.title}
            </Typography>

            {/* Description */}
            <Typography
                variant="body1"
                sx={{
                    mt: 1,
                    mb: 3,
                    whiteSpace: "pre-line",
                    lineHeight: 1.7,
                    fontSize: "1.08rem",
                }}
            >
                {guide.text}
            </Typography>

            {/* Video */}
            {guide.videoUrl ? (
                <iframe
                    src={guide.videoUrl}
                    width="100%"
                    height="550"
                    title={guide.title}
                    allowFullScreen
                    style={{ border: "none", borderRadius: "8px" }}
                ></iframe>
            ) : (
                <Typography color="text.secondary" mt={4}>
                    No video available.
                </Typography>
            )}
        </div>
    );
};

export default SingleGuide;

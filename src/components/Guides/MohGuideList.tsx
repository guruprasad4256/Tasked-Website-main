import { useEffect, useState } from "react";
import { api } from "../../utils/axiosConfig";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Skeleton,
} from "@mui/material";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Guide {
  _id: string;
  title: string;
  imageUrl: string;
  url: string;
}

const GuidesList = () => {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const fetchGuides = async () => {
    try {
      const res = await api.get("/api/moh-guides", { withCredentials: true });
      setGuides(res.data?.data ?? []);
    } catch (err) {
      console.error("Failed to load guides", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGuides();
  }, []);

  // Skeleton Card
  const SkeletonCard = () => (
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

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Typography variant="h4" fontWeight={600} gutterBottom>
        MOH Guides
      </Typography>

      {/* Responsive 3-column layout with Tailwind */}
      <div className="flex flex-wrap -m-2">
        {loading
          ? [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
          : guides.map((guide) => (
            <div key={guide._id} className="w-full md:w-1/3 p-2">
              <Card
                className="shadow-md flex flex-col"
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  transition: "0.3s",
                  height: 350, // 🔥 FIXED CARD HEIGHT
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={guide.imageUrl}
                  alt={guide.title}
                  sx={{
                    height: 150, // 🔥 FIXED IMAGE HEIGHT
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <CardContent
                  sx={{
                    p: 2.5,
                    flexGrow: 1, // 🔥 makes content stretch evenly
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    noWrap // 🔥 keeps title on 1 line for alignment
                  >
                    {guide.title}
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 0.5,
                      py: 1,
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: 2,
                    }}
                    endIcon={<Eye size={18} color="white" />}
                    onClick={() => navigate(`/Guides/${guide.url}`)}
                  >
                    View Guide
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GuidesList;

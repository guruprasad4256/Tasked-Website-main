import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  CircularProgress,
  Pagination,
  PaginationItem,
  Divider,
  Button,
  InputAdornment,
  Slider,
  Chip
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from '@mui/icons-material/Star';
import Breadcrumbs from '@/components/Breadcrumbs';
import SearchIcon from "@mui/icons-material/Search";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { api } from "@/utils/axiosConfig";

export interface Offering {
  _id: string;
  task?: string;
  tasktype: string;
  taskLower: string;
  description: string;
  minItt: number;
  maxItt: number;
  inclusion?: string;
  exclusion?: string;
  clientDependency?: string;
  service?: string;
  complexity?: string;
  offeringStatus: boolean;
  createdAt: string;
  updatedAt: string;
}

const ServiceOfferings = () => {
  const { service } = useParams();
  const navigate = useNavigate();
  const [offerings, setOfferings] = useState<Offering[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [showActive, setShowActive] = useState(false);
  const [complexityFilters, setComplexityFilters] = useState<string[]>([]);
  const [timeRange, setTimeRange] = useState<number[]>([0, 12000]);

  const itemsPerPage = 9;

  useEffect(() => {
    const fetchOfferings = async () => {
      try {
        const res = await api.get("/api/services", {
          withCredentials: true,
        });

        const allData = res.data || [];

        const filteredData = allData.filter(
          (item: any) => item.service?.toLowerCase() === service?.toLowerCase()
        );

        setOfferings(filteredData);
      } catch (err) {
        console.error("Error fetching offerings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOfferings();
  }, [service]);

  const formatTime = (minutes: number) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs > 0 ? `${hrs}` : "0"}.${mins > 0 ? `${mins}` : "0"}`;
  };

  // ✅ Filtering
  const filteredOfferings = offerings.filter((item, index) => {
    const matchesSearch =
      item.tasktype.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesComplexity =
      complexityFilters.length === 0 ||
      complexityFilters.includes(item.complexity || "");

    // ✅ Keep tasks that overlap with the selected time range
    const matchesTime =
      item.maxItt >= timeRange[0] && item.minItt <= timeRange[1];

    const keep = matchesSearch && matchesComplexity && matchesTime;

    return keep;
  });

  // Pagination
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedOfferings = filteredOfferings.slice(startIndex, endIndex);

  const pageCount = Math.ceil(filteredOfferings.length / itemsPerPage);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={6}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6">

      <Breadcrumbs />

      <main className="col-span-4">
        {/* Title */}
        <Typography variant="h4" fontWeight="bold" color="#BA0000" gutterBottom>
          {service} Tasks
        </Typography>

        {/* Search */}
        <TextField
          fullWidth
          placeholder="Searching Anything"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
            style: { borderRadius: "10px", backgroundColor: "#fff" },
          }}
          sx={{
            mb: 4,
            borderRadius: 2.5,
            boxShadow: "0px 2px 5px rgba(0,0,0,0.15)",
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#ddd" },
              "&:hover fieldset": { borderColor: "#aaa" },
              "&.Mui-focused fieldset": { borderColor: "#BA0000" },
            },
          }}
        />

        {/* Task Count */}
        <Button
          variant="outlined"
          sx={{
            mb: 4,
            color: "#6D6D6D",
            border: "2px solid #6D6D6D",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          {filteredOfferings.length} Tasks Found
        </Button>

        {/* Filters + Cards in same row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters (col-span-1) */}
          <aside className="p-4 rounded-xl shadow-sm border bg-white space-y-6 col-span-1 h-fit">
            <Typography variant="h6" fontWeight="bold" color="#BA0000">
              Filters
            </Typography>

            {/* Status */}
            {/* <div>
              <Label className="text-sm font-medium">Status</Label>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  checked={showActive}
                  onCheckedChange={(val) => setShowActive(!!val)}
                />
                <span>Active Only</span>
              </div>
            </div> */}

            {/* Complexity */}
            <div>
              <Label className="text-sm font-medium">Task Complexity</Label>
              <div className="flex flex-col gap-2 mt-2">
                {["Quick", "Standard", "Intensive"].map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <Checkbox
                      checked={complexityFilters.includes(type)}
                      onCheckedChange={(val) => {
                        if (val) {
                          setComplexityFilters([...complexityFilters, type]);
                        } else {
                          setComplexityFilters(
                            complexityFilters.filter((c) => c !== type)
                          );
                        }
                      }}
                    />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Range */}
            <div>
              <Label className="text-sm font-medium">Time (hours)</Label>
              <Slider
                value={timeRange}
                min={0}
                max={12000}
                step={30}
                onChange={(
                  _event: Event | React.SyntheticEvent,
                  val: number | number[]
                ) => setTimeRange(val as number[])}
                className="mt-4"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>
                  {Math.floor(timeRange[0] / 60)}h {timeRange[0] % 60}m
                </span>
                <span>
                  {Math.floor(timeRange[1] / 60)}h {timeRange[1] % 60}m
                </span>
              </div>
            </div>
          </aside>

          {/* Cards (col-span-3) */}
          <div className="col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedOfferings.map((offering) => (
                <Card
                  key={offering._id}
                  className="shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 rounded-2xl cursor-pointer"
                  onClick={() =>
                    navigate(`/services/${offering.service}/${offering.tasktype}`, {
                      state: { task: offering },
                    })
                  }
                >
                  <CardContent>
                    <Box display="flex" flexDirection="column" gap={2}>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="#BA0000"
                        sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "space-between" }}
                      >
                        {offering.tasktype}

                        {/* Complexity Chip */}
                        {offering.complexity && (
                          <Chip
                            label={offering.complexity}
                            size="small"
                            sx={{
                              bgcolor:
                                offering.complexity === "Quick"
                                  ? "#C8E6C9" // Light green background
                                  : offering.complexity === "Standard"
                                    ? "#FFE0B2" // Light orange background
                                    : "#FFCDD2", // Light red background
                              color:
                                offering.complexity === "Quick"
                                  ? "#1B5E20" // Dark green text
                                  : offering.complexity === "Standard"
                                    ? "#E65100" // Dark orange text
                                    : "#B71C1C", // Dark red text
                              border:
                                offering.complexity === "Quick"
                                  ? "1px solid #1B5E20" // Dark green border
                                  : offering.complexity === "Standard"
                                    ? "1px solid #E65100" // Dark orange border
                                    : "1px solid #B71C1C", // Dark red border
                              textTransform: "capitalize",
                            }}
                          />
                        )}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {offering.description
                          ? offering.description.split(" ").slice(0, 15).join(" ") +
                          "..."
                          : ""}
                      </Typography>

                      <Box display="flex" alignItems="center" gap={1}>
                        <AccessTimeIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {formatTime(offering.minItt)} Hours to{" "}
                          {formatTime(offering.maxItt)} Hours
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                  <Divider sx={{ my: 2 }} />
                  {/* Footer */}
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={2.5}
                    px={2}
                    py={1}
                  >
                    {/* Rating + Views */}
                    <Box display="flex" alignItems="center">
                      <Box display="flex" alignItems="center" gap={0.5}>
                        <StarIcon sx={{ color: "#FFD700", fontSize: 18 }} />
                        <Typography variant="body2">4.5</Typography>
                      </Box>
                    </Box>

                    {/* Footer Tag */}
                    <Box
                      sx={{
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        px: 1.5,
                        py: 0.5,
                        fontSize: "0.75rem",
                        fontWeight: "500",
                        bgcolor: "#fafafa",
                      }}
                    >
                      {offering.clientDependency || "Content Required"}
                    </Box>
                  </Box>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {pageCount > 1 && (
              <Box display="flex" justifyContent="center">
                <Pagination
                  count={pageCount}
                  page={page}
                  onChange={(e, value) => setPage(value)}
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      slots={{
                        previous: ArrowBackIosNewIcon,
                        next: ArrowForwardIosIcon,
                      }}
                    />
                  )}
                />
              </Box>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceOfferings;

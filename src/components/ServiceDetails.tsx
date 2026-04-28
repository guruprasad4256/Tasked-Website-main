import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  Chip,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Breadcrumbs from "@/components/Breadcrumbs";
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

  // mobile/tablet sticky filter bar
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const defaultMin = 0;
  const defaultMax = 12000;
  const hasTimeFilter = timeRange[0] > defaultMin || timeRange[1] < defaultMax;
  const activeCount = (complexityFilters.length || 0) + (hasTimeFilter ? 1 : 0);

  const itemsPerPage = 9;

  useEffect(() => {
    const fetchOfferings = async () => {
      try {
        const res = await api.get("/api/services", { withCredentials: true });
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

  // Filtering
  const filteredOfferings = offerings.filter((item) => {
    const matchesSearch =
      item.tasktype.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesComplexity =
      complexityFilters.length === 0 ||
      complexityFilters.includes(item.complexity || "");

    // Overlap with selected time range
    const matchesTime =
      item.maxItt >= timeRange[0] && item.minItt <= timeRange[1];

    return matchesSearch && matchesComplexity && matchesTime;
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
    <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
      

      <main className="col-span-4">
        <Breadcrumbs />
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
        {/* padding-bottom applies until lg since sticky bar is visible on mobile+tablet */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-24 lg:pb-0">
          {/* Filters (desktop sidebar) */}
          <aside className="p-4 rounded-xl shadow-sm border bg-white space-y-6 col-span-1 h-fit hidden md:block">
            <Typography variant="h6" fontWeight="bold" color="#BA0000">
              Filters
            </Typography>

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

          {/* Cards */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedOfferings.map((offering) => (
                <Card
                  key={offering._id}
                  className="shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 rounded-2xl cursor-pointer"
                  onClick={() =>
                    navigate(
                      `/services/${offering.service}/${offering.tasktype}`,
                      { state: { task: offering } }
                    )
                  }
                >
                  <CardContent>
                    <Box display="flex" flexDirection="column" gap={2}>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="#BA0000"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          justifyContent: "space-between",
                        }}
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
                                  ? "#C8E6C9"
                                  : offering.complexity === "Standard"
                                  ? "#FFE0B2"
                                  : "#FFCDD2",
                              color:
                                offering.complexity === "Quick"
                                  ? "#1B5E20"
                                  : offering.complexity === "Standard"
                                  ? "#E65100"
                                  : "#B71C1C",
                              border:
                                offering.complexity === "Quick"
                                  ? "1px solid #1B5E20"
                                  : offering.complexity === "Standard"
                                  ? "1px solid #E65100"
                                  : "1px solid #B71C1C",
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
                    {/* Rating */}
                    {/* <Box display="flex" alignItems="center" gap={0.5}>
                      <StarIcon sx={{ color: "#FFD700", fontSize: 18 }} />
                      <Typography variant="body2">4.5</Typography>
                    </Box> */}

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

        {/* Bottom Sticky Filters (visible on mobile & tablet; hidden on lg+) */}
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-50">
          <div
            className="w-full bg-white border-t rounded-t-[32px] shadow-2xl"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            {/* Toggle button */}
            <button
              type="button"
              onClick={() => setIsFilterOpen((o) => !o)}
              className="w-full flex items-center justify-center gap-2 py-3 text-black font-medium px-5"
            >
              <FilterListIcon fontSize="small" />
              Filters
              {activeCount > 0 && (
                <span className="ml-1 text-xs bg-red-600 text-white rounded-full px-2 py-0.5">
                  {activeCount}
                </span>
              )}
            </button>

            {/* Collapsible content */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isFilterOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 pt-0 space-y-6">
                <Typography variant="h6" fontWeight="bold" color="#BA0000">
                  Filters
                </Typography>

                {/* Complexity */}
                <div>
                  <Label className="text-sm font-medium">Task Complexity</Label>
                  <div className="flex flex-col gap-2 mt-2">
                    {["Quick", "Standard", "Intensive"].map((type) => (
                      <label key={type} className="flex items-center gap-2">
                        <Checkbox
                          checked={complexityFilters.includes(type)}
                          onCheckedChange={(val) => {
                            if (val)
                              setComplexityFilters([
                                ...complexityFilters,
                                type,
                              ]);
                            else
                              setComplexityFilters(
                                complexityFilters.filter((c) => c !== type)
                              );
                          }}
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Time Range */}
                <div>
                  <Label className="text-sm font-medium">Time (hours)</Label>
                  <Slider
                    value={timeRange}
                    min={defaultMin}
                    max={defaultMax}
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

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    className="flex-1 py-2 rounded-lg bg-black text-white"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    Apply
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg border"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Bottom Sticky Filters */}
      </main>
    </div>
  );
};

export default ServiceOfferings;

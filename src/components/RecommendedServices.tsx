import { useEffect, useMemo, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { api } from "@/utils/axiosConfig";
import { useNavigate } from "react-router-dom";

type ApiServiceBlock = {
  service: string;
  topTasks: string[];
};

type ApiResponse = {
  success: boolean;
  services: ApiServiceBlock[];
};

const RecommendedServices = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<ApiServiceBlock[]>([]);
  const [activeService, setActiveService] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const goToServiceTask = (service: string, task: string) => {
    navigate(
      `/services/${encodeURIComponent(service)}/${encodeURIComponent(task)}`
    );
  };

  // ✅ One API call that returns all services + top tasks
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await api.post<ApiResponse>(`/api/tasks/top3-assigned`);
        const payload = res.data;

        if (!payload?.success) throw new Error("API returned success=false");

        setData(payload.services || []);
        if (payload.services?.length) {
          setActiveService(payload.services[0].service);
        }
      } catch (e: unknown) {
        const msg =
          e instanceof Error ? e.message : "Failed to load tasks";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const services = useMemo(() => data.map((x) => x.service), [data]);

  const activeTasks = useMemo(() => {
    const block = data.find((x) => x.service === activeService);
    return block?.topTasks ?? [];
  }, [data, activeService]);

  // ✅ typed skeleton list to avoid "any"
  const skeletonTasks = useMemo(() => Array.from({ length: 3 }, () => ""), []);
  const tasksToRender = loading ? skeletonTasks : activeTasks;

  useEffect(() => {
    // optional: reset carousel position when switching service
    if (carouselRef.current) carouselRef.current.scrollLeft = 0;
  }, [activeService]);

  return (
    <section
      className="py-16 px-4 bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-center mb-6 max-w-7xl mx-auto gap-3 min-w-0">
        <h2 className="font-semibold text-[#952502] leading-tight truncate text-lg sm:text-xl md:text-2xl lg:text-[30px]">
          Most Popular Tasks
        </h2>
      </div>

      {/* Buttons from API response */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap max-w-7xl mx-auto">
        {loading ? (
          <span className="text-sm text-gray-500">Loading…</span>
        ) : (
          services.map((svc) => (
            <button
              key={svc}
              onClick={() => setActiveService(svc)}
              className={`px-4 py-2 rounded-sm text-sm font-medium border transition
                ${
                  activeService === svc
                    ? "bg-[#A91111] text-white border-[#A91111] hover:bg-[#930000]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-400"
                }`}
            >
              {svc}
            </button>
          ))
        )}
      </div>

      {error && (
        <div className="max-w-7xl mx-auto mb-6 text-center text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Mobile/Tablet Carousel */}
      <div className="lg:hidden max-w-7xl mx-auto">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 hide-scrollbar"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
        >
          {tasksToRender.map((task, idx) => (
            <div
              key={idx}
              onClick={() =>
                !loading && task && goToServiceTask(activeService, task)
              }
              className="relative shrink-0 snap-center w-[300px] h-[300px] group overflow-visible"
            >
              {/* SVG ClipPath */}
              <svg width="0" height="0" aria-hidden="true">
                <defs>
                  <path
                    id={`folderPath${idx}`}
                    transform="scale(1,-1) translate(0,-1)"
                    d="
                      M0,0.1
                      Q0,0 0.1,0
                      H0.6
                      Q0.7,0 0.7,0.12
                      C0.7,0.25 0.9,0.25 0.95,0.25
                      A0.09,0.09 0 0 1 1,0.3
                      V0.9
                      Q1,1 0.9,1
                      H0.1
                      Q0,1 0,0.9
                      Z
                    "
                  />
                  <clipPath
                    id={`clipPath${idx}`}
                    clipPathUnits="objectBoundingBox"
                  >
                    <use href={`#folderPath${idx}`} />
                  </clipPath>
                </defs>
              </svg>

              {/* Card */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  filter: "drop-shadow(4px 1px 3px rgba(0, 0, 0, 0.5))",
                }}
              >
                <div
                  style={{
                    clipPath: `url(#clipPath${idx})`,
                    WebkitClipPath: `url(#clipPath${idx})`,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    background:
                      "linear-gradient(180deg, #231F1E -46.88%, #890000 100%)",
                  }}
                  className="relative group"
                >
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                    style={{
                      background:
                        "linear-gradient(135deg, #6e0000 0%, #8b0000 45%, #a30000 100%)",
                    }}
                  />
                </div>
              </div>

              {/* Title */}
              <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <h3 className="text-lg font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:tracking-wide">
                  {loading ? "Loading…" : task}
                </h3>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-2 right-4 z-20">
                <div className="w-12 h-12 bg-[#952502] text-white rounded-full flex items-center justify-center group-hover:bg-black">
                  <FaArrowRight
                    size={18}
                    className="transition-transform duration-300 rotate-[-40deg] group-hover:rotate-[40deg]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {!loading && activeTasks.length === 0 && activeService && (
          <div className="text-center text-sm text-gray-500 mt-4">
            No tasks found for “{activeService}”.
          </div>
        )}
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:flex flex-wrap gap-6 max-w-7xl mx-auto justify-center">
        {tasksToRender.map((task, idx) => (
          <div
            key={idx}
            onClick={() =>
              !loading && task && goToServiceTask(activeService, task)
            }
            className="relative w-[300px] h-[300px] group overflow-visible"
          >
            {/* SVG ClipPath */}
            <svg width="0" height="0" aria-hidden="true">
              <defs>
                <path
                  id={`folderPathDesk${idx}`}
                  transform="scale(1,-1) translate(0,-1)"
                  d="
                    M0,0.1
                    Q0,0 0.1,0
                    H0.6
                    Q0.7,0 0.7,0.12
                    C0.7,0.25 0.9,0.25 0.95,0.25
                    A0.09,0.09 0 0 1 1,0.3
                    V0.9
                    Q1,1 0.9,1
                    H0.1
                    Q0,1 0,0.9
                    Z
                  "
                />
                <clipPath
                  id={`clipPathDesk${idx}`}
                  clipPathUnits="objectBoundingBox"
                >
                  <use href={`#folderPathDesk${idx}`} />
                </clipPath>
              </defs>
            </svg>

            {/* Card */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                filter: "drop-shadow(4px 1px 3px rgba(0, 0, 0, 0.5))",
              }}
            >
              <div
                style={{
                  clipPath: `url(#clipPathDesk${idx})`,
                  WebkitClipPath: `url(#clipPathDesk${idx})`,
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  background:
                    "linear-gradient(180deg, #231F1E -46.88%, #890000 100%)",
                }}
                className="relative group"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, #6e0000 0%, #8b0000 45%, #a30000 100%)",
                  }}
                />
              </div>
            </div>

            {/* Title */}
            <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h3 className="text-xl font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:tracking-wide">
                {loading ? "Loading…" : task}
              </h3>
            </div>

            {/* Arrow */}
            <div className="absolute bottom-2 right-5 z-20">
              <div className="w-12 h-12 bg-[#952502] text-white rounded-full flex items-center justify-center group-hover:bg-black">
                <FaArrowRight
                  size={18}
                  className="transition-transform duration-300 rotate-[-40deg] group-hover:rotate-[40deg]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default RecommendedServices;

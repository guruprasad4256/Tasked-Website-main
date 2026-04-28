import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import TaskSideBar from "../components/TaskSideBar";
import TaskHeroLeft from "../components/TaskHeroLeft";
import Breadcrumbs from "../components/Breadcrumbs";

import { api } from "@/utils/axiosConfig";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { X, Maximize2 } from "lucide-react";

const TaskPage: React.FC = () => {
  const location = useLocation();
  const { task } = location.state || {};

  const taskName = task?.tasktype || "";

  const [uploads, setUploads] = useState<string[]>([]);
  const [loadingUploads, setLoadingUploads] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  const isImageUrl = (url: string) =>
    /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(url.split("?")[0]);

  useEffect(() => {
    let mounted = true;

    const fetchUploads = async () => {
      if (!taskName) return;

      setLoadingUploads(true);
      try {
        const res = await api.get("/api/task-portfolio", {
          params: { taskName: taskName.trim() },
        });

        if (mounted) {
          setUploads(Array.isArray(res.data.uploads) ? res.data.uploads : []);
        }
      } catch {
        if (mounted) setUploads([]);
      } finally {
        if (mounted) setLoadingUploads(false);
      }
    };

    fetchUploads();

    return () => {
      mounted = false;
    };
  }, [taskName]);

  return (
    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
      {/* LEFT */}
      <div className="w-full lg:w-[65%]">
        <Breadcrumbs />
        <TaskHeroLeft task={task} />

        {uploads.length > 0 && (
          <Card className="bg-white rounded-lg mt-5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] p-6 w-full border border-gray-200">
            <CardContent className="p-4">
              <h2 className="text-[30px] font-bold text-red-700 mt-4">
                Get Inspired from Past Projects
              </h2>

              <div className="mt-6">
                {loadingUploads ? (
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <Card
                        key={i}
                        className="mb-6 break-inside-avoid overflow-hidden rounded-md border border-gray-200 shadow-sm bg-white"
                      >
                        <CardContent className="p-0">
                          <Skeleton className="w-full h-[260px]" />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                    {uploads.map((url, idx) => (
                      <Card
                        key={`${url}-${idx}`}
                        className="mb-6 break-inside-avoid overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                      >
                        <CardContent className="p-0">
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={() => {
                              setSelectedUrl(url);
                              setOpenPreview(true);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                setSelectedUrl(url);
                                setOpenPreview(true);
                              }
                            }}
                            className="group cursor-pointer"
                          >
                            <div className="relative w-full overflow-hidden">
                              {isImageUrl(url) ? (
                                <>
                                  <img
                                    src={url}
                                    alt={`Upload ${idx + 1}`}
                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                    loading="lazy"
                                  />

                                  <div className="absolute top-2 right-2 bg-black/60 rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
                                    <Maximize2 className="h-4 w-4 text-white" />
                                  </div>
                                </>
                              ) : (
                                <div className="h-[200px] w-full flex items-center justify-center text-sm text-muted-foreground">
                                  Open file
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {openPreview && selectedUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="relative max-w-5xl w-full mx-4 bg-white rounded-lg overflow-hidden shadow-xl">
              <button
                onClick={() => setOpenPreview(false)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black rounded-full w-8 h-8 flex items-center justify-center z-10"
                aria-label="Close preview"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              <div className="w-full max-h-[85vh] overflow-auto bg-black flex items-center justify-center">
                {isImageUrl(selectedUrl) ? (
                  <img
                    src={selectedUrl}
                    alt="Upload preview"
                    className="max-h-[85vh] max-w-full object-contain"
                  />
                ) : (
                  <a
                    href={selectedUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-10 text-white underline"
                  >
                    Open File
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT */}
      <aside className="w-full lg:w-[35%] lg:sticky lg:top-10 h-fit bg-white shadow-lg mt-10 rounded-2xl p-0 border border-gray-100">
        <TaskSideBar task={task} />
      </aside>
    </div>
  );
};

export default TaskPage;

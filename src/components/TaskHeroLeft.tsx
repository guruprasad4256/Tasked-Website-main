// import React, { useEffect, useState } from "react";
// import { MdStar, MdRemoveRedEye, MdOutlineTrackChanges } from "react-icons/md";
// import type { Offering } from "../types";
// interface BlogCardProps {
//   task: Offering;
// }

// export default function BlogCard({ task }: BlogCardProps) {
//   const [views, setViews] = useState(99);

//   useEffect(() => {
//     // Increment view count when the component mounts
//     fetch("http://localhost:5000/api/views", { method: "POST" })
//       .then((res) => res.json())
//       .then((data) => setViews(data.views))
//       .catch((err) => console.error("Error updating views:", err));
//   }, []);

//   // Utility: convert minutes → hh:mm
//   const formatToHHMM = (minutes: number) => {
//     const hrs = Math.floor(minutes / 60);
//     const mins = minutes % 60;
//     return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
//   };

//   const minHours = formatToHHMM(task.minItt);
//   const maxHours = formatToHHMM(task.maxItt);

//   return (
//     <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] p-6 w-full border border-gray-200">
//       {/* Complexity */}
//       <div className="flex justify-between items-center">
//         <span className="bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded">
//           Standard Complexity
//         </span>

//         {/* Rating & Views */}
//         <div className="flex items-center gap-4 text-sm">
//           <div className="flex items-center gap-1 text-yellow-500 font-medium">
//             <MdStar className="text-lg" /> 4.5
//           </div>
//           <div className="flex items-center gap-1 text-gray-500 font-medium">
//             <MdRemoveRedEye className="text-lg" /> {views}
//           </div>
//         </div>
//       </div>

//       {/* Title */}
//       <h2 className="flex items-center gap-2 text-[30px] font-bold text-red-700 mt-4">
//         <MdOutlineTrackChanges className="text-5xl" />
//         {task.tasktype}
//       </h2>

//       {/* Tags */}
//       {/* <div className="flex gap-2 mt-3 flex-wrap">
//         {["Content Writing", "Marketing", "Content Strategy"].map((tag) => (
//           <span
//             key={tag}
//             className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm"
//           >
//             {tag}
//           </span>
//         ))}
//       </div> */}

//       {/* Description */}
//       <p className="text-gray-600 mt-4">
//         {task.description}
//       </p>

//       {/* Hours */}
//       <div className="flex gap-4 mt-6">
//         <div className="flex-1 bg-red-50 rounded-lg p-4 text-center">
//           <p className="text-2xl font-bold text-red-700">{minHours} Hours</p>
//           <p className="text-sm text-gray-500">Min ITT</p>
//         </div>
//         <div className="flex-1 bg-red-50 rounded-lg p-4 text-center">
//           <p className="text-2xl font-bold text-red-700">{maxHours} Hours</p>
//           <p className="text-sm text-gray-500">Max ITT</p>
//         </div>
//       </div>
//     </div>
//   );
// }

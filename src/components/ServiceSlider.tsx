import { useEffect, useState } from "react";
import HourglassImage from '../assets/RedSandGlass.png';
import ClockImage from '../assets/RedClock.png';
import { api } from "../utils/axiosConfig";
import { useNavigate } from "react-router-dom";
type Stat = {
  number: string; // backend sends string like "70+"
  label: string;
};

const DEFAULT_STATS: Stat[] = [
  { number: "8", label: "Accounting" },
  { number: "15", label: "Content Writing" },
  { number: "37", label: "Design" },
  { number: "42", label: "Digital Marketing" },
  { number: "6", label: "Recruitment" },
  { number: "66", label: "Legal" },
];

const SliderSection = () => {

  const [stats, setStats] = useState<Stat[]>(DEFAULT_STATS);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/api/stats", { withCredentials: true });
        setStats(res.data);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-[#00000000] to-[#9e000000] py-16 overflow-hidden rounded-tl-[10%] rounded-br-[15%] rounded-tr-[5%] rounded-bl-[8%]">
      <div className="relative w-full max-w-7xl mx-auto z-10">

        {/* Left Overlay Image */}
        <img
          src={HourglassImage}
          alt="Hourglass"
          className="absolute left-[70px] top-1/2 transform -translate-y-1/2 w-[150px] z-0 opacity-90"
        />

        {/* Right Overlay Image */}
        <img
          src={ClockImage}
          alt="Clock"
          className="absolute right-[50px] bottom-[-10px] transform -translate-y-1/2 w-[120px] z-0 opacity-90"
        />

        {/* Slider container with responsive padding */}
        <div className="relative z-10 overflow-hidden w-full lg:max-w-full md:max-w-[85%] max-w-[80%] mx-auto">
          <div className="flex gap-6 animate-slide w-fit px-2">
            {[...stats, ...stats].map((item, index) => (
              <div
                key={index}
                className="cursor-pointer min-w-[260px] h-[110px] rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-end gap-4 px-6"
                onClick={() =>
                  navigate(`/services/${encodeURIComponent(item.label)}`)
                }
              >
                <h3 className="text-white text-3xl font-bold">{item.number}+</h3>
                <p className="text-white text-[20px] text-left">{item.label} Tasks</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SliderSection;

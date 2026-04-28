import { FaStar } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";
import Dakshayini from "@/assets/Dakshayini.jpg";

const ExpertSidebar = () => {
  return (
    <div className="w-full max-w-sm bg-gradient-to-b from-black to-[#890101] text-white rounded-2xl p-6 shadow-lg flex flex-col items-center">
      {/* Profile Image */}
      <div className="w-60 h-60 rounded-full overflow-hidden shadow-md">
        <img
          src= {Dakshayini}
          alt="Marcus Cho"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name + ID */}
      <h2 className="mt-4 text-2xl font-bold">Marcus Cho</h2>
      <p className="text-green-400 text-sm mt-1">aka #3B7B50</p>

      {/* Role + Experience */}
      <p className="text-sm mt-5">Senior UI/UX Designer</p>
      <p className="text-sm">6 years experience</p>

      {/* Stats Row */}
      <div className="flex justify-between w-full mt-6 text-sm text-center">
        <div className="flex-1">
          <FaStar className="mx-auto text-yellow-400 text-lg" />
          <p className="font-semibold">4.3</p>
          <p className="text-xs text-gray-300">Rating</p>
        </div>
        <div className="flex-1">
          <FaArrowUp className="mx-auto text-orange-400 text-lg" />
          <p className="font-semibold">600</p>
          <p className="text-xs text-gray-300">Clients</p>
        </div>
        <div className="flex-1">
          <FaCrown className="mx-auto text-yellow-300 text-lg" />
          <p className="font-semibold">Best</p>
          <p className="text-xs text-gray-300">Top Performer</p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-8 w-full bg-white text-black py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition">
        Schedule a Call
      </button>
    </div>
  );
};

export default ExpertSidebar;

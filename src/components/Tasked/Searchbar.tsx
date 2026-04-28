import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const words = ["Digital Marketing", "Legal Services", "Design"];

const SearchBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full flex justify-center min-[1182px]:justify-start px-4 sm:px-6 lg:px-0">
      {/* Responsive container with different max-widths */}
      <div className="w-full max-w-[640px] min-[1182px]:max-w-[500px] bg-white rounded-full shadow-md overflow-hidden flex items-center pl-5 pr-16 py-4 relative">
        {/* Static text */}
        <span className="text-gray-500 text-[16px] leading-6">
          Search for&nbsp;
        </span>

        {/* Sliding words */}
        <span className="relative inline-block h-6 overflow-hidden align-middle flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={words[index]}
              initial={{ y: 24, opacity: 0 }} // 24px = h-6
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute left-0 top-0 text-black text-[16px] leading-6 font-medium"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>

        {/* Search button fixed to right */}
        <button className="absolute right-2 w-11 h-11 flex items-center justify-center bg-[#7C1D08] rounded-full">
          <FaSearch size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

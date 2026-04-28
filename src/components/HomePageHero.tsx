import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SandGlass from '../assets/SandGlass.png';
import ServiceSlider from './ServiceSlider';
import '../styles/FlipingWords.css';

const topWords = ['On Time', ' On Budget', 'Guarantee'];
const bottomWords = ['Ads', 'Marketing', 'Accounting', 'Content', 'Design', 'HR', 'Legal'];

const HeroSection = () => {
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);

  useEffect(() => {
    const intervalTop = setInterval(() => {
      setTopIndex((prev) => (prev + 1) % topWords.length);
    }, 2000);

    const intervalBottom = setInterval(() => {
      setBottomIndex((prev) => (prev + 1) % bottomWords.length);
    }, 2500);

    return () => {
      clearInterval(intervalTop);
      clearInterval(intervalBottom);
    };
  }, []);

  return (
    <section
      className="relative text-white px-4 py-5 lg:px-24 overflow-hidden -mt-[0px] [border-bottom-right-radius:50px] [border-bottom-left-radius:50px] z-10 font-poppins"
      style={{ background: 'linear-gradient(to top left, #000000 30%, #9E0000 70%)' }}
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-12 mt-[0px] text-center lg:text-left">
        {/* Left Text Content */}
        <div className="w-full lg:w-[65%] space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug flex items-center justify-center lg:justify-start gap-2 flex-wrap">
  Expert Work Delivered,&nbsp;
  <span className="relative inline-block align-middle">
    <AnimatePresence mode="wait">
      <motion.span
        key={topWords[topIndex]}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-block text-yellow-400 font-bold"
      >
        {topWords[topIndex]}
      </motion.span>
    </AnimatePresence>
  </span>
</h2>

          <p className="text-sm md:text-base text-gray-200 max-w-xl">
            From accounting to content creation. Design to digital marketing. Recruitment and legal services all delivered by experts with the quality you'd expect at a budget that fits your priorities.
          </p>
          <p className="text-sm md:text-base text-gray-200 max-w-xl">
            <b>Your business demands rapid execution. We deliver.</b>
          </p>
          <a href='/contact?utm_source=moh_website&utm_medium=home_hero'>
          <button className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-white transition">
            Schedule a Call
          </button>
          </a>
        </div>

        {/* Right Image & Animated Text */}
        <div className="w-full lg:w-[35%] flex flex-col items-center justify-center gap-4 text-center">
          <img
            src={SandGlass}
            alt="Hourglass"
            className="w-24 sm:w-32 md:w-40 lg:w-44 transition-all"
          />
          <p className="text-sm flex items-center justify-center text-center flex-wrap">
  Curated for you&nbsp;
  <span className="relative inline-block align-middle">
    <AnimatePresence mode="wait">
      <motion.span
        key={bottomWords[bottomIndex]}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -24, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-block text-yellow-400 font-semibold"
      >
        {bottomWords[bottomIndex]}
      </motion.span>
    </AnimatePresence>
  </span>
</p>

        </div>
      </div>

      {/* Service Slider Below */}
      <div className="mt-0">
        <ServiceSlider />
      </div>
    </section>
  );
};

export default HeroSection;

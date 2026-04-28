import HomeS2BG from '../assets/HomeS2BG.png'; // Background image

const AboutMOHSection = () => {
  return (
    <div className="w-full px-0 md:px-6 py-16 flex justify-center items-center bg-white">
      <div
        className="
          relative w-full md:max-w-7xl min-h-[500px] 
          rounded-[0px] md:rounded-[50px] overflow-hidden 
          flex flex-col md:flex-row 
          items-center md:items-stretch
          shadow-[6px_6px_10px_rgba(0,0,0,0.6)] 
          bg-left bg-no-repeat bg-cover
        "
        style={{
          backgroundImage: `url(${HomeS2BG})`,
        }}
      >
        {/* 🔹 Mobile Overlay */}
        <div className="absolute inset-0 bg-black/50 md:hidden"></div>

        {/* Left Image (35%) */}
        <div className="w-full md:w-[35%]"></div>

        {/* Right Text (65%) */}
        <div
          className="
            relative z-10 w-full md:w-[65%] p-6 md:p-8 text-white 
            flex flex-col justify-center 
            items-center md:items-start
            text-center md:text-left 
            space-y-8
          "
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">What is m.o.h?</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Your flexible expert team, by the hour. A subscription to access professional workforce in 6 business functions without hiring full-time.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">What We Do?</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Handle the work that's slowing you down. From design and content creation to HR tasks and legal support, we tackle your everyday business needs and sprint projects so you can focus on what matters most.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">How Do We Do It?</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Simple. Fast. Transparent. Buy hours according to your requirement. We match you with the right expert, track every minute, and deliver work through one clean dashboard. One conversation. One invoice. Zero complexity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMOHSection;

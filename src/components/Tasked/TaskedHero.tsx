import ServiceSlider from '../ServiceSlider';
import SearchBar from './Searchbar'; // adjust path if needed

const HeroSection = () => {
  return (
    <section
      className="relative text-white px-4 py-20 lg:px-24 overflow-hidden
      [border-bottom-right-radius:50px] [border-bottom-left-radius:50px]
      z-10 font-poppins"
      style={{
        background: 'linear-gradient(to top left, #000000 30%, #fda700 70%)',
      }}
    >
      {/* Centered Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
          Solutions Curated By M.O.H
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
          Your Creative Team’s Creative Team
        </h2>

        <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          libero et velit interdum, ac aliquet odio mattis. Corem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>

        {/* ✅ Search Bar (max width 500px) */}
        <div className="mt-8 w-full flex justify-center">
          <div className="w-full max-w-[500px]">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Service Slider */}
      <div className="mt-4">
        <ServiceSlider />
      </div>
    </section>
  );
};

export default HeroSection;

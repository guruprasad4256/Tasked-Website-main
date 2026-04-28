import logo from '@/assets/WhiteLogo.png';
import ServiceSlider from '../ServiceSlider';
import SearchBar from '../Searchbar';
import overlayImg from '@/assets/Pattern1.png';
import overlayImg1 from '@/assets/Pattern2.png';

const HeroSection = () => {
  return (
    <section className="relative text-white px-4 pb-5 lg:px-24 overflow-hidden z-10 font-poppins bg-black">
      {/* Overlay Image 1 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={overlayImg}
          alt="Overlay Pattern 1"
          className="w-[100%] h-[100%] object-contain opacity-100 mix-blend-screen"
          style={{
            position: "absolute",
            top: "-130px",
            left: "-600px",
          }}
        />
      </div>

      {/* Overlay Image 2 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={overlayImg1}
          alt="Overlay Pattern 2"
          className="w-[100%] h-[100%] object-contain opacity-100 mix-blend-screen"
          style={{
            position: "absolute",
            top: "0px",
            left: "300px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between items-center gap-12 mt-[100px] text-center lg:text-left">
        <div className="w-full space-y-6 flex flex-col items-center lg:items-start">
          <h2 
            className="font-bold" 
            style={{ fontSize: "40px", lineHeight: "56px" }}
          >
            Focus on doing what <br />
            you do the best <br />
            Let us handle rest.
          </h2>

          <p className="text-sm md:text-base text-gray-200 max-w-xl">
            From Accounting to Content Creation, Design, Digital Marketing, Recruitment, and Legal Services — we’re ready when you are!
          </p>

          <SearchBar />
        </div>
      </div>

      {/* Service Slider */}
      <div className="mt-0 relative z-10">
        <ServiceSlider />
      </div>
    </section>
  );
};

export default HeroSection;

import { FaLinkedin } from "react-icons/fa";
import FoundersImg from "@/assets/founders.png";
import Heading from "@/assets/Heading.png"; // adjust path if needed
import "../../styles/Fancy.css"; // <-- running border animation

const FoundersSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 pb-[250px] -mb-[180px]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Heading */}
        <img
          src={Heading}
          alt="Meet"
          className="w-full max-w-[350px] h-auto object-contain mx-auto pb-[10px]"
        />

        <p className="text-red-500 text-lg md:text-xl font-medium mb-16">
          Strategic Innovators, Operational Experts
        </p>

        {/* Centered Single Image with Running Border + Gradient Inner Shadow */}
        <div className="fancy relative mx-auto max-w-3xl mb-20 rounded-2xl overflow-hidden">
          <div className="inner-shadow-wrapper relative z-10 rounded-2xl overflow-hidden">
            <img
              src={FoundersImg}
              alt="Founders"
              className="w-full max-w-[500px] h-auto object-contain rounded-2xl mx-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Founder Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-left max-w-4xl mx-auto">
          {/* Sathwik */}
          <div className="animate-slideUp">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#FF0000]">Sathwik Putta</h3>
              <a
                href="https://www.linkedin.com/in/sathwik-putta-63309310b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-blue-500 transition"
              >
                <FaLinkedin className="text-xl" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
            <p className="text-md leading-relaxed text-gray-300 mt-4">
              Co-Founder & Managing Director
            </p>
            <p className="text-sm leading-relaxed text-gray-300 mt-2">
              A seasoned corporate lawyer with over 10 years of experience. He
              has served as an in-house counsel for esteemed organizations like
              Pramata, Colombia Asia (now Manipal), Medlife (now PharmEasy), and
              Biocon. Sathwik’s journey began with the founding of Apprentice
              Education and Consulting Services, a boutique recruitment agency
              and legal consultancy.
            </p>
          </div>

          {/* Sujay */}
          <div className="animate-slideUp">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#FF0000]">Sujay Putta</h3>
              <a
                href="https://www.linkedin.com/in/sujay-putta/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-blue-500 transition"
              >
                <FaLinkedin className="text-xl" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
            <p className="text-md leading-relaxed text-gray-300 mt-4">
              Co-Founder & CEO
            </p>
            <p className="text-sm leading-relaxed text-gray-300 mt-2">
              An accomplished designer and digital marketer with over 6 years of
              experience in the digital marketing and design realms. Sujay’s
              entrepreneurial journey commenced with Kaliq Media LLP, a digital
              marketing and design consultancy. He has worked with clients on
              brand-building campaigns, advertising, and logo design.
            </p>
          </div>
        </div>
      </div>

      {/* Inline CSS for gradient inner shadow */}
      
    </section>
  );
};

export default FoundersSection;

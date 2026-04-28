import MissionImg from "@/assets/mission.png";
import VisionImg from "@/assets/vision.png";

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 font-poppins">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Mission */}
        <div className="flex flex-col md:flex-row items-center gap-8">
  {/* Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={MissionImg}
      alt="Our Mission"
      className="w-full max-w-[400px] h-auto object-contain"
    />
  </div>

          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-red-600 font-bold text-2xl mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              To empower businesses of every size with instant access to senior-level specialists through a managed, subscription based platform that eliminates traditional hiring friction while ensuring quality, accountability, and complete transparency in every engagement.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
  {/* Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={VisionImg}
      alt="Our Vision"
      className="w-full max-w-[400px] h-auto object-contain"
    />
  </div>

          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-red-600 font-bold text-2xl mb-4">Our Vision</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              To redefine how businesses access and deploy specialised talent. To create a world where expertise flows seamlessly to where it's needed most, without barriers of geography, contracts, or overhead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

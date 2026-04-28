import BgImage1 from '@/assets/ExpertCTABG.png';
import BgImage2 from '@/assets/GetInTouchCTABG.png';

const ContactSection = () => {
  return (
    <div
      className="
        w-full flex justify-center items-center px-4 
        py-10 sm:py-0 md:py-0 lg:py-20
        min-h-screen mb-[-160px]
        bg-no-repeat bg-center lg:bg-cover bg-contain
      "
      style={{
        backgroundImage: `url(${BgImage1})`,
        backgroundColor: '#000', // fallback to avoid white gaps
      }}
    >
      <div
        className="
          w-full max-w-6xl min-h-[300px] rounded-2xl 
          p-6 sm:p-8 md:p-10 
          text-white flex items-center justify-start
          bg-center bg-no-repeat bg-cover 
          shadow-[6px_6px_10px_rgba(0,0,0,0.6)]
        "
        style={{
          backgroundImage: `url(${BgImage2})`,
        }}
      >
        <div className="text-center space-y-4 max-w-[700px] pl-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Lets get in touch
          </h2>
          <p className="text-sm md:text-base">
            Empowering communities through compassion and hands-on support to create lasting change and uplift lives with love and action.
          </p>
          <a href="/contact?utm_source=moh_website&utm_medium=expert_cta">
            <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-[#FACC15] transition duration-300">
              Schedule a Call
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

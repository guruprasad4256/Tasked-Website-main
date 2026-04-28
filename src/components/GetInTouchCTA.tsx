import BgImage from "../assets/GetInTouchCTABG.png"; // Ensure correct path

const ContactSection = () => {
  return (
    <div className="w-full flex justify-center items-left py-16 px-4">
      <div
        className="w-full max-w-6xl min-h-[300px] rounded-2xl p-10 text-white flex items-center justify-left bg-center bg-no-repeat shadow-[6px_6px_10px_rgba(0,0,0,0.6)]"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="text-center space-y-4 max-w-[600px] pl-[20px]">
          <h2 className="text-3xl md:text-4xl font-bold">Lets get in touch</h2>
          <p className="text-sm md:text-base max-w-[600px] mx-auto">
            Empowering communities through compassion and hands on support to
            create lasting change and uplift lives with love and action.
          </p>
          <a href="/contact?utm_source=moh_website&utm_medium=home_cta">
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

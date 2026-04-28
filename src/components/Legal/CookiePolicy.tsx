import React from "react";

const CookieSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 font-poppins mb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Cookie Policy</h2>
        <p className="text-gray-800 text-sm md:text-base text-left leading-relaxed">
          We use cookies to better understand your requirements and provide a
          personalized experience by tailoring content to your preferences and
          making your interactions with our website more meaningful. These
          cookies also help improve and customize your browsing experience.
          Click <strong>‘Accept’</strong> to agree to the use of cookies, or{" "}
          <strong>‘Reject’</strong> to opt out of non-essential cookies.
        </p>
      </div>
    </section>
  );
};

export default CookieSection;

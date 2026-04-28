import impact from "@/assets/impact.png";

const FoundersSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center justify-center gap-2">
          <span className="font-bold">Our Impact</span>
        </h2>
        <p className="text-red-500 text-lg md:text-xl font-medium mb-16">
          Strategic Innovators, Operational Experts
        </p>
        <img
          src={impact}
          alt="Founders"
          className="w-full h-auto object-contain rounded-2xl relative z-10 mx-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default FoundersSection;

const tools = [
  "Grammarly",
  "WordPress",
  "Microsoft Word",
  "Hemingway Editor",
  "Pro Writing Aid",
  "SEMrush",
  "Ubersuggest",
  "Trello",
  "RefWorks",
  "Adobe Spark",
  "Medium",
  "Tailwind",
];

const ToolsSection = () => {
  return (
    <section className="w-full pb-16 pt-4 px-4 mt-6 lg:px-0 bg-white font-poppins text-left">
      <h2 className="text-3xl font-semibold text-[#952502] mb-6">
        What Tools Do We Use?
      </h2>
<p className="text-sm pb-8 text-left text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim.
              
            </p>
      <div
        className="
          grid 
          gap-y-10 gap-x-15
          text-sm text-black
          [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]
        "
      >
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center justify-left gap-3"
          >
            <span className="text-xl leading-none text-[#952502]">•</span>
            <span>{tool}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;

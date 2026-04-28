import flowerImg from "../assets/flower.png"; // your bg image
import TCSoverlay from "../assets/TCSoverlay.png"; // your overlay image
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // material ui arrow

const caseStudies = [
  {
    title: "Case study",
    description:
      "Airbnb Website Redesign Improving User Experience and Conversions",
    image: flowerImg,
  },
  {
    title: "Case study",
    description:
      "Airbnb Website Redesign Improving User Experience and Conversions",
    image: flowerImg,
  },
  {
    title: "Case study",
    description:
      "Airbnb Website Redesign Improving User Experience and Conversions",
    image: flowerImg,
  },
];

const CaseStudies = () => {
  return (
    <section className="py-16 font-poppins max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#952502]">
          Get Inspired from Past Projects
        </h2>
        <a
          href="#"
          className="flex items-center gap-2 text-[#952502] font-medium"
        >
          {/* Arrow first, then text */}
          <span className="w-8 h-8 rounded-full bg-[#952502] flex items-center justify-center text-white">
            <ArrowForwardIcon fontSize="small" />
          </span>
          <span>View More</span>
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group w-[220px] h-[300px]"
          >
            {/* Background image zooms from right to left */}
            <img
              src={study.image}
              alt="background"
              className="absolute inset-0 w-full h-full object-cover transition duration-700 ease-in-out origin-right group-hover:blur-[3px] group-hover:scale-[1.4]"
            />

            {/* Overlay image with diagonal clip (fades out on hover) */}
            <img
              src={TCSoverlay}
              alt="overlay"
              className="absolute inset-0 w-full h-full object-cover clip-diagonal z-10 transition-opacity duration-500 group-hover:opacity-0"
            />

            {/* Default Text inside diagonal */}
            <div className="absolute top-6 left-6 right-6 text-black z-20 group-hover:opacity-0 transition-opacity duration-500">
              <h3 className="font-semibold">{study.title}</h3>
              <p className="text-sm mt-2">{study.description}</p>
            </div>

            {/* Hover Text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 p-6">
              <h3 className="text-lg font-semibold text-white drop-shadow-md">
                {study.title}
              </h3>
              <p className="text-sm mt-2 text-white max-w-[90%] mx-auto drop-shadow-md">
                {study.description}
              </p>

              {/* Arrow bottom-right */}
              <div className="absolute bottom-4 right-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-md">
                  <ArrowForwardIcon fontSize="small" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;

/* Custom diagonal cut */
<style>
{`
  .clip-diagonal {
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 70%);
  }
`}
</style>

import '../styles/FlipBox.css';
import DownArrow from "../assets/DownArrow.png";

// PNG icons
import IconExclusion from "../assets/exclusion.png";
import IconClient from "../assets/client.png";
import IconInclusion from "../assets/inclusion.png";
import IconDeliverables from "../assets/deliverables.png";
import IconNotes from "../assets/notes.png";

interface Solution {
  title: string;
  icon: string;
  description: string;
}

const solutions: Solution[] = [
  {
    title: "Exclusion",
    icon: IconExclusion,
    description: "Exclusion-related description goes here.",
  },
  {
    title: "Client Dependency",
    icon: IconClient,
    description: "Client dependency-related content goes here.",
  },
  {
    title: "Inclusion",
    icon: IconInclusion,
    description: "Inclusion details with explanation. Flip to view this content on hover.",
  },
  {
    title: "Deliverables",
    icon: IconDeliverables,
    description: "Deliverables-related content appears here on hover.",
  },
  {
    title: "Notes",
    icon: IconNotes,
    description: "Notes and additional information go here.",
  },
];

const FlipBox = ({ icon, title, description }: Solution) => {
  return (
    <div className="w-56 h-80 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group hover:[transform:rotateX(180deg)]">

        {/* Front Side */}
        <div className="absolute w-full h-full bg-gradient-to-b from-white to-[#fcecec] rounded-xl shadow-md text-[#952502] [backface-visibility:hidden] flex flex-col justify-center items-center p-6">
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-bold text-lg text-center">{title}</h3>
            <img src={icon} alt={`${title} icon`} className="w-12 h-12 object-contain" />
          </div>
          <img
            src={DownArrow}
            alt="Flip arrow"
            className="w-4 h-4 absolute bottom-[30px]"
          />
        
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-[#7D0101] text-white rounded-xl shadow-md p-6 [transform:rotateX(180deg)] [backface-visibility:hidden] flex items-center justify-center text-center text-sm">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const FlipboxSection = () => {
  return (
    <section className="w-full pb-20 pt-5 px-4 text-center font-poppins bg-white">
      <h2 className="text-3xl font-semibold text-[#952502] mb-2">
        What Solutions Do You Have Access To?
      </h2>
      <p className="text-sm text-[#333333] mb-12 max-w-xl mx-auto">
        Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {solutions.map((item, idx) => (
          <FlipBox key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FlipboxSection;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // dropdown arrow icon
import Chooseyourpackage from "../assets/Chooseyourpackage.png";
import Trackprogress from "../assets/Trackprogress.png";
import SubmitTask from "../assets/SubmitTask.png";
import Review from "../assets/Review.png";

const steps = [
  {
    id: 1,
    title: "Choose your package",
    number: "01",
    color: "from-[#FF4148] to-[#952502]",
    image: Chooseyourpackage,
    description:
      "Tell us the roles, scope and we’ll recommend your package.",
  },
  {
    id: 2,
    title: "Submit your task",
    number: "02",
    color: "from-[#FF4148] to-[#952502]",
    image: SubmitTask,
    description:
      "Moh matches with your task with the right talent, Estimate hours will be shared before beginning of the task.t",
  },
  {
    id: 3,
    title: "Track progress",
    number: "03",
    color: "from-[#FF4148] to-[#952502]",
    image: Trackprogress,
    description:
      "You can chat, see live status of your tasks and the first draft of your deliverables.",
  },
  {
    id: 4,
    title: "Review, ship and refill",
    number: "04",
    color: "from-[#FF4148] to-[#952502]",
    image: Review,
    description:
      "Approve deliverables, share feedback, Add hours anytime. Secure and NDA protected. Transparent billing. From ₹350/hr. ",
  },
];

const HowItWorks = () => {
  // Active step defaults to step 1
  const [active, setActive] = useState<number>(1);

  return (
    <section className="py-10 bg-white text-center px-4 relative">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#903033] mb-3 mt-3">
        How It Works?
      </h2>
      <p className="max-w-2xl mx-auto mb-6 md:mb-10 text-gray-700 text-sm md:text-base">
        Hire by the hour. Start in 48 hours. One point of contact. One Invoice. 
      </p>

      {/* -------- MOBILE VIEW (accordion) -------- */}
<div className="flex flex-col gap-3 md:hidden">
  {steps.map((step) => (
    <div key={step.id} className="rounded-lg overflow-hidden relative">
      <button
        onClick={() => setActive(step.id)} // ✅ always keep one open
        className={`flex justify-between items-center w-full px-4 py-3 text-left relative z-20 ${
          active === step.id
            ? "bg-black/60 text-white"
            : `bg-gradient-to-r ${step.color} text-white`
        }`}
      >
        <div className="flex items-center gap-3">
          {/* Outlined number */}
          <span
            className="text-lg font-bold text-transparent"
            style={{ WebkitTextStroke: "1px white" }}
          >
            {step.number}
          </span>
          <span className="font-medium">{step.title}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform ${
            active === step.id ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {active === step.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Background image */}
            {step.image && (
              <div className="absolute inset-0">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            )}

            {/* Content */}
            <p className="relative z-10 p-4 text-sm text-white leading-relaxed text-left">
              {step.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ))}
</div>


      {/* -------- DESKTOP VIEW (hover interactive layout) -------- */}
      <div className="hidden md:flex gap-4 justify-center items-stretch max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            onMouseEnter={() => setActive(step.id)}
            className={`transition-all duration-500 cursor-pointer rounded-xl flex flex-col justify-between relative ${
              active === step.id
                ? "bg-white w-[40%]"
                : `bg-gradient-to-b ${step.color} text-white w-[15%]`
            }`}
          >
            {active === step.id && step.image ? (
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/0 to-[#000000]/100 z-10" />
                <motion.div
                  key={step.id}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 30, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 w-full p-4 text-left text-white z-20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-px bg-white" />
                    <span className="text-sm font-semibold text-white/70">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-white">{step.title}</h3>
                  <p className="text-xs mt-2 leading-tight text-white">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ) : (
              <div className="flex flex-col h-[400px] justify-between items-stretch">
                <div className="flex justify-center h-[50px]">
                  <div className="w-1 h-full bg-white rounded-full"></div>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <p className="text-base font-medium rotate-[-90deg] whitespace-nowrap origin-center">
                    {step.title}
                  </p>
                </div>
                <div className="flex justify-center pb-8">
                  <h4
                    className="text-5xl font-medium text-transparent"
                    style={{ WebkitTextStroke: "1px white" }}
                  >
                    {step.number}
                  </h4>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;


import TaskStep1 from "../assets/TaskStep1.png";
import TaskStep2 from "../assets/TaskStep2.png";
import TaskStep3 from "../assets/TaskStep3.png";

const steps = [
  {
    title: "Choose from our service options",
    description:
      "Consult with our team, choose a service that fits your needs, and place an order quickly.",
    image: TaskStep1,
    number: "01",
  },
  {
    title: "Assign a task",
    description:
      "Assign the task with clear instructions and timelines. Our system ensures it gets to the right expert.",
    image: TaskStep2,
    number: "02",
  },
  {
    title: "Await timely delivery",
    description:
      "Sit back and relax as our team delivers the completed task within the committed time frame.",
    image: TaskStep3,
    number: "03",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 font-poppins bg-white">
      {/* Header */}
      <div className="bg-[#952502] text-white text-center rounded-xl mx-auto px-6 pt-10 pb-[200px] max-w-7xl">
        <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
        <p className="max-w-6xl mx-auto text-sm">
          Streamline your process with ease. From selection to completion, our
          platform makes it simple and efficient.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-[-150px] max-w-7xl mx-auto px-6">
        <div
          className="flex gap-10 overflow-x-auto md:flex-wrap md:justify-center"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] h-[400px] rounded-xl shadow-lg relative overflow-hidden flex flex-col justify-start text-center p-6"
              style={{
                backgroundImage: `url(${step.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                scrollSnapAlign: "start",
              }}
            >
              <div className="bg-transparent bg-opacity-85 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2 flex items-center justify-between gap-2">
                  <span className="text-black">{step.title}</span>
                  <span className="text-[#952502] text-sm font-bold">
                    {step.number}
                  </span>
                </h3>
                <p className="text-sm text-black">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

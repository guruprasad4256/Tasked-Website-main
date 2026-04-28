
const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose from our assets archive',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
    },
    {
      number: '02',
      title: 'Make a Deal',
      description:
        'Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
    },
    {
      number: '03',
      title: 'The asset starts working immediately',
      description:
        'Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
    },
  ];

  return (
    <section className="bg-white px-4 py-16 lg:px-32 font-poppins text-black">
      {/* Heading */}
      <h2 className="text-center text-2xl lg:text-3xl font-semibold text-[#9E0000] mb-4">
        How It Works
      </h2>

      {/* Subtitle */}
      <p className="text-center text-sm lg:text-base mb-12 max-w-5xl mx-auto">
        Doem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
        ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Steps */}
      <div className="space-y-6">
  {steps.map((step, index) => (
    <div
      key={index}
      className="bg-[#9E0000] w-[65%] mx-auto text-white rounded-xl px-[50px] py-[50px] shadow-md space-y-2"
    >
      <h3 className="text-lg lg:text-xl font-semibold flex items-center gap-6">
        <span className="text-white">{step.number}</span>
        {step.title}
      </h3>
      <p className="text-sm lg:text-base">{step.description}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default HowItWorks;

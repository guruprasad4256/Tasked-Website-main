import { useEffect, useRef, useState } from 'react';
import DigitalMarketing from '../assets/DigitalMarketing.png';
import ContentWriting from '../assets/ContentWriting.png';
import LegalServices from '../assets/LegalServices.png';
import HumanResource from '../assets/HumanResource.png';
import DesignServices from '../assets/DesignServices.png';
import Accounting from '../assets/Accounting.png';
import sbg from '../assets/sliderbg.png';

const services = [
  {
    name: 'Accounting',
    image: Accounting,
    gradient: 'linear-gradient(to top right, rgba(24, 128, 19, 0.4), rgba(0, 254, 179, 0.4))',
    color: 'bg-red-600 text-white',
    description: `<p class="text-sm sm:text-base font-medium">Ensure seamless financial management with expert accountants who simplify complex processes and protect your business from compliance risks. From tax filings to payroll management, we have you covered at every step of your financial journey.</p>
<p>GST filing | PT filing | ESI and EPF filing | TDS filing | Accounting</p>`,
  },
  {
    name: 'Content Writing',
    image: ContentWriting,
    gradient: 'linear-gradient(to top right, rgba(255, 164, 0, 0.4), rgba(0, 174, 255, 0.4))',
    color: 'bg-red-600 text-white',
    description: `<p class="text-sm sm:text-base font-medium">As a brand, communication is key to effectively market your business, you can deploy our seasoned writers who can communicate your brand s voice and messaging, nurture your audience and build lasting customer relationships.</p><p>Copywriting | Article Writing | Webpage Writing | Product Description | Press Release | Meta Description Writing</p>`,
  },
  {
    name: 'Design Services',
    image: DesignServices,
    gradient: 'linear-gradient(to top right, rgba(233, 165, 0, 0.4), rgba(255, 63, 0, 0.4))',
    color: 'bg-red-600 text-white',
    description: `<p class="text-sm sm:text-base font-medium">Avail graphic and web design services to communicate your company's brand and information with high quality visuals.</p><p>Brand Identity | Web Design | Marketing Collateral Design</p>`,
  },
  {
    name: 'Digital Marketing',
    image: DigitalMarketing,
    gradient: 'linear-gradient(to top right, rgba(79, 79, 255, 0.4), rgba(185, 0, 86, 0.4))',
    color: 'bg-red-600 text-white',
    description: `<p class="text-sm sm:text-base font-medium">Establish your digital footprint with high performance campaigns and brand building strategies.</p><p>SEO | Paid Ads | Analytics | Email Marketing | Social Media Management | Marketing Automation</p>`,
  },
  {
    name: 'Human Resource',
    image: HumanResource,
    gradient: 'linear-gradient(to top right, rgba(239, 0, 0, 0.4), rgba(97, 6, 0, 0.4))',
    color: 'bg-red-700 text-white',
    description: `<p class="text-sm sm:text-base font-medium">Enjoy the benefits of having trained HR Recruiters who can hire the right people and can make all the difference between cash churn and cash burn.</p><p>Sourcing | Screening | Creating Job Descriptions | Job Posting | Client - Candidate Coordination | Telephonic Verification | Fractional HR</p>`,
  },
  {
    name: 'Legal Services',
    image: LegalServices,
    gradient: 'linear-gradient(to top right, rgba(255, 155, 0, 0.4), rgba(11, 179, 18, 0.4))',
    color: 'bg-red-600 text-white',
    description: `<p class="text-sm sm:text-base font-medium">Protect your business from long term risk with legal expertise at your fingertips at every step of your business.</p><p>Contract Review Drafting & Negotiation | Legal Advisory | Legal Research | POSH Compliance | Litigation Management | Contract Management</p>`,
  },
];

const ExpertiseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const autoSlideInterval = useRef<number | null>(null);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideInterval.current = setInterval(() => {
      if (!isDragging) nextSlide();
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    setIsDragging(true);
    stopAutoSlide();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || dragStartX.current === null) return;
    const dragDiff = e.clientX - dragStartX.current;

    if (Math.abs(dragDiff) > 100) {
      if (dragDiff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      dragStartX.current = null;
      setIsDragging(false);
      startAutoSlide();
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    dragStartX.current = null;
    startAutoSlide();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    dragStartX.current = e.touches[0].clientX;
    setIsDragging(true);
    stopAutoSlide();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartX.current === null) return;
    const dragDiff = e.touches[0].clientX - dragStartX.current;

    if (Math.abs(dragDiff) > 100) {
      if (dragDiff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      dragStartX.current = null;
      setIsDragging(false);
      startAutoSlide();
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    dragStartX.current = null;
    startAutoSlide();
  };


  const getSlideClass = (i: number) => {
    const center = currentIndex;
    const left = (center - 1 + services.length) % services.length;
    const right = (center + 1) % services.length;

    if (i === center) return 'z-30 scale-110 opacity-100 w-[250px] h-[250px] md:w-[450px] md:h-[250px]';
    if (i === left) return 'z-10 opacity-40 blur-sm translate-x-[-400px] scale-90 w-[300px] h-[220px]';
    if (i === right) return 'z-10 opacity-40 blur-sm translate-x-[400px] scale-90 w-[300px] h-[220px]';
    return 'hidden';
  };

  return (
    <section id="services" className="text-[#903033] text-center px-4 pt-16 pb-0 relative overflow-hidden bg-white">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Stop building a team. Start building momentum.</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-12 text-sm sm:text-base md:text-lg">
       Pick the function. We’ll handle the execution.
      </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center flex-wrap gap-3 px-4 mb-10">
        {services.map((service, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden px-4 py-2 rounded-[8px] border border-[#DC2626] text-sm font-medium transition-all duration-300 whitespace-nowrap ${isActive
                ? 'bg-white text-black'
                : 'text-black hover:bg-[#DC2626] hover:text-[#fdfdfd]'
                }`}
            >
              {isActive && (
                <div className="button-fill absolute top-0 left-0 w-full h-full" />
              )}
              <span className="relative z-10">{service.name}</span>
            </button>
          );
        })}
      </div>

      <div className="relative flex items-center justify-center gap-4 px-4 mb-10 z-10">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="border-2 border-[#903033] text-[#903033] rounded-full w-10 h-10 flex items-center justify-center text-xl bg-transparent"
        >
          &lt;
        </button>

        {/* Sliding Title */}
        <div className="h-[36px] sm:h-[48px] overflow-hidden relative text-[#903033] font-medium text-base sm:text-xl z-0">
          <div
            className="flex flex-col transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateY(-${currentIndex * (window.innerWidth < 640 ? 36 : 48)}px)`,
            }}
          >
            {services.map((service, index) => (
              <span
                key={index}
                className="h-[36px] sm:h-[48px] flex items-center justify-center"
              >
                {service.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="border-2 border-[#903033] text-[#903033] rounded-full w-10 h-10 flex items-center justify-center text-xl bg-transparent"
        >
          &gt;
        </button>
      </div>

{/* Description */}
      <div
        className="text-gray-700 mt-8 sm:mt-4 max-w-2xl mx-auto text-sm transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-4"
        dangerouslySetInnerHTML={{ __html: services[currentIndex].description }}
      />

      {/* Slides */}
      <div
        className="relative flex justify-center items-center h-[300px] md:h-[450px] transition-all duration-700 ease-in-out touch-pan-x cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'pan-y' }}
      >
        
        {services.map((slide, i: number) => (
          <div
            key={i}
            className={`absolute rounded-xl flex items-center justify-center transition-all duration-700 ease-in-out shadow-2xl ${getSlideClass(i)}`}
            style={{
              backgroundImage: `${slide.gradient}, url(${sbg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={slide.image}
                alt={slide.name}
                draggable={false}
                className="object-contain transition duration-500"
                style={{
                  width: 'calc(100% + 100px)',
                  height: 'calc(100% + 100px)',
                  margin: '-50px',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* <a href='https://assign.manhoursonhire.com/signup/client?utm_source=landingpage&utm_medium=cta_schedule_call'>
        <button className="mt-6 sm:mt-12 px-6 sm:px-8 p-3 rounded-full bg-white text-black font-semibold shadow-md hover:bg-yellow-400 transition text-sm sm:text-base">
          Schedule a Call
        </button>
      </a> */}
    </section>
  );
};

export default ExpertiseSection;

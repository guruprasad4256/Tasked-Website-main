import trustpilot from '@/assets/trustpilot.png';
import yourstory from '@/assets/yourstory.png';
import Heading from '@/assets/TestimonialHeading.png';
import Breadcrumbs from "../Breadcrumbs";

declare global {
  interface Window {
    lintrk?: (event: string, data: { conversion_id: number }) => void;
  }
}

const Intro = () => {
  const handleButtonClick = () => {
    if (window.lintrk) {
      window.lintrk('track', { conversion_id: 20760020 });
    }
    // Redirect after short delay to allow tracking
    setTimeout(() => {
      window.location.href =
        "https://assign.manhoursonhire.com/signup/client?utm_source=landingpage&utm_medium=cta_trymoh";
    }, 100);
  };

  return (
    <section
      id="intro"
      className="bg-black text-white flex flex-col items-center justify-center relative overflow-hidden py-12"
    >
      
      <div className="max-w-7xl px-0 py-0 text-center flex flex-col gap-10">
        <Breadcrumbs className="text-white" />
        {/* Hardcoded text paragraphs instead of dynamic */}
        <h2 className="text-3xl md:text-3xl font-semibold">
  <img 
    src={Heading} 
    alt="Go further with a subscription" 
    className="mx-auto h-12 md:h-16 object-contain"
  />
</h2>
        <p className="text-lg sm:text-xl md:text-2xl">
          You're burning cash and wasting time on models that were never built for a startup's reality. Every choice feels like the wrong one.
        </p>

        <div className="w-full flex flex-col sm:flex-row items-center justify-around gap-6 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <span>4.5 Rating On</span>
            <img src={trustpilot} alt="Trustpilot" className="h-14" />
          </div>

          <div className="flex items-center gap-2">
            <img src={yourstory} alt="YourStory" className="h-14" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

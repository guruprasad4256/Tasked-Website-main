import Header from "../components/Header/Header";
import TaskedHero from "../components/Tasked/TaskedHero";
import WhyChooseUs from "../components/Tasked/WhychooseUs";
import Packages from "../components/Tasked/Packages";
import CaseStudy from "../components/Tasked/CaseStudy";
import HowItWorks from "../components/Tasked/HowItWorks";
import FAQ from "../components/Tasked/FAQs";
import Testimonial from "../components/Tasked/Testimonial";
import Footer from "../components/Footer/Footer";

const Tasked = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <TaskedHero />      
       <WhyChooseUs />  
       <Packages />
       <HowItWorks />
       <CaseStudy />
       <Testimonial />
       <FAQ />
      <Footer />
    </div>
  );
};

export default Tasked;

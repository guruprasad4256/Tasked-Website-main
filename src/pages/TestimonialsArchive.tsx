import Header from "../components/Header/Header";
import TestimonialsArchive from "../components/TestimonialsArchive/TestimonialsArchive";
import TestimonialsHero from "../components/TestimonialsArchive/TestimonialsArchiveHero";
import TestimonialsCta from "../components/TestimonialsArchive/TestimonialsArchiveCTA";
import Footer from "../components/Footer/Footer";
import Logo from "@/assets/WhiteLogo.png";

const Testimonials = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <TestimonialsHero />    
      <TestimonialsArchive />   
      <TestimonialsCta /> 
      <Footer />
    </div>
  );
};
export default Testimonials;
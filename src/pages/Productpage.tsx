import Header from "../components/Header/Header";
import ProductHero from "../components/ProductPage/ProductHero";
import WhyFestPosts from "../components/ProductPage/WhyFestPosts";
import PastProjects from "../components/ProductPage/Imagegallery";
import WhyWeNeed from "../components/ProductPage/WhyWeNeed";
import Packages from "../components/Tasked/Packages";
import FAQ from "../components/Tasked/FAQs";
import Footer from "../components/Footer/Footer";
import Logo from "@/assets/WhiteLogo.png";

const Tasked = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header color="#9E0000" img={Logo} />
      <ProductHero />   
      <WhyFestPosts /> 
      <PastProjects />
       <WhyWeNeed />  
       <Packages />
       <FAQ />
      <Footer />
    </div>
  );
};

export default Tasked;

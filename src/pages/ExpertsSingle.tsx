import Header from "../components/Header/Header";
import ExpertsingleHero from "../components/ExpertsSingle/ExpertsingleHero";
import ExpertsingleFAQ from "../components/ExpertsSingle/ExpertsingleFAQ";
import ExpertCertifications from "../components/ExpertsSingle/ExpertCertifications";
import ExpertPortfolio from "../components/ExpertsSingle/ExpertPortfolio";
import ExpertCaseStudies from "../components/ExpertsSingle/ExpertCaseStudies";
import Footer from "../components/Footer/Footer";
import Logo from "@/assets/WhiteLogo.png";

const Experts = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <ExpertsingleHero />
      <ExpertCertifications />
      <ExpertPortfolio />
      <ExpertCaseStudies />
      <ExpertsingleFAQ />
      <Footer />
    </div>
  );
};

export default Experts;

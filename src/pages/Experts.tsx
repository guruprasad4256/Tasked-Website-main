import Header from "../components/Header/Header";
import ExpertCTA from "../components/ExpertsHome/ExpertCTA";
import ExpertHero from "../components/ExpertsHome/ExpertHero";
import Footer from "../components/Footer/Footer";
import ExpertHowItWorks from "../components/ExpertsHome/ExpertHowItWorks";
import ExpertFAQ from "../components/ExpertsHome/ExpertFAQ";
import ExpertProcess from "../components/ExpertsHome/ExpertProcess";
import MohExperts from "../components/ExpertsHome/MohExperts";
import ExpertWhyChooseUS from "../components/ExpertsHome/ExpertWhyChooseUS";
import TopExpers from "../components/ExpertsHome/ExpersArchive";
import Logo from "@/assets/WhiteLogo.png";


const Experts = () => {
  return (
    <div>
      <Header />
      <ExpertHero />
      <ExpertHowItWorks />
      <ExpertWhyChooseUS />
      <TopExpers />
      <MohExperts />
      <ExpertProcess />
      <ExpertFAQ />
      <ExpertCTA />      
      <Footer />
    </div>
  );
};

export default Experts;
import Header from "../components/Header/Header";
import ExpertsArchive from "../components/ExpertsArchive/ExpertsArchive";
import Footer from "../components/Footer/Footer";
import Logo from "@/assets/WhiteLogo.png";

const Experts = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <ExpertsArchive />      
      <Footer />
    </div>
  );
};

export default Experts;

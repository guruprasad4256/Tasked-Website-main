import Header from "../components/Header/Header";
import FooterSection from "@/components/Footer/Footer";
import TermsofUse from "@/components/Legal/TermsofUse";
import Logo from "@/assets/logo.png";

const Terms = () => {
  return (
    <div>
      <Header color="#fff" img={Logo}/>
      <TermsofUse/>
      <FooterSection />
    </div>
  );
};

export default Terms;
import Header from "../components/Header/Header";
import FooterSection from "@/components/Footer/Footer";
import PrivacyPolicy  from "@/components/Legal/PrivacyPolicy";
import Logo from "@/assets/logo.png";

const Privacy = () => {
  return (
    <div>
      <Header />
      <PrivacyPolicy />
      <FooterSection />
    </div>
  );
};

export default Privacy;
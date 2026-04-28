import Header from "../components/Header/Header";
import FooterSection from "@/components/Footer/Footer";
import RefundPolicy from "@/components/Legal/RefundPolicy";
import Logo from "@/assets/logo.png";

const Refund = () => {
  return (
    <div>
      <Header />
      <RefundPolicy/>
      <FooterSection />
    </div>
  );
};

export default Refund;
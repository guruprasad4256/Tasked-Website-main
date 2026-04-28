import Header from "../components/Header/Header";
import FooterSection from "@/components/Footer/Footer";
import CookiePolicy from "@/components/Legal/CookiePolicy";
import Logo from "@/assets/logo.png";

const Cookie = () => {
  return (
    <div>
      <Header color="#fff" img={Logo}/>
      <CookiePolicy/>
      <FooterSection />
    </div>
  );
};

export default Cookie;
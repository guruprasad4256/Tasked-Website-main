import ShopifyLogo from "@/assets/shopify.png";
import FacebookPartner from "@/assets/facebook.png";
import ZohoPartner from "@/assets/zoho.png";
import EmovurPartner from "@/assets/emovur.png";
import RazorpayPartner from "@/assets/razorpay.png";
import HostingerPartner from "@/assets/hostinger.png";
import "../../styles/Marquee.css";

const CollaborationSection = () => {
  // smaller on mobile, larger from md+
  const logoClass = "h-12 sm:h-14 md:h-20 object-contain"; 

  return (
    <section className="bg-black text-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-semibold mb-6">
          Innovation Through Collaboration
        </h2>

        <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
          Regularly publishing blog posts allows a business to cover a wider
          range of keywords and topics, which can improve its chances of
          ranking on search engines. Long-Tail Keywords: Blogs give you the
          flexibility to target niche, long-tail keywords that may be too
          specific to cover on a product or service page.
        </p>

        {/* Infinite Marquee */}
        <div className="marquee">
          <div className="marquee__track">
            <div className="marquee__group">
              <img src={ShopifyLogo} alt="Shopify Partner" className={logoClass} />
              <img src={ZohoPartner} alt="Zoho Partner" className={logoClass} />
              <img src={RazorpayPartner} alt="Razorpay Partner" className={logoClass} />
              <img src={HostingerPartner} alt="Hostinger Partner" className={logoClass} />
              <img src={FacebookPartner} alt="Facebook Partner" className={logoClass} />
              <img src={EmovurPartner} alt="Emovur Partner" className={logoClass} />
            </div>

            <div className="marquee__group">
              <img src={ShopifyLogo} alt="Shopify Partner" className={logoClass} />
              <img src={ZohoPartner} alt="Zoho Partner" className={logoClass} />
              <img src={RazorpayPartner} alt="Razorpay Partner" className={logoClass} />
              <img src={HostingerPartner} alt="Hostinger Partner" className={logoClass} />
              <img src={FacebookPartner} alt="Facebook Partner" className={logoClass} />
              <img src={EmovurPartner} alt="Emovur Partner" className={logoClass} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;

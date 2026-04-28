import { useNavigate } from "react-router-dom";

import AccountingIcon from "../assets/accountingservice.png";
import ContentIcon from "../assets/content.png";
import DesigningIcon from "../assets/designing.png";
import MarketingIcon from "../assets/marketing.png";
import HRIcon from "../assets/hr.png";
import LegalIcon from "../assets/legal.png";
import Breadcrumbs from '@/components/Breadcrumbs';

const services = [
  { label: "Accounting", icon: AccountingIcon },
  { label: "Content Writing", icon: ContentIcon },
  { label: "Designing", icon: DesigningIcon, route: "Design" }, // 👈 route override
  { label: "Digital Marketing", icon: MarketingIcon },
  { label: "Recruitment", icon: HRIcon }, // 👈 fixed label
  { label: "Legal", icon: LegalIcon },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Breadcrumbs />
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(`/services/${encodeURIComponent(service.route || service.label)}`)
            }
            style={{
              background: "linear-gradient(180deg, #980000 0%, #D90000 100%)",
            }}
            className="cursor-pointer rounded-xl shadow-lg flex flex-col justify-between p-6 h-[200px] text-white relative overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold z-10">{service.label}</h3>

            <img
              src={service.icon}
              alt={service.label}
              className="absolute bottom-2 right-4 w-[200px] h-[150px] object-contain opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

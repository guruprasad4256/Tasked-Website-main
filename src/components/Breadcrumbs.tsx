import React from "react";
import { useLocation, Link } from "react-router-dom";
import clsx from "clsx";

interface BreadcrumbsProps {
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className }) => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <section className="w-full font-poppins bg-transparent">
      {/* Breadcrumb */}
      <nav
        className={clsx(
          "text-sm mb-6 max-w-7xl mx-auto px-6 lg:px-0 text-gray-500",
          className
        )}
      >
        {/* ONE-LINE: prevent wrapping + allow horizontal scroll if overflow */}
        <ul className="flex flex-nowrap items-center gap-2 whitespace-nowrap overflow-x-auto no-scrollbar">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          {paths.map((path, index) => (
            <li key={index} className="flex items-center gap-2">
              <span>›</span>
              {index === paths.length - 1 ? (
                <span className="font-semibold capitalize">
                  {decodeURIComponent(path.replace(/-/g, " "))}
                </span>
              ) : (
                <Link
                  to={`/${paths.slice(0, index + 1).join("/")}`}
                  className="hover:underline capitalize"
                >
                  {decodeURIComponent(path.replace(/-/g, " "))}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* hide scrollbar helper */}
      <style>{`
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default Breadcrumbs;

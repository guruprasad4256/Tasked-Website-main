import React from "react";

// ✅ Use EXACT imports you provided (no changes)
import LogoTransparent from "@/assets/logo.png"; // checkerboard bg logo
import LogoMiddle from "@/assets/logo.png"; // ✅ middle logo must be logo.png
import LogoBlack from "@/assets/WhiteLogo.png"; // logo for black bg
import MohFavicon from "../../../public/icon.png";
import MohSpacing from "@/assets/logo.png";
import Breadcrum from "./Breadcrumbs";

const BrandGuidelinesMOH: React.FC = () => {
  return (
    <section className="w-full bg-white pt-8 sm:pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-poppins text-black">
        {/* ================= TOP BAR (SAME LINE) ================= */}
        <div className="flex items-center justify-between gap-4 mb-4">
          {/* Left breadcrumb */}
          <div className="text-sm text-[#444] min-w-0">
            <Breadcrum />
          </div>

          {/* Right button */}
          <button className="shrink-0 px-5 sm:px-7 py-2.5 rounded-full bg-[#8B1E00] text-white text-sm font-semibold hover:bg-[#741900] transition">
            Download Kit here
          </button>
        </div>

        {/* ================= Brand logos ================= */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[30px] font-semibold mb-3">
          Brand logos
        </h2>

        <p className="text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] text-[#111] max-w-6xl">
          Our brand identity is built around clarity, precision, and impact. The bold red in our
          logo highlights urgency, commitment, and the value of time, while the bright yellow
          accents bring energy, optimism, and focus. The clock element symbolizes reliability and
          efficiency, which are at the core of what we deliver. Supported by a clean black typeface,
          our design ensures readability and professionalism across all formats.
        </p>

        {/* ================= LOGO CARDS ================= */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
          {/* Left: Checkerboard background */}
          <div className="rounded-[18px] sm:rounded-[22px] overflow-hidden border border-[#E6E6E6]">
            <div
              className="h-[170px] sm:h-[220px] md:h-[260px] flex items-center justify-center"
              style={{
                backgroundImage:
                  "linear-gradient(45deg,#e6e6e6 25%,transparent 25%),linear-gradient(-45deg,#e6e6e6 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e6e6e6 75%),linear-gradient(-45deg,transparent 75%,#e6e6e6 75%)",
                backgroundSize: "18px 18px",
                backgroundPosition: "0 0,0 9px,9px -9px,-9px 0px",
              }}
            >
              <img
                src={LogoTransparent}
                alt="MOH logo transparent"
                className="h-[70px] sm:h-[105px] md:h-[120px] w-auto object-contain"
                draggable={false}
              />
            </div>
          </div>

          {/* Center: Black background */}
          <div className="rounded-[18px] sm:rounded-[22px] overflow-hidden border border-[#E6E6E6] bg-black">
            <div className="h-[170px] sm:h-[220px] md:h-[260px] flex items-center justify-center">
              <img
                src={LogoBlack}
                alt="MOH logo on black"
                className="h-[70px] sm:h-[105px] md:h-[120px] w-auto object-contain"
                draggable={false}
              />
            </div>
          </div>

          {/* Right: White background */}
          <div className="rounded-[18px] sm:rounded-[22px] overflow-hidden border border-[#E6E6E6] bg-white">
            <div className="h-[170px] sm:h-[220px] md:h-[260px] flex items-center justify-center">
              <img
                src={LogoMiddle}
                alt="MOH logo"
                className="h-[70px] sm:h-[105px] md:h-[120px] w-auto object-contain"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* ================= Favicon use + Spacing and usage ================= */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Favicon use */}
          <div>
            <h3 className="text-[24px] sm:text-[28px] md:text-[30px] font-semibold mb-4">
              Favicon use
            </h3>
            <ul className="list-disc pl-5 sm:pl-6 text-[13px] sm:text-[14px] leading-[22px] text-[#111] space-y-2">
              <li>
                The favicon simplifies the “m.o.h” logo with the red clock symbol, ensuring brand
                recall even at small sizes.
              </li>
              <li>
                It serves as a visual identifier in browser tabs, bookmarks, and search results,
                making the site easily recognizable.
              </li>
              <li>
                The favicon enhances professionalism and trust, creating a consistent brand presence
                across digital touchpoints.
              </li>
            </ul>

            <div className="mt-6 sm:mt-8 rounded-[16px] sm:rounded-[18px] border border-[#E6E6E6] bg-white h-[160px] sm:h-[205px] md:h-[220px] flex items-center justify-center">
              <img
                src={MohFavicon}
                alt="MOH favicon"
                className="h-[85px] sm:h-[120px] md:h-[130px] w-auto object-contain"
                draggable={false}
              />
            </div>
          </div>

          {/* Spacing and usage */}
          <div>
            <h3 className="text-[24px] sm:text-[28px] md:text-[30px] font-semibold mb-4">
              Spacing and usage
            </h3>
            <ul className="list-disc pl-5 sm:pl-6 text-[13px] sm:text-[14px] leading-[22px] text-[#111] space-y-2">
              <li>
                Maintain a clear space of 0.5x on the sides and at least 2x above and below the logo
                to ensure visibility.
              </li>
              <li>
                The proportions of m.o.h and the clock symbol must remain intact, without stretching
                or distortion.
              </li>
              <li>
                Always place the logo on a neutral or contrasting background to preserve legibility
                and brand consistency.
              </li>
            </ul>

            <div className="mt-6 sm:mt-8 rounded-[16px] sm:rounded-[18px] border border-[#E6E6E6] bg-white h-[160px] sm:h-[205px] md:h-[220px] flex items-center justify-center">
              <img
                src={MohSpacing}
                alt="MOH spacing and usage"
                className="h-[105px] sm:h-[140px] md:h-[150px] w-auto object-contain"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* ================= Brand Colors ================= */}
        <div className="mt-14 sm:mt-16">
          <h3 className="text-center text-[24px] sm:text-[28px] md:text-[30px] font-semibold mb-6 sm:mb-8">
            Brand Colors
          </h3>

          {/* ✅ Mobile: 3 in ONE ROW (scroll if needed), Tablet/Desktop: grid */}
          <div
            className="
              flex sm:grid
              flex-row gap-4
              overflow-x-auto sm:overflow-visible
              sm:grid-cols-3
              justify-start sm:justify-items-center
              pb-2
              [-webkit-overflow-scrolling:touch]
              no-scrollbar
            "
          >
            {[
              { name: "Bright Red", hex: "#FF0000", label: "Primary Color", text: "text-black" },
              { name: "Deep Red", hex: "#9E0000", label: "Secondary Color", text: "text-white" },
              { name: "Bright Yellow", hex: "#FFEB19", label: "Secondary Color", text: "text-black" },
            ].map((c) => (
              <div
                key={c.hex}
                className="
                  w-[210px] sm:w-full sm:max-w-[260px]
                  flex-shrink-0 sm:flex-shrink
                  rounded-[16px] border border-[#E6E6E6] bg-white p-3 sm:p-4
                "
              >
                <div
                  className={`h-[85px] sm:h-[120px] rounded-[12px] flex items-center justify-center text-center px-3 sm:px-4 font-semibold ${c.text}`}
                  style={{ backgroundColor: c.hex }}
                >
                  <div className="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[18px]">
                    {c.name}
                    <div>{c.hex}</div>
                    <div>{c.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Content below colors LEFT ALIGNED */}
          <p className="mt-6 sm:mt-8 text-left text-[13px] sm:text-[14px] leading-[22px] text-[#111] max-w-5xl">
            The logo uses a bold red for the letters and clock, symbolizing energy, urgency, and
            attention—reflecting the value of time. The bright yellow adds contrast, representing
            positivity and focus while balancing the strong red. The black tagline grounds the
            design, ensuring clarity and readability across backgrounds.
          </p>
        </div>

        {/* ================= What We Do ================= */}
        <div className="mt-14 sm:mt-16 pb-10">
          <h3 className="text-[24px] sm:text-[28px] md:text-[30px] font-semibold mb-4">
            What we Do
          </h3>

          <p className="text-[13px] sm:text-[14px] leading-[22px] text-[#111] max-w-6xl">
            MOH is an ideal solution for start-ups that expect agility and high quality work at a
            budget but are unable to anticipate the volume or frequency of work.
          </p>

          <p className="text-[13px] sm:text-[14px] leading-[22px] text-[#111] mt-4 max-w-6xl">
            We deploy experienced and trained workforce for business functions such as legal,
            marketing, content, recruitment, and design. With MOH start-ups and small businesses can
            subscribe to fixed hourly packages to avail services for any or all of these functions
            as and when required.
          </p>
        </div>

        {/* component-only scrollbar hide */}
        <style>{`
          @media (max-width: 639px) {
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default BrandGuidelinesMOH;

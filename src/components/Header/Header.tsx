import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const navItems = [
  { label: "About", url: "/about" },
  { label: "Our Work", url: "/work" },
  { label: "Recommended", url: "/recommended" },
  { label: "FAQ", url: "/faq" },
];

const HeaderExactWithFloating: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsFloating(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full bg-white font-poppins shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
      {/* ================= NORMAL HEADER ================= */}
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <img src={logo} alt="m.o.h" className="h-10 sm:h-12 w-auto" />
          </a>

          {/* Desktop nav pill */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="w-full max-w-5xl rounded-full border border-black/15 bg-white px-10 py-3 flex items-center justify-between">
              <nav className="flex items-center gap-12 text-sm text-black">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    className="hover:text-[#8B1B1B] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href="https://assign.manhoursonhire.com/signup/client"
                className="rounded-full bg-[#8B1B1B] hover:bg-[#6f1515] text-white text-sm font-medium px-6 py-2 transition-colors whitespace-nowrap"
              >
                Book a Subscription
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden rounded-full border border-black/20 bg-white p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* ================= FLOATING HEADER (NO LINKS) ================= */}
      <div
        className={`
          hidden lg:block fixed top-4 left-1/2 -translate-x-1/2 z-[999]
          transition-all duration-300 ease-out
          ${
            isFloating
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}
      >
        {/* ✅ max width = 5xl (your 5*1) */}
        <div className="w-[calc(100vw-2rem)] max-w-5xl">
          <div className="rounded-full border border-black/15 bg-white px-8 py-3 flex items-center justify-between">
            {/* Logo (no link) */}
            <img src={logo} alt="m.o.h" className="h-8 w-auto" />

            {/* Nav names only (NO links) */}
            <div className="flex items-center gap-12 text-sm text-black">
              {navItems.map((item) => (
                <span key={item.label} className="select-none">
                  {item.label}
                </span>
              ))}
            </div>

            {/* Button text only (NO link) */}
            <div className="rounded-full bg-[#8B1B1B] text-white text-sm font-medium px-6 py-2 whitespace-nowrap">
              Book a Subscription
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-[280px] bg-white z-50 p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <img src={logo} alt="m.o.h" className="h-10" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full border border-black/15 p-2"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  className="text-sm font-medium text-black"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://assign.manhoursonhire.com/signup/client"
                className="mt-6 text-center rounded-full bg-[#8B1B1B] hover:bg-[#6f1515] text-white text-sm font-medium px-6 py-3 transition-colors"
              >
                Book a Subscription
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default HeaderExactWithFloating;

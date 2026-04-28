import React from "react";

const FooterSection: React.FC = () => {
  return (
    <footer className="w-full font-poppins text-white">
      {/* Background */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(to top, #270000 0%, #270000 30%, #8D0101 100%)",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10">
          
          {/* Watermark ABOVE the line */}
          <div className="pointer-events-none select-none text-center mb-10">
            <div
              className="
                font-extrabold italic tracking-wide opacity-20 leading-none
                text-[75px] lg:text-[200px]
              "
            >
              Tasked
            </div>
          </div>

          {/* Divider line */}
          <div className="mx-auto max-w-6xl border-t border-white/40" />

          {/* Content */}
          <div className="mx-auto max-w-6xl pt-10 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
              
              {/* Address */}
              <div className="space-y-8 text-sm leading-6 text-white/95">
                <p>
                  No 32, 2nd floor, 32nd Cross Road, 7th Block, Jayanagar,
                  Bengaluru, Karnataka 560082
                </p>

                <p>
                  Phone Number :{" "}
                  <a
                    href="tel:08049730362"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    08049730362
                  </a>
                </p>

                <p>
                  Email :{" "}
                  <a
                    href="mailto:Contact@scgbsolutions.com"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Contact@scgbsolutions.com
                  </a>
                </p>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Services</h3>
                <ul className="space-y-3 text-white/95">
                  <li>Content Writing</li>
                  <li>Digital Marketing</li>
                  <li>Legal Services</li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-3 text-white/95">
                  <li>Solutions Curated By m.o.h</li>
                  <li>m.o.h Experts</li>
                  <li>m.o.h</li>
                </ul>
              </div>

              {/* Social */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Social</h3>
                <ul className="space-y-3 text-white/95">
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mx-auto max-w-6xl pt-6 text-center text-sm text-white/90">
            © Copyright © 2025, SCGB Solutions Pvt. Ltd. and its affiliates. All
            Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

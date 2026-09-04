import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function Footer() {
  return (
    <footer className="bg-[#111817] px-6 text-[#f1ede4] sm:px-10 md:px-14 lg:px-16 xl:px-20">

      <div className="mx-auto max-w-[1400px]">

        {/* ================= MAIN FOOTER ================= */}

        <div className="grid gap-14 py-16 md:grid-cols-[1.2fr_0.8fr] lg:py-20">

          {/* BRAND */}

          <div>

            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center border border-white/30">
                <span className="font-serif text-xl">
                  SK
                </span>
              </div>

              <div>

                <h2 className="text-sm font-medium tracking-[0.2em]">
                  SHEHZAD KHAN
                </h2>

                <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/40">
                  Cultural Strategy · Cross-Border Opportunities
                </p>

              </div>

            </div>

            <p className="mt-8 max-w-[460px] font-serif text-2xl leading-[1.2] text-[#e5ded3] sm:text-3xl">
              Connecting people, perspectives and possibilities across
              borders.
            </p>

          </div>

          {/* NAVIGATION */}

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-2">

            <div>

              <p className="mb-5 text-[9px] font-medium uppercase tracking-[0.25em] text-[#96302f]">
                Explore
              </p>

              <ul className="space-y-3">

                <li>
                  <a
                    href="#about"
                    className="text-xs text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#what-i-do"
                    className="text-xs text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    What I Do
                  </a>
                </li>

                <li>
                  <a
                    href="#latvia"
                    className="text-xs text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    Latvia
                  </a>
                </li>

                <li>
                  <a
                    href="#opportunities"
                    className="text-xs text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    Opportunities
                  </a>
                </li>

              </ul>

            </div>

            <div>

              <p className="mb-5 text-[9px] font-medium uppercase tracking-[0.25em] text-[#96302f]">
                Connect
              </p>

              <ul className="space-y-3">

                <li>
                  <a
                    href="#contact"
                    className="text-xs text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-xs text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    LinkedIn
                    <GoArrowUpRight className="text-sm" />
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[8px] uppercase tracking-[0.22em] text-white/35">
            © {new Date().getFullYear()} Shehzad Khan. All rights reserved.
          </p>

          <div className="flex items-center gap-3">

            <span className="h-px w-7 bg-[#96302f]" />

            <p className="text-[8px] uppercase tracking-[0.22em] text-white/35">
              Riga · Latvia
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
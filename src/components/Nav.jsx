import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d8d2c8] bg-[#f3efe7]/95 backdrop-blur-md">

      <div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-6 sm:px-8 lg:px-12">

        {/* Logo */}
        <div className="flex items-center gap-3">

          {/* SK Monogram */}
          <div className="flex h-10 w-10 items-center justify-center border border-[#202525]">
            <span className="font-serif text-xl leading-none text-[#202525]">
              SK
            </span>
          </div>

          {/* Name */}
          <div className="leading-none">

            <h1 className="font-sans text-[13px] font-semibold tracking-[0.22em] text-[#202525] sm:text-[14px]">
              SHEHZAD KHAN
            </h1>

            <p className="mt-1 text-[7px] tracking-[0.25em] text-[#77736b] sm:text-[8px]">
              PEOPLE. CULTURE. OPPORTUNITIES.
            </p>

          </div>

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">

          <ul className="flex items-center gap-8 xl:gap-10">

            <li>
              <a
                href="#home"
                className="text-[12px] font-medium text-[#303331] transition-colors duration-300 hover:text-[#9b302f]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-[12px] font-medium text-[#303331] transition-colors duration-300 hover:text-[#9b302f]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#what-i-do"
                className="text-[12px] font-medium text-[#303331] transition-colors duration-300 hover:text-[#9b302f]"
              >
                What I Do
              </a>
            </li>

            <li>
              <a
                href="#latvia"
                className="text-[12px] font-medium text-[#303331] transition-colors duration-300 hover:text-[#9b302f]"
              >
                Latvia
              </a>
            </li>

            <li>
              <a
                href="#insights"
                className="text-[12px] font-medium text-[#303331] transition-colors duration-300 hover:text-[#9b302f]"
              >
                Insights
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-[12px] font-medium text-[#303331] transition-colors duration-300 hover:text-[#9b302f]"
              >
                Contact
              </a>
            </li>

          </ul>

          {/* CTA */}
          <button
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-[4px]
              bg-[#96302f]
              px-5
              py-2.5
              text-[11px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#7f2727]
            "
          >
            Let's Connect

            <GoArrowUpRight
              className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

        </nav>

        {/* Mobile Menu */}
        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-[#303331]/30
            text-[#202525]
            transition
            hover:border-[#96302f]
            hover:text-[#96302f]
            lg:hidden
          "
          aria-label="Open menu"
        >
          <span className="flex flex-col gap-1.5">

            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-3.5 self-end bg-current" />

          </span>
        </button>

      </div>

    </header>
  );
}

export default Nav;
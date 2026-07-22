import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#E9E4D6]/90 backdrop-blur-md border-b border-[#d8d2c3] md:px-8 px-4 py-4">

      <div className="max-w-9xl gap-20 flex items-center justify-between px-6 py-5">

        {/* Logo */}

        <div>

          <h1 className="heading-primary text-[#1F3D2E] text-2xl lg:text-3xl leading-none">
            GUIDEWAY
          </h1>

          <p className="tracking-[4px] text-xs text-[#1F3D2E] mt-1">
            COACHING
          </p>

        </div>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-10">

          <ul className="flex items-center gap-10 text-[#1F3D2E] text-lg font-medium">

            <li className="cursor-pointer hover:text-[#456553] transition">
              Home
            </li>

            <li className="cursor-pointer hover:text-[#456553] transition">
              About
            </li>

            <li className="cursor-pointer hover:text-[#456553] transition">
              Coaching
            </li>

            

            <li className="cursor-pointer hover:text-[#456553] transition">
              Contact
            </li>

          </ul>

          <button className="inline-flex items-center gap-2 bg-[#1F3D2E] text-[#E9E4D6] px-6 py-3 rounded-xl hover:bg-[#173124] transition duration-300 cursor-pointer">

            Book a Call

            <GoArrowUpRight className="text-xl" />

          </button>

        </nav>

        {/* Mobile Menu */}

        <button className="lg:hidden text-3xl text-[#1F3D2E]">
          ☰
        </button>

      </div>

    </header>
  );
}

export default Nav;
import React from "react";
import hero from "../img/hero.png";
import { GoArrowUpRight } from "react-icons/go";

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#0b1112]">

      {/* HERO IMAGE */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Shehzad Khan"
          className="h-full w-full object-cover object-center"
        />

        {/* Overall cinematic overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Stronger dark treatment on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080f10] via-[#080f10]/85 via-[45%] to-transparent" />

        {/* Bottom cinematic fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080f10] to-transparent" />

        {/* Subtle warm overlay */}
        <div className="absolute inset-0 bg-[#7d3b35]/5 mix-blend-overlay" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col justify-between px-6 py-8 sm:px-10 md:px-14 lg:px-16 xl:px-20">

        {/* MAIN CONTENT */}
        <div className="flex flex-1 items-center">

          <div className="w-full max-w-[650px] pt-10 lg:pt-0">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#a93432]" />

              <p className="text-[9px] font-medium tracking-[0.25em] text-[#d8d1c5] sm:text-[10px]">
                CULTURAL DIPLOMACY · STRATEGY · CROSS-BORDER OPPORTUNITIES
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-[620px] font-serif text-[3.4rem] font-normal leading-[0.95] tracking-[-0.035em] text-[#f1ede4] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem]">

              Where Culture
              <br />

              <span className="text-[#c9a886]">
                Meets Opportunity.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[510px] text-sm font-light leading-6 text-[#ddd8cf] sm:text-base">
              I help businesses, investors and international partners
              navigate Latvia and wider European opportunities through
              trusted relationships, cultural intelligence and strategic
              market insight.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3">

              <button
                className="
                  inline-flex items-center gap-3
                  rounded-[4px]
                  bg-[#9f302f]
                  px-6 py-3.5
                  text-sm font-medium
                  text-white
                  transition-all duration-300
                  hover:bg-[#b33a38]
                  hover:gap-4
                "
              >
                Let's Connect
                <GoArrowUpRight className="text-lg" />
              </button>

              <button
                className="
                  inline-flex items-center gap-3
                  rounded-[4px]
                  border border-white/30
                  bg-black/10
                  px-6 py-3.5
                  text-sm font-medium
                  text-[#eee9df]
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:border-white/60
                  hover:bg-white/10
                "
              >
                Explore My Work
                <GoArrowUpRight className="text-lg" />
              </button>

            </div>

            {/* Geographic scope */}
            <div className="mt-10 flex items-center gap-3 text-[9px] tracking-[0.28em] text-[#bdb8ae] sm:text-[10px]">
              <span>EUROPE</span>
              <span className="text-[#9f302f]">•</span>
              <span>SOUTH ASIA</span>
              <span className="text-[#9f302f]">•</span>
              <span>MIDDLE EAST</span>
            </div>

          </div>
        </div>

        {/* BOTTOM META */}
        <div className="relative z-10 flex items-end justify-between border-t border-white/15 pt-5">

          {/* Scroll */}
          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            </div>

            <span className="text-[9px] uppercase tracking-[0.25em] text-[#bdb8ae]">
              Scroll to explore
            </span>
          </div>

          {/* Right location */}
          <div className="ml-auto text-right">

            <p className="text-[9px] font-medium tracking-[0.25em] text-[#d8d1c5]">
              RIGA, LATVIA
            </p>

            <p className="mt-1 text-[8px] tracking-[0.18em] text-[#9f9990]">
              A BRIDGE TO A BRIGHTER TOMORROW
            </p>

          </div>

        </div>

      </div>

      {/* EDITORIAL QUOTE */}
      <div className="absolute right-6 top-[34%] z-10 hidden w-[150px] sm:block lg:right-10 xl:right-16">

        <div className="border-l border-[#c9a886]/60 pl-4">

          <p className="font-serif text-lg leading-[1.15] text-[#eee9df]">
            “Bridging people,
            <br />
            ideas and
            <br />
            opportunities
            <br />
            across borders.”
          </p>

        </div>

      </div>

      {/* SMALL EDITORIAL LABEL */}
      <div className="absolute bottom-28 right-6 z-10 hidden lg:block xl:right-16">

        <p className="max-w-[100px] text-[8px] uppercase leading-4 tracking-[0.22em] text-white/50">
          PEOPLE
          <br />
          CULTURE
          <br />
          OPPORTUNITY
          <br />
          PARTNERSHIPS
        </p>

      </div>

    </section>
  );
}

export default Hero;
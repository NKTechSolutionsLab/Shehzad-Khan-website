import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function OpportunityCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#96302f] px-6 py-24 sm:px-10 md:px-14 lg:px-16 lg:py-32 xl:px-20"
    >
      {/* Decorative background typography */}

      <div className="pointer-events-none absolute -right-10 -top-20 hidden select-none lg:block">
        <span className="font-serif text-[20rem] leading-none text-white/[0.06]">
          →
        </span>
      </div>

      <div className="mx-auto max-w-[1400px]">

        {/* TOP LABEL */}

        <div className="flex items-center gap-3">

          <span className="h-px w-8 bg-white/60" />

          <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/70">
            Start a Conversation
          </p>

        </div>

        {/* MAIN CONTENT */}

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.55fr] lg:items-end">

          {/* HEADING */}

          <div>

            <h2 className="max-w-[900px] font-serif text-5xl font-normal leading-[0.95] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-[6rem]">
              Exploring an
              <br />
              <span className="text-[#e5c8a6]">
                Opportunity?
              </span>
            </h2>

          </div>

          {/* DESCRIPTION */}

          <div>

            <p className="max-w-[390px] text-sm font-light leading-7 text-white/75 md:text-base">
              Whether you're entering a new market, exploring an investment
              or looking for the right strategic partner, meaningful
              opportunities often begin with the right conversation.
            </p>

            <button
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                bg-[#f3efe7]
                px-6
                py-3.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#202525]
                transition-all
                duration-300
                hover:gap-5
                hover:bg-white
              "
            >
              Let's Talk

              <GoArrowUpRight
                className="
                  text-base
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </button>

          </div>

        </div>

        {/* OPPORTUNITY TYPES */}

        <div className="mt-20 grid border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">

          <div className="border-b border-r border-white/20 p-6">

            <span className="text-[9px] tracking-[0.2em] text-white/50">
              01
            </span>

            <p className="mt-6 font-serif text-xl text-white">
              Market Entry
            </p>

          </div>

          <div className="border-b border-r border-white/20 p-6">

            <span className="text-[9px] tracking-[0.2em] text-white/50">
              02
            </span>

            <p className="mt-6 font-serif text-xl text-white">
              Investment
            </p>

          </div>

          <div className="border-b border-r border-white/20 p-6">

            <span className="text-[9px] tracking-[0.2em] text-white/50">
              03
            </span>

            <p className="mt-6 font-serif text-xl text-white">
              Partnerships
            </p>

          </div>

          <div className="border-b border-r border-white/20 p-6">

            <span className="text-[9px] tracking-[0.2em] text-white/50">
              04
            </span>

            <p className="mt-6 font-serif text-xl text-white">
              Strategic Opportunities
            </p>

          </div>

        </div>

        {/* BOTTOM LINE */}

        <div className="mt-8 flex flex-col gap-3 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[9px] uppercase tracking-[0.22em] text-white/55">
            Europe · South Asia · Middle East
          </p>

          <p className="text-[9px] uppercase tracking-[0.22em] text-white/55">
            Riga · Latvia
          </p>

        </div>

      </div>
    </section>
  );
}

export default OpportunityCTA;
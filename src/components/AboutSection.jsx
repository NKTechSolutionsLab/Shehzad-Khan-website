import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#f3efe7] px-6 py-24 sm:px-10 md:px-14 lg:px-16 lg:py-32 xl:px-20"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* TOP LABEL */}

        <div className="mb-14 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#96302f]" />

            <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#6f6b64]">
              About Shehzad
            </p>
          </div>

          <span className="hidden text-[9px] tracking-[0.2em] text-[#99948b] sm:block">
            02 / 06
          </span>

        </div>

        {/* MAIN CONTENT */}

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* IMAGE */}

          <div className="relative">

            <div className="relative h-[500px] overflow-hidden bg-[#d8d0c2] sm:h-[600px] lg:h-[650px]">

              <img
                src="../src/img/shehzad.jpg"
                alt="Shehzad Khan"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  grayscale-[10%]
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
              />

              {/* Image overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#111817]/50 via-transparent to-transparent" />

              {/* Location */}

              <div className="absolute bottom-6 left-6">

                <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/80">
                  Riga, Latvia
                </p>

              </div>

            </div>

            {/* Decorative frame */}

            <div className="absolute -bottom-4 -right-4 -z-0 h-full w-full border border-[#96302f]/30" />

          </div>

          {/* TEXT */}

          <div className="flex flex-col justify-center">

            <p className="mb-7 text-[10px] font-medium uppercase tracking-[0.25em] text-[#96302f]">
              Cultural Strategist · Diplomatic Connector
            </p>

            <h2 className="max-w-[750px] font-serif text-4xl font-normal leading-[0.98] tracking-[-0.03em] text-[#202525] sm:text-5xl md:text-6xl lg:text-[4.8rem]">
              Connecting people,
              <br />
              <span className="text-[#96302f]">
                perspectives
              </span>
              <br />
              and possibilities.
            </h2>

            <div className="mt-10 max-w-[650px]">

              <p className="text-base font-light leading-7 text-[#45443f] md:text-lg md:leading-8">
                My work sits at the intersection of business, culture and
                relationships — helping international businesses and
                investors understand opportunities and navigate unfamiliar
                environments with greater clarity.
              </p>

              <p className="mt-6 text-sm font-light leading-6 text-[#77736b] md:text-base md:leading-7">
                Working across Europe, South Asia and the Middle East, I
                focus on the human and cultural context behind international
                opportunities: who to engage, how to build trust, how to
                position an idea locally and how to move from initial
                interest toward credible action.
              </p>

            </div>

            {/* AREAS */}

            <div className="mt-12 grid border-t border-[#202525]/15 sm:grid-cols-3">

              <div className="border-b border-[#202525]/15 py-5 sm:border-b-0 sm:border-r sm:pr-5">

                <p className="text-[9px] uppercase tracking-[0.2em] text-[#96302f]">
                  01
                </p>

                <p className="mt-3 font-serif text-lg text-[#202525]">
                  Europe
                </p>

              </div>

              <div className="border-b border-[#202525]/15 py-5 sm:border-b-0 sm:border-r sm:px-5">

                <p className="text-[9px] uppercase tracking-[0.2em] text-[#96302f]">
                  02
                </p>

                <p className="mt-3 font-serif text-lg text-[#202525]">
                  South Asia
                </p>

              </div>

              <div className="py-5 sm:pl-5">

                <p className="text-[9px] uppercase tracking-[0.2em] text-[#96302f]">
                  03
                </p>

                <p className="mt-3 font-serif text-lg text-[#202525]">
                  Middle East
                </p>

              </div>

            </div>

            {/* LINK */}

            <div className="mt-9">

              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-[#202525]/30
                  pb-2
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#202525]
                  transition-all
                  duration-300
                  hover:border-[#96302f]
                  hover:text-[#96302f]
                  hover:gap-5
                "
              >
                More About Shehzad

                <GoArrowUpRight
                  className="
                    text-base
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM STATEMENT */}

        <div className="mt-20 border-t border-[#202525]/15 pt-7 lg:mt-28">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="font-serif text-xl leading-tight text-[#202525] sm:text-2xl">
              “Different perspectives create better possibilities.”
            </p>

            <span className="text-[9px] uppercase tracking-[0.22em] text-[#8a857d]">
              People · Culture · Opportunity
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;
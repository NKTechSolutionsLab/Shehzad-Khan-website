import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function FeaturedOpportunitySection() {
  return (
    <section
      id="opportunities"
      className="bg-[#f3efe7] px-6 py-24 sm:px-10 md:px-14 lg:px-16 lg:py-32 xl:px-20"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* ================= HEADER ================= */}

        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#96302f]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#6f6b64]">
                Opportunity In Focus
              </p>
            </div>

            <h2 className="max-w-[750px] font-serif text-4xl font-normal leading-[0.98] tracking-[-0.03em] text-[#202525] sm:text-5xl md:text-6xl lg:text-[4.8rem]">
              From Heritage
              <br />
              <span className="text-[#96302f]">
                To Possibility.
              </span>
            </h2>

          </div>

          <p className="max-w-[340px] text-sm font-light leading-6 text-[#77736b] md:text-right">
            A closer look at how place, culture, development and opportunity
            can come together.
          </p>

        </div>

        {/* ================= FEATURE ================= */}

        <div className="grid overflow-hidden bg-[#171d1c] lg:grid-cols-[1.2fr_0.8fr]">

          {/* IMAGE */}

          <div className="relative min-h-[450px] overflow-hidden lg:min-h-[650px]">

            <img
              src="../src/img/opp.png"
              alt="Bauska, Latvia"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-1000
                hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#101615]/80 via-[#101615]/10 to-transparent" />

            {/* Image metadata */}

            <div className="absolute bottom-7 left-7 sm:bottom-10 sm:left-10">

              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/70">
                BAUSKA · LATVIA
              </p>

              <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                A Place With More To Become
              </h3>

            </div>

          </div>

          {/* CONTENT */}

          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 xl:p-14">

            <div>

              {/* Label */}

              <div className="flex items-center justify-between">

                <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#a93432]">
                  Featured Initiative
                </span>

                <span className="font-serif text-lg text-[#777872]">
                  01
                </span>

              </div>

              {/* Heading */}

              <h3 className="mt-12 font-serif text-3xl leading-[1.05] text-[#f1ede4] sm:text-4xl">
                Reimagining
                <br />
                <span className="text-[#c6a582]">
                  Bauska's Potential.
                </span>
              </h3>

              {/* Description */}

              <p className="mt-7 text-sm font-light leading-7 text-[#aaa59c]">
                Historic places can become more than destinations of the
                past. With the right vision, partnerships and investment,
                heritage can become part of a new economic and cultural
                future.
              </p>

              <p className="mt-5 text-sm font-light leading-7 text-[#85827b]">
                Bauska represents an opportunity to connect heritage,
                hospitality, riverfront development and regional growth into
                a long-term destination vision.
              </p>

            </div>

            {/* FEATURE DETAILS */}

            <div className="mt-12">

              <div className="grid grid-cols-2 border-y border-white/10">

                <div className="border-r border-white/10 py-5 pr-5">

                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#777872]">
                    Focus
                  </p>

                  <p className="mt-2 font-serif text-lg text-[#e9e3d9]">
                    Regional Development
                  </p>

                </div>

                <div className="py-5 pl-5">

                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#777872]">
                    Potential
                  </p>

                  <p className="mt-2 font-serif text-lg text-[#e9e3d9]">
                    Tourism · Investment
                  </p>

                </div>

              </div>

              {/* LINK */}

              <button
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-[#a93432]
                  pb-2
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#e9e3d9]
                  transition-all
                  duration-300
                  hover:gap-5
                "
              >
                Explore The Opportunity

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

        </div>

        {/* ================= BOTTOM LINE ================= */}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[9px] uppercase tracking-[0.2em] text-[#8a857d]">
            Heritage · Hospitality · Investment · Regional Vision
          </p>

          <span className="text-[9px] tracking-[0.18em] text-[#96302f]">
            LATVIA / 01
          </span>

        </div>

      </div>
    </section>
  );
}

export default FeaturedOpportunitySection;
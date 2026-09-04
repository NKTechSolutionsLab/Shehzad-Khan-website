import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function PositioningSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f3efe7] px-6 py-24 sm:px-10 md:px-14 lg:px-16 lg:py-32 xl:px-20"
    >

      {/* Decorative vertical text */}
      <div className="absolute left-6 top-28 hidden lg:block">
        <p className="rotate-[-90deg] origin-left text-[9px] font-medium tracking-[0.3em] text-[#8b8780]">
          CULTURE · CONTEXT · CONNECTION
        </p>
      </div>

      <div className="mx-auto max-w-[1400px]">

        {/* Top Label */}
        <div className="mb-12 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#96302f]" />

            <p className="text-[9px] font-medium tracking-[0.28em] text-[#6f6b64]">
              POSITIONING
            </p>
          </div>

          <span className="hidden text-[9px] tracking-[0.2em] text-[#99948b] sm:block">
            01 / 06
          </span>

        </div>

        {/* Main Editorial Grid */}
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">

          {/* LEFT */}
          <div>

            <h2 className="max-w-[700px] font-serif text-[3.2rem] font-normal leading-[0.98] tracking-[-0.035em] text-[#202525] sm:text-5xl md:text-6xl lg:text-[5rem]">

              The Bridge Between

              <br />

              <span className="text-[#96302f]">
                Opportunity
              </span>

              <br />

              & Action.
            </h2>

            {/* Small divider */}
            <div className="mt-10 h-px w-20 bg-[#202525]/20" />

          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-end lg:pt-16">

            <p className="max-w-[550px] text-base font-light leading-7 text-[#45443f] md:text-lg md:leading-8">
              International business rarely moves forward on opportunity
              alone. The right context, relationships and understanding of
              the local environment often determine whether an idea becomes
              a credible opportunity.
            </p>

            <p className="mt-6 max-w-[550px] text-sm font-light leading-6 text-[#6c6861] md:text-base md:leading-7">
              My work sits at the intersection of market entry,
              relationship-building and cultural strategy — helping
              international businesses, investors and partners navigate
              unfamiliar markets with greater clarity and confidence.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-[#96302f]
                  pb-2
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-[#96302f]
                  transition-all
                  duration-300
                  hover:gap-5
                "
              >
                Discover My Approach

                <GoArrowUpRight
                  className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Statement */}
        <div className="mt-24 border-t border-[#202525]/15 pt-8 lg:mt-32">

          <div className="grid gap-8 md:grid-cols-3">

            {/* Item 01 */}
            <div className="flex gap-5">

              <span className="font-serif text-xl text-[#96302f]">
                01
              </span>

              <div>
                <h3 className="font-serif text-xl text-[#202525]">
                  Local Understanding
                </h3>

                <p className="mt-2 max-w-[280px] text-xs leading-5 text-[#77736b]">
                  Understanding the environment before deciding how to
                  approach it.
                </p>
              </div>

            </div>

            {/* Item 02 */}
            <div className="flex gap-5">

              <span className="font-serif text-xl text-[#96302f]">
                02
              </span>

              <div>
                <h3 className="font-serif text-xl text-[#202525]">
                  Trusted Relationships
                </h3>

                <p className="mt-2 max-w-[280px] text-xs leading-5 text-[#77736b]">
                  Connecting the right people, partners and institutions.
                </p>
              </div>

            </div>

            {/* Item 03 */}
            <div className="flex gap-5">

              <span className="font-serif text-xl text-[#96302f]">
                03
              </span>

              <div>
                <h3 className="font-serif text-xl text-[#202525]">
                  Cultural Precision
                </h3>

                <p className="mt-2 max-w-[280px] text-xs leading-5 text-[#77736b]">
                  Bridging different expectations and decision-making
                  perspectives across cultures.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PositioningSection;
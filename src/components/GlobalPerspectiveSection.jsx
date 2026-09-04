import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function GlobalPerspectiveSection() {
  const regions = [
    {
      number: "01",
      title: "Europe",
      description:
        "Market access, local context and opportunities within a changing European landscape.",
    },
    {
      number: "02",
      title: "South Asia",
      description:
        "Understanding relationships, expectations and business perspectives across South Asian markets.",
    },
    {
      number: "03",
      title: "Middle East",
      description:
        "Building bridges between international ambitions, relationships and regional opportunity.",
    },
  ];

  const journey = [
    "Understand",
    "Position",
    "Connect",
    "Navigate",
  ];

  return (
    <section
      id="global-perspective"
      className="overflow-hidden bg-[#111817] px-6 py-24 text-[#f1ede4] sm:px-10 md:px-14 lg:px-16 lg:py-32 xl:px-20"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr]">

          <div>

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#a93432]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#99958d]">
                Global Perspective
              </p>
            </div>

            <h2 className="max-w-[800px] font-serif text-4xl font-normal leading-[0.98] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-[5rem]">
              Different Markets.
              <br />
              <span className="text-[#c6a582]">
                Connected Perspectives.
              </span>
            </h2>

          </div>

          <div className="flex items-end">

            <p className="max-w-[410px] text-sm font-light leading-6 text-[#99958d]">
              Working across different regions means understanding that
              opportunity is shaped not only by markets, but by people,
              relationships and culture.
            </p>

          </div>

        </div>

        {/* REGIONS */}

        <div className="mt-20 grid border-l border-t border-white/10 md:grid-cols-3">

          {regions.map((region) => (
            <article
              key={region.number}
              className="
                group
                border-b
                border-r
                border-white/10
                p-7
                transition-colors
                duration-500
                hover:bg-white/[0.035]
                sm:p-9
                lg:p-10
              "
            >

              <div className="flex items-start justify-between">

                <span className="font-serif text-xl text-[#a93432]">
                  {region.number}
                </span>

                <GoArrowUpRight
                  className="
                    text-lg
                    text-[#777872]
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-[#c6a582]
                  "
                />

              </div>

              <h3 className="mt-14 font-serif text-3xl text-[#f1ede4] sm:text-4xl">
                {region.title}
              </h3>

              <p className="mt-5 max-w-[330px] text-[13px] font-light leading-6 text-[#85827b]">
                {region.description}
              </p>

            </article>
          ))}

        </div>

        {/* APPROACH */}

        <div className="mt-24 border-t border-white/10 pt-10 lg:mt-32">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#777872]">
                Across Borders
              </p>

              <h3 className="mt-5 max-w-[400px] font-serif text-3xl leading-[1.05] text-[#f1ede4] sm:text-4xl">
                Context first.
                <br />
                Connections second.
                <br />
                Action follows.
              </h3>

            </div>

            {/* PROCESS */}

            <div className="grid border-l border-white/10 sm:grid-cols-4">

              {journey.map((step, index) => (
                <div
                  key={step}
                  className="
                    group
                    border-b
                    border-r
                    border-white/10
                    p-5
                    sm:border-b-0
                    sm:p-6
                  "
                >

                  <span className="text-[8px] tracking-[0.2em] text-[#a93432]">
                    0{index + 1}
                  </span>

                  <div className="mt-12">

                    <h4 className="font-serif text-xl text-[#e9e3d9]">
                      {step}
                    </h4>

                    <span className="mt-4 block h-px w-7 bg-[#a93432] transition-all duration-300 group-hover:w-12" />

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* BOTTOM STATEMENT */}

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-[650px] text-sm font-light leading-6 text-[#85827b]">
            The goal is to make cross-border opportunities easier to
            understand, easier to approach and ultimately easier to act upon.
          </p>

          <button
            className="
              group
              inline-flex
              w-fit
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
            Explore Opportunities

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
    </section>
  );
}

export default GlobalPerspectiveSection;
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import {
  HiOutlineBuildingOffice2,
  HiOutlineUserGroup,
  HiOutlineGlobeEuropeAfrica,
  HiOutlineChartBar,
} from "react-icons/hi2";

import im from '../img/image.png'
import connections from '../img/connections.png'
import culture from '../img/culture.png'
import invest from '../img/invest.png'

function ExpertiseGrid() {
  const expertise = [
    {
      number: "01",
      title: "Market Entry",
      description:
        "Understanding the local environment and positioning an international opportunity appropriately.",
      image: im,
      icon: HiOutlineBuildingOffice2,
      tag: "ENTER",
    },
    {
      number: "02",
      title: "Strategic Connections",
      description:
        "Identifying the people, businesses, institutions and partners that matter.",
      image: connections,
      icon: HiOutlineUserGroup,
      tag: "CONNECT",
    },
    {
      number: "03",
      title: "Cultural Strategy",
      description:
        "Bridging expectations and decision-making styles across Europe, South Asia and the Middle East.",
      image: culture,
      icon: HiOutlineGlobeEuropeAfrica,
      tag: "UNDERSTAND",
    },
    {
      number: "04",
      title: "Investment & Partnerships",
      description:
        "Connecting credible opportunities with investors, developers and strategic partners.",
      image: invest,
      icon: HiOutlineChartBar,
      tag: "BUILD",
    },
  ];

  return (
    <section
      id="what-i-do"
      className="bg-[#f3efe7] px-6 py-24 sm:px-10 md:px-14 lg:px-16 lg:py-32 xl:px-20"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* ================= HEADER ================= */}

        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#96302f]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#6f6b64]">
                What I Help Navigate
              </p>
            </div>

            <h2 className="max-w-[700px] font-serif text-4xl font-normal leading-[0.98] tracking-[-0.03em] text-[#202525] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Turning Complexity
              <br />
              <span className="text-[#96302f]">
                Into Opportunity.
              </span>
            </h2>

          </div>

          <p className="max-w-[330px] text-sm font-light leading-6 text-[#77736b] md:text-right">
            From entering a new market to building the relationships that
            make an opportunity possible.
          </p>

        </div>

        {/* ================= EXPERTISE GRID ================= */}

        <div className="grid border-l border-t border-[#202525]/15 sm:grid-cols-2 lg:grid-cols-4">

          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="
                  group
                  relative
                  overflow-hidden
                  border-b
                  border-r
                  border-[#202525]/15
                  bg-[#eee9df]
                  transition-all
                  duration-500
                  hover:bg-[#e6dfd3]
                "
              >

                {/* IMAGE */}

                <div className="relative h-[200px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      grayscale-[15%]
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101615]/75 via-[#101615]/10 to-transparent" />

                  {/* Number */}

                  <span className="absolute left-5 top-5 font-serif text-2xl text-white">
                    {item.number}
                  </span>

                  {/* Tag */}

                  <span className="absolute bottom-4 right-5 text-[8px] font-medium uppercase tracking-[0.25em] text-white/80">
                    {item.tag}
                  </span>

                </div>

                {/* CONTENT */}

                <div className="flex min-h-[280px] flex-col p-6">

                  {/* Icon */}

                  <div className="mb-7 flex h-10 w-10 items-center justify-center border border-[#202525]/20 text-[#96302f]">
                    <Icon
                      size={18}
                      strokeWidth={1.4}
                    />
                  </div>

                  {/* Title */}

                  <h3 className="max-w-[220px] font-serif text-[27px] leading-[1] text-[#202525]">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 text-[13px] font-light leading-[1.6] text-[#66625b]">
                    {item.description}
                  </p>

                  {/* Explore */}

                  <div className="mt-auto pt-8">

                    <div className="flex items-center justify-between border-t border-[#202525]/15 pt-4">

                      <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#77736b]">
                        Explore
                      </span>

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          border
                          border-[#202525]/20
                          text-[#202525]
                          transition-all
                          duration-300
                          group-hover:border-[#96302f]
                          group-hover:bg-[#96302f]
                          group-hover:text-white
                        "
                      >
                        <GoArrowUpRight className="text-base" />
                      </span>

                    </div>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <div className="mt-10 flex flex-col gap-6 border-t border-[#202525]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-[620px] text-xs leading-5 text-[#77736b]">
            Every opportunity requires a different combination of market
            understanding, relationships, cultural intelligence and strategic
            positioning.
          </p>

          <div className="flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[#96302f]">

            <span className="h-px w-8 bg-[#96302f]" />

            <span>
              People · Culture · Opportunities
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ExpertiseGrid;
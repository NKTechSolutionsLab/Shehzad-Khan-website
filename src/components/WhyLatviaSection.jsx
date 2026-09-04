import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import lv from '../img/lv.png'

function WhyLatviaSection() {
  return (
    <section
      id="latvia"
      className="relative overflow-hidden bg-[#f3efe7] px-6 py-24 sm:px-10 md:px-14 lg:px-16 lg:py-32 xl:px-20"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* ================= HEADER ================= */}

        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#96302f]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#6f6b64]">
                The Latvian Perspective
              </p>
            </div>

            <h2 className="max-w-[750px] font-serif text-4xl font-normal leading-[0.98] tracking-[-0.03em] text-[#202525] sm:text-5xl md:text-6xl lg:text-[5rem]">
              Why
              <span className="text-[#96302f]"> Latvia?</span>
            </h2>

          </div>

          <p className="max-w-[350px] text-sm font-light leading-6 text-[#77736b] md:text-right">
            A European base with opportunities shaped by location, access,
            relationships and long-term vision.
          </p>

        </div>

        {/* ================= MAIN FEATURE ================= */}

        <div className="grid min-h-[620px] overflow-hidden bg-[#171d1c] lg:grid-cols-[1.05fr_0.95fr]">

          {/* IMAGE */}

          <div className="relative min-h-[430px] overflow-hidden lg:min-h-[620px]">

            <img
              src="../src/img/lv.png"
              alt="Latvia"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                grayscale-[10%]
                transition-transform
                duration-1000
                hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#101615]/70 via-transparent to-transparent" />

            {/* Location */}

            <div className="absolute bottom-7 left-7 sm:left-10">

              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/80">
                RIGA · LATVIA
              </p>

              <p className="mt-2 font-serif text-2xl text-white">
                Gateway to Europe
              </p>

            </div>

          </div>

          {/* CONTENT */}

          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14 xl:p-16">

            <div>

              <span className="font-serif text-5xl text-[#96302f]">
                LV
              </span>

              <h3 className="mt-8 max-w-[500px] font-serif text-3xl leading-[1.05] text-[#f1ede4] sm:text-4xl lg:text-[3rem]">
                Small in scale.
                <br />
                <span className="text-[#c6a582]">
                  Significant in possibility.
                </span>
              </h3>

              <p className="mt-7 max-w-[500px] text-sm font-light leading-7 text-[#aaa59c]">
                Latvia offers a distinctive position within Europe — one
                where international businesses and investors can explore new
                markets, partnerships and projects while building meaningful
                local relationships.
              </p>

              <p className="mt-5 max-w-[500px] text-sm font-light leading-7 text-[#85827b]">
                The opportunity is not simply in the location. It is in
                understanding the people, institutions, culture and local
                context that make an idea possible.
              </p>

            </div>

            {/* CTA */}

            <div className="mt-12">

              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-[#96302f]
                  pb-2
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#eee8de]
                  transition-all
                  duration-300
                  hover:gap-5
                "
              >
                Explore Latvia

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

        {/* ================= OPPORTUNITY STRIP ================= */}

        <div className="grid border-b border-l border-[#202525]/15 sm:grid-cols-2 lg:grid-cols-4">

          <div className="border-r border-t border-[#202525]/15 p-6">
            <span className="text-[9px] tracking-[0.2em] text-[#96302f]">
              01
            </span>

            <h4 className="mt-4 font-serif text-xl text-[#202525]">
              European Access
            </h4>

            <p className="mt-2 text-xs leading-5 text-[#77736b]">
              A strategic location for businesses exploring the European
              market.
            </p>
          </div>

          <div className="border-r border-t border-[#202525]/15 p-6">
            <span className="text-[9px] tracking-[0.2em] text-[#96302f]">
              02
            </span>

            <h4 className="mt-4 font-serif text-xl text-[#202525]">
              Investment
            </h4>

            <p className="mt-2 text-xs leading-5 text-[#77736b]">
              Opportunities across property, technology, development and
              emerging projects.
            </p>
          </div>

          <div className="border-r border-t border-[#202525]/15 p-6">
            <span className="text-[9px] tracking-[0.2em] text-[#96302f]">
              03
            </span>

            <h4 className="mt-4 font-serif text-xl text-[#202525]">
              Local Relationships
            </h4>

            <p className="mt-2 text-xs leading-5 text-[#77736b]">
              The right relationships can turn an unfamiliar market into a
              navigable one.
            </p>
          </div>

          <div className="border-r border-t border-[#202525]/15 p-6">
            <span className="text-[9px] tracking-[0.2em] text-[#96302f]">
              04
            </span>

            <h4 className="mt-4 font-serif text-xl text-[#202525]">
              Long-Term Vision
            </h4>

            <p className="mt-2 text-xs leading-5 text-[#77736b]">
              Looking beyond immediate transactions toward sustainable
              regional opportunities.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyLatviaSection;
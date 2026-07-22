import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FiTarget, FiEdit3 } from "react-icons/fi";
import { LuSprout } from "react-icons/lu";

function Approach() {
  return (
    <section className="bg-[#E9E4D6] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}

          <div>

            <p className="uppercase tracking-[3px] text-[#1F3D2E] text-sm font-medium mb-3">
              Our Approach
            </p>

            <h2 className="heading-primary text-4xl lg:text-5xl leading-tight text-[#1F3D2E] mb-6">
              Coaching That
              <br />
              Creates Real Change
            </h2>

            <p className="text-gray-700 text-lg leading-8 max-w-lg mb-8">
              We combine proven strategies, practical tools and deep
              listening to help you break through limitations and create a
              life of purpose.
            </p>

            <button className="bg-[#1F3D2E] text-[#E9E4D6] px-7 py-4 rounded-xl flex items-center gap-3 hover:bg-[#173124] transition-all duration-300 cursor-pointer">
              About Our Approach
              <GoArrowUpRight className="text-xl" />
            </button>

          </div>

          {/* Right Content */}

          <div className="lg:border-l border-[#d8d2c3] lg:pl-12 space-y-10">

            <div className="flex gap-5 items-start">

              <div className="w-16 h-16 rounded-full bg-[#d9d4c7] flex items-center justify-center flex-shrink-0">
                <FiTarget className="text-[#1F3D2E] text-2xl" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#1F3D2E] mb-2">
                  Clarity First
                </h3>

                <p className="text-gray-700 leading-7">
                  We help you gain clarity on what matters most.
                </p>
              </div>

            </div>

            <div className="flex gap-5 items-start">

              <div className="w-16 h-16 rounded-full bg-[#d9d4c7] flex items-center justify-center flex-shrink-0">
                <FiEdit3 className="text-[#1F3D2E] text-2xl" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#1F3D2E] mb-2">
                  Strategic Action
                </h3>

                <p className="text-gray-700 leading-7">
                  We create a plan that turns insight into action.
                </p>
              </div>

            </div>

            <div className="flex gap-5 items-start">

              <div className="w-16 h-16 rounded-full bg-[#d9d4c7] flex items-center justify-center ">
                <LuSprout className="text-[#1F3D2E] text-2xl" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#1F3D2E] mb-2">
                  Sustainable Growth
                </h3>

                <p className="text-gray-700 leading-7">
                  We build habits and systems that last.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Approach;
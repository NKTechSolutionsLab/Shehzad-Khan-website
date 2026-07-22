import React from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Reviews() {
  const reviews = [
    {
      review:
        "This coaching changed the way I lead and live. I've never felt more confident or aligned with my purpose.",
      name: "Sarah J.",
      role: "Executive Leader",
    },
    {
      review:
        "I gained clarity, direction and the tools to take my business to the next level. Highly recommend!",
      name: "Michael T.",
      role: "Entrepreneur",
    },
    {
      review:
        "A supportive, challenging and transformative experience. Worth every investment.",
      name: "Daniel R.",
      role: "Business Owner",
    },
  ];

  return (
    <section className="bg-[#1F3D2E] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="flex justify-between items-end mb-10">

          <div>
            <p className="uppercase tracking-[3px] text-[#B8B29E] text-sm mb-3">
              What Clients Are Saying
            </p>

            <h2 className="heading-primary text-[#E9E4D6] text-4xl lg:text-5xl">
              Real People. Real Results.
            </h2>
          </div>

          <div className="hidden md:flex gap-4">
            <button className="w-11 h-11 rounded-full border border-[#5A6D61] text-[#E9E4D6] flex items-center justify-center hover:bg-[#284838] duration-300">
              <FiChevronLeft size={22} />
            </button>

            <button className="w-11 h-11 rounded-full border border-[#5A6D61] text-[#E9E4D6] flex items-center justify-center hover:bg-[#284838] duration-300">
              <FiChevronRight size={22} />
            </button>
          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-[#E9E4D6] rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-700 leading-8 text-lg italic mb-8">
                "{item.review}"
              </p>

              <div>
                <h4 className="text-[#1F3D2E] font-semibold text-lg">
                  — {item.name}
                </h4>

                <p className="text-gray-500 mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Reviews;
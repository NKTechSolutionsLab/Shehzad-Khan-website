import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function JourneySection() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      label: "CONTEXT",
      description:
        "Start with the opportunity, the objective and the environment. Understanding the market comes before deciding how to enter it.",
    },
    {
      number: "02",
      title: "Position",
      label: "CLARITY",
      description:
        "Translate the opportunity into a clear local position — identifying where the idea fits and how it should be approached.",
    },
    {
      number: "03",
      title: "Connect",
      label: "RELATIONSHIPS",
      description:
        "Bring the right people into the conversation through trusted relationships, relevant introductions and local access.",
    },
    {
      number: "04",
      title: "Navigate",
      label: "ACTION",
      description:
        "Move forward with greater cultural and strategic precision, turning initial interest into credible action.",
    },
  ];

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#111817] px-6 py-24 text-[#f1ede4] sm:px-10 md:px-14 lg:px-16 lg:py-32 xl:px-20"
    >

      {/* Decorative background number */}

      <div className="pointer-events-none absolute -right-10 top-10 hidden select-none lg:block">
        <span className="font-serif text-[20rem] leading-none text-white/[0.025]">
          04
        </span>
      </div>

      <div className="relative mx-auto max-w-[1400px]">

        {/* ================= HEADER ================= */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr]">

          <div>

            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-8 bg-[#a93432]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#aaa59c]">
                The Journey
              </p>

            </div>

            <h2 className="max-w-[800px] font-serif text-4xl font-normal leading-[0.98] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-[5rem]">
              From First Interest
              <br />
              <span className="text-[#c6a582]">
                To Credible Action.
              </span>
            </h2>

          </div>

          <div className="flex items-end">

            <p className="max-w-[420px] text-sm font-light leading-6 text-[#aaa59c]">
              Good opportunities need more than an introduction. They need
              context, positioning, trusted relationships and a clear path
              forward.
            </p>

          </div>

        </div>

        {/* ================= TIMELINE ================= */}

        <div className="relative mt-20 lg:mt-28">

          {/* Main horizontal line */}

          <div className="absolute left-0 right-0 top-[18px] hidden h-px bg-white/15 lg:block" />

          <div className="grid lg:grid-cols-4">

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="
                  group
                  relative
                  border-t
                  border-white/15
                  py-8
                  lg:border-t-0
                  lg:px-7
                  lg:first:pl-0
                  lg:last:pr-0
                "
              >

                {/* Connector */}

                <div className="absolute left-0 top-[-5px] hidden h-[10px] w-[10px] rounded-full border border-[#c6a582] bg-[#111817] lg:block">
                  <span className="absolute inset-[2px] rounded-full bg-[#a93432] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Mobile number */}

                <div className="mb-6 flex items-center gap-4 lg:mb-12">

                  <span className="font-serif text-xl text-[#a93432]">
                    {step.number}
                  </span>

                  <span className="h-px w-10 bg-white/15 lg:hidden" />

                  <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#777872] lg:hidden">
                    {step.label}
                  </span>

                </div>

                {/* Desktop label */}

                <p className="mb-7 hidden text-[8px] font-medium uppercase tracking-[0.25em] text-[#777872] lg:block">
                  {step.label}
                </p>

                {/* Title */}

                <h3 className="font-serif text-3xl leading-none text-[#f1ede4] transition-colors duration-300 group-hover:text-[#c6a582] sm:text-4xl">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-5 max-w-[270px] text-[13px] font-light leading-6 text-[#99958d]">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-16 border-t border-white/10 pt-7 lg:mt-24">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#777872]">
                A Practical Approach
              </p>

              <p className="mt-2 max-w-[550px] text-sm font-light leading-6 text-[#aaa59c]">
                The goal is not simply to open doors, but to understand which
                doors are worth opening — and how to approach them well.
              </p>

            </div>

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
                tracking-[0.16em]
                text-[#e8e1d6]
                transition-all
                duration-300
                hover:gap-5
              "
            >
              How I Work

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

    </section>
  );
}

export default JourneySection;
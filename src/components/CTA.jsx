import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import banner from "../img/banner.png"; // Your mountain background image

function CTA() {
    return (
        <section className="bg-[#1F3D2E] pb-16 px-6">

            <div
                className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative"
            >
                {/* Background Image */}

                <img
                    src={banner}
                    alt="Coaching Banner"
                    className="w-full object-cover"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-black/35"></div>

                {/* Content */}

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

                    <h2 className="heading-primary text-[#E9E4D6] text-4xl md:text-5xl lg:text-6xl mb-5">
                        Ready to Take the Next Step?
                    </h2>

                    <p className="text-[#E9E4D6]/90 text-lg md:text-xl max-w-2xl mb-10">
                        Let's unlock your potential and create the future you're meant to lead.
                    </p>

                    <button className="bg-[#1F3D2E] text-[#E9E4D6] px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-[#173124] duration-300 shadow-xl cursor-pointer">
                        Book Your Discovery Call
                        <GoArrowUpRight className="text-xl" />
                    </button>

                </div>
            </div>

        </section>
    );
}

export default CTA;
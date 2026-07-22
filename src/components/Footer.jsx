import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#121F1A] text-[#E9E4D6]">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Logo */}

          <div>

            <h2 className="heading-primary text-2xl mb-5">
              GUIDEWAY
              <br />
              <span className="text-sm tracking-[4px] font-light">
                COACHING
              </span>
            </h2>

            <p className="text-gray-400 leading-8 mb-8">
              Personalized coaching to help you lead with clarity,
              confidence and purpose.
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1B2D24] flex items-center justify-center hover:bg-[#1F3D2E] duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1B2D24] flex items-center justify-center hover:bg-[#1F3D2E] duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1B2D24] flex items-center justify-center hover:bg-[#1F3D2E] duration-300"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-semibold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Coaching</a></li>
              <li><a href="#" className="hover:text-white">Programs</a></li>
              <li><a href="#" className="hover:text-white">Resources</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>

            </ul>

          </div>

          {/* Programs */}

          <div>

            <h3 className="font-semibold text-xl mb-5">
              Programs
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><a href="#">1:1 Coaching</a></li>
              <li><a href="#">Leadership Programs</a></li>
              <li><a href="#">Group Coaching</a></li>
              <li><a href="#">Workshops</a></li>
              <li><a href="#">Retreats</a></li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-semibold text-xl mb-5">
              Resources
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><a href="#">Blog</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Tools</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Podcast</a></li>

            </ul>

          </div>

          {/* CTA */}

          <div>

            <h3 className="font-semibold text-xl mb-5">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              Have questions or ready to start your journey?
              We'd love to hear from you.
            </p>

            <button className="bg-[#1F3D2E] border border-[#365542] hover:bg-[#294837] duration-300 px-8 py-4 rounded-xl font-medium cursor-pointer">
              Book a Call
            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-[#25342D] mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-sm">
            © 2024 Guideway Coaching. All rights reserved.
          </p>

          <div className="flex gap-8 text-gray-500 text-sm">

            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
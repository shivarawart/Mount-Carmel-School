"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = footerRef.current;

    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".reveal"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-[#1d3772] via-[#122969] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-700 blur-[120px] top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-indigo-500 blur-[120px] bottom-10 right-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid gap-10 lg:grid-cols-3">

        {/* School Info */}
        <div className="reveal space-y-4">
          <h2 className="text-2xl font-bold leading-snug">
            Mount Carmel International School
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Empowering young minds with knowledge, discipline, and innovation.
            Our mission is to create confident, responsible, and future-ready
            individuals.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/918307622365"
              target="_blank"
              className="bg-white/10 p-3 rounded-full hover:bg-green-400 hover:text-black transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="reveal space-y-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="text-gray-300 text-sm space-y-2">
            <p>Kathemajra, Naraingarh</p>
            <p>District Ambala, Haryana</p>
            <p>📞 +91-8307622365</p>
            <p>✉️ mountcarmel177@gmail.com</p>
          </div>

          {/* CTA */}
          <button className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-300 transition shadow-lg">
            Admissions Open 2026–27
          </button>
        </div>

        {/* Mini Map */}
        <div className="reveal w-full h-[220px] rounded-2xl overflow-hidden border border-white/10">
          <iframe
            src="https://maps.google.com/maps?q=narayangarh%20haryana&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 text-center text-sm text-gray-400 py-4 backdrop-blur">
        © {new Date().getFullYear()} Mount Carmel International School — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
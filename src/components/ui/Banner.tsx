"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const images = [
  "https://images.unsplash.com/photo-1588072432836-e10032774350",
  "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
  "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b",
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Text animation
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    gsap.fromTo(
      el.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, [index]);

  return (
    <section className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden">

      {/* Background Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <img
            src={`${img}?auto=format&fit=crop&w=1600&q=80`}
            alt="school banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex items-center h-full">
        <div
          ref={textRef}
          className="max-w-6xl mx-auto px-6 text-white"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Empowering Young Minds for a Bright Future
          </h1>

          <p className="mt-4 text-sm md:text-lg text-gray-200 max-w-xl">
            Mount Carmel International School, Kathemajra, Naraingarh
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-300 transition">
              Explore More
            </button>

            <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Announcement Strip */}
      <div className="absolute bottom-0 w-full bg-yellow-400 text-black py-2 px-4 flex items-center justify-center text-sm font-medium z-30">
        🎉 Annual Function 2026 Coming Soon | Admissions Open Now
      </div>
    </section>
  );
};

export default Banner;
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Button from "./Button";
import { Link } from "react-router-dom";

const images = [
  "/assets/image31.jpeg",
  "/assets/image23.jpeg",
  "/assets/image21.jpeg",
  "/assets/image6.jpeg",
  "/assets/image29.jpeg",
  "/assets/image13.jpeg"
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  // 🔥 Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 🎬 Text animation
  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, [index]);

  return (
    <section className="relative w-full h-[80vh] md:h-[95vh] overflow-hidden">

      {/* 🖼 Background */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1200ms] ${
            i === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={img}
            alt="school"
            className="w-full h-full object-cover"
          />

          {/* 🎨 Premium overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent" />
        </div>
      ))}

      {/* 🌌 subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.15),transparent_40%)]" />

      {/* 🧠 Content */}
      <div className="relative z-20 flex items-center h-full">
        <div
          ref={textRef}
          className="max-w-7xl mx-auto px-6 text-white"
        >
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/20">
            🎓 Admissions Open 2026–27
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Empowering Young Minds
            <span className="block text-indigo-400">
              For a Brighter Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base md:text-lg text-gray-300 max-w-xl">
            Mount Carmel International School, Kathemajra, Naraingarh —
            nurturing excellence, values, and future-ready skills.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="hover:scale-[1.05] active:scale-[0.97]"
            >
              <Link to="/admissions">Apply Now →</Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="hover:scale-[1.05] "
            >
              <Link to="/contact">Visit Campus</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 🔽 Bottom Announcement */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black py-3 px-4 flex justify-center text-sm md:text-base font-medium z-30 tracking-wide">
        🎉 Annual Function 2026 Coming Soon • Admissions Open Now
      </div>
    </section>
  );
};

export default Banner;
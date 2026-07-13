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
  "/assets/image13.jpeg",
  "/changeimg/WhatsApp Image 2026-07-10 at 12.17.02.jpeg"
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
   
    <section className="relative w-full h-[85vh] md:h-[100vh] overflow-hidden font-sans">

  {/* 🖼 Background */}
  {images.map((img, i) => (
    <div
      key={i}
      className={`absolute inset-0 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        i === index
          ? "opacity-100 scale-100 z-10"
          : "opacity-0 scale-110"
      }`}
    >
      <img
        src={img}
        alt="school"
        className="w-full h-full object-cover"
      />

      {/* 🎨 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 to-black/20" />
    </div>
  ))}

  {/* 🌌 Glow Effect */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.18),transparent_45%)]" />

  {/* 🧠 Content */}
  <div className="relative z-20 flex items-center h-full">
    <div
      ref={textRef}
      className="max-w-7xl mx-auto px-6 text-white"
    >

      {/* Badge */}
      <div className="mb-5 inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-sm border border-white/20 shadow-lg">
        🎓 Admissions Open 2026–27
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight max-w-3xl">
        Empowering Young Minds
        <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          For a Brighter Future
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
        Mount Carmel International School, Kathemajra, Naraingarh —
        nurturing excellence, values, and future-ready skills.
      </p>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-5">

        <Button
          size="lg"
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Link to="/admissions">Apply Now →</Link>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="border-white/30 text-white backdrop-blur-md bg-white/5 px-7 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          <Link to="/contact">Visit Campus</Link>
        </Button>

      </div>
    </div>
  </div>

  {/* 🔽 Bottom Announcement */}
  <div className="absolute bottom-0 w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black py-3 px-4 flex justify-center text-sm md:text-base font-semibold z-30 tracking-wide shadow-md">
    🎉 Annual Function 2026 Coming Soon • Admissions Open Now
  </div>

</section>
  );
};

export default Banner;
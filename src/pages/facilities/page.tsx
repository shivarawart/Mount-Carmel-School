"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../components/ui/Banner";
import Section from "../../components/ui/Section";

gsap.registerPlugin(ScrollTrigger);

const facilitiesData = [
  {
    title: "Smart Classrooms",
    description: "Interactive digital learning with modern technology",
    icon: "🖥️",
    image: "/changeimg/WhatsApp Image 2026-07-10 at 12.13.54.jpeg",
  },
  {
    title: "Science Labs",
    description: "Hands-on experiments with state-of-the-art equipment",
    icon: "🔬",
    image: "/views/smartlabs/img5.jpg",
  },
  {
    title: "Library",
    description: "Extensive collection of books and digital resources",
    icon: "📚",
    image: "img/liabrary.png",
  },
  {
    title: "Playground & Sports",
    description: "Encouraging physical fitness and teamwork",
    icon: "⚽",
    image: "img/playg.png",
  },
  {
    title: "Transport Facility",
    description: "Safe and convenient travel to and from school",
    icon: "🚌",
    image: "/changeimg/WhatsApp Image 2026-07-10 at 12.13.00.jpeg",
  },
  {
    title: "CCTV Surveillance",
    description: "Ensuring a secure and safe campus environment",
    icon: "📹",
    image: "/changeimg/WhatsApp Image 2026-07-10 at 12.16.02.jpeg",
  },
];

const FacilitiesPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 overflow-x-hidden">

      {/* 🔥 HERO */}
      <Banner />

      {/* 🏫 FACILITIES GRID */}
      <Section
        title="Our Facilities"
        subtitle="Providing world-class infrastructure for students"
        center
        className="py-24"
      >
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

  {facilitiesData.map((facility, i) => (
    <div
      key={i}
      className="reveal group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3"
    >
      {/* 🌌 Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition duration-500" />

      {/* 🪟 Glass Card */}
      <div className="relative h-full rounded-3xl border border-white/20 bg-white/60 backdrop-blur-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden">

        {/* 🖼 IMAGE */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={facility.image}
            alt={facility.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* 🎨 Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition duration-500" />

          {/* 🔥 Floating Icon */}
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md p-3 rounded-xl text-2xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition duration-500">
            {facility.icon}
          </div>
        </div>

        {/* 🧠 CONTENT */}
        <div className="p-6 flex flex-col gap-3">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition">
            {facility.title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {facility.description}
          </p>

          {/* subtle divider */}
          <div className="mt-3 h-[2px] w-10 bg-indigo-500 rounded-full group-hover:w-16 transition-all duration-500" />
        </div>

      </div>
    </div>
  ))}

</div>
      </Section>

    </main>
  );
};

export default FacilitiesPage;
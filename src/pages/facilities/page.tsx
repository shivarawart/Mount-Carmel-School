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
    image: "img/smartc.png",
  },
  {
    title: "Science Labs",
    description: "Hands-on experiments with state-of-the-art equipment",
    icon: "🔬",
    image: "img/lab.png",
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
    image: "img/trans.png",
  },
  {
    title: "CCTV Surveillance",
    description: "Ensuring a secure and safe campus environment",
    icon: "📹",
    image: "img/cctv.png",
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

          {facilitiesData.map((facility, i) => (
            <div
              key={i}
              className="reveal relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 bg-white/50 backdrop-blur-xl border border-white/30 cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="relative p-8 flex flex-col items-start gap-4">
                <div className="text-4xl">{facility.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{facility.title}</h3>
                <p className="text-gray-700">{facility.description}</p>
              </div>
            </div>
          ))}

        </div>
      </Section>

    </main>
  );
};

export default FacilitiesPage;
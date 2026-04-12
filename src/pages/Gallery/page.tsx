"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../components/ui/Banner";
import Section from "../../components/ui/Section";

gsap.registerPlugin(ScrollTrigger);

type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

const galleryData: GalleryItem[] = [
  { title: "Annual Day Celebration", category: "Annual Day", image: "img/anualday.png" },
  { title: "Sports Meet 2025", category: "Sports", image: "img/sportsDay.png" },
  { title: "Science Fair", category: "Classroom", image: "img/science.png" },
  { title: "Art & Craft Exhibition", category: "Celebration", image: "img/art.png" },
  { title: "Athletics", category: "Sports", image: "img/race.png" },
  { title: "Cultural Fest", category: "Celebration", image: "img/culture.png" },
  { title: "Interactive Learning", category: "Classroom", image: "img/smartc.png" },
];

const categories = ["All", "Annual Day", "Sports", "Celebration", "Classroom"];

const GalleryPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".gallery-reveal").forEach((el: any, i) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  const filteredData = selectedCategory === "All" ? galleryData : galleryData.filter(item => item.category === selectedCategory);

  return (
    <main ref={pageRef} className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 overflow-x-hidden">

      {/* 🔥 HERO */}
      <Banner />

      {/* 🗂 CATEGORY TABS */}
      <Section
        title="Gallery"
        subtitle="Explore memorable moments from our school"
        center
        className="py-16"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                  : "bg-white/60 backdrop-blur-md text-gray-800 hover:bg-indigo-200 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🖼 IMAGE GRID */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {filteredData.map((item, i) => (
            <div
              key={i}
              className="gallery-reveal relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform transition-all hover:-translate-y-2 bg-white/30 backdrop-blur-xl border border-white/20 cursor-pointer"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="relative p-6 flex flex-col justify-end h-64">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 drop-shadow-md">{item.title}</h3>
                <p className="text-gray-700 font-medium drop-shadow-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default GalleryPage;
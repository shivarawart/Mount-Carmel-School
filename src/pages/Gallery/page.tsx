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
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  // 🔥 Animate on filter change
  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.querySelectorAll(".gallery-item");

    gsap.fromTo(
      items,
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  }, [selectedCategory]);

  return (
    <main
      ref={pageRef}
      className="bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 overflow-x-hidden"
    >
      {/* 🔥 HERO */}
      <Banner />

      {/* 🖼 GALLERY */}
      <Section
        title="Gallery"
        subtitle="Moments that define our journey"
        center
        className="py-20"
      >
        {/* 🔘 CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "text-white"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              {/* active background */}
              {selectedCategory === cat && (
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg -z-10" />
              )}

              {cat}
            </button>
          ))}
        </div>

        {/* 🧊 GRID */}
        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        >
          {filteredData.map((item, i) => (
            <div
              key={i}
              className="gallery-item group relative overflow-hidden rounded-3xl"
            >
              {/* 🌌 glow */}
              <div className="absolute inset-0 bg-indigo-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* 🖼 IMAGE */}
              <div className="relative h-[260px] md:h-[320px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* 🎨 overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* 🧠 CONTENT (hover reveal) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-white/80 mt-1">
                  {item.category}
                </p>

                {/* accent line */}
                <div className="mt-3 h-[2px] w-8 bg-white/80 group-hover:w-16 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default GalleryPage;
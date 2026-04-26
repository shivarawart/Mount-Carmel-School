"use client";
import { useState } from "react";
import { Link } from "react-router-dom";

const PhilosophySection = () => {
  const [expanded, setExpanded] = useState(false);

  const shortText = `
We believe education is not just about marks, but about shaping character,
confidence, and real-world skills.
`;

  const fullText = `
We believe education is not just about marks, but about shaping character,
confidence, and real-world skills.

At our school, every student is encouraged to explore their potential through
academics, creativity, and discipline.

We focus on building a strong foundation that prepares students not just for exams,
but for life.

Our approach combines modern teaching techniques, technology-driven learning,
and value-based education.

We nurture curiosity, leadership, and lifelong learning habits that empower students
to succeed in an ever-evolving world.
`;

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">

      {/* 🌌 background glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-400/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* 🖼 IMAGE */}
        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <img
            src="/assets/image29.jpeg"
            alt="Students learning"
            className="w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full group-hover:scale-150 transition duration-700" />
        </div>

        {/* 🧠 TEXT */}
        <div className="space-y-6">

          {/* heading */}
          <div>
            <p className="text-indigo-600 font-medium text-sm mb-2 tracking-wide">
              OUR APPROACH
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Our Educational Philosophy
            </h2>
          </div>

          {/* text */}
          <div
            className={`text-gray-600 leading-relaxed whitespace-pre-line transition-all duration-500 ${
              expanded ? "max-h-[500px]" : "max-h-[120px]"
            } overflow-hidden`}
          >
            {expanded ? fullText : shortText}
          </div>

          {/* fade effect when collapsed */}
          {!expanded && (
            <div className="h-10 -mt-10 bg-gradient-to-t from-white via-white/80 to-transparent" />
          )}

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-2">

            <button
              onClick={() => setExpanded(!expanded)}
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-500 hover:scale-105 transition-all duration-300 active:scale-95"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>

            <Link to="/academics">
              <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                Explore Academics →
              </button>
            </Link>

          </div>

          {/* 🔥 highlights */}
          <div className="pt-6 grid grid-cols-2 gap-3 text-sm">

            {[
              "Value-based learning",
              "Smart classrooms",
              "Holistic growth",
              "Future-ready skills",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm"
              >
                <span className="text-indigo-600 font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
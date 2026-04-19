"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";


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
  academics, creativity, and discipline. We focus on building a strong foundation
  that prepares students not just for exams, but for life.

  Our approach combines modern teaching techniques, technology-driven learning,
  and value-based education to create confident, responsible, and innovative individuals.

  We are committed to nurturing curiosity, leadership, and lifelong learning habits
  that empower students to succeed in an ever-evolving world.
  `;

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE SIDE */}
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="public/assets/image29.jpeg"
            alt="Students learning"
            className="w-full h-[380px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

          {/* glow effect */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full group-hover:scale-150 transition duration-700" />
        </div>

        {/* TEXT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Our Educational Philosophy
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
            {expanded ? fullText : shortText}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              variant="primary"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show Less" : "Read More"}
            </Button>

            <Link to="/academics">
            <Button variant="outline" size="lg">
              Explore Academics
            </Button>
            </Link>
          </div>

          {/* highlight points */}
          <div className="pt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">✔ Value-based learning</div>
            <div className="flex items-center gap-2">✔ Smart classrooms</div>
            <div className="flex items-center gap-2">✔ Holistic growth</div>
            <div className="flex items-center gap-2">✔ Future-ready skills</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
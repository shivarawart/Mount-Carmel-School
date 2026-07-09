"use client";

import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../components/ui/Banner";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  "Fill Registration Form",
  "Interaction / Entrance Test",
  "Document Verification",
  "Fee Submission",
];

const documents = [
  "Birth Certificate",
  "Previous Class Report Card",
  "Passport Size Photographs",
  "PAN CARD",
  "SLC of previous school",
  "Child & Parents Adhar card",
  "Family id",


];

const notes = [
  "Admissions are open for all classes (subject to availability).",
  "Seats are limited and allocated on first-come basis.",
  "School reserves the right to admission decisions.",
];

const AdmissionsPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
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
    <main
      ref={pageRef}
      className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900 overflow-x-hidden"
    >
      <Banner />

      {/* 🧭 TIMELINE */}
      <Section
        title="Admission Process"
        subtitle="Simple & transparent journey"
        center
        className="py-14 sm:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 relative">

          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-400 to-purple-400 md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`fade-up relative flex items-start md:items-center ${
                  i % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* dot */}
                <div className="absolute left-4 w-4 h-4 bg-indigo-600 rounded-full shadow md:left-1/2 md:-translate-x-1/2" />

                {/* card */}
                <div className="ml-10 md:ml-0 md:w-[45%]">
                  <div className="group relative p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">

                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold">
                        {i + 1}
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg">
                        Step {i + 1}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base">
                      {step}
                    </p>

                    {/* glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 📄 DOCUMENTS */}
      <Section
        title="Documents Required"
        subtitle="Prepare these before applying"
        center
        className="py-14 sm:py-20"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-4">
          {documents.map((doc, i) => (
            <div
              key={i}
              className="fade-up group p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex items-center gap-4"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold">
                ✓
              </div>
              <p className="text-gray-800 font-medium text-sm sm:text-base">
                {doc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ⚠️ NOTES */}
      <Section
        title="Important Notes"
        subtitle="Read carefully before applying"
        center
        className="py-14 sm:py-20"
      >
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {notes.map((note, i) => (
            <div
              key={i}
              className="fade-up p-5 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm"
            >
              <p className="text-gray-700 text-sm sm:text-base">
                {note}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 🎯 CTA */}
      <Section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center fade-up">

          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-medium">
            Limited Seats Available
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold mb-5 leading-tight">
            Start Your Admission Today
          </h2>

          <p className="text-gray-600 mb-8 text-base sm:text-lg">
            Join a school that builds academic excellence and future-ready skills.
          </p>

          <div className="flex justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-xl hover:scale-105 transition"
              >
                Contact Admissions →
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default AdmissionsPage;
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
      gsap.utils.toArray(".reveal").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
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
    <main
      ref={pageRef}
      className="bg-gradient-to-b from-gray-100 via-white to-gray-50 text-gray-900 overflow-x-hidden"
    >
      {/* 🔥 HERO */}
      <Banner />

      {/* 🧭 TIMELINE */}
      <Section
        title="Admission Process"
        subtitle="Simple, transparent, and student-friendly"
        center
      >
        <div className="max-w-5xl mx-auto relative py-12">

          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-400 to-purple-400 -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`reveal relative flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-indigo-600 rounded-full shadow-lg z-10" />

                {/* Card */}
                <div className="w-full md:w-[45%]">
                  <div className="group p-6 md:p-7 rounded-3xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                        {i + 1}
                      </div>
                      <h3 className="text-lg font-semibold">
                        Step {i + 1}
                      </h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {step}
                    </p>

                    {/* subtle hover glow */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl" />
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
        subtitle="Keep these ready before applying"
        center
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {documents.map((doc, i) => (
            <div
              key={i}
              className="reveal group p-5 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg">
                  ✓
                </div>
                <p className="text-gray-800 font-medium">{doc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ⚠️ NOTES */}
      <Section
        title="Important Notes"
        subtitle="Please read before proceeding"
        bg="gradient"
        center
      >
        <div className="space-y-5 max-w-3xl mx-auto">
          {notes.map((note, i) => (
            <div
              key={i}
              className="reveal group p-6 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/40 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <p className="text-gray-800 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 🎯 CTA */}
      <Section center className="py-24">
        <div className="max-w-3xl mx-auto reveal text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
            Limited Seats Available
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Start Your Admission Today
          </h2>

          <p className="text-gray-600 mb-10 text-lg">
            Join a school that focuses on academic excellence, values,
            and real-world success.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/contact">
            <Button size="lg" className="shadow-xl">
              Contact Admissions
            </Button></Link>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default AdmissionsPage;
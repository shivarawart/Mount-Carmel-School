"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../components/ui/Banner";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const AdmissionsPage = () => {
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
    <main ref={pageRef} className="bg-gradient-to-b from-gray-100 to-gray-50 text-gray-900 overflow-x-hidden">

      {/* 🔥 HERO */}
      <Banner />

      {/* 🧭 ADMISSION PROCESS TIMELINE */}
      <Section title="Admission Process" subtitle="Step-by-step guide for smooth enrollment" center>
        <div className="relative max-w-5xl mx-auto py-12">
          
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-indigo-500 hidden md:block" />

          {[
            "Fill Registration Form",
            "Interaction / Entrance Test",
            "Document Verification",
            "Fee Submission",
          ].map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="reveal flex flex-col md:flex-row items-center mb-12 md:mb-24 w-full">
                
                {/* Step Card */}
                <div
                  className={`bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-6 max-w-sm md:max-w-md transition hover:shadow-2xl ${
                    isLeft ? "md:mr-auto md:order-1" : "md:ml-auto md:order-2"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">Step {i + 1}</h3>
                  <p className="text-gray-700 text-sm">{step}</p>
                </div>

                {/* Dot */}
                <div className="w-5 h-5 bg-indigo-600 rounded-full z-10 absolute md:left-1/2 transform md:-translate-x-1/2" />

              </div>
            );
          })}

        </div>
      </Section>

      {/* 📄 DOCUMENTS REQUIRED */}
      <Section title="Documents Required" subtitle="Keep these ready for smooth admission" center>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {[
            "Birth Certificate",
            "Previous Class Report Card",
            "Passport Size Photographs",
          ].map((doc, i) => (
            <div
              key={i}
              className="reveal flex items-center gap-4 p-5 rounded-2xl bg-white/50 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg">
                ✓
              </div>
              <p className="text-gray-800 font-medium">{doc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ⚠️ IMPORTANT NOTES */}
      <Section title="Important Notes" subtitle="Read carefully before applying" bg="gradient" center>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            "Admissions are open for all classes (subject to availability).",
            "Seats are limited and allocated on first-come basis.",
            "School reserves the right to admission decisions.",
          ].map((note, i) => (
            <div
              key={i}
              className="reveal backdrop-blur-xl bg-white/20 border border-white/40 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <p className="text-gray-800 text-base">{note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 🎯 CTA SECTION */}
      <Section center className="py-24">
        <div className="max-w-3xl mx-auto reveal text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-900">
            Begin Your Admission Journey
          </h2>
          <p className="text-gray-700 mb-10 text-lg">
            Apply now and secure a seat in a school that nurtures excellence, creativity, and lifelong values.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="shadow-xl bg-indigo-600 hover:bg-indigo-700 text-white">Apply Now</Button>
            <Button variant="outline" size="lg" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
              Contact Admissions
            </Button>
          </div>
        </div>
      </Section>

    </main>
  );
};

export default AdmissionsPage;
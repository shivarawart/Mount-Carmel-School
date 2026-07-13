"use client";

import { useEffect, useRef, useState } from "react";
import PremiumMessageSection from "./MessageSection";

import {
  Download,
  Eye,
  FileText,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../components/ui/Banner";
import Section from "../../components/ui/Section";
// import Card from "../../components/ui/Card";
import PhilosophySection from "../../components/ui/PhilosophySection";

gsap.registerPlugin(ScrollTrigger);



/* -------------------------------------------------------------------------- */
/*                                  DATA                                      */
/* -------------------------------------------------------------------------- */

const staffDocuments = [
  // {
  //   title: "Staff Details Report",
  //   description:
  //     "Official faculty information including qualifications, experience, and department details.",
  //   fileId: "1Y1cZkWZHRATUoh3Md3SxycKXJoMapWew",
  //   category: "Faculty",
  // },
  {
    title: "Staff Details Report",
    description:
      "Official faculty information including qualifications, experience, and department details.",
    fileId: "1txLpBkDu9NuXlEm3VGqfLKGMi9KZKSPw",
    category: "Faculty",
  },
];

/* -------------------------------------------------------------------------- */
/*                               PREVIEW MODAL                                */
/* -------------------------------------------------------------------------- */

function PreviewModal({
  fileId,
  title,
  onClose,
}: {
  fileId: string;
  title: string;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-3 md:p-6">
      <div className="relative w-full max-w-7xl h-[92vh] rounded-[2rem] overflow-hidden bg-white shadow-2xl border border-white/20">
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b bg-white/90 backdrop-blur-xl">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-500 font-semibold">
              Document Preview
            </p>

            <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-1">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center"
          >
            <X size={20} />
          </button>
        </div>

        {/* PDF */}
        <iframe
          src={`https://drive.google.com/file/d/${fileId}/preview`}
          className="w-full h-full border-none"
          loading="lazy"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                STAFF CARD                                  */
/* -------------------------------------------------------------------------- */

function StaffDocumentCard({
  item,
  onPreview,
}: {
  item: (typeof staffDocuments)[0];
  onPreview: (fileId: string, title: string) => void;
}) {
  return (
    <div className="reveal group relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/70 backdrop-blur-2xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-cyan-500/10 blur-3xl" />

      {/* TOP LIGHT */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-70" />

      <div className="relative z-10 p-7 md:p-8 flex flex-col h-full">
        {/* ICON + CATEGORY */}
        <div className="flex items-start justify-between mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
            <FileText size={28} />
          </div>

          <span className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
            {item.category}
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex-grow">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-2 gap-3 mt-8">
          <button
            onClick={() => onPreview(item.fileId, item.title)}
            className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 py-3.5 font-medium transition-all duration-300"
          >
            <Eye size={18} />
            Preview
          </button>

          <a
            href={`https://drive.google.com/uc?export=download&id=${item.fileId}`}
            className="w-full"
          >
            <button className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:opacity-90 py-3.5 text-white font-medium shadow-lg shadow-indigo-500/20 transition-all duration-300">
              <Download size={18} />
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                MAIN PAGE                                   */
/* -------------------------------------------------------------------------- */

const AboutPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const [activePdf, setActivePdf] = useState<{
    fileId: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ------------------------------ REVEALS ------------------------------ */
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* ----------------------------- PARALLAX ------------------------------ */
      gsap.utils.toArray<HTMLElement>(".parallax").forEach((el) => {
        gsap.to(el, {
          y: -70,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scrub: 1.3,
            start: "top bottom",
            end: "bottom top",
          },
        });
      });

      /* ---------------------------- STAGGERED ------------------------------ */
      gsap.fromTo(
        ".achievement-card",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".achievements-grid",
            start: "top 82%",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main
        ref={pageRef}
        className="relative overflow-hidden bg-[#f7f9fc] text-gray-900"
      >
        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[-120px] w-[300px] h-[300px] rounded-full bg-indigo-400/10 blur-3xl" />

          <div className="absolute bottom-20 right-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        {/* HERO */}
        <Banner />

        {/* INTRO */}
        <section className="relative py-20 md:py-28 px-5">
          <div className="max-w-5xl mx-auto reveal">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/70 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] px-7 md:px-14 py-12 md:py-16">
              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-blue-500/[0.02] to-cyan-500/[0.04]" />

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700 mb-7">
                  <Sparkles size={16} />
                  Excellence In Education
                </div>

                <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8">
                  About Mount Carmel
                  <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    International School
                  </span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-600">
                  We are dedicated to building confident learners through
                  academic excellence, innovation, discipline, and holistic
                  development that prepares students for a rapidly evolving
                  world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VISION + MISSION */}

        <PremiumMessageSection />

        {/* PHILOSOPHY */}
        <PhilosophySection />

        {/* ACHIEVEMENTS */}
        <Section
          title="Our Achievements"
          subtitle="Celebrating excellence in academics, sports, innovation, and leadership"
          bg="gradient"
          center
        >
          <div className="relative mx-auto max-w-7xl">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.20),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.75),transparent_35%)]" />

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  title: "Academic Excellence",
                  desc: "Outstanding board examination performance with students consistently achieving exceptional results and setting new benchmarks in academic excellence every year.",
                  img: "/img/twelth result.png",
                  badge: "Top Results",
                  icon: GraduationCap,
                },
                {
                  title: "Sports Championships",
                  desc: "Champions across district, state, and inter-school competitions, inspiring teamwork, discipline, resilience, and a passion for excellence beyond academics.",
                  img: "/img/sports.png",
                  badge: "Champions",
                  icon: ShieldCheck,
                },
                {
                  title: "Olympiad Achievers",
                  desc: "Our talented students proudly represent the school by earning distinctions in prestigious national and international Olympiad competitions.",
                  img: "/img/olmp.png",
                  badge: "Olympiad Stars",
                  icon: Users,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="group relative h-full">
                    <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-sky-500/15 blur-3xl transition-all duration-700 group-hover:bg-sky-500/25" />

                    <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/30 bg-white/20 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_30px_90px_rgba(37,99,235,0.22)]">
                      <div className="relative h-72 overflow-hidden sm:h-80">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent" />

                        <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white shadow-lg backdrop-blur-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <Icon className="h-7 w-7" />
                        </div>

                        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                          <div className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-xl">
                            {item.badge}
                          </div>

                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-7 sm:p-8">
                        <div className="mb-4 inline-flex w-fit rounded-full bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                          Achievement
                        </div>

                        <h3 className="text-2xl font-bold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-sky-700 sm:text-[2rem]">
                          {item.title}
                        </h3>

                        <p className="mt-5 flex-grow text-[15px] leading-8 text-slate-600 sm:text-[16px]">
                          {item.desc}
                        </p>

                       
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
        {/* STAFF DETAILS */}
        <Section
          title="Faculty & Staff Details"
          subtitle="Transparency, professionalism, and academic excellence through verified institutional records"
          center
        >
          <div className="space-y-14">
            {/* TOP CARD */}
            <div className="reveal max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/70 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-8 md:p-14">
                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.04] via-blue-500/[0.03] to-cyan-500/[0.05]" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700 mb-7">
                    <Users size={16} />
                    Faculty Transparency
                  </div>

                  <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* LEFT */}
                    <div>
                      <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                        Highly Qualified
                        <span className="block text-indigo-600">
                          Teaching Faculty
                        </span>
                      </h2>

                      <p className="text-lg text-gray-600 leading-relaxed">
                        Our faculty members are committed to nurturing
                        excellence through innovation, discipline, mentorship,
                        and student-focused education. Access official faculty
                        and academic documents below.
                      </p>
                    </div>

                    {/* RIGHT STATS */}
                    <div className="grid grid-cols-2 gap-5">
                      {[
                        {
                          label: "Experienced Staff",
                          value: "35+",
                        },
                        {
                          label: "Academic Programs",
                          value: "25+",
                        },
                        {
                          label: "Student Success",
                          value: "100%",
                        },
                        {
                          label: "Years Excellence",
                          value: "8+",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-6 shadow-lg"
                        >
                          <h3 className="text-3xl font-black text-indigo-600">
                            {item.value}
                          </h3>

                          <p className="text-sm text-gray-500 mt-2">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DOCUMENT GRID */}
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {staffDocuments.map((item, i) => (
                <StaffDocumentCard
                  key={i}
                  item={item}
                  onPreview={(fileId, title) => setActivePdf({ fileId, title })}
                />
              ))}
            </div>
          </div>
        </Section>
      </main>

      {/* MODAL */}
      {activePdf && (
        <PreviewModal
          fileId={activePdf.fileId}
          title={activePdf.title}
          onClose={() => setActivePdf(null)}
        />
      )}
    </>
  );
};

export default AboutPage;
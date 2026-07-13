"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  
  BadgeCheck,
  GraduationCap,
  Layers3,
  Sparkles,
} from "lucide-react";

import Banner from "../../components/ui/Banner";
import Section from "../../components/ui/Section";

gsap.registerPlugin(ScrollTrigger);

type ImageCard = {
  title: string;
  description: string;
  image: string;
  badge: string;
  accent: string;
};

const classCards: ImageCard[] = [
  {
    title: "Pre-Primary",
    description: "Nursery, LKG & UKG",
    image: "/changeimg/WhatsApp Image 2026-07-10 at 12.17.02.jpeg",
    badge: "Foundation",
    accent: "Learn • Play • Grow",
  },
  {
    title: "Primary",
    description: "Classes I – V",
    image: "/changeimg/WhatsApp Image 2026-07-10 at 12.15.37.jpeg",
    badge: "Core",
    accent: "Strong basics",
  },
  {
    title: "Middle School",
    description: "Classes VI – VIII",
    image: "/changeimg/WhatsApp Image 2026-07-10 at 12.52.45.jpeg",
    badge: "Growth",
    accent: "Concept clarity",
  },
  {
    title: "Secondary & Senior Secondary",
    description: "Classes IX – XII",
    image: "/changeimg/WhatsApp Image 2026-07-10 at 12.56.11.jpeg",
    badge: "Excellence",
    accent: "Future ready",
  },
];

const teachingCards: ImageCard[] = [
  {
    title: "Smart Classrooms",
    description:
      "Technology-enabled learning that inspires curiosity and engagement.",
    image:
      "/changeimg/WhatsApp Image 2026-07-10 at 12.13.54.jpeg",
    badge: "Modern",
    accent: "Digital Learning",
  },
  {
    title: "Collaborative Learning",
    description:
      "Encouraging teamwork, creativity, and confident communication.",
    image:
      "/views/smartlabs/img4.jpg",
    badge: "Teamwork",
    accent: "Future Skills",
  },
  {
    title: "Experiential Learning",
    description:
      "Hands-on experiences that transform knowledge into understanding.",
    image:
      "/views/smartlabs/img2.jpg",
    badge: "Practical",
    accent: "Learning by Doing",
  },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
        {subtitle}
      </p>
    </div>
  );
}

function PremiumCard({ title, description, image, badge, accent }: ImageCard) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[32px] border border-slate-200/70 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:border-indigo-100 hover:shadow-[0_35px_90px_rgba(15,23,42,0.18)]">
      {/* Premium top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70" />

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white backdrop-blur-xl">
            {badge}
          </span>
        </div>

        <div className="absolute bottom-5 left-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/90 px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-xl backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            {accent}
          </div>
        </div>
      </div>

      <div className="flex h-[200px] flex-col p-7">
        <div className="mb-5">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-indigo-600">
            {title}
          </h3>

          <p className="mt-3 text-[15px] leading-7 text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="text-sm font-medium text-slate-500">
            Premium learning track
          </span>

          <BadgeCheck className="h-5 w-5 text-emerald-500 transition-transform duration-500 group-hover:scale-110" />
        </div>
      </div>
    </article>
  );
}

function InteractiveAccordion() {
  const items = [
    {
      title: "Sports",
      imageUrl:
        "/views/Sports-Areana/img11.jpg",
    },
    {
      title: " Safe Environment",
      imageUrl:
        "/changeimg/WhatsApp Image 2026-07-10 at 12.17.45.jpeg",
    },
    {
      title: "Festival",
      imageUrl:
        "/changeimg/WhatsApp Image 2026-07-10 at 12.17.02.jpeg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="max-w-xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
          <Layers3 className="h-4 w-4" />
          Academics
        </span>

        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
          Nurturing Excellence Through Quality Education
        </h2>

        <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 md:text-lg">
          At Mount Carmel International School, we foster academic excellence
          through experienced educators, innovative teaching, and holistic
          learning, empowering every student with the knowledge, confidence, and
          values to thrive in a changing world.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700">
            <GraduationCap className="h-4 w-4 text-indigo-600" />
            Comprehensive Curriculum
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex min-h-[460px] min-w-max items-stretch gap-4 pr-2">
          {items.map((item, index) => {
            const active = index === activeIndex;
            return (
              <button
                key={item.title}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={`relative h-[460px] overflow-hidden rounded-[28px] border border-slate-200 transition-all duration-700 ease-in-out ${
                  active ? "w-[420px]" : "w-[76px]"
                } focus:outline-none`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/15" />
                <span
                  className={`absolute left-1/2 text-white transition-all duration-500 ${
                    active
                      ? "bottom-6 -translate-x-1/2 rotate-0 text-lg font-semibold"
                      : "bottom-24 -translate-x-1/2 rotate-90 whitespace-nowrap text-lg font-semibold"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function AcademicsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el, index) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="overflow-hidden bg-[#f8fafc] text-slate-900">
      <Banner />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <InteractiveAccordion />
        </div>
      </section>

      <Section
        title="Classes Offered"
        subtitle="A structured academic journey from early years to senior secondary"
        center
      >
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {classCards.map((item) => (
            <div key={item.title} className="reveal h-full">
              <PremiumCard {...item} />
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Curriculum"
            title="Our Learning Journey"
            subtitle="Progressive learning that evolves with every stage of a child’s growth."
          />

          <div className="mx-auto max-w-4xl">
            <div className="relative border-l border-slate-200 pl-8 md:pl-12">
              {[
                {
                  title: "Foundation Learning",
                  desc: "Play-based learning that builds curiosity and early skills.",
                },
                {
                  title: "Concept Development",
                  desc: "Interactive methods that strengthen understanding and confidence.",
                },
                {
                  title: "Advanced Learning",
                  desc: "CBSE-aligned study with analytical thinking and problem solving.",
                },
                {
                  title: "Career Preparation",
                  desc: "Guidance, skill development, and exam readiness for the future.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="reveal relative mb-10 last:mb-0"
                >
                  <div className="absolute -left-[41px] top-2 flex h-8 w-8 items-center justify-center rounded-full border border-indigo-200 bg-white shadow-sm">
                    <div className="h-3 w-3 rounded-full bg-indigo-600" />
                  </div>

                  <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:bg-white hover:shadow-lg md:p-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        0{i + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-slate-950 md:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                    <p className="max-w-2xl text-[15px] leading-7 text-slate-600 md:text-[17px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-indigo-50 to-white px-6 py-16 md:py-24">
        <div className="mx-auto  max-w-7xl">
          <SectionHeading
            eyebrow="Teaching"
            title="Our Teaching Approach"
            subtitle="Modern, engaging, and student-centered methods with a clean premium presentation."
          />

          <div className="grid gap-6  xl:grid-cols-3">
            {teachingCards.map((item) => (
              <div key={item.title} className="reveal h-full">
                <PremiumCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

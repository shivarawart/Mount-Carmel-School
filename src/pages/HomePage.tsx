"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Trophy,
  FlaskConical,
  Users,
} from "lucide-react";
import Banner from "../components/ui/Banner";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

type FeatureItem = {
  title: string;
  description: string;
  image: string;
  badge: string;
  accent: string;
  href: string;
};

const featureItems: FeatureItem[] = [
  {
    title: "Library Spaces",
    description:
      "Discover a vibrant learning environment where books, digital resources, and collaborative reading spaces inspire curiosity, independent thinking, and a lifelong passion for knowledge.",
    image: "/views/library-Sapace/img7.jpg",
    badge: "Knowledge Hub",
    accent: "from-cyan-500 via-sky-500 to-blue-600",
    href: "/Library",
  },
  {
    title: "Sports Arena",
    description:
      "Modern indoor and outdoor sports facilities empower students to build confidence, teamwork, resilience, and leadership while promoting physical fitness and healthy competition.",
    image: "/views/Sports-Areana/img6.jpg",
    badge: "Sports Excellence",
    accent: "from-orange-500 via-red-500 to-rose-600",
    href: "/SportsArena",
  },
  {
    title: "Creative Growth",
    description:
      "Hands-on experiences in arts, music, design, and innovation encourage students to explore their talents, think creatively, and transform ideas into meaningful achievements.",
    image: "/views/Creative-growth/img10.jpg",
    badge: "Creative Learning",
    accent: "from-fuchsia-500 via-pink-500 to-purple-600",
    href: "/CreativeGrowth",
  },
  {
    title: "Expert Teachers",
    description:
      "Passionate educators combine experience, mentorship, and personalized guidance to inspire academic excellence while nurturing every student's unique potential.",
    image: "/views/Expert-Teachers/img7.jpg",
    badge: "Expert Faculty",
    accent: "from-emerald-500 via-teal-500 to-cyan-600",
    href: "/ExpertTeachers",
  },
  {
    title: "Smart Labs",
    description:
      "Technology-enabled science and innovation laboratories provide immersive, hands-on learning experiences that encourage experimentation, critical thinking, and future-ready skills.",
    image: "/views/smartlabs/img7.jpg",
    badge: "STEM Innovation",
    accent: "from-blue-500 via-indigo-500 to-purple-600",
    href: "/SmartLabs",
  },
  {
    title: "Safe Environment",
    description:
      "A secure, inclusive, and caring campus supported by modern safety measures ensures every child learns with confidence, comfort, and complete peace of mind.",
    image: "/views/safeEnvironment/img18.jpg",
    badge: "Safe Campus",
    accent: "from-green-500 via-emerald-500 to-teal-600",
    href: "/SafeEnvironment",
  },
  {
    title: "Annual Celebrations",
    description:
      "Cultural festivals, national events, and community celebrations create joyful experiences that strengthen values, diversity, teamwork, and a vibrant school spirit.",
    image: "/views/AnnualCelebration/img19.jpg",
    badge: "Campus Life",
    accent: "from-pink-500 via-rose-500 to-red-500",
    href: "/AnnualCelebrations",
  },
];

const highlights = [
  "Value-based learning",
  "Smart classrooms",
  "Holistic growth",
  "Future-ready skills",
];

const whyUs = [
  {
    icon: BookOpen,
    title: "Strong academics",
    description:
      "Structured learning with clarity, discipline, and consistent support.",
  },
  {
    icon: Trophy,
    title: "Beyond the classroom",
    description:
      "Sports, arts, and activities that build confidence and leadership.",
  },
  {
    icon: FlaskConical,
    title: "Modern labs",
    description:
      "Hands-on learning spaces that make concepts practical and exciting.",
  },
  {
    icon: ShieldCheck,
    title: "Safe campus",
    description:
      "A secure environment where students can learn with peace of mind.",
  },
  {
    icon: Sparkles,
    title: "Premium experience",
    description:
      "A polished visual style that feels modern, clean, and elegant.",
  },
  {
    icon: Users,
    title: "Caring mentors",
    description:
      "Teachers who guide, motivate, and support every student personally.",
  },
];

const news = [
  {
    title: "Admissions 2026",
    description: "Applications are now open.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Annual Function",
    description: "Grand celebration coming soon.",
    image: "/img/anualday.png",
  },
  {
    title: "Sports Day",
    description: "Register for upcoming events.",
    image: "/img/sportsDay.png",
  },
];

const HomePage = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = useMemo(() => featureItems, []);

  const scrollToIndex = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;

    const nextIndex = Math.max(0, Math.min(index, items.length - 1));
    const card = el.children[nextIndex] as HTMLElement | undefined;

    card?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActiveIndex(nextIndex);
  };

  const scrollPrev = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    scrollToIndex(nextIndex);
  };

  const scrollNext = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, items.length]);

  return (
    <main className="bg-[#f6f7fb] text-slate-900">
      <Banner />

      <Section
        title="A Place Where Learning Comes Alive"
        subtitle="A premium, high-impact experience built for modern education."
        center
      >
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
              Featured strengths
            </p>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              A clean manual showcase designed to feel elegant, responsive, and
              easy to use.
            </p>
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              onClick={scrollPrev}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-label="Previous card"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-label="Next card"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 to-transparent" />

          <div
            ref={carouselRef}
            onScroll={(e) => {
              const el = e.currentTarget;
              const children = Array.from(el.children) as HTMLElement[];
              const center = el.scrollLeft + el.clientWidth / 2;

              let closest = 0;
              let distance = Number.POSITIVE_INFINITY;

              children.forEach((child, index) => {
                const childCenter = child.offsetLeft + child.offsetWidth / 2;
                const nextDistance = Math.abs(childCenter - center);

                if (nextDistance < distance) {
                  distance = nextDistance;
                  closest = index;
                }
              });

              setActiveIndex(closest);
            }}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollSnapType: "x mandatory" }}
            tabIndex={0}
            aria-roledescription="carousel"
            aria-label="Featured school sections"
          >
            {items.map((item, index) => (
              <Link
                key={item.title}
                to={item.href}
                className="block min-w-[86%] sm:min-w-[52%] lg:min-w-[34%] xl:min-w-[28%]"
                style={{ scrollSnapAlign: "center" }}
                aria-label={item.title}
              >
                <article className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.16)]">
                  <div className="relative h-[340px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/img/placeholder.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                    <div
                      className={`absolute left-5 top-5 rounded-full bg-gradient-to-r ${item.accent} px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur`}
                    >
                      {item.badge}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                        Premium feature
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 p-6">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-medium text-slate-400">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <span className="text-sm font-semibold text-indigo-600 transition group-hover:translate-x-1">
                        Explore →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                  activeIndex === index
                    ? "w-8 bg-indigo-600"
                    : "w-2.5 bg-slate-300"
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="/assets/image5.jpeg"
              alt="School leadership"
              loading="lazy"
              className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-110 md:h-[450px]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "/img/placeholder.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/85 px-4 py-2 text-sm font-medium shadow-md backdrop-blur-md">
              Leadership & Vision
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                Our approach
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Education that shapes character and confidence.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              Education is not only about books. It is about confidence,
              curiosity, discipline, and preparing students for real life.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
                >
                  ✔ {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link to="/academics">
                <Button
                  size="lg"
                  className="hover:scale-[1.03] active:scale-[0.97]"
                >
                  Explore Vision →
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:scale-[1.03]"
                >
                  Contact School
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Why Choose Us"
        subtitle="Premium facilities, outstanding faculty, and a safe, nurturing campus."
      >
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        title="Latest News & Events"
        subtitle="Stay updated with what’s happening."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </Section>
    </main>
  );
};

export default HomePage;

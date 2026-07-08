"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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
    image: "public/views/library-Sapace/img7.jpg",
    badge: "Knowledge Hub",
    accent: "from-cyan-500 via-sky-500 to-blue-600",
    href: "/Library",
  },
  {
    title: "Sports Arena",
    description:
      "Modern indoor and outdoor sports facilities empower students to build confidence, teamwork, resilience, and leadership while promoting physical fitness and healthy competition.",
    image:
      "public/views/Sports-Areana/img6.jpg",
    badge: "Sports Excellence",
    accent: "from-orange-500 via-red-500 to-rose-600",
    href: "/SportsArena",
  },
  {
    title: "Creative Growth",
    description:
      "Hands-on experiences in arts, music, design, and innovation encourage students to explore their talents, think creatively, and transform ideas into meaningful achievements.",
    image:
      "public/views/Creative-growth/img10.jpg",
    badge: "Creative Learning",
    accent: "from-fuchsia-500 via-pink-500 to-purple-600",
    href: "/CreativeGrowth",
  },
  {
    title: "Annual Function",
    description:
      "A grand celebration of talent, culture, and achievement where students showcase confidence, creativity, and leadership through inspiring performances and unforgettable moments.",
    image: "public/views/Annual-function/img4.jpg",
    badge: "Signature Event",
    accent: "from-amber-500 via-orange-500 to-red-500",
    href: "/AnnualFunction",
  },
  {
    title: "Creative Minds",
    description:
      "Innovation-driven learning through STEM activities, robotics, coding, and collaborative projects empowers students to solve real-world challenges with confidence.",
    image:"public/views/creative-mind/img8.jpg",
    badge: "Future Innovators",
    accent: "from-violet-500 via-purple-500 to-indigo-600",
    href: "/CreativeMinds",
  },
  {
    title: "Expert Teachers",
    description:
      "Passionate educators combine experience, mentorship, and personalized guidance to inspire academic excellence while nurturing every student's unique potential.",
    image:"public/views/Expert-Teachers/img7.jpg",
    badge: "Expert Faculty",
    accent: "from-emerald-500 via-teal-500 to-cyan-600",
    href: "/ExpertTeachers",
  },
  {
    title: "Smart Labs",
    description:
      "Technology-enabled science and innovation laboratories provide immersive, hands-on learning experiences that encourage experimentation, critical thinking, and future-ready skills.",
    image:
      "public/views/smartlabs/img7.jpg",
    badge: "STEM Innovation",
    accent: "from-blue-500 via-indigo-500 to-purple-600",
    href: "/SmartLabs",
  },
  {
    title: "Safe Environment",
    description:
      "A secure, inclusive, and caring campus supported by modern safety measures ensures every child learns with confidence, comfort, and complete peace of mind.",
    image:
      "public/views/safeEnvironment/img18.jpg",
    badge: "Safe Campus",
    accent: "from-green-500 via-emerald-500 to-teal-600",
    href: "/SafeEnvironment",
  },
  {
    title: "Annual Celebrations",
    description:
      "Cultural festivals, national events, and community celebrations create joyful experiences that strengthen values, diversity, teamwork, and a vibrant school spirit.",
    image:
      "public/views/AnnualCelebration/img19.jpg",
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

// const facilities = [
//   {
//     title: "Modern Labs",
//     description: "Hands-on science and computer labs built for discovery.",
//     image:
//       "https://tse2.mm.bing.net/th/id/OIP.Dz01Coc7gdwEeSJuoMI8CAHaDt?rs=1&pid=ImgDetMain&o=7&rm=3",
//   },
//   {
//     title: "Library Space",
//     description: "Peaceful reading and digital learning zone.",
//     image: "/img/liabrary.png",
//   },
//   {
//     title: "Sports Arena",
//     description: "Encouraging fitness, teamwork, and discipline.",
//     image:
//       "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

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
  const autoplayRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useMemo(() => featureItems, []);

  const scrollToIndex = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActiveIndex(index);
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
    autoplayRef.current = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % items.length;
        const el = carouselRef.current;
        const card = el?.children[next] as HTMLElement | undefined;
        card?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
        return next;
      });
    }, 3500);

    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, [items.length]);

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
              This version replaces static blocks with an auto-scrolling
              showcase that feels more refined, more interactive, and more
              premium.
            </p>
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              onClick={scrollPrev}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              aria-label="Previous card"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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
          >
            {items.map((item, index) => (
  <Link
    key={item.title}
    to={item.href}
    className="block min-w-[86%] sm:min-w-[52%] lg:min-w-[34%] xl:min-w-[28%]"
    style={{ scrollSnapAlign: "center" }}
  >
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.16)]">
      <div className="relative h-[340px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
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
        <p className="text-sm leading-6 text-slate-600">{item.description}</p>

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
                className={`h-2.5 rounded-full transition-all ${
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
              className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-110 md:h-[450px]"
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

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "../../components/ui/Banner";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations for sections
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 90, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Subtle parallax for images
      gsap.utils.toArray<HTMLElement>(".parallax").forEach((el) => {
        gsap.to(el, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scrub: 1.2,
            start: "top bottom",
            end: "bottom top",
          },
        });
      });

      // Staggered cards animation
      gsap.fromTo(
        ".achievement-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".achievements-grid",
            start: "top 80%",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="bg-[#f8fafc] text-gray-900 overflow-hidden">
      {/* 🔥 HERO */}
      <Banner />

      {/* 📖 INTRODUCTION - Enhanced Glass Card */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="backdrop-blur-2xl bg-white/70 border border-white/50 rounded-3xl p-12 md:p-16 shadow-2xl">
            <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-medium mb-6">
              Discover Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About Mount Carmel International School
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We are committed to delivering excellence in education by combining
              academic rigor with strong moral values, creativity, and real-world
              learning experiences that prepare students for a successful future.
            </p>
          </div>
        </div>
      </section>

      {/* 🌟 VISION & MISSION */}
      <Section
        title="Our Vision & Mission"
        subtitle="Guiding principles that shape every student’s journey"
        center
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div className="reveal">
            <Card
              title="Our Vision"
              description="To create confident, responsible, and lifelong learners who contribute positively to society."
              image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
            />
          </div>
          <div className="reveal">
            <Card
              title="Our Mission"
              description="To provide a stimulating environment that nurtures creativity, discipline, critical thinking, and holistic growth."
              image="https://images.unsplash.com/photo-1498079022511-d15614cb1c02"
            />
          </div>
        </div>
      </Section>

      {/* 👩‍🏫 PRINCIPAL’S MESSAGE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Image with Parallax */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl reveal">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
              alt="Principal"
              className="w-full h-[380px] md:h-[520px] object-cover parallax"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          </div>

          {/* Text Content */}
          <div className="reveal space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Principal’s Message
            </h2>

            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Education is not just about acquiring knowledge — it is about
                shaping character, building confidence, and nurturing future leaders.
              </p>
              <p>
                At Mount Carmel, we strive to empower every student with the skills,
                values, and mindset they need to excel in an ever-changing world.
              </p>
            </div>

            <Button size="lg" variant="primary">
              Read Full Message
            </Button>
          </div>
        </div>
      </section>

      {/* 🏆 ACHIEVEMENTS - Enhanced Glass Cards */}
      <Section
        title="Our Achievements"
        subtitle="Celebrating excellence across academics, sports, and beyond"
        bg="gradient"
        center
      >
        <div className="achievements-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Academic Excellence",
              desc: "Consistent top results in board examinations with many students scoring 95%+",
              img: "/img/twelth result.png",
            },
            {
              title: "Sports Achievements",
              desc: "Multiple trophies in inter-school and state-level competitions",
              img: "/img/sports.png"

            },
            {
              title: "Olympiad Winners",
              desc: "Numerous students bringing laurels in national and international Olympiads",
              img: "/img/olmp.png",
            },
          ].map((item, i) => (
            <div key={i} className="reveal achievement-card group">
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="overflow-hidden rounded-2xl mb-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <h3 className="font-semibold text-black/80 text-2xl mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-black/70 leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default AboutPage;
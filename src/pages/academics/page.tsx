"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../components/ui/Banner";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";

gsap.registerPlugin(ScrollTrigger);

const AcademicsPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el, index) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Staggered cards for teaching methods
      gsap.fromTo(
        ".teaching-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".teaching-grid",
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

      {/* 🎓 CLASSES OFFERED */}
      <Section
        title="Classes Offered"
        subtitle="A well-structured academic journey from early years to senior secondary"
        center
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Pre-Primary",
              desc: "Nursery, LKG & UKG",
              img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
            },
            {
              title: "Primary",
              desc: "Classes I – V",
              img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
            },
            {
              title: "Middle School",
              desc: "Classes VI – VIII",
              img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
            },
            {
              title: "Secondary & Senior Secondary",
              desc: "Classes IX – XII",
              img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
            },
          ].map((item, i) => (
            <div key={i} className="reveal">
              <Card
                title={item.title}
                description={item.desc}
                image={item.img}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 📚 CURRICULUM - Enhanced Vertical Timeline */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Our Curriculum
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Progressive learning that evolves with every stage of a child’s growth
            </p>
          </div>

          <div className="relative pl-8 md:pl-12 border-l-4 border-indigo-500">
            {[
              {
                title: "Foundation Learning",
                desc: "Play-based and activity-oriented learning that builds curiosity and foundational skills.",
              },
              {
                title: "Concept Development",
                desc: "Strong focus on conceptual clarity through interactive and experiential methods.",
              },
              {
                title: "Advanced Learning",
                desc: "CBSE-aligned curriculum with emphasis on analytical thinking and problem-solving.",
              },
              {
                title: "Career Preparation",
                desc: "Stream selection guidance, competitive exam preparation, and skill development for future readiness.",
              },
            ].map((item, i) => (
              <div key={i} className="mb-14 last:mb-0 reveal group">
                {/* Timeline Dot */}
                <div className="absolute -left-[11px] w-6 h-6 bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full group-hover:scale-125 transition-transform" />
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[17px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧠 TEACHING METHODS */}
      <Section
        title="Our Teaching Approach"
        subtitle="Modern, engaging, and student-centered methods"
        bg="gradient"
        center
      >
        <div className="teaching-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Smart Classes",
              desc: "Interactive digital boards and multimedia tools that make learning visual and engaging.",
              img: "img/digital.png",
            },
            {
              title: "Collaborative Learning",
              desc: "Group discussions, projects, and teamwork that develop communication and leadership skills.",
              img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
            },
            {
              title: "Experiential Learning",
              desc: "Hands-on activities, field trips, and real-world projects for deeper understanding.",
              img: "public/assets/image23.jpeg",
            },
          ].map((item, i) => (
            <div key={i} className="reveal teaching-card group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-semibold text-2xl mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default AcademicsPage;
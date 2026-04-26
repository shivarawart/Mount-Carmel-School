"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

import Banner from "../../components/ui/Banner";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const disclosures = [
  {
    title: "Affiliation Details",
    content:
      "Mount Carmel International School is affiliated with CBSE, New Delhi (Affiliation No: 531833).",
  },
  {
    title: "School Management Committee",
    content:
      "The School Management Committee comprises experienced educationists, parents, and community leaders committed to governance and academic excellence.",
  },
  {
    title: "Staff Details",
    content:
      "Our teaching and non-teaching staff are highly qualified, regularly trained, and deeply passionate about nurturing young minds.",
  },
  {
    title: "Infrastructure & Safety",
    content:
      "State-of-the-art classrooms, science & computer labs, spacious playground, CCTV surveillance, and robust safety protocols ensure a secure learning environment.",
  },
];

const ContactMandatoryPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [activeDisclosure, setActiveDisclosure] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 🔥 Scroll Animations (optimized)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".animate-on-scroll").forEach((el) => {
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
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // 📩 Form Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_1ru1mkm",
        "template_ucauo1a",
        formRef.current,
        "u2FIr6vPNxHFy_Zkc"
      );

      setSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      ref={pageRef}
      className="bg-gradient-to-b from-slate-50 via-white to-white text-gray-900 overflow-x-hidden"
    >
      {/* 🔥 HERO */}
      <Banner />

      {/* 📇 CONTACT INFO */}
      <Section
        title="Get in Touch"
        subtitle="We'd love to hear from you"
        center
        className="py-14 sm:py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-6 sm:gap-8 md:grid-cols-3 animate-on-scroll">
          {[
            { icon: "📞", title: "Phone", value: "+91-8307622365" },
            { icon: "✉️", title: "Email", value: "mountcarmel177@gmail.com" },
            {
              icon: "📍",
              title: "Address",
              value:
                "Village Kathemajra, Tehsil Naraingarh, District Ambala, Haryana - 134203",
            },
          ].map((info, idx) => (
            <div
              key={idx}
              className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="text-4xl sm:text-5xl mb-4 transition-transform group-hover:scale-110">
                {info.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {info.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 🗺 MAP (FIXED RESPONSIVE) */}
      <Section
        title="Our Campus Location"
        subtitle="Visit us at Kathemajra"
        center
        className="py-14 sm:py-20 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 animate-on-scroll">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200">
            <div className="relative w-full pt-[70%] md:pt-[50%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://maps.google.com/maps?q=narayangarh%20haryana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 📜 DISCLOSURE */}
      <Section
        title="Mandatory Disclosure"
        subtitle="Transparency & Compliance"
        center
        className="py-14 sm:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 animate-on-scroll">
          {disclosures.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm"
            >
              <button
                onClick={() =>
                  setActiveDisclosure(
                    activeDisclosure === idx ? null : idx
                  )
                }
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition"
              >
                <span className="text-lg font-semibold">
                  {item.title}
                </span>
                <span className="text-2xl text-indigo-600">
                  {activeDisclosure === idx ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeDisclosure === idx
                    ? "max-h-[400px] opacity-100 px-6 pb-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 📝 FORM */}
      <Section
        title="Send Us a Message"
        subtitle="We reply within 24 hours"
        center
        className="py-14 sm:py-20 bg-slate-50"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 animate-on-scroll">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-200">

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-xl text-center text-sm">
                ✅ Message sent successfully!
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "user_name", type: "text", placeholder: "Full Name" },
                  { name: "user_email", type: "email", placeholder: "Email Address" },
                  { name: "user_phone", type: "tel", placeholder: "Contact Number" },
                ].map((input, i) => (
                  <input
                    key={i}
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    required
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition text-sm"
                  />
                ))}
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition text-sm"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition text-sm"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition active:scale-95"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <p className="text-xs text-gray-500 mt-6 text-center">
              We respect your privacy.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ContactMandatoryPage;
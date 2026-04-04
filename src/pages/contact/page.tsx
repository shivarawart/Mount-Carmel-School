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
    content: "Mount Carmel International School is affiliated with CBSE, New Delhi (Affiliation No: 531833).",
  },
  {
    title: "School Management Committee",
    content: "The School Management Committee comprises experienced educationists, parents, and community leaders committed to governance and academic excellence.",
  },
  {
    title: "Staff Details",
    content: "Our teaching and non-teaching staff are highly qualified, regularly trained, and deeply passionate about nurturing young minds.",
  },
  {
    title: "Infrastructure & Safety",
    content: "State-of-the-art classrooms, science & computer labs, spacious playground, CCTV surveillance, and robust safety protocols ensure a secure learning environment.",
  },
];

const ContactMandatoryPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeDisclosure, setActiveDisclosure] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".animate-on-scroll").forEach((el: any, i) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: i * 0.08,
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

  // Handle form submission with EmailJS
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",      // ← Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",     // ← Replace with your EmailJS Template ID
        formRef.current,
        "YOUR_PUBLIC_KEY"       // ← Replace with your EmailJS Public Key
      );

      setSubmitted(true);
      formRef.current.reset();
      
      // Auto hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main ref={pageRef} className="bg-gradient-to-b from-slate-50 to-white text-gray-900 overflow-x-hidden">
      {/* 🔥 HERO */}
      <Banner />

      {/* 📇 CONTACT INFO */}
      <Section title="Get in Touch" subtitle="We'd love to hear from you" center className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3 animate-on-scroll">
          {[
            { icon: "📞", title: "Phone", value: "+91-8307622365" },
            { icon: "✉️", title: "Email", value: "mountcarmel177@gmail.com" },
            { icon: "📍", title: "Address", value: "Village Kathemajra, Tehsil Naraingarh, District Ambala, Haryana - 134203" },
          ].map((info, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{info.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{info.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{info.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 🗺 GOOGLE MAP */}
      <Section title="Our Campus Location" subtitle="Visit us at Kathemajra" center className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 animate-on-scroll">
          <iframe
            className="w-full h-[420px] md:h-[520px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.829122622172!2d76.95743107552092!3d30.324438018625637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f124c395b5b77%3A0xe5aebfd6c20ef3b6!2sMount%20Carmel%20International%20School!5e0!3m2!1sen!2sin!4v1699521434985!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>

      {/* 📜 MANDATORY DISCLOSURE */}
      <Section title="Mandatory Disclosure" subtitle="Transparency & Compliance" center className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-6 animate-on-scroll">
          {disclosures.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => setActiveDisclosure(activeDisclosure === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <span className="text-xl font-semibold text-gray-900 pr-4">{item.title}</span>
                <span className="text-3xl text-indigo-600 font-light transition-transform duration-300">
                  {activeDisclosure === idx ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-8 pb-8 text-gray-600 leading-relaxed transition-all duration-500 overflow-hidden ${
                  activeDisclosure === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 📝 CONTACT FORM */}
      <Section title="Send Us a Message" subtitle="We reply within 24 hours" center className="py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-6 animate-on-scroll">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 border border-gray-100">
            {submitted && (
              <div className="mb-8 p-4 bg-green-100 border border-green-300 text-green-800 rounded-2xl text-center">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  required
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition placeholder:text-gray-500"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition placeholder:text-gray-500"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition placeholder:text-gray-500"
              />

              <textarea
                name="message"
                placeholder="Your Message / Inquiry"
                required
                rows={6}
                className="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition resize-y placeholder:text-gray-500"
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full py-7 text-lg font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-[0.985]"
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </form>

            <p className="text-center text-xs text-gray-500 mt-8">
              All fields are required. We respect your privacy.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ContactMandatoryPage;
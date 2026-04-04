"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = btnRef.current;

    if (!el) return;

    // Entrance animation
    gsap.fromTo(
      el,
      { scale: 0, opacity: 0, y: 100 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );

    // Pulse animation
    gsap.to(el, {
      scale: 1.08,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={btnRef}
      className="fixed bottom-5 right-5 z-50 group"
    >
      {/* Tooltip */}
      <div className="absolute right-16 bottom-1/2 translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg">
        Chat with us
      </div>

      {/* Button */}
      <a
        href="https://wa.me/918307622365"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        {/* Glow ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping"></span>

        {/* Icon */}
        <FaWhatsapp className="text-2xl relative z-10" />
      </a>
    </div>
  );
};

export default WhatsAppFloat;
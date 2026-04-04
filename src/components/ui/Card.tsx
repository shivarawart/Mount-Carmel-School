"use client";

import { type ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

type CardProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  image?: string;
  children?: ReactNode;
};

const Card = ({ title, description, icon, image, children }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-400/10 to-purple-400/20 blur-xl"></div>
      </div>

      {/* Image */}
      {image && (
        <div className="h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative p-6">
        {/* Icon */}
        {icon && (
          <div className="mb-4 text-3xl text-blue-500 group-hover:scale-110 transition">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        )}

        {/* Extra Content */}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
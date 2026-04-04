"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "default" | "gradient" | "highlight";
  badge?: string;
};

const SectionHeading = ({
  title,
  subtitle,
  align = "left",
  variant = "default",
  badge,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".reveal"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  const titleStyles = {
    default: "text-gray-900",
    gradient:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text",
    highlight: "text-gray-900",
  };

  return (
    <div
      ref={ref}
      className={`max-w-3xl mb-10 ${alignment}`}
    >
      {/* Badge */}
      {badge && (
        <div className="reveal inline-block mb-3 px-4 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
          {badge}
        </div>
      )}

      {/* Title */}
      <h2
        className={`reveal text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${titleStyles[variant]}`}
      >
        {variant === "highlight" ? (
          <>
            {title.split(" ").map((word, i) => (
              <span
                key={i}
                className={`inline-block mr-2 ${
                  i === 1 ? "text-blue-600" : ""
                }`}
              >
                {word}
              </span>
            ))}
          </>
        ) : (
          title
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="reveal mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
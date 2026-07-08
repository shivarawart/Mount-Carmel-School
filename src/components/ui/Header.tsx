"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
  { name: "Mandatory Disclosure", path: "/mandatory" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (!isOpen || !navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -12, opacity: 0, scale: 0.985 },
        { y: 0, opacity: 1, scale: 1, duration: 0.28, ease: "power2.out" }
      );
    }, navRef);

    return () => ctx.revert();
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 rounded-2xl">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-600 text-sm font-semibold text-white shadow-md shadow-indigo-600/20">
            MC
          </div>
          <div className="leading-tight">
            <h1 className="text-[15px] font-semibold tracking-tight text-slate-900 sm:text-base">
              Mount Carmel School
            </h1>
            <p className="text-xs text-slate-500">Learning with vision</p>
          </div>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/85 px-2 py-2 shadow-sm md:flex"
        >
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "bg-slate-300 text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={navRef}
        className={`border-t border-slate-200 bg-white/95 px-4 pb-5 pt-3 shadow-lg backdrop-blur-xl md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "bg-slate-200 text-white"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
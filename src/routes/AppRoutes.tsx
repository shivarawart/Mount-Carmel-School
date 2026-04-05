"use client";

import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy pages
const Home = lazy(() => import("../pages/HomePage"));
const About = lazy(() => import("../pages/About/page"));
const Academics = lazy(() => import("../pages/academics/page"));
const Admissions = lazy(() => import("../pages/admissions/page"));
const Facilities = lazy(() => import("../pages/facilities/page"));
const Gallery = lazy(() => import("../pages/Gallery/page"));
const Contact = lazy(() => import("../pages/contact/page"));

// Loader
const Loader = () => (
  <div className="flex justify-center items-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-gray-200"></div>
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}
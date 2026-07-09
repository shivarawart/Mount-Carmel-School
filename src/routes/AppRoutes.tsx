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
const Mandatory = lazy(() => import("../pages/mandatory-disclosure/page") )
const LibraryPage = lazy(() => import ('../pages/ViewImage/page/Libraryimg'))
const AnnualCelebrations = lazy(() => import('../pages/ViewImage/page/Annual-Celebrations'))
const ExpertTeachers = lazy(() => import('../pages/ViewImage/page/ExpertTeachers'))
const CreativeGrowth = lazy(() => import('../pages/ViewImage/page/CreativeGrowth'))
const SafeEnvironment = lazy(() => import('../pages/ViewImage/page/SafeEnvironment'))
const SmartLabs = lazy(() => import('../pages/ViewImage/page/SmartLabs'))
const SportsArena =  lazy(() => import('../pages/ViewImage/page/SportsArena'))
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
        <Route path="/mandatory" element={<Mandatory />} />
        <Route path="/Library" element={<LibraryPage />} />
        <Route path='/Annual-Day' element={<AnnualCelebrations />} />
        <Route path='/ExpertTeachers' element={<ExpertTeachers />} />
        <Route path='/CreativeGrowth' element={ <CreativeGrowth />} />
        <Route path='/SafeEnvironment' element={ <SafeEnvironment />} />
        <Route path='/SmartLabs' element={<SmartLabs />} />
        <Route path='SportsArena' element={ <SportsArena />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Suspense>
  );
}
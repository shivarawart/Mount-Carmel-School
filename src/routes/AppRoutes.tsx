"use client";

import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
// import Header from "../components/ui/Header";
// import Footer from "../components/ui/Footer";
// import WhatsAppFloat from "../components/ui/WhatsAppFloat";

// Lazy load pages for better performance
const Home = lazy(() => import("../pages/HomePage"));
const About = lazy(() => import("../pages/About/page"));
const Academics = lazy(() => import("../pages/academics/page"));
const Admissions = lazy(() => import("../pages/admissions/page"));
const Facilities = lazy(() => import("../pages/facilities/page"));
const Gallery = lazy(() => import("../pages/Gallery/page"));
const Contact = lazy(() => import("../pages/contact/page"));

// Scroll restoration on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

// Loader fallback component
const Loader = () => (
  <div className="flex justify-center items-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-gray-200"></div>
  </div>
);

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />

      {/* Header */}


      {/* Main Routes */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
        </Routes>
      </Suspense>

      {/* Floating WhatsApp Button */}
    

      {/* Footer */}
 
    </Router>
  );
};

export default AppRoutes;
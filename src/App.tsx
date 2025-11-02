import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Stats from "./components/Stats";
import Features from "./components/Features";
import WhyUs from "./components/WhyUs";
import Partners from "./components/Partners";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import StartMonetization from "./components/StartMonetization";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Affiliate from "./components/Affiliate";
import NotFound from "./components/NotFound"; // ✅ added

export default function App() {
  return (
    <Router>
      <div className="relative font-sans text-gray-900 bg-white min-h-screen overflow-hidden">
        {/* 🧩 Subtle animated grid background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-move" />

        {/* Optional soft color glow overlay (makes it slightly more dynamic) */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white via-gray-50 to-indigo-50 opacity-80" />

        {/* Header - always visible */}
        <Header />

        {/* Main Content Routes */}
        <Routes>
          <Route path="/affiliate" element={<Affiliate />} />
          {/* 🏠 Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Advantages />
                <Stats />
                <Features />
                <WhyUs />
                <Partners />
                <CTA />
              </>
            }
          />

          {/* 🚀 Start Monetization Page */}
          <Route path="/start" element={<StartMonetization />} />

          {/* ✉️ Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* 🧭 About Us Page */}
          <Route path="/about" element={<AboutUs />} />

          {/* ⚠️ 404 Page */}
          <Route path="*" element={<NotFound />} /> {/* ✅ added */}
        </Routes>

        {/* Footer - always visible */}
        <Footer />
      </div>
    </Router>
  );
}
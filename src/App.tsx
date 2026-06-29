import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Advantages from "./components/Advantages";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import WhyUs from "./components/WhyUs";
import Partners from "./components/Partners";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import StartMonetization from "./components/StartMonetization";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Affiliate from "./components/Affiliate";
import NotFound from "./components/NotFound";

/* Reset scroll on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

/* Ambient instrument-panel background — fixed behind all content */
function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute -top-1/3 left-1/2 h-[820px] w-[820px] -translate-x-1/2 rounded-full bg-signal/20 blur-[150px] animate-mesh-drift" />
      <div className="absolute top-1/3 -left-40 h-[620px] w-[620px] rounded-full bg-violet/15 blur-[150px] animate-mesh-drift [animation-delay:-8s]" />
      <div className="absolute bottom-0 right-0 h-[560px] w-[560px] rounded-full bg-mint/10 blur-[160px] animate-mesh-drift [animation-delay:-14s]" />
      <div className="absolute inset-0 bg-grid bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)] animate-grid-pan opacity-70" />
      <div className="noise absolute inset-0 opacity-[0.05] mix-blend-soft-light" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen font-sans text-ice antialiased">
        <Backdrop />
        <Header />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Stats />
                  <Advantages />
                  <HowItWorks />
                  <Features />
                  <WhyUs />
                  <Partners />
                  <CTA />
                </>
              }
            />
            <Route path="/start" element={<StartMonetization />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

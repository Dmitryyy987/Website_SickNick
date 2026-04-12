import { useState, useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Cursor from "./components/common/Cursor";
import Loader from "./components/common/Loader";

import Home from "./pages/Home";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import Process from "./pages/Process";

function MainLayout() {
  const location = useLocation();
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Loader 
        isLoading={isInitialLoading} 
        onLoadingComplete={() => setIsInitialLoading(false)} 
      />
      
      <motion.div 
        className="min-h-screen flex flex-col"
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ 
          opacity: isInitialLoading ? 0 : 1, 
          filter: isInitialLoading ? 'blur(10px)' : 'blur(0px)' 
        }}
        transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <Navbar />
        <main className="flex-1 w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/process" element={<Process />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Cursor />
      <Router>
        <MainLayout />
      </Router>
    </>
  );
}

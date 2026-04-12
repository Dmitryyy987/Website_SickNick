import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loader = ({ isLoading, onLoadingComplete }) => {
  const [percent, setPercent] = useState(0);
  
  // Spotlight Cursor Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 1;
      });
    }, 45);
    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (percent === 100) {
      const timeout = setTimeout(() => {
        onLoadingComplete?.();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [percent, onLoadingComplete]);

  // SVG Ring Constants
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader-container"
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ 
            opacity: 0, 
            scale: 1.05, 
            filter: 'blur(15px)',
            transition: { duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-soft via-stone to-cream-soft select-none"
        >
          {/* ── BACKGROUND SYSTEM ── */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Spotlight Effect */}
            <motion.div 
              style={{
                left: smoothX,
                top: smoothY,
              }}
              className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rust/5 blur-[120px]"
            />

            {/* Top Blob */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-20 -left-20 w-[40vw] h-[40vw] bg-rust opacity-5 blur-[120px] rounded-full"
            />

            {/* Bottom Blob */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, -40, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-20 -right-20 w-[50vw] h-[50vw] bg-stone opacity-30 blur-[120px] rounded-full"
            />
          </div>

          {/* ── CORE LOADER ── */}
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Progress Ring & Logo Center */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              
              {/* Rotating Ring Container */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="transparent"
                    className="text-stone/30"
                  />
                  <motion.circle
                    cx="96"
                    cy="96"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="transparent"
                    strokeDasharray={circumference}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ ease: 'easeInOut', duration: 0.5 }}
                    className="text-rust"
                  />
                </svg>
              </motion.div>

              {/* Central Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  opacity: { duration: 0.8 },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="flex flex-col items-center z-10"
              >
                <span className="font-serif italic text-3xl text-black">BytBrand</span>
              </motion.div>
            </div>

            {/* Percentage Number */}
            <div className="mt-8 overflow-hidden h-12 flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={percent}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-sans text-5xl font-bold tracking-tighter text-black tabular-nums"
                >
                  {percent}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 font-mono text-[10px] uppercase tracking-[0.4em] text-rust opacity-60"
            >
              System Synchronization
            </motion.p>
          </div>

          {/* ── PROGRESS BAR (BOTTOM) ── */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-stone/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              transition={{ ease: 'easeInOut', duration: 0.5 }}
              className="h-full bg-gradient-to-r from-rust to-rust-light shadow-[0_0_15px_rgba(136,69,49,0.3)]"
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

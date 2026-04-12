import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Loader Variants
 */
const containerVariants = {
  initial: { 
    opacity: 1 
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter: 'blur(10px)',
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
      when: 'afterChildren'
    }
  }
};

const circleVariants = {
  initial: { 
    scale: 0.8, 
    opacity: 0, 
    filter: 'blur(10px)' 
  },
  animate: {
    scale: [0.8, 1.1, 1],
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: 'easeInOut'
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const textVariants = {
  initial: { 
    opacity: 0, 
    y: 10 
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const Loader = ({ isLoading, onLoadingComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (percent === 100) {
      const timeout = setTimeout(() => {
        onLoadingComplete?.();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [percent, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#060010]"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 opacity-20 dark:opacity-40">
            <div className="absolute inset-x-0 top-0 h-[500px] w-full bg-gradient-to-b from-rust/30 to-transparent blur-[120px]" />
            <div className="absolute inset-x-0 bottom-0 h-[500px] w-full bg-gradient-to-t from-brown-dark/30 to-transparent blur-[120px]" />
          </div>

          {/* Center Element */}
          <div className="relative flex items-center justify-center">
            {/* Pulsing Outer Ring */}
            <motion.div
              variants={pulseVariants}
              animate="animate"
              className="absolute h-32 w-32 rounded-full border border-rust/30"
            />
            
            {/* Staggered Circles */}
            <div className="relative flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  variants={circleVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: i * 0.1 }}
                  className="h-3 w-3 rounded-full bg-rust"
                />
              ))}
            </div>
          </div>

          {/* Text & Counter */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <motion.p
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-rust"
            >
              Initializing Experience
            </motion.p>
            
            <motion.span
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="font-sans text-4xl font-light text-black dark:text-cream"
            >
              {Math.min(percent, 100)}%
            </motion.span>
          </div>

          {/* Progress Bar (Bottom) */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-stone dark:bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              transition={{ ease: 'linear' }}
              className="h-full bg-rust shadow-[0_0_15px_rgba(136,69,49,0.5)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

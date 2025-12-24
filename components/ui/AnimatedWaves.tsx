"use client";

import { motion } from "framer-motion";

/**
 * ElegantWaves Component
 * Inspired by Eroica Brand Book "Flowing Harmony" and "Symphonic Rise" patterns
 * Subtle, imperceptible lines representing democratic voices in harmony
 * Senior designer approach: minimal, clean, modern
 */
export function AnimatedWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Flowing Harmony Lines - Heroic Gold */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Elegant gradient for gold lines */}
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.03" />
            <stop offset="50%" stopColor="#C5A059" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0.03" />
          </linearGradient>
          
          {/* Elegant gradient for blue lines */}
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#003366" stopOpacity="0.02" />
            <stop offset="50%" stopColor="#4D729C" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#003366" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Layer 1: Upper symphonic line - very subtle */}
        <motion.path
          d="M0,200 Q360,180 720,200 T1440,200"
          stroke="url(#gold-gradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M0,200 Q360,180 720,200 T1440,200",
              "M0,210 Q360,190 720,210 T1440,210",
              "M0,200 Q360,180 720,200 T1440,200",
            ]
          }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 1 },
            d: { duration: 20, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Layer 2: Mid-level flow */}
        <motion.path
          d="M0,350 Q360,330 720,350 T1440,350"
          stroke="url(#blue-gradient)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M0,350 Q360,330 720,350 T1440,350",
              "M0,340 Q360,320 720,340 T1440,340",
              "M0,350 Q360,330 720,350 T1440,350",
            ]
          }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut", delay: 0.3 },
            opacity: { duration: 1, delay: 0.3 },
            d: { duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        />

        {/* Layer 3: Lower harmonic line */}
        <motion.path
          d="M0,500 Q360,485 720,500 T1440,500"
          stroke="url(#gold-gradient)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M0,500 Q360,485 720,500 T1440,500",
              "M0,490 Q360,475 720,490 T1440,490",
              "M0,500 Q360,485 720,500 T1440,500",
            ]
          }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut", delay: 0.6 },
            opacity: { duration: 1, delay: 0.6 },
            d: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        />

        {/* Layer 4: Deep civic line - most subtle */}
        <motion.path
          d="M0,650 Q360,640 720,650 T1440,650"
          stroke="url(#blue-gradient)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M0,650 Q360,640 720,650 T1440,650",
              "M0,645 Q360,635 720,645 T1440,645",
              "M0,650 Q360,640 720,650 T1440,650",
            ]
          }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut", delay: 0.9 },
            opacity: { duration: 1, delay: 0.9 },
            d: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }
          }}
        />

        {/* Accent line: Heroic momentum - very thin */}
        <motion.path
          d="M0,120 Q360,110 720,120 T1440,120"
          stroke="url(#gold-gradient)"
          strokeWidth="0.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M0,120 Q360,110 720,120 T1440,120",
              "M0,125 Q360,115 720,125 T1440,125",
              "M0,120 Q360,110 720,120 T1440,120",
            ]
          }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut", delay: 1.2 },
            opacity: { duration: 1, delay: 1.2 },
            d: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 4 }
          }}
        />

        {/* Rising line: Symphonic crescendo */}
        <motion.path
          d="M0,750 Q360,745 720,750 T1440,750"
          stroke="url(#blue-gradient)"
          strokeWidth="0.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M0,750 Q360,745 720,750 T1440,750",
              "M0,755 Q360,750 720,755 T1440,755",
              "M0,750 Q360,745 720,750 T1440,750",
            ]
          }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut", delay: 1.5 },
            opacity: { duration: 1, delay: 1.5 },
            d: { duration: 28, repeat: Infinity, ease: "easeInOut", delay: 5 }
          }}
        />
      </svg>

      {/* Subtle radial glow - barely perceptible */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(197, 160, 89, 0.02) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

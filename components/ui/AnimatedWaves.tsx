"use client";

import { motion } from "framer-motion";

/**
 * ElegantWaves Component
 * Artistic, symmetric flowing lines inspired by Eroica Brand Book
 * "Flowing Harmony" and "Symphonic Rise" patterns
 * Professional senior designer approach: balanced, sophisticated, artistic
 */
export function AnimatedWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main SVG Canvas */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Heroic Gold Gradient - Horizontal flow */}
          <linearGradient id="gold-flow" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.01" />
            <stop offset="25%" stopColor="#D4AF78" stopOpacity="0.04" />
            <stop offset="50%" stopColor="#C5A059" stopOpacity="0.06" />
            <stop offset="75%" stopColor="#D4AF78" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0.01" />
          </linearGradient>

          {/* Civic Blue Gradient - Horizontal flow */}
          <linearGradient id="blue-flow" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#003366" stopOpacity="0.01" />
            <stop offset="25%" stopColor="#4D729C" stopOpacity="0.03" />
            <stop offset="50%" stopColor="#003366" stopOpacity="0.05" />
            <stop offset="75%" stopColor="#4D729C" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#003366" stopOpacity="0.01" />
          </linearGradient>

          {/* Accent gradient for harmony */}
          <linearGradient id="accent-flow" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#DEC298" stopOpacity="0.01" />
            <stop offset="50%" stopColor="#F2E8D8" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#DEC298" stopOpacity="0.01" />
          </linearGradient>
        </defs>

        {/* Layer 1: Upper arc - Gold - Symmetric and artistic */}
        <motion.path
          d="M0,250 C240,230 480,230 720,250 C960,270 1200,270 1440,250"
          stroke="url(#gold-flow)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M0,250 C240,230 480,230 720,250 C960,270 1200,270 1440,250",
              "M0,240 C240,225 480,225 720,240 C960,255 1200,255 1440,240",
              "M0,250 C240,230 480,230 720,250 C960,270 1200,270 1440,250",
            ]
          }}
          transition={{
            pathLength: { duration: 2.5, ease: "easeInOut" },
            opacity: { duration: 1.5 },
            d: { 
              duration: 18, 
              repeat: Infinity, 
              ease: [0.45, 0.05, 0.55, 0.95],
              repeatType: "reverse"
            }
          }}
        />

        {/* Layer 2: Mid-upper wave - Blue - Flowing harmony */}
        <motion.path
          d="M0,380 C360,360 720,360 1080,380 C1260,390 1350,390 1440,380"
          stroke="url(#blue-flow)"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M0,380 C360,360 720,360 1080,380 C1260,390 1350,390 1440,380",
              "M0,370 C360,355 720,355 1080,370 C1260,380 1350,380 1440,370",
              "M0,380 C360,360 720,360 1080,380 C1260,390 1350,390 1440,380",
            ]
          }}
          transition={{
            pathLength: { duration: 2.5, ease: "easeInOut", delay: 0.4 },
            opacity: { duration: 1.5, delay: 0.4 },
            d: { 
              duration: 22, 
              repeat: Infinity, 
              ease: [0.45, 0.05, 0.55, 0.95],
              repeatType: "reverse",
              delay: 1
            }
          }}
        />

        {/* Layer 3: Center line - Gold - Symphonic centerpiece */}
        <motion.path
          d="M0,450 C360,440 720,440 1080,450 C1260,455 1350,455 1440,450"
          stroke="url(#gold-flow)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M0,450 C360,440 720,440 1080,450 C1260,455 1350,455 1440,450",
              "M0,445 C360,437 720,437 1080,445 C1260,450 1350,450 1440,445",
              "M0,450 C360,440 720,440 1080,450 C1260,455 1350,455 1440,450",
            ]
          }}
          transition={{
            pathLength: { duration: 2.5, ease: "easeInOut", delay: 0.8 },
            opacity: { duration: 1.5, delay: 0.8 },
            d: { 
              duration: 20, 
              repeat: Infinity, 
              ease: [0.45, 0.05, 0.55, 0.95],
              repeatType: "reverse",
              delay: 2
            }
          }}
        />

        {/* Layer 4: Mid-lower wave - Blue - Balanced counterpoint */}
        <motion.path
          d="M0,520 C360,505 720,505 1080,520 C1260,530 1350,530 1440,520"
          stroke="url(#blue-flow)"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M0,520 C360,505 720,505 1080,520 C1260,530 1350,530 1440,520",
              "M0,530 C360,513 720,513 1080,530 C1260,540 1350,540 1440,530",
              "M0,520 C360,505 720,505 1080,520 C1260,530 1350,530 1440,520",
            ]
          }}
          transition={{
            pathLength: { duration: 2.5, ease: "easeInOut", delay: 1.2 },
            opacity: { duration: 1.5, delay: 1.2 },
            d: { 
              duration: 24, 
              repeat: Infinity, 
              ease: [0.45, 0.05, 0.55, 0.95],
              repeatType: "reverse",
              delay: 3
            }
          }}
        />

        {/* Layer 5: Lower arc - Gold - Symmetric closure */}
        <motion.path
          d="M0,650 C240,635 480,635 720,650 C960,665 1200,665 1440,650"
          stroke="url(#gold-flow)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M0,650 C240,635 480,635 720,650 C960,665 1200,665 1440,650",
              "M0,655 C240,643 480,643 720,655 C960,667 1200,667 1440,655",
              "M0,650 C240,635 480,635 720,650 C960,665 1200,665 1440,650",
            ]
          }}
          transition={{
            pathLength: { duration: 2.5, ease: "easeInOut", delay: 1.6 },
            opacity: { duration: 1.5, delay: 1.6 },
            d: { 
              duration: 19, 
              repeat: Infinity, 
              ease: [0.45, 0.05, 0.55, 0.95],
              repeatType: "reverse",
              delay: 4
            }
          }}
        />

        {/* Accent lines - Very subtle, add artistic detail */}
        <motion.path
          d="M0,180 C480,170 960,170 1440,180"
          stroke="url(#accent-flow)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M0,180 C480,170 960,170 1440,180",
              "M0,175 C480,168 960,168 1440,175",
              "M0,180 C480,170 960,170 1440,180",
            ]
          }}
          transition={{
            pathLength: { duration: 3, ease: "easeInOut", delay: 2 },
            opacity: { duration: 2, delay: 2 },
            d: { 
              duration: 26, 
              repeat: Infinity, 
              ease: [0.45, 0.05, 0.55, 0.95],
              repeatType: "reverse",
              delay: 5
            }
          }}
        />

        <motion.path
          d="M0,720 C480,712 960,712 1440,720"
          stroke="url(#accent-flow)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            d: [
              "M0,720 C480,712 960,712 1440,720",
              "M0,725 C480,718 960,718 1440,725",
              "M0,720 C480,712 960,712 1440,720",
            ]
          }}
          transition={{
            pathLength: { duration: 3, ease: "easeInOut", delay: 2.4 },
            opacity: { duration: 2, delay: 2.4 },
            d: { 
              duration: 28, 
              repeat: Infinity, 
              ease: [0.45, 0.05, 0.55, 0.95],
              repeatType: "reverse",
              delay: 6
            }
          }}
        />
      </svg>

      {/* Artistic radial glow - centered, symmetric */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(197, 160, 89, 0.015) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

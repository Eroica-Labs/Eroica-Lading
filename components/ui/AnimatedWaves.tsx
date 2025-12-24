"use client";

import { motion } from "framer-motion";

/**
 * Artistic Waves Component
 * Organic, asymmetric flowing lines inspired by Eroica Brand Book
 * Creating a symphonic visual experience with color gradients and varied curves
 */
export function AnimatedWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Rich heroic gold gradient with variation */}
          <linearGradient id="gold-flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.15" />
            <stop offset="25%" stopColor="#D4AF78" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#C5A059" stopOpacity="0.18" />
            <stop offset="75%" stopColor="#B18F4D" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0.08" />
          </linearGradient>
          
          {/* Deep civic blue gradient with variation */}
          <linearGradient id="blue-flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#003366" stopOpacity="0.08" />
            <stop offset="30%" stopColor="#4D729C" stopOpacity="0.15" />
            <stop offset="60%" stopColor="#264D7A" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#003366" stopOpacity="0.06" />
          </linearGradient>

          {/* Electric blue accent gradient */}
          <linearGradient id="electric-flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2E5BFF" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#5C7FFF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#2E5BFF" stopOpacity="0.04" />
          </linearGradient>

          {/* Warm gold accent */}
          <linearGradient id="warm-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DEC298" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#F2E8D8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#DEC298" stopOpacity="0.06" />
          </linearGradient>
        </defs>

        {/* Organic Wave 1: Upper heroic arc - thick, flowing */}
        <motion.path
          d="M-100,180 C200,140 400,220 600,180 C800,140 1000,200 1200,180 C1400,160 1600,180 1800,180"
          stroke="url(#gold-flow)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity={0.8}
          animate={{
            d: [
              "M-100,180 C200,140 400,220 600,180 C800,140 1000,200 1200,180 C1400,160 1600,180 1800,180",
              "M-100,190 C200,160 400,200 600,190 C800,170 1000,210 1200,190 C1400,170 1600,190 1800,190",
              "M-100,180 C200,140 400,220 600,180 C800,140 1000,200 1200,180 C1400,160 1600,180 1800,180",
            ],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Organic Wave 2: Mid-level flow - asymmetric, artistic */}
        <motion.path
          d="M-100,320 C150,280 350,360 550,320 C750,280 950,340 1150,310 C1350,280 1550,320 1800,320"
          stroke="url(#blue-flow)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity={0.9}
          animate={{
            d: [
              "M-100,320 C150,280 350,360 550,320 C750,280 950,340 1150,310 C1350,280 1550,320 1800,320",
              "M-100,310 C150,270 350,340 550,300 C750,270 950,330 1150,305 C1350,275 1550,310 1800,310",
              "M-100,320 C150,280 350,360 550,320 C750,280 950,340 1150,310 C1350,280 1550,320 1800,320",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Organic Wave 3: Lower symphonic rise - varied thickness */}
        <motion.path
          d="M-100,480 C250,440 450,520 650,480 C850,440 1050,500 1250,470 C1450,440 1650,480 1800,480"
          stroke="url(#gold-flow)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity={0.7}
          animate={{
            d: [
              "M-100,480 C250,440 450,520 650,480 C850,440 1050,500 1250,470 C1450,440 1650,480 1800,480",
              "M-100,470 C250,430 450,500 650,465 C850,430 1050,490 1250,465 C1450,435 1650,470 1800,470",
              "M-100,480 C250,440 450,520 650,480 C850,440 1050,500 1250,470 C1450,440 1650,480 1800,480",
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Organic Wave 4: Deep civic curve - wider spread */}
        <motion.path
          d="M-100,620 C300,580 500,660 700,620 C900,580 1100,640 1300,610 C1500,580 1700,620 1800,620"
          stroke="url(#blue-flow)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity={0.6}
          animate={{
            d: [
              "M-100,620 C300,580 500,660 700,620 C900,580 1100,640 1300,610 C1500,580 1700,620 1800,620",
              "M-100,610 C300,570 500,640 700,605 C900,570 1100,630 1300,605 C1500,575 1700,610 1800,610",
              "M-100,620 C300,580 500,660 700,620 C900,580 1100,640 1300,610 C1500,580 1700,620 1800,620",
            ],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />

        {/* Accent Wave 1: Electric blue highlight - thin, fast */}
        <motion.path
          d="M-100,250 C100,220 300,270 500,240 C700,210 900,260 1100,235 C1300,210 1500,240 1800,240"
          stroke="url(#electric-flow)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity={0.85}
          animate={{
            d: [
              "M-100,250 C100,220 300,270 500,240 C700,210 900,260 1100,235 C1300,210 1500,240 1800,240",
              "M-100,245 C100,215 300,260 500,235 C700,205 900,255 1100,232 C1300,207 1500,235 1800,235",
              "M-100,250 C100,220 300,270 500,240 C700,210 900,260 1100,235 C1300,210 1500,240 1800,240",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Accent Wave 2: Warm gold whisper - very thin */}
        <motion.path
          d="M-100,400 C180,370 380,420 580,390 C780,360 980,410 1180,385 C1380,360 1580,390 1800,390"
          stroke="url(#warm-gold)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity={0.5}
          animate={{
            d: [
              "M-100,400 C180,370 380,420 580,390 C780,360 980,410 1180,385 C1380,360 1580,390 1800,390",
              "M-100,395 C180,365 380,410 580,385 C780,355 980,405 1180,382 C1380,357 1580,385 1800,385",
              "M-100,400 C180,370 380,420 580,390 C780,360 980,410 1180,385 C1380,360 1580,390 1800,390",
            ],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Dynamic flowing highlight - diagonal emphasis */}
        <motion.path
          d="M-100,120 C50,100 250,140 450,110 C650,80 850,120 1050,100 C1250,80 1450,110 1800,110"
          stroke="url(#gold-flow)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity={0.6}
          animate={{
            d: [
              "M-100,120 C50,100 250,140 450,110 C650,80 850,120 1050,100 C1250,80 1450,110 1800,110",
              "M-100,115 C50,95 250,130 450,105 C650,75 850,115 1050,98 C1250,78 1450,105 1800,105",
              "M-100,120 C50,100 250,140 450,110 C650,80 850,120 1050,100 C1250,80 1450,110 1800,110",
            ],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7,
          }}
        />

        {/* Lower accent - deep blue whisper */}
        <motion.path
          d="M-100,720 C200,690 400,740 600,710 C800,680 1000,730 1200,705 C1400,680 1600,710 1800,710"
          stroke="url(#blue-flow)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          opacity={0.4}
          animate={{
            d: [
              "M-100,720 C200,690 400,740 600,710 C800,680 1000,730 1200,705 C1400,680 1600,710 1800,710",
              "M-100,715 C200,685 400,730 600,705 C800,675 1000,725 1200,702 C1400,677 1600,705 1800,705",
              "M-100,720 C200,690 400,740 600,710 C800,680 1000,730 1200,705 C1400,680 1600,710 1800,710",
            ],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </svg>

      {/* Dynamic color orbs - multiple colors */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 51, 102, 0.06) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(46, 91, 255, 0.04) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
}

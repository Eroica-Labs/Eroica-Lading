"use client";

import { useEffect, useRef } from "react";

/**
 * Symphonic Waves Component
 * 
 * Uses HTML5 Canvas for high-performance, mathematical sine wave animations.
 * Creates a "Living Score" effect representing the "Democratic Symphony".
 * 
 * Physics:
 * - Uses multiple sine waves with different frequencies and amplitudes
 * - Phase shifting for organic movement
 * - Composite operations for elegant light blending
 * - Diagonal projection for dynamic forward momentum
 */
export function AnimatedWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;
    let tick = 0;

    // Configuration for the "strings" of the symphony
    // Increased amplitude and variation for "expressive" feel
    const waves = [
      // Heroic Gold Strings (Melody) - High energy
      { color: "rgba(197, 160, 89, 0.5)", amplitude: 60, frequency: 0.003, speed: 0.005, yOffset: -50 },
      { color: "rgba(212, 175, 120, 0.4)", amplitude: 90, frequency: 0.002, speed: 0.003, yOffset: 30 },
      { color: "rgba(177, 143, 77, 0.3)", amplitude: 45, frequency: 0.004, speed: 0.006, yOffset: -80 },
      
      // Civic Blue Strings (Harmony) - Deep and wide
      { color: "rgba(0, 51, 102, 0.2)", amplitude: 120, frequency: 0.001, speed: 0.001, yOffset: 100 },
      { color: "rgba(77, 114, 156, 0.15)", amplitude: 70, frequency: 0.0015, speed: 0.002, yOffset: 60 },
      
      // High notes (Accents) - Fine, fast, piercing
      { color: "rgba(255, 255, 255, 0.6)", amplitude: 25, frequency: 0.006, speed: 0.008, yOffset: -100 },
      { color: "rgba(235, 200, 150, 0.3)", amplitude: 35, frequency: 0.005, speed: 0.004, yOffset: 150 },
    ];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight * 0.8; // Use more vertical space for diagonal movement
      
      // Set actual canvas size (DPI aware)
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // Scale context to ensure correct drawing operations
      ctx.scale(dpr, dpr);
      
      // Set visual size
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const drawWave = (wave: typeof waves[0], time: number) => {
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = wave.color;

      // Diagonal rotation setup
      // We'll calculate points along a rotated axis
      const angle = -15 * (Math.PI / 180); // -15 degrees rotation
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      // Start drawing from well outside the viewport to cover rotation
      const startX = -width * 0.2;
      const endX = width * 1.2;
      const step = 5;

      const baseline = height / 2 + wave.yOffset;

      for (let x = startX; x <= endX; x += step) {
        // Calculate standard wave Y
        const waveY = 
          Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
          Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.3) * (wave.amplitude / 2) +
          Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 0.5) * (wave.amplitude / 4); // Added 3rd harmonic for complexity

        // Apply rotation matrix manually to the point (x, baseline + waveY)
        // Rotate around center of screen (width/2, height/2)
        
        const centerX = width / 2;
        const centerY = height / 2;
        
        const relX = x - centerX;
        const relY = (baseline + waveY) - centerY;

        const rotatedX = relX * cos - relY * sin + centerX;
        const rotatedY = relX * sin + relY * cos + centerY;

        if (x === startX) {
          ctx.moveTo(rotatedX, rotatedY);
        } else {
          ctx.lineTo(rotatedX, rotatedY);
        }
      }

      ctx.stroke();
    };

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      waves.forEach((wave) => {
        drawWave(wave, tick);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", resize);
    resize();
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none opacity-80">
      {/* 
        Canvas container 
        Positioned to cover the hero background 
        Mask image fades the edges for integration
      */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
        }}
      />
      
      {/* Expressive Ambient Glows - Stronger and more colorful */}
      <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] bg-heroic-200/15 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-civic-200/10 rounded-full blur-[120px] animate-pulse-slow delay-700" />
      {/* Accent glow */}
      <div className="absolute top-[60%] left-[40%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] animate-pulse-slow delay-1500" />
    </div>
  );
}

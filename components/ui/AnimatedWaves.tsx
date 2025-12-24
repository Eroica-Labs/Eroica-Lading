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
    const waves = [
      // Heroic Gold Strings (Melody)
      { color: "rgba(197, 160, 89, 0.4)", amplitude: 40, frequency: 0.002, speed: 0.003, yOffset: 0 },
      { color: "rgba(212, 175, 120, 0.3)", amplitude: 60, frequency: 0.0015, speed: 0.002, yOffset: 20 },
      { color: "rgba(177, 143, 77, 0.2)", amplitude: 30, frequency: 0.003, speed: 0.004, yOffset: -20 },
      
      // Civic Blue Strings (Harmony) - Deeper, slower
      { color: "rgba(0, 51, 102, 0.15)", amplitude: 80, frequency: 0.001, speed: 0.001, yOffset: 50 },
      { color: "rgba(77, 114, 156, 0.1)", amplitude: 50, frequency: 0.002, speed: 0.0015, yOffset: 30 },
      
      // High notes (Accents) - Fine, fast
      { color: "rgba(255, 255, 255, 0.5)", amplitude: 15, frequency: 0.005, speed: 0.005, yOffset: -40 },
    ];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight * 0.5; // Only need height for the wave area
      
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

      const baseline = height / 2 + wave.yOffset;

      for (let x = 0; x <= width; x += 5) { // Step optimization
        // Math.sin(x * frequency + time * speed) * amplitude
        // Adding a second sine wave creates the "harmonic" interference effect
        const y = 
          baseline + 
          Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
          Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * (wave.amplitude / 3);

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    };

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Apply a subtle fade effect for trails if desired, or clear completely for crisp lines
      // ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      // ctx.fillRect(0, 0, width, height);

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
    <div className="absolute inset-0 pointer-events-none opacity-60">
      {/* 
        Canvas container 
        Positioned to cover the hero background 
        Mask image fades the edges for integration
      */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)"
        }}
      />
      
      {/* Ambient Glows to support the lines */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-heroic-200/20 rounded-full blur-[100px] -translate-y-1/2 animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-civic-200/10 rounded-full blur-[100px] -translate-y-1/2 animate-pulse-slow delay-1000" />
    </div>
  );
}

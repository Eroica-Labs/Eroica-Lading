"use client";

import { useEffect, useRef } from "react";

/**
 * The Ethereal Symphony
 * 
 * An artistic re-imagination of the "Democratic Symphony".
 * Instead of mathematical precision, we focus on emotional resonance.
 * 
 * Artistic Concepts:
 * - "Threads of Light": Using additive blending (screen/lighter) to simulate light.
 * - "Breathing Motion": Extremely slow, organic oscillation representing life.
 * - "Harmonic Blending": Colors merge and shift as lines cross.
 * - "Soft Focus": Glow and blur effects to remove digital harshness.
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

    // The Strings of the Soul
    const strings = [
      // The Heart (Heroic Gold) - The melody, warm and inviting
      { 
        baseColor: [197, 160, 89], // Gold
        endColor: [212, 175, 120], 
        amplitude: 80, frequency: 0.001, speed: 0.0008, 
        thickness: 3, glow: 15, offset: 0 
      },
      // The Mind (Civic Blue) - The foundation, deep and stable
      { 
        baseColor: [0, 51, 102],   // Deep Blue
        endColor: [77, 114, 156],  
        amplitude: 100, frequency: 0.0008, speed: 0.0005, 
        thickness: 4, glow: 20, offset: 50 
      },
      // The Spirit (Ethereal White/Purple) - The connection, subtle and rising
      { 
        baseColor: [100, 80, 150], // Subtle Amethyst
        endColor: [255, 255, 255], 
        amplitude: 60, frequency: 0.0015, speed: 0.001, 
        thickness: 1.5, glow: 10, offset: -40 
      },
      // The Echo (Subtle Gold) - The memory
      { 
        baseColor: [197, 160, 89], 
        endColor: [255, 255, 255], 
        amplitude: 40, frequency: 0.002, speed: 0.0012, 
        thickness: 1, glow: 5, offset: 20 
      }
    ];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight * 0.8; 
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const drawString = (string: typeof strings[0], time: number) => {
      ctx.beginPath();
      
      // Create a living gradient along the string
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `rgba(${string.baseColor.join(',')}, 0)`); // Fade in
      gradient.addColorStop(0.2, `rgba(${string.baseColor.join(',')}, 0.3)`);
      gradient.addColorStop(0.5, `rgba(${string.endColor.join(',')}, 0.5)`); // Peak intensity
      gradient.addColorStop(0.8, `rgba(${string.baseColor.join(',')}, 0.3)`);
      gradient.addColorStop(1, `rgba(${string.endColor.join(',')}, 0)`); // Fade out

      ctx.strokeStyle = gradient;
      ctx.lineWidth = string.thickness;
      
      // The "Glow" - Key to the emotional softness
      ctx.shadowBlur = string.glow;
      ctx.shadowColor = `rgba(${string.baseColor.join(',')}, 0.4)`;

      // Diagonal Axis Calculation (Softer angle: -10 degrees)
      const angle = -10 * (Math.PI / 180);
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const centerX = width / 2;
      const centerY = height / 2;

      // Draw the curve
      const step = 20; // Smoother steps
      const startX = -width * 0.2;
      const endX = width * 1.2;
      const baseline = height / 2 + string.offset;

      for (let x = startX; x <= endX; x += step) {
        // Organic Wave Function:
        // Combines slow breathing (low freq) with gentle ripples (high freq)
        const waveY = 
          Math.sin(x * string.frequency + time * string.speed) * string.amplitude +
          Math.cos(x * string.frequency * 1.5 + time * string.speed * 1.2) * (string.amplitude * 0.5) +
          Math.sin(x * string.frequency * 0.5 + time * 0.0002) * 20; // Very slow "drift"

        // Rotate
        const relX = x - centerX;
        const relY = (baseline + waveY) - centerY;
        const rotatedX = relX * cos - relY * sin + centerX;
        const rotatedY = relX * sin + relY * cos + centerY;

        if (x === startX) {
          ctx.moveTo(rotatedX, rotatedY);
        } else {
          // Use quadratic curves for silk-like smoothness between points
          // Actually, high-res lineTo is fine if steps are small, 
          // but let's stick to lineTo for performance with shadowBlur
          ctx.lineTo(rotatedX, rotatedY);
        }
      }

      ctx.stroke();
      
      // Reset shadow for next operations to avoid pollution
      ctx.shadowBlur = 0;
    };

    const render = () => {
      tick++;
      
      // Clear with a very slight fade for "motion blur" trail effect? 
      // No, for "clean & elegant" we want crisp redraws but soft shapes.
      ctx.clearRect(0, 0, width, height);

      // Crucial: Additive Blending
      // This makes crossing lines brighten each other like light beams
      ctx.globalCompositeOperation = "lighter"; // or "screen"

      strings.forEach((string) => {
        drawString(string, tick);
      });

      // Reset for safety
      ctx.globalCompositeOperation = "source-over";

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
    <div className="absolute inset-0 pointer-events-none opacity-100">
      {/* 
        Canvas container 
        Using a softer mask to let the strings fade in/out gently
      */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
        }}
      />
      
      {/* 
        Atmospheric Light
        Instead of defined orbs, we use a global wash of light that pulses 
        like a heartbeat.
      */}
      <div className="absolute inset-0 bg-gradient-to-tr from-heroic-100/10 via-transparent to-civic-100/10 mix-blend-overlay" />
      
      {/* Emotional Center Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-heroic-50/20 rounded-full blur-[150px] animate-pulse-slower pointer-events-none" />
    </div>
  );
}

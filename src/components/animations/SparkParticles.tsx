"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

export function SparkParticles({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const cutXRef = useRef(0);
  const directionRef = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener("resize", resize);

    const spawnSpark = (x: number, y: number) => {
      for (let i = 0; i < 4; i++) {
        const angle = Math.random() * Math.PI * 0.8 - Math.PI * 0.9;
        const speed = Math.random() * 4 + 2;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - Math.random() * 2,
          life: 0,
          maxLife: Math.random() * 40 + 20,
          size: Math.random() * 2.5 + 0.5,
          hue: Math.random() * 30 + 15,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      cutXRef.current += directionRef.current * 2.5;
      if (cutXRef.current > width * 0.85) directionRef.current = -1;
      if (cutXRef.current < width * 0.15) directionRef.current = 1;

      const cutY = height * 0.55;
      spawnSpark(cutXRef.current, cutY + Math.random() * 8 - 4);

      const gradient = ctx.createLinearGradient(
        cutXRef.current - 60,
        cutY,
        cutXRef.current + 60,
        cutY
      );
      gradient.addColorStop(0, "rgba(243, 112, 33, 0)");
      gradient.addColorStop(0.5, "rgba(243, 112, 33, 0.9)");
      gradient.addColorStop(1, "rgba(255, 200, 50, 0)");
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.moveTo(cutXRef.current - 50, cutY);
      ctx.lineTo(cutXRef.current + 50, cutY);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cutXRef.current, cutY, 4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 220, 100, 0.95)";
      ctx.fill();

      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08;
        p.life++;
        const alpha = 1 - p.life / p.maxLife;
        if (alpha <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${alpha})`;
        ctx.fill();
        return true;
      });

      if (particlesRef.current.length > 200) {
        particlesRef.current = particlesRef.current.slice(-150);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
      aria-hidden
    />
  );
}

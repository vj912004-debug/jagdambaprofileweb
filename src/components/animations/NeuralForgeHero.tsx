"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

const NAVY = { r: 13, g: 27, b: 42 };

export function NeuralForgeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    interface Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }

    const sparks: Spark[] = [];
    let cutProgress = 0;
    let cutDirection = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawnSparks = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI - Math.PI / 2;
        const speed = Math.random() * 5 + 1.5;
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - Math.random() * 3,
          life: 0,
          maxLife: Math.random() * 35 + 15,
          size: Math.random() * 2.5 + 0.5,
        });
      }
    };

    const drawGrid = (t: number) => {
      const spacing = Math.max(28, width / 28);
      ctx.strokeStyle = "rgba(243, 112, 33, 0.06)";
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += spacing) {
        const pulse = Math.sin(t * 0.002 + x * 0.01) * 0.03;
        ctx.globalAlpha = 0.4 + pulse;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += spacing) {
        ctx.globalAlpha = 0.35;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const drawSteelPlate = (t: number) => {
      const plateY = height * 0.52;
      const plateH = height * 0.22;

      const plateGrad = ctx.createLinearGradient(0, plateY, 0, plateY + plateH);
      plateGrad.addColorStop(0, "rgba(100, 110, 120, 0.35)");
      plateGrad.addColorStop(0.5, "rgba(70, 78, 88, 0.55)");
      plateGrad.addColorStop(1, "rgba(40, 45, 52, 0.65)");

      ctx.fillStyle = plateGrad;
      ctx.fillRect(width * 0.05, plateY, width * 0.9, plateH);

      ctx.strokeStyle = "rgba(243, 112, 33, 0.15)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 12; i++) {
        const lx = width * 0.05 + (width * 0.9 * i) / 12;
        ctx.beginPath();
        ctx.moveTo(lx, plateY);
        ctx.lineTo(lx, plateY + plateH);
        ctx.stroke();
      }

      const shimmer = Math.sin(t * 0.003) * 0.05 + 0.08;
      ctx.fillStyle = `rgba(243, 112, 33, ${shimmer})`;
      ctx.fillRect(width * 0.05, plateY, width * 0.9, 2);
    };

    const drawLaserPath = (t: number) => {
      cutProgress += cutDirection * 0.004;
      if (cutProgress > 1) cutDirection = -1;
      if (cutProgress < 0) cutDirection = 1;

      const plateY = height * 0.52;
      const cutX = width * (0.08 + cutProgress * 0.84);
      const wave = Math.sin(t * 0.008 + cutProgress * 12) * (height * 0.012);

      spawnSparks(cutX, plateY + wave, 3);

      const glow = ctx.createRadialGradient(cutX, plateY + wave, 0, cutX, plateY + wave, 80);
      glow.addColorStop(0, "rgba(255, 200, 80, 0.45)");
      glow.addColorStop(0.4, "rgba(243, 112, 33, 0.2)");
      glow.addColorStop(1, "rgba(243, 112, 33, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(cutX - 80, plateY + wave - 80, 160, 160);

      const beam = ctx.createLinearGradient(cutX - 70, plateY + wave, cutX + 70, plateY + wave);
      beam.addColorStop(0, "rgba(243, 112, 33, 0)");
      beam.addColorStop(0.45, "rgba(255, 220, 100, 1)");
      beam.addColorStop(0.55, "rgba(255, 255, 255, 0.95)");
      beam.addColorStop(1, "rgba(243, 112, 33, 0)");

      ctx.shadowColor = "rgba(243, 112, 33, 0.9)";
      ctx.shadowBlur = 18;
      ctx.strokeStyle = beam;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cutX - 60, plateY + wave);
      ctx.lineTo(cutX + 60, plateY + wave);
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(cutX, plateY + wave, 5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 240, 180, 1)";
      ctx.fill();

      ctx.strokeStyle = "rgba(243, 112, 33, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 8]);
      ctx.beginPath();
      ctx.moveTo(cutX, plateY + wave);
      ctx.lineTo(cutX, plateY - height * 0.08);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawSparks = () => {
      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12;
        p.life++;
        const alpha = 1 - p.life / p.maxLife;
        if (alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, ${160 + Math.random() * 60}, 60, ${alpha})`;
        ctx.fill();
      }
      if (sparks.length > 250) sparks.splice(0, sparks.length - 200);
    };

    const drawScanlines = (t: number) => {
      const offset = (t * 0.06) % 6;
      ctx.fillStyle = "rgba(243, 112, 33, 0.025)";
      for (let y = offset; y < height; y += 6) {
        ctx.fillRect(0, y, width, 1);
      }
    };

    const drawNodes = (t: number) => {
      const nodes = 8;
      for (let i = 0; i < nodes; i++) {
        const nx = width * (0.12 + (i / nodes) * 0.76);
        const ny = height * (0.18 + Math.sin(t * 0.001 + i) * 0.04);
        const pulse = Math.sin(t * 0.004 + i * 0.8) * 0.5 + 0.5;

        ctx.beginPath();
        ctx.arc(nx, ny, 2 + pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(243, 112, 33, ${0.25 + pulse * 0.35})`;
        ctx.fill();

        if (i < nodes - 1) {
          const nx2 = width * (0.12 + ((i + 1) / nodes) * 0.76);
          const ny2 = height * (0.18 + Math.sin(t * 0.001 + i + 1) * 0.04);
          ctx.strokeStyle = `rgba(243, 112, 33, ${0.08 + pulse * 0.06})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nx, ny);
          ctx.lineTo(nx2, ny2);
          ctx.stroke();
        }
      }
    };

    const animate = (timestamp: number) => {
      timeRef.current = timestamp;
      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, `rgba(${NAVY.r}, ${NAVY.g}, ${NAVY.b}, 0.92)`);
      bg.addColorStop(0.5, "rgba(20, 35, 55, 0.88)");
      bg.addColorStop(1, `rgba(${NAVY.r}, ${NAVY.g}, ${NAVY.b}, 0.95)`);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      drawGrid(timestamp);
      drawNodes(timestamp);
      drawSteelPlate(timestamp);
      drawLaserPath(timestamp);
      drawSparks();
      drawScanlines(timestamp);

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={IMAGES.heroNeuralForge}
        alt=""
        fill
        priority
        className="object-cover opacity-30 mix-blend-screen"
        sizes="100vw"
        aria-hidden
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden
      />
      <div className="absolute inset-0 bg-linear-to-b from-navy/80 via-navy/50 to-navy/90" />
      <div className="absolute inset-0 bg-linear-to-r from-navy/85 via-transparent to-navy/60" />
    </div>
  );
}

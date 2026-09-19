import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulseProgress: number;
  pulseSpeed: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

export function NeuralBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const getNodeCount = (w: number) => {
      if (w < 640) return 14; // Mobile
      if (w < 1024) return 26; // Tablet
      return 42; // Desktop
    };

    const getParticleCount = (w: number) => {
      if (w < 640) return 10;
      if (w < 1024) return 20;
      return 35;
    };

    let nodeCount = getNodeCount(width);
    let particleCount = getParticleCount(width);

    let nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      radius: Math.random() * 2 + 1.2,
      pulseProgress: Math.random(),
      pulseSpeed: 0.003 + Math.random() * 0.004,
    }));

    let particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -0.12 - Math.random() * 0.18,
      radius: Math.random() * 1.5 + 0.8,
      alpha: 0.12 + Math.random() * 0.18,
      color: Math.random() > 0.8 ? "#22D3EE" : "#34D399",
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      nodeCount = getNodeCount(width);
      particleCount = getParticleCount(width);

      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 2 + 1.2,
        pulseProgress: Math.random(),
        pulseSpeed: 0.003 + Math.random() * 0.004,
      }));

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -0.12 - Math.random() * 0.18,
        radius: Math.random() * 1.5 + 0.8,
        alpha: 0.12 + Math.random() * 0.18,
        color: Math.random() > 0.8 ? "#22D3EE" : "#34D399",
      }));
    };

    window.addEventListener("resize", handleResize);

    const maxDistance = width < 640 ? 120 : 160;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Floating Particles (Layer 2)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.y < -10) p.y = height + 10;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      // Render Network Connections & Data Pulses
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        if (!prefersReducedMotion) {
          n1.x += n1.vx;
          n1.y += n1.vy;

          if (n1.x < 0 || n1.x > width) n1.vx *= -1;
          if (n1.y < 0 || n1.y > height) n1.vy *= -1;

          n1.pulseProgress = (n1.pulseProgress + n1.pulseSpeed) % 1;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (width < 640 ? 0.08 : 0.13);
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = "#10B981";
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Data flow pulse travelling along connection line
            if (!prefersReducedMotion && (i + j) % 3 === 0) {
              const pulsePos = (n1.pulseProgress + (i % 4) * 0.25) % 1;
              const px = n1.x + (n2.x - n1.x) * pulsePos;
              const py = n1.y + (n2.y - n1.y) * pulsePos;

              ctx.beginPath();
              ctx.arc(px, py, 1.6, 0, Math.PI * 2);
              ctx.fillStyle = (i + j) % 5 === 0 ? "#22D3EE" : "#34D399";
              ctx.globalAlpha = alpha * 2.2;
              ctx.fill();
            }
          }
        }
      }

      // Render Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = i % 4 === 0 ? "#34D399" : "#10B981";
        ctx.globalAlpha = 0.22;
        ctx.fill();

        // Subtle node core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = "#F8FAFC";
        ctx.globalAlpha = 0.32;
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden select-none -z-10">
      {/* Layer 1: Very subtle dark grid (Z-index -30, opacity ~0.05) */}
      <div className="absolute inset-0 grid-bg opacity-[0.05] -z-30" />

      {/* Layer 2: Abstract Canvas AI Neural Network & Floating Data Particles (Z-index -20) */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full -z-20" />

      {/* Layer 3: Soft Emerald & Cyan Atmospheric Glows (Z-index -10) */}
      <div className="absolute -top-40 left-1/4 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-[#10B981]/[0.07] blur-[150px] animate-pulse-glow -z-10" />
      <div className="absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full bg-[#22D3EE]/[0.05] blur-[160px] animate-pulse-glow -z-10" />
      <div className="absolute bottom-10 left-1/3 h-[460px] w-[460px] rounded-full bg-[#34D399]/[0.06] blur-[140px] animate-pulse-glow -z-10" />
    </div>
  );
}

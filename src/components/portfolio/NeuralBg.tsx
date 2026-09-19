import { useEffect, useRef } from "react";

interface NodeDef {
  id: string;
  xRatio: number;
  yRatio: number;
  isMain?: boolean;
}

interface BranchDef {
  fromId: string;
  toId: string;
  cpRatioX?: number;
  cpRatioY?: number;
  isMain?: boolean;
}

interface Particle {
  branchIndex: number;
  progress: number;
  speed: number;
  isPrimary: boolean;
  color: string;
  size: number;
  trail: { x: number; y: number; opacity: number }[];
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

    // 1. Define Multiverse Network Topology (Proportional Ratios)
    const rawNodes: NodeDef[] = [
      // Central Timeline
      { id: "root", xRatio: 0.1, yRatio: 0.25, isMain: true },
      { id: "c1", xRatio: 0.25, yRatio: 0.35, isMain: true },
      { id: "c2", xRatio: 0.45, yRatio: 0.3, isMain: true },
      { id: "c3", xRatio: 0.65, yRatio: 0.4, isMain: true },
      { id: "c4", xRatio: 0.85, yRatio: 0.35, isMain: true },

      // Upper Multiverse Branch Family A
      { id: "a1", xRatio: 0.35, yRatio: 0.15 },
      { id: "a2", xRatio: 0.55, yRatio: 0.12 },
      { id: "a3", xRatio: 0.75, yRatio: 0.18 },

      // Lower Multiverse Branch Family B
      { id: "b1", xRatio: 0.3, yRatio: 0.6 },
      { id: "b2", xRatio: 0.5, yRatio: 0.72 },
      { id: "b3", xRatio: 0.7, yRatio: 0.65 },

      // Far Outer Branches C & D
      { id: "c1_sub", xRatio: 0.62, yRatio: 0.85 },
      { id: "c2_sub", xRatio: 0.82, yRatio: 0.82 },
      { id: "d1_sub", xRatio: 0.88, yRatio: 0.15 },
    ];

    const rawBranches: BranchDef[] = [
      // Central Main Path
      { fromId: "root", toId: "c1", isMain: true },
      { fromId: "c1", toId: "c2", isMain: true },
      { fromId: "c2", toId: "c3", isMain: true },
      { fromId: "c3", toId: "c4", isMain: true },

      // Major Branch A (Upper)
      { fromId: "c1", toId: "a1", cpRatioX: 0.28, cpRatioY: 0.2 },
      { fromId: "a1", toId: "a2" },
      { fromId: "a2", toId: "a3" },
      { fromId: "a3", toId: "c4", cpRatioX: 0.8, cpRatioY: 0.25 }, // Reconnects!
      { fromId: "a2", toId: "d1_sub" },

      // Major Branch B (Lower)
      { fromId: "c1", toId: "b1", cpRatioX: 0.26, cpRatioY: 0.5 },
      { fromId: "b1", toId: "b2" },
      { fromId: "b2", toId: "b3" },
      { fromId: "b3", toId: "c4", cpRatioX: 0.78, cpRatioY: 0.5 }, // Reconnects!

      // Sub-branches C
      { fromId: "b1", toId: "c1_sub" },
      { fromId: "c1_sub", toId: "c2_sub" },
    ];

    // Compute pixel coordinates
    let nodes = rawNodes.map((n) => ({
      ...n,
      x: n.xRatio * width,
      y: n.yRatio * height,
      glow: 0,
      radius: n.isMain ? 3.5 : 2.2,
    }));

    const getNode = (id: string) => nodes.find((n) => n.id === id)!;

    let branches = rawBranches.map((b) => {
      const from = getNode(b.fromId);
      const to = getNode(b.toId);
      const cpx = b.cpRatioX ? b.cpRatioX * width : (from.x + to.x) / 2;
      const cpy = b.cpRatioY ? b.cpRatioY * height : (from.y + to.y) / 2;
      return {
        ...b,
        from,
        to,
        cpx,
        cpy,
        activation: 0,
      };
    });

    // Helper: Quadratic Bezier Point Evaluation
    const getQuadraticPoint = (
      x0: number,
      y0: number,
      cpx: number,
      cpy: number,
      x1: number,
      y1: number,
      t: number,
    ) => {
      const inv = 1 - t;
      return {
        x: inv * inv * x0 + 2 * inv * t * cpx + t * t * x1,
        y: inv * inv * y0 + 2 * inv * t * cpy + t * t * y1,
      };
    };

    // Find outgoing branch indices for a given node
    const getOutgoingBranches = (nodeId: string) => {
      const idxs: number[] = [];
      branches.forEach((b, i) => {
        if (b.from.id === nodeId) idxs.push(i);
      });
      return idxs;
    };

    // Background Micro Floating Particles
    const bgParticleCount = width < 640 ? 12 : width < 1024 ? 22 : 36;
    let bgParticles = Array.from({ length: bgParticleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -0.1 - Math.random() * 0.15,
      radius: Math.random() * 1.4 + 0.6,
      alpha: 0.1 + Math.random() * 0.15,
      color: Math.random() > 0.8 ? "#22D3EE" : "#34D399",
    }));

    // Initialize Traveling Particles along Timelines
    const initialParticleCount = width < 640 ? 6 : width < 1024 ? 12 : 18;
    let particles: Particle[] = [];

    const spawnParticle = (branchIdx: number, isPrimary = false) => {
      particles.push({
        branchIndex: branchIdx,
        progress: 0,
        speed: (isPrimary ? 0.0035 : 0.0025) + Math.random() * 0.002,
        isPrimary,
        color: isPrimary ? "#34D399" : Math.random() > 0.7 ? "#22D3EE" : "#10B981",
        size: isPrimary ? 3.5 : 2,
        trail: [],
      });
    };

    // Seed initial primary particle on main branch
    spawnParticle(0, true);
    for (let i = 1; i < initialParticleCount; i++) {
      spawnParticle(i % branches.length, false);
    }

    // Periodic Timeline Activation Pulse Trigger
    let lastPulseTime = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      nodes = rawNodes.map((n) => ({
        ...n,
        x: n.xRatio * width,
        y: n.yRatio * height,
        glow: 0,
        radius: n.isMain ? 3.5 : 2.2,
      }));

      branches = rawBranches.map((b) => {
        const from = getNode(b.fromId);
        const to = getNode(b.toId);
        const cpx = b.cpRatioX ? b.cpRatioX * width : (from.x + to.x) / 2;
        const cpy = b.cpRatioY ? b.cpRatioY * height : (from.y + to.y) / 2;
        return {
          ...b,
          from,
          to,
          cpx,
          cpy,
          activation: 0,
        };
      });
    };

    window.addEventListener("resize", handleResize);

    // Main Render Loop
    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Trigger periodic activation on random major branch every ~3.5 seconds
      if (time - lastPulseTime > 3500 && !prefersReducedMotion) {
        lastPulseTime = time;
        const randomBranch = branches[Math.floor(Math.random() * branches.length)];
        randomBranch.activation = 1.0;
      }

      // 1. Render Background Micro Floating Particles
      for (let i = 0; i < bgParticles.length; i++) {
        const p = bgParticles[i];
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

      // 2. Render Timeline Branches (Lines & Bezier Curves)
      for (let i = 0; i < branches.length; i++) {
        const b = branches[i];

        // Base Line Style
        const baseAlpha = b.isMain
          ? width < 640
            ? 0.12
            : 0.18
          : width < 640
            ? 0.06
            : 0.11;

        ctx.beginPath();
        ctx.moveTo(b.from.x, b.from.y);
        ctx.quadraticCurveTo(b.cpx, b.cpy, b.to.x, b.to.y);
        ctx.strokeStyle = b.isMain ? "#34D399" : "#10B981";
        ctx.globalAlpha = baseAlpha;
        ctx.lineWidth = b.isMain ? 1.5 : 1;
        ctx.stroke();

        // Render Active Activation Pulse Wave along Branch
        if (b.activation > 0.01) {
          b.activation *= 0.965; // Decay
          const activeAlpha = b.activation * 0.35;
          ctx.beginPath();
          ctx.moveTo(b.from.x, b.from.y);
          ctx.quadraticCurveTo(b.cpx, b.cpy, b.to.x, b.to.y);
          ctx.strokeStyle = "#34D399";
          ctx.globalAlpha = activeAlpha;
          ctx.lineWidth = 2.2;
          ctx.stroke();

          // Pulse Traveling Point
          const pt = getQuadraticPoint(
            b.from.x,
            b.from.y,
            b.cpx,
            b.cpy,
            b.to.x,
            b.to.y,
            1 - b.activation,
          );
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#34D399";
          ctx.globalAlpha = activeAlpha * 2;
          ctx.fill();
        }
      }

      // 3. Render & Update Traveling Particles along Branches
      const nextParticles: Particle[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const branch = branches[p.branchIndex];

        if (!branch) continue;

        if (!prefersReducedMotion) {
          p.progress += p.speed;
        }

        const currPt = getQuadraticPoint(
          branch.from.x,
          branch.from.y,
          branch.cpx,
          branch.cpy,
          branch.to.x,
          branch.to.y,
          Math.min(p.progress, 1),
        );

        // Store trail history
        p.trail.unshift({ x: currPt.x, y: currPt.y, opacity: 0.6 });
        if (p.trail.length > 8) p.trail.pop();

        // Render Trail
        for (let tIdx = 0; tIdx < p.trail.length; tIdx++) {
          const tPt = p.trail[tIdx];
          tPt.opacity *= 0.8;
          ctx.beginPath();
          ctx.arc(tPt.x, tPt.y, Math.max(0.5, p.size * (1 - tIdx / 10)), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = tPt.opacity * 0.4;
          ctx.fill();
        }

        // Render Head Particle Point
        ctx.beginPath();
        ctx.arc(currPt.x, currPt.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.isPrimary ? 0.85 : 0.6;
        ctx.fill();

        // Primary particle outer glow halo
        if (p.isPrimary) {
          ctx.beginPath();
          ctx.arc(currPt.x, currPt.y, p.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "#34D399";
          ctx.globalAlpha = 0.2;
          ctx.fill();
        }

        // Particle Reached Branch Node -> Splitting & Reconnecting Logic
        if (p.progress >= 1) {
          branch.to.glow = 1.0; // Illuminate Node
          branch.activation = 0.8; // Illuminate Branch

          const outgoing = getOutgoingBranches(branch.to.id);

          if (outgoing.length > 0) {
            // Split into outgoing timeline branches
            outgoing.forEach((outIdx, oIdx) => {
              if (nextParticles.length < (width < 640 ? 14 : 32)) {
                nextParticles.push({
                  branchIndex: outIdx,
                  progress: 0,
                  speed: (oIdx === 0 && p.isPrimary ? 0.0035 : 0.0025) + Math.random() * 0.002,
                  isPrimary: p.isPrimary && oIdx === 0,
                  color: p.isPrimary && oIdx === 0 ? "#34D399" : Math.random() > 0.6 ? "#22D3EE" : "#10B981",
                  size: p.isPrimary && oIdx === 0 ? 3.5 : 2,
                  trail: [],
                });
              }
            });
          } else {
            // End of branch -> Re-spawn particle back at root main timeline
            if (nextParticles.length < (width < 640 ? 14 : 32)) {
              nextParticles.push({
                branchIndex: 0,
                progress: 0,
                speed: 0.0035 + Math.random() * 0.002,
                isPrimary: true,
                color: "#34D399",
                size: 3.5,
                trail: [],
              });
            }
          }
        } else {
          nextParticles.push(p);
        }
      }

      particles = nextParticles;

      // Ensure primary particle is always alive on central timeline
      if (!particles.some((p) => p.isPrimary)) {
        spawnParticle(0, true);
      }

      // 4. Render Nodes & Glowing Junction Points
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (n.glow > 0.01) {
          n.glow *= 0.95; // Decay node glow
        }

        // Base Node Outer Aura
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 1.8 + n.glow * 3, 0, Math.PI * 2);
        ctx.fillStyle = n.isMain ? "#34D399" : "#10B981";
        ctx.globalAlpha = 0.15 + n.glow * 0.35;
        ctx.fill();

        // Core Node Circle
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.glow > 0.3 ? "#F8FAFC" : n.isMain ? "#34D399" : "#10B981";
        ctx.globalAlpha = 0.35 + n.glow * 0.5;
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden select-none -z-10">
      {/* Layer 1: Faint Structural Grid (Z-index -30, opacity ~0.05) */}
      <div className="absolute inset-0 grid-bg opacity-[0.05] -z-30" />

      {/* Layer 2: Original AI Multiverse & Timeline Canvas Network (Z-index -20) */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full -z-20" />

      {/* Layer 3: Soft Emerald & Cyan Atmospheric Glows (Z-index -10) */}
      <div className="absolute -top-40 left-1/4 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-[#10B981]/[0.07] blur-[150px] animate-pulse-glow -z-10" />
      <div className="absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full bg-[#22D3EE]/[0.05] blur-[160px] animate-pulse-glow -z-10" />
      <div className="absolute bottom-10 left-1/3 h-[460px] w-[460px] rounded-full bg-[#34D399]/[0.06] blur-[140px] animate-pulse-glow -z-10" />
    </div>
  );
}

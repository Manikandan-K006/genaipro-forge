export function NeuralBg() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-neon-blue/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-neon-purple/20 blur-[130px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full bg-neon-cyan/10 blur-[120px] animate-pulse-glow" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.85 0.16 250)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.85 0.16 250)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {Array.from({ length: 28 }).map((_, i) => {
          const x = (i * 137) % 1600;
          const y = (i * 231) % 900;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={2}
              fill="url(#nodeGrad)"
              style={{ animation: `pulse-glow ${3 + (i % 4)}s ease-in-out ${i * 0.1}s infinite` }}
            />
          );
        })}
      </svg>
    </div>
  );
}

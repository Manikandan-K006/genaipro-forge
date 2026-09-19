export function NeuralBg() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#10B981]/[0.08] blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-[#34D399]/[0.06] blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full bg-[#10B981]/[0.05] blur-[130px] animate-pulse-glow" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#34D399" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
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


export const HeroBackground = () => {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* ================= LIGHT MODE ================= */}
      <div className="absolute inset-0 block dark:hidden">
        {/* Main center glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0.02) 0%, transparent 78%)",
          }}
        />

        {/* Top-right ambient glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(0,0,0,0.012) 0%, transparent 35%)",
          }}
        />

        {/* Bottom-left ambient glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, rgba(0,0,0,0.01) 0%, transparent 35%)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.04) 2.5px, transparent 2.5px),
              linear-gradient(to bottom, rgba(0,0,0,0.04) 2.5px, transparent 2.5px)
            `,
            backgroundSize: "64px 64px",
            backgroundPosition: "center center",
            maskImage:
              "radial-gradient(ellipse at center, black 45%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 45%, transparent 100%)",
          }}
        />
      </div>

      {/* ================= DARK MODE ================= */}
      <div className="absolute inset-0 hidden dark:block">
        {/* Main center glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 78%)",
          }}
        />

        {/* Top-right ambient glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.012) 0%, transparent 35%)",
          }}
        />

        {/* Bottom-left ambient glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.01) 0%, transparent 35%)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.03) 2.5px, transparent 2.5px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 2.5px, transparent 2.5px)
            `,
            backgroundSize: "64px 64px",
            backgroundPosition: "center center",
            maskImage:
              "radial-gradient(ellipse at center, black 45%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 45%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
};
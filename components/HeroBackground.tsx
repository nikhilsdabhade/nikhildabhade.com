import React from 'react';

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* Soft radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 60%)'
        }}
      />

      {/* Grid pattern with mask */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 2.5px, transparent 2.5px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 2.5px, transparent 2.5px)
          `,
          backgroundSize: '64px 64px',
          backgroundPosition: 'center center',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />
    </div>
  );
};

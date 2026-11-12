import React from 'react';

export const ThemeBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Subtle stationary Mesh pattern */}
      <div className="absolute inset-0 grid-pattern opacity-25" />
      
      {/* Calm Ambient Orbs (stationary, soft glow) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[160px] mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[220px] mix-blend-screen" />
      
      {/* Noise Texture for premium feel */}
      <div className="absolute inset-0 noise opacity-40" />
    </div>
  );
};

import React from 'react';

export const ThemeBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Subtle Mesh pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 animate-[mesh-shift_20s_ease-in-out_infinite]" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-[float-orb-1_15s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] mix-blend-screen animate-[float-orb-2_18s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[200px] mix-blend-screen animate-[float-orb-3_20s_ease-in-out_infinite]" />
      
      {/* Noise Texture for premium feel */}
      <div className="absolute inset-0 noise opacity-50" />
      
      {/* Subtle scanlines */}
      <div className="absolute inset-0 scanline opacity-20" />
    </div>
  );
};

import React, { useEffect, useRef } from 'react';

/**
 * A beautiful, animated particle network that visually represents 
 * "connecting people across the globe" in Emerald & Teal theme.
 */
const CanvasNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number, y: number, vx: number, vy: number, radius: number, color: string }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const colors = [
      'rgba(16, 185, 129, 0.8)',  // Emerald Green
      'rgba(20, 184, 166, 0.8)',  // Teal
      'rgba(52, 211, 153, 0.8)'   // Mint Accent
    ];

    const initParticles = () => {
      particles = [];
      const numParticles = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 9000), 150); 
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9,
          radius: Math.random() * 2 + 0.8,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update & draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connecting lines
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          if (dist < maxDist) {
            const opacity = 0.4 * (1 - dist / maxDist);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80 mix-blend-screen" />;
};

interface GlobalBackgroundProps {
  variant?: 'floating-orbs' | 'aurora' | 'particles' | 'mesh' | 'waves' | 'bubbles' | 'default';
}

export const GlobalBackground: React.FC<GlobalBackgroundProps> = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[10]">
      {/* Background Animated Gradient Mesh & Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[140px] mix-blend-screen animate-pulse" style={{ animation: 'float-orb-1 18s ease-in-out infinite' }} />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-secondary/25 rounded-full blur-[130px] mix-blend-screen" style={{ animation: 'float-orb-2 22s ease-in-out infinite' }} />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen" style={{ animation: 'float-orb-3 16s ease-in-out infinite' }} />

      {/* Particle Canvas Network in Emerald & Teal */}
      <CanvasNetwork />
    </div>
  );
};

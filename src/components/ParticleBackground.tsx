import React, { useEffect, useRef } from 'react';
export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let particles: Particle[] = [];
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      baseX: number;
      baseY: number;
      density: number;
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.density = Math.random() * 30 + 1;
        // Cyberpunk colors: Cyan, Magenta, White
        const colors = ['0, 255, 255', '255, 0, 255', '255, 255, 255'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        // Mouse interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 150;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;
        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to natural movement
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
          // Continuous drift
          this.baseX += this.speedX;
          this.baseY += this.speedY;
          this.x += this.speedX;
          this.y += this.speedY;
        }
        // Wrap around screen
        if (this.baseX > canvas!.width) {
          this.baseX = 0;
          this.x = 0;
        }
        if (this.baseX < 0) {
          this.baseX = canvas!.width;
          this.x = canvas!.width;
        }
        if (this.baseY > canvas!.height) {
          this.baseY = 0;
          this.y = 0;
        }
        if (this.baseY < 0) {
          this.baseY = canvas!.height;
          this.y = canvas!.height;
        }
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(${this.color}, 0.8)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const init = () => {
      particles = [];
      const particleCount = Math.min(window.innerWidth * 0.15, 200); // Increased density
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            const opacityValue = 1 - distance / 120;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };
    init();
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40 bg-gradient-to-b from-black via-[#050505] to-[#0a0a0a]" />);


}
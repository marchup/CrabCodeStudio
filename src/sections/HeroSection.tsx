import { useEffect, useRef } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import CrabLogo from '../components/CrabLogo'; // IMPORTAMOS EL COMPONENTE

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = ['#f97316', '#dc2626', '#fb923c', '#fca5a5', '#ff8c42', '#e65c1e'];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() > 0.6 ? 4 : 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    let animationId: number;
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      if (frameCount % 2 === 0) {
        ctx.fillStyle = 'rgba(17, 20, 28, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;

          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.alpha;
          ctx.fillRect(
            Math.floor(particle.x),
            Math.floor(particle.y),
            particle.size,
            particle.size
          );
        });
        ctx.globalAlpha = 1;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToGames = () => {
    const element = document.querySelector('#juegos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(180deg, #0d0f15 0%, #11141c 50%, #0d0f15 100%)' }}
      />

      <div 
        className="absolute inset-0 z-[1] opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-[2]" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-16">
        {/* Logo - AHORA USA EL COMPONENTE CRABLOGO CON TODAS SUS ANIMACIONES */}
        <div className="mb-6 animate-fade-in flex justify-center">
          <CrabLogo size={180} animated />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span className="text-sm text-orange-300 font-medium">Indie Game Studio</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">CrabCode</span>{' '}
          <span className="text-gradient-games animate-glitch inline-block">
            Games
          </span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-light">
          historias y aventuras para jugar
        </p>

        <p className="text-base text-gray-500 max-w-xl mx-auto mb-10">
          Soy un desarrollador indie de Argentina. Creo juegos con alma, 
          donde cada pixel cuenta una historia.
        </p>

        <button
          onClick={scrollToGames}
          className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 glow-orange"
        >
          <span className="relative z-10 flex items-center gap-2">
            Descubre San José
          </span>
        </button>

        <div className="absolute -left-32 top-1/3 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -right-32 bottom-1/3 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button onClick={scrollToGames} className="text-orange-500/50 hover:text-orange-400 transition-colors">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

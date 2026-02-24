import { useState, useEffect } from 'react';

interface CrabLogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

const CrabLogo = ({ size = 100, animated = true, className = '' }: CrabLogoProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!animated) return;

    // Efecto glitch aleatorio cada 3-5 segundos
    const glitchInterval = setInterval(() => {
      // Activar glitch
      setIsGlitching(true);
      
      // Desactivar después de 200ms
      setTimeout(() => setIsGlitching(false), 200);
      
      // Mini glitches adicionales durante el efecto principal
      if (Math.random() > 0.7) {
        setTimeout(() => setIsGlitching(true), 50);
        setTimeout(() => setIsGlitching(false), 100);
        setTimeout(() => setIsGlitching(true), 120);
        setTimeout(() => setIsGlitching(false), 180);
      }
    }, Math.random() * 2000 + 3000); // Entre 3 y 5 segundos

    return () => clearInterval(glitchInterval);
  }, [animated]);

  return (
    <div 
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Imagen principal del cangrejo */}
      <img
        src="/crab-mascot.png"
        alt="CrabCode Mascot"
        className={`w-full h-full object-contain transition-all duration-100 ${
          isGlitching ? 'opacity-90' : 'opacity-100'
        }`}
        style={{
          filter: isGlitching ? 'url(#glitch)' : 'none',
        }}
      />

      {/* Capas de glitch (solo visibles durante el efecto) */}
      {isGlitching && (
        <>
          {/* Capa roja desplazada */}
          <img
            src="/crab-mascot.png"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
            style={{
              mixBlendMode: 'multiply',
              opacity: 0.3,
              filter: 'brightness(1.5) sepia(1) hue-rotate(-50deg) saturate(10)',
              transform: 'translate(3px, -2px)',
              animation: 'glitchSlide 0.1s infinite steps(2)',
            }}
            aria-hidden="true"
          />
          
          {/* Capa azul desplazada */}
          <img
            src="/crab-mascot.png"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
            style={{
              mixBlendMode: 'multiply',
              opacity: 0.3,
              filter: 'brightness(1.5) sepia(1) hue-rotate(150deg) saturate(10)',
              transform: 'translate(-3px, 2px)',
              animation: 'glitchSlide 0.15s infinite steps(2) reverse',
            }}
            aria-hidden="true"
          />

          {/* Ruido blanco */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.2) 2px, transparent 4px)',
              mixBlendMode: 'overlay',
              animation: 'glitchNoise 0.2s infinite steps(3)',
            }}
          />
        </>
      )}

      {/* SVG Filters para efectos de glitch */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="glitch">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              result="base"
            />
            <feOffset in="SourceGraphic" dx="2" dy="-1" result="redOffset">
              <animate
                attributeName="dx"
                values="2;-2;3;-1;0"
                dur="0.2s"
                repeatCount="indefinite"
              />
            </feOffset>
            <feColorMatrix
              in="redOffset"
              type="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="redChannel"
            />
            <feOffset in="SourceGraphic" dx="-2" dy="1" result="blueOffset">
              <animate
                attributeName="dx"
                values="-2;2;-3;1;0"
                dur="0.2s"
                repeatCount="indefinite"
              />
            </feOffset>
            <feColorMatrix
              in="blueOffset"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
              result="blueChannel"
            />
            <feBlend in="redChannel" in2="blueChannel" mode="screen" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default CrabLogo;

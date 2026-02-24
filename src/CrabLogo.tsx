import { useState, useEffect } from 'react';

interface CrabLogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

const CrabLogo = ({ size = 100, animated = true, className = '' }: CrabLogoProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [isPoweringUp, setIsPoweringUp] = useState(false);

  useEffect(() => {
    if (!animated) return;

    // Efecto glitch aleatorio cada 3-5 segundos
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
      
      if (Math.random() > 0.7) {
        setTimeout(() => setIsGlitching(true), 50);
        setTimeout(() => setIsGlitching(false), 100);
        setTimeout(() => setIsGlitching(true), 120);
        setTimeout(() => setIsGlitching(false), 180);
      }
    }, Math.random() * 2000 + 3000);

    return () => clearInterval(glitchInterval);
  }, [animated]);

  const handleClick = () => {
    if (!animated) return;
    
    setIsPoweringUp(true);
    setIsGlitching(true);
    
    setTimeout(() => setIsGlitching(false), 300);
    setTimeout(() => setIsPoweringUp(false), 500);
  };

  return (
    <div 
      className={`relative inline-block cursor-pointer ${className} ${
        isPoweringUp ? 'crab-logo-click' : ''
      }`}
      style={{ width: size, height: size }}
      onClick={handleClick}
    >
      {/* Imagen principal del cangrejo - CON FILTRO PARA ELIMINAR FONDO NEGRO */}
      <img
        src="/crab-mascot.png"
        alt="CrabCode Mascot"
        className={`w-full h-full object-contain relative z-10 ${
          isGlitching ? 'opacity-90' : 'opacity-100'
        }`}
        style={{
          // IMPORTANTE: Estos filtros eliminan el fondo negro
          filter: isGlitching 
            ? 'brightness(1.2) contrast(1.2) saturate(1.5) url(#glitch)' 
            : 'brightness(1.1) contrast(1.1)',
          mixBlendMode: 'screen', // Esto hace mágica con fondos negros
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
              mixBlendMode: 'screen',
              opacity: 0.4,
              filter: 'brightness(1.5) sepia(1) hue-rotate(-50deg) saturate(10)',
              transform: 'translate(4px, -2px)',
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
              mixBlendMode: 'screen',
              opacity: 0.4,
              filter: 'brightness(1.5) sepia(1) hue-rotate(150deg) saturate(10)',
              transform: 'translate(-4px, 2px)',
              animation: 'glitchSlide 0.15s infinite steps(2) reverse',
            }}
            aria-hidden="true"
          />

          {/* Ruido blanco */}
          <div 
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.25) 2px, transparent 4px)',
              mixBlendMode: 'overlay',
              animation: 'glitchNoise 0.1s infinite steps(3)',
            }}
          />

          {/* Líneas de scan horizontales */}
          <div 
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background: 'repeating-linear-gradient(180deg, transparent, transparent 2px, rgba(0,0,0,0.3) 3px, transparent 4px)',
              opacity: 0.2,
              animation: 'scanlines 0.2s infinite linear',
            }}
          />
        </>
      )}

      {/* Scanline fijo (siempre visible, sutil) */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 opacity-10"
        style={{
          background: 'repeating-linear-gradient(180deg, transparent, transparent 2px, rgba(255,100,0,0.2) 3px, transparent 4px)',
        }}
      />

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

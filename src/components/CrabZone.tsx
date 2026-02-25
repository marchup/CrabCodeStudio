import { useEffect, useRef, useState } from 'react';

const CrabZone = () => {
  const [frame, setFrame] = useState(0);
  const [position, setPosition] = useState(50);
  const [direction, setDirection] = useState(1);
  const [targetPosition, setTargetPosition] = useState(100);
  const [isMoving, setIsMoving] = useState(true);
  const zoneRef = useRef<HTMLDivElement>(null);
  
  // Partículas - CON CEROS Y UNOS
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    value: string;
  }>>([]);

  // Animación del cangrejo (15 frames)
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 15);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Movimiento del cangrejo
  useEffect(() => {
    const zoneWidth = zoneRef.current?.clientWidth || 800;
    const crabWidth = 80;
    const maxPosition = zoneWidth - crabWidth;
    
    const targetInterval = setInterval(() => {
      const minMove = 80;
      let newTarget;
      
      do {
        newTarget = Math.random() * maxPosition;
      } while (Math.abs(newTarget - position) < minMove && maxPosition > minMove * 2);
      
      setTargetPosition(newTarget);
      setIsMoving(true);
      setDirection(newTarget > position ? 1 : -1);
    }, Math.random() * 3000 + 3000);

    return () => clearInterval(targetInterval);
  }, [position]);

  // Movimiento suave hacia el objetivo
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition((prev) => {
        const zoneWidth = zoneRef.current?.clientWidth || 800;
        const crabWidth = 80;
        const maxPosition = zoneWidth - crabWidth;
        
        const distance = targetPosition - prev;
        
        if (Math.abs(distance) < 5) {
          setIsMoving(false);
          return prev;
        }
        
        setIsMoving(true);
        
        const step = 1.5;
        let newPos = prev + (distance > 0 ? step : -step);
        
        if (newPos < 0) {
          newPos = 0;
          setTargetPosition(Math.random() * maxPosition);
        }
        if (newPos > maxPosition) {
          newPos = maxPosition;
          setTargetPosition(Math.random() * maxPosition);
        }
        
        if (newPos > prev) setDirection(1);
        if (newPos < prev) setDirection(-1);
        
        return newPos;
      });
    }, 80);

    return () => clearInterval(moveInterval);
  }, [targetPosition]);

  // Generar partículas
  useEffect(() => {
    const generateParticle = () => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: Math.random() * (zoneRef.current?.clientWidth || 800),
        y: 40 + Math.random() * 40,
        size: Math.random() * 14 + 10,
        speed: Math.random() * 2 + 0.5,
        value: Math.random() > 0.5 ? '0' : '1',
      };
      setParticles((prev) => [...prev, newParticle]);
    };

    const interval = setInterval(generateParticle, 400);
    return () => clearInterval(interval);
  }, []);

  // Animar partículas
  useEffect(() => {
    const animate = setInterval(() => {
      setParticles((prev) => 
        prev
          .map((p) => ({
            ...p,
            y: p.y - p.speed * 0.4,
            x: p.x + Math.sin(p.y * 0.1) * 0.5,
          }))
          .filter((p) => p.y > -30)
      );
    }, 50);
    return () => clearInterval(animate);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent py-8 overflow-hidden border-t border-orange-500/20">
      <div 
        ref={zoneRef}
        className="relative h-28 mx-auto max-w-5xl px-4"
      >
        {/* Partículas - 0s y 1s (arriba) */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute text-orange-400/60 select-none pointer-events-none font-mono font-bold"
            style={{
              left: p.x,
              top: p.y,
              fontSize: p.size,
              transform: 'translate(-50%, -50%)',
              filter: 'drop-shadow(0 0 4px #f97316)',
              opacity: 0.8 + Math.sin(p.y * 0.1) * 0.2,
              textShadow: '0 0 8px rgba(249,115,22,0.5)',
              zIndex: 10, // Partículas arriba
            }}
          >
            {p.value}
          </div>
        ))}

        {/* Cangrejo cazador (medio) */}
        <div
          className="absolute bottom-0 transition-all duration-100 ease-linear"
          style={{ 
            left: position,
            transition: isMoving ? 'left 80ms linear' : 'none',
            zIndex: 20, // Cangrejo encima de partículas
          }}
        >
          <img
            src={`/${frame}.gif`}
            alt="Cangrejo cazando"
            className="w-20 h-20 object-contain drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]"
            style={{
              transform: direction === 1 ? 'scaleX(1)' : 'scaleX(-1)',
            }}
          />
          
          {/* Brillo cuando "caza" */}
          {Math.random() > 0.98 && (
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full blur-sm animate-ping" />
          )}
        </div>

        {/* Suelo decorativo */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      </div>

      {/* Texto sutil - AHORA ABAJO DEL CANGREJO */}
      <div className="text-center mt-2 text-xs text-orange-500/30 font-mono">
        🦀 ~ Crab is working ~ 🦀
      </div>
    </div>
  );
};

export default CrabZone;

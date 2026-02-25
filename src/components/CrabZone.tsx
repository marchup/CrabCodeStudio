import { useEffect, useRef, useState } from 'react';

const CrabZone = () => {
  const [frame, setFrame] = useState(0);
  const [position, setPosition] = useState(50);
  const [direction, setDirection] = useState(1);
  const [targetPosition, setTargetPosition] = useState(100); // posición objetivo para movimiento aleatorio
  const zoneRef = useRef<HTMLDivElement>(null);
  
  // Partículas
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    type: string;
  }>>([]);

  // Animación del cangrejo (15 frames) - MÁS RÁPIDA
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 15);
    }, 60); // Antes 100ms, ahora 60ms (más rápido)
    return () => clearInterval(interval);
  }, []);

  // Movimiento del cangrejo - MÁS ALEATORIO
  useEffect(() => {
    const zoneWidth = zoneRef.current?.clientWidth || 800;
    const crabWidth = 80;
    const maxPosition = zoneWidth - crabWidth;
    
    // Generar nueva posición objetivo aleatoria cada 2-4 segundos
    const targetInterval = setInterval(() => {
      const newTarget = Math.random() * maxPosition;
      setTargetPosition(newTarget);
      
      // Determinar dirección basada en el objetivo
      setDirection(newTarget > position ? 1 : -1);
    }, Math.random() * 2000 + 2000); // Entre 2 y 4 segundos

    return () => clearInterval(targetInterval);
  }, [position]);

  // Movimiento suave hacia el objetivo
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition((prev) => {
        const zoneWidth = zoneRef.current?.clientWidth || 800;
        const crabWidth = 80;
        const maxPosition = zoneWidth - crabWidth;
        
        // Calcular diferencia con el objetivo
        const diff = targetPosition - prev;
        
        // Movimiento más orgánico: a veces se queda quieto, a veces avanza más rápido
        const step = (Math.random() * 2 + 1) * (diff > 0 ? 1 : -1);
        let newPos = prev + step;
        
        // Limitar dentro de los bordes
        if (newPos < 0) {
          newPos = 0;
          setTargetPosition(Math.random() * maxPosition); // nuevo objetivo si llega al borde
        }
        if (newPos > maxPosition) {
          newPos = maxPosition;
          setTargetPosition(Math.random() * maxPosition); // nuevo objetivo si llega al borde
        }
        
        // Actualizar dirección basada en el movimiento real
        if (newPos > prev) setDirection(1);
        if (newPos < prev) setDirection(-1);
        
        return newPos;
      });
    }, 80); // Movimiento cada 80ms

    return () => clearInterval(moveInterval);
  }, [targetPosition]);

  // Generar partículas (presas para el cangrejo)
  useEffect(() => {
    const generateParticle = () => {
      const types = ['✦', '✧', '🌟', '💫', '·', '∘', '⚬', '○'];
      const newParticle = {
        id: Date.now() + Math.random(),
        x: Math.random() * (zoneRef.current?.clientWidth || 800),
        y: 40 + Math.random() * 40,
        size: Math.random() * 10 + 4,
        speed: Math.random() * 2 + 0.5,
        type: types[Math.floor(Math.random() * types.length)],
      };
      setParticles((prev) => [...prev, newParticle]);
    };

    const interval = setInterval(generateParticle, 500); // Más partículas
    return () => clearInterval(interval);
  }, []);

  // Animar partículas (flotan hacia arriba)
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
    <div className="relative w-full bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent py-6 overflow-hidden border-t border-orange-500/20">
      <div 
        ref={zoneRef}
        className="relative h-28 mx-auto max-w-5xl px-4"
      >
        {/* Texto sutil "zona de caza" - AHORA "Crab is working" */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs text-orange-500/30 font-mono">
        🦀 ~ Crab is working ~ 🦀
    </div>

        {/* Partículas (presas) */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute text-orange-400/60 select-none pointer-events-none"
            style={{
              left: p.x,
              top: p.y,
              fontSize: p.size,
              transform: 'translate(-50%, -50%)',
              filter: 'drop-shadow(0 0 3px #f97316)',
              opacity: 0.7 + Math.sin(p.y * 0.1) * 0.2,
            }}
          >
            {p.type}
          </div>
        ))}

        {/* Cangrejo cazador */}
        <div
          className="absolute bottom-0 transition-all duration-100 ease-out"
          style={{ left: position }}
        >
          <img
            src={`/${frame}.gif`}
            alt="Cangrejo cazando"
            className="w-20 h-20 object-contain drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]"
            style={{
              transform: direction === 1 ? 'scaleX(1)' : 'scaleX(-1)',
            }}
          />
          
          {/* Pequeño brillo cuando "caza" */}
          {Math.random() > 0.98 && (
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full blur-sm animate-ping" />
          )}
        </div>

        {/* Suelo decorativo */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      </div>
    </div>
  );
};

export default CrabZone;

import { useState, useEffect } from 'react';
import CrabLogo from '../components/CrabLogo';

const AboutSection = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [blendProgress, setBlendProgress] = useState(1);
  const [direction, setDirection] = useState(-0.2);
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlendProgress((prev) => {
        const newProgress = prev + direction * 0.02;
        
        if (newProgress >= 1) {
          setDirection(-0.2);
          return 1;
        }
        if (newProgress <= 0) {
          setDirection(0.5);
          // Activar destello cuando aparece la foto real
          setIsFlashing(true);
          setTimeout(() => setIsFlashing(false), 150);
          return 0;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <section id="sobre" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/30 to-background" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
            Sobre mí
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Detrás del código</span>
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Columna izquierda - Foto con blend y destello */}
          <div className="lg:w-1/3 flex flex-col items-center">
            {/* Contenedor de la foto con efecto */}
            <div className="relative mb-6 group w-64 h-64">
              {/* Foto real */}
              <img 
                src="/mi-foto-real.png"
                alt="Martín - CrabCode Games (real)"
                className="absolute inset-0 w-full h-full rounded-2xl object-cover border-2 border-orange-500/30 transition-all"
                style={{
                  opacity: 1 - blendProgress,
                }}
              />
              
              {/* Versión pintura */}
              <img 
                src="/mi-foto-pintura.png"
                alt="Martín - CrabCode Games (pintura)"
                className="absolute inset-0 w-full h-full rounded-2xl object-cover border-2 border-orange-500/30 transition-all"
                style={{ 
                  opacity: blendProgress,
                }}
              />

              {/* EFECTO DESTELLO - capa blanca que aparece y desaparece */}
              <div 
                className={`absolute inset-0 rounded-2xl bg-white transition-opacity duration-150 ${
                  isFlashing ? 'opacity-40' : 'opacity-0'
                }`}
                style={{
                  mixBlendMode: 'overlay',
                  pointerEvents: 'none',
                }}
              />

              {/* Efecto glow base */}
              <div className="absolute inset-0 rounded-2xl bg-orange-500/10 blur-xl -z-10 group-hover:bg-orange-500/20 transition-all" />
            </div>

            {/* Logo con tooltip */}
            <div 
              className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(!showTooltip)}
            >
              <CrabLogo size={80} animated />
              
              {/* Tooltip */}
              <div 
                className={`absolute -top-24 left-1/2 -translate-x-1/2 px-4 py-3 bg-gray-800 rounded-lg border border-orange-500/30 whitespace-nowrap transition-all duration-300 ${
                  showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <p className="text-sm text-gray-300">
                  🦀 ¿Caparazón de cangrejo? La necesitás cuando sos un dev en solitario.
                </p>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 border-r border-b border-orange-500/30 rotate-45" />
              </div>
            </div>

            {/* El origen de San José */}
            <div className="mt-4 text-center">
              <p className="text-sm text-orange-400 font-mono leading-relaxed max-w-[240px] mx-auto">
               La isla de San José nació en esta playa
              </p>
                <p className="text-xs text-gray-300 mt-2 font-medium">
                Con ella, la aventura empezó antes del código
              </p>
            </div>
            
          </div>

          {/* Columna derecha - Texto */}
          <div className="lg:w-2/3">
            <div className="space-y-6 max-w-3xl mx-auto text-left">
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy desarrollador indie en Argentina y amo los videojuegos como una forma de contar y, 
                sobre todo, <span className="text-orange-400 font-medium">vivir historias</span>.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                Actualmente estoy desarrollando <span className="text-white font-medium">San José – Echoes from the Abyss</span>, 
                un proyecto profundamente inspirado en mi relación con el mar. Tuve la experiencia de navegar en el Atlántico Sur 
                y trabajar a bordo de buques pesqueros, y muchas de esas vivencias reales hoy forman parte del juego.
              </p>

              <p className="text-gray-400 leading-relaxed">
                San José nace de mi deseo de transmitir esas experiencias: el amor y el respeto por el mar, 
                y las emociones que surgen al enfrentarse a su inmensidad. En ese ambiente inhóspito las 
                relaciones humanas se vuelven intensas, y se forjan lazos tan fuertes como las personas que 
                viven del duro trabajo en el mar.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Este es mi primer desarrollo comercial. Tiempo atrás creé otros juegos que llegaron a su público 
                en exposiciones vinculadas a la ciencia y al mar, y ver la emoción que despertaban en los jugadores 
                fue lo que me impulsó a dar el paso y crear mi propio estudio.
              </p>

              <p className="text-gray-300 leading-relaxed pt-4 text-center text-lg italic">
                "San José reúne muchas de mis vivencias y sueños. Espero que puedas acompañar su desarrollo 
                y disfrutar el viaje tanto como yo."
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-12 pt-8 mt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">🇦🇷</div>
                <div className="text-sm text-gray-500 mt-1">Argentina</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">🎮</div>
                <div className="text-sm text-gray-500 mt-1">Indie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">🌊</div>
                <div className="text-sm text-gray-500 mt-1">Mar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

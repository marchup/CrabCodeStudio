import { useState } from 'react';
import CrabLogo from '../components/CrabLogo';

const AboutSection = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section id="sobre" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/30 to-background" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="text-center space-y-8">
          {/* Logo with tooltip */}
          <div className="flex justify-center mb-8">
            <div 
              className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(!showTooltip)}
            >
              <CrabLogo size={100} animated />
              
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
          </div>

          {/* Story - NUEVOS TEXTOS */}
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
          <div className="flex justify-center gap-12 pt-8">
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
    </section>
  );
};

export default AboutSection;

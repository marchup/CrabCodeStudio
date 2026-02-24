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
            Sobre Nosotros
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Un estudio con <span className="text-gradient">alma</span>
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
                className={`absolute -top-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-800 rounded-lg border border-orange-500/30 whitespace-nowrap transition-all duration-300 ${
                  showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <p className="text-sm text-gray-300">
                  🦀 Como los cangrejos, codeamos de lado,
                  <br />
                  explorando caminos diferentes
                </p>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 border-r border-b border-orange-500/30 rotate-45" />
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              Somos un estudio indie de Argentina. Nacimos de la pasión por contar historias 
              a través de videojuegos.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Creemos que los mejores juegos son los que te hacen sentir algo. 
              Los que recordás años después. Ese es nuestro objetivo con cada proyecto.
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-12 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">🇦🇷</div>
              <div className="text-sm text-gray-500 mt-1">Argentina</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">🎮</div>
              <div className="text-sm text-gray-500 mt-1">Indie</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">❤️</div>
              <div className="text-sm text-gray-500 mt-1">Pasión</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

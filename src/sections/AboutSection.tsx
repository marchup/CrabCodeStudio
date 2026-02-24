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
              
              {/* Tooltip - NUEVA FRASE */}
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

          {/* Story - TEXTOS ACTUALIZADOS */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              Soy desarrollador indie de Argentina, y mi pasión es contar historias 
              a través de videojuegos.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Creo juegos que te hacen sentir algo real: momentos que recordás, 
              mundos que te envuelven, personajes que laten. Cada proyecto que creo 
              busca dejar esa huella.
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

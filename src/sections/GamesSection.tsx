import { ExternalLink, Youtube, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Diálogo personalizado
const SimpleDialog = ({ 
  isOpen, 
  onClose, 
  children 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md">
        {children}
      </div>
    </>
  );
};

const GameSection = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  // ✅ AHORA USA TUS IMÁGENES REALES
  const screenshots = [
    'public/sanjose-screenshot.png',
    'public/sanjose-screenshot2.png',
    // Cuando agregues más, simplemente agregalas acá:
    'public/sanjose-screenshot3.png',
    'public/sanjose-screenshot4.png',
    'public/sanjose-screenshot5.png',
    'public/sanjose-screenshot6.png',
  ];

  // Carrusel automático cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  const nextSlide = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="juegos" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/20 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
            San José
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Echoes from the Abyss</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Un mar oscuro, un padre desaparecido, un misterio que desafía el tiempo.
          </p>
        </div>

        {/* Contenedor principal - SOLO EL CARRUSEL */}
        <div className="max-w-4xl mx-auto">
          {/* Carrusel de capturas (SIN TEXTO NI BOTONES DENTRO) */}
          <div className="group relative mb-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 group-hover:border-orange-500/50 transition-all">
              
              {/* Imágenes del carrusel */}
              <div className="relative w-full h-full">
                {screenshots.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`San José - Echoes from the Abyss ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentScreenshot ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              {/* Gradiente superpuesto (sutil, solo para que se vean bien los controles) */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />

              {/* Controles del carrusel */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-500/80"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-500/80"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicadores de posición */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScreenshot(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentScreenshot 
                        ? 'w-6 bg-orange-500' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Badges superiores (únicos elementos dentro de la imagen) */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs font-medium">
                  En Desarrollo
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-700/80 text-gray-300 text-xs">
                  PC
                </span>
              </div>
            </div>
          </div>

          {/* TEXTO Y BOTONES - FUERA DE LA IMAGEN */}
          <div className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-8 hover:border-orange-500/30 transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">San José</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Echoes from the Abyss. Una aventura que te llevará a explorar mundos 
                  llenos de misterio y emoción. Un padre desaparecido, un secreto que 
                  espera ser descubierto en las profundidades.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowDialog(true)}
                  className="px-5 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <ExternalLink className="w-5 h-5" />
                  Ver más
                </button>
                <a
                  href="https://youtube.com/@sanjosegame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-red-600/90 hover:bg-red-500 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
                <a
                  href="https://instagram.com/sanjosegame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            {
              title: 'Narrativa',
              desc: 'Historias que te atrapan desde el primer minuto, donde tus decisiones importan y cada descubrimiento deja huella.',
            },
            {
              title: 'Gameplay',
              desc: 'Mecánicas divertidas y adictivas.',
            },
            {
              title: 'Arte',
              desc: 'Estilo visual único y memorable.',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-gray-800/30 border border-gray-700/30 hover:border-orange-500/30 hover:bg-gray-800/50 transition-all"
            >
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diálogo personalizado */}
      <SimpleDialog isOpen={showDialog} onClose={() => setShowDialog(false)}>
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-white">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-gradient mb-2">
              San José está en desarrollo
            </h3>
            <p className="text-gray-400">
              Estoy trabajando día a día para traerte una experiencia increíble.
              <br /><br />
              Seguime en YouTube e Instagram para ver el progreso, trailers y behind-the-scenes.
              <br /><br />
              ¡Gracias por tu apoyo!
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="https://youtube.com/@sanjosegame"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-3 bg-red-600 hover:bg-red-500 rounded-lg text-white font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Youtube className="w-5 h-5" />
              Ver en YouTube
            </a>
            <a
              href="https://instagram.com/sanjosegame"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 rounded-lg text-white font-medium transition-opacity flex items-center justify-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Seguir en Instagram
            </a>
            <button
              onClick={() => setShowDialog(false)}
              className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </SimpleDialog>
    </section>
  );
};

export default GameSection;

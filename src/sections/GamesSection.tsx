import { ExternalLink, Youtube, Instagram } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const GamesSection = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <section id="juegos" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/20 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
            Nuestros Juegos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Experiencias para <span className="text-gradient">jugar</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Cada proyecto es una nueva aventura. Descubre lo que estamos creando.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* San José - Main Game */}
          <div className="md:col-span-2 lg:col-span-2 group">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 group-hover:border-orange-500/50 transition-all">
              {/* Game Screenshot */}
              <img 
                src="/sanjose-screenshot.png" 
                alt="San José - Echoes from the Abyss"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs font-medium">
                    En Desarrollo
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-700/80 text-gray-300 text-xs">
                    PC
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">San José</h3>
                <p className="text-gray-200 mb-4 max-w-lg text-shadow">
                  Echoes from the Abyss. Una aventura que te llevará a explorar mundos llenos de misterio y emoción.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setShowDialog(true)}
                    className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver más
                  </button>
                  <a
                    href="https://youtube.com/@sanjosegame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-red-600/90 hover:bg-red-500 rounded-lg text-white font-medium transition-all flex items-center gap-2"
                  >
                    <Youtube className="w-4 h-4" />
                    YouTube
                  </a>
                  <a
                    href="https://instagram.com/sanjosegame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 rounded-lg text-white font-medium transition-all flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="group">
            <div className="relative h-full min-h-[280px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 border-dashed group-hover:border-orange-500/30 transition-all flex flex-col items-center justify-center p-6">
              <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-orange-500/10 transition-colors">
                <span className="text-3xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold text-gray-400 mb-2 group-hover:text-white transition-colors">
                Próximo Proyecto
              </h3>
              <p className="text-gray-500 text-center text-sm">
                Tenemos más ideas en el horno. 
                ¡Mantente atento!
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {[
            {
              title: 'Narrativa',
              desc: 'Historias que te atrapan desde el primer minuto.',
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

      {/* Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gradient">
              San José está en desarrollo
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Estamos trabajando día a día para traerte una experiencia increíble.
              <br /><br />
              Seguinos en YouTube e Instagram para ver el progreso, trailers y behind-the-scenes.
              <br /><br />
              ¡Gracias por tu apoyo!
            </DialogDescription>
          </DialogHeader>
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
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GamesSection;

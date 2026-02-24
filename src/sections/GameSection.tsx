import { useState } from 'react';
import { Gamepad2, Monitor, Cpu, Calendar, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const GameSection = () => {
  const [showDialog, setShowDialog] = useState(false);

  const features = [
    {
      icon: Gamepad2,
      title: 'Gameplay Inmersivo',
      description: 'Mecánicas diseñadas para mantenerte enganchado desde el primer momento.',
    },
    {
      icon: Monitor,
      title: 'Visual Único',
      description: 'Estilo artístico distintivo que da vida al mundo de San José.',
    },
    {
      icon: Cpu,
      title: 'Tecnología Moderna',
      description: 'Desarrollado con las últimas herramientas y mejores prácticas.',
    },
  ];

  return (
    <section id="game" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/30 to-background" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
            En Desarrollo
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">San José</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Nuestro primer proyecto como estudio. Una experiencia que estamos construyendo 
            con dedicación y atención a cada detalle.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Game Visual */}
          <div className="relative group">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 group-hover:border-orange-500/50 transition-all">
              {/* Placeholder for Game Screenshot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center glow-orange-strong">
                    <Gamepad2 className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-400 text-sm">Próximamente</p>
                  <p className="text-white font-semibold">Screenshots del juego</p>
                </div>
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-orange-500/90 text-white text-sm font-medium">
                En Desarrollo
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl -z-10 opacity-50 group-hover:opacity-75 transition-opacity" />
          </div>

          {/* Game Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Una nueva aventura te espera
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                San José es un proyecto que lleva meses de planificación y desarrollo. 
                Aunque aún no podemos revelar todos los detalles, estamos construyendo 
                algo especial que esperamos compartir pronto con la comunidad.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Mantente atento a nuestras redes para conocer más sobre el progreso 
                del desarrollo y las fechas de lanzamiento.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-center">
                <Calendar className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Estado</div>
                <div className="text-white font-semibold">Dev</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-center">
                <Monitor className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Plataforma</div>
                <div className="text-white font-semibold">PC</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-center">
                <Cpu className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Motor</div>
                <div className="text-white font-semibold">TBD</div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => setShowDialog(true)}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity glow-orange flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Quiero saber más
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-gray-800/30 border border-gray-700/30 hover:border-orange-500/30 hover:bg-gray-800/50 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-8 h-8 text-orange-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gradient">
              ¡Gracias por tu interés!
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Estamos trabajando arduamente en San José. 
              <br /><br />
              Pronto compartiremos más información sobre el juego, 
              incluyendo screenshots, gameplay y fechas importantes.
              <br /><br />
              ¡Sigue atento a nuestras redes sociales!
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <button
              onClick={() => setShowDialog(false)}
              className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-medium transition-colors"
            >
              Entendido
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GameSection;

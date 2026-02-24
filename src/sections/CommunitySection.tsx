import { useState } from 'react';
import { Youtube, MessageCircle, Instagram, Mail, Send, Heart } from 'lucide-react';
import { toast } from 'sonner';

const CommunitySection = () => {
  const [email, setEmail] = useState('');

  const socialLinks = [
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/@sanjosegame',
      color: 'from-red-600 to-red-500',
      description: 'Trailers y devlogs de San José',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/sanjosegame',
      color: 'from-purple-600 to-pink-500',
      description: 'Behind-the-scenes y arte',
    },
    {
      icon: MessageCircle,
      label: 'Discord',
      href: '#',
      color: 'from-indigo-600 to-indigo-500',
      description: 'Chat con la comunidad',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:hello@crabcode.studio',
      color: 'from-orange-500 to-red-500',
      description: 'Contacto directo',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('¡Bienvenido a la comunidad! 🦀');
      setEmail('');
    }
  };

  return (
    <section id="comunidad" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-gray-900" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
            Comunidad
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Sé parte de la <span className="text-gradient">aventura</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Acompañá el desarrollo de San José. Tu apoyo nos impulsa a seguir creando.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-orange-500/50 transition-all hover:bg-gray-800/80"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <link.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{link.label}</h3>
              <p className="text-gray-500 text-sm">{link.description}</p>
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <div className="max-w-xl mx-auto">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-sm">
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-3">
                Newsletter
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Recibí las novedades
              </h3>
              <p className="text-gray-400">
                Enterate primero de nuevos trailers, betas y behind-the-scenes de San José.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 glow-orange"
              >
                <Send className="w-5 h-5" />
                Suscribirme
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Sin spam. Solo novedades de San José. 🎮
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient">CrabCode</span>
            </div>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en Argentina
            </p>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default CommunitySection;

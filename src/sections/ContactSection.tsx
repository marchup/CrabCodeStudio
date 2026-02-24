import { Github, Mail, Twitter, MessageCircle, Send, MapPin } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/marchup',
      color: 'hover:text-white',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
      color: 'hover:text-blue-400',
    },
    {
      icon: MessageCircle,
      label: 'Discord',
      href: '#',
      color: 'hover:text-indigo-400',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:hello@crabcode.studio',
      color: 'hover:text-orange-400',
    },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xdkynkrj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        toast.success('¡Gracias por suscribirte! Te mantendré informado.');
        setEmail('');
      } else {
        toast.error('Hubo un error. Por favor, intentá de nuevo.');
      }
    } catch (error) {
      toast.error('Hubo un error. Por favor, intentá de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-gray-900" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
              Contacto
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Trabajemos <span className="text-gradient">juntos</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              ¿Tenés una idea para un proyecto? ¿Querés colaborar o simplemente 
              charlar sobre videojuegos? ¡Estoy abierto a nuevas oportunidades!
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 transition-all hover:border-orange-500/50 hover:bg-gray-800 ${link.color}`}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Desarrollando desde Argentina</span>
            </div>
          </div>

          {/* Right Content - Newsletter */}
          <div className="p-8 rounded-3xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Seguí el desarrollo
            </h3>
            <p className="text-gray-400 mb-6">
              Suscribite para recibir novedades de San José y los próximos proyectos.
              Sin spam, solo contenido del juego.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 glow-orange disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Enviando...' : 'Suscribirme'}
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Podés darte de baja cuando quieras. 🎮
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient">CrabCode</span>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CrabCode. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                Términos
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;

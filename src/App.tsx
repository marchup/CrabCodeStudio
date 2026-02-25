import { Toaster } from 'sonner';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import GamesSection from './sections/GamesSection';
import AboutSection from './sections/AboutSection';
import CommunitySection from './sections/CommunitySection';
import ContactSection from './components/ContactSection';
import CrabZone from './components/CrabZone'; // <-- NUEVO IMPORT
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: '#1f2937',
            color: '#fff',
            border: '1px solid #374151',
          },
        }}
      />
      <Navigation />
      <main>
        <HeroSection />
        <GamesSection />
        <AboutSection />
        <CommunitySection />
      </main>
      
      {/* ZONA DEL CANGREJO - justo antes del footer */}
      <CrabZone />
      
      {/* Footer */}
      <ContactSection />
    </div>
  );
}

export default App;

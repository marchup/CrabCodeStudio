import { Toaster } from 'sonner';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import GamesSection from './sections/GamesSection';
import AboutSection from './sections/AboutSection';
import CommunitySection from './sections/CommunitySection';
import CrabZone from './components/CrabZone';
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
        <CommunitySection /> {/* Esta sección YA INCLUYE footer con CrabCode Games */}
      </main>
      
      {/* ZONA DEL CANGREJO */}
      <CrabZone />
      
      {/* 🚫 ELIMINADO: ContactSection ya no se usa */}
    </div>
  );
}

export default App;

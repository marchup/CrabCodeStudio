import { Toaster } from 'sonner';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import GamesSection from './sections/GamesSection';
import AboutSection from './sections/AboutSection';
import CommunitySection from './sections/CommunitySection';
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
    </div>
  );
}

export default App;

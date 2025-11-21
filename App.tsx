import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Results } from './components/Results';
import { AchievementBanner } from './components/AchievementBanner';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <AchievementBanner />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
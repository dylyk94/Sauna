import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Features from './components/Features';
import Apartments from './components/Apartments';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-sauna-base text-sauna-text font-sans selection:bg-sauna-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Features />
        <Apartments />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;
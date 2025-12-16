import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-900 selection:bg-wood-200 selection:text-wood-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
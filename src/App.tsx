import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyMe from './components/WhyMe';
import Pricing from './components/Pricing';
import GetStarted from './components/GetStarted';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 font-space transition-colors duration-300">
        <Header />
        <Hero />
        <HowItWorks />
        <WhyMe />
        <Pricing />
        <GetStarted />
        <FAQ />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
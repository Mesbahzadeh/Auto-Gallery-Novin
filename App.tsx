import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandBar from './components/BrandBar';
import CarList from './components/CarList';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BrandBar />
        <CarList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Search from './pages/Search';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
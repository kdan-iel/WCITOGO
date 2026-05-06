import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Ministries from './pages/Ministries';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Give from './pages/Give';
import Events from './pages/Events';
import Testimonies from './pages/Testimonies';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          
          <AnimatePresence mode="wait">
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/ministries" element={<Ministries />} />
                <Route path="/events" element={<Events />} />
                <Route path="/media" element={<Media />} />
                <Route path="/testimonies" element={<Testimonies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/give" element={<Give />} />
              </Routes>
            </motion.main>
          </AnimatePresence>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

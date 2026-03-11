import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import { Page } from './types';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const CreativeMedia = lazy(() => import('./pages/CreativeMedia'));
const AdsPerformance = lazy(() => import('./pages/AdsPerformance'));
const ManagementSystems = lazy(() => import('./pages/ManagementSystems'));
const EcommerceOps = lazy(() => import('./pages/EcommerceOps'));
const CreativeWebsite = lazy(() => import('./pages/CreativeWebsite'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-black">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-cyan-400 font-display text-2xl tracking-widest uppercase"
    >
      CHQ AGENCY
    </motion.div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<Page>('home');

  // Sync activePage with route for navigation highlighting
  useEffect(() => {
    const path = location.pathname;
    if (path === '/trang-chu') setActivePage('home');
    else if (path === '/creative') setActivePage('creative');
    else if (path === '/ads') setActivePage('ads');
    else if (path === '/systems') setActivePage('systems');
    else if (path === '/ecommerce') setActivePage('ecommerce');
    else if (path === '/web') setActivePage('web');
    else if (path === '/contact') setActivePage('contact');
  }, [location]);

  return (
    <main className="relative bg-black text-white selection:bg-cyan-400 selection:text-black min-h-screen blue-glow-bg cursor-none">
      <Preloader />
      <CustomCursor />
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="relative"
        >
          {/* Transition Overlay - Staggered Panels */}
          <motion.div
            className="fixed inset-0 z-[150] pointer-events-none flex"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className={`h-full w-1/4 ${i % 2 === 0 ? 'bg-cyan-500' : 'bg-[#001a33]'}`}
                variants={{
                  initial: { y: "-100%" },
                  animate: { y: "-100%" },
                  exit: { y: "0%" }
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.76, 0, 0.24, 1]
                }}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.02 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.4 }
            }}
          >
            <Suspense fallback={<PageLoader />}>
              <Routes location={location}>
                <Route path="/trang-chu" element={<Home setActivePage={setActivePage} />} />
                <Route path="/creative" element={<CreativeMedia />} />
                <Route path="/ads" element={<AdsPerformance />} />
                <Route path="/systems" element={<ManagementSystems />} />
                <Route path="/ecommerce" element={<EcommerceOps />} />
                <Route path="/web" element={<CreativeWebsite />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Navigate to="/trang-chu" replace />} />
                {/* Add /trang-dich-vu as an alias or specific page if needed */}
                <Route path="/trang-dich-vu" element={<Home setActivePage={setActivePage} />} /> 
              </Routes>
            </Suspense>
          </motion.div>

          {/* Entrance Overlay - Staggered Panels (Revealing) */}
          <motion.div
            className="fixed inset-0 z-[150] pointer-events-none flex"
            initial="initial"
            animate="animate"
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className={`h-full w-1/4 ${i % 2 === 0 ? 'bg-cyan-500' : 'bg-[#001a33]'}`}
                variants={{
                  initial: { y: "0%" },
                  animate: { y: "100%" }
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  ease: [0.76, 0, 0.24, 1]
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5 z-[100]">
        <motion.div 
          className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          animate={{ 
            width: location.pathname === '/trang-chu' ? '10%' : 
                   location.pathname === '/creative' ? '30%' : 
                   location.pathname === '/ads' ? '50%' : 
                   location.pathname === '/systems' ? '70%' : 
                   location.pathname === '/ecommerce' ? '85%' : '100%' 
          }}
        />
      </div>
    </main>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

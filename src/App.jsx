import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LazyLoading from './components/LazyLoading/LazyLoading';
import './index.css';

// Lazy load all page components
const Home = lazy(() => import('./pages/Home'));
const SportDetail = lazy(() => import('./pages/SportDetail'));
const SportsListing = lazy(() => import('./pages/SportsListing'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const BookingConfirmation = lazy(() => import('./pages/BookingConfirmation'));

function App() {
  return (
    <div className='flex items-center justify-center h-screen'>
    <div className="w-[150px] h-20">
      <span className="loading loading-infinity text-[#9e8e78] w-full "></span>
    </div>
        </div>
   
  );
}

export default App;
 {/*
    <LanguageProvider>
      <Router>
        <div className="min-h-screen ">
          <Navbar />
          <main>
            <Suspense fallback={<LazyLoading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sports" element={<SportsListing />} />
                <Route path="/sports/:sportName" element={<SportDetail />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/booking-confirmation" element={<BookingConfirmation />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
    */}
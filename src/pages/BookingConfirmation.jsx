import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const BookingConfirmation = () => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center py-16 px-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-lg p-8 text-center bg-white rounded-lg shadow-xl"
      >
        <CheckCircle size={80} className="mx-auto mb-6 text-green-500" />
        <h1 className="mb-4 text-4xl font-bold text-gray-800">{t.bookingConfirmation.title}</h1>
        <p className="mb-8 text-lg text-gray-600">{t.bookingConfirmation.message}</p>
        
        <div className="space-y-4">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 text-lg font-semibold text-white transition duration-300 rounded-lg bg-gradient-primary hover:bg-primary-700"
            >
              {t.bookingConfirmation.backToHome}
            </motion.button>
          </Link>
          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 text-lg font-semibold text-gray-800 transition duration-300 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              {t.bookingConfirmation.viewBookings}
            </motion.button>
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-500">{t.bookingConfirmation.note}</p>
      </motion.div>
    </div>
  );
};

export default BookingConfirmation; 
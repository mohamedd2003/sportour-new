import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const BookingConfirmation = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  const { bookedSportName } = location.state || {};

  // Generate dynamic booking details
  const generateBookingId = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const randomChars = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `SPORTTOUR-${year}-${month}${day}-${randomChars}`;
  };

  const bookingDetails = {
    id: generateBookingId(),
    item: bookedSportName || 'Unknown Sport', // Use the dynamically passed sport name
    date: new Date().toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
  };

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
        
        <div className="mb-8 text-left p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700 mb-2"><strong className="font-semibold">{t.bookingConfirmation.bookingId}:</strong> {bookingDetails.id}</p>
          <p className="text-gray-700 mb-2"><strong className="font-semibold">{t.bookingConfirmation.bookedItem}:</strong> {bookingDetails.item}</p>
          <p className="text-gray-700"><strong className="font-semibold">{t.bookingConfirmation.bookingDate}:</strong> {bookingDetails.date}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.bookingConfirmation.nextStepsTitle}</h2>
        <p className="mb-4 text-gray-600">{t.bookingConfirmation.nextStepsContent1}</p>
        <p className="mb-8 text-gray-600">{t.bookingConfirmation.nextStepsContent2}</p>

        <div className="space-y-4">
          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 text-lg font-semibold text-white transition duration-300 rounded-lg bg-gradient-primary hover:bg-primary-700"
            >
              {t.bookingConfirmation.viewBookingDetails}
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 text-lg font-semibold text-gray-800 transition duration-300 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              {t.bookingConfirmation.contactSupport}
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingConfirmation; 
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { sportsData } from '../data/sportsData';

const SportsListing = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sports = sportsData[language];

  return (
    <div className={`min-h-screen bg-gray-50 pt-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.sports.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.sports.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {t.sports.from} {sport.price} {t.sports.egp}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {sport.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {sport.description}
                </p>
                
                <Link
                  to={`/sports/${sport.id}`}
                  className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg"
                >
                  <span>{t.sports.book}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsListing;
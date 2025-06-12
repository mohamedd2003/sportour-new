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
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
            {t.sports.title}
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            {t.sports.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl"
            >
                  <div className="relative overflow-hidden">
                {sport.video ? (
                  <video
                    src={sport.video}
                    alt={sport.name}
                    className="object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
                  />
                )}
                <div className="absolute px-3 py-1 text-sm font-semibold text-white rounded-full top-4 right-4 bg-gradient-primary">
                  {t.sports.from} {sport.price} {t.sports.egp}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {sport.name}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  {sport.description}
                </p>
                
                <Link
                  to={`/sports/${sport.id}`}
                  className="inline-flex items-center px-6 py-3 space-x-2 font-semibold text-white transition-colors shadow-lg bg-gradient-primary rounded-xl hover:bg-primary-700"
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
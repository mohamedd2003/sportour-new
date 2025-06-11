import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { sportsData } from '../data/sportsData';

const SportsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sports = sportsData[language];

  return (
    <section className={`py-20 bg-white ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-4">
            {t.sports.title}
          </h2>
          <p className="text-xl text-secondary-600">
            {t.sports.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-primary-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {t.sports.from} {sport.price} {t.sports.egp}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-800 mb-3">
                  {sport.name}
                </h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {sport.description}
                </p>
                
                <div className="flex space-x-3">
                  <Link
                    to={`/sports/${sport.id}`}
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-primary text-white px-4 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg"
                  >
                    <span>{t.sports.book}</span>
                    <ArrowRight size={16} />
                  </Link>
                  
                  <Link
                    to={`/sports/${sport.id}`}
                    className="inline-flex items-center justify-center space-x-2 border-2 border-primary-500 text-primary-600 px-4 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
                  >
                    <Eye size={16} />
                    <span className="hidden sm:inline">{t.sports.knowMore}</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
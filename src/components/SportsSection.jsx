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
    <section id='sports' className={`py-20 bg-white ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-secondary-800">
            {t.sports.title}
          </h2>
          <p className="text-xl text-secondary-600">
            {t.sports.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="overflow-hidden transition-all duration-300 bg-white border shadow-lg rounded-2xl hover:shadow-2xl border-primary-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute px-3 py-1 text-sm font-semibold text-white rounded-full top-4 right-4 bg-gradient-primary">
                  {t.sports.from} {sport.price} {t.sports.egp}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-secondary-800">
                  {sport.name}
                </h3>
                <p className="mb-6 leading-relaxed text-secondary-600">
                  {sport.description}
                </p>
                
                <div className="flex space-x-3">
                  <Link
                    to={`/sports/${sport.id}`}
                    className="inline-flex items-center justify-center flex-1 px-4 py-3 space-x-2 font-semibold text-white transition-opacity shadow-lg bg-gradient-primary rounded-xl hover:opacity-90"
                  >
                    <span>{t.sports.book}</span>
                    <ArrowRight size={16} />
                  </Link>
                  
                  <Link
                    to={`/sports/${sport.id}`}
                    className="inline-flex items-center justify-center px-4 py-3 space-x-2 font-semibold transition-colors border-2 border-primary-500 text-primary-600 rounded-xl hover:bg-primary-50"
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
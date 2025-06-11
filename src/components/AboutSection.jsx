import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={`py-20 bg-gradient-light ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
            {t.about.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
              {t.about.content}
            </p>
            <p className="text-lg text-secondary-700 leading-relaxed">
              {t.about.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
              alt="Sports Tourism"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-2xl">🏆</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
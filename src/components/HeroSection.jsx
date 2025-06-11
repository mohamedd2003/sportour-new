import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={`relative h-screen flex items-center justify-center ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute object-cover w-auto h-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:object-cover"
        >
          <source src="/src/assets/Hero.MP4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl px-4 mx-auto text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
        >
          {t.hero.title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 text-xl font-light md:text-2xl"
        >
          {t.hero.subtitle}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center px-8 py-4 mx-auto space-x-2 text-lg font-semibold transition-all duration-300 bg-white rounded-full shadow-xl text-secondary-600 hover:shadow-2xl"
        >
          <span>{t.hero.cta}</span>
          <ChevronRight size={20} />
        </motion.button>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center w-6 h-10 border-2 border-white rounded-full"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 mt-2 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
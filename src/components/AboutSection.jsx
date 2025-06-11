import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import img from "../assets/4.jpg"
const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section  className={`py-20 bg-gradient-light ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-secondary-800">
            {t.about.title}
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 text-lg leading-relaxed text-secondary-700">
              {t.about.content}
            </p>
            <p className="text-lg leading-relaxed text-secondary-700">
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
              src={img}
              alt="Sports Tourism"
              className="object-cover w-full shadow-2xl rounded-2xl h-80"
            />
            <div className="absolute flex items-center justify-center w-24 h-24 rounded-full shadow-xl -bottom-6 -right-6 bg-gradient-primary">
              <span className="text-2xl font-bold text-white">🏆</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
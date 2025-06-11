import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const TimelineSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={`py-20 bg-gradient-secondary ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.timeline.title}
          </h2>
          <p className="text-xl text-white/90">
            {t.timeline.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - visible only on medium screens and up */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/30 rounded-full hidden md:block"></div>

          {t.timeline.events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              // Responsive classes: flex-col on mobile, flex-row on md+, conditional justify for desktop
              className={`relative flex flex-col items-center md:flex-row mb-12 ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Timeline dot */}
              {/* Position relative for mobile stacking, absolute for desktop centering */}
              <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-primary-500 z-10 mb-4 md:mb-0"></div>

              {/* Content */}
              {/* Full width on mobile, 5/12 on md+. Text alignment for mobile and desktop. */}
              <div className={`w-full px-4 md:px-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
              } text-center md:text-left order-2 md:order-none`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-2">{event.year}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                  <p className="text-white/90 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
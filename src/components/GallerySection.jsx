import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const GallerySection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const galleryImages = [
    'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg',
    'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg',
    'https://images.pexels.com/photos/390051/pexels-photo-390051.jpeg',
    'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
    'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
    'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
    'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
    'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
            {t.gallery.title}
          </h2>
          <p className="text-xl text-secondary-600">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${
                index % 3 === 0 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={image}
                alt={`Adventure ${index + 1}`}
                className={`w-full object-cover transition-transform duration-300 hover:scale-110 ${
                  index % 3 === 0 ? 'h-80' : 'h-40'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-semibold">Adventure Moment</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
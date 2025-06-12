import { motion } from 'framer-motion';
import { Users, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const MeetingsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={`py-20 bg-gradient-light ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-secondary-800">
            {t.meetings.title}
          </h2>
          <p className="mb-4 text-xl text-secondary-600">
            {t.meetings.subtitle}
          </p>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="mb-8 text-lg leading-relaxed text-secondary-700">
              {t.meetings.content}
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800">Group Activities</h4>
                  <p className="text-secondary-600">Join organized sports events and meetups</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-secondary">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800">Regular Events</h4>
                  <p className="text-secondary-600">Weekly and monthly sports gatherings</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800">Multiple Locations</h4>
                  <p className="text-secondary-600">Events across Egypt's best sports destinations</p>
                </div>
              </div>
            </div>

     
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://res.cloudinary.com/dnmwmrxmr/image/upload/v1739397059/cssey6cm1pvigooxcems.jpg"
              alt="Tourist Meetups"
              className="object-cover w-full shadow-2xl rounded-2xl h-96"
            />
            <div className="absolute p-4 bg-white shadow-xl -bottom-6 -left-6 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-secondary-800">25+ Active Groups</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetingsSection;
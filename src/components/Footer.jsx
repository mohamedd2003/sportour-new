import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className={`bg-secondary-800 text-white py-16 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <img 
                src="/logo-colour.png" 
                alt="Sportour" 
                className="w-auto h-12"
              />
            </div>
            <p className="mb-6 leading-relaxed text-gray-300">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
      
              <motion.a
                whileHover={{ scale: 1.1 }}
                target="_blank"
               href="https://www.instagram.com/sportour.campaign?igsh=MTExcXptd3p3c3FuNw=="
                className="flex items-center justify-center w-10 h-10 transition-opacity rounded-full bg-gradient-primary hover:opacity-80"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                target="_blank"
               href="https://www.tiktok.com/@sportour.campaign?_t=ZS-8tixZuud4h5&_r=1"
                className="flex items-center justify-center w-10 h-10 transition-opacity rounded-full bg-gradient-primary hover:opacity-80"
              >
             <svg width="40px" height="40px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Tiktok</title>
        <g id="Icon/Social/tiktok-white" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z" id="Fill-1" fill="#FFFFFF"></path>
        </g>
    </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-lg font-semibold">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 transition-colors hover:text-white">{t.nav.home}</Link></li>
              <li><Link to="/sports" className="text-gray-300 transition-colors hover:text-white">{t.nav.sports}</Link></li>
              <li><Link to="/dashboard" className="text-gray-300 transition-colors hover:text-white">{t.nav.dashboard}</Link></li>
              <li><Link to="/about" className="text-gray-300 transition-colors hover:text-white">{t.nav.about}</Link></li>
              <li><Link to="/contact" className="text-gray-300 transition-colors hover:text-white">{t.nav.contact}</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-lg font-semibold">{t.footer.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <span className="text-gray-300">{t.footer.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <span className="text-gray-300">{t.footer.phone}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-primary-400" />
                <span className="text-gray-300">Cairo, Egypt</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 mt-12 text-center border-t border-gray-700"
        >
          <p className="text-gray-400">
            © 2024 Sportour. {t.footer.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
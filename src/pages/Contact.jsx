import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { translations } from '../data/translations';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-light py-12">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {t.contact.messageSent}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#456161] mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xl text-[#9e8e78]">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 hover-lift"
          >
            <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Contact Office"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-[#456161] mb-6">
              {t.contact.getInTouch}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#9e8e78] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#456161]">
                    {t.contact.email}
                  </h3>
                  <p className="text-[#9e8e78]">info@egyptadventures.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#9e8e78] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#456161]">
                    {t.contact.phone}
                  </h3>
                  <p className="text-[#9e8e78]">+20 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#9e8e78] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#456161]">
                    {t.contact.address}
                  </h3>
                  <p className="text-[#9e8e78]">
                    {t.contact.addressDetails}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 hover-lift"
          >
            <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Contact Form"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#456161] mb-6">
              {t.contact.sendMessage}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#456161] mb-1">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#e1dbd1] rounded-lg focus:ring-2 focus:ring-[#9e8e78] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#456161] mb-1">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#e1dbd1] rounded-lg focus:ring-2 focus:ring-[#9e8e78] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#456161] mb-1">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-[#e1dbd1] rounded-lg focus:ring-2 focus:ring-[#9e8e78] focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                {t.contact.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
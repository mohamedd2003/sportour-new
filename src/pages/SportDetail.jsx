import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Star, Clock, Users, Award, CheckCircle, XCircle } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { sportsData } from '../data/sportsData';

const SportDetail = () => {
  const { sportName } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  const sports = sportsData[language];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const sport = sports.find(s => s.id === sportName);

  if (!sport) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-800 mb-4">Sport not found</h1>
          <Link to="/sports" className="text-primary-600 hover:text-primary-700">
            Back to Sports
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: t.sportDetails.overview },
    { id: 'details', label: t.sportDetails.details },
    { id: 'itinerary', label: t.sportDetails.itinerary },
    { id: 'operator', label: t.sportDetails.operator },
    { id: 'reviews', label: t.sportDetails.reviews },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <p className="text-lg text-secondary-700 leading-relaxed">
              {sport.fullDescription}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Clock className="text-primary-500" size={24} />
                <div>
                  <p className="font-semibold text-secondary-800">{t.sportDetails.duration}</p>
                  <p className="text-secondary-600">{sport.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-primary-500" size={24} />
                <div>
                  <p className="font-semibold text-secondary-800">{t.sportDetails.difficulty}</p>
                  <p className="text-secondary-600">{sport.difficulty}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-primary-500" size={24} />
                <div>
                  <p className="font-semibold text-secondary-800">{t.sportDetails.groupSize}</p>
                  <p className="text-secondary-600">{sport.groupSize}</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'details':
        return (
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-secondary-800 mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                {t.sportDetails.includes}
              </h4>
              <ul className="space-y-2">
                {sport.includes.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-secondary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-secondary-800 mb-4 flex items-center">
                <XCircle className="text-red-500 mr-2" size={20} />
                {t.sportDetails.excludes}
              </h4>
              <ul className="space-y-2">
                {sport.excludes.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <XCircle className="text-red-500" size={16} />
                    <span className="text-secondary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-secondary-800 mb-4">
                {t.sportDetails.requirements}
              </h4>
              <ul className="space-y-2">
                {sport.requirements.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-secondary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      case 'itinerary':
        return (
          <div className="space-y-4">
            {sport.itinerary.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-light rounded-lg">
                <div className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.time}
                </div>
                <div className="flex-1">
                  <p className="text-secondary-700">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'operator':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-light p-6 rounded-2xl">
              <h4 className="text-2xl font-bold text-secondary-800 mb-4">{sport.operator.name}</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="text-yellow-400 fill-current" size={20} />
                    <span className="text-lg font-semibold text-secondary-800">{sport.operator.rating}/5</span>
                  </div>
                  <p className="text-secondary-700 mb-2">
                    <strong>Experience:</strong> {sport.operator.experience}
                  </p>
                  <p className="text-secondary-700">
                    <strong>Contact:</strong> {sport.operator.contact}
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-secondary-800 mb-2">Certifications:</h5>
                  <ul className="space-y-1">
                    {sport.operator.certifications.map((cert, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Award className="text-primary-500" size={16} />
                        <span className="text-secondary-700">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Hotels Section */}
            <div>
              <h4 className="text-xl font-semibold text-secondary-800 mb-4">{t.sportDetails.hotels}</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {sport.hotels.map((hotel, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-32 object-cover" />
                    <div className="p-4">
                      <h5 className="font-semibold text-secondary-800">{hotel.name}</h5>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              className={i < Math.floor(hotel.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} 
                            />
                          ))}
                          <span className="text-sm text-secondary-600">({hotel.rating})</span>
                        </div>
                        <span className="font-semibold text-primary-600">${hotel.price}/night</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'reviews':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-secondary-800">4.8/5</span>
              </div>
              <p className="text-secondary-600">Based on 127 reviews</p>
            </div>
            
            {/* Sample reviews */}
            {[
              { name: "Ahmed Hassan", rating: 5, comment: "Amazing experience! The instructor was very professional and the views were breathtaking.", date: "2 weeks ago" },
              { name: "Sarah Johnson", rating: 5, comment: "Best adventure I've had in Egypt. Highly recommend this activity!", date: "1 month ago" },
              { name: "Mohamed Ali", rating: 4, comment: "Great experience overall. Equipment was in good condition and safety was prioritized.", date: "1 month ago" }
            ].map((review, index) => (
              <div key={index} className="bg-gradient-light p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h5 className="font-semibold text-secondary-800">{review.name}</h5>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-secondary-500">{review.date}</span>
                </div>
                <p className="text-secondary-700">{review.comment}</p>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-light pt-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            <ArrowLeft size={20} />
            <span>{t.sportDetails.backToSports}</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Images and Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6">
                <img
                  src={sport.gallery[selectedImage]}
                  alt={sport.name}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {sport.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(index)}
                    className={`cursor-pointer rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-4 ring-primary-500' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${sport.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Sport Title and Basic Info */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-secondary-800 mb-4">{sport.name}</h1>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                    <span className="text-secondary-600 ml-2">(4.8/5)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-secondary-600">
                    <MapPin size={16} />
                    <span>{sport.locations.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-primary-200 mb-8">
                <nav className="flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderTabContent()}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Booking */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-primary-100">
                <h3 className="text-xl font-semibold text-secondary-800 mb-6">
                  {t.sportDetails.booking}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {t.sportDetails.selectDate}
                    </label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      minDate={new Date()}
                      className="w-full p-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      dateFormat="MMMM d, yyyy"
                    />
                  </div>

                  <div className="flex items-center justify-between py-4 border-t border-primary-100">
                    <span className="text-sm text-secondary-600">{t.sportDetails.price}:</span>
                    <span className="text-3xl font-bold text-primary-600">
                      {sport.price} {t.sports.egp}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-primary text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
                  >
                    {t.sportDetails.bookNow}
                  </motion.button>

                  <div className="text-center text-sm text-secondary-500">
                    Free cancellation up to 24 hours before
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SportDetail;
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
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-secondary-800">Sport not found</h1>
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
            <p className="text-lg leading-relaxed text-secondary-700">
              {sport.fullDescription}
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex items-start space-x-3">
                <Clock className="flex-shrink-0 text-primary-500" size={24} />
                <div className="flex-grow min-w-0">
                  <p className="font-semibold text-secondary-800">{t.sportDetails.duration}</p>
                  <p className="break-words text-secondary-600">{sport.duration}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="flex-shrink-0 text-primary-500" size={24} />
                <div className="flex-grow min-w-0">
                  <p className="font-semibold text-secondary-800">{t.sportDetails.difficulty}</p>
                  <p className="break-words text-secondary-600">{sport.difficulty}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="flex-shrink-0 text-primary-500" size={24} />
                <div className="flex-grow min-w-0">
                  <p className="font-semibold text-secondary-800">{t.sportDetails.groupSize}</p>
                  <p className="break-words text-secondary-600">{sport.groupSize}</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'details':
        return (
          <div className="space-y-8">
            <div>
              <h4 className="flex items-center mb-4 text-xl font-semibold text-secondary-800">
                <CheckCircle className="mr-2 text-green-500" size={20} />
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
              <h4 className="flex items-center mb-4 text-xl font-semibold text-secondary-800">
                <XCircle className="mr-2 text-red-500" size={20} />
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
              <h4 className="mb-4 text-xl font-semibold text-secondary-800">
                {t.sportDetails.requirements}
              </h4>
              <ul className="space-y-2">
                {sport.requirements.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
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
              <div key={index} className="flex items-start p-4 space-x-4 rounded-lg bg-gradient-light">
                <div className="px-3 py-1 text-sm font-semibold text-white rounded-full bg-gradient-primary">
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
            <div className="p-6 bg-gradient-light rounded-2xl">
              <h4 className="mb-4 text-2xl font-bold text-secondary-800">{sport.operator.name}</h4>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="flex items-center mb-3 space-x-2">
                    <Star className="text-yellow-400 fill-current" size={20} />
                    <span className="text-lg font-semibold text-secondary-800">{sport.operator.rating}/5</span>
                  </div>
                  <p className="mb-2 text-secondary-700">
                    <strong>Experience:</strong> {sport.operator.experience}
                  </p>
                  <p className="text-secondary-700">
                    <strong>Contact:</strong> {sport.operator.contact}
                  </p>
                </div>
                <div>
                  <h5 className="mb-2 font-semibold text-secondary-800">Certifications:</h5>
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
              <h4 className="mb-4 text-xl font-semibold text-secondary-800">{t.sportDetails.hotels}</h4>
              <div className="grid gap-4 md:grid-cols-2">
                {sport.hotels.map((hotel, index) => (
                  <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md">
                    <img src={hotel.image} alt={hotel.name} className="object-cover w-full h-32" />
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
              <div className="flex items-center justify-center mb-4 space-x-2">
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
              <div key={index} className="p-6 rounded-lg bg-gradient-light">
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
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 font-semibold text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft size={20} />
            <span>{t.sportDetails.backToSports}</span>
          </Link>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Images and Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Image */}
              <div className="relative mb-6 overflow-hidden shadow-2xl rounded-2xl">
                <img
                  src={sport.gallery[selectedImage]}
                  alt={sport.name}
                  className="object-cover w-full h-96"
                />
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
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
                      className="object-cover w-full h-20"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Sport Title and Basic Info */}
              <div className="mb-8">
                <h1 className="mb-4 text-4xl font-bold text-secondary-800">{sport.name}</h1>
                <div className="flex items-center mb-6 space-x-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-secondary-600">(4.8/5)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-secondary-600">
                    <MapPin size={16} />
                    <span>{sport.locations.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="mb-8 border-b border-primary-200">
                <nav className="flex space-x-4 md:space-x-8">
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
            className="w-[80%] md:w-full lg:col-span-1"
          >
            <div className="sticky p-2 top-24 md:p-4 lg:p-0">
              <div className="p-4 bg-white border shadow-xl sm:p-6 rounded-2xl border-primary-100">
                <h3 className="mb-4 text-lg font-semibold sm:text-xl text-secondary-800 sm:mb-6">
                  {t.sportDetails.booking}
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-secondary-700">
                      {t.sportDetails.selectDate}
                    </label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      minDate={new Date()}
                      className="w-full p-2 text-sm border rounded-lg sm:p-3 border-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-base"
                      dateFormat="MMMM d, yyyy"
                    />
                  </div>

                  <div className="flex items-center justify-between py-3 border-t sm:py-4 border-primary-100">
                    <span className="flex-shrink-0 text-sm text-secondary-600">{t.sportDetails.price}:</span>
                    <span className="flex-grow min-w-0 text-xs font-bold text-right break-words sm:text-lg text-primary-600">
                      {sport.price} {t.sports.egp}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 text-base font-semibold text-white transition-opacity shadow-lg bg-gradient-primary sm:py-4 rounded-xl sm:text-lg hover:opacity-90"
                  >
                    {t.sportDetails.bookNow}
                  </motion.button>

                  <div className="text-sm text-center text-secondary-500">
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
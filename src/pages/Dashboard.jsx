import { motion } from 'framer-motion';
import { Calendar, Users, TrendingUp, DollarSign, Eye, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Dashboard = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Sample data for dashboard
  const stats = [
    {
      title: t.dashboard.totalBookings,
      value: '1,247',
      change: '+12%',
      icon: Calendar,
      color: 'bg-gradient-primary'
    },
    {
      title: t.dashboard.activeReservations,
      value: '89',
      change: '+5%',
      icon: Users,
      color: 'bg-gradient-secondary'
    },
    {
      title: t.dashboard.completedTrips,
      value: '1,158',
      change: '+18%',
      icon: TrendingUp,
      color: 'bg-gradient-primary'
    },
    {
      title: t.dashboard.revenue,
      value: '₹2.4M',
      change: '+23%',
      icon: DollarSign,
      color: 'bg-gradient-secondary'
    }
  ];

  const recentBookings = [
    {
      id: 1,
      customerName: 'Ahmed Hassan',
      sport: 'Paramotor',
      date: '2024-01-15',
      status: 'confirmed',
      amount: 1200
    },
    {
      id: 2,
      customerName: 'Sarah Johnson',
      sport: 'Diving',
      date: '2024-01-16',
      status: 'pending',
      amount: 400
    },
    {
      id: 3,
      customerName: 'Mohamed Ali',
      sport: 'Kitesurfing',
      date: '2024-01-17',
      status: 'confirmed',
      amount: 500
    },
    {
      id: 4,
      customerName: 'Emma Wilson',
      sport: 'Hiking',
      date: '2024-01-18',
      status: 'completed',
      amount: 200
    },
    {
      id: 5,
      customerName: 'Omar Khaled',
      sport: 'Sandboarding',
      date: '2024-01-19',
      status: 'confirmed',
      amount: 300
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmed':
        return t.dashboard.confirmed;
      case 'pending':
        return t.dashboard.pending;
      case 'completed':
        return t.dashboard.completed;
      default:
        return status;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-light pt-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-secondary-800 mb-2">
            {t.dashboard.title}
          </h1>
          <p className="text-secondary-600">
            Monitor your sports tourism business performance
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-secondary-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-secondary-800 mt-2">{stat.value}</p>
                  <p className="text-green-600 text-sm font-medium mt-1">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg border border-primary-100 overflow-hidden"
        >
          <div className="p-6 border-b border-primary-100">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-secondary-800">
                {t.dashboard.recentBookings}
              </h2>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity">
                  <Eye size={16} />
                  <span>{t.dashboard.viewAll}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    {t.dashboard.customerName}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    {t.dashboard.sport}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    {t.dashboard.date}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    {t.dashboard.status}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    {t.dashboard.amount}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-primary-100">
                {recentBookings.map((booking, index) => (
                  <motion.tr
                    key={booking.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="hover:bg-primary-25 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {booking.customerName.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-secondary-800">
                            {booking.customerName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-secondary-800">{booking.sport}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-secondary-800">{booking.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                        {getStatusText(booking.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-secondary-800">
                        {booking.amount} {t.sports.egp}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Revenue Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100"
          >
            <h3 className="text-xl font-bold text-secondary-800 mb-4">Revenue Trends</h3>
            <div className="h-64 bg-gradient-light rounded-lg flex items-center justify-center">
              <p className="text-secondary-500">Chart visualization would go here</p>
            </div>
          </motion.div>

          {/* Popular Sports Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100"
          >
            <h3 className="text-xl font-bold text-secondary-800 mb-4">Popular Sports</h3>
            <div className="h-64 bg-gradient-light rounded-lg flex items-center justify-center">
              <p className="text-secondary-500">Chart visualization would go here</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
import { motion } from 'framer-motion';
import { Calendar, Users, TrendingUp, DollarSign, Eye, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

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

  // Chart data
  const revenueData = {
    labels: [t.dashboard.months.jan, t.dashboard.months.feb, t.dashboard.months.mar, t.dashboard.months.apr, t.dashboard.months.may, t.dashboard.months.jun, t.dashboard.months.jul, t.dashboard.months.aug, t.dashboard.months.sep, t.dashboard.months.oct, t.dashboard.months.nov, t.dashboard.months.dec],
    datasets: [
      {
        label: t.dashboard.revenueTrends,
        data: [300, 400, 350, 500, 450, 600, 550, 700, 650, 800, 750, 900],
        borderColor: 'rgba(158, 142, 120, 1)',
        backgroundColor: 'rgba(158, 142, 120, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const sportsData = {
    labels: [t.dashboard.sportsLabels.paramotor, t.dashboard.sportsLabels.diving, t.dashboard.sportsLabels.kitesurfing, t.dashboard.sportsLabels.hiking, t.dashboard.sportsLabels.sandboarding],
    datasets: [
      {
        label: t.dashboard.popularSports,
        data: [250, 180, 220, 150, 300],
        backgroundColor: [
          'rgba(158, 142, 120, 0.8)',
          'rgba(69, 97, 97, 0.8)',
          'rgba(200, 180, 150, 0.8)',
          'rgba(100, 120, 120, 0.8)',
          'rgba(220, 200, 180, 0.8)',
        ],
        borderColor: [
          'rgba(158, 142, 120, 1)',
          'rgba(69, 97, 97, 1)',
          'rgba(200, 180, 150, 1)',
          'rgba(100, 120, 120, 1)',
          'rgba(220, 200, 180, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#4A5568', // text-secondary-700
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: function(context) {
            if (context[0].dataset.label === t.dashboard.revenueTrends) {
              return context[0].label;
            } else {
              return context[0].label;
            }
          },
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat(language === 'ar' ? 'ar-EG' : 'en-US', { style: 'currency', currency: 'EGP' }).format(context.parsed.y);
            } else if (context.parsed.x !== null) {
              label += context.parsed.x; // For bar chart
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        ticks: {
          color: '#718096', // text-secondary-600
          callback: function(value) {
            return new Intl.NumberFormat(language === 'ar' ? 'ar-EG' : 'en-US', { style: 'currency', currency: 'EGP', maximumFractionDigits: 0 }).format(value);
          }
        },
        grid: {
          color: '#E2E8F0', // primary-100
        },
      },
      x: {
        ticks: {
          color: '#718096', // text-secondary-600
        },
        grid: {
          color: '#E2E8F0', // primary-100
        },
      },
    },
  };

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
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100"
          >
            <h3 className="text-xl font-bold text-secondary-800 mb-4">{t.dashboard.revenueTrends}</h3>
            <div className="h-64">
              <Line data={revenueData} options={chartOptions} />
            </div>
          </motion.div>

          {/* Popular Sports Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100"
          >
            <h3 className="text-xl font-bold text-secondary-800 mb-4">{t.dashboard.popularSports}</h3>
            <div className="h-64">
              <Bar data={sportsData} options={chartOptions} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
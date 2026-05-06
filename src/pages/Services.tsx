import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Users, Music, Pray, BookOpen, Heart } from 'lucide-react';

export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: 'Sunday Morning Worship',
      times: ['6:30 AM', '8:35 AM'],
      day: 'Every Sunday',
      location: 'Main Auditorium',
      description: 'Experience powerful worship, dynamic preaching, and inspiring testimonies. Our Sunday services are designed to draw you closer to God and equip you for the week ahead.',
      features: ['Anointed Worship', 'Powerful Teaching', 'Prayer', 'Fellowship'],
      icon: Music,
      color: 'from-red-600 to-red-700'
    },
    {
      title: 'Midweek Communion Service',
      times: ['6:00 PM'],
      day: 'Every Wednesday',
      location: 'Main Auditorium',
      description: 'A special service dedicated to fasting, prayer, and communion. This intimate service strengthens your covenant relationship with God through deeper worship and dedicated intercession.',
      features: ['Fasting & Prayer', 'Communion', 'Worship', 'Ministry'],
      icon: Pray,
      color: 'from-purple-600 to-purple-700'
    },
    {
      title: 'Covenant Hour of Prayer',
      times: ['5:30 AM - 6:30 AM'],
      day: 'Every Morning',
      location: 'Prayer Hall',
      description: 'Begin your day in power by joining our early morning prayer sessions. Take charge of your day through targeted prayer, fasting, and communion with the Holy Spirit.',
      features: ['Early Prayer', 'Daily Devotion', 'Intercession', 'Breakthrough'],
      icon: Heart,
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Youth Alive Meetings',
      times: ['5:00 PM'],
      day: 'Every Friday',
      location: 'Youth Center',
      description: 'Dynamic gatherings for young adults combining worship, teaching, games, and fellowship. Build lasting friendships while growing spiritually and discovering your divine purpose.',
      features: ['Youth Teaching', 'Fellowship', 'Games', 'Mentorship'],
      icon: Users,
      color: 'from-green-600 to-green-700'
    },
    {
      title: 'Children\'s Sundays School',
      times: ['8:00 AM - 10:30 AM'],
      day: 'Every Sunday',
      location: 'Children\'s Hall',
      description: 'Engaging and age-appropriate spiritual education for children. Through songs, stories, and activities, we teach Biblical values and help children develop a strong faith foundation.',
      features: ['Bible Stories', 'Singing', 'Games', 'Memory Building'],
      icon: BookOpen,
      color: 'from-pink-600 to-pink-700'
    },
    {
      title: 'Small Group Meetings',
      times: ['Various Times'],
      day: 'Throughout the Week',
      location: 'Various Locations',
      description: 'Intimate settings for deeper connection and accountability. Small groups provide personalized ministry, prayer support, and community care for spiritual growth.',
      features: ['Bible Study', 'Prayer Support', 'Accountability', 'Community'],
      icon: Heart,
      color: 'from-orange-600 to-orange-700'
    }
  ];

  const serviceDetails = [
    {
      title: 'What to Expect',
      items: [
        'Inspiring worship with modern and traditional music',
        'Powerful, Bible-based preaching',
        'Prayer and intercession time',
        'Opportunity to give and minister',
        'Friendly community and fellowship',
        'Children\'s and youth programs'
      ]
    },
    {
      title: 'First Time Visitors',
      items: [
        'Arrive 15 minutes early for a warm welcome',
        'Complimentary visitor gifts available',
        'Optional prayer and counseling after service',
        'No pressure to give or join immediately',
        'Family-friendly environment',
        'Helpful ushers to guide you'
      ]
    },
    {
      title: 'How to Get Involved',
      items: [
        'Attend any Sunday service',
        'Join a small group or ministry',
        'Attend our orientation class',
        'Participate in volunteer opportunities',
        'Enroll in WOFBI spiritual training',
        'Serve in your area of giftedness'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 md:py-32 bg-gradient-to-br from-red-600 to-red-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Multiple opportunities to connect with God and His people throughout the week
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Schedule</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: (index % 2) * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-t-4 border-red-600 hover:shadow-2xl transition-all"
                >
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-red-100">{service.day}</p>
                      </div>
                      <Icon className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">Time</p>
                          <p className="font-semibold">{service.times.join(', ')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">Location</p>
                          <p className="font-semibold">{service.location}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {serviceDetails.map((section, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-red-600">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guidelines */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Service Information</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900 p-8 rounded-xl border-l-4 border-blue-600"
            >
              <h3 className="text-2xl font-bold mb-4">Dress Code</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Come as you are! While we don't have a strict dress code, many members choose to dress respectfully. The most important thing is that you come ready to encounter God.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-900 p-8 rounded-xl border-l-4 border-green-600"
            >
              <h3 className="text-2xl font-bold mb-4">Parking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Free parking is available for all our services. Our facility is designed to welcome everyone comfortably.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-900 p-8 rounded-xl border-l-4 border-purple-600"
            >
              <h3 className="text-2xl font-bold mb-4">Childcare</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Professional childcare is available for infants and toddlers during all main services. Rest assured your children are in safe, caring hands.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-pink-50 to-white dark:from-pink-900/20 dark:to-gray-900 p-8 rounded-xl border-l-4 border-pink-600"
            >
              <h3 className="text-2xl font-bold mb-4">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our facilities are wheelchair accessible. If you need any special accommodations, please contact us in advance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl mb-8 text-red-100">
              We can't wait to welcome you to Winners Chapel. Pick a service that fits your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Get Directions
              </motion.a>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all inline-block"
              >
                Back to Home
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

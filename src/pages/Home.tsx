import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Play, Clock, MapPin, Users, Heart, BookOpen, Zap, MessageCircle, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: 'Sunday Worship',
      time: '6:30 AM & 8:35 AM',
      description: 'Experience powerful worship and life-transforming messages',
      icon: Heart,
      color: 'from-red-600 to-red-700'
    },
    {
      title: 'Midweek Service',
      time: 'Wednesday 6:00 PM',
      description: 'Communion and fellowship in the middle of your week',
      icon: Calendar,
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Prayer Hour',
      time: 'Daily 5:30 AM - 6:30 AM',
      description: 'Join our covenant hour of prayer for spiritual breakthrough',
      icon: Zap,
      color: 'from-purple-600 to-purple-700'
    }
  ];

  const ministries = [
    {
      title: 'Youth Alive',
      description: 'Empowering young adults to live victoriously',
      icon: Users,
      members: '500+',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Children Ministry',
      description: 'Building strong foundations in Christ from childhood',
      icon: Heart,
      members: '300+',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'WOFBI',
      description: 'Word of Faith Bible Institute for spiritual growth',
      icon: BookOpen,
      members: '200+',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Koffi',
      role: 'Business Owner',
      text: 'Winners Chapel transformed my life completely. From a struggling business to thriving success!',
      rating: 5
    },
    {
      name: 'Jean-Paul Amenou',
      role: 'Student',
      text: 'The Youth Alive ministry helped me find my purpose and direction in life.',
      rating: 5
    },
    {
      name: 'Esther Mensah',
      role: 'Teacher',
      text: 'The Word here is so anointed. Every service leaves me refreshed and strengthened.',
      rating: 5
    }
  ];

  const upcomingEvents = [
    {
      title: 'Night of Glory',
      date: 'May 15, 2026',
      time: '7:00 PM',
      location: 'Main Chapel',
      description: 'Special praise and worship night with guest ministers'
    },
    {
      title: 'Youth Camp 2026',
      date: 'June 20-22, 2026',
      time: 'All Day',
      location: 'Coastal Resort',
      description: 'Annual youth empowerment and spiritual growth retreat'
    },
    {
      title: 'Children\'s Day Celebration',
      date: 'May 28, 2026',
      time: '3:00 PM',
      location: 'Children\'s Hall',
      description: 'Fun activities and special blessings for our children'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Members' },
    { number: '20+', label: 'Ministries' },
    { number: '15+', label: 'Years Serving' },
    { number: '50+', label: 'Staff'  }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23667eea" width="1200" height="600"/><path fill="%23764ba2" d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z"/></svg>)',
            backgroundSize: 'cover',
            opacity: 0.1
          }}
        />
        
        <div className="absolute inset-0 bg-black/40" />
        
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            className="mb-6"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
              WC
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Winners Chapel
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-100">
            Living Faith Church International
          </p>
          <p className="text-lg md:text-xl mb-10 text-gray-200">
            Lomé, Togo - Where Faith Becomes Reality
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                Join Us This Sunday
              </motion.button>
            </Link>
            
            <Link to="/media">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 justify-center"
              >
                <Play className="w-5 h-5" />
                Watch Live
              </motion.button>
            </Link>
            
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Upcoming Events
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </motion.div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Join us for powerful worship and life-changing messages every week
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all"
                >
                  <div className={`bg-gradient-to-br ${service.color} p-4 rounded-lg w-fit mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-red-600 font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {service.time}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Ministries</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Empowering every generation to live victoriously in Christ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div
                    className="h-40 relative overflow-hidden"
                    style={{ background: ministry.image }}
                  >
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Icon className="w-10 h-10 text-white mb-2" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{ministry.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{ministry.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-red-600 font-semibold">{ministry.members} members</span>
                      <Link to="/ministries" className="text-red-600 hover:text-red-700 font-semibold">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Don't miss these special moments in our church family
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl border-l-4 border-red-600 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                    <p className="text-red-600 font-semibold">{event.date}</p>
                  </div>
                  <Calendar className="w-6 h-6 text-red-600" />
                </div>
                <div className="space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                View All Events
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonies</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Real stories of transformation and breakthrough
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Heart key={i} className="w-5 h-5 text-red-600 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link to="/testimonies">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Share Your Testimony
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Quick Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-white/30 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              {...fadeInUp}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all"
            >
              <Phone className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p>+228 XXXX XXXX</p>
              <p>+228 XXXX XXXX</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all"
            >
              <Mail className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p>info@winnerschapeltogo.com</p>
              <p>contact@winnerschapeltogo.com</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all"
            >
              <MapPin className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p>Lomé, Maritime Region</p>
              <p>Togo, West Africa</p>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <p className="text-white/80 mb-6">Follow us on social media</p>
            <div className="flex justify-center gap-4">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all"
                >
                  <Icon className="w-6 h-6" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

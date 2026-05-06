import React from 'react';
import { motion } from 'motion/react';
import { Users, Heart, BookOpen, Music, Globe, Zap } from 'lucide-react';

export default function Ministries() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const ministries = [
    {
      title: 'Youth Alive',
      icon: Users,
      members: '500+',
      color: 'from-purple-600 to-purple-700',
      description: 'Dynamic ministry for young adults (18-35) combining worship, teaching, mentorship, and community service.',
      activities: [
        'Friday night meetings with worship and teaching',
        'Monthly outreach and community service projects',
        'Leadership development programs',
        'Recreational activities and social events',
        'Mentorship and life coaching'
      ],
      leader: 'Pastor Stephen Agbenyegah'
    },
    {
      title: 'Children Ministry',
      icon: Heart,
      members: '300+',
      color: 'from-pink-600 to-pink-700',
      description: 'Nurturing spiritual growth in children (4-12) through Bible stories, songs, games, and character development.',
      activities: [
        'Sunday school classes by age group',
        'Vacation Bible School during holidays',
        'Children\'s prayer and worship sessions',
        'Educational games and activities',
        'Holiday celebrations and field trips'
      ],
      leader: 'Sister Grace Mensah'
    },
    {
      title: 'WOFBI',
      icon: BookOpen,
      members: '200+',
      color: 'from-blue-600 to-blue-700',
      description: 'Word of Faith Bible Institute - Comprehensive spiritual education and leadership training program.',
      activities: [
        'Structured 2-year curriculum',
        'Intensive Bible study and theology',
        'Spiritual discipline and formation',
        'Leadership and ministry training',
        'Practical ministry exposure'
      ],
      leader: 'Pastor David Mensah'
    },
    {
      title: 'Worship & Music Ministry',
      icon: Music,
      members: '150+',
      color: 'from-red-600 to-red-700',
      description: 'Anointed musicians and singers creating atmosphere for divine encounters through worship.',
      activities: [
        'Weekly service leadership',
        'Special musical events',
        'Worship team training',
        'Music theory classes',
        'Concert and praise nights'
      ],
      leader: 'Minister Paul Koffi'
    },
    {
      title: 'Outreach & Missions',
      icon: Globe,
      members: '250+',
      color: 'from-green-600 to-green-700',
      description: 'Spreading the gospel through evangelism, community care, and missionary work locally and internationally.',
      activities: [
        'Street evangelism and community outreach',
        'Prison ministry and rehabilitation support',
        'Disaster relief and humanitarian aid',
        'International mission trips',
        'Community health education'
      ],
      leader: 'Pastor Yao Mensah'
    },
    {
      title: 'Prayer & Intercession',
      icon: Zap,
      members: '180+',
      color: 'from-orange-600 to-orange-700',
      description: 'Dedicated intercessors standing in the gap through strategic prayer and spiritual warfare.',
      activities: [
        'Daily morning prayer hours',
        'Weekly prayer meetings',
        'Intercessory prayer training',
        'Prayer vigils and fasting',
        'Prayer request management'
      ],
      leader: 'Mother Rose Agbenyegah'
    }
  ];

  const joinProcess = [
    {
      step: 1,
      title: 'Attend Service',
      description: 'Visit any of our Sunday services or a ministry-specific meeting to experience our community firsthand.'
    },
    {
      step: 2,
      title: 'Meet the Team',
      description: 'Connect with ministry leaders who will introduce you to the group and answer any questions.'
    },
    {
      step: 3,
      title: 'Discover Your Gifts',
      description: 'Complete our spiritual gifts assessment to understand how you can best contribute.'
    },
    {
      step: 4,
      title: 'Get Involved',
      description: 'Start participating in ministry activities and become an active member of the community.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 md:py-32 bg-gradient-to-br from-purple-600 to-purple-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Ministries</h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Find your place of service and grow spiritually with like-minded believers
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Ministries Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Active Ministries</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Over 20 different ministries serving every age group and interest
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: (index % 3) * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${ministry.color} p-6 text-white`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{ministry.title}</h3>
                        <p className="text-white/80">{ministry.members} members</p>
                      </div>
                      <Icon className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{ministry.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Led by:</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{ministry.leader}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Activities:</p>
                      <ul className="space-y-1">
                        {ministry.activities.slice(0, 3).map((activity, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="text-red-600 mt-1">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How to Join a Ministry</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {joinProcess.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < joinProcess.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] right-[-50%] h-1 bg-gradient-to-r from-red-600 to-transparent"></div>
                )}

                {/* Card */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg relative z-10">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Find Your Ministry Home</h2>
            <p className="text-xl mb-8 text-red-100">
              Whether you're seeking spiritual growth, community, or a way to serve, there's a ministry for you.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Connect With Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

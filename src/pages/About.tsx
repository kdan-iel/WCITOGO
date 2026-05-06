import React from 'react';
import { motion } from 'motion/react';
import { Heart, Target, Eye, Users, Award, BookOpen } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: Heart,
      title: 'Love & Compassion',
      description: 'We extend love to all people regardless of their background'
    },
    {
      icon: BookOpen,
      title: 'Biblical Truth',
      description: 'We stand firmly on the Word of God as our foundation'
    },
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Help each member find and fulfill their God-given purpose'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue excellence in worship, service, and leadership'
    }
  ];

  const leadership = [
    {
      name: 'Pastor David Mensah',
      role: 'Lead Pastor & Founder',
      bio: 'Passionate about building a thriving church that impacts the nation',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      name: 'Pastor Grace Koffi',
      role: 'Co-Pastor & Women\'s Ministry Director',
      bio: 'Dedicated to empowering women and strengthening families',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      name: 'Pastor Stephen Agbenyegah',
      role: 'Youth Pastor',
      bio: 'Leading the next generation toward their destiny',
      image: 'bg-gradient-to-br from-green-400 to-green-600'
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
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url(data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="10" y="90" font-size="90" opacity="0.1">♡</text></svg>)'
        }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About Winners Chapel</h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              A place where faith becomes reality and lives are transformed
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <motion.div {...fadeInUp}>
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-xl text-white mb-6">
                <Target className="w-12 h-12 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                  To liberate humanity from all forms of oppression through the preaching of God's Word. We are committed to transforming destinies that have been afflicted and broken, bringing healing, hope, and restoration to every individual who walks through our doors.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-xl text-white mb-6">
                <Eye className="w-12 h-12 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg leading-relaxed">
                  To establish a thriving, Christ-centered community that becomes a beacon of light to the nation of Togo and beyond. We envision a place where every person encounters God's transformative power and rises to fulfill their divine destiny.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Values</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History & Background */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl border-l-4 border-red-600">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Winners Chapel was founded on the conviction that every person has a divine destiny. What started as a small prayer group has grown into a thriving community of over 5,000 members, united in the pursuit of spiritual excellence and Kingdom impact.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                For over fifteen years, we have been instrumental in transforming lives, establishing strong families, and raising up leaders who are making a difference in their communities. Our focus on Biblical teaching, prayer, and community outreach has established Winners Chapel as a beacon of hope in Lomé.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, we continue to grow in faith and impact, launching new ministries and expanding our reach to meet the spiritual needs of our rapidly growing community. Every service, every ministry, every outreach is designed to help individuals discover, develop, and deploy their God-given gifts for Kingdom advancement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership Team</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Dedicated servants leading with passion and integrity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`h-48 ${leader.image}`} />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-red-600 font-semibold mb-4">{leader.role}</p>
                  <p className="text-gray-600 dark:text-gray-400">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Worship & Teaching',
                description: 'We create an atmosphere where people encounter God\'s presence through anointed worship and powerful, transformative Biblical teaching.',
                icon: Heart
              },
              {
                title: 'Community Care',
                description: 'Through various support systems and outreach programs, we care for the physical and spiritual needs of our members and community.',
                icon: Users
              },
              {
                title: 'Ministry Development',
                description: 'We equip and empower individuals to discover their gifts and serve effectively in the kingdom of God.',
                icon: Award
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg border-t-4 border-red-600"
                >
                  <Icon className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Become Part of Our Community
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Whether you're seeking spiritual growth, healing, or community, you're welcome here. Join us this Sunday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Plan Your Visit
              </motion.a>
              <motion.a
                href="/media"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all inline-block"
              >
                Watch Online
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

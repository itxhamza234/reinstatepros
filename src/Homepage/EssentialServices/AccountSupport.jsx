import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const AccountSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Animated Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h1 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Amazon Account Support
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-200 text-base sm:text-lg max-w-3xl mx-auto"
          >
            Delegate your Amazon seller account management to us and focus on scaling your business.
          </motion.p>
        </motion.header>

        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-900">Support Services</h2>
          <ul className="space-y-4 text-base sm:text-lg">
            {[
              "Customer service response management",
              "Handling A-to-Z claims and negative feedback",
              "Messaging optimization and buyer communication",
              "Daily operations monitoring"
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-green-500 mr-3 mt-1"><FaCheck /></span>
                <span className="text-gray-800">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
};

const ContactSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="bg-blue-700/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-white shadow-2xl max-w-3xl mx-auto"
  >
    <motion.h2 
      initial={{ scale: 0.95 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      className="text-xl sm:text-2xl font-bold mb-4 text-center"
    >
      Contact Us
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-base sm:text-lg mb-6 text-center"
    >
      Need professional account support?
    </motion.p>
    <ul className="space-y-3 text-base sm:text-lg px-4 sm:px-8">
      <motion.li 
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center"
      >
        <FaEnvelope className="text-blue-300 mr-3 flex-shrink-0" />
        <span className="font-medium mr-2">Email:</span>
        <a 
          href="mailto:info@amzreinstatementconsultant.com" 
          className="hover:underline hover:text-blue-200 transition"
        >
          info@amzreinstatementconsultant.com
        </a>
      </motion.li>
      <motion.li 
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center"
      >
        <FaPhone className="text-blue-300 mr-3 flex-shrink-0" />
        <span className="font-medium mr-2">Phone:</span>
        <a 
          href="tel:+923077971099" 
          className="hover:underline hover:text-blue-200 transition"
        >
          +92 307 7971099
        </a>
      </motion.li>
      <motion.li 
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center"
      >
        <FaWhatsapp className="text-green-300 mr-3 flex-shrink-0" />
        <span className="font-medium mr-2">WhatsApp:</span>
        <a
          href="https://wa.me/923077971099?text=I%20need%20Amazon%20account%20support"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-200 transition"
        >
          Chat with us
        </a>
      </motion.li>
    </ul>
  </motion.section>
);

export default AccountSupport;
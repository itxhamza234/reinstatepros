import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const FundsDisbursement = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.header 
          variants={itemVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h1 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          >
            Amazon Funds Disbursement Help
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-blue-200 text-base sm:text-lg max-w-3xl mx-auto"
          >
            If your funds are being held by Amazon or disbursements are delayed, we can help you resolve the issue and ensure timely payments.
          </motion.p>
        </motion.header>

        {/* Main Content */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="bg-white text-gray-900 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-6 text-blue-900"
          >
            Our Services Include
          </motion.h2>
          <motion.ul 
            variants={containerVariants}
            className="space-y-4 text-base sm:text-lg"
          >
            {[
              "Investigating the reason behind fund holds",
              "Drafting and submitting professional appeals to Amazon",
              "One-on-one guidance to expedite resolution",
              "Continuous support until your issue is resolved",
              "Support and Consultancy regarding video interview related to Funds Disbursement for identity verification"
            ].map((item, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                className="flex items-start"
              >
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="bg-blue-700/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8 text-white shadow-2xl"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
          >
            Reach Out
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg mb-5 sm:mb-6"
          >
            Need help getting your funds disbursed? Contact us today:
          </motion.p>
          <motion.ul 
            variants={containerVariants}
            className="space-y-3 sm:space-y-4 text-base sm:text-lg"
          >
            <motion.li 
              variants={itemVariants}
              className="flex items-center"
            >
              <FaEnvelope className="text-blue-300 mr-3 flex-shrink-0" />
              <strong className="mr-2">Email:</strong>
              <a 
                href="mailto:info@amzreinstatementconsultant.com" 
                className="hover:underline hover:text-blue-200 transition"
              >
                info@amzreinstatementconsultant.com
              </a>
            </motion.li>
            <motion.li 
              variants={itemVariants}
              className="flex items-center"
            >
              <FaPhone className="text-blue-300 mr-3 flex-shrink-0" />
              <strong className="mr-2">Phone:</strong>
              <a 
                href="tel:+923077971099" 
                className="hover:underline hover:text-blue-200 transition"
              >
                +92 307 7971099
              </a>
            </motion.li>
            <motion.li 
              variants={itemVariants}
              className="flex items-center"
            >
              <FaWhatsapp className="text-green-300 mr-3 flex-shrink-0" />
              <strong className="mr-2">WhatsApp:</strong>
              <a
                href="https://wa.me/923077971099?text=Hello%2C%20I%20need%20help%20with%20my%20Amazon%20funds%20disbursement."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-200 transition"
              >
                Chat with us
              </a>
            </motion.li>
          </motion.ul>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default FundsDisbursement;
import React from "react";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AmazonAppeals = () => {
  return (
    <div className="min-h-screen bg-blue-900 text-white py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <motion.header
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Amazon ASIN Appeals Assistance
          </h1>
          <p className="text-blue-200 text-base sm:text-lg max-w-3xl mx-auto">
            Facing an ASIN suspension or listing removal on Amazon? We help you
            understand the reason behind the appeal and guide you through the
            process with personalized support.
          </p>
        </motion.header>

        {/* Services Section */}
        <motion.section
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white text-gray-900 rounded-3xl p-6 sm:p-10 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-900">
            What We Offer
          </h2>
          <ul className="space-y-4 sm:space-y-5 text-base sm:text-lg leading-relaxed">
            <li>✅ Expert review of your ASIN suspension notice.</li>
            <li>✅ Tailored Plan of Action (POA) writing service.</li>
            <li>✅ Document preparation and submission guidance.</li>
            <li>✅ One-on-one consultation with Amazon compliance specialists.</li>
            <li>✅ Fast turnaround and continued support until reinstatement.</li>
          </ul>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-blue-800 rounded-3xl p-6 sm:p-8 shadow-xl"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-base sm:text-lg mb-4">
            Ready to reinstate your ASIN or have questions? Reach out to us today:
          </p>
          <ul className="space-y-2 text-base sm:text-lg">
            <li>
              <strong>📧 Email:</strong> info@amzreinstatementconsultant.com
            </li>
            <li>
              <strong>📞 Phone:</strong> +92 307 7971099
            </li>
            <li>
              <strong>💬 WhatsApp:</strong>{" "}
              <a
                className="underline hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                href="https://wa.me/923077971099"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with us
              </a>
            </li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
};

export default AmazonAppeals;

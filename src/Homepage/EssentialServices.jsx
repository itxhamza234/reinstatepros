import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: "\u{1F528}",
    title: "Account Appeals",
    description:
      "Often, Amazon account reinstatement is arduous. We help get your account reinstated and position you for future success.",
    info: "We assist in drafting appeal letters and liaising with Amazon to help reinstate your suspended account efficiently.",
    route: "/account-appeals",
  },
  {
    icon: "\u{26A1}",
    title: "ASIN Appeals",
    description:
      "Minimize lost revenue by getting your ASINs reactivated quickly. We help you submit winning appeals to Amazon.",
    info: "Our experts analyze reasons for ASIN suspension and prepare targeted appeals to get your products back online fast.",
    route: "/asin-appeals",
  },
  {
    icon: "\u{2602}",
    title: "Seller Account Protection",
    description:
      "Protect your account with proactive monitoring and ASIN appeals. We check your account daily for problems.",
    info: "We provide continuous monitoring and early warnings to prevent account suspensions and loss of selling privileges.",
    route: "/account-protection",
  },
  {
    icon: "\u{2699}",
    title: "Account Support",
    description:
      "Outsource the hassles of your Amazon account. Our team can handle customer service messages, feedback and more.",
    info: "Let us handle your customer inquiries and feedback so you can focus on growing your business.",
    route: "/account-support",
  },
  {
    icon: "\u{1F4B2}",
    title: "Reimbursements",
    description:
      "Get back every penny you deserve from Amazon for lost and damaged FBA inventory. We file cases with care.",
    info: "We meticulously audit your inventory records to recover lost funds Amazon owes you.",
    route: "/reimbursements",
  },
  {
    icon: "\u{1F3E2}",
    title: "Virtual Assistant (VA)",
    description:
      "Let us serve as an extension of your business. We invest time and resources to handle daunting tasks.",
    info: "Our VAs support your daily operations, freeing you to focus on strategy.",
    route: "/virtual-assistant",
  },
];

export default function EssentialServices() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-900 px-4 py-10">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text text-center mb-12">
        Essential Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <FadeInOutCard key={index} service={service} index={index} navigate={navigate} />
        ))}
      </div>
    </div>
  );
}

function FadeInOutCard({ service, index, navigate }) {
  const [inView, setInView] = useState(false);

  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div>
        <div className="text-orange-500 text-4xl mb-3">{service.icon}</div>
        <h2 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h2>
        <p className="text-gray-700 text-sm mb-3">{service.description}</p>
        <p className="text-gray-600 italic text-sm">{service.info}</p>
      </div>
      <button
        onClick={() => navigate(service.route)}
        className="mt-6 bg-blue-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Read More
      </button>
    </motion.div>
  );
}

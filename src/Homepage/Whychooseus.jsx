import React from "react";
import { motion, useAnimation } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Whychooseus = () => {
  return (
    <section
      className="relative pt-20 pb-40 px-6 md:px-16 lg:px-32 bg-blue-900 overflow-visible"
      id="why-choose-us"
    >

      {/* Content container */}
      <div className="max-w-7xl mx-auto text-center text-white relative z-10 overflow-visible">
        {/* Main title */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
          style={{ overflow: "visible" }}
        >
          Amazon{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Experts
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl font-semibold mb-12 px-4"
          style={{ overflow: "visible" }}
        >
          We are Amazon reinstatement consultants with over 10,000 successful
          cases globally. Our expert team ensures your account and funds are
          recovered efficiently, so you can focus on growing your business.
        </motion.p>

        {/* Secondary heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          style={{ overflow: "visible" }}
        >
          Hello
          <span style={{ fontFamily: "Pacifico, cursive" }}>,</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Customers
          </span>
        </motion.h2>

        {/* Details */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl font-medium space-y-6 px-4"
          style={{ overflow: "visible" }}
        >
          <p>
            Our team is packed with subject-matter experts — from ex-Amazon
            employees to long-time sellers and brand owners. We specialize in
            tackling the challenges that others won't touch.
          </p>
          <p>
            With unmatched work ethic and integrity, we fight alongside our
            clients, ease their minds, and free up their time. Our goal is to
            help boost your profits while you focus on what matters most —
            growing your brand.
          </p>
          <p>
            We collaborate closely with you, alleviate your concerns, and
            streamline your workload. From Amazon account reinstatement to
            resolving the toughest issues, we get the job done — no matter how
            complex.
          </p>
          <p>
            Beyond reinstatement, we offer tailored strategies to protect your
            account, recover lost funds, and maintain seller health. Consider us
            your trusted partner in navigating the Amazon marketplace.
          </p>
        </motion.div>

        {/* CTA button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-16 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 px-10 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          onClick={() =>
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
          }
        >
          Get Started
        </motion.button>
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-blue-900/90"></div>
    </section>
  );
};

export default Whychooseus;

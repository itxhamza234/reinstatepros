import React from "react";

const Consulting = () => {
  return (
    <div className="bg-blue-900 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Amazon Suspension Consulting
        </h1>
        <p className="text-white text-base sm:text-lg mb-10 px-2 sm:px-4">
          We specialize in helping Amazon sellers recover from account and listing suspensions. 
          Our expert team handles appeal drafting, compliance strategies, and full account restorations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {[
          {
            title: "Account Reinstatement",
            desc: "We craft personalized appeals to reinstate your suspended Amazon account quickly and effectively.",
            icon: "🛡️",
          },
          {
            title: "Policy Violation Resolution",
            desc: "We address policy violations and provide documentation to satisfy Amazon’s compliance teams.",
            icon: "📄",
          },
          {
            title: "Listing Restoration",
            desc: "Recover blocked or removed listings with professional reinstatement support.",
            icon: "🛍️",
          },
          {
            title: "Appeal Strategy Session",
            desc: "Book a 1-on-1 session with an expert to prepare your case and answer all your questions.",
            icon: "📞",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <div className="text-3xl sm:text-4xl mb-3 text-black">{item.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
            <p className="text-sm sm:text-base text-black">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 sm:mt-16 px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Need Personalized Help?
        </h2>
        <p className="text-blue-300 mb-6 text-sm sm:text-base">
          Get in touch with us to discuss your suspension issue and how we can resolve it.
        </p>
        <a
          href="/contact"
          className="bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-800 font-semibold transition inline-block"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Consulting;

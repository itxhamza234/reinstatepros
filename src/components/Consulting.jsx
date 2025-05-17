import React from "react";

const Consulting = () => {
  return (
    <div className="bg-blue-900 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Amazon Suspension Consulting</h1>
        <p className="text-white text-lg mb-10">
          We specialize in helping Amazon sellers recover from account and listing suspensions. 
          Our expert team handles appeal drafting, compliance strategies, and full account restorations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Feature Cards */}
        {[
          {
            title: "Account Reinstatement",
            desc: "We craft personalized appeals to reinstate your suspended Amazon account quickly and effectively.",
            icon: "🛡️"
          },
          {
            title: "Policy Violation Resolution",
            desc: "We address policy violations and provide documentation to satisfy Amazon’s compliance teams.",
            icon: "📄"
          },
          {
            title: "Listing Restoration",
            desc: "Recover blocked or removed listings with professional reinstatement support.",
            icon: "🛍️"
          },
          {
            title: "Appeal Strategy Session",
            desc: "Book a 1-on-1 session with an expert to prepare your case and answer all your questions.",
            icon: "📞"
          }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4 text-black">{item.icon}</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
            <p className="text-black">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-white mb-2">Need Personalized Help?</h2>
        <p className="text-blue-300 mb-6">Get in touch with us to discuss your suspension issue and how we can resolve it.</p>
        <a
          href="/contact"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 font-semibold transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Consulting;

import React, { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleWhatsAppSubmit = () => {
    const message = `Name: ${name}\nQuestion: ${question}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '923077971099'; // Replace with your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const faqs = [
    {
      question: "How do I reinstate my suspended Amazon account?",
      answer: "Our team prepares a detailed appeal letter addressing Amazon's concerns, provides supporting documentation, and guides you through the entire process until your account is reinstated."
    },
    {
      question: "How long does the reinstatement process take?",
      answer: "Typically 2-4 weeks depending on case complexity. Simple suspensions may resolve in 1-2 weeks, while more complex cases may take longer."
    },
    {
      question: "What's your success rate for account reinstatements?",
      answer: "We maintain a 90%+ success rate for properly documented cases. We'll evaluate your situation honestly before taking your case."
    },
    {
      question: "Do you offer refunds if unsuccessful?",
      answer: "We offer partial refunds based on work completed. Our fees are primarily for the appeal preparation and submission, not guaranteed outcomes."
    },
    {
      question: "Can you help with ASIN reinstatements?",
      answer: "Yes, we specialize in both account suspensions and individual ASIN reinstatements, including policy violation appeals."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-200 mb-8 text-base leading-relaxed">
              Find answers to common questions about our Amazon reinstatement services.
            </p>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border rounded-lg transition-all duration-300 ${
                    activeIndex === index ? 'border-blue-500 bg-white shadow-md' : 'border-gray-300 bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                  >
                    <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                    <span className="text-blue-600 text-xl">
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-[#002b5c] p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
              Ask Your Question
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-200">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-200">
                  Your Question
                </label>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  placeholder="Type your question here"
                ></textarea>
              </div>
              <button
                onClick={handleWhatsAppSubmit}
                className="w-full bg-[#25d366] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Submit via WhatsApp
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;

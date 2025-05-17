import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contactus = () => {
  const yourWhatsAppNumber = '923077971099';

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const fullMessage = `Name: ${name}\nSubject: ${subject}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a] flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left Side: Contact Info */}
        <div className="bg-[#002b5c] text-white p-10 flex flex-col justify-center animate-fade-in">
          <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">Contact Information</h2>
          <p className="text-lg mb-6 text-gray-200">
            Reach out to us during business hours or drop us a message. We’re here to help you!
          </p>
          <div className="space-y-4 text-base">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="mt-1 text-[#66b2ff]" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p>+92 307 7971099</p>
               
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaClock className="mt-1 text-[#66b2ff]" />
              <div>
                <p className="font-semibold">Business Hours</p>
                <p>Mon - Sat: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1 text-[#66b2ff]" />
              <div>
                <p className="font-semibold">Location</p>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="p-10 bg-[#f4f7fc] animate-fade-in delay-100">
          <h2 className="text-3xl font-bold text-[#002b5c] mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="flex-1 bg-white text-black rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#66b2ff]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="flex-1 bg-white text-black rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#66b2ff]"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full bg-white text-black rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#66b2ff]"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full bg-white text-black rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#66b2ff] resize-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#25d366] hover:bg-blue-600 transition-all duration-300 py-3 px-6 rounded-lg font-semibold text-white flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contactus;

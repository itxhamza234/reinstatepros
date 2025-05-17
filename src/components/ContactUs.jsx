import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "923077971099"; // your fixed WhatsApp number without +

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const text = encodeURIComponent(
      `Hello, my name is ${name}. I want to say: ${message}`
    );
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-center text-blue-700 mb-8">
          Send us a message directly on WhatsApp
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-blue-900 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border border-blue-300 rounded-xl px-5 py-3 text-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            />
          </div>
          <div>
            <label className="block text-blue-900 font-semibold mb-2">
              Message
            </label>
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full border border-blue-300 rounded-xl px-5 py-3 text-blue-900 resize-none focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition"
          >
            Send via WhatsApp
          </button>
        </form>
        <p className="mt-6 text-center text-blue-600 text-sm">
          We'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;

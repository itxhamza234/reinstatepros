import React, { useState } from "react";

const BrandRegistry = () => {
  const [formData, setFormData] = useState({
    brandName: "",
    trademarkNumber: "",
    country: "",
    contactEmail: "",
    contactNumber: "",
    description: "",
    brandLogo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, brandLogo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.brandLogo) {
      alert("Please upload your Brand Logo (this is required).");
      return;
    }

    if (!formData.contactNumber) {
      alert("Please enter your Contact Number (this is required).");
      return;
    }

    // Prepare WhatsApp message content
    const message = encodeURIComponent(
      `Brand Registration Details:
Brand Name: ${formData.brandName}
Trademark Number: ${formData.trademarkNumber}
Country: ${formData.country}
Contact Email: ${formData.contactEmail}
Contact Number: ${formData.contactNumber}
Description: ${formData.description}
Brand Logo: ${formData.brandLogo.name}`
    );

    const whatsappNumber = "923077971099";
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp link in new tab
    window.open(url, "_blank");

    alert("Thank you for registering your brand! WhatsApp will open for submission.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Brand Registry</h1>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Protect your brand and gain exclusive benefits by registering your brand with us.
            Fill out the form below to get started with your brand registry process.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="bg-white text-gray-900 rounded-3xl p-10 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              Register Your Brand
            </h2>

            <label className="block mb-3 font-semibold" htmlFor="brandName">
              Brand Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              id="brandName"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              placeholder="Your Brand Name"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 mb-6"
            />

            <label className="block mb-3 font-semibold" htmlFor="trademarkNumber">
              Trademark Number <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              id="trademarkNumber"
              name="trademarkNumber"
              value={formData.trademarkNumber}
              onChange={handleChange}
              placeholder="Trademark Registration Number"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 mb-6"
            />

            <label className="block mb-3 font-semibold" htmlFor="country">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country of Registration"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 mb-6"
            />

            <label className="block mb-3 font-semibold" htmlFor="contactEmail">
              Contact Email <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 mb-6"
            />

            <label className="block mb-3 font-semibold" htmlFor="contactNumber">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="+923xxxxxxxxx"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 mb-6"
            />

            <label className="block mb-3 font-semibold" htmlFor="brandLogo">
              Brand Logo <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="file"
              id="brandLogo"
              name="brandLogo"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mb-8"
            />

            <label className="block mb-3 font-semibold" htmlFor="description">
              Brand Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Brief description about your brand..."
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 mb-8 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition"
            >
              Submit Registration
            </button>
          </form>

          {/* Benefits Section */}
          <div className="text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Why Register Your Brand?</h2>
            <ul className="space-y-6 text-lg leading-relaxed">
              <li className="flex items-start gap-4">
                <span className="text-4xl">✅</span>
                <span>Protect your brand against unauthorized sellers and counterfeiters.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-4xl">🚀</span>
                <span>Gain access to powerful marketing tools to promote your brand.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-4xl">📈</span>
                <span>Improve your brand visibility and customer trust.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-4xl">🛡️</span>
                <span>Access advanced protection and enforcement programs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandRegistry;

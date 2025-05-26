import React, { useState } from "react";
import { motion } from "framer-motion";

const countryCodes = [
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+92", name: "Pakistan" },
  { code: "+91", name: "India" },
  { code: "+61", name: "Australia" },
  { code: "+81", name: "Japan" },
  { code: "+49", name: "Germany" },
  { code: "+33", name: "France" },
  { code: "+86", name: "China" },
  { code: "+7", name: "Russia" },
  { code: "+27", name: "South Africa" },
  { code: "+39", name: "Italy" },
  { code: "+34", name: "Spain" },
  { code: "+55", name: "Brazil" },
  { code: "+46", name: "Sweden" },
  { code: "+31", name: "Netherlands" },
  { code: "+41", name: "Switzerland" },
  { code: "+64", name: "New Zealand" },
  { code: "+353", name: "Ireland" },
  { code: "+358", name: "Finland" },
  { code: "+420", name: "Czech Republic" },
  { code: "+48", name: "Poland" },
  { code: "+36", name: "Hungary" },
  { code: "+380", name: "Ukraine" },
  { code: "+351", name: "Portugal" },
  { code: "+60", name: "Malaysia" },
  { code: "+62", name: "Indonesia" },
  { code: "+82", name: "South Korea" },
  { code: "+66", name: "Thailand" },
  { code: "+90", name: "Turkey" },
  { code: "+234", name: "Nigeria" },
  { code: "+254", name: "Kenya" },
  { code: "+966", name: "Saudi Arabia" },
  { code: "+971", name: "United Arab Emirates" },
  { code: "+95", name: "Myanmar" },
  { code: "+886", name: "Taiwan" },
  { code: "+380", name: "Ukraine" },
  { code: "+82", name: "South Korea" },
  { code: "+84", name: "Vietnam" },
  { code: "+52", name: "Mexico" },
  { code: "+507", name: "Panama" },
  { code: "+504", name: "Honduras" },
  { code: "+351", name: "Portugal" },
  { code: "+353", name: "Ireland" },
  { code: "+374", name: "Armenia" },
  { code: "+373", name: "Moldova" },
  { code: "+387", name: "Bosnia and Herzegovina" },
  { code: "+358", name: "Finland" },
  { code: "+370", name: "Lithuania" },
  { code: "+375", name: "Belarus" },
  { code: "+20", name: "Egypt" },
  { code: "+211", name: "South Sudan" },
  { code: "+218", name: "Libya" },
  { code: "+212", name: "Morocco" },
  { code: "+263", name: "Zimbabwe" },
  { code: "+261", name: "Madagascar" },
  { code: "+258", name: "Mozambique" },
  { code: "+254", name: "Kenya" },
  { code: "+250", name: "Rwanda" },
  { code: "+261", name: "Madagascar" },
  { code: "+27", name: "South Africa" },
  { code: "+41", name: "Switzerland" },
  { code: "+43", name: "Austria" },
  { code: "+45", name: "Denmark" },
  { code: "+372", name: "Estonia" },
  { code: "+371", name: "Latvia" },
  { code: "+423", name: "Liechtenstein" },
  { code: "+46", name: "Sweden" },
  { code: "+47", name: "Norway" },
  { code: "+48", name: "Poland" },
  { code: "+49", name: "Germany" },
  { code: "+351", name: "Portugal" },
  { code: "+39", name: "Italy" },
  { code: "+385", name: "Croatia" },
  { code: "+386", name: "Slovenia" },
  { code: "+387", name: "Bosnia and Herzegovina" },
  { code: "+389", name: "North Macedonia" },
  { code: "+357", name: "Cyprus" },
  { code: "+358", name: "Finland" },
  { code: "+420", name: "Czech Republic" },
  { code: "+421", name: "Slovakia" },
  { code: "+43", name: "Austria" },
  { code: "+994", name: "Azerbaijan" },
  { code: "+995", name: "Georgia" },
  { code: "+996", name: "Kyrgyzstan" },
  { code: "+998", name: "Uzbekistan" },
  { code: "+993", name: "Turkmenistan" },
  { code: "+976", name: "Mongolia" },
];




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

  const [countryCode, setCountryCode] = useState("+92");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, brandLogo: e.target.files[0] }));
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
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
    const fullContactNumber = `${countryCode}${formData.contactNumber.replace(/\D/g, "")}`;
    const message = encodeURIComponent(
      `Brand Registration Details:
Brand Name: ${formData.brandName}
Trademark Number: ${formData.trademarkNumber}
Country: ${formData.country}
Contact Email: ${formData.contactEmail}
Contact Number: ${fullContactNumber}
Description: ${formData.description}
Note: Please upload your brand logo image in this chat separately.`
    );
    const whatsappNumber = "923077971099";
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
    alert("Thank you for registering your brand! WhatsApp will open for submission.");
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-4 sm:px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Brand Registry</h1>
          <p className="text-blue-200 text-base sm:text-lg max-w-3xl mx-auto">
            Protect your brand and gain exclusive benefits by registering your brand with us. Fill out the form below to get started with your brand registry process.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">Register Your Brand</h2>

            {/* Other inputs */}
            {[
              { label: "Brand Name", name: "brandName", type: "text" },
              { label: "Trademark Number", name: "trademarkNumber", type: "text" },
              { label: "Country", name: "country", type: "text" },
              { label: "Contact Email", name: "contactEmail", type: "email" },
            ].map(({ label, name, type }) => (
              <div key={name} className="mb-6">
                <label className="block mb-2 font-semibold" htmlFor={name}>
                  {label} <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type={type}
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={`Enter your ${label}`}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
                />
              </div>
            ))}

            {/* Contact Number with country code */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold" htmlFor="contactNumber">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                  className="w-full sm:w-40 p-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-400"
                >
                  {countryCodes.map(({ code, name }) => (
                    <option key={code} value={code}>
                      {name} ({code})
                    </option>
                  ))}
                </select>

                <input
                  required
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="flex-grow p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold" htmlFor="brandLogo">
                Brand Logo <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="file"
                id="brandLogo"
                name="brandLogo"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full"
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <label className="block mb-2 font-semibold" htmlFor="description">
                Brand Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Brief description about your brand..."
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition"
            >
              Submit Registration
            </button>
          </form>

          {/* Benefits Section */}
          <div className="flex flex-col justify-center px-2 sm:px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Register Your Brand?</h2>
            <ul className="space-y-6 text-base sm:text-lg leading-relaxed">
              <li className="flex items-start gap-4">
                <span className="text-3xl">✅</span>
                <span>Protect your brand against unauthorized sellers and counterfeiters.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">🚀</span>
                <span>Gain access to powerful marketing tools to promote your brand.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">📈</span>
                <span>Improve your brand visibility and customer trust.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">🛡️</span>
                <span>Access advanced protection and enforcement programs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandRegistry;

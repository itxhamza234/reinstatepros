import React from "react";

const services = [
  {
    icon: "\u{1F528}",
    title: "Account Appeals",
    description:
      "Often, Amazon account reinstatement is arduous. We help get your account reinstated and position you for future success. Our responsive team leverages creative strategies and walks with you through the reinstatement process."
  },
  {
    icon: "\u{26A1}",
    title: "ASIN Appeals",
    description:
      "Minimize lost revenue by getting your ASINs reactivated quickly. We help you submit winning appeals to Amazon, plus offer advice to prevent similar problems in the future."
  },
  {
    icon: "\u{2602}",
    title: "Seller Account Protection",
    description:
      "Protect your account with proactive monitoring and ASIN appeals. We check your account daily for problems and work with your team to maximize account health."
  },
  {
    icon: "\u{2699}",
    title: "Account Support",
    description:
      "Outsource the hassles of your Amazon account. Our seasoned team can answer customer service messages, handle negative feedback, take on projects and more."
  },
  {
    icon: "\u{1F4B2}",
    title: "Reimbursements",
    description:
      "Get back every penny you deserve from Amazon for lost, missing and damaged FBA inventory. We file cases with care and precision, while maximizing your recouped funds."
  },
  {
    icon: "\u{1F3E2}",
    title: "Virtual Assistant (VA)",
    description:
      "Let us serve as an extension of your business. We can invest time and human resources to address your most daunting tasks."
  }
];

export default function EssentialServices() {
  return (
    <div className="min-h-screen bg-blue-900 p-10">
      <h1 className="text-4xl text-white font-bold text-center mb-8">Essential Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-md">
            <div className="text-orange-500 text-3xl mb-2">{service.icon}</div>
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";

const AmazonAppeals = () => {
  return (
    <div className="min-h-screen bg-blue-900 text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">Amazon ASIN Appeals Assistance</h1>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Facing an ASIN suspension or listing removal on Amazon? We help you understand the reason behind the appeal and guide you through the process with personalized support.
          </p>
        </header>

        {/* Main Content */}
        <section className="bg-white text-gray-900 rounded-3xl p-10 shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">What We Offer</h2>
          <ul className="space-y-5 text-lg">
            <li>✅ Expert review of your ASIN suspension notice.</li>
            <li>✅ Tailored Plan of Action (POA) writing service.</li>
            <li>✅ Document preparation and submission guidance.</li>
            <li>✅ One-on-one consultation with Amazon compliance specialists.</li>
            <li>✅ Fast turnaround and continued support until reinstatement.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-800 rounded-3xl p-8 text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            Ready to reinstate your ASIN or have questions? Reach out to us today:
          </p>
          <ul className="text-lg space-y-2">
            <li><strong>📧 Email:</strong> info@amzreinstatementconsultant.com</li>
            <li><strong>📞 Phone:</strong> +92 307 7971099</li>
            <li>
              <strong>💬 WhatsApp:</strong>{" "}
              <a
                className="underline hover:text-blue-300"
                href="https://wa.me/923077971099"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with us
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AmazonAppeals;

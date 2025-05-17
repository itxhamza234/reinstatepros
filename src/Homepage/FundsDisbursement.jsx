import React from 'react';

const FundsDisbursement = () => {
  return (
    <div className="min-h-screen bg-blue-900 text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">Amazon Funds Disbursement Help</h1>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            If your funds are being held by Amazon or disbursements are delayed, we can help you resolve the issue and ensure timely payments.
          </p>
        </header>

        {/* Main Content */}
        <section className="bg-white text-gray-900 rounded-3xl p-10 shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Services Include</h2>
          <ul className="space-y-5 text-lg">
            <li>✅ Investigating the reason behind fund holds.</li>
            <li>✅ Drafting and submitting professional appeals to Amazon.</li>
            <li>✅ One-on-one guidance to expedite resolution.</li>
            <li>✅ Continuous support until your issue is resolved.</li>
            <li>✅ Support and Consultancy regarding video interview related to Funds Disbursement for identity verification.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-800 rounded-3xl p-8 text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Reach Out</h2>
          <p className="text-lg mb-4">
            Need help getting your funds disbursed? Contact us today:
          </p>
          <ul className="text-lg space-y-2">
            <li><strong>📧 Email:</strong> info@amzreinstatementconsultant.com</li>
            <li><strong>📞 Phone:</strong> +92 307 7971099</li>
            <li>
              <strong>💬 WhatsApp:</strong>{' '}
              <a
                className="underline"
                href="https://wa.me/923077971099?text=Hello%2C%20I%20need%20help%20with%20my%20Amazon%20funds%20disbursement."
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

export default FundsDisbursement;

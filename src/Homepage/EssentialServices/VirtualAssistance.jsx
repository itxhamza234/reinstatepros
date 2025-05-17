import React from 'react';

const VirtualAssistance = () => {
  return (
    <div className="min-h-screen bg-blue-900 text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">Virtual Assistant Services</h1>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Delegate time-consuming tasks to our trained Amazon Virtual Assistants so you can scale stress-free.
          </p>
        </header>

        <section className="bg-white text-gray-900 rounded-3xl p-10 shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">VA Services Offered</h2>
          <ul className="space-y-5 text-lg">
            <li>✅ Listing creation & optimization.</li>
            <li>✅ Product research & competitor analysis.</li>
            <li>✅ Buyer messages & feedback handling.</li>
            <li>✅ Data entry, order tracking, and admin tasks.</li>
          </ul>
        </section>

        <ContactSection />
      </div>
    </div>
  );
};

const ContactSection = () => (
  <section className="bg-blue-800 rounded-3xl p-8 text-white shadow-xl">
    <h2 className="text-2xl font-bold mb-4">Hire a VA Now</h2>
    <ul className="text-lg space-y-2">
      <li><strong>📧 Email:</strong> info@amzreinstatementconsultant.com</li>
      <li><strong>📞 Phone:</strong> +92 307 7971099</li>
      <li>
        <strong>💬 WhatsApp:</strong>{' '}
        <a className="underline" href="https://wa.me/923077971099?text=I%20need%20an%20Amazon%20Virtual%20Assistant" target="_blank" rel="noopener noreferrer">
          Chat with us
        </a>
      </li>
    </ul>
  </section>
);

export default VirtualAssistance;

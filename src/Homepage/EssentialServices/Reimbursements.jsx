import React from 'react';

const Reimbursements = () => {
  return (
    <div className="min-h-screen bg-blue-900 text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">Amazon FBA Reimbursements</h1>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Recover lost or damaged inventory reimbursements from Amazon through detailed audits and expert filing.
          </p>
        </header>

        <section className="bg-white text-gray-900 rounded-3xl p-10 shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Services</h2>
          <ul className="space-y-5 text-lg">
            <li>✅ Inventory report audits for eligibility.</li>
            <li>✅ Filing claims for damaged or lost units.</li>
            <li>✅ Monthly case follow-ups with Amazon.</li>
            <li>✅ Transparent tracking of recovered funds.</li>
          </ul>
        </section>

        <ContactSection />
      </div>
    </div>
  );
};

const ContactSection = () => (
  <section className="bg-blue-800 rounded-3xl p-8 text-white shadow-xl">
    <h2 className="text-2xl font-bold mb-4">Let’s Recover Your Money</h2>
    <ul className="text-lg space-y-2">
      <li><strong>📧 Email:</strong> info@amzreinstatementconsultant.com</li>
      <li><strong>📞 Phone:</strong> +92 307 7971099</li>
      <li>
        <strong>💬 WhatsApp:</strong>{' '}
        <a className="underline" href="https://wa.me/923077971099?text=Help%20me%20recover%20Amazon%20FBA%20reimbursements" target="_blank" rel="noopener noreferrer">
          Chat with us
        </a>
      </li>
    </ul>
  </section>
);

export default Reimbursements;

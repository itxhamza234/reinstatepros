// src/components/WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '923077971099'; // ✅ Correct format: no '+' and no spaces
  const message = 'Hello! I need help with your services.';

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        zIndex: 9999,
        cursor: 'pointer'
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;

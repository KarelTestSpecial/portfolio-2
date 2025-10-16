import React from 'react';

interface ContactProps {
    contact: {
        email: string;
        address: string;
    },
    translations: any;
}

const Contact: React.FC<ContactProps> = ({ contact, translations }) => {
  if (!contact) {
    return null;
  }
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2>{translations.contact}</h2>
        <p className="lead">{translations.contactSub}</p>
        <p><a href={`mailto:${contact.email}`} className="text-white">{contact.email}</a></p>
        <p>{contact.address}</p>
      </div>
    </section>
  );
};

export default Contact;

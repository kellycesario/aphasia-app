import React from 'react';
import ContactForm from '../../molecules/ContactForm';
import './styles.scss';

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact__title">Be in Touch</h1>
      <ContactForm />
    </section>
  );
};

export default Contact;

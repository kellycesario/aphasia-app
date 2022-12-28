import React from 'react';
import { TextArea, Input } from '../../atoms';
//import './styles.scss';

const ContactForm = () => {
  return (
    <form className="contact__form">
      <div className="contact__control">
        <Input id="Name" label="Name" type="text" placeholder="John" />
        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="johndoe@email.com"
        />
      </div>
      <div className="contact__control">
        <Input id="phone" label="Phone" type="text" placeholder="99999-9999" />
        <Input id="subject" label="Subject" type="text" placeholder="Subject" />
      </div>
      <div className="contact__control">
        <TextArea id="message" label="Message" />
      </div>
      <button className="contact__button" role="button">
        Send Message{' '}
      </button>
    </form>
  );
};

export default ContactForm;

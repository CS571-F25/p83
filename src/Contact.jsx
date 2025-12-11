import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section aria-labelledby="contact-heading" className="py-5">
      <Container>
        <h1 id="contact-heading">Contact Us</h1>
        <p className="mt-3">
          Interested in volunteering or partnering with us? Fill out the form below and we&apos;ll
          reach out with more information.
        </p>
        <ContactForm />
      </Container>
    </section>
  );
}

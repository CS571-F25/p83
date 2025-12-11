import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {submitted && (
        <Alert variant="success" aria-live="polite">
          Thank you! Your message has been received. We will follow up with you soon.
        </Alert>
      )}

      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group className="mb-3" controlId="contactName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactRole">
          <Form.Label>You are a...</Form.Label>
          <Form.Select required>
            <option value="">Select one</option>
            <option value="student">Student volunteer</option>
            <option value="senior">Senior participant</option>
            <option value="staff">Staff/partner</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </>
  );
}

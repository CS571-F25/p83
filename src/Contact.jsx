import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container className="mt-5">
      <h2>Contact Us</h2>
      <p className="mt-3">Have questions? Reach out using the form below.</p>

      <Form className="mt-3">
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Type your message..." />
        </Form.Group>

        <Button variant="primary">Submit</Button>
      </Form>
    </Container>
  );
}

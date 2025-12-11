import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="py-5 bg-dark text-light">
      <Container className="text-center">
        <h1 id="hero-heading">Befriend Seniors</h1>
        <p className="mt-3">
          Connecting student volunteers with older adults for meaningful virtual conversations.
        </p>
        <Button variant="primary" href="#/contact">
          Become a Volunteer
        </Button>
      </Container>
    </section>
  );
}

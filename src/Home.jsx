import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Befriend Seniors</h1>
      <p className="mt-3">
        Connecting student volunteers with seniors for meaningful virtual conversations.
      </p>
      <Button variant="primary">Get Started</Button>
    </Container>
  );
}

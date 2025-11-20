import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-light py-3 mt-5">
      <Container className="text-center">
        <small>© {new Date().getFullYear()} Befriend Seniors. All rights reserved.</small>
      </Container>
    </footer>
  );
}

import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="hero-section text-center py-5"
      style={{ backgroundColor: "#d4e8f2" }}
    >
      <Container>
        <h1 className="mb-3" style={{ fontWeight: "bold" }}>
          Welcome to Befriend Seniors
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Building meaningful connections between students and senior citizens
          through virtual conversations.
        </p>

        
        <Link to="/contact">
          <Button variant="primary" size="lg" className="mt-3">
            Become a Volunteer
          </Button>
        </Link>
      </Container>
    </section>
  );
}

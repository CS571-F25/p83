import React from 'react';
import HeroSection from './HeroSection';
import FeatureList from './FeatureList';
import { Container, Row } from 'react-bootstrap';
import TestimonialCard from './TestimonialCard';
import SeniorMatchWidget from './SeniorMatchWidget';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureList />
      <section aria-labelledby="testimonials-heading" className="py-5">
        <Container>
          <h2 id="testimonials-heading" className="text-center mb-4">
            What People Say
          </h2>
          <Row>
            <TestimonialCard
              quote="Talking with students makes my week feel brighter."
              name="Maria"
              role="Senior participant"
            />
            <TestimonialCard
              quote="I’ve learned so much from my conversations with older adults."
              name="Ryan"
              role="Student volunteer"
            />
            <TestimonialCard
              quote="This program helped me feel less alone during the pandemic."
              name="James"
              role="Senior participant"
            />
          </Row>
        </Container>
      </section>
      <SeniorMatchWidget />
    </>
  );
}

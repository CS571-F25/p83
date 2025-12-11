import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FeatureItem from './FeatureItem';

export default function FeatureList() {
  const features = [
    {
      title: 'Flexible Scheduling',
      text: 'Students and seniors choose times that work for them.',
    },
    {
      title: 'Meaningful Connections',
      text: 'Regular conversations help reduce loneliness and build empathy.',
    },
    {
      title: 'Simple Tech Setup',
      text: 'Easy Zoom or phone-based calls with clear instructions.',
    },
  ];

  return (
    <section aria-labelledby="features-heading" className="py-5">
      <Container>
        <h2 id="features-heading" className="text-center mb-4">
          How the Program Helps
        </h2>
        <Row>
          {features.map((f) => (
            <FeatureItem key={f.title} title={f.title} text={f.text} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

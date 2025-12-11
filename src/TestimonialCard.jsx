import React from 'react';
import { Col, Card } from 'react-bootstrap';

export default function TestimonialCard({ quote, name, role }) {
  return (
    <Col md={4} className="mb-3">
      <Card className="h-100">
        <Card.Body>
          <Card.Text>“{quote}”</Card.Text>
          <Card.Subtitle className="mt-2 text-muted">
            {name}, {role}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}

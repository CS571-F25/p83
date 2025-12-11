import React from 'react';
import { Col, Card } from 'react-bootstrap';

export default function FeatureItem({ title, text }) {
  return (
    <Col md={4} className="mb-3">
      <Card className="h-100">
        <Card.Body>
          <Card.Title as="h3" className="h5">
            {title}
          </Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

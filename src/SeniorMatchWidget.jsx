import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const seniors = [
  { name: 'Evelyn', interest: 'Gardening and cooking', availability: 'Evenings' },
  { name: 'Mr. Patel', interest: 'Cricket and history', availability: 'Weekends' },
  { name: 'Georgia', interest: 'Storytelling and music', availability: 'Afternoons' },
];

export default function SeniorMatchWidget() {
  const [match, setMatch] = useState(null);

  const handleMatch = () => {
    const random = seniors[Math.floor(Math.random() * seniors.length)];
    setMatch(random);
  };

  return (
    <section aria-labelledby="match-heading" className="py-5 bg-light">
      <h2 id="match-heading" className="text-center mb-3">
        Try a Sample Match
      </h2>
      <Card className="mx-auto" style={{ maxWidth: '400px' }}>
        <Card.Body className="text-center">
          <Card.Text>
            Click the button to see an example of how we could match you with a senior.
          </Card.Text>
          <Button variant="primary" onClick={handleMatch} className="mb-3">
            Find a Match
          </Button>
          {match && (
            <div aria-live="polite">
              <p>
                <strong>Senior:</strong> {match.name}
              </p>
              <p>
                <strong>Interests:</strong> {match.interest}
              </p>
              <p>
                <strong>Available:</strong> {match.availability}
              </p>
            </div>
          )}
        </Card.Body>
      </Card>
    </section>
  );
}

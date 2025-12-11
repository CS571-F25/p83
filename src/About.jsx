import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

export default function About() {
  return (
    <section aria-labelledby="about-heading" className="py-5">
      <Container>
        <h1 id="about-heading" className="mb-4">
          About Befriend Seniors
        </h1>

        {/* Mission Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <p>
              Befriend Seniors is a student-led initiative focused on reducing
              loneliness among older adults by pairing them with student
              volunteers for recurring virtual conversations. Our mission is to
              build meaningful relationships across generations—one conversation
              at a time.
            </p>
            <p>
              Volunteers share stories, learn from life experiences, and
              participate in weekly or bi-weekly calls that create a consistent,
              supportive connection for seniors. What started during the
              pandemic has grown into a sustainable community program dedicated
              to empathy, companionship, and long-term human connection.
            </p>
          </Col>

          <Col md={6} className="text-center">
            <Image
              src="https://images.pexels.com/photos/7551678/pexels-photo-7551678.jpeg"
              alt="Elderly woman smiling during a conversation"
              fluid
              rounded
              className="shadow"
            />
          </Col>
        </Row>

        {/* Program Snapshot */}
        <Row className="mb-5">
          <Col md={4} className="mb-3">
            <Card className="h-100">
              <Card.Img
                src="https://images.pexels.com/photos/8439070/pexels-photo-8439070.jpeg"
                alt="Senior talking happily with a student volunteer"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <Card.Body>
                <Card.Title as="h2" className="h5">
                  Program Snapshot
                </Card.Title>
                <ul>
                  <li>Weekly or bi-weekly conversation calls</li>
                  <li>Simple tech setup with clear onboarding</li>
                  <li>Students matched by shared interests</li>
                  <li>Support for seniors with accessibility needs</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8} className="d-flex align-items-center">
            <p className="mt-3 mt-md-0">
              Our matching system connects seniors and students based on
              personality, hobbies, and availability. This helps create
              long-lasting relationships rather than one-time interactions. Many
              participants report increased happiness, improved communication
              skills, and stronger emotional well-being as a result of regular
              check-ins.
            </p>
          </Col>
        </Row>

        {/* Values Section */}
        <Row>
          <Col md={12}>
            <h2 className="h4 mb-3">Our Values</h2>
            <p>
              At the core of Befriend Seniors is respect—for the wisdom of older
              generations, for the time students contribute, and for the stories
              that make each relationship unique. We believe in accessible,
              compassionate communication and strive to ensure every senior
              feels heard, valued, and connected.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

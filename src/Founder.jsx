import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import founderImg from "./assets/founder.jpg"; // Add your photo to src/assets

function Founder() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm founder-card">
            <Row>
              <Col md={4} className="text-center">
                <img
                  src={founderImg}
                  alt="Founder"
                  className="img-fluid rounded-circle founder-img"
                  style={{ width: "180px", height: "180px", objectFit: "cover" }}
                />
              </Col>

              <Col md={8}>
                <h2 className="mb-3" style={{ color: "#3a4a5a" }}>
                  Meet the Founder
                </h2>

                <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                  Hi, I'm <strong>[Your Name]</strong>, the creator of Befriend Seniors. 
                  I built this platform during the COVID-19 pandemic to connect student 
                  volunteers with seniors who were experiencing increased isolation. 
                  What started as a personal passion project quickly grew into a community 
                  of nearly 150 volunteers and countless meaningful conversations.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                  I believe that technology should bring people closer together. 
                  My mission with Befriend Seniors is to reduce loneliness, encourage 
                  intergenerational friendships, and create a space where students 
                  and seniors can form genuine connections.
                </p>

                <p style={{ fontSize: "1.05rem" }}>
                  Thank you for supporting this mission — together we can make a difference.
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Founder;

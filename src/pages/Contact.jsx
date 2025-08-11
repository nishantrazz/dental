// src/pages/Contact.jsx
import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact-page py-5">
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="lead text-muted">
            We’re Here to Help You Smile, Anytime
          </p>
          <p>
            At Akash Dental, your comfort and convenience matter most. Whether you have a quick question,
            need advice, or want to schedule your next visit, our friendly staff is always ready to assist.
          </p>
        </div>

        <Row className="g-4">
          {/* Contact Info */}
          <Col md={6}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h4>📞 Get in Touch</h4>
                <p>
                  <strong>Call Us:</strong>{" "}
                  <a href="tel:08207826384">082078 26384</a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:akashdental@gmail.com">akashdental@gmail.com</a>
                </p>
                <p>
                  <strong>Visit Us:</strong> Near Masjid, Basar Bigha Rd, Bihar Sharif, Bihar 803118
                </p>
                <p>
                  <a
                    href="https://www.google.com/maps?q=Near+Masjid,+Basar+Bigha+Rd,+Bihar+Sharif,+Bihar+803118"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📍 Click Here for Directions
                  </a>
                </p>
              </Card.Body>
            </Card>

            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h4>⏰ Clinic Hours</h4>
                <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-muted">
                  * Emergency dental care available by prior call
                </p>
              </Card.Body>
            </Card>

            {/* Embedded Map */}
            <Card className="shadow-sm">
              <Card.Body>
                <h4>📍 Find Us Easily</h4>
                <iframe
                  title="Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.1234567890123!2d85.5234567!3d25.1976543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2d23abc123456%3A0x987654321abcdef!2sNear%20Masjid%2C%20Basar%20Bigha%20Rd%2C%20Bihar%20Sharif%2C%20Bihar%20803118!5e0!3m2!1sen!2sin!4v0000000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <div className="mt-3">
                  <Button
                    variant="primary"
                    href="https://www.google.com/maps?q=Near+Masjid,+Basar+Bigha+Rd,+Bihar+Sharif,+Bihar+803118"
                    target="_blank"
                  >
                    Get Directions
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <h4>💬 Quick Contact Form</h4>
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>Phone / Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone or email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message / Dental Concern</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>Preferred Appointment Date (optional)</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Final Call to Action */}
        <div className="text-center mt-5">
          <h2>Your Smile Journey Starts with a Single Step.</h2>
          <div className="mt-3">
            <Button variant="warning" size="lg" className="me-3">
              Book Appointment
            </Button>
            <Button variant="outline-warning" size="lg">
              Pay Online
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;

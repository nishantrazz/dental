// pages/AboutUs.jsx
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-light text-center py-5">
        <Container>
          <img
            src="pic1.jpg"
            alt="Akash Dental Clinic"
            className="img-fluid mb-4 rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <h1 className="display-5 fw-bold">
            Creating Healthy, Confident Smiles Since 2005
          </h1>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="py-5">
        <Container>
          <h2 className="mb-4 text-primary">Who We Are</h2>
          <p>
            Akash Dental has been serving the community since 2005, offering
            world-class dental care in a friendly and comfortable environment.
            Founded by Dr. Akash [Last Name], our clinic has welcomed over 5,000
            happy patients and earned multiple awards for excellence in dental
            care.
          </p>
        </Container>
      </section>

      {/* What We Do */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="mb-4 text-primary">What We Do</h2>
          <p>
            We offer a full range of dental treatments, from general dentistry
            to advanced cosmetic and implant procedures. Using the latest
            technology such as digital X-rays, intraoral cameras, and painless
            anesthesia, we ensure precise and comfortable treatments for every
            patient.
          </p>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-5">
        <Container>
          <h2 className="mb-4 text-primary">Our Values</h2>
          <ul>
            <li>Compassion & Care</li>
            <li>Excellence & Precision</li>
            <li>Safety & Hygiene First</li>
            <li>Patient Education & Transparency</li>
          </ul>
        </Container>
      </section>

      {/* Meet Our Experts */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="mb-4 text-primary">Meet Our Experts</h2>
          <Row>
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Img variant="top" src="pic2.jpg" />
                <Card.Body>
                  <Card.Title>Dr. Akash [Last Name]</Card.Title>
                  <Card.Text>
                    Founder & Chief Dentist – 20+ years of experience in
                    restorative and cosmetic dentistry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Img variant="top" src="pic3.jpg" />
                <Card.Body>
                  <Card.Title>Dr. Priya [Last Name]</Card.Title>
                  <Card.Text>
                    Orthodontics Specialist – Invisalign-certified with over
                    1,000 successful smile transformations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Facilities */}
      <section className="py-5">
        <Container>
          <h2 className="mb-4 text-primary">Our Facilities</h2>
          <Row>
            <Col md={4}>
              <img
                src="pic1.jpg"
                className="img-fluid rounded shadow"
                alt="Dental Chair"
              />
            </Col>
            <Col md={4}>
              <img
                src="pic2.jpg"
                className="img-fluid rounded shadow"
                alt="Reception"
              />
            </Col>
            <Col md={4}>
              <img
                src="pic3.jpg"
                className="img-fluid rounded shadow"
                alt="Waiting Area"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Awards & Accreditations */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="mb-4 text-primary">Awards & Accreditations</h2>
          <p>
            Proud member of the Indian Dental Association and recognized as the
            “Best Dental Clinic” in the city for 3 consecutive years.
          </p>
        </Container>
      </section>

      {/* Patient Testimonials */}
      <section className="py-5">
        <Container>
          <h2 className="mb-4 text-primary">What Our Patients Say</h2>
          <blockquote className="blockquote">
            “The doctors are extremely professional and made me feel at ease.
            My smile has never looked better!” – Ramesh K.
          </blockquote>
          <blockquote className="blockquote">
            “Best dental experience ever – clean, safe, and quick treatment.” –
            Sneha P.
          </blockquote>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-primary text-white py-5">
        <Container>
          <h2>Book Your Consultation Today</h2>
          <Button variant="light" size="lg" href="/book-appointment">
            Book Appointment
          </Button>
          <p className="mt-3">
            <a
              href="https://goo.gl/maps/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Visit Us on Google Maps
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}

export default AboutUs;

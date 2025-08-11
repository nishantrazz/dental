import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css"; 

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero-section d-flex align-items-center text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,50,0.4), rgba(0,0,50,0.4)), url('/pic3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh"
        }}
      >
        <Container data-aos="fade-up">
          <h1 className="display-3 fw-bold animate-title">Your Smile, Our Priority</h1>
          <p className="lead animate-subtitle">
            Trusted dental care for healthy, confident smiles – in a safe, friendly environment.
          </p>
          <div className="mt-4">
            <Button href="/book-appointment" variant="light" size="lg" className="me-3 btn-hover-scale">
              Book Appointment
            </Button>
            <Button href="/pay-online" variant="outline-light" size="lg" className="btn-hover-scale">
              Pay Online
            </Button>
          </div>
        </Container>
      </section>

      {/* ABOUT US */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <h2 className="section-title">Caring for Your Smile Since 2005</h2>
              <p>
                At My Dental Clinic, we combine advanced dental technology with personalized care
                to create the perfect smile for you. From regular check-ups to complete smile
                makeovers, our experienced dentists ensure you feel comfortable, informed, and
                confident at every step.
              </p>
              <Button href="/about" variant="primary" className="btn-hover-scale">
                Learn More
              </Button>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img src="/pic2.jpg" alt="About Us" className="img-fluid rounded shadow-lg img-hover-zoom" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-5 bg-light">
        <Container data-aos="fade-up">
          <h2 className="text-center mb-4 section-title">Our Dental Services</h2>
          <p className="text-center mb-5 text-muted">Complete dental solutions for the entire family.</p>
          <Row>
            {[
              { title: "General Dentistry", desc: "Regular check-ups, fillings, cleaning" },
              { title: "Cosmetic Dentistry", desc: "Teeth whitening, veneers, smile design" },
              { title: "Orthodontics", desc: "Braces & Invisalign aligners" },
              { title: "Dental Implants", desc: "Replace missing teeth with natural-looking solutions" },
              { title: "Pediatric Dentistry", desc: "Gentle care for kids" },
              { title: "Emergency Dentistry", desc: "24/7 urgent dental care" }
            ].map((service, index) => (
              <Col md={4} className="mb-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <Card className="h-100 shadow service-card">
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">Why Patients Trust Us</h2>
          <Row className="text-center">
            {[
              "10+ Years of Experience",
              "Latest Dental Technology",
              "Pain-Free Treatment Options",
              "Hygiene & Safety First",
              "Friendly & Caring Staff",
              "Transparent Pricing"
            ].map((point, index) => (
              <Col md={4} className="mb-3" key={index} data-aos="flip-up" data-aos-delay={index * 100}>
                <div className="p-3 border rounded shadow-sm bg-light highlight-card">{point}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;

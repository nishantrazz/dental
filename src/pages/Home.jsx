import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";
import Testimonials from "./Testimonials";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section d-flex align-items-center text-dark w-100 m-0 p-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover" }}
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <Container fluid className="position-relative px-3 px-md-5" data-aos="fade-up">
          <Row className="align-items-center g-4">
            <Col lg={6} md={8} sm={12}>
              <div className="p-3 p-md-4 rounded shadow hero-content bg-light-box bg-opacity-75">
                <h1 className="fw-bold display-6 display-md-5 mb-3">
                  Dental Comfort Zone:
                  <br />
                  <span className="text-primary">
                    Best Dental Clinic in Bihar
                  </span>
                </h1>
                <p className="lead fs-6 fs-md-5">
                  Led by <strong>Dr. Akash</strong>, we offer personalized
                  dental solutions with modern technology for all age groups.
                </p>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <Button
                    variant="primary"
                    size="lg"
                    className="flex-fill flex-md-grow-0"
                    href="/BookAppointment"
                  >
                    Book Appointment
                  </Button>

                  <Button
                    variant="success"
                    size="lg"
                    className="flex-fill flex-md-grow-0"
                    href="tel:+916200824485"
                  >
                    +91 6200 824485
                  </Button>
                </div>
                <div className="d-flex flex-wrap gap-3 mt-3 text-muted small">
                  <span>✔ Professional</span>
                  <span>✔ Friendly</span>
                  <span>✔ Convenient</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ABOUT US */}
      <section className="py-5 about w-100">
        <Container fluid className="px-3 px-md-5">
          <Row className="align-items-center g-4">
            <Col md={6} data-aos="fade-right">
              <h2 className="section-title fs-3 fs-md-2">Caring for Your Smile Since 2005</h2>
              <p>
                At Akash Dental, we combine advanced dental technology with personalized care to create the perfect smile for you.
                From regular check-ups to complete smile makeovers, our experienced dentists ensure you feel comfortable, informed,
                 and confident at every step.
              </p>
              <Button href="/about" variant="primary" className="btn-hover-scale">
                Learn More
              </Button>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img
                src="/pic2.jpg"
                alt="About Us"
                className="img-fluid rounded shadow-lg img-hover-zoom"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-5 text-white w-100" style={{ backgroundColor: "#0077b6" }}>
        <Container fluid className="px-3 px-md-5" data-aos="fade-up">
          <h2 className="text-center mb-4 section-title text-white fs-3 fs-md-2">
            Our Dental Services
          </h2>
          <p className="text-center mb-5 text-light fs-6 fs-md-5">
            Complete dental solutions for the entire family.
          </p>
          <Row>
            {[
              { title: "General Dentistry", desc: "Regular check-ups, fillings, cleaning", img: "/genral.jpg" },
              { title: "Cosmetic Dentistry", desc: "Teeth whitening, veneers, smile design", img: "/cosmetic.jpg" },
              { title: "Orthodontics", desc: "Braces & Invisalign aligners", img: "/orthodontics.jpg" },
              { title: "Dental Implants", desc: "Replace missing teeth with natural-looking solutions", img: "/implant.jpg" },
              { title: "Pediatric Dentistry", desc: "Gentle care for kids", img: "/pediatric.jpg" },
              { title: "Emergency Dentistry", desc: "24/7 urgent dental care", img: "/emergency.jpg" },
            ].map((service, index) => (
              <Col md={4} sm={6} xs={12} className="mb-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <Card className="h-100 shadow-sm service-card border-0">
                  <Card.Img
                    variant="top"
                    src={service.img}
                    alt={service.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fs-5">{service.title}</Card.Title>
                    <Card.Text className="fs-6">{service.desc}</Card.Text>
                    <Button variant="light" href="#" className="mt-auto text-primary fw-bold">
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5 why-choose-us w-100">
        <Container fluid className="px-3 px-md-5">
          <h2 className="text-center mb-5 section-title fs-3 fs-md-2" data-aos="fade-up">
            Why Patients Trust Us
          </h2>
          <Row className="text-center g-3">
            {[
              "10+ Years of Experience",
              "Latest Dental Technology",
              "Pain-Free Treatment Options",
              "Hygiene & Safety First",
              "Friendly & Caring Staff",
              "Transparent Pricing",
            ].map((point, index) => (
              <Col md={4} sm={6} xs={12} className="mb-4" key={index} data-aos="flip-up" data-aos-delay={index * 100}>
                <div className="highlight-card p-4 h-100">
                  <i className="bi bi-check-circle-fill icon-style"></i>
                  <h5 className="mt-3 fs-6 fs-md-5">{point}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* TESTIMONIALS */}
 <Testimonials />

{/* APPOINTMENT CTA */}
<section className="py-5 text-center text-white" style={{ backgroundColor: "#0077b6" }}>
  <Container fluid className="px-3 px-md-5">
    <h2 className="display-6 fw-bold mb-3">Ready for a Healthier Smile?</h2>
    <p className="lead mb-4">
      Book your appointment today and let us care for your smile.
    </p>
    <Button variant="light" size="lg" href="/BookAppointment">
      Book Appointment
    </Button>
  </Container>
</section>

    </>
  );
};

export default Home;

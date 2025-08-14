import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero-section d-flex align-items-center text-white w-100 m-0 p-0"
        style={{
          backgroundImage: "url('Banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        ></div>

        <div
          className="position-relative w-100 px-4 px-md-5"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "2rem",
          }}
          data-aos="fade-up"
        >
          <div className="col-lg-6 col-md-7 col-sm-12">
            <div
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                padding: "2rem",
                boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              {/* Headline with animation */}
              <h1 className="animated-headline">
                <span className="word">Your</span>{" "}
                <span className="word">Smile,</span>{" "}
                <span className="word highlight">Our</span>{" "}
                <span className="word highlight">Priority</span>
              </h1>

              {/* Subheadline */}
              <p className="lead mb-4" style={{ color: "#f8f9fa" }}>
                Trusted dental care for healthy, confident smiles – in a safe, friendly environment.
              </p>

              {/* Buttons */}
              <div className="d-flex flex-wrap gap-3">
             <Link to="/BookAppointment" className="cta-btn primary-btn">Book Appointment</Link>
            <Button as={Link} to="/PayOnline" variant="outline-light" className="cta-btn secondary-btn">
              Pay Online
            </Button>
              </div>
            </div>
          </div>
        </div>
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
      <section className="py-5 text-white w-100" >
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
      <section className="py-5 text-center text-white" >
        <Container fluid className="px-3 px-md-5">
          <h2 className="display-6 fw-bold mb-3">Ready for a Healthier Smile?</h2>
          <p className="lead mb-4">
            Book your appointment today and let us care for your smile.
          </p>
          <div className="cta-buttons">
            <Link to="/BookAppointment" className="cta-btn primary-btn">Book Appointment</Link>
            <Button as={Link} to="/PayOnline" variant="outline-light" className="cta-btn secondary-btn">
              Pay Online
            </Button>
          </div>
        </Container>
      </section>

    </>
  );
};

export default Home;

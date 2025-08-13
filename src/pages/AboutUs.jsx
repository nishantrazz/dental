import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Testimonials from "./Testimonials";

function AboutUs() {
  return (
    <>
      {/* Hero Banner */}
      <section className="about-hero">
        <Container>
          <img
            src="pic2.jpg"
            alt="Akash Dental Clinic"
            className="img-fluid mb-4 rounded shadow about-hero-img"
          />
          <h1 className="display-5 fw-bold">
            Creating Healthy, Confident Smiles Since 2005
          </h1>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="section-gradient">
        <Container>
          <h2 className="section-title who-we-are-title">Who We Are</h2>
          <p className="lead who-we-are-lead">Caring for Smiles Since 2005</p>

          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="profile1.png"
                alt="Dr. Akash"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h4 className="who-we-are-subtitle">Our Story</h4>
              <p>
                Akash Dental was founded in 2005 by <strong>Dr. Akash</strong>, a passionate dentist dedicated to providing world-class dental care in a warm and friendly atmosphere.
                At Akash Dental, we redefine dentistry with a comforting touch. Recognized as the best dental clinic in Bihar, our mission is to deliver quality, compassionate dental care powered by advanced technology and expert hands.
                <br />
                With over a decade of experience and thousands of happy smiles, we are your go-to destination for everything from preventive checkups to complex dental procedures.
                Our modern clinic is designed to put you at ease while delivering world-class results.
              </p>

              <h4 className="who-we-are-subtitle">Experience & Achievements</h4>
              <ul className="who-we-are-list">
                <li>🦷 <strong>20+ years</strong> of experience in dentistry</li>
                <li>😊 Served over <strong>5,000 happy patients</strong></li>
                <li>🏆 Recipient of <strong>3 Excellence in Dental Care</strong> awards</li>
                <li>💡 Specialists in cosmetic and restorative dentistry</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="section-gradient">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title fw-bold what-we-do-title">What We Do</h2>
            <p className="lead text-muted what-we-do-lead">
              At <strong>Akash Dental</strong>, we combine expertise, advanced
              technology, and compassionate care to create healthy, beautiful
              smiles for every patient.
            </p>
          </div>

          <Row className="g-4">
            {/* Cosmetic Dentistry */}
            <Col md={4}>
              <div className="card shadow border-0 h-100 text-center p-4">
                <i className="fas fa-smile-beam fa-3x text-primary mb-3"></i>
                <h5 className="fw-bold">Cosmetic Dentistry</h5>
                <p className="text-muted">
                  Teeth whitening, veneers, and smile makeovers to boost your
                  confidence.
                </p>
              </div>
            </Col>
            {/* Repeat for other cards similarly */}
            <Col md={4}>
              <div className="card shadow border-0 h-100 text-center p-4">
                <i className="fas fa-tooth fa-3x text-warning mb-3"></i>
                <h5 className="fw-bold">Dental Implants</h5>
                <p className="text-muted">
                  Permanent, natural-looking solutions for missing teeth.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="card shadow border-0 h-100 text-center p-4">
                <i className="fas fa-child fa-3x text-success mb-3"></i>
                <h5 className="fw-bold">Pediatric Dentistry</h5>
                <p className="text-muted">
                  Gentle, friendly care for children of all ages.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="card shadow border-0 h-100 text-center p-4">
                <i className="fas fa-teeth-open fa-3x text-danger mb-3"></i>
                <h5 className="fw-bold">Orthodontics</h5>
                <p className="text-muted">
                  Braces and clear aligners for perfectly aligned teeth.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="card shadow border-0 h-100 text-center p-4">
                <i className="fas fa-syringe fa-3x text-info mb-3"></i>
                <h5 className="fw-bold">Root Canal & Gum Care</h5>
                <p className="text-muted">
                  Pain-free treatment for healthy teeth and gums.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="card shadow border-0 h-100 text-center p-4">
                <i className="fas fa-microscope fa-3x text-primary mb-3"></i>
                <h5 className="fw-bold">Advanced Technology</h5>
                <p className="text-muted">
                  Digital X-rays, CAD/CAM crowns, and painless anesthesia for
                  precision and comfort.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values */}
      <section className="our-values-section">
        <Container>
          <h2 className="section-title">Our Values</h2>
          <Row className="g-4">
            {[{
              icon: "bi-heart-fill",
              color: "text-primary",
              title: "Compassion & Care",
              desc: "We treat every patient like family, ensuring comfort and empathy at every step.",
            }, {
              icon: "bi-award-fill",
              color: "text-success",
              title: "Excellence & Precision",
              desc: "We deliver exceptional dental care with attention to every detail.",
            }, {
              icon: "bi-shield-check",
              color: "text-warning",
              title: "Safety & Hygiene First",
              desc: "We follow strict safety protocols for a safe, clean environment.",
            }, {
              icon: "bi-book-half",
              color: "text-danger",
              title: "Patient Education & Transparency",
              desc: "We explain every treatment so you can make informed decisions.",
            }].map((value, index) => (
              <Col md={3} sm={6} key={index} className="fade-in-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="card h-100 shadow-sm border-0 text-center p-4 hover-shadow">
                  <i className={`bi ${value.icon} ${value.color} fs-1 mb-3`}></i>
                  <h5>{value.title}</h5>
                  <p className="text-muted">{value.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* Meet Our Experts */}
      <section className="bg-light py-5 fade-in-section">
        <Container>
          <h2 className="section-title text-center mb-5">Meet Our Experts</h2>
          <Row className="g-4">
            {[{
              name: "Dr. Akash",
              role: "Founder & Chief Dentist – 20+ years of expertise in restorative and cosmetic dentistry.",
              qualifications: "BDS, MDS (Prosthodontics), Certified in Digital Smile Design",
              img: "profile1.png",
            }, {
              name: "Dr. Priya",
              role: "Orthodontics Specialist – Invisalign-certified with over 1,000 smile transformations.",
              qualifications: "BDS, MDS (Orthodontics), Invisalign Elite Provider",
              img: "profile2.png",
            }, {
              name: "Dr. Ramesh",
              role: "Pediatric Dentist – Gentle care for children with a focus on preventive dentistry.",
              qualifications: "BDS, MDS (Pediatric Dentistry), Certified in Laser Dentistry",
              img: "logo.jpg",
            }].map((doc, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 shadow-sm text-center border-0 doctor-card">
                  <Card.Img
                    variant="top"
                    src={doc.img}
                    className="doctor-img-wrapper mx-auto mt-4"
                  />
                  <Card.Body>
                    <Card.Title>{doc.name}</Card.Title>
                    <Card.Text className="text-muted">{doc.role}</Card.Text>
                    <small className="text-primary fw-bold">{doc.qualifications}</small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Our Facilities */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">Our Facilities</h2>
          <Row className="g-4">
            {[{
              img: "pic1.jpg",
              title: "Modern Equipment",
              desc: "State-of-the-art dental tools and technology for accurate diagnosis and treatment.",
            }, {
              img: "pic2.jpg",
              title: "Comfortable Waiting Area",
              desc: "A relaxing and welcoming environment designed for your comfort while you wait.",
            }, {
              img: "pic3.jpg",
              title: "Sterile & Hygienic Environment",
              desc: "We maintain the highest hygiene standards for your safety and well-being.",
            }].map((facility, i) => (
              <Col xs={12} sm={6} md={4} key={i}>
                <div className="facility-card shadow-sm rounded p-3 h-100 fade-in text-center">
                  <img
                    src={facility.img}
                    className="img-fluid rounded mb-3"
                    alt={facility.title}
                  />
                  <h5>{facility.title}</h5>
                  <p className="text-muted">{facility.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Awards & Accreditations */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="section-title text-center mb-4">Awards & Accreditations</h2>
          <p className="lead text-center mb-5 awards-lead">
            Proud member of the <strong>Indian Dental Association (IDA)</strong> and
            <strong> Invisalign Certified</strong>. Recognized as the 
            <em> “Best Dental Clinic”</em> in the city for 3 consecutive years.
          </p>

          <Row className="g-4 justify-content-center">
            {[{
              img: "certificate.png",
              title: "IDA Membership"
            }, {
              img: "certificate.png",
              title: "Invisalign Certification"
            }, {
              img: "certificate.png",
              title: "Best Dental Clinic Award"
            }].map((award, i) => (
              <Col xs={12} sm={6} md={4} lg={3} key={i} className="text-center">
                <img
                  src={award.img}
                  alt={award.title}
                  className="img-fluid rounded shadow-sm mb-3"
                />
                <h6>{award.title}</h6>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Community Involvement */}
      <section className="community-involvement-section">
        <Container>
          <h2 className="section-title community-involvement-title">
            Community Involvement
          </h2>

          <Row className="justify-content-center gx-4 gy-4">
            {[{
              icon: "fas fa-hand-holding-heart",
              title: "Free Dental Camps",
              desc: "Providing free dental checkups and treatments to underserved communities."
            }, {
              icon: "fas fa-school",
              title: "School Awareness Programs",
              desc: "Educating children on oral hygiene and healthy habits for lifelong smiles."
            }, {
              icon: "fas fa-gifts",
              title: "Charity Events",
              desc: "Supporting local charities and organizing fundraising events for social causes."
            }].map((item, idx) => (
              <Col key={idx} xs={12} md={4}>
                <div className="community-card">
                  <i className={`${item.icon} fa-3x text-primary mb-3`}></i>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <Container>
          <h2>Book Your Consultation Today</h2>
          <Button variant="light" size="lg" href="/BookAppointment">
            Book Appointment
          </Button>
          <p>
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

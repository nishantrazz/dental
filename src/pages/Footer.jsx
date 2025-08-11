import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <Container>
        <Row className="mb-4">
          {/* About Section */}
          <Col md={4} sm={12} className="mb-3">
            <img
              src="/3.svg"
              alt="Clinic Logo"
              style={{ width: "120px", marginBottom: "10px" }}
            />
            <p>
              Creating confident smiles since 2005. Providing world-class dental
              care with compassion and precision.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={2} sm={6} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/testimonials" className="text-light text-decoration-none">Testimonials</a></li>
              <li><a href="/blogs" className="text-light text-decoration-none">Blogs</a></li>
              <li><a href="/book-appointment" className="text-light text-decoration-none">Book Appointment</a></li>
            </ul>
          </Col>

          {/* Services List */}
          <Col md={3} sm={6} className="mb-3">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li><a href="/general-dentistry" className="text-light text-decoration-none">General Dentistry</a></li>
              <li><a href="/cosmetic-dentistry" className="text-light text-decoration-none">Cosmetic Dentistry</a></li>
              <li><a href="/orthodontics" className="text-light text-decoration-none">Orthodontics</a></li>
              <li><a href="/pediatric-dentistry" className="text-light text-decoration-none">Pediatric Dentistry</a></li>
              <li><a href="/dental-implants" className="text-light text-decoration-none">Dental Implants</a></li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={3} sm={12} className="mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light fs-4"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light fs-4"><FaInstagram /></a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-light fs-4"><FaWhatsapp /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-light fs-4"><FaYoutube /></a>
            </div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row className="border-top border-secondary pt-3">
          <Col md={6} sm={12}>
            <a href="/privacy-policy" className="text-light text-decoration-none me-3">Privacy Policy</a>
            <a href="/terms" className="text-light text-decoration-none">Terms & Conditions</a>
          </Col>
          <Col md={6} sm={12} className="text-md-end mt-2 mt-md-0">
            © {currentYear} My Dental Clinic – All Rights Reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

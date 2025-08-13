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
    <footer
      style={{
        background: "linear-gradient(135deg, #6cbbefff, #6de8e2ff)",
        color: "white",
      }}
      className="pt-5 pb-3"
    >
      <Container>
        <Row className="mb-4">
          {/* About Section */}
          <Col md={4} sm={12} className="mb-3">
            <img
              src="/3.svg"
              alt="Clinic Logo"
              style={{ width: "120px", marginBottom: "10px" }}
            />
            <p className="text-light opacity-75">
              Creating confident smiles since 2005. Providing world-class dental
              care with compassion and precision.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={2} sm={6} className="mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { text: "Home", href: "/" },
                { text: "About Us", href: "/About" },
                { text: "Services", href: "/services" },
                { text: "Testimonials", href: "/Testimonials" },
                { text: "Blogs", href: "/Blog" },
                { text: "Book Appointment", href: "/BookAppointment" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-light text-decoration-none"
                    style={{ transition: "color 0.3s" }}
                    onMouseOver={(e) => (e.target.style.color = "#ffdd57")}
                    onMouseOut={(e) => (e.target.style.color = "white")}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Services List */}
          <Col md={3} sm={6} className="mb-3">
            <h5 className="fw-bold">Our Services</h5>
            <ul className="list-unstyled">
              {[
                { text: "General Dentistry", href: "/general-dentistry" },
                { text: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
                { text: "Orthodontics", href: "/orthodontics" },
                { text: "Pediatric Dentistry", href: "/pediatric-dentistry" },
                { text: "Dental Implants", href: "/dental-implants" },
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    className="text-light text-decoration-none"
                    style={{ transition: "color 0.3s" }}
                    onMouseOver={(e) => (e.target.style.color = "#ffdd57")}
                    onMouseOut={(e) => (e.target.style.color = "white")}
                  >
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={3} sm={12} className="mb-3">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              {[
                { icon: <FaFacebookF />, href: "https://facebook.com" },
                { icon: <FaInstagram />, href: "https://instagram.com" },
                { icon: <FaWhatsapp />, href: "https://wa.me/1234567890" },
                { icon: <FaYoutube />, href: "https://youtube.com" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-light fs-4"
                  style={{
                    transition: "transform 0.3s, color 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#ffdd57";
                    e.target.style.transform = "scale(1.2)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "white";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row
          className="pt-3 mt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
        >
          <Col md={6} sm={12}>
            <a
              href="/#"
              className="text-light text-decoration-none me-3"
              style={{ transition: "color 0.3s" }}
              onMouseOver={(e) => (e.target.style.color = "#ffdd57")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Privacy Policy
            </a>
            <a
              href="/#"
              className="text-light text-decoration-none"
              style={{ transition: "color 0.3s" }}
              onMouseOver={(e) => (e.target.style.color = "#ffdd57")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Terms & Conditions
            </a>
          </Col>
          <Col md={6} sm={12} className="text-md-end mt-2 mt-md-0">
            © {currentYear} Akash Dental – All Rights Reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

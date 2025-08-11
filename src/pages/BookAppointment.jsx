// src/pages/BookAppointment.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function BookAppointment() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const services = [
    "Check-up",
    "Cleaning",
    "Teeth Whitening",
    "Braces",
    "Implants",
    "Emergency",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your appointment request has been submitted. We will confirm within 24 hours.");
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div className="book-appointment py-5">
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold">Book Appointment</h1>
          <p className="lead text-muted">
            Your Healthier Smile Starts Here
          </p>
          <p>
            Booking your dental appointment is quick and easy. Fill out the form below, 
            and our team will confirm your slot within 24 hours.
          </p>
        </div>

        <Row className="g-4">
          {/* Appointment Form */}
          <Col md={8}>
            <Card className="p-4 shadow-sm border-0">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number *</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email (optional)"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Select Service</Form.Label>
                  <Form.Select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">-- Select a Service --</option>
                    {services.map((srv, i) => (
                      <option key={i} value={srv}>{srv}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Preferred Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Preferred Time</Form.Label>
                      <Form.Control
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Message / Dental Concern</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your concern"
                  />
                </Form.Group>

                <Button type="submit" variant="primary" size="lg" className="w-100">
                  Submit Appointment Request
                </Button>
              </Form>
            </Card>
          </Col>

          {/* Contact Info / Map */}
          <Col md={4}>
            <Card className="p-4 shadow-sm border-0 mb-4">
              <h5>Emergency Appointments</h5>
              <p>Need urgent care? Call us directly:</p>
              <a href="tel:08207826384" className="btn btn-danger w-100 mb-3">
                📞 082078 26384
              </a>
              <h6>Address</h6>
              <p>Near Masjid, Basar Bigha Rd, Bihar Sharif, Bihar 803118</p>
              <h6>Email</h6>
              <p>akashdental@gmail.com</p>
            </Card>

            <Card className="p-2 shadow-sm border-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902925311242!2d85.523!3d25.201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAkash%20Dental!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </Card>
          </Col>
        </Row>

        {/* How it Works */}
        <div className="mt-5 text-center">
          <h4>How It Works</h4>
          <ul className="list-unstyled">
            <li>📌 Submit your appointment request.</li>
            <li>📌 Our reception team will call or email to confirm.</li>
            <li>📌 Receive SMS/Email reminders before your visit.</li>
          </ul>
          <p className="mt-3">
            <strong>Your smile is our priority. Let us help you achieve it.</strong>
          </p>
          <Button variant="outline-success" size="lg">
            Pay Online
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default BookAppointment;

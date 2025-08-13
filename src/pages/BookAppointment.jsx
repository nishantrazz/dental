import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../index.css";

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
    <div className="book-appointment-page">
      {/* ================= Header Section ================= */}
      <div className="appointment-header text-center">
        <h1>Book Appointment</h1>
        <p className="lead">Your Healthier Smile Starts Here</p>
        <p>
          Booking your dental appointment is quick and easy. Fill out the form below, 
          and our team will confirm your slot within 24 hours.
        </p>
      </div>

      <Container className="py-5">
        <Row className="g-4">
          {/* ================= Appointment Form ================= */}
          <Col md={8}>
            <Card className="p-4 form-card shadow-card">
              <h4 className="mb-4 text-primary">📝 Appointment Form</h4>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
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
                  </Col>
                  <Col md={6}>
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
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
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
                  </Col>
                  <Col md={6}>
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
                  </Col>
                </Row>

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

          {/* ================= Contact Info & Map ================= */}
          <Col md={4}>
            <Card className="p-4 contact-info-card shadow-card mb-4">
              <h5>📞 Emergency Appointments</h5>
              <p>Need urgent care? Call us directly:</p>
              <a href="tel:08207826384" className="btn btn-danger w-100 mb-3">
                082078 26384
              </a>
              <h6>📍 Address</h6>
              <p>Near Masjid, Basar Bigha Rd, Bihar Sharif, Bihar 803118</p>
              <h6>📧 Email</h6>
              <p>akashdental@gmail.com</p>
            </Card>

            <Card className="p-2 shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6480872175607!2d85.51404657489115!3d25.215087630976804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f3e0e510c31b%3A0xeecca0df9a635746!2sDr.%20Akash%20Dental%20%26%20Facial%20Trauma%20Centre!5e0!3m2!1sen!2sin!4v1755056604683!5m2!1sen!2sin"
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

{/* ================= How It Works ================= */}
<div className="how-it-works mt-5 text-center">
  <h4 className="mb-4">How It Works</h4>
  <Row className="g-4 justify-content-center">
    <Col md={4} sm={6}>
      <div className="step-card shadow-card">
        <div className="step-icon">📝</div>
        <h5>Submit Request</h5>
        <p>Fill out the appointment form with your details and preferred schedule.</p>
      </div>
    </Col>
    <Col md={4} sm={6}>
      <div className="step-card shadow-card">
        <div className="step-icon">📞</div>
        <h5>Confirmation Call</h5>
        <p>Our reception team will reach out via phone or email to confirm your slot.</p>
      </div>
    </Col>
    <Col md={4} sm={6}>
      <div className="step-card shadow-card">
        <div className="step-icon">💌</div>
        <h5>Appointment Reminder</h5>
        <p>Receive timely SMS or email reminders before your appointment date.</p>
      </div>
    </Col>
  </Row>

<p className="mt-4 appointment-message">
  <strong>Your smile is our priority.</strong> Let us help you achieve it with
  the care you deserve.
</p>

<Button
  variant="outline-success"
  size="lg"
  className="pay-online-btn"
>
  💳 Pay Online
</Button>

</div>

      </Container>
    </div>
  );
}

export default BookAppointment;

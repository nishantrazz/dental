import React from 'react';
import '../index.css';
import { Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <div className="fade-in">
      <div className="container">
        
        {/* Header */}
        <header className="contact-header">
          <h1 className="gradient-text">Contact Us</h1>
          <p className="lead-text">We’re Here to Help You Smile, Anytime</p>
          <p className="intro-text">
            At <strong>Akash Dental</strong>, your comfort and convenience matter most. 
            Whether you have a quick question, need advice, or want to schedule your next visit, 
            our friendly staff is always ready to assist.
          </p>
        </header>

        {/* Contact Details */}
        <section className="contact-details-section">
          <h2>Get in Touch</h2>
          <div className="details-card-container">
            <div className="details-card pop-card">
              <span className="icon-wrapper">📞</span>
              <h3>Call Us</h3>
              <a href="tel:+918207826384" className="contact-link">082078 26384</a>
            </div>

            <div className="details-card pop-card">
              <span className="icon-wrapper">📧</span>
              <h3>Email</h3>
              <a href="mailto:akashdental@gmail.com" className="contact-link">akashdental@gmail.com</a>
            </div>

            <div className="details-card pop-card">
              <span className="icon-wrapper">📍</span>
              <h3>Visit Us</h3>
              <p>Near Masjid, Basar Bigha Rd, Bihar Sharif, Bihar 803118</p>
            </div>

            <div className="details-card pop-card">
              <span className="icon-wrapper">⏱️</span>
              <h3>Working Hours</h3>
              <p><strong>Mon – Sat:</strong> 9:00 AM – 8:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
              <p className="emergency-note">Emergency care available by prior call.</p>
            </div>
          </div>
        </section>

        {/* Quick Contact Form */}
{/* ==================== Quick Contact Form Section ==================== */}
<section className="contact-form-section" id="contact-form">
  <div className="form-card glass-card">
    <h3>💬 Quick Contact Form</h3>
    <p className="form-intro-text">
      Fill out the form below and our team will get back to you within 24 hours.
    </p>
    <Form>
      <div className="form-row">
        <Form.Group className="mb-3 col-6" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3 col-6" controlId="formContact">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="Enter phone" />
        </Form.Group>
        <Form.Group className="mb-3 col-6" controlId="formContact">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </div>

      <div className="form-row">
        <Form.Group className="mb-3 col-6" controlId="formMessage">
          <Form.Label>Message / Dental Concern</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Describe your concern" />
        </Form.Group>

        <Form.Group className="mb-3 col-6" controlId="formDate">
          <Form.Label>Preferred Appointment Date (optional)</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </div>

      <Button variant="primary" type="submit" className="submit-button">
        Submit
      </Button>
    </Form>
  </div>
</section>


        {/* Map */}
        <section className="map-section">
          <div className="map-card pop-card">
            <h3>📍 Find Us Easily</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6480872175607!2d85.51404657489115!3d25.215087630976804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f3e0e510c31b%3A0xeecca0df9a635746!2sDr.%20Akash%20Dental%20%26%20Facial%20Trauma%20Centre!5e0!3m2!1sen!2sin!4v1755056604683!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Clinic Location"
              ></iframe>
            </div>
            <a href="http://googleusercontent.com/maps.google.com/13" target="_blank" rel="noopener noreferrer" className="directions-button">
              Get Directions
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-section">
          <div className="cta-card gradient-card">
            <h3>Your Smile Journey Starts with a Single Step.</h3>
            <div className="cta-buttons">
              <a href="BookAppointment" className="cta-btn primary-btn">Book Appointment</a>
              <Button href="PayOnline" variant="outline-light" className="cta-btn secondary-btn">Pay Online</Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContactUs;

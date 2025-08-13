// src/pages/Treatments.jsx
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaTeeth, FaTooth, FaSmile, FaTeethOpen, FaChild, FaAmbulance } from "react-icons/fa";

const treatmentsData = [
  {
    title: "General Dentistry",
    icon: <FaTeeth size={40} className="text-primary" />,
    services: [
      "Regular Check-Ups & Cleaning – Preventive care to maintain oral health.",
      "Fillings & Restorations – Treat cavities with natural-looking materials.",
      "Scaling & Polishing – Remove plaque, tartar, and stains for a fresh smile.",
    ],
  },
  {
    title: "Cosmetic Dentistry",
    icon: <FaSmile size={40} className="text-warning" />,
    services: [
      "Teeth Whitening – Brighten your smile in a single visit.",
      "Veneers – Perfect your smile with custom-designed shells.",
      "Smile Design – Transform the shape, color, and alignment of your teeth.",
    ],
  },
  {
    title: "Orthodontics",
    icon: <FaTeethOpen size={40} className="text-info" />,
    services: [
      "Braces (Metal & Ceramic) – Correct misaligned teeth and bite issues.",
      "Invisalign – Clear, removable aligners for a discreet smile correction.",
    ],
  },
  {
    title: "Dental Implants",
    icon: <FaTooth size={40} className="text-success" />,
    services: [
      "Single & Multiple Tooth Replacement – Permanent, natural-looking solutions.",
      "Full Mouth Rehabilitation – Restore function and beauty to your smile.",
    ],
  },
  {
    title: "Pediatric Dentistry",
    icon: <FaChild size={40} className="text-pink" />,
    services: [
      "Gentle Check-Ups for Kids – Friendly and fun environment for young patients.",
      "Preventive Treatments – Fluoride application & sealants for cavity prevention.",
    ],
  },
  {
    title: "Emergency Dentistry",
    icon: <FaAmbulance size={40} className="text-danger" />,
    services: [
      "24/7 Dental Care – Relief from pain, swelling, or injury.",
      "Tooth Fracture Repair – Immediate care for accidents and damage.",
    ],
  },
];

function Treatments() {
  return (
    <div className="treatments-page py-5">
      <div className="container">
        {/* Page Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">Treatments & Services</h1>
          <p className="lead text-muted">
            Complete Dental Solutions for Every Smile
          </p>
          <p className="text-secondary fs-5">
            At Akash Dental, we offer a full range of dental treatments for all
            ages, using the latest technology to ensure comfort, safety, and
            lasting results.
          </p>
        </div>

        {/* Treatments Cards */}
        <Row className="g-4">
          {treatmentsData.map((treatment, idx) => (
            <Col md={6} lg={4} key={idx}>
              <Card className="shadow-sm border-0 rounded-4 treatment-card h-100">
                <Card.Body className="text-center">
                  <div className="mb-3">{treatment.icon}</div>
                  <Card.Title className="fw-bold fs-4">{treatment.title}</Card.Title>
                  <ul className="list-unstyled mt-3 text-muted">
                    {treatment.services.map((service, i) => (
                      <li key={i} className="mb-2">
                        {service}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .treatments-page {
          background: linear-gradient(180deg, #f8fbfd 0%, #eef4f8 100%);
        }
        .treatment-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .treatment-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
        }
        .text-pink {
          color: #e83e8c;
        }
      `}</style>
    </div>
  );
}

export default Treatments;

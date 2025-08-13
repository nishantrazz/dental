// src/pages/PayOnline.jsx
import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { FaCreditCard, FaGooglePay, FaUniversity } from "react-icons/fa";

function PayOnline() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    method: "card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Processing payment of ₹${formData.amount} via ${formData.method}`);
    // Here you would integrate with Razorpay, PayPal, etc.
  };

  return (
    <div className="pay-online-page py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Pay Online</h1>
          <p className="lead text-muted">
            Secure and hassle-free payments for your dental treatments.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-sm border-0 rounded-4">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  {/* Name */}
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Phone */}
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Amount */}
                  <Form.Group className="mb-3">
                    <Form.Label>Amount (₹)</Form.Label>
                    <Form.Control
                      type="number"
                      name="amount"
                      placeholder="Enter amount"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Payment Method */}
                  <Form.Group className="mb-4">
                    <Form.Label>Payment Method</Form.Label>
                    <div className="d-flex gap-3">
                      <Button
                        type="button"
                        variant={
                          formData.method === "card" ? "primary" : "outline-primary"
                        }
                        onClick={() => setFormData({ ...formData, method: "card" })}
                      >
                        <FaCreditCard className="me-2" /> Card
                      </Button>
                      <Button
                        type="button"
                        variant={
                          formData.method === "upi" ? "success" : "outline-success"
                        }
                        onClick={() => setFormData({ ...formData, method: "upi" })}
                      >
                        <FaGooglePay className="me-2" /> UPI
                      </Button>
                      <Button
                        type="button"
                        variant={
                          formData.method === "bank" ? "warning" : "outline-warning"
                        }
                        onClick={() => setFormData({ ...formData, method: "bank" })}
                      >
                        <FaUniversity className="me-2" /> Net Banking
                      </Button>
                    </div>
                  </Form.Group>

                  {/* Submit */}
                  <div className="d-grid">
                    <Button variant="success" size="lg" type="submit">
                      Pay Now
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Styles */}
      <style jsx>{`
        .pay-online-page {
          background: linear-gradient(180deg, #f9fcff, #eaf4fb);
        }
        .pay-online-page .btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .pay-online-page .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}

export default PayOnline;

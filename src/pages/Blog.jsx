// src/pages/Blog.jsx
import React from "react";
import { Card, Button, Row, Col, Form, ListGroup } from "react-bootstrap";

const blogPosts = [
  {
    title: "5 Daily Habits for Stronger Teeth",
    image: "/pic1.jpg",
    excerpt: "Learn the small daily steps that can make a big difference to your dental health.",
    category: "Oral Hygiene Tips",
  },
  {
    title: "Do You Really Need a Dental Check-Up Every 6 Months?",
    image: "/pic1.jpg",
    excerpt: "Find out why regular check-ups are crucial for maintaining a healthy smile.",
    category: "Treatment Guides",
  },
  {
    title: "Teeth Whitening: At Home vs. In-Clinic – What’s Better?",
    image: "/pic1.jpg",
    excerpt: "We compare the pros and cons of whitening treatments to help you choose the best option.",
    category: "Cosmetic Dentistry Trends",
  },
  {
    title: "How to Help Your Child Overcome Fear of the Dentist",
    image: "/pic1.jpg",
    excerpt: "Practical tips for making dental visits fun and stress-free for kids.",
    category: "Kids’ Dental Care",
  },
];

function Blog() {
  return (
    <div className="blog-page py-5">
      <div className="container">
        {/* ===== Header Section ===== */}
        <header className="text-center mb-5">
          <h1 className="fw-bold display-5">Blog & Dental Tips</h1>
          <p className="lead text-muted">
            Expert Advice for a Healthier Smile
          </p>
          <p className="text-secondary fs-5">
            At Akash Dental, we believe in educating our patients. Our blog offers professional
            dental advice, oral care tips, and the latest news in dentistry — all in simple,
            easy-to-understand language.
          </p>
        </header>

        <Row className="g-4">
          {/* ===== Blog Posts ===== */}
          <Col lg={8}>
            <Row className="g-4">
              {blogPosts.map((post, index) => (
                <Col key={index} md={6}>
                  <Card className="h-100 shadow-sm border-0 blog-card rounded-4">
                    <div className="overflow-hidden rounded-top-4">
                      <Card.Img
                        variant="top"
                        src={post.image}
                        alt={post.title}
                        className="blog-img"
                      />
                    </div>
                    <Card.Body>
                      <small className="text-primary text-uppercase fw-bold">
                        {post.category}
                      </small>
                      <Card.Title className="mt-2 fw-semibold">{post.title}</Card.Title>
                      <Card.Text className="text-muted">{post.excerpt}</Card.Text>
                      <Button variant="outline-primary" size="sm" className="rounded-pill px-3">
                        Read More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* ===== Call To Action ===== */}
            <section className="text-center mt-5 p-5 rounded-4 appointment-section text-white">
              <h4 className="fw-bold display-6">Have questions about these topics?</h4>
              <p className="fs-5">
                Schedule a consultation with our dental experts today and take the first step
                toward a healthier smile.
              </p>
              <Button href= '/BookAppointment' variant="light" size="lg" className="fw-semibold px-4 rounded-pill">
                Book Appointment
              </Button>
            </section>
          </Col>

          {/* ===== Sidebar ===== */}
          <Col lg={4}>
            {/* Search */}
            <Card className="mb-4 shadow-sm border-0 rounded-4">
              <Card.Header className="bg-white fw-bold border-0 fs-5">Search</Card.Header>
              <Card.Body>
                <Form.Control type="text" placeholder="Search blog..." />
              </Card.Body>
            </Card>

            {/* Popular Posts */}
            <Card className="mb-4 shadow-sm border-0 rounded-4">
              <Card.Header className="bg-white fw-bold border-0 fs-5">Popular Posts</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <a href="#">10 Tips for Brighter Teeth</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#">Best Toothpaste for Sensitive Teeth</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#">Foods That Keep Your Teeth Strong</a>
                </ListGroup.Item>
              </ListGroup>
            </Card>

            {/* Categories */}
            <Card className="shadow-sm border-0 rounded-4">
              <Card.Header className="bg-white fw-bold border-0 fs-5">Categories</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <a href="#">Oral Hygiene Tips</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#">Treatment Guides</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#">Cosmetic Dentistry Trends</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#">Kids’ Dental Care</a>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>

      {/* ===== Custom Styles ===== */}
      <style jsx>{`
        .blog-page {
          background: linear-gradient(180deg, #f9fbfd 0%, #eef4f8 100%);
        }
        .blog-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: linear-gradient(135deg, #e6f7ff, #ffffff);
        }
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(108, 206, 221, 0.15);
        }
        .blog-img {
          transition: transform 0.4s ease;
        }
        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }
        .appointment-section {
          background: linear-gradient(135deg, #4dafef, #a7fdca);
        }
        .appointment-section p {
          max-width: 600px;
          margin: auto;
        }
        .card a {
          text-decoration: none;
          color: #007bff;
        }
        .card a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Blog;

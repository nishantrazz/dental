// src/pages/Blog.jsx
import React from "react";
import { Card, Button, Row, Col, Form, ListGroup } from "react-bootstrap";

const blogPosts = [
  {
    title: "5 Daily Habits for Stronger Teeth",
    image: "pic1.jpg",
    excerpt: "Learn the small daily steps that can make a big difference to your dental health.",
    category: "Oral Hygiene Tips",
  },
  {
    title: "Do You Really Need a Dental Check-Up Every 6 Months?",
    image: "pic1.jpg",
    excerpt: "Find out why regular check-ups are crucial for maintaining a healthy smile.",
    category: "Treatment Guides",
  },
  {
    title: "Teeth Whitening: At Home vs. In-Clinic – What’s Better?",
    image: "pic1.jpg",
    excerpt: "We compare the pros and cons of whitening treatments to help you choose the best option.",
    category: "Cosmetic Dentistry Trends",
  },
  {
    title: "How to Help Your Child Overcome Fear of the Dentist",
    image: "pic1.jpg",
    excerpt: "Practical tips for making dental visits fun and stress-free for kids.",
    category: "Kids’ Dental Care",
  },
];

function Blog() {
  return (
    <div className="blog-page py-5">
      <div className="container">
        {/* Page Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Blog & Dental Tips</h1>
          <p className="lead text-muted">
            Expert Advice for a Healthier Smile
          </p>
          <p>
            At Akash Dental, we believe in educating our patients. Our blog offers professional
            dental advice, oral care tips, and the latest news in dentistry — all in simple,
            easy-to-understand language.
          </p>
        </div>

        <Row className="g-4">
          {/* Blog Posts Section */}
          <Col md={8}>
            <Row className="g-4">
              {blogPosts.map((post, index) => (
                <Col key={index} md={6}>
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Img variant="top" src={post.image} alt={post.title} />
                    <Card.Body>
                      <small className="text-primary">{post.category}</small>
                      <Card.Title className="mt-2">{post.title}</Card.Title>
                      <Card.Text>{post.excerpt}</Card.Text>
                      <Button variant="outline-primary" size="sm">
                        Read More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Call to Action */}
            <div className="text-center mt-5">
              <h4>Have questions about these topics?</h4>
              <p>Schedule a consultation with our dental experts today.</p>
              <Button variant="primary" size="lg">
                Book Appointment
              </Button>
            </div>
          </Col>

          {/* Sidebar */}
          <Col md={4}>
            {/* Search Bar */}
            <Card className="mb-4 shadow-sm">
              <Card.Header>Search</Card.Header>
              <Card.Body>
                <Form.Control type="text" placeholder="Search blog..." />
              </Card.Body>
            </Card>

            {/* Popular Posts */}
            <Card className="mb-4 shadow-sm">
              <Card.Header>Popular Posts</Card.Header>
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
            <Card className="shadow-sm">
              <Card.Header>Categories</Card.Header>
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
    </div>
  );
}

export default Blog;

// Testimonials.jsx
import React from "react";
import { Carousel } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      comment: "Amazing service! Highly recommend to everyone.",
    },
    {
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4,
      comment: "Very professional and friendly staff.",
    },
    {
      name: "David Lee",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      comment: "Exceptional experience from start to finish.",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f8f9fa, #e3f2fd)",
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-5 fw-bold"
          style={{ color: "#0d6efd" }}
        >
          What Our Clients Say
        </h2>
        <Carousel
          interval={3000}
          pause={false}
          indicators={false}
          fade
        >
          {testimonials.map((t, index) => (
            <Carousel.Item key={index}>
              <div
                className="d-flex flex-column align-items-center text-center p-4 rounded"
                style={{
                  background: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  maxWidth: "700px",
                  margin: "0 auto",
                }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-circle mb-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    border: "4px solid #0d6efd",
                  }}
                />
                <h5 style={{ color: "#0d6efd", fontWeight: "600" }}>
                  {t.name}
                </h5>
                <div className="mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      color="gold"
                      style={{
                        transition: "transform 0.2s ease",
                        transform: "scale(1.1)",
                      }}
                    />
                  ))}
                </div>
                <p
                  className="px-3"
                  style={{
                    maxWidth: "600px",
                    color: "#555",
                    fontStyle: "italic",
                  }}
                >
                  "{t.comment}"
                </p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;

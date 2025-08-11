// src/pages/FAQ.jsx
import React from "react";
import { Container, Accordion } from "react-bootstrap";

function FAQ() {
  const faqs = [
    {
      question: "Do you accept walk-in patients?",
      answer:
        "Yes, we welcome walk-in patients, but we recommend booking an appointment to avoid waiting time.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit/debit cards, UPI (PhonePe, Google Pay, Paytm), and also offer EMI options for major treatments. You can also pay through our Pay Online facility.",
    },
    {
      question: "Do you provide emergency dental care?",
      answer:
        "Yes, we offer 24/7 emergency dental services. Please call us at 082078 26384 before coming so we can prepare for your treatment.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "We recommend visiting every 6 months for a regular check-up and cleaning to maintain good oral health.",
    },
    {
      question: "Do you treat children?",
      answer:
        "Yes, we have specialized pediatric dentistry services to make dental visits comfortable and fun for children.",
    },
    {
      question: "Is teeth whitening safe?",
      answer:
        "Yes, when performed by a dental professional, teeth whitening is safe and effective. We use advanced whitening systems that protect your teeth and gums.",
    },
    {
      question: "Do you accept dental insurance?",
      answer:
        "Yes, we accept most major dental insurance plans and can assist you with claim processing.",
    },
    {
      question: "How long will my first appointment take?",
      answer:
        "Your first appointment usually takes 30–45 minutes, depending on the type of consultation and treatment needed.",
    },
  ];

  return (
    <div className="faq-page py-5">
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold">Frequently Asked Questions</h1>
          <p className="lead text-muted">
            Your most common dental queries, answered by our experts.
          </p>
        </div>

        <Accordion defaultActiveKey="0">
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}

export default FAQ;

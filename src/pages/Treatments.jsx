// src/pages/Treatments.jsx
import React from "react";

function Treatments() {
  return (
    <div className="treatments-page py-5">
      <div className="container">
        {/* Page Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Treatments & Services</h1>
          <p className="lead text-muted">
            Complete Dental Solutions for Every Smile
          </p>
          <p>
            At Akash Dental, we offer a full range of dental treatments for all
            ages, using the latest technology to ensure comfort, safety, and
            lasting results.
          </p>
        </div>

        {/* General Dentistry */}
        <section className="mb-5">
          <h3>1. General Dentistry</h3>
          <ul>
            <li>
              <strong>Regular Check-Ups & Cleaning</strong> – Preventive care to maintain oral health.
            </li>
            <li>
              <strong>Fillings & Restorations</strong> – Treat cavities with natural-looking materials.
            </li>
            <li>
              <strong>Scaling & Polishing</strong> – Remove plaque, tartar, and stains for a fresh smile.
            </li>
          </ul>
        </section>

        {/* Cosmetic Dentistry */}
        <section className="mb-5">
          <h3>2. Cosmetic Dentistry</h3>
          <ul>
            <li>
              <strong>Teeth Whitening</strong> – Brighten your smile in a single visit.
            </li>
            <li>
              <strong>Veneers</strong> – Perfect your smile with custom-designed shells.
            </li>
            <li>
              <strong>Smile Design</strong> – Transform the shape, color, and alignment of your teeth.
            </li>
          </ul>
        </section>

        {/* Orthodontics */}
        <section className="mb-5">
          <h3>3. Orthodontics</h3>
          <ul>
            <li>
              <strong>Braces (Metal & Ceramic)</strong> – Correct misaligned teeth and bite issues.
            </li>
            <li>
              <strong>Invisalign</strong> – Clear, removable aligners for a discreet smile correction.
            </li>
          </ul>
        </section>

        {/* Dental Implants */}
        <section className="mb-5">
          <h3>4. Dental Implants</h3>
          <ul>
            <li>
              <strong>Single & Multiple Tooth Replacement</strong> – Permanent, natural-looking solutions.
            </li>
            <li>
              <strong>Full Mouth Rehabilitation</strong> – Restore function and beauty to your smile.
            </li>
          </ul>
        </section>

        {/* Pediatric Dentistry */}
        <section className="mb-5">
          <h3>5. Pediatric Dentistry</h3>
          <ul>
            <li>
              <strong>Gentle Check-Ups for Kids</strong> – Friendly and fun environment for young patients.
            </li>
            <li>
              <strong>Preventive Treatments</strong> – Fluoride application & sealants for cavity prevention.
            </li>
          </ul>
        </section>

        {/* Emergency Dentistry */}
        <section className="mb-5">
          <h3>6. Emergency Dentistry</h3>
          <ul>
            <li>
              <strong>24/7 Dental Care</strong> – Relief from pain, swelling, or injury.
            </li>
            <li>
              <strong>Tooth Fracture Repair</strong> – Immediate care for accidents and damage.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Treatments;

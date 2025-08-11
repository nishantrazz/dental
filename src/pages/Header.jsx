// Header.jsx
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    const dropdown = document.querySelector(".nav-item.dropdown");

    if (!dropdown) return;

    // Desktop hover
    function handleMouseEnter() {
      if (window.innerWidth > 992) {
        dropdown.classList.add("show");
        dropdown.querySelector(".dropdown-menu").classList.add("show");
      }
    }
    function handleMouseLeave() {
      if (window.innerWidth > 992) {
        dropdown.classList.remove("show");
        dropdown.querySelector(".dropdown-menu").classList.remove("show");
      }
    }

    dropdown.addEventListener("mouseenter", handleMouseEnter);
    dropdown.addEventListener("mouseleave", handleMouseLeave);

    // Mobile click for main link
    const mainLink = dropdown.querySelector(".dropdown-toggle");
    const handleClick = (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        navigate("/treatments");
      }
    };
    mainLink.addEventListener("click", handleClick);

    return () => {
      dropdown.removeEventListener("mouseenter", handleMouseEnter);
      dropdown.removeEventListener("mouseleave", handleMouseLeave);
      mainLink.removeEventListener("click", handleClick);
    };
  }, [navigate]);

  return (
    <header className="bg-light shadow-sm">
      <nav className="container d-flex align-items-center justify-content-between py-3">
        {/* Logo */}
        <div className="fw-bold fs-4">
          <Link to="/" className="text-decoration-none text-dark">
            Dental Clinic
          </Link>
        </div>

        {/* Menu */}
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>

          {/* Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="servicesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Treatments / Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
              <li><Link className="dropdown-item" to="/treatments#general">General Dentistry</Link></li>
              <li><Link className="dropdown-item" to="/treatments#cosmetic">Cosmetic Dentistry</Link></li>
              <li><Link className="dropdown-item" to="/treatments#orthodontics">Orthodontics</Link></li>
              <li><Link className="dropdown-item" to="/treatments#implants">Dental Implants</Link></li>
              <li><Link className="dropdown-item" to="/treatments#pediatric">Pediatric Dentistry</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pay-online">Pay Online</Link>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <Link to="/BookAppointment" className="btn btn-primary">
          Book Appointment
        </Link>
      </nav>
    </header>
  );
}

export default Header;

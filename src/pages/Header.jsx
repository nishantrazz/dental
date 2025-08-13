import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../index.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const dropdown = document.querySelector(".nav-item.dropdown");
    if (!dropdown) return;

    const handleMouseEnter = () => {
      if (window.innerWidth > 992) {
        dropdown.classList.add("show");
        dropdown.querySelector(".dropdown-menu").classList.add("show");
      }
    };
    const handleMouseLeave = () => {
      if (window.innerWidth > 992) {
        dropdown.classList.remove("show");
        dropdown.querySelector(".dropdown-menu").classList.remove("show");
      }
    };

    dropdown.addEventListener("mouseenter", handleMouseEnter);
    dropdown.addEventListener("mouseleave", handleMouseLeave);

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

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="container d-flex align-items-center justify-content-between py-3">
        
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-text">
            Akash<span>Clinic</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div
          className={`menu-toggle d-lg-none ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav menu-links ${menuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/") ? "active" : ""}`} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/about") ? "active" : ""}`} to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className={`nav-link dropdown-toggle ${location.pathname.startsWith("/treatments") ? "active" : ""}`}
              href="#"
              id="servicesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Treatments / Services
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/treatments#general" onClick={() => setMenuOpen(false)}>General Dentistry</Link></li>
              <li><Link className="dropdown-item" to="/treatments#cosmetic" onClick={() => setMenuOpen(false)}>Cosmetic Dentistry</Link></li>
              <li><Link className="dropdown-item" to="/treatments#orthodontics" onClick={() => setMenuOpen(false)}>Orthodontics</Link></li>
              <li><Link className="dropdown-item" to="/treatments#implants" onClick={() => setMenuOpen(false)}>Dental Implants</Link></li>
              <li><Link className="dropdown-item" to="/treatments#pediatric" onClick={() => setMenuOpen(false)}>Pediatric Dentistry</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/blog") ? "active" : ""}`} to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/contact") ? "active" : ""}`} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/PayOnline") ? "active" : ""}`} to="/PayOnline" onClick={() => setMenuOpen(false)}>Pay Online</Link>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <Link to="/BookAppointment" className="btn book-btn d-none d-lg-block">
          Book Appointment
        </Link>
      </nav>
    </header>
  );
}

export default Header;

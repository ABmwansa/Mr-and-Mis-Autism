import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpeg";
import slide4 from "./assets/slide4.jpg";
import slide5 from "./assets/slide5.jpeg";
import slide6 from "./assets/slide6.jpg";

export default function GalleryPage() {
  const galleryImages = [
    {
      image: slide1,
      title: "Celebrating Every Child",
      text: "Creating joyful and inclusive spaces where children with autism are seen and celebrated.",
    },
    {
      image: slide2,
      title: "Moments of Confidence",
      text: "Building confidence, visibility, and self-expression through meaningful community experiences.",
    },
    {
      image: slide3,
      title: "A Community of Support",
      text: "Bringing together families, caregivers, and supporters around a shared purpose.",
    },
    {
      image: slide4,
      title: "Inclusion in Action",
      text: "Promoting awareness and acceptance through events, storytelling, and connection.",
    },
    {
      image: slide5,
      title: "Shared Joy and Growth",
      text: "Creating meaningful memories that reflect community, belonging, and confidence.",
    },
    {
      image: slide6,
      title: "Together for Inclusion",
      text: "Working together to uplift families and create a stronger voice for autism awareness.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'DM Sans', sans-serif;
          background: #f8fafc;
          color: #1e293b;
        }

        a {
          text-decoration: none;
        }

        .gallery-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #ffffff, #f8fafc);
        }

        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .topbar {
          background: #6d28d9;
          color: white;
          font-size: 14px;
          padding: 10px 0;
        }

        .topbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .socials {
          display: flex;
          gap: 12px;
        }

        .socials a {
          color: white;
          font-size: 15px;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255,255,255,0.94);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #e2e8f0;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 0;
          gap: 20px;
          flex-wrap: wrap;
        }

        .logo {
          font-family: 'Poppins', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #6d28d9;
          line-height: 1.1;
        }

        .logo span {
          color: #f97316;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 999px;
          font-weight: 700;
          transition: 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-dark {
          background: #0f172a;
          color: white;
          box-shadow: 0 12px 25px rgba(15, 23, 42, 0.18);
        }

        .btn-dark:hover {
          transform: translateY(-2px);
        }

        .hero {
          padding: 70px 0 40px;
          text-align: center;
        }

        .hero h1 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          color: #0f172a;
          margin-bottom: 12px;
        }

        .hero p {
          max-width: 760px;
          margin: 0 auto;
          color: #64748b;
          font-size: 17px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          padding: 30px 0 80px;
        }

        .gallery-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 12px 35px rgba(15, 23, 42, 0.06);
          transition: 0.3s ease;
        }

        .gallery-card:hover {
          transform: translateY(-6px);
        }

        .gallery-card img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }

        .gallery-card-content {
          padding: 20px;
        }

        .gallery-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          margin-bottom: 10px;
          color: #0f172a;
        }

        .gallery-card p {
          color: #64748b;
          font-size: 15px;
          line-height: 1.6;
        }

        .footer {
          background: #0f172a;
          color: #cbd5e1;
          padding: 30px 0;
          text-align: center;
        }

        @media (max-width: 600px) {
          .logo {
            font-size: 22px;
          }

          .gallery-card img {
            height: 230px;
          }
        }
      `}</style>

      <div className="gallery-page">
        <div className="topbar">
          <div className="container topbar-content">
            <div>Empowering inclusion, awareness, and confidence</div>
            <div className="socials">
              <a href="https://www.facebook.com/61556561801555/" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <nav className="navbar">
          <div className="container nav-content">
            <div className="logo">
              Mr & Miss <span>Autism</span>
            </div>

            <Link to="/" className="btn btn-dark">
              <FaArrowLeft /> Back Home
            </Link>
          </div>
        </nav>

        <section className="hero">
          <div className="container">
            <h1>Full Gallery</h1>
            <p>
              Explore more moments of joy, inclusion, growth, and celebration from
              Mr & Miss Autism events and activities.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="gallery-grid">
              {galleryImages.map((item, index) => (
                <div className="gallery-card" key={index}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-card-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            © 2026 Mr & Miss Autism. All rights reserved.
          </div>
        </footer>

        <a
          href="https://wa.me/260979235167?text=Hello%20I%20would%20like%20to%20find%20out%20more%20about%20Mr%20and%20Miss%20Autism"
          target="_blank"
          rel="noreferrer"
          style={{
            position: "fixed",
            right: "22px",
            bottom: "22px",
            width: "62px",
            height: "62px",
            borderRadius: "50%",
            background: "#25D366",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            boxShadow: "0 18px 35px rgba(0,0,0,0.22)",
            zIndex: 2000,
          }}
        >
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
}
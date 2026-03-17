import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpeg";
import slide4 from "./assets/slide4.jpg";
import slide5 from "./assets/slide5.jpeg";
import slide6 from "./assets/slide6.jpg";
import slide7 from "./assets/slide7.jpg";
import slide8 from "./assets/slide8.jpg";
import slide9 from "./assets/slide9.jpg";
import slide10 from "./assets/slide10.jpg";
import slide11 from "./assets/slide11.jpg";
import slide12 from "./assets/slide12.jpg";
import slide13 from "./assets/slide13.jpg";

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
  {
    image: slide7,
    title: "Gallery Moment ",
    text: "More inspiring memories from the event.",
  },
  {
    image: slide8,
    title: "Gallery Moment ",
    text: "More inspiring memories from the event.",
  },
  {
    image: slide9,
    title: "Gallery Moment ",
    text: "More inspiring memories from the event.",
  },
  {
    image: slide10,
    title: "Gallery Moment 10",
    text: "More inspiring memories from the event.",
  },
  {
    image: slide11,
    title: "Gallery Moment ",
    text: "More inspiring memories from the event.",
  },
  {
    image: slide12,
    title: "Gallery Moment ",
    text: "More inspiring memories from the event.",
  },
  {
    image: slide13,
    title: "Gallery Moment ",
    text: "More inspiring memories from the event.",
  },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, showPrev, showNext]);

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
          transition: 0.3s;
        }

        .socials a:hover {
          transform: translateY(-2px);
          opacity: 0.85;
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
          cursor: pointer;
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

        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3000;
          padding: 30px;
        }

        .lightbox-content {
          position: relative;
          width: 100%;
          max-width: 1100px;
          text-align: center;
        }

        .lightbox-image {
          width: 100%;
          max-height: 78vh;
          object-fit: contain;
          border-radius: 18px;
          background: #000;
        }

        .lightbox-caption {
          margin-top: 18px;
          color: white;
        }

        .lightbox-caption h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          margin-bottom: 8px;
        }

        .lightbox-caption p {
          color: rgba(255,255,255,0.84);
          max-width: 760px;
          margin: 0 auto;
        }

        .lightbox-close,
        .lightbox-nav {
          position: absolute;
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: rgba(255,255,255,0.14);
          color: white;
          backdrop-filter: blur(8px);
        }

        .lightbox-close {
          top: -10px;
          right: -10px;
          font-size: 20px;
        }

        .lightbox-nav.left {
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .lightbox-nav.right {
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .footer {
          background: #0f172a;
          color: #cbd5e1;
          padding: 30px 0;
          text-align: center;
        }

        .whatsapp-float {
          position: fixed;
          right: 22px;
          bottom: 22px;
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: #25D366;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          box-shadow: 0 18px 35px rgba(0,0,0,0.22);
          z-index: 2000;
          transition: 0.3s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.08);
        }

        @media (max-width: 768px) {
          .lightbox {
            padding: 16px;
          }

          .lightbox-nav.left {
            left: 6px;
          }

          .lightbox-nav.right {
            right: 6px;
          }

          .lightbox-close {
            top: 8px;
            right: 8px;
          }

          .gallery-card img {
            height: 230px;
          }
        }

        @media (max-width: 600px) {
          .logo {
            font-size: 22px;
          }

          .lightbox-caption h3 {
            font-size: 20px;
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
              Click any image to view it in full size and browse through all gallery photos.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="gallery-grid">
              {galleryImages.map((item, index) => (
                <div
                  className="gallery-card"
                  key={index}
                  onClick={() => openLightbox(index)}
                >
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

        {activeIndex !== null && (
          <div className="lightbox" onClick={closeLightbox}>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close"
              >
                <FaTimes />
              </button>

              <button
                className="lightbox-nav left"
                onClick={showPrev}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>

              <img
                src={galleryImages[activeIndex].image}
                alt={galleryImages[activeIndex].title}
                className="lightbox-image"
              />

              <button
                className="lightbox-nav right"
                onClick={showNext}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>

              <div className="lightbox-caption">
                <h3>{galleryImages[activeIndex].title}</h3>
                <p>{galleryImages[activeIndex].text}</p>
              </div>
            </div>
          </div>
        )}

        <footer className="footer">
          <div className="container">
            © 2026 Mr & Miss Autism. All rights reserved.
          </div>
        </footer>

        <a
          href="https://wa.me/260979235167?text=Hello%20I%20would%20like%20to%20find%20out%20more%20about%20Mr%20and%20Miss%20Autism"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
}
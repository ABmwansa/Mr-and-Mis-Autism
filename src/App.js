import React, { useEffect, useMemo, useRef, useState, Suspense } from "react";
import {
  FaWhatsapp,
  FaHeart,
  FaHandsHelping,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaUsers,
  FaPuzzlePiece,
  FaRegSmileBeam,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaHandshake,
  FaBullhorn,
  FaDownload,
  FaEnvelope,
  FaPhoneAlt,
  FaCheckCircle,
  FaGlobeAfrica,
  FaUniversity,
} from "react-icons/fa";

import eventPoster from "./assets/event-poster.jpeg";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";
import slide5 from "./assets/slide5.jpg";
import slide6 from "./assets/slide6.jpg";

import sponsor1 from "./assets/sponsor logos/coolbrain.png";
import sponsor2 from "./assets/sponsor logos/mulenga.png";
import sponsor3 from "./assets/sponsor logos/special.png";
import sponsor4 from "./assets/sponsor logos/zesco.png";
import sponsor5 from "./assets/sponsor logos/multisensory.png";

function SectionLoader({ minHeight = "300px" }) {
  return (
    <div
      style={{
        minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "760px", textAlign: "center" }}>
        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#e2e8f0",
            borderRadius: "999px",
            overflow: "hidden",
            marginBottom: "14px",
          }}
        >
          <div className="section-loader-bar" />
        </div>
        <p style={{ color: "#64748b", fontSize: "15px" }}>Loading section...</p>
      </div>
    </div>
  );
}

function LazySection({ children, fallback, minHeight = "300px" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "250px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight }}>
      {visible ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  );
}

export default function App() {
  const programs = [
    {
      icon: <FaPuzzlePiece />,
      title: "Autism Awareness",
      text: "We promote understanding and acceptance of autism through campaigns, events, and educational outreach.",
    },
    {
      icon: <FaUsers />,
      title: "Family Support",
      text: "We encourage and support parents, guardians, and caregivers with helpful information and community engagement.",
    },
    {
      icon: <FaRegSmileBeam />,
      title: "Talent Celebration",
      text: "Mr & Miss Autism gives children and young people a platform to be seen, appreciated, and celebrated.",
    },
  ];

  const stats = [
    { value: "500+", label: "Lives Touched" },
    { value: "20+", label: "Community Events" },
    { value: "100%", label: "Inclusion Focused" },
    { value: "50+", label: "Families Reached" },
  ];

  const slides = [
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

  const sponsorBenefits = [
    "Strong visibility across event promotion and digital campaigns",
    "Positive brand alignment with inclusion, awareness, and family support",
    "Recognition during the event and across sponsor appreciation materials",
    "Meaningful partnership with a community-centered social impact initiative",
  ];

  const sponsorPackages = [
    {
      name: "Bronze Sponsor",
      amount: "K35 000+",
      className: "package-bronze",
      benefits: [
        "Logo on website sponsor section",
        "Thank-you mention on social media",
        "Acknowledgement during the event",
      ],
    },
    {
      name: "Silver Sponsor",
      amount: "K25 000+",
      className: "package-silver",
      benefits: [
        "Everything in Bronze",
        "Better logo visibility on campaign materials",
        "Brand mention on selected event creatives",
      ],
    },
    {
      name: "Gold Sponsor",
      amount: "K50,000+",
      className: "package-gold",
      benefits: [
        "Everything in Silver",
        "Prominent logo placement",
        "MC mention during the event",
        "Enhanced digital visibility",
      ],
    },
    {
      name: "Platinum Sponsor",
      amount: "K75,000+",
      className: "package-platinum",
      benefits: [
        "Everything in Gold",
        "Lead sponsor positioning",
        "Top-tier brand visibility",
        "Priority recognition across major touchpoints",
      ],
    },
    {
      name: "Branding Slot",
      amount: "K7 500+",
      className: "package-platinum",
      benefits: [
        "Get your brand dispayed",
        
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sponsorForm, setSponsorForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    package: "Gold Sponsor",
    message: "",
  });

  useEffect(() => {
    document.title = "Mr & Miss Autism | Inclusion, Awareness & Sponsorship";
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goPrev = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleSponsorChange = (e) => {
    const { name, value } = e.target;
    setSponsorForm((prev) => ({ ...prev, [name]: value }));
  };

  const sponsorWhatsAppLink = useMemo(() => {
    const text =
      `Hello, I would like to find out more about sponsoring Mr & Miss Autism.%0A%0A` +
      `Name: ${sponsorForm.name}%0A` +
      `Company: ${sponsorForm.company}%0A` +
      `Phone: ${sponsorForm.phone}%0A` +
      `Email: ${sponsorForm.email}%0A` +
      `Package Interest: ${sponsorForm.package}%0A` +
      `Message: ${sponsorForm.message}`;
    return `https://wa.me/260979235167?text=${text}`;
  }, [sponsorForm]);

  const handleSponsorSubmit = (e) => {
    e.preventDefault();
    window.open(sponsorWhatsAppLink, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        body {
          font-family: 'DM Sans', sans-serif;
          background: #f8fafc;
          color: #1e293b;
        }

        a {
          text-decoration: none;
        }

        .app {
          width: 100%;
          overflow-x: hidden;
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
          background: rgba(255,255,255,0.92);
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

        .nav-links {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }

        .nav-links a {
          color: #334155;
          font-weight: 600;
          transition: 0.3s;
        }

        .nav-links a:hover {
          color: #6d28d9;
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

        .btn-primary {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          box-shadow: 0 12px 25px rgba(249, 115, 22, 0.25);
        }

        .btn-primary:hover,
        .btn-whatsapp:hover,
        .btn-dark:hover {
          transform: translateY(-2px);
        }

        .btn-whatsapp {
          background: #25D366;
          color: white;
          box-shadow: 0 12px 25px rgba(37, 211, 102, 0.25);
        }

        .btn-dark {
          background: #0f172a;
          color: white;
          box-shadow: 0 12px 25px rgba(15, 23, 42, 0.18);
        }

        .hero {
          min-height: 92vh;
          display: flex;
          align-items: center;
          background:
            radial-gradient(circle at top left, rgba(109, 40, 217, 0.15), transparent 35%),
            radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.15), transparent 35%),
            linear-gradient(180deg, #ffffff, #f8fafc);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
          padding: 60px 0;
        }

        .hero-badge {
          display: inline-block;
          background: #ede9fe;
          color: #6d28d9;
          padding: 10px 16px;
          border-radius: 999px;
          font-weight: 700;
          margin-bottom: 18px;
          font-size: 14px;
        }

        .hero h1 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4.6rem);
          line-height: 1.08;
          margin-bottom: 18px;
          color: #0f172a;
        }

        .hero p {
          font-size: 18px;
          color: #475569;
          max-width: 620px;
          margin-bottom: 28px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hero-card {
          background: white;
          padding: 22px;
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.12);
          border: 1px solid #e2e8f0;
        }

        .hero-card img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 22px;
          margin-bottom: 18px;
        }

        .hero-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          margin-bottom: 10px;
          color: #0f172a;
        }

        .hero-card p {
          font-size: 16px;
          margin-bottom: 18px;
        }

        section {
          padding: 90px 0;
        }

        .section-title {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 48px;
        }

        .section-title h2 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #0f172a;
          margin-bottom: 12px;
        }

        .section-title p {
          color: #64748b;
          font-size: 17px;
        }

        .slider-section {
          padding-top: 40px;
        }

        .slider-shell {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          min-height: 520px;
          background: #0f172a;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.18);
        }

        .slider-track {
          display: flex;
          transition: transform 0.6s ease;
          height: 100%;
        }

        .slide {
          min-width: 100%;
          position: relative;
          height: 520px;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(15,23,42,0.72), rgba(15,23,42,0.28));
          display: flex;
          align-items: flex-end;
          padding: 40px;
        }

        .slide-content {
          max-width: 560px;
          color: white;
        }

        .slide-content h3 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          margin-bottom: 12px;
        }

        .slide-content p {
          font-size: 17px;
          color: rgba(255,255,255,0.92);
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.9);
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
        }

        .slider-btn.left { left: 18px; }
        .slider-btn.right { right: 18px; }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 22px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #cbd5e1;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .dot.active {
          background: #6d28d9;
          transform: scale(1.15);
        }

        .about-grid,
        .program-grid,
        .stats-grid,
        .footer-grid,
        .event-grid,
        .sponsor-why-grid,
        .package-grid,
        .logo-grid,
        .enquiry-grid {
          display: grid;
          gap: 24px;
        }

        .about-grid,
        .program-grid {
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .sponsor-why-grid {
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }

        .package-grid {
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }

        .logo-grid {
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }

        .enquiry-grid {
          grid-template-columns: 1fr 1fr;
          align-items: start;
        }

        .about-card,
        .program-card,
        .event-card,
        .poster-card,
        .sponsor-card,
        .package-card,
        .logo-card,
        .enquiry-card,
        .payment-card {
          background: white;
          border-radius: 24px;
          padding: 28px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 12px 35px rgba(15, 23, 42, 0.06);
          transition: 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .about-card::after,
        .program-card::after,
        .sponsor-card::after,
        .package-card::after,
        .logo-card::after,
        .enquiry-card::after,
        .payment-card::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 4px;
          background: linear-gradient(90deg, #6d28d9, #f97316);
          transition: width 0.35s ease;
          border-bottom-left-radius: 24px;
          border-bottom-right-radius: 24px;
        }

        .about-card:hover::after,
        .program-card:hover::after,
        .sponsor-card:hover::after,
        .package-card:hover::after,
        .logo-card:hover::after,
        .enquiry-card:hover::after,
        .payment-card:hover::after {
          width: 100%;
        }

        .about-card:hover,
        .program-card:hover,
        .event-card:hover,
        .poster-card:hover,
        .sponsor-card:hover,
        .package-card:hover,
        .logo-card:hover,
        .enquiry-card:hover,
        .payment-card:hover {
          transform: translateY(-6px);
        }

        .about-card h3,
        .program-card h3,
        .event-card h3,
        .sponsor-card h3,
        .package-card h3,
        .enquiry-card h3,
        .payment-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          margin-bottom: 12px;
          color: #0f172a;
        }

        .about-card p,
        .program-card p,
        .event-card p,
        .sponsor-card p,
        .enquiry-card p,
        .payment-card p {
          color: #475569;
        }

        .program-icon,
        .sponsor-icon,
        .bank-icon {
          width: 65px;
          height: 65px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ede9fe, #fdf2f8);
          color: #6d28d9;
          font-size: 26px;
          margin-bottom: 18px;
        }

        .event-section-wrap {
          background: linear-gradient(135deg, #fff7ed, #f5f3ff);
          padding-top: 70px;
        }

        .event-grid {
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
        }

        .event-tag {
          display: inline-block;
          background: #6d28d9;
          color: #fff;
          padding: 10px 16px;
          border-radius: 999px;
          font-weight: 700;
          margin-bottom: 18px;
          font-size: 14px;
        }

        .event-theme {
          background: #f8fafc;
          border-left: 5px solid #f97316;
          padding: 18px;
          border-radius: 16px;
          margin: 20px 0 24px;
          color: #0f172a;
          font-weight: 700;
          font-size: 18px;
        }

        .event-meta {
          display: grid;
          gap: 16px;
          margin-bottom: 24px;
        }

        .event-meta-item,
        .payment-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #f8fafc;
          padding: 16px;
          border-radius: 16px;
        }

        .event-meta-icon,
        .payment-item-icon {
          min-width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #ede9fe;
          color: #6d28d9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .event-meta-item strong,
        .payment-item strong {
          display: block;
          color: #0f172a;
          margin-bottom: 4px;
          font-size: 15px;
        }

        .event-people {
          display: grid;
          gap: 14px;
          margin-top: 10px;
        }

        .event-person {
          background: linear-gradient(135deg, #0f766e, #115e59);
          color: white;
          border-radius: 16px;
          padding: 16px 18px;
        }

        .event-person small {
          display: block;
          opacity: 0.85;
          margin-bottom: 4px;
        }

        .event-person span {
          font-size: 22px;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
        }

        .poster-card {
          padding: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .poster-card img {
          width: 100%;
          border-radius: 20px;
          object-fit: cover;
        }

        .donation-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .sponsor-section-wrap {
          background: linear-gradient(180deg, #ffffff, #f8fafc);
        }

        .package-badge {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .package-bronze .package-badge {
          background: #f5e1d3;
          color: #8a4b20;
        }

        .package-silver .package-badge {
          background: #eef2f7;
          color: #475569;
        }

        .package-gold .package-badge {
          background: #fff1bf;
          color: #8a6400;
        }

        .package-platinum .package-badge {
          background: #ede9fe;
          color: #6d28d9;
        }

        .package-price {
          font-family: 'Poppins', sans-serif;
          font-size: 30px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 14px;
        }

        .package-list {
          display: grid;
          gap: 10px;
          margin: 18px 0 22px;
        }

        .package-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #475569;
        }

        .package-item svg {
          color: #16a34a;
          margin-top: 3px;
          min-width: 16px;
        }

        .logo-card {
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          color: #64748b;
          background: linear-gradient(135deg, #ffffff, #f8fafc);
        }

        .sponsor-logo-link {
          text-decoration: none;
        }

        .sponsor-logo-img {
          max-width: 150px;
          max-height: 90px;
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          margin: 0 auto;
          filter: grayscale(10%);
          transition: transform 0.3s ease, filter 0.3s ease;
          will-change: transform;
        }

        .logo-card:hover .sponsor-logo-img {
          transform: scale(1.05);
          filter: grayscale(0%);
        }

        .sponsor-cta-bar {
          margin-top: 36px;
          background: linear-gradient(135deg, #6d28d9, #4f46e5);
          color: white;
          padding: 28px;
          border-radius: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .sponsor-cta-bar h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 26px;
          margin-bottom: 6px;
        }

        .enquiry-card form {
          display: grid;
          gap: 14px;
          margin-top: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          border: 1px solid #dbe2ea;
          background: #fff;
          border-radius: 14px;
          padding: 14px 16px;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          color: #0f172a;
        }

        .form-textarea {
          min-height: 140px;
          resize: vertical;
        }

        .enquiry-info-list,
        .payment-list {
          display: grid;
          gap: 14px;
          margin-top: 18px;
        }

        .enquiry-info-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          background: #f8fafc;
          padding: 16px;
          border-radius: 16px;
        }

        .enquiry-info-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #ede9fe;
          color: #6d28d9;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 42px;
        }

        .impact-box {
          background: linear-gradient(135deg, #6d28d9, #4f46e5);
          border-radius: 30px;
          padding: 40px;
          color: white;
          box-shadow: 0 20px 50px rgba(79, 70, 229, 0.2);
        }

        .stats-grid {
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          margin-top: 28px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 24px;
          border-radius: 22px;
          text-align: center;
          backdrop-filter: blur(6px);
        }

        .stat-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 34px;
          margin-bottom: 8px;
        }

        .cta {
          text-align: center;
          background: linear-gradient(135deg, #fff7ed, #f5f3ff);
          border: 1px solid #e9d5ff;
          border-radius: 30px;
          padding: 55px 25px;
        }

        .cta h2 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #0f172a;
          margin-bottom: 14px;
        }

        .cta p {
          max-width: 720px;
          margin: 0 auto 24px;
          color: #475569;
          font-size: 17px;
        }

        .footer {
          background: #0f172a;
          color: #cbd5e1;
          padding: 70px 0 30px;
          margin-top: 80px;
        }

        .footer-grid {
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          margin-bottom: 30px;
        }

        .footer h3 {
          font-family: 'Poppins', sans-serif;
          color: white;
          margin-bottom: 14px;
          font-size: 20px;
        }

        .footer p,
        .footer a {
          color: #cbd5e1;
          line-height: 1.8;
        }

        .footer a:hover {
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          text-align: center;
          font-size: 14px;
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

        .section-loader-bar {
          width: 40%;
          height: 100%;
          background: linear-gradient(90deg, #6d28d9, #f97316);
          border-radius: 999px;
          animation: loadingBar 1.2s infinite ease-in-out;
        }

        @keyframes loadingBar {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(320%); }
        }

        @media (max-width: 950px) {
          .hero-grid,
          .event-grid,
          .enquiry-grid {
            grid-template-columns: 1fr;
          }

          .nav-content {
            justify-content: center;
          }

          .nav-links {
            justify-content: center;
          }

          .hero-card img,
          .slide {
            height: 360px;
          }

          .slider-shell {
            min-height: 360px;
          }

          .slide-overlay {
            padding: 24px;
          }
        }

        @media (max-width: 700px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .logo {
            font-size: 22px;
            text-align: center;
          }

          .hero p,
          .section-title p,
          .cta p,
          .slide-content p {
            font-size: 16px;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }

          .hero-actions,
          .donation-buttons {
            width: 100%;
          }

          .event-person span {
            font-size: 18px;
          }

          .slider-btn {
            width: 40px;
            height: 40px;
          }

          .slide-content h3 {
            font-size: 1.6rem;
          }

          .slide,
          .slider-shell {
            min-height: 300px;
            height: 300px;
          }
        }
      `}</style>

      <div className="app">
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

            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#gallery-highlights">Gallery</a>
              <a href="#upcoming-event">Coming Up Next</a>
              <a href="#sponsors">Sponsors</a>
              <a href="#about">About</a>
              <a href="#programs">Programs</a>
              <a href="#impact">Impact</a>
              <a href="#contact">Contact</a>
              <a
                href="#sponsorship-payment"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                
                <FaHeart /> Donate
              </a>
            </div>
          </div>
        </nav>

        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <div className="hero-badge">Inclusion • Awareness • Celebration</div>
              <h1>Celebrating children and young people with autism</h1>
              <p>
                Mr & Miss Autism is a personal project dedicated to raising
                awareness, celebrating unique abilities, and creating a more
                supportive and inclusive community for children with autism and
                their families.
              </p>

              <div className="hero-actions">
                <a href="#gallery-highlights" className="btn btn-primary">
                  <FaHandsHelping /> View Gallery
                </a>

                <a href="#sponsorship-payment" className="btn btn-dark">
                  <FaHandshake /> Become a Sponsor
                </a>
              </div>
            </div>

            <div className="hero-card">
              <img
                src={eventPoster}
                alt="Mr and Miss Autism 2026 poster"
                loading="eager"
                decoding="async"
              />
              <h3>Advancing neurodiversity through pageantry</h3>
              <p>
                Join us for an inspiring event that celebrates ability,
                visibility, and inclusion while creating a platform for autism
                awareness in the community.
              </p>

              <a href="#upcoming-event" className="btn btn-primary">
                <FaCalendarAlt /> See Event Details
              </a>
            </div>
          </div>
        </section>

        <section className="slider-section" id="gallery-highlights">
          <div className="container">
            <div className="section-title">
              <h2>Gallery Highlights for 2025 event</h2>
              <p>
                A glimpse into the joy, confidence, connection, and inclusion that define this journey.
              </p>
            </div>

            <div className="slider-shell">
              <button className="slider-btn left" onClick={goPrev} aria-label="Previous slide">
                <FaChevronLeft />
              </button>

              <div
                className="slider-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div className="slide" key={index}>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="slide-overlay">
                      <div className="slide-content">
                        <h3>{slide.title}</h3>
                        <p>{slide.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="slider-btn right" onClick={goNext} aria-label="Next slide">
                <FaChevronRight />
              </button>
            </div>

            <div className="slider-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="upcoming-event" className="event-section-wrap">
          <div className="container">
            <div className="section-title">
              <h2>Coming Up Next Month</h2>
              <p>
                Be part of our upcoming signature event as we celebrate
                neurodiversity, confidence, talent, and inclusion.
              </p>
            </div>

            <div className="event-grid">
              <div className="event-card">
                <div className="event-tag">Upcoming Event</div>
                <h3>Mr & Miss Autism 2026</h3>
                <div className="event-theme">
                  Theme: “Advancing Neurodiversity Through Pageantry”
                </div>

                <div className="event-meta">
                  <div className="event-meta-item">
                    <div className="event-meta-icon">
                      <FaCalendarAlt />
                    </div>
                    <div>
                      <strong>Date</strong>
                      18 April 2026
                    </div>
                  </div>

                  <div className="event-meta-item">
                    <div className="event-meta-icon">
                      <FaClock />
                    </div>
                    <div>
                      <strong>Time</strong>
                      2PM to 5PM CAT
                    </div>
                  </div>

                  <div className="event-meta-item">
                    <div className="event-meta-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <strong>Venue</strong>
                      Chamba Valley Zambia National Service Banquet Hall
                    </div>
                  </div>
                </div>

                <div className="event-people">
                  <div className="event-person">
                    <small>Featuring</small>
                    <span>Drimz Mr Muziq</span>
                  </div>

                  <div className="event-person">
                    <small>Host</small>
                    <span>Samuel Machishi</span>
                  </div>
                </div>

                <div className="donation-buttons">
                  <a
                    href="https://wa.me/260979235167?text=Hello%20I%20would%20like%20to%20find%20out%20more%20about%20Mr%20and%20Miss%20Autism"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <FaWhatsapp /> Find Out More
                  </a>
                </div>
              </div>

              <div className="poster-card">
                <img
                  src={eventPoster}
                  alt="Upcoming event poster"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <LazySection fallback={<SectionLoader minHeight="1900px" />} minHeight="1900px">
          <section id="sponsors" className="sponsor-section-wrap">
            <div className="container">
              <div className="section-title">
                <h2>Sponsor With Us</h2>
                <p>
                  Sponsorships are confirmed through bank payment only. Once your sponsorship is confirmed, we shall need your logo for brand visibility on our adverts and during the event.
                </p>
              </div>

              <div className="sponsor-why-grid">
                <div className="sponsor-card">
                  <div className="sponsor-icon"><FaBullhorn /></div>
                  <h3>Why Sponsor Us</h3>
                  <p>
                    Your brand becomes part of a positive, people-centered initiative that promotes dignity, inclusion, and hope.
                  </p>
                </div>

                <div className="sponsor-card">
                  <div className="sponsor-icon"><FaGlobeAfrica /></div>
                  <h3>Community Reach</h3>
                  <p>
                    Gain visibility across event audiences, families, supporters, social media, and digital campaign channels.
                  </p>
                </div>

                <div className="sponsor-card">
                  <div className="sponsor-icon"><FaHandshake /></div>
                  <h3>Brand Alignment</h3>
                  <p>
                    Stand with a project that celebrates children, supports families, and builds meaningful awareness around autism.
                  </p>
                </div>
              </div>

              <div className="about-card" style={{ marginTop: "30px" }}>
                <h3>What sponsors gain</h3>
                <div className="package-list">
                  {sponsorBenefits.map((benefit, index) => (
                    <div className="package-item" key={index}>
                      <FaCheckCircle />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-title" style={{ marginTop: "56px" }}>
                <h2>Sponsorship Packages</h2>
                <p>
                  Choose a package that fits your brand goals, then proceed to the sponsorship payment details below.
                </p>
              </div>

              <div className="package-grid">
                {sponsorPackages.map((pkg) => (
                  <div key={pkg.name} className={`package-card ${pkg.className}`}>
                    <div className="package-badge">{pkg.name}</div>
                    <div className="package-price">{pkg.amount}</div>
                    <p>Ideal for organizations looking to make visible, meaningful impact.</p>

                    <div className="package-list">
                      {pkg.benefits.map((benefit, idx) => (
                        <div className="package-item" key={idx}>
                          <FaCheckCircle />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <a href="#sponsorship-payment" className="btn btn-primary">
                      <FaHandshake /> Choose Package
                    </a>
                  </div>
                ))}
              </div>

              <div className="sponsor-cta-bar">
                <div>
                  <h3>Need the full sponsorship proposal?</h3>
                  <p>Download the deck or use WhatsApp only to find out more.</p>
                </div>

                <div className="donation-buttons" style={{ marginTop: 0 }}>
                  <a href="/sponsorship-deck.pdf" target="_blank" rel="noreferrer" className="btn btn-dark">
                    <FaDownload /> Download Deck
                  </a>
                  <a
                    href="https://wa.me/260979235167?text=Hello%20I%20would%20like%20to%20find%20out%20more%20about%20sponsoring%20Mr%20and%20Miss%20Autism"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <FaWhatsapp /> Contact us for more information
                  </a>
                </div>
              </div>

              <div className="section-title" style={{ marginTop: "56px" }}>
                <h2>Our Partners & Sponsors</h2>
                <p>
                  As partnerships grow, this section showcases sponsor logos and helps build trust with new supporters.
                </p>
              </div>

              <div className="logo-grid">
                <a
                  href="https://web.facebook.com/p/CoolBrain-Infotech-and-Open-Innovation-Centre-100093539933295/?_rdc=1&_rdr#"
                  target="_blank"
                  rel="noreferrer"
                  className="logo-card sponsor-logo-link"
                >
                  <img src={sponsor1} alt="CoolBrain Infotech" className="sponsor-logo-img" loading="lazy" decoding="async" />
                </a>

                <a
                  href="https://mafzambia.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="logo-card sponsor-logo-link"
                >
                  <img src={sponsor2} alt="Mulenga Autism Foundation" className="sponsor-logo-img" loading="lazy" decoding="async" />
                </a>

                <a
                  href="https://www.specialolympics-ny.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="logo-card sponsor-logo-link"
                >
                  <img src={sponsor3} alt="Special Olympics" className="sponsor-logo-img" loading="lazy" decoding="async" />
                </a>

                <a
                  href="https://www.zesco.co.zm/"
                  target="_blank"
                  rel="noreferrer"
                  className="logo-card sponsor-logo-link"
                >
                  <img src={sponsor4} alt="Zesco" className="sponsor-logo-img" loading="lazy" decoding="async" />
                </a>

                <a
                  href="https://multisensoryschool.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="logo-card sponsor-logo-link"
                >
                  <img src={sponsor5} alt="Multisensory School" className="sponsor-logo-img" loading="lazy" decoding="async" />
                </a>
              </div>

              <div id="sponsorship-payment" className="payment-card" style={{ marginTop: "40px" }}>
                <div className="bank-icon"><FaUniversity /></div>
                <h3>Sponsorship Payment Details</h3>
                <p>
                  We shall need your logo for brand visibility on our adverts and during the event.
                </p>

                <div className="payment-list">
                  <div className="payment-item">
                    <div className="payment-item-icon"><FaUniversity /></div>
                    <div>
                      <strong>Bank Name</strong>
                      <p>ZANACO</p>
                    </div>
                  </div>

                  <div className="payment-item">
                    <div className="payment-item-icon"><FaUniversity /></div>
                    <div>
                      <strong>Branch Name</strong>
                      <p>Manda Hill</p>
                    </div>
                  </div>

                  <div className="payment-item">
                    <div className="payment-item-icon"><FaUniversity /></div>
                    <div>
                      <strong>Account Name</strong>
                      <p>Centre for Persons with Disabilities</p>
                    </div>
                  </div>

                  <div className="payment-item">
                    <div className="payment-item-icon"><FaUniversity /></div>
                    <div>
                      <strong>Account Number</strong>
                      <p>5872795500308</p>
                    </div>
                  </div>

                  <div className="payment-item">
                    <div className="payment-item-icon"><FaUniversity /></div>
                    <div>
                      <strong>Sort Code</strong>
                      <p>10078</p>
                    </div>
                  </div>

                  <div className="payment-item">
                    <div className="payment-item-icon"><FaUniversity /></div>
                    <div>
                      <strong>Branch Code</strong>
                      <p>078</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "20px" }}>
                  <p>
                    Thank you for considering this opportunity to make a profound difference in the lives of individuals with autism. We believe that with your support, the Third Edition of the Mr. & Miss Autism Beauty Pageant & Talent Show will be an unforgettable and empowering experience for all involved.
                  </p>
                  <p style={{ marginTop: "12px" }}>
                    We look forward to the possibility of partnering with you.
                  </p>
                </div>

                <div className="donation-buttons">
                  <a
                    href="https://wa.me/260979235167?text=Hello%20I%20would%20like%20to%20find%20out%20more%20about%20sponsoring%20Mr%20and%20Miss%20Autism"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <FaWhatsapp /> Find Out More on WhatsApp
                  </a>
                </div>
              </div>

              <div className="section-title" style={{ marginTop: "56px" }}>
                <h2>Sponsor Enquiry</h2>
                <p>
                  Fill in your details below if you would like to find out more before making payment.
                </p>
              </div>

              <div className="enquiry-grid">
                <div className="enquiry-card">
                  <h3>Send a sponsor enquiry</h3>
                  <p>
                    Share your details and package interest. This form opens a pre-filled WhatsApp enquiry message.
                  </p>

                  <form onSubmit={handleSponsorSubmit}>
                    <div className="form-row">
                      <input
                        className="form-input"
                        name="name"
                        placeholder="Your Name"
                        value={sponsorForm.name}
                        onChange={handleSponsorChange}
                        required
                      />
                      <input
                        className="form-input"
                        name="company"
                        placeholder="Company / Organization"
                        value={sponsorForm.company}
                        onChange={handleSponsorChange}
                      />
                    </div>

                    <div className="form-row">
                      <input
                        className="form-input"
                        name="phone"
                        placeholder="Phone Number"
                        value={sponsorForm.phone}
                        onChange={handleSponsorChange}
                      />
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={sponsorForm.email}
                        onChange={handleSponsorChange}
                      />
                    </div>

                    <select
                      className="form-select"
                      name="package"
                      value={sponsorForm.package}
                      onChange={handleSponsorChange}
                    >
                      {sponsorPackages.map((pkg) => (
                        <option key={pkg.name} value={pkg.name}>
                          {pkg.name}
                        </option>
                      ))}
                    </select>

                    <textarea
                      className="form-textarea"
                      name="message"
                      placeholder="Tell us what you'd like to know"
                      value={sponsorForm.message}
                      onChange={handleSponsorChange}
                    />

                    <button type="submit" className="btn btn-whatsapp">
                      <FaWhatsapp /> Ask on WhatsApp
                    </button>
                  </form>
                </div>

                <div className="enquiry-card">
                  <h3>Direct sponsor contact</h3>
                  <p>
                    Reach out for clarification, logo submission, sponsorship questions, and deck requests.
                  </p>

                  <div className="enquiry-info-list">
                    <div className="enquiry-info-item">
                      <div className="enquiry-info-icon"><FaWhatsapp /></div>
                      <div>
                        <strong>WhatsApp</strong>
                        <p>+260 979 235 167</p>
                      </div>
                    </div>

                    <div className="enquiry-info-item">
                      <div className="enquiry-info-icon"><FaEnvelope /></div>
                      <div>
                        <strong>Email</strong>
                        <p>info@mrandmissautism.org</p>
                      </div>
                    </div>

                    <div className="enquiry-info-item">
                      <div className="enquiry-info-icon"><FaPhoneAlt /></div>
                      <div>
                        <strong>Call</strong>
                        <p>+260 979 235 167</p>
                      </div>
                    </div>
                  </div>

                  <div className="donation-buttons">
                    <a href="/sponsorship-deck.pdf" target="_blank" rel="noreferrer" className="btn btn-dark">
                      <FaDownload /> Download Deck
                    </a>
                    <a
                      href="https://wa.me/260979235167?text=Hello%20I%20would%20like%20to%20find%20out%20more%20about%20sponsoring%20Mr%20and%20Miss%20Autism"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      <FaHandshake /> Find Out More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection fallback={<SectionLoader minHeight="520px" />} minHeight="520px">
          <section id="about">
            <div className="container">
              <div className="section-title">
                <h2>About Mr & Miss Autism</h2>
                <p>
                  This project exists to promote dignity, confidence, visibility,
                  and inclusion for children and youth on the autism spectrum.
                </p>
              </div>

              <div className="about-grid">
                <div className="about-card">
                  <h3>Our Vision</h3>
                  <p>
                    To build a society where individuals with autism are embraced,
                    understood, celebrated, and given equal opportunities to grow.
                  </p>
                </div>

                <div className="about-card">
                  <h3>Our Mission</h3>
                  <p>
                    To raise autism awareness, support families, celebrate unique
                    talents, and encourage meaningful inclusion in communities.
                  </p>
                </div>

                <div className="about-card">
                  <h3>Why It Matters</h3>
                  <p>
                    Many children with autism are misunderstood or overlooked.
                    This project helps bring visibility, understanding, and hope.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection fallback={<SectionLoader minHeight="540px" />} minHeight="540px">
          <section id="programs">
            <div className="container">
              <div className="section-title">
                <h2>What We Do</h2>
                <p>
                  We focus on awareness, empowerment, support, and the celebration
                  of unique abilities.
                </p>
              </div>

              <div className="program-grid">
                {programs.map((item, index) => (
                  <div className="program-card" key={index}>
                    <div className="program-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection fallback={<SectionLoader minHeight="500px" />} minHeight="500px">
          <section id="impact">
            <div className="container">
              <div className="impact-box">
                <div className="section-title" style={{ marginBottom: "25px" }}>
                  <h2 style={{ color: "white" }}>Our Desired Impact</h2>
                  <p style={{ color: "rgba(255,255,255,0.85)" }}>
                    We want to create a kinder and more inclusive community where
                    children with autism are seen, appreciated, and supported.
                  </p>
                </div>

                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <div className="stat-card" key={index}>
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        <section>
          <div className="container">
            <div className="cta">
              <h2>Support the Movement</h2>
              <p>
                Your donation can help support autism awareness activities,
                outreach programs, family support efforts, and events that give
                children a platform to shine.
              </p>

              <div className="donation-buttons" style={{ justifyContent: "center" }}>
                <a
                  href="https://wa.me/260979235167?text=Hello%20I%20would%20like%20to%20donate%20to%20Mr%20and%20Miss%20Autism"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  <FaWhatsapp /> Donate on WhatsApp
                </a>

                <a href="#sponsorship-payment" className="btn btn-dark">
                  <FaHandshake /> Become a Sponsor
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer" id="contact">
          <div className="container">
            <div className="footer-grid">
              <div>
                <h3>Mr & Miss Autism</h3>
                <p>
                  A personal project focused on autism awareness, inclusion,
                  family support, and celebrating every child’s uniqueness.
                </p>
              </div>

              <div>
                <h3>Quick Links</h3>
                <p><a href="#home">Home</a></p>
                <p><a href="#gallery-highlights">Gallery</a></p>
                <p><a href="#upcoming-event">Coming Up Next</a></p>
                <p><a href="#sponsors">Sponsors</a></p>
                <p><a href="#about">About</a></p>
                <p><a href="#programs">Programs</a></p>
              </div>

              <div>
                <h3>Contact</h3>
                <p><a href="mailto:info@mrandmissautism.org">info@mrandmissautism.org</a></p>
                <p><a href="tel:+260979235167">+260 979 235 167</a></p>
                <p>
                  <a href="https://wa.me/260979235167" target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                  </a>
                </p>
              </div>

              <div>
                <h3>Follow Us</h3>
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

            <div className="footer-bottom">
              © 2026 Mr & Miss Autism. All rights reserved.
            </div>
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
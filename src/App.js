import React from "react";
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
  FaMobileAlt,
} from "react-icons/fa";
import eventPoster from "./assets/event-poster.jpeg";

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
      text: "We aim to encourage and support parents, guardians, and caregivers with helpful information and community engagement.",
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

        .btn-primary:hover {
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: white;
          color: #6d28d9;
          border: 1px solid #ddd6fe;
        }

        .btn-secondary:hover {
          background: #f5f3ff;
        }

        .btn-whatsapp {
          background: #25D366;
          color: white;
          box-shadow: 0 12px 25px rgba(37, 211, 102, 0.25);
        }

        .btn-whatsapp:hover {
          transform: translateY(-2px);
        }

        .btn-momo {
          background: linear-gradient(135deg, #0f766e, #0d9488);
          color: white;
          box-shadow: 0 12px 25px rgba(13, 148, 136, 0.25);
        }

        .btn-momo:hover {
          transform: translateY(-2px);
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

        .about-grid,
        .program-grid,
        .stats-grid,
        .footer-grid,
        .event-grid {
          display: grid;
          gap: 24px;
        }

        .about-grid {
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .about-card,
        .program-card,
        .event-card,
        .poster-card {
          background: white;
          border-radius: 24px;
          padding: 28px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 12px 35px rgba(15, 23, 42, 0.06);
          transition: 0.3s ease;
        }

        .about-card:hover,
        .program-card:hover,
        .event-card:hover,
        .poster-card:hover {
          transform: translateY(-6px);
        }

        .about-card h3,
        .program-card h3,
        .event-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          margin-bottom: 12px;
          color: #0f172a;
        }

        .about-card p,
        .program-card p,
        .event-card p {
          color: #475569;
        }

        .program-grid {
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .program-icon {
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

        .event-meta-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #f8fafc;
          padding: 16px;
          border-radius: 16px;
        }

        .event-meta-icon {
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

        .event-meta-item strong {
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

        @media (max-width: 950px) {
          .hero-grid,
          .event-grid {
            grid-template-columns: 1fr;
          }

          .nav-content {
            justify-content: center;
          }

          .nav-links {
            justify-content: center;
          }

          .hero-card img {
            height: 320px;
          }
        }

        @media (max-width: 600px) {
          .logo {
            font-size: 22px;
            text-align: center;
          }

          .hero p,
          .section-title p,
          .cta p {
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
        }
      `}</style>

      <div className="app">
        <div className="topbar">
          <div className="container topbar-content">
            <div>Empowering inclusion, awareness, and confidence</div>
            <div className="socials">
  <a href="https://www.facebook.com/61556561801555/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
  <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
</div>
          </div>
        </div>

        <nav className="navbar">
          <div className="container nav-content">
            <div className="logo">
              Mr & Miss <span>Autism <span style={{color: 'green'}}>Zambia</span></span>
            </div>

            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#upcoming-event">Coming Up Next</a>
              <a href="#about">About</a>
              <a href="#programs">Programs</a>
              <a href="#impact">Impact</a>
              <a href="#contact">Contact</a>
              <a
                href="https://wa.me/260979235167?text=Hello%20I%20would%20like%20to%20donate%20to%20Mr%20and%20Miss%20Autism"
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
                <a href="#upcoming-event" className="btn btn-primary">
                  <FaCalendarAlt /> Coming Up Next
                </a>

                <a
                  href="https://wa.me/260979235167?text=Hello%20I%20would%20like%20to%20support%20Mr%20and%20Miss%20Autism"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>

            <div className="hero-card">
              <img
                src={eventPoster}
                alt="Mr and Miss Autism 2026 poster"
              />
              <h3>Advancing neurodiversity through pageantry</h3>
              <p>
                Join us for an inspiring event that celebrates ability,
                visibility, and inclusion while creating a platform for autism
                awareness in the community.
              </p>

              <a href="#upcoming-event" className="btn btn-primary">
                <FaHandsHelping /> See Event Details
              </a>
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
                    href="https://wa.me/260979235167?text=Hello%20I%20want%20to%20support%20Mr%20and%20Miss%20Autism%20through%20WhatsApp"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <FaWhatsapp /> Donate via WhatsApp
                  </a>

                  <a
                    href="https://wa.me/260979235167?text=Hello%20I%20want%20to%20donate%20using%20Mobile%20Money%20to%20Mr%20and%20Miss%20Autism"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-momo"
                  >
                    <FaMobileAlt /> Mobile Money
                  </a>
                </div>
              </div>

              <div className="poster-card">
                <img src={eventPoster} alt="Upcoming event poster" />
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="section-title">
              <h2>About Mr & Miss Autism Zambia</h2>
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
                  href="https://wa.me/260979235167?text=Hello%20I%20want%20to%20donate%20through%20WhatsApp%20to%20Mr%20and%20Miss%20Autism"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  <FaWhatsapp /> WhatsApp
                </a>

                <a
                  href="https://wa.me/260979235167?text=Hello%20I%20want%20to%20donate%20using%20Mobile%20Money%20to%20Mr%20and%20Miss%20Autism"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-momo"
                >
                  <FaMobileAlt /> Mobile Money
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
                <p><a href="#upcoming-event">Coming Up Next</a></p>
                <p><a href="#about">About</a></p>
                <p><a href="#programs">Programs</a></p>
                <p><a href="#impact">Impact</a></p>
              </div>

              <div>
                <h3>Contact</h3>
                <p><a href="mailto:info@mrandmissautism.org">info@mrandmissautism.org</a></p>
                <p><a href="tel:+260979235167">+260 979 235 167</a></p>
                <p>
                  <a
                    href="https://wa.me/260979235167"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </p>
              </div>

              <div>
                <h3>Follow Us</h3>
                <div className="socials">
                  <a href="https://www.facebook.com/61556561801555/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
<a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
<a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              © 2026 Mr & Miss Autism. All rights reserved.
            </div>
          </div>
        </footer>

        <a
          href="https://wa.me/260979235167?text=Hello%20Mr%20and%20Miss%20Autism"
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
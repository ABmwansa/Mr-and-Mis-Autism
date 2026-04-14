import React, { useEffect, useMemo, useRef, useState, Suspense } from "react";
import { Link } from "react-router-dom";import {
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
import slide3 from "./assets/slide3.jpeg";
import slide4 from "./assets/slide4.jpg";
import slide5 from "./assets/slide5.jpeg";
import slide6 from "./assets/slide6.jpg";

import sponsor1 from "./assets/sponsor logos/coolbrain.png";
import sponsor2 from "./assets/sponsor logos/mulenga.png";
import sponsor3 from "./assets/sponsor logos/special.png";
import sponsor4 from "./assets/sponsor logos/zesco.png";
import sponsor5 from "./assets/sponsor logos/multisensory.png";
import sponsor6 from "./assets/sponsor logos/Logo6.png";
import sponsor7 from "./assets/sponsor logos/logo7.jpeg";
import sponsor8 from "./assets/sponsor logos/Logo.jpg.jpeg";

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

  const parentGuideSlides = [
    {
      id: "not-judging",
      kicker: "What Judges Are Not Judging",
      title: "Your child is not being measured against social expectations.",
      accent: "No comparisons. No pressure to perform.",
      points: [
        "Speech ability or silence",
        "Eye contact or lack of it",
        "Stimming, movement, or stillness",
        "Needing help from an adult or aide",
        "Speed, confidence, or stage skills",
      ],
      note: "Your child is never compared to another child.",
    },
    {
      id: "observed-with-care",
      kicker: "What Judges Do Look For",
      title: "Judges gently observe how supported, comfortable, and authentic your child feels.",
      accent: "There is no single right way for this to appear.",
      points: [
        "Comfort and emotional safety",
        "Authentic self-expression",
        "Effort and preparation",
        "Engagement and presence",
        "Supportive interaction when help is needed",
      ],
      note: "These are observed softly and respectfully, even when they show up briefly or subtly.",
    },
    {
      id: "clothing",
      kicker: "About Clothing Categories",
      title: "Outfits are symbolic and comfort always comes first.",
      accent: "Fashion cost is not the point.",
      points: [
        "Sensory-friendly clothing is encouraged",
        "Simplified or adapted outfits are welcome",
        "Aspirational career outfits are allowed",
        "Comfort is valued over appearance pressure",
      ],
      note: "Children can be celebrated in clothing that helps them feel safe and confident.",
    },
    {
      id: "recognition",
      kicker: "Awards and Recognition",
      title: "Every child is affirmed and recognized.",
      accent: "Recognition is built around strengths, not perfection.",
      points: [
        "Every child receives an award",
        "Special recognitions highlight unique strengths",
        "The Spotlight Ambassador reflects comfort, authenticity, and inclusion",
      ],
      note: "This is a celebration of presence, effort, and individuality.",
    },
    {
      id: "wellbeing",
      kicker: "Your Child's Wellbeing Comes First",
      title: "A child may pause, step away, or leave the stage at any time.",
      accent: "Safety and dignity override the program flow.",
      points: [
        "Pausing is allowed",
        "Leaving the stage is allowed",
        "Recognition is not reduced if a child becomes overwhelmed",
        "Judges are expected to prioritize dignity and safety",
      ],
      note: "Participation is always child-led and support-led.",
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
      amount: "K25,000+",
      className: "package-bronze",
      benefits: [
        "Logo on website sponsor section",
        "Thank-you mention on social media",
        "Acknowledgement during the event",
      ],
    },
    {
      name: "Silver Sponsor",
      amount: "K35,000+",
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
      amount: "K7,500+",
      className: "package-platinum",
      benefits: ["Get your brand displayed"],
    },
  ];

  const quickLinks = [
    {
      icon: <FaPuzzlePiece />,
      title: "About Autism",
      text: "Learn what autism is, why inclusion matters, and how community understanding changes lives.",
      href: "#about",
    },
    {
      icon: <FaUsers />,
      title: "Support for Families",
      text: "See how we create visibility, support, and safer spaces for children, parents, and caregivers.",
      href: "#programs",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Upcoming Event",
      text: "Get the details for the 2026 pageant and talent show, including time, venue, and contact options.",
      href: "#upcoming-event",
    },
  ];

  const supportWays = [
    {
      icon: <FaHeart />,
      title: "Make a Donation",
      text: "Support awareness activities, family outreach, and events that give children a platform to shine.",
      href: "https://wa.me/260979235167?text=Hello%20I%20would%20like%20to%20donate%20to%20Mr%20and%20Miss%20Autism",
      external: true,
      cta: "Donate on WhatsApp",
    },
    {
      icon: <FaHandshake />,
      title: "Become a Sponsor",
      text: "Partner with us through sponsorship packages that increase visibility and help fund meaningful work.",
      href: "#sponsorship-packages",
      cta: "View packages",
    },
    {
      icon: <FaHandsHelping />,
      title: "Join the Community",
      text: "Follow our work, attend events, and help build a society where autistic children are celebrated and supported.",
      href: "#contact",
      cta: "Stay connected",
    },
  ];

  const updates = [
    {
      title: "Mr & Miss Autism 2026 is coming up",
      date: "18 April 2026",
      text: "Our next event will celebrate confidence, talent, and inclusion with families, supporters, and community partners.",
      href: "#upcoming-event",
    },
    {
      title: "Gallery highlights from past events",
      date: "Featured collection",
      text: "Browse moments of joy, creativity, and belonging from previous gatherings and celebrations.",
      href: "#gallery-highlights",
    },
    {
      title: "Sponsorship and partner opportunities open",
      date: "Ongoing",
      text: "Organizations can support the event through sponsorship packages, branding opportunities, and community partnership.",
      href: "#sponsors",
    },
  ];

  const smallDonationOptions = [
    {
      amount: "K50",
      title: "Snack Support",
      text: "Helps contribute to refreshments or a small comfort item for a child or family during an event day.",
    },
    {
      amount: "K100",
      title: "Activity Support",
      text: "Helps support a small awareness activity, craft materials, or child-friendly engagement resources.",
    },
    {
      amount: "K250",
      title: "Family Support",
      text: "Helps cover practical event support for families and strengthen inclusive participation.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeParentGuideSlide, setActiveParentGuideSlide] = useState(0);
  const [sponsorForm, setSponsorForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    package: "Gold Sponsor",
    message: "",
  });
  const [selectedSponsorPackage, setSelectedSponsorPackage] = useState("Gold Sponsor");
  const [sponsorSubmission, setSponsorSubmission] = useState(null);
  const [sponsorFormError, setSponsorFormError] = useState("");

  const resetSponsorForm = (packageName = "Gold Sponsor") => {
    setSelectedSponsorPackage(packageName);
    setSponsorSubmission(null);
    setSponsorFormError("");
    setSponsorForm({
      name: "",
      company: "",
      phone: "",
      email: "",
      package: packageName,
      message: "",
    });
  };

  useEffect(() => {
    document.title = "Mr & Miss Autism | Inclusion, Awareness & Sponsorship";
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveParentGuideSlide((prev) => (prev + 1) % parentGuideSlides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [parentGuideSlides.length]);

  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goPrev = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleSponsorChange = (e) => {
    const { name, value } = e.target;
    if (sponsorFormError) {
      setSponsorFormError("");
    }
    setSponsorForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSponsorPackageSelect = (pkg) => {
    setSelectedSponsorPackage(pkg.name);
    setSponsorSubmission(null);
    setSponsorFormError("");
    setSponsorForm((prev) => ({
      ...prev,
      package: pkg.name,
      message:
        prev.message ||
        `We are interested in the ${pkg.name} package (${pkg.amount}) and would like to receive the next sponsorship steps.`,
    }));

    document.getElementById("sponsor-enquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleChooseAnotherPackage = () => {
    setSponsorSubmission(null);
    setSponsorFormError("");
    document.getElementById("sponsorship-packages")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sponsorWhatsAppLink = useMemo(() => {
    const message = `Hello, I would like to find out more about sponsoring Mr & Miss Autism.

Name: ${sponsorForm.name || "-"}
Company: ${sponsorForm.company || "-"}
Phone: ${sponsorForm.phone || "-"}
Email: ${sponsorForm.email || "-"}
Package Interest: ${sponsorForm.package || "-"}
Message: ${sponsorForm.message || "-"}`;

    return `https://wa.me/260979235167?text=${encodeURIComponent(message)}`;
  }, [sponsorForm]);

  const handleSponsorSubmit = (e) => {
    e.preventDefault();
    if (!sponsorForm.name || !sponsorForm.company || !sponsorForm.phone || !sponsorForm.email) {
      setSponsorFormError("Please complete your name, company, phone number, and email before submitting.");
      return;
    }

    const reference = `MMA-SP-${Date.now().toString().slice(-6)}`;
    setSponsorSubmission({
      reference,
      submittedAt: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      package: sponsorForm.package,
      name: sponsorForm.name,
      company: sponsorForm.company,
    });
    setSponsorFormError("");
    document.getElementById("sponsor-enquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
          background:
            radial-gradient(circle at top left, rgba(109, 40, 217, 0.14), transparent 26%),
            radial-gradient(circle at top right, rgba(249, 115, 22, 0.12), transparent 28%),
            radial-gradient(circle at 50% 30%, rgba(15, 118, 110, 0.08), transparent 30%),
            #f4f7fb;
          color: #16324f;
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
          max-width: 1240px;
          margin: 0 auto;
        }

        .topbar {
          background: #0f2742;
          color: #e2ecf7;
          font-size: 14px;
          padding: 12px 0;
        }

        .topbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .topbar-links {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .topbar-links > a:not(.btn),
        .topbar-links button {
          color: #e2ecf7;
          font: inherit;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .topbar-links > a:not(.btn):hover,
        .topbar-links button:hover {
          color: white;
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
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #d8e3ef;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          gap: 20px;
          flex-wrap: wrap;
        }

        .logo {
          font-family: 'Poppins', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #0f2742;
          line-height: 1.1;
        }

        .logo span {
          color: #0f766e;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .nav-links a {
          color: #34506c;
          font-weight: 700;
          transition: 0.3s;
          font-size: 15px;
        }

        .nav-links a:hover {
          color: #0f766e;
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
          background: linear-gradient(135deg, #e16935, #c84a1d);
          color: white;
          box-shadow: 0 12px 25px rgba(216, 91, 43, 0.22);
        }

        .btn-primary:hover,
        .btn-whatsapp:hover,
        .btn-dark:hover {
          transform: translateY(-2px);
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
        }

        .btn-whatsapp {
          background: #25D366;
          color: white;
          box-shadow: 0 12px 25px rgba(37, 211, 102, 0.25);
        }

        .btn-dark {
          background: #0f2742;
          color: white;
          box-shadow: 0 12px 25px rgba(15, 39, 66, 0.18);
        }

        .btn-secondary {
          background: white;
          color: #0f2742;
          border: 1px solid #c6d5e4;
          box-shadow: 0 10px 24px rgba(15, 39, 66, 0.08);
        }

        .hero {
          min-height: auto;
          display: flex;
          align-items: center;
          background:
            radial-gradient(circle at top left, rgba(109, 40, 217, 0.16), transparent 32%),
            radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.16), transparent 34%),
            linear-gradient(180deg, #ffffff 0%, #f7f9fd 100%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
          gap: 32px;
          align-items: start;
          padding: 52px 0 28px;
        }

        .hero-badge {
          display: inline-block;
          background: linear-gradient(135deg, #ede9fe, #ffe7d6);
          color: #6d28d9;
          padding: 8px 14px;
          border-radius: 999px;
          font-weight: 700;
          margin-bottom: 18px;
          font-size: 13px;
          letter-spacing: 0.01em;
        }

        .hero h1 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          line-height: 1.08;
          margin-bottom: 18px;
          color: #0f2742;
        }

        .hero p {
          font-size: 18px;
          color: #4f657c;
          max-width: 620px;
          margin-bottom: 28px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .hero-meta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hero-meta span {
          background: white;
          border: 1px solid #d7e3ef;
          border-radius: 999px;
          padding: 10px 14px;
          font-weight: 700;
          color: #34506c;
          font-size: 14px;
        }

        .hero-card {
          background: white;
          padding: 22px;
          border-radius: 24px;
          box-shadow: 0 22px 48px rgba(15, 39, 66, 0.08);
          border: 1px solid #d9e4ef;
        }

        .hero-card img {
          width: 100%;
          height: 360px;
          object-fit: cover;
          border-radius: 18px;
          margin-bottom: 18px;
        }

        .hero-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          margin-bottom: 10px;
          color: #0f2742;
        }

        .hero-card p {
          font-size: 16px;
          margin-bottom: 18px;
        }

        .hero-card-label {
          color: #0f766e;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-size: 12px;
          margin-bottom: 12px;
        }

        .hero-quick-grid,
        .support-grid,
        .updates-grid,
        .small-donation-grid,
        .definition-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .hero-quick-grid {
          margin: 0 0 18px;
        }

        .quick-card,
        .support-card,
        .update-card,
        .community-card,
        .small-donation-card,
        .definition-card {
          background: white;
          border: 1px solid #d9e4ef;
          border-radius: 22px;
          padding: 24px;
          box-shadow: 0 12px 32px rgba(15, 39, 66, 0.06);
        }

        .quick-card-icon,
        .support-card-icon {
          width: 54px;
          height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #e7f1fa;
          color: #0f4f85;
          font-size: 22px;
          margin-bottom: 16px;
        }

        .quick-card h3,
        .support-card h3,
        .update-card h3,
        .community-card h3,
        .small-donation-card h3,
        .definition-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          color: #0f2742;
          margin-bottom: 10px;
        }

        .quick-card p,
        .support-card p,
        .update-card p,
        .community-card p,
        .small-donation-card p,
        .definition-card p {
          color: #4f657c;
          margin-bottom: 18px;
        }

        .definition-grid {
          grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
          align-items: stretch;
        }

        .definition-card.featured-definition {
          background: linear-gradient(135deg, #fff7ed, #f5f3ff);
          border-color: #e9d5ff;
        }

        .definition-highlight {
          display: inline-block;
          padding: 8px 12px;
          border-radius: 999px;
          background: #ede9fe;
          color: #6d28d9;
          font-weight: 800;
          font-size: 13px;
          margin-bottom: 14px;
        }

        .small-donation-card {
          background: linear-gradient(180deg, #ffffff, #faf7ff);
        }

        .donation-amount {
          font-family: 'Poppins', sans-serif;
          font-size: 34px;
          color: #6d28d9;
          margin-bottom: 10px;
        }

        .text-link {
          color: #0f4f85;
          font-weight: 800;
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
          color: #0f2742;
          margin-bottom: 12px;
        }

        .section-title p {
          color: #5b7289;
          font-size: 17px;
        }

        .muted-section {
          background:
            radial-gradient(circle at left top, rgba(109, 40, 217, 0.09), transparent 26%),
            radial-gradient(circle at right bottom, rgba(249, 115, 22, 0.08), transparent 28%),
            linear-gradient(180deg, #eef4fa, #f7fbff);
          border-top: 1px solid #dde7f0;
          border-bottom: 1px solid #dde7f0;
        }

        .sponsor-section-wrap {
          background:
            radial-gradient(circle at top left, rgba(109, 40, 217, 0.13), transparent 24%),
            radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.13), transparent 24%),
            linear-gradient(180deg, #ffffff, #f5f7fc);
        }

        .slider-section {
          padding-top: 40px;
        }

        .parent-guide-section {
          background:
            radial-gradient(circle at top left, rgba(15, 118, 110, 0.12), transparent 24%),
            radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.12), transparent 28%),
            linear-gradient(180deg, #fffefb 0%, #f6fbff 100%);
        }

        .parent-guide-shell {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(280px, 0.7fr);
          gap: 26px;
          align-items: stretch;
        }

        .parent-guide-main,
        .parent-guide-aside {
          background: rgba(255,255,255,0.92);
          border: 1px solid #d7e4ee;
          border-radius: 30px;
          box-shadow: 0 24px 56px rgba(15, 39, 66, 0.08);
        }

        .parent-guide-main {
          padding: 26px;
        }

        .parent-guide-tabs {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .guide-tab {
          border: 1px solid #d4e0ea;
          background: #f8fbff;
          color: #34506c;
          padding: 11px 16px;
          border-radius: 999px;
          font: inherit;
          font-weight: 700;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .guide-tab.active,
        .guide-tab:hover {
          background: linear-gradient(135deg, #0f766e, #0f4f85);
          color: white;
          border-color: transparent;
          transform: translateY(-1px);
        }

        .parent-guide-panel {
          position: relative;
          overflow: hidden;
          border-radius: 26px;
          background:
            radial-gradient(circle at top right, rgba(249, 115, 22, 0.16), transparent 30%),
            radial-gradient(circle at left bottom, rgba(15, 118, 110, 0.14), transparent 26%),
            linear-gradient(135deg, #0f2742, #153d63);
          color: white;
          padding: 34px;
          min-height: 430px;
        }

        .parent-guide-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.12);
          color: #f6fbff;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.02em;
          margin-bottom: 18px;
        }

        .parent-guide-panel h3 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          line-height: 1.15;
          margin-bottom: 12px;
          max-width: 640px;
        }

        .parent-guide-accent {
          color: rgba(255,255,255,0.78);
          font-size: 17px;
          margin-bottom: 24px;
          max-width: 620px;
        }

        .parent-guide-points {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 26px;
        }

        .parent-guide-point {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 16px 18px;
          border-radius: 20px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
        }

        .parent-guide-point-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.16);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .parent-guide-point span {
          font-size: 15px;
          line-height: 1.5;
          color: rgba(255,255,255,0.94);
        }

        .parent-guide-note {
          padding: 16px 18px;
          border-radius: 20px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.14);
          color: #fef3c7;
          font-weight: 700;
          max-width: 660px;
        }

        .parent-guide-aside {
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 22px;
        }

        .parent-guide-aside-card {
          padding: 22px;
          border-radius: 24px;
          background: linear-gradient(180deg, #f7fbff, #eef5fb);
          border: 1px solid #d7e3ef;
        }

        .parent-guide-aside-card h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          color: #0f2742;
          margin-bottom: 10px;
        }

        .parent-guide-aside-card p {
          color: #51697f;
          line-height: 1.7;
        }

        .parent-guide-mini-list {
          display: grid;
          gap: 12px;
        }

        .parent-guide-mini-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          color: #294763;
          font-weight: 700;
        }

        .parent-guide-mini-item svg {
          color: #0f766e;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .parent-guide-affirmation {
          background: linear-gradient(135deg, #fff0d8, #fffaf1);
          border: 1px solid #f4d5a6;
          border-radius: 24px;
          padding: 22px;
        }

        .parent-guide-affirmation strong {
          display: block;
          color: #9a3412;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 10px;
        }

        .parent-guide-affirmation p {
          color: #7c2d12;
          font-size: 17px;
          line-height: 1.7;
          font-weight: 700;
        }

        .slider-shell {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          min-height: 520px;
          background: #0f2742;
          box-shadow: 0 20px 60px rgba(15, 39, 66, 0.14);
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
          background: linear-gradient(90deg, rgba(15,39,66,0.8), rgba(15,39,66,0.3));
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
          background: #0f4f85;
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
          border: 1px solid #d9e4ef;
          box-shadow: 0 12px 35px rgba(15, 39, 66, 0.06);
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
          background: linear-gradient(90deg, #0f4f85, #d85b2b);
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
          color: #0f2742;
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
          background: linear-gradient(135deg, #ede9fe, #ffe6d5);
          color: #6d28d9;
          font-size: 26px;
          margin-bottom: 18px;
        }

        .event-section-wrap {
          background:
            radial-gradient(circle at top right, rgba(249, 115, 22, 0.1), transparent 24%),
            radial-gradient(circle at bottom left, rgba(109, 40, 217, 0.1), transparent 26%),
            linear-gradient(180deg, #fff7ed, #f5f3ff);
          padding-top: 70px;
        }

        .event-grid {
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
        }

        .event-tag {
          display: inline-block;
          background: #0f4f85;
          color: #fff;
          padding: 10px 16px;
          border-radius: 999px;
          font-weight: 700;
          margin-bottom: 18px;
          font-size: 14px;
        }

        .event-theme {
          background: #f7fbff;
          border-left: 5px solid #d85b2b;
          padding: 18px;
          border-radius: 16px;
          margin: 20px 0 24px;
          color: #0f2742;
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
          background: #f7fbff;
          padding: 16px;
          border-radius: 16px;
        }

        .event-meta-icon,
        .payment-item-icon {
          min-width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #dcecf9;
          color: #0f4f85;
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
          background: linear-gradient(135deg, #0f4f85, #0f766e);
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
          color: #0f2742;
          margin-bottom: 14px;
        }

        .package-list {
          display: grid;
          gap: 10px;
          margin: 18px 0 22px;
        }

        .package-card.selected-package {
          border-color: #6d28d9;
          box-shadow: 0 22px 42px rgba(109, 40, 217, 0.18);
          background: linear-gradient(180deg, #faf5ff, #fff7ed);
        }

        .package-card.selected-package::after {
          width: 100%;
        }

        .package-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          padding: 8px 12px;
          background: #e7f4ef;
          color: #0f766e;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 800;
        }

        .package-card.package-gold,
        .package-card.package-platinum {
          background: linear-gradient(180deg, #ffffff, #faf7ff);
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
          background: linear-gradient(135deg, #ffffff, #f8f4ff);
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
          background: linear-gradient(135deg, #0f2742, #0f4f85);
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

        .form-helper {
          color: #5b7289;
          font-size: 14px;
          margin-top: -4px;
        }

        .form-actions-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .form-error {
          background: #fff1f2;
          border: 1px solid #fecdd3;
          color: #be123c;
          border-radius: 14px;
          padding: 12px 14px;
          font-size: 14px;
          font-weight: 700;
        }

        .selected-package-banner,
        .sponsor-success-card,
        .sponsor-process {
          border: 1px solid #d9e4ef;
          border-radius: 18px;
          padding: 18px;
          background: #f7fbff;
        }

        .selected-package-banner {
          margin-top: 18px;
          background: linear-gradient(135deg, #faf5ff, #fff1e8);
          border-color: #e9d5ff;
        }

        .selected-package-banner strong,
        .sponsor-success-card strong {
          color: #0f2742;
        }

        .sponsor-success-card {
          margin-top: 18px;
          background: linear-gradient(135deg, #faf5ff, #fef3c7);
          border-color: #e9d5ff;
        }

        .sponsor-success-card h4,
        .sponsor-process h4 {
          font-family: 'Poppins', sans-serif;
          color: #0f2742;
          margin-bottom: 10px;
          font-size: 18px;
        }

        .sponsor-success-meta {
          display: grid;
          gap: 10px;
          margin: 14px 0 0;
        }

        .sponsor-success-meta div {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #dfeae4;
        }

        .sponsor-success-meta div:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .sponsor-process {
          margin-top: 18px;
          display: grid;
          gap: 12px;
          background: linear-gradient(180deg, #f8f4ff, #fff7ed);
        }

        .sponsor-process-step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .sponsor-process-step span {
          width: 28px;
          height: 28px;
          min-width: 28px;
          border-radius: 50%;
          background: #dcecf9;
          color: #0f4f85;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
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
          border: 1px solid #cfdbe8;
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
          background: #f7fbff;
          padding: 16px;
          border-radius: 16px;
        }

        .enquiry-info-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #dcecf9;
          color: #0f4f85;
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
          color: #0f2742;
          margin-bottom: 14px;
        }

        .cta p {
          max-width: 720px;
          margin: 0 auto 24px;
          color: #475569;
          font-size: 17px;
        }

        .footer {
          background: #0d2137;
          color: #cbd5e1;
          padding: 70px 0 30px;
          margin-top: 80px;
        }

        .updates-community-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.65fr);
          gap: 24px;
          align-items: start;
        }

        .updates-list {
          display: grid;
          gap: 18px;
        }

        .update-date {
          color: #0f766e;
          font-weight: 800;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 10px;
        }

        .community-card {
          background: linear-gradient(180deg, #0f2742, #12395f);
          color: white;
        }

        .community-card h3,
        .community-card p {
          color: white;
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
          .enquiry-grid,
          .updates-community-grid,
          .parent-guide-shell {
            grid-template-columns: 1fr;
          }

          .hero-quick-grid,
          .support-grid,
          .updates-grid,
          .small-donation-grid,
          .definition-grid,
          .parent-guide-points {
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

          .topbar-content,
          .topbar-links {
            justify-content: center;
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

          .parent-guide-main,
          .parent-guide-aside {
            padding: 20px;
          }

          .parent-guide-panel {
            padding: 24px;
            min-height: auto;
          }
        }
      `}</style>

      <div className="app">
        <div className="topbar">
          <div className="container topbar-content">
            <div className="topbar-links">
              <a href="#contact">Contact us</a>
              <a href="#programs">What we do</a>
              <a href="#sponsors">Partner with us</a>
            </div>
            <div className="topbar-links">
              <a href="mailto:info@mrandmissautism.org">info@mrandmissautism.org</a>
              <a href="#sponsorship-packages" className="btn btn-primary">
                <FaHeart /> Donate
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
              <a href="#help">How You Can Help</a>
              <a href="#gallery-highlights">Gallery</a>
              <a href="#upcoming-event">Featured Event</a>
              <a href="#parents-guide">Parents</a>
              <a href="#sponsors">Sponsors</a>
              <a href="#about">About</a>
              <a href="#programs">Services</a>
              <a href="#updates">Updates</a>
              <a href="#contact">Contact</a>
              <a href="#sponsorship-packages" className="btn btn-secondary">
                <FaHandshake /> Sponsor
              </a>
            </div>
          </div>
        </nav>

        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <div className="hero-badge">Autism acceptance, visibility, and family support</div>
              <h1>Creating a society where autistic children are seen, celebrated, and supported</h1>
              <p>
                Mr & Miss Autism brings together awareness, celebration, and practical support through events, storytelling, sponsorship, and community action. This homepage now follows a clearer, information-first structure inspired by leading autism charity websites.
              </p>

              <div className="hero-actions">
                <a href="#about" className="btn btn-primary">
                  <FaHandsHelping /> Learn about our work
                </a>

                <a href="#help" className="btn btn-dark">
                  <FaHeart /> How you can help
                </a>
              </div>
              <div className="hero-meta">
                <span>Featured event on 18 April 2026</span>
                <span>Community-led in Zambia</span>
                <span>Support for children and families</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-label">Featured campaign</div>
              <img
                src={eventPoster}
                alt="Mr and Miss Autism 2026 poster"
                loading="eager"
                decoding="async"
              />
              <h3>Mr & Miss Autism 2026</h3>
              <p>
                A focused campaign around inclusion, confidence, and awareness, with a clear route for families, supporters, and sponsors to get involved.
              </p>

              <a href="#upcoming-event" className="btn btn-primary">
                <FaCalendarAlt /> View event details
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="container hero-quick-grid">
            {quickLinks.map((item) => (
              <div key={item.title} className="quick-card">
                <div className="quick-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.href} className="text-link">
                  Find out more
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="help" className="muted-section">
          <div className="container">
            <div className="section-title">
              <h2>How You Can Help</h2>
              <p>
                Support the movement in the way that suits you best, whether that means donating, sponsoring, or staying connected to future activities.
              </p>
            </div>

            <div className="support-grid">
              {supportWays.map((item) => (
                <div key={item.title} className="support-card">
                  <div className="support-card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="text-link"
                  >
                    {item.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-title">
              <h2>Small Donations Make a Difference</h2>
              <p>
                Not everyone can sponsor a full package, but small contributions still help us support children, families, and autism awareness activities.
              </p>
            </div>

            <div className="small-donation-grid">
              {smallDonationOptions.map((item) => (
                <div key={item.amount} className="small-donation-card">
                  <div className="donation-amount">{item.amount}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a
                    href={`https://wa.me/260979235167?text=${encodeURIComponent(
                      `Hello, I would like to make a ${item.amount} donation to support Mr & Miss Autism.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    <FaHeart /> Give {item.amount}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="slider-section" id="gallery-highlights">
          <div className="container">
            <div className="section-title">
              <h2>Gallery Highlights</h2>
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

<div style={{ textAlign: "center", marginTop: "28px" }}>
  <Link to="/gallery" className="btn btn-primary">
    View More
  </Link>
</div>
          </div>
        </section>

        <section id="upcoming-event" className="event-section-wrap">
          <div className="container">
            <div className="section-title">
              <h2>Featured Event</h2>
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

        <LazySection fallback={<SectionLoader minHeight="760px" />} minHeight="760px">
          <section id="parents-guide" className="parent-guide-section">
            <div className="container">
              <div className="section-title">
                <h2>Parent & Caregiver Guide</h2>
                <p>
                  A simple explanation of how children are celebrated, observed, and recognized so the process stays transparent, respectful, and safe.
                </p>
              </div>

              <div className="parent-guide-shell">
                <div className="parent-guide-main">
                  <div className="parent-guide-tabs" role="tablist" aria-label="Parent guide topics">
                    {parentGuideSlides.map((slide, index) => (
                      <button
                        key={slide.id}
                        type="button"
                        role="tab"
                        aria-selected={activeParentGuideSlide === index}
                        className={`guide-tab ${activeParentGuideSlide === index ? "active" : ""}`}
                        onClick={() => setActiveParentGuideSlide(index)}
                      >
                        {slide.kicker}
                      </button>
                    ))}
                  </div>

                  <div className="parent-guide-panel">
                    <div className="parent-guide-kicker">
                      <FaHeart /> {parentGuideSlides[activeParentGuideSlide].kicker}
                    </div>
                    <h3>{parentGuideSlides[activeParentGuideSlide].title}</h3>
                    <p className="parent-guide-accent">
                      {parentGuideSlides[activeParentGuideSlide].accent}
                    </p>

                    <div className="parent-guide-points">
                      {parentGuideSlides[activeParentGuideSlide].points.map((point) => (
                        <div key={point} className="parent-guide-point">
                          <div className="parent-guide-point-icon">
                            <FaCheckCircle />
                          </div>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="parent-guide-note">
                      {parentGuideSlides[activeParentGuideSlide].note}
                    </div>
                  </div>
                </div>

                <div className="parent-guide-aside">
                  <div className="parent-guide-aside-card">
                    <h4>What this event means</h4>
                    <p>
                      Mr & Miss Autism Zambia is not a competition. It is a celebration of your child&apos;s presence, effort, and individuality.
                    </p>
                  </div>

                  <div className="parent-guide-aside-card">
                    <h4>What families can expect</h4>
                    <div className="parent-guide-mini-list">
                      <div className="parent-guide-mini-item">
                        <FaCheckCircle />
                        <span>Every child receives recognition.</span>
                      </div>
                      <div className="parent-guide-mini-item">
                        <FaCheckCircle />
                        <span>Support from a parent, caregiver, or aide is welcome.</span>
                      </div>
                      <div className="parent-guide-mini-item">
                        <FaCheckCircle />
                        <span>Children can participate in their own way and at their own pace.</span>
                      </div>
                    </div>
                  </div>

                  <div className="parent-guide-affirmation">
                    <strong>Family reassurance</strong>
                    <p>
                      If your child feels overwhelmed, they may pause or leave the stage. This does not reduce their recognition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

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

              <div id="sponsorship-packages" className="section-title" style={{ marginTop: "56px", scrollMarginTop: "120px" }}>
                <h2>Sponsorship Packages</h2>
                <p>
                  Choose a package that fits your brand goals, then proceed to the sponsorship payment details below.
                </p>
              </div>

              <div className="package-grid">
                {sponsorPackages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`package-card ${pkg.className} ${selectedSponsorPackage === pkg.name ? "selected-package" : ""}`}
                  >
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

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleSponsorPackageSelect(pkg)}
                    >
                      <FaHandshake /> Select package
                    </button>

                    {selectedSponsorPackage === pkg.name && (
                      <div className="package-status">
                        <FaCheckCircle /> Selected for enquiry
                      </div>
                    )}
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
                <a
                  href="https://multisensoryschool.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="logo-card sponsor-logo-link"
                >
                  <img src={sponsor6} alt="Multisensory School" className="sponsor-logo-img" loading="lazy" decoding="async" />
                </a>
                <a
                  href="https://multisensoryschool.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="logo-card sponsor-logo-link"
                >
                  <img src={sponsor7} alt="Multisensory School" className="sponsor-logo-img" loading="lazy" decoding="async" />
                </a>
                <a
                  href="http://www.circuszambia.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="logo-card sponsor-logo-link"
                >
                  <img src={sponsor8} alt="Multisensory School" className="sponsor-logo-img" loading="lazy" decoding="async" />
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

              <div id="sponsor-enquiry" className="section-title" style={{ marginTop: "56px", scrollMarginTop: "120px" }}>
                <h2>Sponsor Enquiry</h2>
                <p>
                  Fill in your details below to register your sponsorship interest and receive the next payment and branding steps.
                </p>
              </div>

              <div className="enquiry-grid">
                <div className="enquiry-card">
                  <h3>Start your sponsorship application</h3>
                  <p>
                    Share your details and package interest. We prepare a structured enquiry and open WhatsApp with the information already filled in.
                  </p>

                  <div className="selected-package-banner">
                    <strong>Selected package:</strong> {sponsorForm.package}
                  </div>

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
                        required
                      />
                    </div>

                    <div className="form-row">
                      <input
                        className="form-input"
                        name="phone"
                        placeholder="Phone Number"
                        value={sponsorForm.phone}
                        onChange={handleSponsorChange}
                        required
                      />
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={sponsorForm.email}
                        onChange={handleSponsorChange}
                        required
                      />
                    </div>

                    {sponsorFormError && <div className="form-error">{sponsorFormError}</div>}

                    <div className="form-helper">
                      Use a direct company contact so we can follow up quickly on confirmation and branding materials.
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
                      placeholder="Tell us about your sponsorship goals, preferred visibility, or questions"
                      value={sponsorForm.message}
                      onChange={handleSponsorChange}
                    />

                    <div className="form-actions-row">
                      <button type="submit" className="btn btn-whatsapp">
                        <FaWhatsapp /> Submit on WhatsApp
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => resetSponsorForm(selectedSponsorPackage)}
                      >
                        Clear form
                      </button>
                    </div>
                  </form>

                  {sponsorSubmission && (
                    <div className="sponsor-success-card">
                      <h4>Enquiry prepared successfully</h4>
                      <p>
                        Your sponsor enquiry has been prepared with a reference number. Use the WhatsApp button below to send it, then continue to the payment details section if you are ready to proceed.
                      </p>
                      <div className="sponsor-success-meta">
                        <div>
                          <strong>Reference</strong>
                          <span>{sponsorSubmission.reference}</span>
                        </div>
                        <div>
                          <strong>Package</strong>
                          <span>{sponsorSubmission.package}</span>
                        </div>
                        <div>
                          <strong>Submitted</strong>
                          <span>{sponsorSubmission.submittedAt}</span>
                        </div>
                      </div>
                      <div className="donation-buttons">
                        <a
                          href={sponsorWhatsAppLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-whatsapp"
                        >
                          <FaWhatsapp /> Send enquiry on WhatsApp
                        </a>
                        <a href="#sponsorship-payment" className="btn btn-primary">
                          <FaUniversity /> View payment details
                        </a>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={handleChooseAnotherPackage}
                        >
                          Choose another package
                        </button>
                      </div>
                    </div>
                  )}
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

                  <div className="sponsor-process">
                    <h4>Sponsorship process</h4>
                    <div className="sponsor-process-step">
                      <span>1</span>
                      <div>Select a package and submit your enquiry.</div>
                    </div>
                    <div className="sponsor-process-step">
                      <span>2</span>
                      <div>Receive payment guidance and share your company logo for campaign materials.</div>
                    </div>
                    <div className="sponsor-process-step">
                      <span>3</span>
                      <div>Once payment is confirmed, your organization is added to the sponsor rollout and recognition plan.</div>
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

        <LazySection fallback={<SectionLoader minHeight="420px" />} minHeight="420px">
          <section id="what-is-autism" className="muted-section">
            <div className="container">
              <div className="section-title">
                <h2>What Is Autism?</h2>
                <p>
                  A clear introduction for visitors, families, partners, and supporters who may be learning about autism for the first time.
                </p>
              </div>

              <div className="definition-grid">
                <div className="definition-card featured-definition">
                  <div className="definition-highlight">Simple definition</div>
                  <h3>Autism is a developmental difference, not an illness</h3>
                  <p>
                    Autism, or autism spectrum disorder, affects how a person experiences communication, social interaction, sensory input, and the world around them. Every autistic person is different, which is why it is called a spectrum.
                  </p>
                  <p>
                    Some autistic children may need a lot of daily support, while others may need less. Many also have unique strengths, interests, and ways of expressing themselves.
                  </p>
                </div>

                <div className="definition-card">
                  <h3>Why awareness matters</h3>
                  <p>
                    When families, schools, employers, and communities understand autism better, it becomes easier to create safe, respectful, and inclusive spaces.
                  </p>
                  <p>
                    Awareness helps reduce stigma and makes room for acceptance, dignity, and opportunity.
                  </p>
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
                <h2>Services and Support We Offer</h2>
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

        <LazySection fallback={<SectionLoader minHeight="520px" />} minHeight="520px">
          <section id="updates" className="muted-section">
            <div className="container">
              <div className="section-title">
                <h2>Latest Updates and Community</h2>
                <p>
                  Keep up with what is happening across the campaign, our event planning, and ways to stay connected.
                </p>
              </div>

              <div className="updates-community-grid">
                <div className="updates-list">
                  {updates.map((item) => (
                    <div key={item.title} className="update-card">
                      <div className="update-date">{item.date}</div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <a href={item.href} className="text-link">
                        Read more
                      </a>
                    </div>
                  ))}
                </div>

                <div className="community-card">
                  <h3>Stay close to the movement</h3>
                  <p>
                    Follow our upcoming event, reach out on WhatsApp, and help us build a stronger support network for autistic children and their families.
                  </p>
                  <div className="donation-buttons">
                    <a
                      href="https://wa.me/260979235167?text=Hello%20I%20would%20like%20to%20find%20out%20more%20about%20Mr%20and%20Miss%20Autism"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-whatsapp"
                    >
                      <FaWhatsapp /> Chat on WhatsApp
                    </a>
                    <a href="#gallery-highlights" className="btn btn-secondary">
                      <FaRegSmileBeam /> See gallery
                    </a>
                  </div>
                </div>
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

                <a href="#sponsorship-packages" className="btn btn-dark">
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

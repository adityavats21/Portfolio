import React, { useState, useEffect } from 'react';
import { Brain, FolderGit2, GraduationCap, Mail, ExternalLink, Send, Briefcase, Award, Home, Trophy, BookOpen, ShieldCheck, Download } from 'lucide-react';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsSandbox from './components/ProjectsSandbox';
import EducationTimeline from './components/EducationTimeline';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import heroImage from './assets/hero.jpg';

const Github = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LeetCodeIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const HackerRankIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  
  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState(null); // 'sending' | 'success' | 'error'

  // Intersection Observer for subtle scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // ScrollSpy for highlighting nav links
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'certifications', 'achievements', 'contact'];
      let currentSection = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.35) {
            currentSection = id;
          }
        }
      }

      const idToNameMap = {
        home: 'Home',
        about: 'About Me',
        experience: 'Experience',
        education: 'Education',
        projects: 'Projects',
        skills: 'Skills',
        certifications: 'Certifications',
        achievements: 'Achievements',
        contact: 'Contact'
      };

      setActiveTab(idToNameMap[currentSection]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Real Formspree Submit Handler
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // Configurable Formspree form ID (vatsaditya21@gmail.com endpoint target)
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvgopkzw';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(contactForm)
      });

      if (response.ok) {
        setFormStatus('success');
        setContactForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus(null), 4000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(null), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  const smoothScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="app-wrapper">
      {/* Sticky Navigation Bar */}
      <header className="header-navbar">
        <div className="nav-brand">
          <h1 className="nav-logo-text">
            ADITYA<span>VATS</span>
          </h1>
        </div>

        <nav className="nav-menu">
          {navItems.map((item) => (
            <span
              key={item.id}
              onClick={() => smoothScrollTo(item.id)}
              className={`nav-link ${activeTab === item.label ? 'active' : ''}`}
            >
              {item.label}
            </span>
          ))}
        </nav>

        <div className="nav-right">
          <a
            href="https://github.com/adityavats21"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
          >
            <Github size={20} />
          </a>
        </div>
      </header>

      {/* Mobile Sticky Menu */}
      <div className="mobile-navbar">
        {[
          { id: 'home', name: 'Home', icon: <Home size={18} /> },
          { id: 'about', name: 'About', icon: <BookOpen size={18} /> },
          { id: 'experience', name: 'Work', icon: <Briefcase size={18} /> },
          { id: 'projects', name: 'Projects', icon: <FolderGit2 size={18} /> },
          { id: 'skills', name: 'Skills', icon: <Brain size={18} /> },
          { id: 'certifications', name: 'Certs', icon: <Award size={18} /> },
          { id: 'contact', name: 'Contact', icon: <Mail size={18} /> }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => smoothScrollTo(item.id)}
            className={`mobile-nav-btn ${activeTab.toLowerCase().includes(item.id) ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      {/* Main Container */}
      <main className="main-container" style={{ paddingBottom: '100px' }}>
        
        {/* ==================== SECTION 1: HERO ==================== */}
        <section id="home" className="section animate-section">
          <div className="hero-hud-grid">
            <div className="hero-text">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span className="hero-tagline">
                  Data Scientist & ML Engineer
                </span>
                <h2 className="hero-title">
                  I'm Aditya Vats.
                </h2>
                <p style={{ color: 'var(--accent-blue)', fontSize: '1.25rem', fontWeight: '600', margin: '0' }}>
                  Specializing in Data Science, Machine Learning, and GenAI Pipelines
                </p>
              </div>
              
              <p className="hero-description">
                B.Tech CSE Graduate (Completed June 2026, 8.13 CGPA) with hands-on experience in SQL, Python, Power BI/Tableau dashboarding for data analysis and business intelligence reporting. Skilled in exploratory data analysis, statistical modeling, and Python for translating large datasets into actionable insights.
              </p>
              
              <div className="hero-actions">
                <button 
                  onClick={() => smoothScrollTo('projects')}
                  className="btn-cyber-shimmer"
                >
                  <span>Explore Projects</span>
                  <ExternalLink size={14} />
                </button>
                <a 
                  href="https://drive.google.com/file/d/12WvRTGMWMPG72ZbHVk_E-oHZ2x_IURmc/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-shimmer"
                  style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-primary)' }}
                >
                  <Download size={14} style={{ color: 'var(--text-primary)' }} />
                  <span style={{ color: 'var(--text-primary)' }}>Download Resume</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="social-icon-wrapper" style={{ marginTop: '1.5rem' }}>
                <a href="https://github.com/adityavats21" target="_blank" rel="noopener noreferrer" className="social-icon-btn nav-social-btn"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/aditya-vats-760353247/" target="_blank" rel="noopener noreferrer" className="social-icon-btn nav-social-btn"><LinkedinIcon size={18} /></a>
                <a href="https://leetcode.com/u/adityavats21" target="_blank" rel="noopener noreferrer" className="social-icon-btn nav-social-btn"><LeetCodeIcon size={18} /></a>
                <a href="https://www.hackerrank.com/profile/vatsaditya21" target="_blank" rel="noopener noreferrer" className="social-icon-btn nav-social-btn"><HackerRankIcon size={18} /></a>
                <a href="mailto:vatsaditya21@gmail.com" className="social-icon-btn nav-social-btn"><Mail size={18} /></a>
              </div>
            </div>

            {/* Profile Summary Card */}
            <div>
              <div className="hud-panel glass-panel">
                <h3 className="hud-title">
                  Profile Summary
                </h3>
                <div className="hud-readings">
                  <div className="hud-row">
                    <span className="hud-label">Academic:</span>
                    <span className="hud-val-cyan">B.Tech CSE Graduate</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-label">Cumulative GPA:</span>
                    <span className="hud-val-green">8.13 / 10.0</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-label">Focus Area:</span>
                    <span className="hud-val-magenta">Data Analytics & ML</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-label">Credentials:</span>
                    <span className="hud-val-yellow">AWS Academy Graduate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SECTION 2: ABOUT ME ==================== */}
        <section id="about" className="section animate-section">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-desc">Personal background, core mission statement, and career vision.</p>
          </div>

          <div className="about-grid">
            <div className="about-photo-card">
              <img src={heroImage} alt="Aditya Vats" className="about-photo-element" />
            </div>

            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7', margin: '0' }}>
                I am Aditya Vats, a B.Tech CSE Graduate (Completed June 2026) from VIT-AP University. I build data-driven predictive systems, optimize database queries, and set up machine learning models. I specialize in exploratory data analysis, SQL query optimization, machine learning modeling, and data pipelines. While my work experience includes software development, my technical expertise and deep analytical skills are forged through building end-to-end data and machine learning projects.
              </p>

              <div className="about-3d-cards">
                <div className="flip-card-3d">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="flip-card-title">
                        <Trophy size={16} />
                        <span>Core Mission</span>
                      </div>
                      <p className="flip-card-text">
                        To construct scalable, predictive data systems and models that translate complex database parameters into real business indicators and actionable user assets.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flip-card-3d">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="flip-card-title">
                        <Activity size={16} style={{ color: 'var(--accent-blue)' }} />
                        <span>Core Vision</span>
                      </div>
                      <p className="flip-card-text">
                        To engineer transparent, reproducible data analyses and machine learning pipelines that resolve complex challenges with high performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Links Navigation shortcuts */}
              <div className="about-work-links">
                <button onClick={() => smoothScrollTo('experience')} className="about-nav-btn">
                  <Briefcase size={12} />
                  <span>Experience</span>
                </button>
                <button onClick={() => smoothScrollTo('education')} className="about-nav-btn">
                  <GraduationCap size={12} />
                  <span>Education</span>
                </button>
                <button onClick={() => smoothScrollTo('projects')} className="about-nav-btn">
                  <FolderGit2 size={12} />
                  <span>Projects</span>
                </button>
                <button onClick={() => smoothScrollTo('skills')} className="about-nav-btn">
                  <Brain size={12} />
                  <span>Skills</span>
                </button>
                <button onClick={() => smoothScrollTo('certifications')} className="about-nav-btn">
                  <Award size={12} />
                  <span>Certifications</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SECTION 3: EXPERIENCE ==================== */}
        <section id="experience" className="section animate-section">
          <div className="section-header">
            <h2 className="section-title">Work Experience</h2>
            <p className="section-desc">Summer internships, developer integrations, and schema designs.</p>
          </div>
          <Experience />
        </section>

        {/* ==================== SECTION 4: EDUCATION ==================== */}
        <section id="education" className="section animate-section">
          <div className="section-header">
            <h2 className="section-title">Education</h2>
            <p className="section-desc">Academic path, core timelines, and coursework milestones.</p>
          </div>
          <EducationTimeline />
        </section>

        {/* ==================== SECTION 5: PROJECTS ==================== */}
        <section id="projects" className="section animate-section">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
            <p className="section-desc">Exploratory data analysis, machine learning models, and NLP parsers.</p>
          </div>
          <ProjectsSandbox />
        </section>

        {/* ==================== SECTION 6: SKILLS ==================== */}
        <section id="skills" className="section animate-section">
          <div className="section-header">
            <h2 className="section-title">Skills Matrix</h2>
            <p className="section-desc">Technical catalog of statistics, database systems, and machine learning capabilities.</p>
          </div>
          <SkillsMatrix />
        </section>

        {/* ==================== SECTION 7: CERTIFICATIONS ==================== */}
        <section id="certifications" className="section animate-section">
          <div className="section-header">
            <h2 className="section-title">Verified Credentials</h2>
            <p className="section-desc">Course completions, professional provider licenses, and academic credits.</p>
          </div>
          <Certificates />
        </section>

        {/* ==================== SECTION 8: ACHIEVEMENTS ==================== */}
        <section id="achievements" className="section animate-section">
          <div className="section-header">
            <h2 className="section-title">Achievements</h2>
            <p className="section-desc">Academic honors, certificates earned, and core program indicators.</p>
          </div>

          {/* 4 Stat Counters */}
          <div className="achievements-stats-grid">
            <div className="stat-counter-box glass-panel" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent-blue)' }}>0.5+</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Years Experience</span>
            </div>
            <div className="stat-counter-box glass-panel" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent-blue)' }}>7</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Certifications</span>
            </div>
            <div className="stat-counter-box glass-panel" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent-blue)' }}>5</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Core Projects</span>
            </div>
            <div className="stat-counter-box glass-panel" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent-blue)' }}>2</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>System Awards</span>
            </div>
          </div>

          {/* Achievement cards list */}
          <div className="achievement-cards-grid">
            <div className="achievement-card-wrapper glass-panel" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: '10px', display: 'flex', color: 'var(--accent-blue)', flexShrink: 0 }}>
                <Trophy size={22} />
              </div>
              <div>
                <span className="skill-badge badge-gate" style={{ fontSize: '0.55rem', fontWeight: '700', textTransform: 'uppercase' }}>Academic Excellence</span>
                <span style={{ float: 'right', fontSize: '0.7rem', color: 'var(--text-dark)', fontFamily: 'var(--font-mono)' }}>2024</span>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '700', margin: '0.5rem 0 0.25rem 0' }}>B.Tech CSE Merit List</h4>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-dark)' }}>VIT-AP University</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginTop: '0.5rem' }}>
                  Recognized in the top academic tier of the Computer Science and Engineering department batch at VIT-AP for maintaining consistent technical standards and a GPA of 8.13/10.
                </p>
              </div>
            </div>

            <div className="achievement-card-wrapper glass-panel" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: '10px', display: 'flex', color: 'var(--accent-blue)', flexShrink: 0 }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <span className="skill-badge badge-aws" style={{ fontSize: '0.55rem', fontWeight: '700', textTransform: 'uppercase' }}>Cloud Authority</span>
                <span style={{ float: 'right', fontSize: '0.7rem', color: 'var(--text-dark)', fontFamily: 'var(--font-mono)' }}>2024</span>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '700', margin: '0.5rem 0 0.25rem 0' }}>AWS Cloud Architecting Graduate</h4>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-dark)' }}>AWS Academy Portal</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginTop: '0.5rem' }}>
                  Successfully scored 90%+ in cloud architecting core assessments, verifying capability in VPC design, IAM identity mapping, scaling computations, and storage protocols.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SECTION 9: CONTACT ==================== */}
        <section id="contact" className="section animate-section">
          <div className="contact-grid">
            
            {/* Left Column: Form with Floating Labels */}
            <div className="contact-left-form-wrap contact-form-panel glass-panel">
              <h3 className="hud-title" style={{ margin: '0 0 1.5rem 0' }}>
                Send a Message
              </h3>

              <form onSubmit={handleContactSubmit} className="contact-form-wrapper">
                <div className="contact-form-group-floating">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="contact-form-input-floating"
                  />
                  <label className="contact-form-label-floating">Full Name</label>
                </div>

                <div className="contact-form-group-floating">
                  <input
                    type="email"
                    required
                    placeholder=" "
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="contact-form-input-floating"
                  />
                  <label className="contact-form-label-floating">Email Address</label>
                </div>

                <div className="contact-form-group-floating">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="contact-form-input-floating"
                  />
                  <label className="contact-form-label-floating">Subject</label>
                </div>

                <div className="contact-form-group-floating">
                  <textarea
                    required
                    rows={3}
                    placeholder=" "
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="contact-form-input-floating"
                    style={{ resize: 'vertical' }}
                  ></textarea>
                  <label className="contact-form-label-floating">Message Text</label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="btn-cyber-shimmer"
                  style={{ width: '100%', outline: 'none' }}
                >
                  {formStatus === 'sending' ? (
                    <span>Sending Message...</span>
                  ) : formStatus === 'success' ? (
                    <span style={{ color: '#86efac' }}>Message Dispatched</span>
                  ) : formStatus === 'error' ? (
                    <span style={{ color: '#fca5a5' }}>Error Dispatching Message</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={12} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Connection Links */}
            <div className="contact-right-info-wrap contact-info-col">
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Get in Touch</h2>
                <p className="section-desc" style={{ margin: '0', fontSize: '0.85rem' }}>
                  Always looking for professional opportunities in data science, analytics, and machine learning pipeline development.
                </p>
              </div>

              <div className="contact-info-cards">
                <div className="contact-info-card glass-panel">
                  <div className="contact-card-icon-box">
                    <GraduationCap size={20} />
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">Primary Institution</span>
                    <span className="contact-card-val">VIT-AP University, India</span>
                  </div>
                </div>

                <div className="contact-info-card glass-panel">
                  <div className="contact-card-icon-box">
                    <Github size={20} />
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">Git Repositories</span>
                    <a 
                      href="https://github.com/adityavats21" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-card-val link"
                      style={{ color: 'var(--accent-blue)' }}
                    >
                      github.com/adityavats21
                    </a>
                  </div>
                </div>

                <div className="contact-info-card glass-panel">
                  <div className="contact-card-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">Email Endpoint</span>
                    <a 
                      href="mailto:vatsaditya21@gmail.com"
                      className="contact-card-val link"
                      style={{ color: 'var(--accent-blue)' }}
                    >
                      vatsaditya21@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-card glass-panel">
                  <div className="contact-card-icon-box">
                    <Download size={20} />
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">Downloadable CV</span>
                    <a 
                      href="https://drive.google.com/file/d/12WvRTGMWMPG72ZbHVk_E-oHZ2x_IURmc/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-card-val link"
                      style={{ color: 'var(--accent-blue)' }}
                    >
                      Download Resume (Google Drive)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', padding: '2rem 1rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
        <p style={{ margin: '0 0 0.5rem 0' }}>Designed & Engineered by <strong>Aditya Vats</strong></p>
        <p style={{ margin: '0', opacity: 0.6, fontSize: '0.65rem' }}>B.Tech CSE Graduate, Class of 2026 // VIT-AP University</p>
      </footer>
    </div>
  );
}

export default App;

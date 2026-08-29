import React, { useState, useEffect, useRef } from 'react';
import { Brain, FolderGit2, GraduationCap, Mail, ExternalLink, Activity, Send, Briefcase, Award, Home, Trophy, BookOpen, ShieldCheck, HelpCircle, Download } from 'lucide-react';
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
  const [typedTitle, setTypedTitle] = useState('');
  const canvasRef = useRef(null);
  
  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState(null); // 'sending' | 'success'

  const titles = ['Data Analyst', 'Machine Learning Engineer', 'Deep Learning Specialist'];
  
  // Typewriter effect
  useEffect(() => {
    let titleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const handleType = () => {
      const currentTitle = titles[titleIdx];
      if (isDeleting) {
        setTypedTitle(currentTitle.substring(0, charIdx - 1));
        charIdx--;
        typingSpeed = 50;
      } else {
        setTypedTitle(currentTitle.substring(0, charIdx + 1));
        charIdx++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIdx === currentTitle.length) {
        isDeleting = true;
        typingSpeed = 2000;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        titleIdx = (titleIdx + 1) % titles.length;
        typingSpeed = 500;
      }

      setTimeout(handleType, typingSpeed);
    };

    const typeTimeout = setTimeout(handleType, 1000);
    return () => clearTimeout(typeTimeout);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
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
          // Highlight when section occupies the major part of viewport
          if (rect.top <= window.innerHeight * 0.35) {
            currentSection = id;
          }
        }
      }

      // Map id back to display name
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

  // Canvas floating bubbles background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const maxParticles = 30;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.12;
        this.vy = (Math.random() - 0.5) * 0.12;
        this.radius = Math.random() * 6 + 3;
        this.alpha = Math.random() * 0.1 + 0.03;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${this.alpha})`; // Champagne Gold tint
        ctx.fill();
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
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
      {/* Background canvas and visual grids */}
      <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -3, pointerEvents: 'none' }} />
      <div className="bg-grid" />
      <div className="bg-radial" />

      {/* Sticky Navigation Bar */}
      <header className="header-navbar">
        <div className="nav-brand">
          <span className="nav-dot" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
          <h1 className="nav-logo-text">
            ADITYA<span>.VATS</span>
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
            style={{ color: 'var(--accent-gold)' }}
          >
            <Github size={18} />
          </a>
          <div className="nav-system-status">
            <Activity size={12} className="status-indicator-green" style={{ color: 'var(--accent-gold)' }} />
            <span>Telemetry Active</span>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Footer Menu */}
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

      {/* Main Single-Page Content */}
      <main className="main-container" style={{ paddingBottom: '100px' }}>
        
        {/* ==================== SECTION 1: LANDING ==================== */}
        <section id="home" className="section animate-section">
          <div className="hero-hud-grid">
            <div className="hero-text">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <span className="hero-tagline" style={{ color: 'var(--accent-gold)' }}>
                  VIT-AP UNIVERSITY // COMPUTER SCIENCE DEPT
                </span>
                <h2 className="hero-title" style={{ fontFamily: 'var(--font-display)', fontWeight: '900', letterSpacing: '-1px' }}>
                  Aditya Vats
                </h2>
                <div className="typewriter-container" style={{ height: '35px' }}>
                  <span className="hero-typed" style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>
                    {typedTitle}
                    <span className="typewriter" style={{ background: 'var(--accent-gold)' }}></span>
                  </span>
                </div>
              </div>
              
              <p className="hero-description" style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.9rem', marginTop: '1rem' }}>
                B.Tech CSE Graduate (Completed June 2026, 8.13 CGPA) with hands-on experience in SQL, Excel, and Power BI/Tableau dashboarding for data analysis and business intelligence reporting. Skilled in exploratory data analysis, statistical modeling, and Python for translating large datasets into actionable insights.
              </p>
              
              <div className="hero-actions social-icon-wrapper" style={{ marginTop: '2rem' }}>
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
                  style={{ textDecoration: 'none', background: 'transparent', borderColor: 'var(--glass-border)' }}
                >
                  <Download size={14} />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Bounce-in Social Buttons */}
              <div className="social-icon-wrapper" style={{ marginTop: '2.5rem' }}>
                <a href="https://github.com/adityavats21" target="_blank" rel="noopener noreferrer" className="social-icon-btn nav-social-btn" style={{ color: 'var(--accent-gold)' }}><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/aditya-vats-760353247/" target="_blank" rel="noopener noreferrer" className="social-icon-btn nav-social-btn" style={{ color: 'var(--accent-gold)' }}><Briefcase size={18} /></a>
                <a href="https://leetcode.com/u/adityavats21" target="_blank" rel="noopener noreferrer" className="social-icon-btn nav-social-btn" style={{ color: 'var(--accent-gold)' }}><LeetCodeIcon size={18} /></a>
                <a href="https://www.hackerrank.com/profile/vatsaditya21" target="_blank" rel="noopener noreferrer" className="social-icon-btn nav-social-btn" style={{ color: 'var(--accent-gold)' }}><HackerRankIcon size={18} /></a>
                <a href="mailto:vatsaditya21@gmail.com" className="social-icon-btn nav-social-btn" style={{ color: 'var(--accent-gold)' }}><Mail size={18} /></a>
              </div>
            </div>

            {/* Diagnostic readout block */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <div className="hud-panel glass-panel pulse-glow" style={{ width: '100%' }}>
                <h3 className="hud-title" style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-gold)', fontSize: '0.8rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                  Executive Profile Diagnostic
                </h3>
                <div className="hud-readings" style={{ marginTop: '1rem' }}>
                  <div className="hud-row">
                    <span className="hud-label">Academic Tier:</span>
                    <span className="hud-val-cyan" style={{ color: 'var(--accent-gold)' }}>B.Tech CSE Graduate</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-label">Cumulative GPA:</span>
                    <span className="hud-val-green" style={{ color: '#86efac', fontWeight: '700' }}>8.13 / 10.0</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-label">Focus Scope:</span>
                    <span className="hud-val-magenta" style={{ color: 'var(--accent-purple)' }}>Data Analytics & ML</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-label">System Core:</span>
                    <span className="hud-val-yellow" style={{ color: 'var(--accent-gold)' }}>AWS Academy Graduate</span>
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
            <p className="section-desc">Background diagnostic, technical profile mission, and vision targets.</p>
          </div>

          <div className="about-grid">
            {/* Sliding Profile Photo */}
            <div className="about-photo-card">
              <img src={heroImage} alt="Aditya Vats" className="about-photo-element" />
            </div>

            {/* Mission & Vision Cards */}
            <div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.7', margin: '0' }}>
                I am Aditya Vats, a B.Tech CSE Graduate (Completed June 2026) from VIT-AP University. Guided by industry-standard protocols, I specialize in exploratory data analysis, SQL query optimization, machine learning modeling, and data pipelines.
              </p>

              <div className="about-3d-cards">
                <div className="flip-card-3d">
                  <div className="flip-card-inner mission">
                    <div className="flip-card-front">
                      <div className="flip-card-title">
                        <Trophy size={16} />
                        <span>Core Mission</span>
                      </div>
                      <p className="flip-card-text">
                        To construct scalable, predictive AI solutions that bridge the gap between complex algorithmic structures and practical human utility.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flip-card-3d">
                  <div className="flip-card-inner vision">
                    <div className="flip-card-front">
                      <div className="flip-card-title">
                        <Activity size={16} />
                        <span>Core Vision</span>
                      </div>
                      <p className="flip-card-text">
                        To pioneer cloud-native machine learning pipelines that solve high-impact industrial problems with transparency and verified performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* View My Work Buttons */}
              <div className="about-work-links">
                <button onClick={() => smoothScrollTo('experience')} className="about-nav-btn">
                  <Briefcase size={12} />
                  <span>Work Experience</span>
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
                  <span>Skills Matrix</span>
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
            <p className="section-desc">Summer internships and corporate integrations.</p>
          </div>
          <Experience />
        </section>

        {/* ==================== SECTION 4: EDUCATION ==================== */}
        <section id="education" className="section animate-section">
          <div className="section-header">
            <h2 className="section-title">Education</h2>
            <p className="section-desc">Academic path and timeline milestones.</p>
          </div>
          <EducationTimeline />
        </section>

        {/* ==================== SECTION 5: PROJECTS ==================== */}
        <section id="projects" className="section animate-section">
          <div className="section-header">
            <h2 className="section-title">Engineering Sandbox</h2>
            <p className="section-desc">Interactive code modules, QQML experiments, and ATS analyzers.</p>
          </div>
          <ProjectsSandbox />
        </section>

        {/* ==================== SECTION 6: SKILLS ==================== */}
        <section id="skills" className="section animate-section">
          <div className="section-header">
            <h2 className="section-title">Skills Matrix</h2>
            <p className="section-desc">Full spectrum analysis of computational skills and cloud capabilities.</p>
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
            <p className="section-desc">Executive indicators and honors recognition records.</p>
          </div>

          {/* 4 Stat Counters */}
          <div className="achievements-stats-grid">
            <div className="stat-counter-box glass-panel" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--accent-gold)' }}>0.5+</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Years Experience</span>
            </div>
            <div className="stat-counter-box glass-panel" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--accent-gold)' }}>7</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Certifications</span>
            </div>
            <div className="stat-counter-box glass-panel" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--accent-gold)' }}>5</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Core Projects</span>
            </div>
            <div className="stat-counter-box glass-panel" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--accent-gold)' }}>2</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>System Awards</span>
            </div>
          </div>

          {/* Achievement cards list */}
          <div className="achievement-cards-grid">
            <div className="achievement-card-wrapper glass-panel" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div className="trophy-logo-glow" style={{ background: 'rgba(245, 158, 11, 0.08)', padding: '0.75rem', borderRadius: '10px', display: 'flex', color: 'var(--accent-gold)', flexShrink: 0 }}>
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
              <div className="trophy-logo-glow" style={{ background: 'rgba(245, 158, 11, 0.08)', padding: '0.75rem', borderRadius: '10px', display: 'flex', color: 'var(--accent-gold)', flexShrink: 0 }}>
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
              <h3 className="hud-title" style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-gold)', fontSize: '0.85rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', margin: '0 0 1rem 0' }}>
                Send Transmission
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
                  <label className="contact-form-label-floating">Message Payload</label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="btn-cyber-shimmer"
                  style={{ width: '100%', outline: 'none' }}
                >
                  {formStatus === 'sending' ? (
                    <span style={{ color: 'var(--accent-gold)' }}>Transmitting Signal...</span>
                  ) : formStatus === 'success' ? (
                    <span style={{ color: '#86efac' }}>Transmission Dispatched</span>
                  ) : (
                    <>
                      <span>Dispatch Transmission</span>
                      <Send size={12} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Connection Links */}
            <div className="contact-right-info-wrap contact-info-col">
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Establish Link</h2>
                <p className="section-desc" style={{ margin: '0', fontSize: '0.8rem' }}>
                  Always looking for professional opportunities in ML engineering, analytics, and data pipeline development.
                </p>
              </div>

              <div className="contact-info-cards">
                <div className="contact-info-card glass-panel contact-info-row-slide">
                  <div className="contact-card-icon-box cyan" style={{ color: 'var(--accent-gold)' }}>
                    <GraduationCap size={20} />
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">Primary Institution</span>
                    <span className="contact-card-val">VIT-AP University, India</span>
                  </div>
                </div>

                <div className="contact-info-card glass-panel contact-info-row-slide">
                  <div className="contact-card-icon-box green" style={{ color: 'var(--accent-gold)' }}>
                    <Github size={20} />
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">Git Endpoints</span>
                    <a 
                      href="https://github.com/adityavats21" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-card-val link"
                      style={{ color: 'var(--accent-gold)' }}
                    >
                      github.com/adityavats21
                    </a>
                  </div>
                </div>

                <div className="contact-info-card glass-panel contact-info-row-slide">
                  <div className="contact-card-icon-box magenta" style={{ color: 'var(--accent-gold)' }}>
                    <Mail size={20} />
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">Signal Router (Email)</span>
                    <a 
                      href="mailto:vatsaditya21@gmail.com"
                      className="contact-card-val link"
                      style={{ color: 'var(--accent-gold)' }}
                    >
                      vatsaditya21@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-card glass-panel contact-info-row-slide">
                  <div className="contact-card-icon-box green" style={{ color: 'var(--accent-gold)' }}>
                    <Download size={20} />
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">Downloadable CV</span>
                    <a 
                      href="https://drive.google.com/file/d/12WvRTGMWMPG72ZbHVk_E-oHZ2x_IURmc/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-card-val link"
                      style={{ color: 'var(--accent-gold)' }}
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
      <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--glass-border)', padding: '2rem 1rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
        <p style={{ margin: '0 0 0.5rem 0' }}>Designed & Engineered by <strong>Aditya Vats</strong></p>
        <p style={{ margin: '0', opacity: 0.6, fontSize: '0.65rem' }}>Cum Laude CSE Graduate Class of 2026 // VIT-AP University</p>
      </footer>
    </div>
  );
}

export default App;

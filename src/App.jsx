import React, { useState, useEffect, useRef } from 'react';
import { Brain, FolderGit2, GraduationCap, Mail, ExternalLink, Activity, Send, Briefcase, Award, Home } from 'lucide-react';
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
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null); // 'sending' | 'success'

  // Typewriter effect strings
  const titles = ['Data Analyst', 'Machine Learning Engineer', 'Data Science'];
  
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
        typingSpeed = 1500; // Pause at full title
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        titleIdx = (titleIdx + 1) % titles.length;
        typingSpeed = 500; // Pause before typing next
      }

      setTimeout(handleType, typingSpeed);
    };

    const typeTimeout = setTimeout(handleType, 1000);
    return () => clearTimeout(typeTimeout);
  }, []);

  // Canvas bubble animation (Pleasant, Light mode styling)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const maxParticles = 40;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = (Math.random() - 0.5) * 0.15;
        this.radius = Math.random() * 8 + 4;
        this.alpha = Math.random() * 0.12 + 0.04;
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
        ctx.fillStyle = `rgba(79, 70, 229, ${this.alpha})`; // Soft Indigo
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
      setContactForm({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(null), 4000);
    }, 1500);
  };

  return (
    <div className="app-wrapper">
      {/* Background VFX */}
      <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -3, pointerEvents: 'none' }} />
      <div className="bg-grid" />
      <div className="bg-radial" />

      {/* Modern Navbar */}
      <header className="header-navbar">
        <div className="nav-brand">
          <span className="nav-dot"></span>
          <h1 className="nav-logo-text">
            ADITYA<span>.VATS</span>
          </h1>
        </div>

        <nav className="nav-menu">
          {['Home', 'Skills', 'Experience', 'Certificates', 'Projects', 'Education', 'Contact'].map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`nav-link ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
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
            <Github size={18} />
          </a>
          <div className="nav-system-status">
            <Activity size={12} className="status-indicator-green" />
            <span>Profile Verified</span>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <div className="mobile-navbar">
        {[
          { name: 'Home', icon: <Home size={18} /> },
          { name: 'Skills', icon: <Brain size={18} /> },
          { name: 'Experience', icon: <Briefcase size={18} /> },
          { name: 'Certificates', icon: <Award size={18} /> },
          { name: 'Projects', icon: <FolderGit2 size={18} /> },
          { name: 'Education', icon: <GraduationCap size={18} /> },
          { name: 'Contact', icon: <Mail size={18} /> }
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`mobile-nav-btn ${activeTab === item.name ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <main className="main-container">
        
        {/* Dynamic Transition Wrapper */}
        <div className="animate-fadeIn">
          
          {/* TAB 1: HOME */}
          {activeTab === 'Home' && (
            <div className="home-section">
              <div className="hero-hud-grid">
                
                {/* Hero Text */}
                <div className="hero-text">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <span className="hero-tagline">
                      VIT-AP UNIVERSITY // COMPUTER SCIENCE DEPT
                    </span>
                    <h2 className="hero-title">
                      Aditya Vats
                    </h2>
                    <div className="typewriter-container">
                      <span className="hero-typed">
                        {typedTitle}
                        <span className="typewriter"></span>
                      </span>
                    </div>
                  </div>
                  
                  <p className="hero-description">
                  Completed graduation from VIT-AP in CSE-CORE, specializing in exploratory data analysis, machine learning algorithms, deep neural network training, and secure cloud pipelines.
                  </p>
                  
                  <div className="hero-actions">
                    <button 
                      onClick={() => setActiveTab('Projects')}
                      className="btn-cyber"
                    >
                      <span>View Engineering Sandbox</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>

                {/* Profile Photo and HUD */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                  <img 
                    src={heroImage} 
                    alt="Aditya Vats" 
                    style={{ 
                      width: '160px', 
                      height: '160px', 
                      borderRadius: '50%', 
                      objectFit: 'cover', 
                      border: '4px solid #ffffff', 
                      boxShadow: '0 10px 30px rgba(79, 70, 229, 0.15)', 
                      marginBottom: '1.5rem' 
                    }} 
                  />
                  <div className="hud-panel glass-panel pulse-glow" style={{ width: '100%' }}>
                    <h3 className="hud-title">
                      Executive Profile Diagnostic
                    </h3>
                    <div className="hud-readings">
                      <div className="hud-row">
                        <span className="hud-label">Academic Tier:</span>
                        <span className="hud-val-cyan">CSE Batch 22-26</span>
                      </div>
                      <div className="hud-row">
                        <span className="hud-label">Cumulative GPA:</span>
                        <span className="hud-val-green">8.13 / 10.0</span>
                      </div>
                      <div className="hud-row">
                        <span className="hud-label">Competence Focus:</span>
                        <span className="hud-val-magenta">Data Analayst/Science & ML</span>
                      </div>
                      <div className="hud-row">
                        <span className="hud-label">System Core:</span>
                        <span className="hud-val-yellow">Computer science Engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recruiter Capabilities Board */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <h3 className="recruiter-board-title">
                  Core Competencies & Engineering Value
                </h3>
                <div className="recruiter-board-grid">
                  <div className="recruiter-card glass-panel">
                    <div className="recruiter-card-header">
                      <div className="recruiter-card-icon-box icon-blue">
                        <Brain size={18} />
                      </div>
                      <h4 className="recruiter-card-title">Machine Learning</h4>
                    </div>
                    <p className="recruiter-card-desc">
                      Building predictive engines using classification, regression, clustering, and decision trees. Experienced in cross-validation and hyperparameter tuning.
                    </p>
                  </div>

                  <div className="recruiter-card glass-panel">
                    <div className="recruiter-card-header">
                      <div className="recruiter-card-icon-box icon-green">
                        <Activity size={18} className="status-indicator-green" />
                      </div>
                      <h4 className="recruiter-card-title">Data Science & Workflow</h4>
                    </div>
                    <p className="recruiter-card-desc">
                      Applying EDA, handling missing values, feature engineering, and deploying data cleaning algorithms to optimize raw dataset pipelines.
                    </p>
                  </div>

                  <div className="recruiter-card glass-panel">
                    <div className="recruiter-card-header">
                      <div className="recruiter-card-icon-box icon-purple">
                        <GraduationCap size={18} />
                      </div>
                      <h4 className="recruiter-card-title">Deep Neural Networks</h4>
                    </div>
                    <p className="recruiter-card-desc">
                      Designing neural networks (ANN/MLP), configuring loss functions, learning rates, and early stopping triggers using TensorFlow/Keras.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: SKILLS */}
          {activeTab === 'Skills' && (
            <div className="animate-fadeIn">
              <div className="section-header">
                <h2 className="section-title">
                  Skills Matrix
                </h2>
                <p className="section-desc">
                  Full stack of analytics skills, machine learning algorithms, deep neural network hyperparameters, and cloud foundations.
                </p>
              </div>
              <SkillsMatrix />
            </div>
          )}

          {/* TAB 3: EXPERIENCE */}
          {activeTab === 'Experience' && (
            <div className="animate-fadeIn">
              <div className="section-header">
                <h2 className="section-title">
                  Professional Experience
                </h2>
                <p className="section-desc">
                  Summary of summer internships, full-stack developments, and industry collaborations.
                </p>
              </div>
              <Experience />
            </div>
          )}

          {/* TAB 4: CERTIFICATES */}
          {activeTab === 'Certificates' && (
            <div className="animate-fadeIn">
              <div className="section-header">
                <h2 className="section-title">
                  Verified Credentials
                </h2>
                <p className="section-desc">
                  AWS certifications, Deloitte simulations, and professional qualifications.
                </p>
              </div>
              <Certificates />
            </div>
          )}

          {/* TAB 5: PROJECTS */}
          {activeTab === 'Projects' && (
            <div className="animate-fadeIn">
              <div className="section-header">
                <h2 className="section-title">
                  Engineering Sandbox
                </h2>
                <p className="section-desc">
                  Interactive implementations. Run simulations on Qiskit quantum models, stock trackers, or keyword extraction scripts.
                </p>
              </div>
              <ProjectsSandbox />
            </div>
          )}

          {/* TAB 6: EDUCATION */}
          {activeTab === 'Education' && (
            <div className="animate-fadeIn">
              <div className="section-header">
                <h2 className="section-title">
                  Timeline & Milestones
                </h2>
                <p className="section-desc">
                  Academic records and AWS Academy Cloud foundations certification details.
                </p>
              </div>
              <EducationTimeline />
            </div>
          )}

          {/* TAB 7: CONTACT */}
          {activeTab === 'Contact' && (
            <div className="contact-grid">
              {/* Left Column: Info & Connect */}
              <div className="contact-info-col">
                <div className="section-header">
                  <h2 className="section-title">
                    Establish Link
                  </h2>
                  <p className="section-desc">
                    Connect directly or query git endpoints. Always looking for professional collaborations in ML and data science.
                  </p>
                </div>

                <div className="contact-info-cards">
                  <div className="contact-info-card glass-panel">
                    <div className="contact-card-icon-box cyan">
                      <GraduationCap size={20} />
                    </div>
                    <div className="contact-card-details">
                      <span className="contact-card-label">Institution</span>
                      <span className="contact-card-val">VIT-AP University, India</span>
                    </div>
                  </div>

                  <div className="contact-info-card glass-panel">
                    <div className="contact-card-icon-box green">
                      <Github size={20} />
                    </div>
                    <div className="contact-card-details">
                      <span className="contact-card-label">GitHub Account</span>
                      <a 
                        href="https://github.com/adityavats21" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-card-val link"
                      >
                        github.com/adityavats21
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-card glass-panel">
                    <div className="contact-card-icon-box magenta">
                      <Mail size={20} />
                    </div>
                    <div className="contact-card-details">
                      <span className="contact-card-label">Email Address</span>
                      <a 
                        href="mailto:vatsaditya21@gmail.com"
                        className="contact-card-val link"
                      >
                        vatsaditya21@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-card glass-panel">
                    <div className="contact-card-icon-box cyan" style={{ color: 'var(--accent-purple)', background: 'rgba(124, 58, 237, 0.08)' }}>
                      <LeetCodeIcon size={20} />
                    </div>
                    <div className="contact-card-details">
                      <span className="contact-card-label">LeetCode Portfolio</span>
                      <a 
                        href="https://leetcode.com/u/adityavats21" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-card-val link"
                      >
                        leetcode.com/u/adityavats21
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-card glass-panel">
                    <div className="contact-card-icon-box green" style={{ color: 'var(--accent-green)', background: 'rgba(16, 185, 129, 0.08)' }}>
                      <HackerRankIcon size={20} />
                    </div>
                    <div className="contact-card-details">
                      <span className="contact-card-label">HackerRank Profile</span>
                      <a 
                        href="https://www.hackerrank.com/profile/vatsaditya21" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-card-val link"
                      >
                        hackerrank.com/vatsaditya21
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Form */}
              <div className="contact-form-panel glass-panel">
                <h3 className="hud-title">
                  Send Transmission
                </h3>

                <form onSubmit={handleContactSubmit} className="contact-form-wrapper">
                  <div className="contact-form-group">
                    <label className="contact-form-label">Sender Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="contact-form-input"
                      placeholder="Identify yourself..."
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">Sender Email</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="contact-form-input"
                      placeholder="Return mail routing..."
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">Transmission Payload</label>
                    <textarea
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="contact-form-input"
                      style={{ resize: 'vertical' }}
                      placeholder="Type message block here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="btn-cyber"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {formStatus === 'sending' ? (
                      <span className="text-glow-cyan">Sending Signal...</span>
                    ) : formStatus === 'success' ? (
                      <span className="text-glow-green">Signal Dispatched</span>
                    ) : (
                      <>
                        <span>Dispatch Signal</span>
                        <Send size={12} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

export default App;

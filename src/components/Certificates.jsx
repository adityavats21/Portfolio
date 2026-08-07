import React from 'react';
import { Award, ShieldCheck, Clock, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certifications = [
    {
      title: 'AWS Academy Graduate - AWS Academy Cloud Architecting',
      issuer: 'AWS Academy',
      date: 'Oct 2024',
      hours: '60 Hours',
      badge: 'Cloud Architecting',
      verificationUrl: '/certificates/aws_cloud_architecting.pdf',
      details: 'Comprehensive coursework in AWS design patterns, secure VPC topology, multi-tier auto-scaling instances, database storage configurations (RDS, DynamoDB, S3), and identity access control management (IAM).',
      logoGlow: '#f59e0b',
      rot: -1.5
    },
    {
      title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      issuer: 'AWS Academy',
      date: 'Sept 2024',
      hours: '20 Hours',
      badge: 'Cloud Foundations',
      verificationUrl: '/certificates/aws_cloud_foundations.pdf',
      details: 'Fundamental training covering cloud economics, core global infrastructure, billing dashboards, foundational compute services (EC2), secure bucket permissions, and service level architectures.',
      logoGlow: '#f59e0b',
      rot: 2
    },
    {
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte (via Forage)',
      date: 'Jan 2026',
      hours: 'Simulation Complete',
      badge: 'Data Analysis & Forensic Tech',
      verificationCode: 'G5acrLy5yHFzJnEFq',
      verificationUrl: '/certificates/deloitte_data_analytics.pdf',
      details: 'Completed practical simulations in exploratory data analysis, dataset cleanups, forensics detection algorithms, and translating transactional data logs into business insight dashboards.',
      logoGlow: '#86efac',
      rot: -1
    },
    {
      title: 'Introduction to MS Excel',
      issuer: 'Microsoft Partner (Simplilearn)',
      date: 'Aug 2026',
      hours: 'Coursework Completed',
      badge: 'Data Tools & Analysis',
      verificationCode: '10560176',
      verificationUrl: '/certificates/microsoft_excel.pdf',
      details: 'Mastered Excel analytics structures, lookup queries, complex pivot reports, conditional data filters, logical cell calculations, and analytics dashboard aggregation.',
      logoGlow: '#3b82f6',
      rot: 1.5
    },
    {
      title: 'Trust and Security with Google Cloud',
      issuer: 'Google Partner (Simplilearn)',
      date: 'July 2026',
      hours: 'Security Assessment',
      badge: 'Cloud Security & Trust',
      verificationCode: '10467937',
      verificationUrl: '/certificates/google_cloud_security.pdf',
      details: 'Evaluated cloud risk protocols, IAM access rules, VPC encryption states, security compliance models, and threat mitigation dashboards inside Google Cloud Platform.',
      logoGlow: '#ef4444',
      rot: -2
    }
  ];

  // Mouse move tilt handler for individual card
  const handleMouseMove = (e, idx) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-3 to 3 deg)
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = (((y / rect.height) - 0.5) * -8);
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e, rot) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotate(0deg) scale3d(1, 1, 1)`;
  };

  const getIssuerBadgeClass = (issuer) => {
    if (issuer.includes('AWS')) return 'badge-aws';
    if (issuer.includes('Deloitte')) return 'badge-gate'; // pink/red
    if (issuer.includes('Microsoft')) return 'badge-core'; // blue
    return 'badge-core'; // standard
  };

  return (
    <div className="cert-cards-waterfall">
      {certifications.map((cert, index) => (
        <div 
          key={index} 
          className="cert-card-wrap skill-card glass-panel"
          style={{ 
            '--rand-rot': `${cert.rot}deg`,
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            gap: '1.25rem',
            padding: '1.5rem',
            transformOrigin: 'center center',
            transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s ease, border-color 0.4s ease'
          }}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={(e) => handleMouseLeave(e, cert.rot)}
        >
          <div>
            <div className="skill-header">
              <span className={`skill-badge ${getIssuerBadgeClass(cert.issuer)}`}>
                {cert.issuer}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>
                {cert.date}
              </span>
            </div>
            
            {/* Branded Vector Certificate Preview */}
            <div className="cert-vector-preview" style={{ '--logo-glow': cert.logoGlow, margin: '1rem 0' }}>
              <div className="cert-vector-logo-glow" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
                <Award size={36} style={{ color: cert.logoGlow }} />
                <span style={{ fontSize: '0.55rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', letterSpacing: '1px' }}>
                  VERIFIED CREDENTIAL
                </span>
              </div>
            </div>

            <h4 className="skill-name" style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', fontWeight: '700', lineHeight: '1.4' }}>
              {cert.title}
            </h4>
            
            <span className="skill-category-label" style={{ color: 'var(--accent-gold)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.25rem', display: 'block' }}>
              {cert.badge}
            </span>

            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginTop: '0.75rem', fontFamily: 'var(--font-sans)' }}>
              {cert.details}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid var(--glass-border)', paddingTop: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Clock size={12} />
                <span>{cert.hours}</span>
              </div>
              {cert.verificationCode && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-gold)' }}>
                  <ShieldCheck size={12} />
                  <span>ID: {cert.verificationCode}</span>
                </div>
              )}
            </div>

            <a 
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-shimmer"
              style={{ width: '100%', textDecoration: 'none', fontSize: '0.7rem', padding: '0.5rem' }}
            >
              <span>Inspect Certificate PDF</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificates;

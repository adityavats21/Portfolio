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
      verificationUrl: 'https://www.credly.com/go/yCuinJ5V',
      details: 'Comprehensive coursework in AWS design patterns, secure VPC topology, multi-tier auto-scaling instances, database storage configurations (RDS, DynamoDB, S3), and identity access control management (IAM).'
    },
    {
      title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      issuer: 'AWS Academy',
      date: 'Sept 2024',
      hours: '20 Hours',
      badge: 'Cloud Foundations',
      verificationUrl: 'https://www.credly.com/go/C9Nbp0ne',
      details: 'Fundamental training covering cloud economics, core global infrastructure, billing dashboards, foundational compute services (EC2), secure bucket permissions, and service level architectures.'
    },
    {
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte (via Forage)',
      date: 'Jan 2026',
      hours: 'Practical Tasks Completed',
      badge: 'Data Analysis & Forensic Tech',
      verificationCode: 'G5acrLy5yHFzJnEFq',
      verificationUrl: 'https://www.theforage.com/simulations/deloitte', // standard verification root
      details: 'Completed practical simulations in exploratory data analysis, dataset cleanups, forensics detection algorithms, and translating transactional data logs into business insight dashboards.'
    },
    {
      title: 'Google Cloud Computing Foundations',
      issuer: 'Google',
      date: 'Aug 2024',
      hours: 'Coursework Verified',
      badge: 'Cloud Infrastructure',
      verificationUrl: 'https://www.linkedin.com/in/aditya-vats-760353247/', // link to profile for verification
      details: 'Explored infrastructure services, networking layers, database query engines, big data platforms, and APIs in the Google Cloud ecosystem.'
    },
    {
      title: 'Google Analytics Individual Qualification',
      issuer: 'Google',
      date: 'July 2024',
      hours: 'Assessment Completed',
      badge: 'Visual Analytics',
      verificationUrl: 'https://www.linkedin.com/in/aditya-vats-760353247/',
      details: 'Acquired proficiency in digital traffic dashboards, custom events tracking, reports aggregation, segmentation filters, and analytics analytics structures.'
    }
  ];

  const getIssuerBadgeClass = (issuer) => {
    switch (issuer) {
      case 'AWS Academy':
        return 'badge-aws';
      case 'Deloitte (via Forage)':
        return 'badge-gate'; // red/pinkish color fits Deloitte brand!
      default:
        return 'badge-core'; // standard blue/indigo for Google
    }
  };

  return (
    <div className="skills-grid">
      {certifications.map((cert, index) => (
        <div key={index} className="skill-card glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.25rem' }}>
          <div>
            <div className="skill-header">
              <span className={`skill-badge ${getIssuerBadgeClass(cert.issuer)}`}>
                {cert.issuer}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dark)', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>
                {cert.date}
              </span>
            </div>
            
            <h4 className="skill-name" style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', fontWeight: '700' }}>
              {cert.title}
            </h4>
            
            <span className="skill-category-label" style={{ color: 'var(--accent-purple)' }}>
              {cert.badge}
            </span>

            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginTop: '0.75rem', fontFamily: 'var(--font-sans)' }}>
              {cert.details}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid rgba(15, 23, 42, 0.05)', paddingTop: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Clock size={12} />
                <span>{cert.hours}</span>
              </div>
              {cert.verificationCode && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-purple)' }}>
                  <ShieldCheck size={12} />
                  <span>ID: {cert.verificationCode}</span>
                </div>
              )}
            </div>

            <a 
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber"
              style={{ width: '100%', justifyContent: 'center', fontSize: '0.7rem', padding: '0.5rem' }}
            >
              <span>Verify Credential</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificates;

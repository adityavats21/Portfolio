import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Summer Intern - Full Stack Developer',
      company: 'Blackbucks Education',
      location: 'India (Academic Integration)',
      duration: 'Feb 2025 - June 2025',
      description: 'Completed an intensive industry-grade full-stack development internship focusing on user interfaces, RESTful API structures, and data schemas.',
      achievements: [
        'Designed and constructed interactive web interfaces using React.js and modern state-management structures.',
        'Developed clean, optimized routing and business logic endpoints in Node.js and Express.js.',
        'Structured database collections, relations, and index architectures in MongoDB to optimize queries.',
        'Collaborated on responsive design implementations and API bindings to connect client applications with server endpoints.',
        'Conducted code reviews, debugged application bottlenecks, and worked with modern version control systems (Git).'
      ],
      skills: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript (ES6+)', 'REST APIs', 'Database Schemas', 'Git']
    }
  ];

  return (
    <div className="experience-list-container" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card-curtain-wrapper timeline-node" style={{ width: '100%' }}>
          <span className="timeline-dot-indicator"></span>
          
          <div className="experience-card glass-panel" style={{ width: '100%' }}>
            <div className="timeline-card-header">
              <div className="timeline-header-left">
                <div className="timeline-title-row">
                  <Briefcase size={20} className="timeline-card-icon-graduation" style={{ color: 'var(--accent-gold)' }} />
                  <h3 className="timeline-card-title">{exp.role}</h3>
                </div>
                <span className="timeline-card-subtitle" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>{exp.company}</span>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.25rem' }}>
                  <span className="timeline-card-inst" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>
              </div>
              <div className="timeline-card-duration" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Calendar size={12} /> {exp.duration}
              </div>
            </div>

            <p className="timeline-card-desc" style={{ marginBottom: '1.25rem' }}>
              {exp.description}
            </p>

            {/* Key Deliverables */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="timeline-topics-label" style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem', display: 'block', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.5px' }}>
                Key Responsibilities & Deliverables
              </span>
              <ul style={{ listStyle: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {exp.achievements.map((ach, idx) => (
                  <li key={idx} className="experience-bullet" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    <CheckCircle size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Acquired */}
            <div className="timeline-card-topics-section">
              <span className="timeline-topics-label" style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Skills & Technologies Acquired</span>
              <div className="timeline-topics-list" style={{ marginTop: '0.5rem' }}>
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="timeline-topic-tag bounce-pill" style={{ background: 'rgba(245, 158, 11, 0.05)', color: 'var(--accent-gold)', borderColor: 'rgba(245, 158, 11, 0.12)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;

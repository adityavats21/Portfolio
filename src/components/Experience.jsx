import React from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';

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
    <div className="timeline-timeline" style={{ maxWidth: '800px', margin: '0 auto' }}>
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-node">
          <span className="timeline-dot-indicator"></span>
          
          <div className="timeline-card glass-panel">
            <div className="timeline-card-header">
              <div className="timeline-header-left">
                <div className="timeline-title-row">
                  <Briefcase size={20} className="timeline-card-icon-graduation" />
                  <h3 className="timeline-card-title">{exp.role}</h3>
                </div>
                <span className="timeline-card-subtitle">{exp.company}</span>
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
              <span className="timeline-topics-label" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem', display: 'block' }}>
                Key Responsibilities & Deliverables
              </span>
              <ul style={{ listStyle: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.achievements.map((ach, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    <CheckCircle size={14} style={{ color: 'var(--accent-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Acquired */}
            <div className="timeline-card-topics-section">
              <span className="timeline-topics-label">Skills & Technologies Acquired</span>
              <div className="timeline-topics-list">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="timeline-topic-tag" style={{ background: 'rgba(79, 70, 229, 0.05)', color: 'var(--accent-blue)', borderColor: 'rgba(79, 70, 229, 0.12)' }}>
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

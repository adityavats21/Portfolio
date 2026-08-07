import React from 'react';
import { GraduationCap, Award, Percent, Calendar } from 'lucide-react';

const EducationTimeline = () => {
  const educationItems = [
    {
      type: 'graduation',
      title: 'Bachelor of Technology (B.Tech)',
      subtitle: 'Computer Science & Engineering',
      institution: 'VIT-AP University',
      duration: '2022 - 2026',
      description: 'Acquiring deep foundations in Computer Science, algorithms, systems, and specializing in Data Science & Machine Learning pipelines.',
      metrics: [
        { label: 'Cumulative GPA', value: '8.13 / 10', icon: <Percent size={14} style={{ color: 'var(--accent-gold)' }} /> },
        { label: 'Academic Status', value: 'Class of 2026', icon: <Calendar size={14} style={{ color: 'var(--accent-gold)' }} /> }
      ]
    },
    {
      type: 'cloud',
      title: 'AWS Academy Graduate',
      subtitle: 'Cloud Foundations & Infrastructure',
      institution: 'AWS Academy Certification',
      duration: '2024',
      description: 'Completed AWS Academy Graduate program. Focus on core cloud concepts, AWS billing, and secure cloud services (EC2, S3, IAM, VPC).',
      metrics: [
        { label: 'Scope', value: 'Cloud Architecture', icon: <Award size={14} style={{ color: 'var(--accent-gold)' }} /> },
        { label: 'Status', value: 'Completed course', icon: <Award size={14} style={{ color: 'var(--accent-gold)' }} /> }
      ]
    }
  ];

  return (
    <div className="education-flex-timeline" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      {educationItems.map((item, index) => (
        <div key={index} className="education-card-wrapper timeline-node" style={{ width: '100%' }}>
          <span className="timeline-dot-indicator"></span>
          
          <div className="timeline-card glass-panel" style={{ width: '100%' }}>
            <div className="timeline-card-header">
              <div className="timeline-header-left">
                <div className="timeline-title-row">
                  {item.type === 'graduation' ? (
                    <GraduationCap size={20} className="timeline-card-icon-graduation" style={{ color: 'var(--accent-gold)' }} />
                  ) : (
                    <Award size={20} className="timeline-card-icon-award" style={{ color: 'var(--accent-gold)' }} />
                  )}
                  <h3 className="timeline-card-title">
                    {item.title}
                  </h3>
                </div>
                <span className="timeline-card-subtitle" style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>{item.subtitle}</span>
                <span className="timeline-card-inst">{item.institution}</span>
              </div>
              <div className="timeline-card-duration">
                {item.duration}
              </div>
            </div>

            <p className="timeline-card-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.5', margin: '0.75rem 0 1.25rem 0' }}>
              {item.description}
            </p>

            {/* Display metrics */}
            {item.metrics && (
              <div className="timeline-card-metrics" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {item.metrics.map((metric, idx) => (
                  <div key={idx} className="timeline-metric-card education-highlight" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-tertiary)', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid var(--glass-border)' }}>
                    {metric.icon}
                    <div className="timeline-metric-details" style={{ display: 'flex', flexDirection: 'column' }}>
                      <span className="timeline-metric-label" style={{ fontSize: '0.6rem', color: 'var(--text-dark)', textTransform: 'uppercase' }}>{metric.label}</span>
                      <span className="timeline-metric-val" style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-primary)' }}>{metric.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;

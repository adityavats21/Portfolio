import React from 'react';
import { GraduationCap, Award, Percent, BookMarked, Calendar } from 'lucide-react';

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
        { label: 'Cumulative GPA', value: '8.13 / 10', icon: <Percent size={14} style={{ color: 'var(--accent-blue)' }} /> },
        { label: 'Academic Status', value: 'Completed in June', icon: <Calendar size={14} style={{ color: 'var(--accent-blue)' }} /> }
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
        { label: 'Scope', value: 'Cloud Architecture', icon: <Award size={14} style={{ color: 'var(--accent-yellow)' }} /> },
        { label: 'Status', value: 'Completed course', icon: <Award size={14} style={{ color: 'var(--accent-yellow)' }} /> }
      ]
    }
  ];

  return (
    <div className="education-grid">
      {/* Left 2 Columns: Timeline Nodes */}
      <div className="timeline-timeline">
        {educationItems.map((item, index) => (
          <div key={index} className="timeline-node">
            <span className="timeline-dot-indicator"></span>
            
            <div className="timeline-card glass-panel">
              <div className="timeline-card-header">
                <div className="timeline-header-left">
                  <div className="timeline-title-row">
                    {item.type === 'graduation' ? (
                      <GraduationCap size={20} className="timeline-card-icon-graduation" />
                    ) : (
                      <Award size={20} className="timeline-card-icon-award" />
                    )}
                    <h3 className="timeline-card-title">
                      {item.title}
                    </h3>
                  </div>
                  <span className="timeline-card-subtitle">{item.subtitle}</span>
                  <span className="timeline-card-inst">{item.institution}</span>
                </div>
                <div className="timeline-card-duration">
                  {item.duration}
                </div>
              </div>

              <p className="timeline-card-desc">
                {item.description}
              </p>

              {/* Display metrics */}
              {item.metrics && (
                <div className="timeline-card-metrics">
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className="timeline-metric-card">
                      {metric.icon}
                      <div className="timeline-metric-details">
                        <span className="timeline-metric-label">{metric.label}</span>
                        <span className="timeline-metric-val">{metric.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Statistics dashboard card / Research focus */}
      <div className="timeline-dashboard-sidebar glass-panel">
        <div className="timeline-sidebar-top">
          <div className="timeline-sidebar-header">
            <BookMarked style={{ color: 'var(--accent-purple)' }} size={20} />
            <h3 className="timeline-sidebar-title">Research Focus</h3>
          </div>
          <p className="timeline-sidebar-desc">
            Actively mastering key analytics, statistical theory, and deep learning engineering paradigms.
          </p>

          <div className="timeline-sidebar-meters">
            <div className="sidebar-meter-item">
              <div className="sidebar-meter-label-row">
                <span>Probability & Statistics</span>
                <span className="sidebar-meter-label-active">Active</span>
              </div>
              <div className="sidebar-meter-track">
                <div className="sidebar-meter-fill magenta" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="sidebar-meter-item">
              <div className="sidebar-meter-label-row">
                <span>Machine Learning Models</span>
                <span className="sidebar-meter-label-cyan">Core Focus</span>
              </div>
              <div className="sidebar-meter-track">
                <div className="sidebar-meter-fill cyan" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="sidebar-meter-item">
              <div className="sidebar-meter-label-row">
                <span>Deep Neural Networks</span>
                <span className="sidebar-meter-label-green">Advanced</span>
              </div>
              <div className="sidebar-meter-track">
                <div className="sidebar-meter-fill green" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-stats-diagnostics">
          <span className="sidebar-diag-label">System Diagnostics</span>
          <div className="sidebar-diag-list">
            <div className="sidebar-diag-row"><span>GPA Tier:</span><span className="sidebar-diag-val">First Class Distinction</span></div>
            <div className="sidebar-diag-row"><span>CGPA:</span><span className="sidebar-diag-val-yellow">8.13</span></div>
            <div className="sidebar-diag-row"><span>Batch Status:</span><span className="sidebar-diag-val">2022 - 2026</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;

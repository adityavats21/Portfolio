import React from 'react';
import { Brain, BarChart, Code, Database, Cloud, BookOpen } from 'lucide-react';

const SkillsMatrix = () => {
  // Grouped skills with tiered categories instead of arbitrary percentages
  const skillCategories = [
    {
      name: 'Data Analysis & BI',
      icon: <BarChart size={22} className="skill-cat-icon" style={{ color: 'var(--accent-gold)' }} />,
      skills: [
        { name: 'Exploratory Data Analysis (EDA)', level: 'Proficient', pct: 95 },
        { name: 'Data Cleaning & Preprocessing', level: 'Proficient', pct: 95 },
        { name: 'Feature Engineering', level: 'Proficient', pct: 95 },
        { name: 'SQL Query Optimization', level: 'Proficient', pct: 95 },
        { name: 'Excel (PivotTables, VLOOKUP/XLOOKUP)', level: 'Proficient', pct: 95 },
        { name: 'Power BI & Tableau Dashboarding', level: 'Proficient', pct: 95 },
        { name: 'KPI Tracking & Funnel Analysis', level: 'Working Knowledge', pct: 80 }
      ]
    },
    {
      name: 'Programming & Statistics',
      icon: <Brain size={22} className="skill-cat-icon" style={{ color: 'var(--accent-gold)' }} />,
      skills: [
        { name: 'Python (Pandas, NumPy, Matplotlib)', level: 'Proficient', pct: 95 },
        { name: 'Hypothesis Testing', level: 'Working Knowledge', pct: 80 },
        { name: 'Regression Modeling', level: 'Proficient', pct: 95 },
        { name: 'Time-Series Forecasting (LSTM, ARIMA)', level: 'Working Knowledge', pct: 80 }
      ]
    },
    {
      name: 'Databases & Cloud',
      icon: <Database size={22} className="skill-cat-icon" style={{ color: 'var(--accent-gold)' }} />,
      skills: [
        { name: 'MySQL Database Management', level: 'Proficient', pct: 95 },
        { name: 'AWS (EC2, RDS, VPC, IAM)', level: 'Working Knowledge', pct: 80 },
        { name: 'Google Cloud Platform (Trust & Security)', level: 'Working Knowledge', pct: 80 },
        { name: 'Git & Version Control', level: 'Proficient', pct: 95 }
      ]
    },
    {
      name: 'Machine & Deep Learning',
      icon: <Brain size={22} className="skill-cat-icon" style={{ color: 'var(--accent-gold)' }} />,
      skills: [
        { name: 'Random Forests & Decision Trees', level: 'Proficient', pct: 95 },
        { name: 'XGBoost & Gradient Boosting', level: 'Proficient', pct: 95 },
        { name: 'K-Means & KNN Clustering', level: 'Working Knowledge', pct: 80 },
        { name: 'Hyperparameter Tuning', level: 'Proficient', pct: 95 },
        { name: 'Artificial Neural Networks (ANN)', level: 'Working Knowledge', pct: 80 },
        { name: 'TensorFlow & Keras Foundations', level: 'Working Knowledge', pct: 80 },
        { name: 'LLMs & Agentic Vibe Coding', level: 'Working Knowledge', pct: 80 }
      ]
    }
  ];

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Proficient':
        return '#f59e0b'; // Gold
      case 'Working Knowledge':
        return '#818cf8'; // Indigo/Purple
      case 'Familiar':
        return '#94a3b8'; // Slate Gray
      default:
        return 'var(--text-secondary)';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
      <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', width: '100%' }}>
        {skillCategories.map((category, catIdx) => (
          <div 
            key={catIdx} 
            className="skill-category-card-wrap glass-panel"
            style={{ padding: '1.75rem', width: '100%' }}
          >
            {/* Category Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>
              {category.icon}
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', margin: '0' }}>
                {category.name}
              </h3>
            </div>

            {/* Skills List with Tier Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '600' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-primary)' }}>{skill.name}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: getTierColor(skill.level), fontWeight: '700' }}>{skill.level}</span>
                  </div>
                  {/* Progress Bar Container indicating width statically based on tier */}
                  <div style={{ height: '6px', background: 'var(--bg-tertiary)', borderRadius: '3px', overflow: 'hidden', position: 'relative' }}>
                    <div 
                      className="skill-bar-fill" 
                      style={{ 
                        height: '100%', 
                        background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-gold))', 
                        borderRadius: '3px',
                        '--progress-width': `${skill.pct}%`
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMatrix;

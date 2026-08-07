import React from 'react';
import { Brain, BarChart, Code, Database, Cloud, BookOpen } from 'lucide-react';

const SkillsMatrix = () => {
  // Grouped skills with realistic proficiencies (70% - 95%)
  const skillCategories = [
    {
      name: 'Data Science & Analytics',
      icon: <BarChart size={22} className="skill-cat-icon" style={{ color: 'var(--accent-gold)' }} />,
      skills: [
        { name: 'Exploratory Data Analysis (EDA)', level: 92 },
        { name: 'Data Cleaning & Preprocessing', level: 95 },
        { name: 'Feature Engineering', level: 88 },
        { name: 'Data Visualization (Matplotlib, Power BI)', level: 85 },
        { name: 'Model Evaluation & Cross Validation', level: 90 }
      ]
    },
    {
      name: 'Machine Learning',
      icon: <Brain size={22} className="skill-cat-icon" style={{ color: 'var(--accent-gold)' }} />,
      skills: [
        { name: 'Random Forests & Decision Trees', level: 92 },
        { name: 'XGBoost & Boosting Models', level: 88 },
        { name: 'Linear & Logistic Regression', level: 95 },
        { name: 'K-Means & KNN Clustering', level: 85 },
        { name: 'Hyperparameter Tuning', level: 90 }
      ]
    },
    {
      name: 'Deep Learning',
      icon: <Brain size={22} className="skill-cat-icon" style={{ color: 'var(--accent-gold)' }} />,
      skills: [
        { name: 'Artificial Neural Networks (ANN)', level: 84 },
        { name: 'TensorFlow & Keras Foundations', level: 80 },
        { name: 'Multi-Layer Perceptron (MLP)', level: 85 },
        { name: 'Model Training Tuning (Early Stopping)', level: 82 },
        { name: 'LLMs & RAG Architectures', level: 75 }
      ]
    },
    {
      name: 'Libraries & Core Tech',
      icon: <Code size={22} className="skill-cat-icon" style={{ color: 'var(--accent-gold)' }} />,
      skills: [
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 92 },
        { name: 'Scikit-learn', level: 94 },
        { name: 'Python (OOP & Scripting)', level: 90 },
        { name: 'Imbalanced-learn & Joblib', level: 82 }
      ]
    },
    {
      name: 'Database & Cloud',
      icon: <Database size={22} className="skill-cat-icon" style={{ color: 'var(--accent-gold)' }} />,
      skills: [
        { name: 'SQL Query Optimization', level: 88 },
        { name: 'MySQL Database Management', level: 90 },
        { name: 'AWS Cloud Foundations', level: 85 },
        { name: 'AWS Services (EC2, S3, IAM, VPC)', level: 82 }
      ]
    },
    {
      name: 'Statistics & Math',
      icon: <BookOpen size={22} className="skill-cat-icon" style={{ color: 'var(--accent-gold)' }} />,
      skills: [
        { name: 'Probability & Distributions', level: 88 },
        { name: 'Hypothesis Testing', level: 85 },
        { name: 'Descriptive & Inferential Stats', level: 90 },
        { name: 'Correlation & Regression Analysis', level: 92 }
      ]
    }
  ];

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

            {/* Skills Progress List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-primary)' }}>{skill.name}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-gold)' }}>{skill.level}%</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div style={{ height: '6px', background: 'var(--bg-tertiary)', borderRadius: '3px', overflow: 'hidden', position: 'relative' }}>
                    <div 
                      className="skill-bar-fill" 
                      style={{ 
                        height: '100%', 
                        background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-gold))', 
                        borderRadius: '3px',
                        '--progress-width': `${skill.level}%`
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

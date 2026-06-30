import React, { useState } from 'react';
import { Search, Brain, BarChart, Code, Database, Cloud, BookOpen, Layers } from 'lucide-react';

const SkillsMatrix = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: <Layers size={16} /> },
    { name: 'Data Science & Workflow', icon: <BarChart size={16} /> },
    { name: 'ML Algorithms', icon: <Brain size={16} /> },
    { name: 'Deep Learning', icon: <Brain size={16} /> },
    { name: 'Libraries & Tools', icon: <Code size={16} /> },
    { name: 'Database', icon: <Database size={16} /> },
    { name: 'Statistics & Math', icon: <BookOpen size={16} /> },
    { name: 'Cloud', icon: <Cloud size={16} /> }
  ];

  const skillData = [
    // Data Science & Workflow
    { name: 'Exploratory Data Analysis (EDA)', category: 'Data Science & Workflow', status: 'Core' },
    { name: 'Data Cleaning & Preprocessing', category: 'Data Science & Workflow', status: 'Core' },
    { name: 'Feature Engineering', category: 'Data Science & Workflow', status: 'Core' },
    { name: 'Data Visualization (Matplotlib, Power BI)', category: 'Data Science & Workflow', status: 'Core' },
    { name: 'Handling Missing Values & Outliers', category: 'Data Science & Workflow', status: 'Core' },
    { name: 'Model Evaluation & Cross Validation', category: 'Data Science & Workflow', status: 'Core' },
    { name: 'Hyperparameter Tuning', category: 'Data Science & Workflow', status: 'Core' },
    { name: 'Data Collection & Pipeline Setup', category: 'Data Science & Workflow', status: 'Core' },
    { name: 'Model Deployment basics', category: 'Data Science & Workflow', status: 'Familiar' },

    // ML Algorithms
    { name: 'Logistic Regression', category: 'ML Algorithms', status: 'Core' },
    { name: 'Decision Trees & Random Forests', category: 'ML Algorithms', status: 'Core' },
    { name: 'XGBoost', category: 'ML Algorithms', status: 'Core' },
    { name: 'Linear, Ridge & Lasso Regression', category: 'ML Algorithms', status: 'Core' },
    { name: 'K-Means Clustering', category: 'ML Algorithms', status: 'Core' },
    { name: 'K-Nearest Neighbors (KNN)', category: 'ML Algorithms', status: 'Core' },
    { name: 'Support Vector Machines (SVM)', category: 'ML Algorithms', status: 'Familiar' },

    // Deep Learning
    { name: 'Artificial Neural Networks (ANN)', category: 'Deep Learning', status: 'Core' },
    { name: 'TensorFlow & Keras foundations', category: 'Deep Learning', status: 'Core' },
    { name: 'Multi Layer Perceptron (MLP)', category: 'Deep Learning', status: 'Core' },
    { name: 'Binary Cross Entropy & Activation Functions (ReLU, Sigmoid)', category: 'Deep Learning', status: 'Core' },
    { name: 'Model Training Tuning (Early Stopping, Regularization)', category: 'Deep Learning', status: 'Core' },
    { name: 'Large Language Models (LLMs)', category: 'Deep Learning', status: 'Learning' },
    { name: 'Retrieval-Augmented Generation (RAG)', category: 'Deep Learning', status: 'Learning' },

    // Libraries & Tools
    { name: 'Pandas', category: 'Libraries & Tools', status: 'Core' },
    { name: 'NumPy', category: 'Libraries & Tools', status: 'Core' },
    { name: 'Scikit-learn', category: 'Libraries & Tools', status: 'Core' },
    { name: 'Imbalanced-learn', category: 'Libraries & Tools', status: 'Core' },
    { name: 'Joblib', category: 'Libraries & Tools', status: 'Core' },

    // Database
    { name: 'SQL Query Optimization', category: 'Database', status: 'Core' },
    { name: 'MySQL Database Management', category: 'Database', status: 'Core' },

    // Statistics & Math
    { name: 'Probability & Distributions', category: 'Statistics & Math', status: 'Core' },
    { name: 'Hypothesis Testing', category: 'Statistics & Math', status: 'Core' },
    { name: 'Descriptive & Inferential Statistics', category: 'Statistics & Math', status: 'Core' },
    { name: 'Correlation & Regression Analysis', category: 'Statistics & Math', status: 'Core' },

    // Cloud
    { name: 'AWS Cloud Foundations', category: 'Cloud', status: 'Core' },
    { name: 'Basic AWS Services (EC2, S3, IAM)', category: 'Cloud', status: 'Core' }
  ];

  const filteredSkills = skillData.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          skill.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColorClass = (status) => {
    switch (status) {
      case 'Core': return 'badge-core';
      case 'Familiar': return 'badge-aws';
      case 'Learning': return 'badge-learning';
      default: return 'badge-learning';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Search & Category Filter Controls */}
      <div className="skills-filter-section">
        <div className="skills-search-wrapper">
          <div className="skills-search-icon">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search skills (e.g. XGBoost, SQL)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="skills-search-input"
          />
        </div>

        {/* Categories Bar */}
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`skills-tab-btn ${activeCategory === cat.name ? 'active' : ''}`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="skill-card glass-panel"
            >
              <div>
                <div className="skill-header">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className={`skill-badge ${getStatusColorClass(skill.status)}`}>
                    {skill.status}
                  </span>
                </div>
                <span className="skill-category-label">
                  {skill.category}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', padding: '3rem 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dark)' }}>
            No matching skills found in the database.
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsMatrix;

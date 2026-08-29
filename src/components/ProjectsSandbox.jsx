import React from 'react';

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

const ExternalLinkIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ProjectsSandbox = () => {
  const projects = [
    {
      id: 'fraud',
      title: 'Fraud Detection & Audit System',
      description: 'Compared quantum SVM (Qiskit/PennyLane) against classical models (XGBoost, MLP, autoencoder) on a 6M+ transaction dataset. The quantum kernel was evaluated as a proof-of-concept for advanced pattern separation, while XGBoost served as the production model.',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Qiskit', 'PennyLane', 'Pandas', 'NumPy', 'FastAPI'],
      github: 'https://github.com/adityavats21/fraud-quantum-capstone',
      liveDemo: 'https://fraud-quantum-capstone.vercel.app',
      outcomes: [
        { label: 'Quantum SVM Accuracy', val: '93.7% (PoC)' },
        { label: 'XGBoost Accuracy', val: '99.2% (Production)' },
        { label: 'Quantum Metrics', val: '87.5% F1 // 0.971 ROC-AUC' }
      ]
    },
    {
      id: 'market',
      title: 'MarketMatrix Dashboard',
      description: 'Real-time stock sentiment aggregator and forecast dashboard. Benchmarks LSTM, ARIMA, and Linear Regression models on historical stock records, engineering 14 technical indicators (SMA, EMA, RSI, Volatility) for 60-day prediction windows.',
      tech: ['Python', 'Flask', 'MySQL', 'Pandas', 'Requests', 'LSTM', 'ARIMA', 'Scikit-learn', 'Visual Analytics'],
      github: 'https://github.com/adityavats21/MarketMatrix',
      liveDemo: 'https://market-matrix-two.vercel.app',
      outcomes: [
        { label: 'Benchmarked Engines', val: 'LSTM vs ARIMA vs Regression' },
        { label: 'Indicator Scope', val: '14 features (RSI, EMA, SMA)' },
        { label: 'Forecast Horizon', val: '60-day prediction window' }
      ]
    },
    {
      id: 'resume',
      title: 'Resume Keyword Extractor',
      description: 'An NLP parsing engine for skill-gap matching. Scans resume documents against job requirements, calculating a keyword alignment score using tokenization, TF-IDF weights, and frequency counts.',
      tech: ['Python', 'NLTK (NLP)', 'Scikit-learn', 'Regular Expressions', 'PyPDF2', 'MySQL', 'TKinter'],
      github: 'https://github.com/adityavats21/resume_keyword_extractor',
      outcomes: [
        { label: 'Algorithm Metric', val: 'TF-IDF keyword weighting' },
        { label: 'Parsing Strategy', val: 'PyPDF2 text segmentation' },
        { label: 'Accuracy Check', val: 'Matched / target keywords in JD' }
      ]
    },
    {
      id: 'distilbert',
      title: 'DistilBERT Sentiment Fine-tuning',
      description: 'Fine-tuned the DistilBERT transformer model using HuggingFace pipelines. Pre-processed, tokenized, and configured hyperparameter schedules to customize the model on sentiment classification datasets.',
      tech: ['Python', 'PyTorch', 'Transformers', 'HuggingFace', 'DistilBERT', 'Tokenizers', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/adityavats21/distilbert-sentiment-finetuning',
      outcomes: [
        { label: 'Base Architecture', val: 'DistilBERT (Transformer)' },
        { label: 'Pipeline Framework', val: 'HuggingFace & PyTorch' },
        { label: 'Task Domain', val: 'Multi-label Text Classification' }
      ]
    },
    {
      id: 'cropyield',
      title: 'India Crop Yield & MSP Risk Baseline',
      description: 'Built machine learning baseline models to forecast crop yields and Minimum Support Price (MSP) volatility. Integrates historical state yield outputs with regional rainfall datasets to run risk indicators.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Regression Models'],
      github: 'https://github.com/adityavats21/India-crop-yield-msp-risk-baseline',
      outcomes: [
        { label: 'Predictive Scope', val: 'Regional rainfall & crop outputs' },
        { label: 'Economic Feature', val: 'MSP baseline pricing boundaries' },
        { label: 'Analytics Model', val: 'Baseline Regression Models' }
      ]
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
      {/* Project Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
        {projects.map((proj) => (
          <div 
            key={proj.id}
            className="project-card project-card-interactive"
            style={{ width: '100%' }}
          >
            {/* Left panel curtain */}
            <div className="project-left-side-curtain" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 className="project-card-title" style={{ fontSize: '1rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', transition: 'all 0.3s ease', lineHeight: '1.4', marginBottom: '1.5rem' }}>
                  {proj.title}
                </h3>
              </div>
              
              {/* Dual links for View Code and Live Demo */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-cyber-shimmer"
                  style={{ textDecoration: 'none', fontSize: '0.7rem', padding: '0.5rem', width: '100%' }}
                >
                  <Github size={14} />
                  <span>View Code</span>
                </a>
                
                {proj.liveDemo && (
                  <a 
                    href={proj.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ fontSize: '0.7rem', padding: '0.5rem', width: '100%' }}
                  >
                    <ExternalLinkIcon size={12} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right details content */}
            <div className="project-right-details" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
              <div>
                <p className="project-desc" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0' }}>{proj.description}</p>
                
                {/* Quantified outcomes list */}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                  {proj.outcomes.map((out, oIdx) => (
                    <div key={oIdx} className="project-outcome-box" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', padding: '0.5rem 0.75rem', borderRadius: '6px', fontSize: '0.75rem' }}>
                      <span style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>{out.label}: </span>
                      <span style={{ color: 'var(--text-secondary)' }}>{out.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="project-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {proj.tech.map((t, idx) => (
                  <span 
                    key={idx}
                    className="project-tag bounce-pill"
                    style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', padding: '0.35rem 0.65rem', borderRadius: '20px', fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: '500', fontFamily: 'var(--font-mono)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSandbox;

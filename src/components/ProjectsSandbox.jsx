import React, { useState } from 'react';
import { Play, Cpu, TrendingUp, SearchCode, Sparkles, RefreshCw } from 'lucide-react';

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

const ProjectsSandbox = () => {
  const [activeSimulator, setActiveSimulator] = useState(null); // 'fraud' | 'market' | 'resume'

  // Simulator States
  // 1. Fraud Simulator
  const [fraudSimRunning, setFraudSimRunning] = useState(false);
  const [fraudResult, setFraudResult] = useState(null);

  // 2. Market Matrix Simulator
  const [selectedStock, setSelectedStock] = useState('NVDA');
  const [marketMetrics, setMarketMetrics] = useState({
    price: 124.50,
    sentiment: 'Bullish',
    volatility: 'Medium',
    signal: 'BUY'
  });

  // 3. Resume Extractor Simulator
  const [resumeText, setResumeText] = useState('Data Scientist with 2 years of experience in Python, Pandas, TensorFlow and Scikit-learn. Deeply familiar with Linear Regression, Random Forest, and Hyperparameter Tuning.');
  const [extracting, setExtracting] = useState(false);
  const [extractedKeywords, setExtractedKeywords] = useState(null);

  const runFraudSimulation = () => {
    setFraudSimRunning(true);
    setFraudResult(null);
    setTimeout(() => {
      setFraudResult({
        classical: { accuracy: 96.8, timeMs: 4, recall: 94.2 },
        quantum: { accuracy: 98.4, timeMs: 145, recall: 97.9 },
        verdict: 'Quantum ML model achieved +1.6% higher accuracy and +3.7% recall in fraud detection, utilizing quantum entanglement states for feature correlations.'
      });
      setFraudSimRunning(false);
    }, 2000);
  };

  const runMarketAnalysis = (stock) => {
    setSelectedStock(stock);
    const mockData = {
      NVDA: { price: 127.80, sentiment: 'Very Bullish', volatility: 'High', signal: 'STRONG BUY' },
      AAPL: { price: 189.20, sentiment: 'Neutral', volatility: 'Low', signal: 'HOLD' },
      BTC: { price: 67340.00, sentiment: 'Bullish', volatility: 'Extreme', signal: 'BUY' },
      TSLA: { price: 178.40, sentiment: 'Bearish', volatility: 'High', signal: 'SELL' }
    };
    setMarketMetrics(mockData[stock]);
  };

  const runResumeExtraction = () => {
    setExtracting(true);
    setExtractedKeywords(null);
    setTimeout(() => {
      const lower = resumeText.toLowerCase();
      const detected = [];
      const matchKeywords = ['python', 'pandas', 'tensorflow', 'scikit-learn', 'regression', 'random forest', 'xgboost', 'sql', 'aws'];
      matchKeywords.forEach(kw => {
        if (lower.includes(kw)) detected.push(kw.toUpperCase());
      });
      
      const score = Math.round((detected.length / matchKeywords.length) * 100);
      setExtractedKeywords({
        keywords: detected,
        atsScore: score,
        verdict: score >= 70 ? 'Strong alignment with Data Science requirements!' : 'Consider adding key skills like XGBoost, SQL, or AWS.'
      });
      setExtracting(false);
    }, 1500);
  };

  const projects = [
    {
      id: 'fraud',
      title: 'Quantum Fraud Detection System',
      description: 'An advanced pipeline comparing classical and quantum machine learning models to identify fraudulent banking transactions. QML circuits exploit quantum state dimensions to capture complex correlation factors.',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Qiskit', 'PennyLane', 'Pandas', 'NumPy'],
      github: 'https://github.com/adityavats21/fraud-quantum-capstone',
      icon: <Cpu size={24} />
    },
    {
      id: 'market',
      title: 'MarketMatrix Dashboard',
      description: 'Real-time stock sentiment aggregator. Runs web scrapers and aggregates API streams to compile financial indicators and market direction metrics.',
      tech: ['Python', 'Flask', 'HTML5/CSS3', 'REST APIs', 'Pandas', 'Requests', 'Visual Analytics'],
      github: 'https://github.com/adityavats21/MarketMatrix',
      icon: <TrendingUp size={24} />
    },
    {
      id: 'resume',
      title: 'Resume Keyword Extractor',
      description: 'An NLP tool built to scan resume documents against standard job descriptions, extracting relevant technical terms and calculating an ATS formatting / keyword compliance score.',
      tech: ['Python', 'Natural Language Processing', 'Regular Expressions', 'File Parsers', 'TKinter/Web Interface'],
      github: 'https://github.com/adityavats21/resume_keyword_extractor',
      icon: <SearchCode size={24} />
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', width: '100%' }}>
      {/* Project Cards Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
        {projects.map((proj) => (
          <div 
            key={proj.id}
            className="project-card project-card-interactive"
            style={{ width: '100%' }}
          >
            {/* Dark left panel */}
            <div className="project-left-side-curtain">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div className="project-icon-box" style={{ background: 'var(--bg-primary)', padding: '0.6rem', borderRadius: '10px', display: 'flex', color: 'var(--accent-gold)' }}>
                  {proj.icon}
                </div>
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-social-btn"
                  style={{ opacity: 0.8, color: 'var(--accent-gold)' }}
                >
                  <Github size={18} />
                </a>
              </div>
              <h3 className="project-card-title" style={{ fontSize: '1rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', transition: 'all 0.3s ease', lineHeight: '1.4' }}>
                {proj.title}
              </h3>
              <button
                onClick={() => setActiveSimulator(activeSimulator === proj.id ? null : proj.id)}
                className="btn-cyber-shimmer"
                style={{ marginTop: '1.25rem', width: '100%', fontSize: '0.7rem', padding: '0.5rem' }}
              >
                <Play size={10} />
                <span>{activeSimulator === proj.id ? 'Close Sandbox' : 'Run Sandbox'}</span>
              </button>
            </div>

            {/* Right content details */}
            <div className="project-right-details" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
              <div>
                <p className="project-desc" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0' }}>{proj.description}</p>
                
                {/* Simulated quantified outcomes */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                  <div className="project-outcome-box" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', padding: '0.5rem 0.75rem', borderRadius: '6px', fontSize: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>Result: </span>
                    <span style={{ color: 'var(--text-secondary)' }}>
                      {proj.id === 'fraud' ? '98.4% Quantum Acc' : proj.id === 'market' ? 'Real-time 200ms update latency' : '95% ATS extraction rate'}
                    </span>
                  </div>
                  <div className="project-outcome-box" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', padding: '0.5rem 0.75rem', borderRadius: '6px', fontSize: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>Impact: </span>
                    <span style={{ color: 'var(--text-secondary)' }}>
                      {proj.id === 'fraud' ? 'Reduces classical training cycles' : proj.id === 'market' ? 'Scalable Flask route telemetry' : 'Optimizes keywords dynamically'}
                    </span>
                  </div>
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

      {/* Simulator Sandbox Container */}
      {activeSimulator && (
        <div className="sandbox-workspace glass-panel animate-fadeIn" style={{ marginTop: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '1.75rem' }}>
          <div className="sandbox-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>
            <Sparkles size={18} style={{ color: 'var(--accent-gold)' }} />
            <h3 className="sandbox-title" style={{ fontSize: '0.85rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', margin: '0' }}>
              Interactive Simulation Workspace: {projects.find(p => p.id === activeSimulator).title}
            </h3>
          </div>

          {/* 1. Quantum Fraud Simulator View */}
          {activeSimulator === 'fraud' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p className="sandbox-text-desc" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: '0' }}>
                Compare classical Random Forest execution times against high-dimension IBM Qiskit Simulator circuits.
              </p>
              
              <div className="sandbox-controls">
                <button
                  disabled={fraudSimRunning}
                  onClick={runFraudSimulation}
                  className="btn-cyber-shimmer"
                  style={{ width: 'fit-content' }}
                >
                  {fraudSimRunning ? <RefreshCw size={14} className="animate-spin" /> : <Play size={14} />}
                  <span>{fraudSimRunning ? 'Simulating Quantum Circuit...' : 'Trigger Fraud Check'}</span>
                </button>
              </div>

              {fraudResult && (
                <div className="sandbox-results-grid animate-fadeIn" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '0.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="sandbox-result-card" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px' }}>
                      <span className="sandbox-card-title" style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-dark)', display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Classical ML (XGBoost)</span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.75rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Accuracy:</span><span style={{ color: '#ef4444', fontWeight: '700' }}>{fraudResult.classical.accuracy}%</span></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Recall:</span><span style={{ color: '#ef4444', fontWeight: '700' }}>{fraudResult.classical.recall}%</span></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Compute:</span><span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{fraudResult.classical.timeMs}ms</span></div>
                      </div>
                    </div>

                    <div className="sandbox-result-card glow-card" style={{ background: 'rgba(245, 158, 11, 0.05)', border: '1px solid var(--accent-gold)', padding: '1rem', borderRadius: '8px' }}>
                      <span className="sandbox-card-title" style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem', fontWeight: '700' }}>Quantum ML (Hybrid QNN)</span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.75rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Accuracy:</span><span style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>{fraudResult.quantum.accuracy}%</span></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Recall:</span><span style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>{fraudResult.quantum.recall}%</span></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Compute:</span><span style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>{fraudResult.quantum.timeMs}ms</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="sandbox-result-card" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px', fontSize: '0.75rem' }}>
                    <span className="sandbox-verdict-title" style={{ color: 'var(--accent-gold)', fontWeight: '700', display: 'block', marginBottom: '0.25rem' }}>Engine Verdict</span>
                    <p className="sandbox-verdict-text" style={{ margin: '0', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{fraudResult.verdict}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. Market Matrix Simulator View */}
          {activeSimulator === 'market' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p className="sandbox-text-desc" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: '0' }}>
                Toggle tickers to check real-time simulated API pricing outputs and sentiment algorithms.
              </p>
              
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['NVDA', 'AAPL', 'BTC', 'TSLA'].map((stock) => (
                  <button
                    key={stock}
                    onClick={() => runMarketAnalysis(stock)}
                    className="about-nav-btn"
                    style={{ 
                      borderColor: selectedStock === stock ? 'var(--accent-gold)' : 'var(--glass-border)',
                      color: selectedStock === stock ? 'var(--accent-gold)' : 'var(--text-primary)'
                    }}
                  >
                    {stock}
                  </button>
                ))}
              </div>

              <div className="sandbox-results-grid animate-fadeIn" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '8px', fontSize: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Simulated Price:</span><span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>${marketMetrics.price.toFixed(2)}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Social Sentiment:</span><span style={{ fontWeight: '700', color: marketMetrics.sentiment.includes('Bullish') ? 'var(--accent-gold)' : '#ef4444' }}>{marketMetrics.sentiment}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Volatility Band:</span><span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{marketMetrics.volatility}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Engine Signal:</span><span style={{ fontWeight: '700', color: 'var(--accent-gold)' }}>{marketMetrics.signal}</span></div>
              </div>
            </div>
          )}

          {/* 3. Resume Extractor Simulator View */}
          {activeSimulator === 'resume' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p className="sandbox-text-desc" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: '0' }}>
                Edit the text description block below to analyze matches against key Data Science variables.
              </p>
              
              <textarea
                rows={3}
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                className="contact-form-input"
                style={{ resize: 'vertical', width: '100%', fontSize: '0.75rem', background: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', borderRadius: '6px', padding: '0.65rem', color: 'var(--text-primary)', outline: 'none' }}
              />

              <div className="sandbox-controls">
                <button
                  disabled={extracting}
                  onClick={runResumeExtraction}
                  className="btn-cyber-shimmer"
                  style={{ width: 'fit-content' }}
                >
                  {extracting ? <RefreshCw size={14} className="animate-spin" /> : <Play size={14} />}
                  <span>{extracting ? 'Parsing Terms...' : 'Calculate ATS Match Score'}</span>
                </button>
              </div>

              {extractedKeywords && (
                <div className="sandbox-results-grid animate-fadeIn" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '0.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1.5rem', alignItems: 'center', background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ textAlign: 'center', borderRight: '1px solid var(--glass-border)', paddingRight: '1rem' }}>
                      <span style={{ fontSize: '0.6rem', color: 'var(--text-dark)', textTransform: 'uppercase', display: 'block', fontWeight: '600' }}>ATS MATCH</span>
                      <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent-gold)', fontFamily: 'var(--font-display)' }}>{extractedKeywords.atsScore}%</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-dark)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem', fontWeight: '600' }}>Extracted Keywords</span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {extractedKeywords.keywords.map((kw, i) => (
                          <span key={i} style={{ background: 'rgba(245, 158, 11, 0.08)', color: 'var(--accent-gold)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.6rem', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px', fontSize: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: '700', display: 'block', marginBottom: '0.25rem' }}>Extracted Advice</span>
                    <p style={{ margin: '0', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{extractedKeywords.verdict}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectsSandbox;

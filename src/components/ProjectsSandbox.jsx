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
      icon: <Cpu size={24} style={{ color: 'var(--accent-cyan)' }} />
    },
    {
      id: 'market',
      title: 'MarketMatrix Dashboard',
      description: 'A financial predictive and descriptive analytics hub. Evaluates real-time asset pricing, user sentiment analysis, and machine learning signals to guide investment decisions and risk profiles.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Machine Learning', 'API Integration'],
      github: 'https://github.com/adityavats21/MarketMatrix',
      icon: <TrendingUp size={24} style={{ color: 'var(--accent-green)' }} />
    },
    {
      id: 'resume',
      title: 'Resume Keyword Extractor',
      description: 'An NLP tool built to scan resume documents against standard job descriptions, extracting relevant technical terms and calculating an ATS formatting / keyword compliance score.',
      tech: ['Python', 'Natural Language Processing', 'Regular Expressions', 'File Parsers', 'TKinter/Web Interface'],
      github: 'https://github.com/adityavats21/resume_keyword_extractor',
      icon: <SearchCode size={24} style={{ color: 'var(--accent-magenta)' }} />
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Project Cards Grid */}
      <div className="projects-grid">
        {projects.map((proj) => (
          <div 
            key={proj.id}
            className="project-card glass-panel"
          >
            <div className="project-top">
              <div className="project-card-header">
                <div className="project-icon-box">
                  {proj.icon}
                </div>
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-github-link"
                >
                  <Github size={20} />
                </a>
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>
            </div>

            <div className="project-bottom">
              {/* Tech Tags */}
              <div className="project-tags">
                {proj.tech.map((t, idx) => (
                  <span 
                    key={idx}
                    className="project-tag"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActiveSimulator(activeSimulator === proj.id ? null : proj.id)}
                className={`project-action-btn ${activeSimulator === proj.id ? 'active' : ''}`}
              >
                <Play size={12} />
                <span>{activeSimulator === proj.id ? 'Close Sandbox' : 'Run Sandbox'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Simulator Sandbox Container */}
      {activeSimulator && (
        <div className="sandbox-workspace glass-panel animate-fadeIn">
          <div className="sandbox-header">
            <Sparkles size={18} style={{ color: 'var(--accent-cyan)' }} />
            <h3 className="sandbox-title">
              Interactive Simulation Workspace: {projects.find(p => p.id === activeSimulator).title}
            </h3>
          </div>

          {/* 1. Quantum Fraud Simulator View */}
          {activeSimulator === 'fraud' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p className="sandbox-text-desc">
                Compare classical Random Forest execution times against high-dimension IBM Qiskit Simulator circuits.
              </p>
              
              <div className="sandbox-controls">
                <button
                  disabled={fraudSimRunning}
                  onClick={runFraudSimulation}
                  className="btn-cyber"
                >
                  {fraudSimRunning ? <RefreshCw size={14} className="animate-spin" /> : <Play size={14} />}
                  <span>{fraudSimRunning ? 'Simulating Quantum Circuit...' : 'Trigger Fraud Check'}</span>
                </button>
              </div>

              {fraudResult && (
                <div className="sandbox-results-grid animate-fadeIn">
                  <div className="sandbox-result-card">
                    <span className="sandbox-card-title">Classical ML (XGBoost)</span>
                    <div className="sandbox-metric-row"><span>Accuracy:</span><span style={{ color: '#ef4444' }}>{fraudResult.classical.accuracy}%</span></div>
                    <div className="sandbox-metric-row"><span>Recall:</span><span style={{ color: '#ef4444' }}>{fraudResult.classical.recall}%</span></div>
                    <div className="sandbox-metric-row"><span>Compute Time:</span><span className="sandbox-metric-time">{fraudResult.classical.timeMs}ms</span></div>
                  </div>

                  <div className="sandbox-result-card glow-card">
                    <span className="sandbox-card-title" style={{ color: 'var(--accent-cyan)' }}>Quantum ML (Hybrid QNN)</span>
                    <div className="sandbox-metric-row"><span>Accuracy:</span><span className="hud-val-cyan">{fraudResult.quantum.accuracy}%</span></div>
                    <div className="sandbox-metric-row"><span>Recall:</span><span className="hud-val-cyan">{fraudResult.quantum.recall}%</span></div>
                    <div className="sandbox-metric-row"><span>Compute Time:</span><span className="hud-val-yellow">{fraudResult.quantum.timeMs}ms</span></div>
                  </div>

                  <div className="sandbox-result-card">
                    <span className="sandbox-verdict-title">Engine Verdict</span>
                    <p className="sandbox-verdict-text">{fraudResult.verdict}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. Market Matrix Simulator View */}
          {activeSimulator === 'market' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p className="sandbox-text-desc">
                Click an asset to run sentiment models and generate dynamic trading signals.
              </p>

              <div className="sandbox-controls" style={{ flexWrap: 'wrap' }}>
                {['NVDA', 'AAPL', 'BTC', 'TSLA'].map((stock) => (
                  <button
                    key={stock}
                    onClick={() => runMarketAnalysis(stock)}
                    className={`sandbox-stock-btn ${selectedStock === stock ? 'active' : ''}`}
                  >
                    {stock}
                  </button>
                ))}
              </div>

              <div className="sandbox-results-grid-4">
                <div className="sandbox-result-card">
                  <span className="sandbox-card-title">Price Asset</span>
                  <span className="sandbox-stock-val">${marketMetrics.price.toLocaleString()}</span>
                </div>
                <div className="sandbox-result-card">
                  <span className="sandbox-card-title">Market Sentiment</span>
                  <span className={`sandbox-stock-val ${
                    marketMetrics.sentiment.includes('Bullish') ? 'sentiment-val-green' : marketMetrics.sentiment === 'Neutral' ? 'sentiment-val-yellow' : 'sentiment-val-red'
                  }`}>{marketMetrics.sentiment}</span>
                </div>
                <div className="sandbox-result-card">
                  <span className="sandbox-card-title">Volatility Index</span>
                  <span className="sandbox-stock-val">{marketMetrics.volatility}</span>
                </div>
                <div className="sandbox-result-card">
                  <span className="sandbox-card-title">Signal Action</span>
                  <span className="sandbox-stock-val" style={{ color: 'var(--accent-cyan)', textShadow: '0 0 5px rgba(0, 243, 255, 0.4)' }}>{marketMetrics.signal}</span>
                </div>
              </div>
            </div>
          )}

          {/* 3. Resume Extractor Simulator View */}
          {activeSimulator === 'resume' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p className="sandbox-text-desc">
                Paste your skills draft or edit the text below to analyze the keyword parser alignment score.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <textarea
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  rows={3}
                  className="sandbox-textarea"
                ></textarea>
                <button
                  disabled={extracting}
                  onClick={runResumeExtraction}
                  className="btn-cyber"
                  style={{ color: 'var(--accent-magenta)', borderColor: 'var(--accent-magenta)', width: 'fit-content' }}
                >
                  {extracting ? <RefreshCw size={14} className="animate-spin" /> : <SearchCode size={14} />}
                  <span>{extracting ? 'Analyzing Resume Document...' : 'Run Keyword Parser'}</span>
                </button>
              </div>

              {extractedKeywords && (
                <div className="sandbox-resume-grid animate-fadeIn">
                  <div className="sandbox-result-card">
                    <span className="sandbox-card-title">Extracted Core Keywords</span>
                    <div className="sandbox-keyword-list">
                      {extractedKeywords.keywords.length > 0 ? (
                        extractedKeywords.keywords.map((kw, idx) => (
                          <span key={idx} className="sandbox-keyword-badge">
                            {kw}
                          </span>
                        ))
                      ) : (
                        <span className="sandbox-verdict-text">No matching keywords parsed.</span>
                      )}
                    </div>
                  </div>

                  <div className="sandbox-result-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
                    <div>
                      <span className="sandbox-card-title">ATS Optimization Score</span>
                      <div className="sandbox-ats-score-container">
                        <span className="sandbox-ats-val">{extractedKeywords.atsScore}%</span>
                        <div className="sandbox-ats-bar-track">
                          <div 
                            className="sandbox-ats-bar-fill" 
                            style={{ width: `${extractedKeywords.atsScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="sandbox-verdict-box">
                      <p className="sandbox-verdict-text" style={{ color: 'var(--text-primary)' }}>
                        {extractedKeywords.verdict}
                      </p>
                    </div>
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

import '../styles/components/pages.css'

function ProductResearchDoc() {
  return (
    <main className="page">
      <div className="page-container">
        <div className="page-card">
          <header className="page-header">
            <div className="page-header-content">
              <h1 className="page-title">Product Research Document</h1>
              <p className="page-subtitle">
                Comprehensive analysis and findings from our product research initiative.
              </p>
            </div>
            <div className="page-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
          </header>

          <div className="page-body">
            <p>
              This document outlines the key findings, methodologies, and recommendations 
              derived from our extensive product research. The research aims to identify 
              market opportunities, user needs, and competitive landscape analysis.
            </p>

            <div className="content-section">
              <h2 className="section-title">Executive Summary</h2>
              <p>
                Our research reveals significant opportunities in the target market segment. 
                Key insights include user behavior patterns, pain points in current solutions, 
                and potential areas for innovation and differentiation.
              </p>
            </div>

            <div className="content-section">
              <h2 className="section-title">Research Methodology</h2>
              <p>
                The research was conducted using a combination of qualitative and quantitative 
                methods, including user interviews, surveys, competitive analysis, and market 
                trend evaluation.
              </p>
            </div>

            <div className="content-section">
              <h2 className="section-title">Key Findings</h2>
              <div className="placeholder-content">
                <div className="placeholder-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <p className="placeholder-text">Detailed findings will be added here</p>
              </div>
            </div>

            <div className="content-section">
              <h2 className="section-title">Recommendations</h2>
              <div className="placeholder-content">
                <div className="placeholder-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <p className="placeholder-text">Strategic recommendations will be added here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductResearchDoc

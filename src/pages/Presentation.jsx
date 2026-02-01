import '../styles/components/pages.css'

function Presentation() {
  return (
    <main className="page">
      <div className="page-container">
        <div className="page-card">
          <header className="page-header">
            <div className="page-header-content">
              <h1 className="page-title">Presentation</h1>
              <p className="page-subtitle">
                Visual presentation of our product research findings and strategic recommendations.
              </p>
            </div>
            <div className="page-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
          </header>

          <div className="page-body">
            <p>
              This presentation summarizes the key insights from our product research 
              in a visual format, designed for stakeholder meetings and team presentations.
            </p>

            <div className="content-section">
              <h2 className="section-title">Slide Preview</h2>
              <div className="slides-grid">
                <div className="slide-card">
                  <span className="slide-number">01 / Title Slide</span>
                </div>
                <div className="slide-card">
                  <span className="slide-number">02 / Agenda</span>
                </div>
                <div className="slide-card">
                  <span className="slide-number">03 / Market Overview</span>
                </div>
                <div className="slide-card">
                  <span className="slide-number">04 / User Research</span>
                </div>
                <div className="slide-card">
                  <span className="slide-number">05 / Key Findings</span>
                </div>
                <div className="slide-card">
                  <span className="slide-number">06 / Recommendations</span>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2 className="section-title">Download Options</h2>
              <div className="placeholder-content">
                <div className="placeholder-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <p className="placeholder-text">Download links will be added here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Presentation

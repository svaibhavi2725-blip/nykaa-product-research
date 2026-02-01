import '../styles/components/pages.css'

function ExplainerVideo() {
  return (
    <main className="page">
      <div className="page-container">
        <div className="page-card">
          <header className="page-header">
            <div className="page-header-content">
              <h1 className="page-title">Explainer Video</h1>
              <p className="page-subtitle">
                A concise video walkthrough of our product research and key insights.
              </p>
            </div>
            <div className="page-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </header>

          <div className="page-body">
            <p>
              Watch our explainer video for a quick overview of the research findings, 
              methodology, and strategic recommendations presented in an engaging visual format.
            </p>

            <div className="content-section">
              <h2 className="section-title">Video</h2>
              <div className="video-container">
                <div className="video-placeholder">
                  <div className="video-play-button">
                    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <p className="placeholder-text">Video will be embedded here</p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2 className="section-title">Video Details</h2>
              <div className="placeholder-content">
                <div className="placeholder-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <p className="placeholder-text">Duration and chapter information will be added here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ExplainerVideo

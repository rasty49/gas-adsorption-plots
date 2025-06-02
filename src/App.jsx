import React from 'react'
import Exercise1Plots from './components/Exercise1Plots'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* Navigation Header */}
      <nav style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
        marginBottom: '0',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            color: 'white',
            margin: 0,
            fontSize: '1.8em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            🔬 Physics Visualizations
          </h1>
          <div style={{
            display: 'flex',
            gap: '15px'
          }}>
            <span style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '25px',
              fontWeight: '600',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              Gas Adsorption (Current)
            </span>
            <a 
              href="/statistical-physics.html"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#2c3e50',
                padding: '10px 20px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'white';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Statistical Physics →
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Exercise1Plots />
    </div>
  )
}

export default App 
import Navbar from '../components/Navbar';
import './LandingPage.css';
import { ShieldCheck, Zap, PiggyBank, Smile, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container">
        <div className="hero">
          <h1>The World's First <br/> AI-Native Insurance Carrier</h1>
          <h2>
            We're deleting information asymmetry to deliver transparency, speed, and structurally lower costs.
          </h2>
          <div style={{ margin: '2rem 0', color: 'var(--color-primary-dark)', fontWeight: 500 }}>
            <span style={{ background: '#E0F2F1', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem' }}>
              🚀 Reinventing insurance from the core
            </span>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">
              Get an Instant Quote
            </button>
            <button style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Our Mission <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '0.5rem' }}>The Gana Thesis</h3>
            <h2 style={{ fontSize: '2.5rem' }}>Radically Leaner. Fundamentally Better.</h2>
            <p style={{ maxWidth: '700px', margin: '1rem auto', color: 'var(--color-text-light)' }}>
              Legacy carriers employ tens of thousands of humans for repetitive tasks. We use AI to automate the core, passing the savings directly to you.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck size={28} />
              </div>
              <div className="feature-title">Zero Asymmetry</div>
              <div className="feature-desc">
                We've deleted legal opacity. Policies are written in plain English so you know exactly what risks are covered.No hidden exclusions.
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={28} />
              </div>
              <div className="feature-title">AI-Native Speed</div>
              <div className="feature-desc">
                Automated end-to-end. From underwriting to claims handling, our software core moves at the speed of code, not paperwork.
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <PiggyBank size={28} />
              </div>
              <div className="feature-title">Structurally Cheaper</div>
              <div className="feature-desc">
                Minimizing human intervention allows for 25-30% lower operating costs. We return that value to you in lower premiums.
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Smile size={28} />
              </div>
              <div className="feature-title">B2C Mass Market</div>
              <div className="feature-desc">
                Starting with US Auto Insurance. Standardized coverage, high volume, fast learning loops. Expanding to Health & Home next.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Market Section */}
      <section className="container target-section">
        <div className="target-content">
          <h2 style={{ fontSize: '3rem', color: 'var(--color-primary-dark)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Solving the <br/>
            <span style={{ color: 'var(--color-accent-hover)' }}>Trust Gap</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
            Traditional policies are hard to compare and harder to understand. This leads to low trust and poor user experiences. Gana is building the first transparent, software-driven carrier for the modern generation.
          </p>
          <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)' }}></div>
              Crystal Clear Coverage
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)' }}></div>
              Automated Compliance
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)' }}></div>
              Data-Driven Underwriting
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)' }}></div>
              Instant Resolution
            </li>
          </ul>
        </div>
        <div className="target-visual">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '5rem', fontWeight: 800, opacity: 0.2 }}>US</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>Auto Insurance</div>
            <div style={{ fontSize: '1rem', opacity: 0.8, marginTop: '1rem' }}>Our Optimal Entry Point</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col" style={{ maxWidth: '300px' }}>
              <div className="logo" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                Gana
              </div>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                AI-native insurance for the modern world. Speed, transparency, and savings.
              </p>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li>Auto Insurance</li>
                <li>Health</li>
                <li>Home</li>
                <li>Claims</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Licenses</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            &copy; 2026 Gana Insurance Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

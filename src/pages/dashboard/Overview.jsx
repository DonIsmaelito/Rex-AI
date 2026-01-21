import { Shield, TrendingUp, AlertTriangle } from 'lucide-react';

const Overview = () => {
  return (
    <div>
      <header className="dashboard-header">
        <h1 className="header-title">Good afternoon, John</h1>
        <button className="btn-primary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}>+ New Quote</button>
      </header>
      
      <div className="dashboard-grid">
        <div className="card">
          <div className="card-title">
            Active Policies
            <Shield size={20} color="var(--color-primary)" />
          </div>
          <div className="stat-value">2</div>
          <div className="stat-label">Auto • Home</div>
        </div>
        
        <div className="card">
          <div className="card-title">
            Savings this Year
            <TrendingUp size={20} color="var(--color-success)" />
          </div>
          <div className="stat-value">$450</div>
          <div className="stat-label">vs. traditional carriers</div>
        </div>
        
        <div className="card">
          <div className="card-title">
            Open Claims
            <AlertTriangle size={20} color="#F59E0B" />
          </div>
          <div className="stat-value">0</div>
          <div className="stat-label">All good!</div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#374151' }}>Quick Actions</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div className="card" style={{ cursor: 'pointer', textAlign: 'center', padding: '2rem' }}>
            <div style={{ background: '#E0F2F1', width: 50, height: 50, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--color-primary)' }}>
              <Shield size={24} />
            </div>
            <h4 style={{ marginBottom: '0.5rem' }}>View ID Card</h4>
            <p style={{ fontSize: '0.8rem', color: '#6B7280' }}>Access your proof of insurance</p>
          </div>
          
          <div className="card" style={{ cursor: 'pointer', textAlign: 'center', padding: '2rem' }}>
            <div style={{ background: '#E0F2F1', width: 50, height: 50, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--color-primary)' }}>
              <AlertTriangle size={24} />
            </div>
            <h4 style={{ marginBottom: '0.5rem' }}>File a Claim</h4>
            <p style={{ fontSize: '0.8rem', color: '#6B7280' }}>Start a new claim in minutes</p>
          </div>
          
           <div className="card" style={{ cursor: 'pointer', textAlign: 'center', padding: '2rem' }}>
            <div style={{ background: '#E0F2F1', width: 50, height: 50, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--color-primary)' }}>
              <TrendingUp size={24} />
            </div>
            <h4 style={{ marginBottom: '0.5rem' }}>Review Coverage</h4>
            <p style={{ fontSize: '0.8rem', color: '#6B7280' }}>Check if you're fully protected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

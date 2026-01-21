import { CheckCircle } from 'lucide-react';

const Claims = () => {
  return (
    <div>
      <header className="dashboard-header">
        <h1 className="header-title">Claims History</h1>
        <button className="btn-primary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}>+ File New Claim</button>
      </header>
      
      <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ background: '#F3F4F6', width: 80, height: 80, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#9CA3AF' }}>
          <CheckCircle size={40} />
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#374151' }}>No Claims Yet</h3>
        <p style={{ color: '#6B7280', maxWidth: '400px', margin: '0 auto', lineHeight: '1.6' }}>
          You haven't filed any claims yet. When you do, our <strong>AI-native claims engine</strong> handles 60% of cases instantly without human intervention. Fast, fair, and transparent.
        </p>
      </div>
    </div>
  );
};

export default Claims;

import { Car, Home } from 'lucide-react';

const Policies = () => {
  return (
    <div>
      <header className="dashboard-header">
        <div>
          <h1 className="header-title">Your Policies</h1>
          <p className="text-gray-500 text-sm mt-1">Written in plain English. No hidden exclusions.</p>
        </div>
        <button className="btn-primary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}>+ Add Policy</button>
      </header>
      
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ background: '#E0F7FA', padding: '1rem', borderRadius: '12px', color: 'var(--color-primary)' }}>
              <Car size={32} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>2024 Tesla Model Y</h3>
                <span style={{ fontSize: '0.7rem', background: '#DCFCE7', color: '#166534', padding: '0.2rem 0.5rem', borderRadius: '12px', fontWeight: 600 }}>AI VERIFIED COVERAGE</span>
              </div>
              <p style={{ color: '#6B7280' }}>Policy #GN-8392-AUTO • Active</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>$124.50<span style={{ fontSize: '0.8rem', fontWeight: 400, color: '#6B7280' }}>/mo</span></div>
            <button style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.5rem' }}>View Plain English Terms</button>
          </div>
        </div>
        
        <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ background: '#E8F5E9', padding: '1rem', borderRadius: '12px', color: '#2E7D32' }}>
              <Home size={32} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>1403 Evergreen Terrace</h3>
              <p style={{ color: '#6B7280' }}>Policy #GN-1102-HOME • Active</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>$85.00<span style={{ fontSize: '0.8rem', fontWeight: 400, color: '#6B7280' }}>/mo</span></div>
            <button style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.5rem' }}>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;

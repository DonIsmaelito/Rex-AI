import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div style={{ position: 'absolute', top: '2rem', left: '2rem', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <ArrowLeft color="white" size={24} />
        </div>
        <div className="login-branding">
          <div className="login-logo">Gana</div>
          <div className="login-tagline">Insurance for the<br/>21st Century</div>
        </div>
      </div>
      
      <div className="login-right">
        <div className="login-form-container">
          <h2 className="login-heading">Welcome back</h2>
          
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Email address</label>
              <input type="email" className="form-input" placeholder="you@example.com" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" className="form-input" placeholder="••••••••" required />
            </div>
            
            <button type="submit" className="btn-login">Sign In</button>
          </form>
          
          <div className="divider">
            <span>or continue with</span>
          </div>
          
          <button className="btn-google">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21-1.19-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          
          <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#6B7280', fontSize: '0.9rem' }}>
            Don't have an account? <span style={{ color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer' }}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

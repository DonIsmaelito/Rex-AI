import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: '0 2rem'
    }}>
      <div className="logo" style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-primary)', letterSpacing: '-1px' }}>
        Gana
      </div>
      <div>
        <Link to="/login" style={{
          textDecoration: 'none',
          color: 'var(--color-primary)',
          fontWeight: '600',
          padding: '0.8rem 1.5rem',
          border: '2px solid var(--color-primary)',
          borderRadius: '50px',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.background = 'var(--color-primary)';
          e.target.style.color = '#fff';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = 'var(--color-primary)';
        }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

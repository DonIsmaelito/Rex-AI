import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, AlertCircle, Bot, LogOut } from 'lucide-react';
import './Dashboard.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">Gana</div>
        
        <nav className="nav-links">
          <NavLink to="/dashboard" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={20} />
            Overview
          </NavLink>
          <NavLink to="/dashboard/policies" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FileText size={20} />
            Policies
          </NavLink>
          <NavLink to="/dashboard/claims" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <AlertCircle size={20} />
            Claims
          </NavLink>
          <NavLink to="/dashboard/copilot" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Bot size={20} />
            AI Co-pilot
          </NavLink>
        </nav>
        
        <div className="user-profile">
          <div className="user-avatar">JD</div>
          <div className="user-info">
            <span className="user-name">John Doe</span>
            <span className="user-role">Member</span>
          </div>
          <div style={{ marginLeft: 'auto', cursor: 'pointer' }}>
            <NavLink to="/" style={{ color: 'white' }}><LogOut size={16} /></NavLink>
          </div>
        </div>
      </aside>
      
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

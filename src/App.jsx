import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Policies from './pages/dashboard/Policies';
import Claims from './pages/dashboard/Claims';
import Copilot from './pages/dashboard/Copilot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="policies" element={<Policies />} />
          <Route path="claims" element={<Claims />} />
          <Route path="copilot" element={<Copilot />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

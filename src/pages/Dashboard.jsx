import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Welcome, {user?.email || "Guest"} 🎉</h2>
      <p>This is your dashboard. You can later add orders, settings, etc.</p>
      <button onClick={handleLogout} className="btn btn-danger mt-3">Logout</button>
    </div>
  );
}

export default Dashboard;

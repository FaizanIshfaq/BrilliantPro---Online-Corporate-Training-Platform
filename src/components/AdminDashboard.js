import React from 'react';
import Navbar from './Navbar';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <p>Overview of course and user management</p>
      <Navbar />
    </div>
  );
};

export default AdminDashboard;

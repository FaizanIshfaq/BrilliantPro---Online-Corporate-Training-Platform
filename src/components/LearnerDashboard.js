import React from 'react';
import Navbar from './LearnerNavbar';
import './AdminDashboard.css';

const LearnerDashboard = () => {
  return (
    <div className="learner-dashboard">
      <h2>learner Dashboard</h2>
      <p>Overview of course and learner management</p>
      <Navbar/>
    </div>
  );
};

export default LearnerDashboard;

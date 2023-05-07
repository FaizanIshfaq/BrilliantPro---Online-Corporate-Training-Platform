import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/courses">Course Management</Link></li>
        <li><Link to="/users">User Management</Link></li>
        <li><Link to="/learner">Learner Dashboard</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;

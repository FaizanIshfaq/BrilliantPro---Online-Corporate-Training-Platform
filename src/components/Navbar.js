import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/courses">Courses</Link>
        </li>
        <li>
          <Link to="/admin/materials">Materials</Link>
        </li>
        <li>
          <Link to="/admin/assessments">Assessments</Link>
        </li>
        <li>
          <Link to="/admin/learners">Learners</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

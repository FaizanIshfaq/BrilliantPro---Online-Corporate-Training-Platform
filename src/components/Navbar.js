import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
return (
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
<div className="navbar navbar-expand-sm bg-dark navbar-dark">
<Link className="navbar-brand" to="/admin/dashboard">
Dashboard
</Link>
<button
       className="navbar-toggler"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#navbarNav"
       aria-controls="navbarNav"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav">
<li className="nav-item">
<Link className="nav-link" to="/admin/courses">
Courses
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/admin/materials">
Materials
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/admin/assessments">
Assessments
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/admin/learners">
Learners
</Link>
</li>
</ul>
</div>
</div>
</nav>
);
};

export default Navbar;
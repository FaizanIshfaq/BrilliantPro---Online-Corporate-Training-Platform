import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
// import '../App.css'

function LoginPage()
{

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="navbar navbar-expand-sm bg-dark navbar-dark">
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
    <Link className="nav-link" to="/admin/login">
    Admin login
    </Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/admin/register">
    Admin Register
    </Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/learner/login">
    learner login
    </Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/learner">
    learner Register
    </Link>
    </li>
    </ul>
    </div>
    </div>
    </nav>
    );

  // return (
  //   <div>
  //     <h2>Main Login Page</h2>
  //     {/* <form> */}
  //       <Link to="/admin/login">
  //         <button type="submit">Admin login</button>
  //       </Link>
  //       <Link to="/admin/register">
  //         <button type="submit" >Admin Register</button>
  //       </Link>
  //       <Link to="/admin">
  //         <button type="submit" >Admin Dashboard</button>
  //       </Link>
  //       <Link to="/learner/login">
  //         <button type="submit" >learner login</button>
  //       </Link>
  //       <Link to="/learner">
  //         <button type="submit" >learner Dashboard</button>
  //       </Link>

  //     {/* </form> */}
  //   </div >
  // );
}

export default LoginPage;

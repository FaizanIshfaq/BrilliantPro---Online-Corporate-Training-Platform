import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
// import '../App.css'

function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <Link to="/learner">
          <button type="submit">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;

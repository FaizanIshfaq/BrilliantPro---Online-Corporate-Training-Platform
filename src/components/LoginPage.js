import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
// import '../App.css'

function LoginPage()
{



  return (
    <div>
      <h2>Main Login Page</h2>
      <form>
        <Link to="/admin/login">
          <button type="submit">Admin</button>
        </Link>
        <Link to="/admin/register">
          <button type="submit" >Admin Register</button>
        </Link>

      </form>
    </div >
  );
}

export default LoginPage;

import React from 'react';

const RegistrationPage = () => {
  return (
    <div>
      <h2>Registration Page</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
    );
};

export default RegistrationPage;

// Path: src\components\RegistrationPage.js


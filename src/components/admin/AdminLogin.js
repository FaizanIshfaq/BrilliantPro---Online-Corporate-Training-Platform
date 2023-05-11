import React, { Component } from "react";
import axios from "axios";

export default class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
      error: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    axios
      .post("http://localhost:4000/admin/login", { email, password })
      .then((res) => {
        // Store login status in session storage
        sessionStorage.setItem("adminLoggedIn", true);
        // Redirect to admin dashboard
        this.props.history.push("/admin/dashboard");
      })
      .catch((error) => {
        this.setState({
          error: "Invalid email or password",
        });
      });
  };

  render() {
    return (
      <div>
        <h2>Admin Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          {this.state.error && <div className="error">{this.state.error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

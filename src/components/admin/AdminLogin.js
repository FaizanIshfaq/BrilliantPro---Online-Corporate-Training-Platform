import React,{ Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class AdminLogin extends Component
{
  constructor(props)
  {
    super(props);
    console.log("Props: ",props)
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleInputChange = (event) =>
  {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
      error: "",
    });
  };

  handleSubmit = (event) =>
  {
    event.preventDefault();
    console.log("State : ",this.state)

    axios
      .post("http://localhost:4000/admins/login",this.state)
      .then((res) =>
      {
        console.log('REturn from Server : ',res.data);
        // here add logic to move to next page
      })
      .catch((error) =>
      {
        console.log("Error: ",error.response.data);
        if (error.response.status === 400)
        {
          alert("Invalid Credentials")
        }
      });
  };

  render()
  {
    return (
      <div>
        <h2>Admin Login</h2>
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
        <Link>
          <button type="submit" onClick={this.handleSubmit}>Login</button>
        </Link>

      </div>
    );
  }
}

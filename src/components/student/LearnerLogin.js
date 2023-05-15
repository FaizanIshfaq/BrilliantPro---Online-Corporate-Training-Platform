import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const LearnerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/students/login",
        {
          email,
          password,
        }
      );

      console.log("Response from Server: ", response.data);

      if (response.status === 200) {
        // Successful login, navigate to "/dashboard" route
        navigate("/learner");
      } else {
        // Login failed, display error message
        setError("Invalid credentials");
      }
    } catch (error) {
      console.log("Error: ", error.response.data);
      if (error.response.status === 400) {
        setError("Invalid credentials");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mx-auto mt-5">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Student Login</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerLogin;

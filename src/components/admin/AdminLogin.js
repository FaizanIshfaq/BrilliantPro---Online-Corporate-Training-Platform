

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import "./AdminLogin.css";

const AdminLogin = () => {
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
        "http://localhost:4000/admins/login",
        {
          email,
          password,
        }
      );

      console.log("Response from Server: ", response.data);

      if (response.status === 200) {
        // Successful login, navigate to "/admin" route
        navigate("/admin");
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
              <h2 className="text-center">Admin Login</h2>
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

export default AdminLogin;




// import React,{ Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default class AdminLogin extends Component
// {
//   constructor(props)
//   {
//     super(props);
//     console.log("Props: ",props)
//     this.state = {
//       email: "",
//       password: "",
//       error: "",
//     };
//   }

//   handleInputChange = (event) =>
//   {
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;

//     this.setState({
//       [name]: value,
//       error: "",
//     });
//   };

//   handleSubmit = (event) =>
//   {
//     event.preventDefault();
//     console.log("State : ",this.state)

//     axios
//       .post("http://localhost:4000/admins/login",this.state)
//       .then((res) =>
//       {
//         console.log('REturn from Server : ',res.data);
//         // here add logic to move to next page
//       })
//       .catch((error) =>
//       {
//         console.log("Error: ",error.response.data);
//         if (error.response.status === 400)
//         {
//           alert("Invalid Credentials")
//         }
//       });
//   };

//   render()
//   {
//     return (
//       <div>
//         <h2>Admin Login</h2>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={this.state.email}
//             onChange={this.handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={this.state.password}
//             onChange={this.handleInputChange}
//             required
//           />
//         </div>
//         {this.state.error && <div className="error">{this.state.error}</div>}
//         <Link>
//           <button type="submit" onClick={this.handleSubmit}>Login</button>
//         </Link>

//       </div>
//     );
//   }
// }

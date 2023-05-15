


import React,{ useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

const AdminRegister = () => {
  const [formData,setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { email,password,confirmPassword } = formData;

  const onChange = e => setFormData({ ...formData,[e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const dataToSend = {
        email: formData.email,
        password: formData.password
      }
      console.log("dataToSend: ",dataToSend);
      const res = await axios.post('http://localhost:4000/admins/register',dataToSend,config);
      console.log(res.data);
    } catch (err) {
      if (err.response.status === 400) {
        alert("Email Already Exists")
      }
      console.log(err.response.data);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={onSubmit}>
            <h1 className="text-center mb-4">Admin Registration</h1>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" value={email} onChange={onChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={password} onChange={onChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" className="form-control" name="confirmPassword" value={confirmPassword} onChange={onChange} required />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;





// import React,{ useState } from 'react';
// import axios from 'axios';

// const AdminRegister = () =>
// {
//   const [formData,setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const { email,password,confirmPassword } = formData;

//   const onChange = e => setFormData({ ...formData,[e.target.name]: e.target.value });

//   const onSubmit = async e =>
//   {
//     e.preventDefault();

//     if (password !== confirmPassword)
//     {
//       console.log('Passwords do not match');
//       return;
//     }

//     try
//     {
//       const config = {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       };

//       const dataToSend = {
//         email: formData.email,
//         password: formData.password
//       }
//       console.log("dataToSend: ",dataToSend);
//       const res = await axios.post('http://localhost:4000/admins/register',dataToSend,config);
//       console.log(res.data);
//     } catch (err)
//     {
//       if (err.response.status === 400)
//       {
//         alert("Email Already Exsists")
//       }
//       console.log(err.response.data);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <h1>Admin Registration</h1>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" value={email} onChange={onChange} required />
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input type="password" name="password" value={password} onChange={onChange} required />
//       </div>
//       <div>
//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input type="password" name="confirmPassword" value={confirmPassword} onChange={onChange} required />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default AdminRegister;

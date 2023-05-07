import React,{ Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EditStudent extends Component
{
  constructor(props)
  {
    super(props);
    const url = window.location.href;
    const segments = url.split('/');
    const stdId = segments[segments.length - 1];
    console.log("stdId",stdId)
    this.state = {
      name: '',
      email: '',
      rollno: '',
      id: stdId
    };
  }

  componentDidMount()
  {

    axios.get('http://localhost:4000/students/edit-student/' + this.state.id)
      .then(res =>
      {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno
        });
      })
      .catch((error) =>
      {
        console.log(error);
      });
  }

  onChangeStudentName = (e) =>
  {
    this.setState({ name: e.target.value });
  };

  onChangeStudentEmail = (e) =>
  {
    this.setState({ email: e.target.value });
  };

  onChangeStudentRollno = (e) =>
  {
    this.setState({ rollno: e.target.value });
  };

  onSubmit = (e) =>
  {
    e.preventDefault();

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };

    axios.put('http://localhost:4000/students/update-student/' + this.state.id,studentObject)
      .then((res) =>
      {
        console.log(res.data);
        alert("Student successfully updated")
      })
      .catch((error) =>
      {
        console.log(error);
      });

  };


  render()
  {
    return (
      <div className="form-wrapper">
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeStudentName} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </div>

        <div className="form-group">
          <label>Roll No</label>
          <input type="text" className="form-control" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
        </div>
        <button className="btn btn-danger btn-block" onClick={this.onSubmit} type="submit" >
          Update Student
        </button>
      </div>
    );
  }
}
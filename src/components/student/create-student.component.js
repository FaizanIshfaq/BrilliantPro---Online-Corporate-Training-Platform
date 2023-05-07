import React, { Component } from "react";
import axios from 'axios';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };
    axios.post('http://localhost:4000/students/create-student', studentObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', email: '', rollno: '' })
  }

  render() {
    return (
      <div>
        <h3>Create New Student</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeStudentName}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input type="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeStudentEmail}
            />
          </div>
          <div className="form-group">
            <label>Roll No: </label>
            <input type="text"
              className="form-control"
              value={this.state.rollno}
              onChange={this.onChangeStudentRollno}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Create Student</button>
          </div>
        </form>
      </div>
    );
  }
}

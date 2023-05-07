import React, { Component } from "react";
import axios from 'axios';

export default class CreateCourse extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeCourseName = this.onChangeCourseName.bind(this);
    this.onChangeCourseCode = this.onChangeCourseCode.bind(this);
    this.onChangeCourseCredit = this.onChangeCourseCredit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      code: '',
      credit: ''
    }
  }

  onChangeCourseName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeCourseCode(e) {
    this.setState({ code: e.target.value })
  }

  onChangeCourseCredit(e) {
    this.setState({ credit: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const courseObject = {
      name: this.state.name,
      code: this.state.code,
      credit: this.state.credit
    };
    axios.post('http://localhost:4000/courses/create-course', courseObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', code: '', credit: '' })
  }

  render() {
    return (
      <div>
        <h3>Create New Course</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeCourseName}
            />
          </div>
          <div className="form-group">
            <label>Code: </label>
            <input type="text"
              className="form-control"
              value={this.state.code}
              onChange={this.onChangeCourseCode}
            />
          </div>
          <div className="form-group">
            <label>Credit: </label>
            <input type="number"
              className="form-control"
              value={this.state.credit}
              onChange={this.onChangeCourseCredit}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Create Course</button>
          </div>
        </form>
      </div>
    );
  }
}

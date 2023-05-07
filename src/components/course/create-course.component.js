import React, { Component } from "react";
import axios from 'axios';

export default class CreateCourse extends Component {
  constructor(props) {
    super(props);

    this.onChangeCourseName = this.onChangeCourseName.bind(this);
    this.onChangeCourseDescription = this.onChangeCourseDescription.bind(this);
    this.onChangeInstructor = this.onChangeInstructor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
      instructor: '',
      students: []
    };
  }

  onChangeCourseName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeCourseDescription(e) {
    this.setState({ description: e.target.value });
  }

  onChangeInstructor(e) {
    this.setState({ instructor: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const courseObject = {
      name: this.state.name,
      description: this.state.description,
      instructor: this.state.instructor,
      students: this.state.students
    };
    axios.post('http://localhost:4000/courses/create-course', courseObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', description: '', instructor: '', students: [] });
  }

  render() {
    return (
      <div>
        <h3>Create New Course</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Course Name: </label>
            <input type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeCourseName}
            />
          </div>
          <div className="form-group">
            <label>Course Description: </label>
            <textarea
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeCourseDescription}
            />
          </div>
          <div className="form-group">
            <label>Instructor: </label>
            <input type="text"
              className="form-control"
              value={this.state.instructor}
              onChange={this.onChangeInstructor}
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

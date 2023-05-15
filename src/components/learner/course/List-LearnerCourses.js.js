import React, { Component } from "react";
import axios from 'axios';

export default class CourseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/courses/')
      .then(res => {
        console.log("Response: ", res.data);
        this.setState({
          courses: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleRegister = (courseId) => {
    // make an API call to register the student for the course
    axios.post(`http://localhost:4000/courses/register/${courseId}`, { studentId: this.props.studentId })
      .then(res => {
        console.log("Registered successfully: ", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Description</th>
              <th>Register</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((course, i) => (
              <tr key={i}>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>
                  <button onClick={() => this.handleRegister(course._id)} className="btn btn-primary">Register</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

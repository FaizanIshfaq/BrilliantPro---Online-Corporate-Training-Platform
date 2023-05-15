import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CourseTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  deleteCourse() {
    axios.delete('http://localhost:4000/courses/delete-course/' + this.props.obj._id)
      .then(res => {
        console.log('Course successfully deleted!');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.courseCode}</td>
        <td>{this.props.obj.courseName}</td>
        <td>{this.props.obj.courseDescription}</td>
        <td>{this.props.obj.instructor}</td>
        <td>{this.props.obj.semester}</td>
        {/* <td>
          <Link to={'/admin/courses/edit-course/' + this.props.obj._id}>Edit</Link>
          <button onClick={this.deleteCourse}>Delete</button>
        </td> */}
      </tr>
    );
  }
}

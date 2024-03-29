import React,{ Component } from "react";
// import link
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CourseList extends Component
{

  constructor(props)
  {
    super(props)
    this.state = {
      courses: []
    };
  }

  componentDidMount()
  {
    axios.get('http://localhost:4000/courses/')
      .then(res =>
      {
        console.log("Response: ",res.data);
        this.setState({
          courses: res.data
        });
      })
      .catch((error) =>
      {
        console.log(error);
      })
  }

  render()
  {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over the courses and render a table row for each course */}
            {this.state.courses.map((course,i) => (
              <tr key={i}>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>{course.duration}</td>
                <td>
                  {console.log("Course: ",i)}
                  {/* Add buttons to edit and delete the course */}
                  <Link to={`/admin/courses/edit-course/${course._id}`}>
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div >
    );
  }
}

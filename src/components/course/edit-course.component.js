import React,{ Component } from "react";
import axios from 'axios';

export default class CreateCourse extends Component
{

  constructor(props)
  {
    super(props)

    // Setting up functions
    this.onChangeCourseName = this.onChangeCourseName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeInstructor = this.onChangeInstructor.bind(this);
    // bindAdd Student
    this.onAddStudent = this.onAddStudent.bind(this);
    this.onRemoveStudent = this.onRemoveStudent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // get id from url
    const segemnts = window.location.href.split('/');
    const courseId = segemnts[segemnts.length - 1];

    // Setting up state
    this.state = {
      name: '',
      description: '',
      instructor: '',
      _id: courseId,
      studentList: [],
      allStudentList: [],
    }
  }
  async loadCourseStudents(idsList)
  {
    idsList.map(async (id,i) =>
    {
      const res = await axios.get('http://localhost:4000/students/get-students/',{ idsList });
      console.log("Student : ",i," : ",res);
    });
  }
  loadAllStudente()
  {
    axios.get('http://localhost:4000/students/')
      .then(res =>
      {
        console.log("All Students",res)
        this.setState({ allStudentList: res.data });
      })
      .catch((error) =>
      {
        console.log(error);
      })
  }
  loadCourseData()
  {
    axios.get('http://localhost:4000/courses/edit-course/' + this.state._id)
      .then(res =>
      {
        console.log("res",res)

        this.setState({
          name: res.data.name,
          description: res.data.description,
          instructor: res.data.instructor,
        });
        this.loadCourseStudents(res.data.students);
      })
      .catch((error) =>
      {
        console.log(error);
      })
  }
  componentDidMount()
  {
    this.loadCourseData();
    this.loadAllStudente();

  }
  onAddStudent(event)
  {
    console.log("event Value",event.target.value);
    const student = this.state.allStudentList.filter((res) => res._id === event.target.value)[0];
    console.log("student",student);
    // set state 
    this.setState({
      studentList: [...this.state.studentList,student]
    });
    // remove the same element from allStudentList
    const allStudentList = this.state.allStudentList.filter((res) => res._id !== event.target.value);
    this.setState({ allStudentList: allStudentList });
  }
  onRemoveStudent(event)
  {
    console.log("event Value : ",event.target.value);

    // Find the student to remove from studentList
    const studentToRemove = this.state.studentList.filter((res) => res._id === event.target.value)[0];

    // Remove the student from studentList and update state
    const updatedStudentList = this.state.studentList.filter((res) => res._id !== event.target.value);
    this.setState({ studentList: updatedStudentList });

    // Add the student back to allStudentList and update state
    const updatedAllStudentList = [...this.state.allStudentList,studentToRemove];
    this.setState({ allStudentList: updatedAllStudentList });
  }
  onChangeCourseName(e)
  {
    this.setState({ name: e.target.value })
  }

  onChangeDescription(e)
  {
    this.setState({ description: e.target.value })
  }

  onChangeInstructor(e)
  {
    this.setState({ instructor: e.target.value })
  }

  onSubmit(e)
  {
    e.preventDefault()


    const courseObject = {
      _id: this.state._id,
      name: this.state.name,
      description: this.state.description,
      instructor: this.state.instructor,
      students: this.state.studentList.map((res) => res._id)
    };

    axios.put(`http://localhost:4000/courses/update-course/${this.state._id}`,courseObject)
      .then(res => console.log(res.data))
      .catch((error) =>
      {
        console.log(error);
      })
  }

  render()
  {
    return (
      <div>
        <h3>Create New Course</h3>
        <div className="form-group">
          <label>Name: </label>
          <input type="text"
            className="form-control"
            value={this.state.name}
            onChange={this.onChangeCourseName}
          />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text"
            className="form-control"
            value={this.state.description}
            onChange={this.onChangeDescription}
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
        <hr />
        <h3>Registered Student List</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Roll No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.studentList.map((res,i) => (
                <tr>
                  <td>{res.name}</td>
                  {
                    console.log("Refresh")
                  }
                  <td>{res.email}</td>
                  <td>{res.rollno}</td>
                  <td>
                    <button className="btn btn-error" value={res._id} onClick={this.onRemoveStudent} type="submit">Remove</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <hr />
        <h3>All Student List</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Roll No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.allStudentList && this.state.allStudentList.map((res,i) => (
                <tr>
                  <td>{res.name}</td>
                  <td>{res.email}</td>
                  <td>{res.rollno}</td>
                  <td>
                    <button className="btn btn-primary" value={res._id} onClick={this.onAddStudent} type="submit">Add</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.onSubmit} type="submit">Update Course</button>
        </div>
      </div>
    );
  }
}

import React,{ Component } from "react";
import axios from 'axios';
import StudentTableRow from './StudentTableRow';

export default class StudentList extends Component
{

  constructor(props)
  {
    super(props)
    this.state = {
      students: []
    };
  }

  componentDidMount()
  {
    axios.get('http://localhost:4000/students/')
      .then(res =>
      {
        this.setState({
          students: res.data
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
              <th>Name</th>
              <th>Email</th>
              <th>Roll No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((res,i) => (
              <StudentTableRow obj={res} key={i} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

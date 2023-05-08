import React,{ Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AssessmentList extends Component
{
  constructor(props)
  {
    super(props);
    this.state = { assessments: [] };
  }

  componentDidMount()
  {
    axios.get('http://localhost:4000/assessments/')
      .then(res =>
      {
        console.log("Response Data for Assessment : ",res.data)
        this.setState({ assessments: res.data });
      })
      .catch((error) =>
      {
        console.log(error);
      })
  }

  deleteAssessment(id)
  {
    axios.delete('http://localhost:4000/assessments/delete-assessment/' + id)
      .then(res => console.log(res.data))
      .catch((error) => alert("Error Occured While Deletion"));
    this.setState({
      assessments: this.state.assessments.filter(assessment => assessment._id !== id)
    })
  }

  render()
  {
    return (
      <div>
        <h3>Assessments List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Assessment Title</th>
              <th>Duration</th>
              <th>Passing %age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.assessments.map((assessment,i) =>
            {
              return (
                <tr key={i}>
                  <td>{assessment.name}</td>
                  <td>{assessment.durationInMinutes}</td>
                  <td>{assessment.passingPercentage}</td>
                  <td>
                    <Link to={"/admin/assessments/edit-assessment/" + assessment._id}>edit</Link> | <a href="#" onClick={() => { this.deleteAssessment(assessment._id) }}>delete</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

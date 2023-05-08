import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AssessmentTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteAssessment = this.deleteAssessment.bind(this);
  }

  deleteAssessment() {
    axios.delete('http://localhost:4000/assessments/delete-assessment/' + this.props.obj._id)
      .then(res => {
        console.log('Assessment successfully deleted!');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.assessmentCode}</td>
        <td>{this.props.obj.assessmentTitle}</td>
        <td>{this.props.obj.assessmentDescription}</td>
        <td>{this.props.obj.courseCode}</td>
        <td>
          <Link to={'/admin/assessments/edit-assessment/' + this.props.obj._id}>Edit</Link>
          <button onClick={this.deleteAssessment}>Delete</button>
        </td>
      </tr>
    );
  }
}

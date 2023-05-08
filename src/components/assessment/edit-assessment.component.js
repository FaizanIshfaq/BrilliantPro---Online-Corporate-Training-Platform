import React, { Component } from "react";
import axios from 'axios';

export default class EditAssessment extends Component {
  constructor(props) {
    super(props);

    // Set up functions
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeMaxScore = this.onChangeMaxScore.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Get id from URL
    const segments = window.location.href.split('/');
    const assessmentId = segments[segments.length - 1];

    // Set up state
    this.state = {
      name: "",
      description: "",
      maxScore: "",
      assessmentId: assessmentId,
    };
  }

  componentDidMount() {
    this.getAssessment();
  }

  getAssessment() {
    axios
      .get(`http://localhost:4000/assessments/${this.state.assessmentId}`)
      .then((res) => {
        const { name, description, maxScore } = res.data;
        this.setState({
          name: name,
          description: description,
          maxScore: maxScore,
        });
      })
      .catch((error) => console.log(error));
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeMaxScore(e) {
    this.setState({
      maxScore: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { name, description, maxScore } = this.state;

    const updatedAssessment = {
      name: name,
      description: description,
      maxScore: maxScore,
    };

    axios
      .put(`http://localhost:4000/assessments/${this.state.assessmentId}`, updatedAssessment)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      description: "",
      maxScore: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Edit Assessment</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Max Score: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.maxScore}
              onChange={this.onChangeMaxScore}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Assessment"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

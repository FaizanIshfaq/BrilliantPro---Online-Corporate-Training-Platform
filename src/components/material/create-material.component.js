import React, { Component } from "react";
import axios from 'axios';

export default class CreateMaterial extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    // this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
    //   course: ''
    };
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

//   onChangeCourse(e) {
//     this.setState({ course: e.target.value });
//   }

  onSubmit(e) {
    e.preventDefault();

    const materialObject = {
      name: this.state.name,
      description: this.state.description,
    //   course: this.state.course
    };

    axios.post('http://localhost:4000/materials/create-material', materialObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      description: '',
    //   course: ''
    });
  }

  render() {
    return (
      <div>
        <h3>Create New Material</h3>
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
            <textarea
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          {/* <div className="form-group">
            <label>Course: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.course}
              onChange={this.onChangeCourse}
            />
          </div> */}
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Create Material</button>
          </div>
        </form>
      </div>
    );
  }
}

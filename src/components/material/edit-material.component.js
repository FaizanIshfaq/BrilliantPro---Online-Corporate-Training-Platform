import React, { Component } from "react";
import axios from "axios";

export default class EditMaterial extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeMaterialName = this.onChangeMaterialName.bind(this);
    this.onChangeMaterialDescription = this.onChangeMaterialDescription.bind(
      this
    );
    this.onChangeMaterialFile = this.onChangeMaterialFile.bind(this);
    this.onChangeSelectedCourses = this.onChangeSelectedCourses.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Get id from URL
    const segments = window.location.href.split("/");
    const materialId = segments[segments.length - 1];

    // Setting up state
    this.state = {
      name: "",
      description: "",
      file: "",
      selectedCourses: [],
      _id: materialId,
      courses: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/materials/edit-material/" + this.state._id)
      .then((res) => {
        console.log("res", res);

        this.setState({
          name: res.data.name,
          description: res.data.description,
          selectedCourses: res.data.courses,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/courses/")
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            courses: res.data.map((course) => course),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeMaterialName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeMaterialDescription(e) {
    this.setState({ description: e.target.value });
  }

  onChangeMaterialFile(e) {
    this.setState({ file: e.target.files[0] });
  }

  onChangeSelectedCourses(e) {
    const options = e.target.options;
    const selectedCourses = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedCourses.push(options[i].value);
      }
    }
    this.setState({ selectedCourses });
  }

  onSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("description", this.state.description);
    formData.append("file", this.state.file);
    formData.append("courses", JSON.stringify(this.state.selectedCourses));

    axios
      .put(
        "http://localhost:4000/materials/update-material/" + this.state._id,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => console.log(res.data));

    this.setState({ name: "", description: "", file: "", selectedCourses: [] });
  }

  render() {
    return (
      <div>
        <h3>Edit Material</h3>
        {/* <form onSubmit={this.onSubmit}> */}
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value= {this.state.name}  
              onChange={this.onChangeMaterialName}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <textarea
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeMaterialDescription}
            />
          </div>
          <div className="form-group">
            <label>File: </label>
            <input
              type="file"
              className="form-control"
              onChange={this.onChangeMaterialFile}
            />
          </div>
          <div className="form-group">
            <label>Courses: </label>
            <select
              multiple
              className="form-control"
              value={this.state.selectedCourses}
              onChange={this.onChangeSelectedCourses}
            >
              {this.state.courses.map((course) => {
                return (
                  <option key={course._id} value={course._id}>
                    {course.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Edit Material"
              className="btn btn-primary"
            />
          </div>
        {/* </form> */}
      </div>
    );
  }
}



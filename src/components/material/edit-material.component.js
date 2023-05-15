import React,{ Component } from "react";
import axios from "axios";

export default class EditMaterial extends Component
{
  constructor(props)
  {
    super(props);

    // Setting up functions
    this.onChangeMaterialName = this.onChangeMaterialName.bind(this);
    this.onChangeMaterialDescription = this.onChangeMaterialDescription.bind(
      this
    );
    this.onChangeMaterialFile = this.onChangeMaterialFile.bind(this);
    this.onChangecourses = this.onChangecourses.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onAddCourse = this.onAddCourse.bind(this);
    this.onRemoveCourse = this.onRemoveCourse.bind(this);
    // Get id from URL
    const segments = window.location.href.split("/");
    const materialId = segments[segments.length - 1];
    this.allCourses = [];
    // Setting up state
    this.state = {
      _id: materialId,
      name: "No Data Loaded",
      description: "No Material Description Loaded",
      courses: [],
      allCourses: [],
    };
  }
  loadCourseData()
  {
    axios
      .get("http://localhost:4000/courses/")
      .then((res) =>
      {
        if (res.data.length > 0)
        {
          this.allCourses = res.data;
        }
      })
      .catch((error) =>
      {

        console.log(error);
      });
  }
  loadMaterialData()
  {
    axios
      .get("http://localhost:4000/materials/" + this.state._id)
      .then((res) =>
      {
        console.log("All Courses ",this.allCourses);
        const selectedCourses = [];
        const otherCourses = [];
        this.allCourses.forEach((course) =>
        {
          if (res.data.course.includes(course._id))
          {
            selectedCourses.push(course);
          }
          else
          {
            otherCourses.push(course);
          }
        });

        console.log("Selected Courses : ",selectedCourses);
        console.log("Other Courses : ",otherCourses);
        this.setState({
          name: res.data.name,
          description: res.data.description,
          courses: selectedCourses,
          allCourses: otherCourses,
        });

      })
      .catch((error) =>
      {
        console.log(error);
      });


  }
  componentDidMount()
  {
    this.loadCourseData();
    this.loadMaterialData();
  }

  onChangeMaterialName(e)
  {
    this.setState({ name: e.target.value });
  }

  onChangeMaterialDescription(e)
  {
    this.setState({ description: e.target.value });
  }

  onChangeMaterialFile(e)
  {
    this.setState({ file: e.target.files[0] });
  }

  onChangecourses(e)
  {
    const options = e.target.options;
    const courses = [];
    for (let i = 0; i < options.length; i++)
    {
      if (options[i].selected)
      {
        courses.push(options[i].value);
      }
    }
    this.setState({ courses });
  }
  onAddCourse(event)
  {
    const course = this.state.allCourses.filter((res) => res._id === event.target.value)[0];
    // set State
    this.setState({
      courses: [...this.state.courses,course]
    });
    const allCourses = this.state.allCourses.filter((res) => res._id !== event.target.value);
    this.setState({ allCourses: allCourses });
  }
  onRemoveCourse(event)
  {
    const course = this.state.courses.filter((res) => res._id === event.target.value)[0];
    // set State

    this.setState({
      allCourses: [...this.state.allCourses,course]
    });
    const courses = this.state.courses.filter((res) => res._id !== event.target.value);
    this.setState({ courses: courses });
  }
  onSubmit(e)
  {
    e.preventDefault();
    const coursesToSend = this.state.courses.map((res) => res._id);
    const dataToSend = {
      _id: this.state._id,
      name: this.state.name,
      description: this.state.description,
      course: coursesToSend
    };
    console.log("Data to send : ",dataToSend);
    axios
      .put("http://localhost:4000/materials/update-material/" + this.state._id,dataToSend,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => console.log(res.data));

    this.setState({ name: "",description: "",file: "",courses: [],allCourses: [] });
  }

  render()
  {
    return (
      <div>
        <h3>Edit Material</h3>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.name}
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

        <div className="file-input-container">
          <div className="form-group">
            <label htmlFor="pdfFile">PDF File: </label>
            <input
              type="file"
              className="form-control-file"
              id="pdfFile"
              accept="application/pdf"
              onChange={(e) => this.setState({ pdfFile: e.target.files[0] })}
            />
          </div>
        </div>

        <div className="file-input-container">
          <div className="form-group">
            <label htmlFor="pptxFile">PPTX File: </label>
            <input
              type="file"
              className="form-control-file"
              id="pptxFile"
              accept=".pptx"
              onChange={(e) => this.setState({ pptxFile: e.target.files[0] })}
            />
          </div>
        </div>

        <div className="file-input-container">
          <div className="form-group">
            <label htmlFor="mp4File">MP4 File: </label>
            <input
              type="file"
              className="form-control-file"
              id="mp4File"
              accept="video/mp4"
              onChange={(e) => this.setState({ mp4File: e.target.files[0] })}
            />
          </div>
        </div>


        <div className="form-group">
          {/* <label>File: </label>
          <input
            type="file"
            className="form-control"
            onChange={this.onChangeMaterialFile}
          /> */}
        </div>
        <div className="form-group">
          <label>Added Courses</label>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Teacher</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.courses.map((res,i) => (
                  <tr>
                    <td>{res.name}</td>
                    <td>{res.instructor}</td>
                    <td>{res.description}</td>
                    <td>
                      <button className="btn btn-error" value={res._id} onClick={this.onRemoveCourse} type="submit">Remove</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <hr />
        </div>
        <div className="form-group">
          <label>All Courses: </label>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Teacher</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.allCourses.map((res,i) => (
                  <tr>
                    <td>{res.name}</td>
                    {
                      console.log("Refresh")
                    }
                    <td>{res.instructor}</td>
                    <td>{res.description}</td>
                    <td>
                      <button className="btn btn-primary" value={res._id} onClick={this.onAddCourse} type="submit">Add</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.onSubmit}> Edit Material</button>
        </div>
      </div>
    );
  }
}



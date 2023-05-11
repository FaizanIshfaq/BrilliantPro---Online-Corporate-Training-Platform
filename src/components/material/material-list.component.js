import React,{ Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class MaterialList extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      materials: []
    };
  }

  componentDidMount()
  {
    axios.get('http://localhost:4000/materials/')
      .then(res =>
      {
        console.log("Response: ",res.data);
        this.setState({
          materials: res.data
        });
      })
      .catch((error) =>
      {
        console.log(error);
      });
  }

  render()
  {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Material Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.materials.map((material,i) => (
              <tr key={i}>
                <td>{material.name}</td>
                <td>{material.description}</td>
                <td>
                  <Link to={`/admin/materials/edit-material/${material._id}`}>
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

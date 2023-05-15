import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class MaterialTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteMaterial = this.deleteMaterial.bind(this);
  }

  deleteMaterial() {
    axios.delete('http://localhost:4000/materials/delete-material/' + this.props.obj._id)
      .then(res => {
        console.log('Material successfully deleted!');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.description}</td>
        <td>{this.props.obj.author}</td>
        <td>
          <Link to={'/edit-material/' + this.props.obj._id}>Edit</Link>
          <button onClick={this.deleteMaterial}>Delete</button>
        </td>
      </tr>
    );
  }
}

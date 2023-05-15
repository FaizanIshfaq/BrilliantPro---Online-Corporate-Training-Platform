import React from 'react';
import { Routes, Link } from 'react-router-dom';
// import CreateMaterial from '../material/create-material.component';

function ManageMaterials() {
  return (
    <div className="App">
      <header className="App-head bckgrd">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <Link to={'/learner/materials/create-material'} className="nav-link">
                Create Material
              </Link> */}
            </li>
            <li className="nav-item">
              <Link to={'/learner/materials/material-list'} className="nav-link">
                Material List
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        {/* <Route path="/admin/materials/create-material" element={<CreateMaterial />} /> */}
        {/* <Route path="/admin/materials/edit-material" element={<EditMaterial />} /> */}
        {/* <Route path="/admin/materials/material-list" element={<MaterialList />} /> */}
      </Routes>
    </div>
  );
}

export default ManageMaterials;

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateMaterial from '../material/create-material.component';

function ManageMaterials() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <Link to={'/admin/materials/create-material'} className="nav-link">
            Create Material
          </Link>

          <div className="nav">
            {/* <Link to={'/admin/materials/edit-material'} className="nav-link">
              Edit Material
            </Link> */}

            <Link to={'/admin/materials/material-list'} className="nav-link">
              Material List
            </Link>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/admin/materials/create-material" element={<CreateMaterial />} />
        {/* <Route path="/admin/materials/edit-material" element={<EditMaterial />} /> */}
        {/* <Route path="/admin/materials/material-list" element={<MaterialList />} /> */}
      </Routes>
    </div>
  );
}

export default ManageMaterials;

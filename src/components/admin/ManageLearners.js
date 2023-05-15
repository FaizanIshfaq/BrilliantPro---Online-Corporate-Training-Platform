import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateStudent from '../student/create-student.component';

function ManageLearners() {
  return (
    <div className="App">
      <header className="App-head bckgrd">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={'/admin/learners/create-student'} className="nav-link">
                Create Learner
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/learners/student-list'} className="nav-link">
                Learner List
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/admin/learners/create-student" element={<CreateStudent />} />
        {/* <Route path="/admin/learners/edit-student" element={<EditStudent />} /> */}
        {/* <Route path="/admin/learners/student-list" element={<StudentList />} /> */}
      </Routes>
    </div>
  );
}

export default ManageLearners;

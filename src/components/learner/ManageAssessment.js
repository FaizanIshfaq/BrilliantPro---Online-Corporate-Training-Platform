import React from 'react';
import { Routes,  Link } from 'react-router-dom';
// import CreateAssessment from '../assessment/create-assessment.component';

function ManageAssessment() {
  return (
    <div className="App">
      <header className="App-head bckgrd">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <Link to={'/learner/assessments/create-assessment'} className="nav-link">
                Create Assessment
              </Link> */}
            </li>
            <li className="nav-item">
              <Link to={'/learner/assessments/assessment-list'} className="nav-link">
              Assessment List
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
      {/* <Route path="/learner/assessments/create-assessment" element={<CreateAssessment />} /> */}
        {/* <Route path="/admin/learners/edit-student" element={<EditStudent />} /> */}
        {/* <Route path="/admin/learners/student-list" element={<StudentList />} /> */}
      </Routes>
    </div>
  );
}

export default ManageAssessment;


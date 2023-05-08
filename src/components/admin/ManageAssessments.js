import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateAssessment from '../assessment/create-assessment.component';
// import AssessmentList from '../assessment/assessment-list.component';

function ManageAssessment() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <Link to={'/admin/assessments/create-assessment'} className="nav-link">
            Create Assessment
          </Link>

          <div className="nav">
            <Link to={'/admin/assessments/assessment-list'} className="nav-link">
              Assessment List
            </Link>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/admin/assessments/create-assessment" element={<CreateAssessment />} />
        {/* <Route path="/admin/assessments/assessment-list" element={<AssessmentList />} /> */}
      </Routes>
    </div>
  );
}

export default ManageAssessment;

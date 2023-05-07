import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateStudent from '../student/create-student.component';

// import EditStudent from './components/EditStudent';
// import StudentList from './components/StudentList';
// import './App.css';

function ManageLearners() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <Link to={'/admin/learners/create-student'} className="nav-link">
          Create Learner
          </Link>

          <div className="nav">
            {/* <Link to={'/admin/learners/edit-student'} className="nav-link">
              Edit Learner
            </Link> */}

            <Link to={'/admin/learners/student-list'} className="nav-link">
              Learner List
            </Link>
          </div>
        </nav>
      </header>

      
    </div>
  );
}

export default ManageLearners;

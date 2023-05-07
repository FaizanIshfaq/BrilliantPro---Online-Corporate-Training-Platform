import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateCourse from '../course/create-course.component';

function ManageCourses() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <Link to={'/admin/courses/create-course'} className="nav-link">
            Create Course
          </Link>

          <div className="nav">
            {/* <Link to={'/admin/courses/edit-course'} className="nav-link">
              Edit Course
            </Link> */}

            <Link to={'/admin/courses/course-list'} className="nav-link">
              Course List
            </Link>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/admin/courses/create-course" element={<CreateCourse />} />
        {/* <Route path="/admin/courses/edit-course" element={<EditCourse />} /> */}
        {/* <Route path="/admin/courses/course-list" element={<CourseList />} /> */}
      </Routes>
    </div>
  );
}

export default ManageCourses;

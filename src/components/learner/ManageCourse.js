import React from 'react';
import { Routes,  Link } from 'react-router-dom';
// import CreateCourse from '../course/create-course.component';

function ManageCourses() {
  return (
    <div className="App">
      <header className="App-head bckgrd">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <Link to={'/learner/courses/register-course'} className="nav-link">
              Register Course
              </Link> */}
            </li>
            <li className="nav-item">
              <Link to={'/learner/courses/course-list'} className="nav-link">
              Course List
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
      {/* <Route path="/admin/courses/create-course" element={<CreateCourse />} /> */}
        {/* <Route path="/admin/learners/edit-student" element={<EditStudent />} /> */}
        {/* <Route path="/admin/learners/student-list" element={<StudentList />} /> */}
      </Routes>
    </div>
  );
}

export default ManageCourses;


// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import CreateCourse from '../course/create-course.component';

// function ManageCourses() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <nav className="nav">
//           <Link to={'/admin/courses/create-course'} className="nav-link">
//             Create Course
//           </Link>

//           <div className="nav">
//             {/* <Link to={'/admin/courses/edit-course'} className="nav-link">
//               Edit Course
//             </Link> */}

//             <Link to={'/admin/courses/course-list'} className="nav-link">
//               Course List
//             </Link>
//           </div>
//         </nav>
//       </header>

//       <Routes>
//         <Route path="/admin/courses/create-course" element={<CreateCourse />} />
//         {/* <Route path="/admin/courses/edit-course" element={<EditCourse />} /> */}
//         {/* <Route path="/admin/courses/course-list" element={<CourseList />} /> */}
//       </Routes>
//     </div>
//   );
// }

// export default ManageCourses;

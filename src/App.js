import React from 'react';
import { Routes,Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import CourseManagement from './components/CourseManagement';
import UserManagement from './components/UserManagement';
import LearnerDashboard from './components/LearnerDashboard';
import AdminDashboard from './components/AdminDashboard';
import ManageCourses from './components/admin/ManageCourses'; // Import the ManageCourses component
import ManageAssessments from './components/admin/ManageAssessments';
import ManageMaterials from './components/admin/ManageMaterials';
import ManageLearners from './components/admin/ManageLearners';

import CreateStudent from './components/student/create-student.component';
import EditStudent from './components/student/edit-student.component';
import StudentList from './components/student/student-list.component';

import CreateCourse from './components/course/create-course.component';
import EditCourse from './components/course/edit-course.component';
import CourseList from './components/course/course-list.component';



import 'bootstrap/dist/css/bootstrap.min.css'


import './App.css';

function App()
{
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Corporate LMS</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/courses" element={<CourseManagement />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/learner" element={<LearnerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/courses" element={<ManageCourses />} /> // Add this route
          <Route path="/admin/assessments" element={<ManageAssessments />} />
          <Route path="/admin/materials" element={<ManageMaterials />} />
          <Route path="/admin/learners" element={<ManageLearners />} />
          <Route path='/admin/learners/create-student' element={<CreateStudent />} />
          <Route path='/admin/learners/edit-student/:id' element={<EditStudent />} />
          <Route path='/admin/learners/student-list' element={<StudentList />} />
          <Route path='/admin/courses/create-course' element={<CreateCourse />} />
          <Route path='/admin/courses/edit-course/:id' element={<EditCourse />} />
          <Route path='/admin/courses/course-list' element={<CourseList />} />




        </Routes>
      </main>
      {/* <footer>
        <p>&copy; 2021 Corporate LMS</p>
      </footer> */}
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import CourseManagement from './components/CourseManagement';
import UserManagement from './components/UserManagement';
import LearnerDashboard from './components/LearnerDashboard';
import AdminDashboard from './components/AdminDashboard';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/register" component={RegistrationPage} />
      <Route path="/courses" component={CourseManagement} />
      <Route path="/users" component={UserManagement} />
      <Route path="/learner" component={LearnerDashboard} />
      <Route path="/admin" component={AdminDashboard} />
    </Switch>
  );
}

export default Routes;

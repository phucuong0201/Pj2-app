import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import '../node_modules/toastr/build/toastr.min.css';
import './index.css';

import App from './App';
import SingleUser from './components/User/SingleUser';
import UserGrid from './components/User/UserGrid';
import HomePage from './components/Home/HomePage';
import TopicPage from './components/Topic/TopicPage';
import AddUser from './components/User/AddUser';
import ListCVPage from './components/CV/ListCVPage';
import SingleCVPage from './components/CV/SingleCVPage';
import CompleteInternshipStudentPage from './components/InternshipStatistical/CompleteInternshipStudentPage';
import InterningStudentPage from './components/InternshipStatistical/InterningStudentPage';
import FailedStudentPage from './components/InternshipStatistical/FailedStudentPage';
import SingleStudentStatisticalPage from './components/InternshipStatistical/SingleStudentStatisticalPage';

import store, { history } from './store/store';
window.store = store;

const router = (
<Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="/users" component={UserGrid}></Route>
      <Route path="/user/:userId" component={SingleUser}></Route>
      <Route path="/add-user" component={AddUser}></Route>
      <Route path="/topics" component={TopicPage}></Route>
      <Route path="/listcv" component={ListCVPage}></Route>
      <Route path="/cv/:cvId" components={SingleCVPage}></Route>
      <Route path="/completedstudent" components={CompleteInternshipStudentPage}></Route>
      <Route path="/interning" components={InterningStudentPage}></Route>
      <Route path="/failedstudent" components={FailedStudentPage}></Route>
      <Route path="/student/:studentId" components={SingleStudentStatisticalPage}></Route>
    </Route>
  </Router>
</Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);

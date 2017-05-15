import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';
import topics from './topics';
import cvs from './cvs';
import groups from './groups';
import internshipstatisticals from './internshipstatisticals';
import interningstudents from './interningstudents';
import failedstudents from './failedstudents';

const rootReducer = combineReducers({users, topics, cvs, groups, internshipstatisticals, interningstudents, failedstudents, routing: routerReducer});

export default rootReducer;
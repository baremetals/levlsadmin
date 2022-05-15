import { combineReducers } from '@reduxjs/toolkit';
// import { readMessageReducer } from './message/reducers';
// import { readNotificationReducer } from './notification/reducers';
import adminReducer from 'app/features/admin';
import eventReducer from 'app/features/events';
import newsReducer from 'app/features/newsArticleSlice';
import resourceReducer from 'app/features/resources';
import apprenticeshipReducer from 'app/features/apprenticeships';
import internshipReducer from 'app/features/internships';
import grantReducer from 'app/features/grants';
import uIReducer from 'app/features/ui/uiSlice'
import ChangeLayoutMode from './themeLayout/reducers';
// import { userReducer } from './users/reducers';
import userReducer from 'app/features/users';
import { headerSearchReducer } from './headerSearch/reducers';

const rootReducers = combineReducers({
  headerSearchData: headerSearchReducer,
  // message: readMessageReducer,
  // notification: readNotificationReducer,
  users: userReducer,
  events: eventReducer,
  news: newsReducer,
  resources: resourceReducer,
  apprenticeships: apprenticeshipReducer,
  internships: internshipReducer,
  grants: grantReducer,
  admin: adminReducer,
  ui: uIReducer,
  ChangeLayoutMode,
});


export default rootReducers;

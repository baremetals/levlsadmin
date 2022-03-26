import { combineReducers } from '@reduxjs/toolkit';
import { readMessageReducer } from './message/reducers';
import { readNotificationReducer } from './notification/reducers';
import adminReducer from 'app/features/adminSlice';
import uIReducer from 'app/features/ui/uiSlice'
import ChangeLayoutMode from './themeLayout/reducers';
import { userReducer } from './users/reducers';
import { headerSearchReducer } from './headerSearch/reducers';

const rootReducers = combineReducers({
  headerSearchData: headerSearchReducer,
  // message: readMessageReducer,
  // notification: readNotificationReducer,
  // users: userReducer,
  admin: adminReducer,
  ui: uIReducer,
  ChangeLayoutMode,
});


export default rootReducers;

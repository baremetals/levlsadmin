import { all, fork } from 'redux-saga/effects';

import adminSagas from './handlers/handler.admin';
// import BlogPostSagas from './handlers/handler.blogPostData';
// import contestSagas from './handlers/handler.contestData';
// import eventSagas from './handlers/handler.eventData';
// import userDataSagas from './handlers/handler.userData';

export default function* rootSaga() {
  yield all([fork(adminSagas), 
    // fork(BlogPostSagas), fork(contestSagas), fork(eventSagas), fork(userDataSagas)
  ]);
}

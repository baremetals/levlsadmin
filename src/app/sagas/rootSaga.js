import { all, fork } from 'redux-saga/effects';

import adminSagas from './handlers/handler.admin';
import userSagas from './handlers/handler.users';
import newsArticleSagas from './handlers/handler.newsArticle';
// import contestSagas from './handlers/handler.contestData';
import eventSagas from './handlers/handler.event';
import resourceSagas from './handlers/handler.resource';
import apprenticeshipSagas from './handlers/handler.apprentice';
import internshipSagas from './handlers/handler.intern';
import fundingSagas from './handlers/handler.funding';

export default function* rootSaga() {
  yield all([
    fork(adminSagas), 
    fork(newsArticleSagas), 
    fork(resourceSagas),
    fork(apprenticeshipSagas),
    fork(internshipSagas),
    fork(fundingSagas),
    fork(eventSagas),
    fork(userSagas)
    // fork(contestSagas), 
  ]);
}

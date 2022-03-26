import { configureStore } from '@reduxjs/toolkit';

import rootReducers from './rootReducers';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from '../sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducers', () => {
    const newRootReducer = require('./rootReducers').default;
    store.replaceReducer(newRootReducer);
  });
}

sagaMiddleware.run(watcherSaga);

export default store;

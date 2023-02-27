// init redux

import { combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import {
  offlineMiddleware,
  suspendSaga,
  consumeActionMiddleware,
} from 'redux-offline-queue';

import rootReducer from './reducers';
import rootSaga from './sagas';

const middleware = [];

const sagaMiddleware = createSagaMiddleware();

middleware.push(offlineMiddleware())
middleware.push(suspendSaga(sagaMiddleware))
middleware.push(consumeActionMiddleware())

const store = createAppropriateStore(
  rootReducer,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;

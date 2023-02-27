import { call, put, takeEvery } from 'redux-saga/effects'
import api from '../../services/api';

import { markActionsOffline } from 'redux-offline-queue';

// export function* addRepository({ repositoryName }) {
//   const response = yield call(api.get, `/repos/${repositoryName}`);

//   yield put(RepositoriesActions.addRepositorySuccess(response.data));
// }

function* fetchResource(resource) {
  const { data } = yield call(api.fetch, resource)
  yield put(receiveData(data))
}

// "Worker" saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  yield put(fetchUserStarted())
  try {
    const user = yield call(userApi.getUserById, action.payload.userId)
    yield put(fetchUserSucceeded(user))
  } catch (err) {
    yield put(fetchUserFailed(err.message))
  }
}

// "Watcher" saga: starts fetchUser on each `USER_FETCH_REQUESTED` action
function* fetchUserWatcher() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser)
}

// Can use also use sagas for complex async workflows with "child tasks":
function* fetchAll() {
  const task1 = yield fork(fetchResource, 'users')
  const task2 = yield fork(fetchResource, 'comments')
  yield delay(1000)
}

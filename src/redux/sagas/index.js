import {
  all,
  spawn,
  takeEvery,
  takeLatest,
  call,
  select,
} from "redux-saga/effects";

import { addRepository } from "./repositories";

import { startWatchingNetworkConnectivity } from "./offline";

export default function* rootSaga() {
  yield all([
    spawn(startWatchingNetworkConnectivity),

    takeEvery(RepositoriesTypes.ADD_REPOSITORY_REQUEST, addRepository),
  ]);
}

//data sync
// api services

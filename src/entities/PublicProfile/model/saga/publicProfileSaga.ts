import { put, takeEvery } from 'redux-saga/effects';
import { clearPublicProfileAction } from '../actions/publicProfileActions';
import {
  setLoadingPublicProfileSlice,
  setClearPublicProfileSlice,
} from '../slice/publicProfileSlices';
import { errorHandlerForSaga } from '@/shared/lib/ErrorHandlerForSaga/ErrorHandlerForSaga';

function* workerClearPublicProfile() {
  try {
    yield put(setLoadingPublicProfileSlice(true));
    yield put(setClearPublicProfileSlice());
    yield put(setLoadingPublicProfileSlice(false));
  } catch (error) {
    yield put(setLoadingPublicProfileSlice(false));
    errorHandlerForSaga(error);
  }
}

export function* watcherClearPublicProfile() {
  yield takeEvery(
    clearPublicProfileAction.toString(),
    workerClearPublicProfile,
  );
}

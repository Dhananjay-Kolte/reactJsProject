import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import {
  getCookiesAcceptanceAction,
  setCookiesAcceptanceAction,
  ICookiesActon,
} from '../actions/actions';
import { setCookiesAcceptance } from '../slice/cookies';
import {
  getCookiesAcceptance,
  postCookiesAcceptance,
} from '@/shared/api/services/cookies';
import { errorHandlerForSaga } from '@/shared/lib/ErrorHandlerForSaga/ErrorHandlerForSaga';

function* workerGetCookiesAcceptance() {
  try {
    const response: IResponse<ICookiesActon> = yield getCookiesAcceptance();
    yield put(setCookiesAcceptance(response.data));
  } catch (error) {
    errorHandlerForSaga(error);
  }
}

export function* watcherGetCookiesAcceptance() {
  yield takeEvery(
    getCookiesAcceptanceAction.toString(),
    workerGetCookiesAcceptance,
  );
}

function* workerSetCookiesAcceptance({
  payload,
}: PayloadAction<ICookiesActon>) {
  try {
    const response: IResponse<ICookiesActon> = yield postCookiesAcceptance(
      payload,
    );
    yield put(setCookiesAcceptance(response.data));
  } catch (error) {
    errorHandlerForSaga(error);
  }
}

export function* watcherSetCookiesAcceptance() {
  yield takeEvery(
    setCookiesAcceptanceAction.toString(),
    workerSetCookiesAcceptance,
  );
}

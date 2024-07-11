import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import {
  authConfirmEmailAction,
  authSetProfileAction,
  feedBackAction,
} from '../actions/actions';
import { feedbackRequest, getConfirmEmailRequest } from '../services/auth';
import {
  setLoadingAuthSlice,
  setAuthSlice,
  setAuthProfileSlice,
  setAuthLogoutSlice,
  setIsVerifyEmailSlice,
} from '../slice/slice';
import { IFieldFeedbackAction, IUserLogin } from '../types/auth';
import { setViewResendEmailMyProfileSlice } from '@/entities/MyProfile';
import { errorHandlerForSaga } from '@/shared/lib/ErrorHandlerForSaga/ErrorHandlerForSaga';
import { showSnackbar } from '@/shared/ui/Snackbars/Snackbars';

function* workerAuthConfirmEmail({ payload }: PayloadAction<string>) {
  try {
    yield put(setLoadingAuthSlice(true));
    const response: IResponse<IUserLogin> = yield getConfirmEmailRequest(
      payload,
    );
    yield put(setViewResendEmailMyProfileSlice(false));
    yield put(setAuthProfileSlice(response.data));
    yield put(setAuthSlice(true));
    yield put(setIsVerifyEmailSlice(true));
    yield put(setLoadingAuthSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setAuthLogoutSlice());
    localStorage.clear();
    yield put(setLoadingAuthSlice(false));
  }
}

export function* watcherAuthConfirmEmail() {
  yield takeEvery(authConfirmEmailAction.toString(), workerAuthConfirmEmail);
}

function* workerAuthSetProfile({ payload }: PayloadAction<IUserLogin>) {
  try {
    yield put(setAuthProfileSlice(payload));
    if (payload.wallet) localStorage.setItem('wallet', payload.wallet);
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setAuthLogoutSlice());
    localStorage.clear();
    yield put(setLoadingAuthSlice(false));
  }
}

export function* watcherAuthSetProfile() {
  yield takeEvery(authSetProfileAction.toString(), workerAuthSetProfile);
}

function* workerFeedback({ payload }: PayloadAction<IFieldFeedbackAction>) {
  try {
    yield put(setLoadingAuthSlice(true));
    yield feedbackRequest(payload);
    showSnackbar('Your appeal has been accepted for consideration.', 'success');
    yield put(setLoadingAuthSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingAuthSlice(false));
  }
}

export function* watcherFeedback() {
  yield takeEvery(feedBackAction.toString(), workerFeedback);
}

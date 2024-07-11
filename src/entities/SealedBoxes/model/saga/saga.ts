import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import {
  getSealedBoxAction,
  getSealedBoxActivityAction,
  getSealedBoxListingsAction,
} from '../actions/actions';
import {
  setLoadingSlice,
  setSealedBoxSlice,
  setSealedBoxActivitySlice,
  setSealedBoxListingsSlice,
} from '../slice/slice';
import {
  getSealedBoxRequest,
  getSealedBoxActivityRequest,
  getSealedBoxListingsRequest,
} from '@/shared/api/services/sealedBoxes';
import { errorHandlerForSaga } from '@/shared/lib/ErrorHandlerForSaga/ErrorHandlerForSaga';

function* workerGetSealedBox({ payload }: PayloadAction<string>) {
  try {
    yield put(setLoadingSlice(true));
    const response: IResponse<SealedBox> = yield getSealedBoxRequest(payload);
    yield put(setSealedBoxSlice(response.data));
    yield put(setLoadingSlice(false));
  } catch (error) {
    errorHandlerForSaga(error);
    yield put(setLoadingSlice(false));
  }
}

export function* watcherGetSealedBox() {
  yield takeEvery(getSealedBoxAction.toString(), workerGetSealedBox);
}

function* workerGetSealedBoxActivity({ payload }: PayloadAction<string>) {
  try {
    const response: IResponse<BoxActivity[]> =
      yield getSealedBoxActivityRequest(payload);
    yield put(setSealedBoxActivitySlice(response.data));
  } catch (error) {
    errorHandlerForSaga(error);
  }
}

export function* watcherGetSealedBoxActivity() {
  yield takeEvery(
    getSealedBoxActivityAction.toString(),
    workerGetSealedBoxActivity,
  );
}

function* workerGetSealedBoxListings({ payload }: PayloadAction<string>) {
  try {
    const response: IResponse<BoxListing[]> = yield getSealedBoxListingsRequest(
      payload,
    );
    yield put(setSealedBoxListingsSlice(response.data));
  } catch (error) {
    errorHandlerForSaga(error);
  }
}

export function* watcherGetSealedBoxListings() {
  yield takeEvery(
    getSealedBoxListingsAction.toString(),
    workerGetSealedBoxListings,
  );
}
